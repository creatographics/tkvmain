import { NextRequest, NextResponse } from 'next/server';
import { whatsappService } from '@/lib/whatsapp-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, ...params } = body;

    let result;
    switch (type) {
      case 'payment':
        result = await whatsappService.sendPaymentConfirmation(params);
        break;
      case 'invoice':
        result = await whatsappService.sendInvoice(params);
        break;
      case 'quotation':
        result = await whatsappService.sendQuotation(params);
        break;
      case 'reminder':
        result = await whatsappService.sendPaymentReminder(params);
        break;
      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
