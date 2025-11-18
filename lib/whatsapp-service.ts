/**
 * WhatsApp Integration Service
 * Supports: Twilio, WATI.io, Interakt
 */

type WhatsAppProvider = 'twilio' | 'wati' | 'interakt';

interface WhatsAppConfig {
  provider: WhatsAppProvider;
  apiKey?: string;
  accountSid?: string;
  authToken?: string;
  businessPhoneNumber: string;
}

interface WhatsAppMessage {
  to: string;
  message: string;
  mediaUrl?: string;
}

class WhatsAppService {
  private config: WhatsAppConfig;

  constructor() {
    this.config = {
      provider: (process.env.NEXT_PUBLIC_WHATSAPP_PROVIDER as WhatsAppProvider) || 'twilio',
      apiKey: process.env.WHATSAPP_API_KEY,
      accountSid: process.env.TWILIO_ACCOUNT_SID,
      authToken: process.env.TWILIO_AUTH_TOKEN,
      businessPhoneNumber: process.env.WHATSAPP_BUSINESS_NUMBER || '',
    };
  }

  async sendMessage(params: WhatsAppMessage): Promise<{ success: boolean; messageId?: string; error?: string }> {
    try {
      switch (this.config.provider) {
        case 'twilio':
          return await this.sendViaTwilio(params);
        case 'wati':
          return await this.sendViaWati(params);
        case 'interakt':
          return await this.sendViaInterakt(params);
        default:
          throw new Error('Invalid WhatsApp provider');
      }
    } catch (error: any) {
      console.error('WhatsApp send error:', error);
      return { success: false, error: error.message };
    }
  }

  private async sendViaTwilio(params: WhatsAppMessage) {
    const url = `https://api.twilio.com/2010-04-01/Accounts/${this.config.accountSid}/Messages.json`;
    
    const body = new URLSearchParams({
      From: `whatsapp:${this.config.businessPhoneNumber}`,
      To: `whatsapp:${params.to}`,
      Body: params.message,
    });

    if (params.mediaUrl) {
      body.append('MediaUrl', params.mediaUrl);
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`${this.config.accountSid}:${this.config.authToken}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    const data = await response.json();
    
    if (response.ok) {
      return { success: true, messageId: data.sid };
    } else {
      throw new Error(data.message || 'Failed to send via Twilio');
    }
  }

  private async sendViaWati(params: WhatsAppMessage) {
    const url = 'https://live-server.wati.io/api/v1/sendSessionMessage';
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        whatsappNumber: params.to,
        message: params.message,
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      return { success: true, messageId: data.messageId };
    } else {
      throw new Error(data.message || 'Failed to send via WATI');
    }
  }

  private async sendViaInterakt(params: WhatsAppMessage) {
    const url = 'https://api.interakt.ai/v1/public/message/';
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${this.config.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        countryCode: params.to.substring(0, 3),
        phoneNumber: params.to.substring(3),
        type: 'Text',
        data: {
          message: params.message,
        },
      }),
    });

    const data = await response.json();
    
    if (response.ok) {
      return { success: true, messageId: data.result.messageId };
    } else {
      throw new Error(data.message || 'Failed to send via Interakt');
    }
  }

  async sendPaymentConfirmation(params: {
    clientName: string;
    clientPhone: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    paymentMethod: string;
  }) {
    const message = `Dear ${params.clientName},

✅ Payment Received!

We have successfully received your payment.

📄 Invoice: ${params.invoiceNumber}
💰 Amount: ${params.currency} ${params.amount.toFixed(2)}
💳 Method: ${params.paymentMethod}

Thank you for your business!

- TKV Creatographics`;

    return await this.sendMessage({
      to: params.clientPhone,
      message,
    });
  }

  async sendInvoice(params: {
    clientName: string;
    clientPhone: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    dueDate: string;
    pdfUrl?: string;
  }) {
    const message = `Dear ${params.clientName},

📄 New Invoice from TKV Creatographics

Invoice Number: ${params.invoiceNumber}
Amount: ${params.currency} ${params.amount.toFixed(2)}
Due Date: ${params.dueDate}

${params.pdfUrl ? 'Please find the invoice attached.' : 'You can view the invoice from our portal.'}

Thank you for your business!

- TKV Creatographics`;

    return await this.sendMessage({
      to: params.clientPhone,
      message,
      mediaUrl: params.pdfUrl,
    });
  }

  async sendQuotation(params: {
    clientName: string;
    clientPhone: string;
    quotationNumber: string;
    amount: number;
    currency: string;
    validUntil: string;
    pdfUrl?: string;
  }) {
    const message = `Dear ${params.clientName},

📋 Quotation from TKV Creatographics

Quotation Number: ${params.quotationNumber}
Amount: ${params.currency} ${params.amount.toFixed(2)}
Valid Until: ${params.validUntil}

${params.pdfUrl ? 'Please find the quotation attached.' : 'You can view the quotation from our portal.'}

We look forward to working with you!

- TKV Creatographics`;

    return await this.sendMessage({
      to: params.clientPhone,
      message,
      mediaUrl: params.pdfUrl,
    });
  }

  async sendPaymentReminder(params: {
    clientName: string;
    clientPhone: string;
    invoiceNumber: string;
    amount: number;
    currency: string;
    dueDate: string;
    daysOverdue?: number;
  }) {
    const isOverdue = params.daysOverdue && params.daysOverdue > 0;
    
    const message = `Dear ${params.clientName},

${isOverdue ? '⚠️ Payment Overdue Reminder' : '🔔 Payment Reminder'}

Invoice Number: ${params.invoiceNumber}
Amount Due: ${params.currency} ${params.amount.toFixed(2)}
${isOverdue ? `Overdue by: ${params.daysOverdue} days` : `Due Date: ${params.dueDate}`}

Please make the payment at your earliest convenience.

For any queries, please contact us.

- TKV Creatographics`;

    return await this.sendMessage({
      to: params.clientPhone,
      message,
    });
  }

  formatPhoneNumber(phone: string, defaultCountryCode: string = '+91'): string {
    let cleaned = phone.replace(/\D/g, '');
    
    if (!cleaned.startsWith(defaultCountryCode.replace('+', ''))) {
      cleaned = defaultCountryCode.replace('+', '') + cleaned;
    }
    
    return '+' + cleaned;
  }
}

export const whatsappService = new WhatsAppService();
