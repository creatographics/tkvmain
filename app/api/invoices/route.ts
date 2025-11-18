import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id');
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const result = await query(`
      SELECT i.*, c.name as client_name, c.email as client_email
      FROM invoices i
      LEFT JOIN clients c ON i.client_id = c.id
      ORDER BY i.created_at DESC
    `);

    return NextResponse.json({ invoices: result.rows });
  } catch (error) {
    console.error('Get invoices error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id');
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { invoice_number, client_id, quotation_id, title, status, subtotal, tax_percentage, tax_amount, total, paid_amount, currency, due_date, payment_method, payment_date, notes } = body;

    const result = await query(
      `INSERT INTO invoices (invoice_number, client_id, quotation_id, title, status, subtotal, tax_percentage, tax_amount, total, paid_amount, currency, due_date, payment_method, payment_date, notes, created_by)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
       RETURNING *`,
      [invoice_number, client_id, quotation_id, title, status, subtotal, tax_percentage, tax_amount, total, paid_amount || 0, currency, due_date, payment_method, payment_date, notes, userId]
    );

    return NextResponse.json({ invoice: result.rows[0] });
  } catch (error) {
    console.error('Create invoice error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id');
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, status, paid_amount, payment_method, payment_date } = body;

    const result = await query(
      `UPDATE invoices 
       SET status = $1, paid_amount = $2, payment_method = $3, payment_date = $4, updated_at = NOW()
       WHERE id = $5
       RETURNING *`,
      [status, paid_amount, payment_method, payment_date, id]
    );

    return NextResponse.json({ invoice: result.rows[0] });
  } catch (error) {
    console.error('Update invoice error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id');
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    await query('DELETE FROM invoices WHERE id = $1', [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete invoice error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
