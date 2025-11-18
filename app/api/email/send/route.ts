import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { query } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { to, subject, html, text } = await request.json();

    // Get email settings from database
    const result = await query('SELECT * FROM email_settings LIMIT 1');
    const settings = result.rows[0];

    if (!settings) {
      return NextResponse.json(
        { success: false, error: 'Email settings not configured' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: settings.smtp_host,
      port: parseInt(settings.smtp_port),
      secure: settings.smtp_port === '465',
      auth: {
        user: settings.smtp_user,
        pass: settings.smtp_password,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"${settings.from_name}" <${settings.from_email}>`,
      to,
      subject,
      html,
      text: text || subject,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
