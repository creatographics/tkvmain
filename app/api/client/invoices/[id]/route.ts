import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = request.headers.get('x-user-id');

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Fetch invoice with items
    const invoiceResult = await query(
      `SELECT i.*, c.name as client_name, c.email as client_email, c.company as client_company
       FROM invoices i
       LEFT JOIN clients c ON i.client_id = c.id
       WHERE i.id = $1`,
      [params.id]
    );

    if (invoiceResult.rows.length === 0) {
      return NextResponse.json({ error: 'Invoice not found' }, { status: 404 });
    }

    const invoice = invoiceResult.rows[0];

    // Fetch invoice items (if you have an invoice_items table)
    // For now, we'll create mock items from the invoice data
    const items = [
      {
        description: invoice.title || 'Service',
        quantity: 1,
        rate: invoice.subtotal || invoice.total,
        amount: invoice.subtotal || invoice.total
      }
    ];

    return NextResponse.json({
      invoice: {
        ...invoice,
        items
      }
    });
  } catch (error) {
    console.error('Error fetching invoice:', error);
    return NextResponse.json(
      { error: 'Failed to fetch invoice' },
      { status: 500 }
    );
  }
}
