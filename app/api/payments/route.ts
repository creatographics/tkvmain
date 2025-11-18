import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id') || 'dev-user';
    // Authentication disabled for development
    // if (!userId) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const result = await query(`
      SELECT p.*, i.invoice_number, c.name as client_name
      FROM payments p
      LEFT JOIN invoices i ON p.invoice_id = i.id
      LEFT JOIN clients c ON i.client_id = c.id
      ORDER BY p.payment_date DESC
    `);

    return NextResponse.json({ payments: result.rows });
  } catch (error) {
    console.error('Get payments error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id') || 'dev-user';
    // Authentication disabled for development
    // if (!userId) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const body = await request.json();
    const { invoice_id, amount, payment_method, payment_date, notes } = body;

    const result = await query(
      `INSERT INTO payments (invoice_id, amount, payment_method, payment_date, notes, created_by)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [invoice_id, amount, payment_method, payment_date, notes, userId]
    );

    // Update invoice paid amount
    await query(
      `UPDATE invoices 
       SET paid_amount = paid_amount + $1,
           status = CASE 
             WHEN paid_amount + $1 >= total THEN 'paid'
             ELSE 'partially_paid'
           END
       WHERE id = $2`,
      [amount, invoice_id]
    );

    return NextResponse.json({ payment: result.rows[0] });
  } catch (error) {
    console.error('Create payment error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
