export interface EmailSettings {
  smtp_host: string;
  smtp_port: string;
  smtp_user: string;
  smtp_password: string;
  from_email: string;
  from_name: string;
}

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export async function getEmailSettings(): Promise<EmailSettings | null> {
  try {
    // Email settings would be stored in environment variables or database
    // For now, return null - can be implemented later
    return null;
  } catch (err) {
    console.error('Error fetching email settings:', err);
    return null;
  }
}

export async function sendEmail(emailData: EmailData): Promise<boolean> {
  try {
    const response = await fetch('/api/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailData),
    });

    const result = await response.json();
    return result.success;
  } catch (err) {
    console.error('Error sending email:', err);
    return false;
  }
}

// Email Templates
export function generateInvoiceEmail(invoice: any, client: any): EmailData {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f97316 0%, #ef4444 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
        .invoice-details { background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
        .detail-label { font-weight: 600; color: #6b7280; }
        .detail-value { color: #111827; }
        .total { font-size: 1.25rem; font-weight: bold; color: #f97316; }
        .button { display: inline-block; background: linear-gradient(135deg, #f97316 0%, #ef4444 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 0.875rem; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Invoice from TKV Creatographics</h1>
          <p>Invoice #${invoice.invoice_number}</p>
        </div>
        <div class="content">
          <p>Dear ${client.name},</p>
          <p>Thank you for your business! Please find your invoice details below:</p>
          
          <div class="invoice-details">
            <div class="detail-row">
              <span class="detail-label">Invoice Number:</span>
              <span class="detail-value">${invoice.invoice_number}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Date:</span>
              <span class="detail-value">${new Date(invoice.created_at).toLocaleDateString()}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Due Date:</span>
              <span class="detail-value">${invoice.due_date ? new Date(invoice.due_date).toLocaleDateString() : 'N/A'}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Total Amount:</span>
              <span class="detail-value total">₹${invoice.total.toLocaleString()}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Status:</span>
              <span class="detail-value">${invoice.status}</span>
            </div>
          </div>

          <p>If you have any questions about this invoice, please don't hesitate to contact us.</p>
          
          <p>Best regards,<br>TKV Creatographics Team</p>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} TKV Creatographics. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return {
    to: client.email,
    subject: `Invoice #${invoice.invoice_number} from TKV Creatographics`,
    html,
    text: `Invoice #${invoice.invoice_number} - Total: ₹${invoice.total}`,
  };
}

export function generateQuotationEmail(quotation: any, client: any): EmailData {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f97316 0%, #ef4444 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
        .quotation-details { background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
        .detail-label { font-weight: 600; color: #6b7280; }
        .detail-value { color: #111827; }
        .total { font-size: 1.25rem; font-weight: bold; color: #f97316; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 0.875rem; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Quotation from TKV Creatographics</h1>
          <p>Quotation #${quotation.quotation_number}</p>
        </div>
        <div class="content">
          <p>Dear ${client.name},</p>
          <p>Thank you for your interest! Please find your quotation details below:</p>
          
          <div class="quotation-details">
            <div class="detail-row">
              <span class="detail-label">Quotation Number:</span>
              <span class="detail-value">${quotation.quotation_number}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Title:</span>
              <span class="detail-value">${quotation.title}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Date:</span>
              <span class="detail-value">${new Date(quotation.created_at).toLocaleDateString()}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Total Amount:</span>
              <span class="detail-value total">₹${quotation.total.toLocaleString()}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Status:</span>
              <span class="detail-value">${quotation.status}</span>
            </div>
          </div>

          <p>This quotation is valid for 30 days from the date of issue. Please review and let us know if you have any questions.</p>
          
          <p>Best regards,<br>TKV Creatographics Team</p>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} TKV Creatographics. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return {
    to: client.email,
    subject: `Quotation #${quotation.quotation_number} from TKV Creatographics`,
    html,
    text: `Quotation #${quotation.quotation_number} - Total: ₹${quotation.total}`,
  };
}

export function generateExpiryReminderEmail(service: any, client: any, daysLeft: number): EmailData {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f97316 0%, #ef4444 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
        .warning-box { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px; }
        .service-details { background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
        .detail-label { font-weight: 600; color: #6b7280; }
        .detail-value { color: #111827; }
        .urgent { color: #dc2626; font-weight: bold; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 0.875rem; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>⚠️ Service Expiry Reminder</h1>
        </div>
        <div class="content">
          <p>Dear ${client.name},</p>
          
          <div class="warning-box">
            <p class="urgent">Your service is expiring in ${daysLeft} days!</p>
          </div>

          <p>This is a friendly reminder that one of your services is about to expire:</p>
          
          <div class="service-details">
            <div class="detail-row">
              <span class="detail-label">Service:</span>
              <span class="detail-value">${service.description}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Invoice Number:</span>
              <span class="detail-value">${service.invoice_number}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Expiry Date:</span>
              <span class="detail-value urgent">${new Date(service.expiry_date).toLocaleDateString()}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Days Remaining:</span>
              <span class="detail-value urgent">${daysLeft} days</span>
            </div>
          </div>

          <p>To ensure uninterrupted service, please contact us to renew before the expiry date.</p>
          
          <p>Best regards,<br>TKV Creatographics Team</p>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} TKV Creatographics. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return {
    to: client.email,
    subject: `⚠️ Service Expiring in ${daysLeft} Days - ${service.description}`,
    html,
    text: `Your service "${service.description}" is expiring in ${daysLeft} days. Invoice: ${service.invoice_number}`,
  };
}
