import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const settings = await request.json();

    // Create transporter with provided settings
    const transporter = nodemailer.createTransport({
      host: settings.smtp_host,
      port: parseInt(settings.smtp_port),
      secure: settings.smtp_port === '465',
      auth: {
        user: settings.smtp_user,
        pass: settings.smtp_password,
      },
    });

    // Send test email
    await transporter.sendMail({
      from: `"${settings.from_name}" <${settings.from_email}>`,
      to: settings.smtp_user, // Send to self for testing
      subject: 'Test Email from TKV Creatographics CRM',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #f97316;">Email Configuration Test</h2>
          <p>Congratulations! Your email settings are configured correctly.</p>
          <p>You can now send automated notifications for:</p>
          <ul>
            <li>Invoice notifications</li>
            <li>Quotation notifications</li>
            <li>Service expiry reminders</li>
          </ul>
          <p style="color: #6b7280; font-size: 0.875rem; margin-top: 20px;">
            This is an automated test email from TKV Creatographics CRM.
          </p>
        </div>
      `,
      text: 'Email configuration test successful!',
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
