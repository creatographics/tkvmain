import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      form_type,
      name,
      email,
      phone,
      company,
      subject,
      message,
      service_type,
      budget_range,
      timeline,
      additional_data = {},
    } = body;

    // Validation
    if (!form_type || !name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: form_type, name, email' },
        { status: 400 }
      );
    }

    // Get IP and User Agent
    const ip_address = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const user_agent = request.headers.get('user-agent') || 'unknown';
    const source_url = request.headers.get('referer') || 'unknown';

    // Insert form submission
    const result = await pool.query(
      `INSERT INTO form_submissions (
        form_type, name, email, phone, company, subject, message,
        service_type, budget_range, timeline, additional_data,
        ip_address, user_agent, source_url, status
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, 'new')
      RETURNING id, created_at`,
      [
        form_type,
        name,
        email,
        phone || null,
        company || null,
        subject || null,
        message || null,
        service_type || null,
        budget_range || null,
        timeline || null,
        JSON.stringify(additional_data),
        ip_address,
        user_agent,
        source_url,
      ]
    );

    const submission = result.rows[0];

    // Send email notification to admin
    try {
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/email/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: process.env.ADMIN_EMAIL || 'admin@tkvcreatographics.com',
          subject: `New ${form_type} Form Submission from ${name}`,
          html: `
            <h2>New ${form_type.toUpperCase()} Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
            ${service_type ? `<p><strong>Service:</strong> ${service_type}</p>` : ''}
            ${budget_range ? `<p><strong>Budget:</strong> ${budget_range}</p>` : ''}
            ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
            <p><strong>Submitted at:</strong> ${new Date(submission.created_at).toLocaleString()}</p>
            <p><strong>Source:</strong> ${source_url}</p>
            <br>
            <p><a href="${process.env.NEXT_PUBLIC_APP_URL}/submissions">View in CRM</a></p>
          `,
        }),
      });

      // Log email notification
      await pool.query(
        `INSERT INTO email_notifications (
          notification_type, recipient_email, subject, body, status,
          related_entity_type, related_entity_id
        ) VALUES ($1, $2, $3, $4, 'sent', 'form_submission', $5)`,
        [
          'form_submission',
          process.env.ADMIN_EMAIL || 'admin@tkvcreatographics.com',
          `New ${form_type} Form Submission from ${name}`,
          `Form submission from ${name} (${email})`,
          submission.id,
        ]
      );
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Don't fail the request if email fails
    }

    // Send auto-response to user
    try {
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/email/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: email,
          subject: 'Thank you for contacting TKV Creatographics',
          html: `
            <h2>Thank you for reaching out!</h2>
            <p>Dear ${name},</p>
            <p>We have received your ${form_type} request and will get back to you within 24 hours.</p>
            <p>Our team is reviewing your message and will respond shortly.</p>
            <br>
            <p>Best regards,<br>TKV Creatographics Team</p>
          `,
        }),
      });
    } catch (emailError) {
      console.error('Failed to send auto-response:', emailError);
    }

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      submission_id: submission.id,
    });
  } catch (error: any) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form', details: error.message },
      { status: 500 }
    );
  }
}
