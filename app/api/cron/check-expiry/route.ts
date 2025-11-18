import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { sendEmail, generateExpiryReminderEmail } from '@/lib/email-service';

export async function GET(request: NextRequest) {
  try {
    // Verify cron secret for security (optional but recommended)
    const authHeader = request.headers.get('authorization');
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const today = new Date();
    const thirtyDaysFromNow = new Date(today);
    thirtyDaysFromNow.setDate(today.getDate() + 30);

    // Get all active services expiring within 30 days
    const result = await query(
      `SELECT 
        se.*,
        c.id as client_id_data,
        c.name as client_name,
        c.email as client_email,
        i.invoice_number
      FROM service_expiry se
      LEFT JOIN clients c ON se.client_id = c.id
      LEFT JOIN invoices i ON se.invoice_id = i.id
      WHERE se.is_active = true
        AND se.expiry_date >= $1
        AND se.expiry_date <= $2`,
      [today.toISOString().split('T')[0], thirtyDaysFromNow.toISOString().split('T')[0]]
    );

    const services = result.rows.map((row: any) => ({
      ...row,
      clients: row.client_name ? {
        id: row.client_id_data,
        name: row.client_name,
        email: row.client_email
      } : null,
      invoices: row.invoice_number ? {
        invoice_number: row.invoice_number
      } : null
    }));

    const results = {
      checked: services?.length || 0,
      reminders_sent: 0,
      errors: [] as string[],
    };

    for (const service of services || []) {
      const expiryDate = new Date(service.expiry_date);
      const daysUntilExpiry = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

      let shouldSendReminder = false;
      let reminderType = '';

      // Check if we should send 30-day reminder
      if (daysUntilExpiry <= 30 && daysUntilExpiry > 15 && !service.reminder_sent_30) {
        shouldSendReminder = true;
        reminderType = 'reminder_sent_30';
      }
      // Check if we should send 15-day reminder
      else if (daysUntilExpiry <= 15 && daysUntilExpiry > 7 && !service.reminder_sent_15) {
        shouldSendReminder = true;
        reminderType = 'reminder_sent_15';
      }
      // Check if we should send 7-day reminder
      else if (daysUntilExpiry <= 7 && daysUntilExpiry >= 0 && !service.reminder_sent_7) {
        shouldSendReminder = true;
        reminderType = 'reminder_sent_7';
      }

      if (shouldSendReminder && service.clients) {
        try {
          // Create notification in database
          await query(
            `INSERT INTO notifications (type, title, message, client_id, service_expiry_id, invoice_id)
             VALUES ($1, $2, $3, $4, $5, $6)`,
            [
              'expiry_reminder',
              `Service Expiring in ${daysUntilExpiry} Days`,
              `${service.service_name} will expire on ${new Date(service.expiry_date).toLocaleDateString()}`,
              service.client_id,
              service.id,
              service.invoice_id
            ]
          );

          // Send email notification
          const emailData = generateExpiryReminderEmail(
            {
              description: service.service_name,
              invoice_number: service.invoices?.invoice_number || 'N/A',
              expiry_date: service.expiry_date,
            },
            service.clients,
            daysUntilExpiry
          );

          const emailSent = await sendEmail(emailData);

          if (emailSent) {
            // Update reminder flag
            await query(
              `UPDATE service_expiry SET ${reminderType} = true WHERE id = $1`,
              [service.id]
            );

            // Update notification as sent
            await query(
              `UPDATE notifications 
               SET sent_via_email = true, email_sent_at = $1
               WHERE service_expiry_id = $2 
                 AND type = 'expiry_reminder' 
                 AND email_sent_at IS NULL`,
              [new Date().toISOString(), service.id]
            );

            results.reminders_sent++;
          }
        } catch (err: any) {
          results.errors.push(`Failed to send reminder for ${service.service_name}: ${err.message}`);
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Expiry check completed',
      results,
    });
  } catch (error: any) {
    console.error('Cron job error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
