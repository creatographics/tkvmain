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
      SELECT q.*, c.name as client_name, c.email as client_email
      FROM quotations q
      LEFT JOIN clients c ON q.client_id = c.id
      ORDER BY q.created_at DESC
    `);

    return NextResponse.json({ quotations: result.rows });
  } catch (error) {
    console.error('Get quotations error:', error);
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
    const { quotation_number, client_id, title, status, subtotal, tax_percentage, tax_amount, total, currency, valid_until, notes } = body;

    const result = await query(
      `INSERT INTO quotations (quotation_number, client_id, title, status, subtotal, tax_percentage, tax_amount, total, currency, valid_until, notes, created_by)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
       RETURNING *`,
      [quotation_number, client_id, title, status, subtotal, tax_percentage, tax_amount, total, currency, valid_until, notes, userId]
    );

    return NextResponse.json({ quotation: result.rows[0] });
  } catch (error) {
    console.error('Create quotation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id') || 'dev-user';
    // Authentication disabled for development
    // if (!userId) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const body = await request.json();
    const { id, status } = body;

    const result = await query(
      `UPDATE quotations SET status = $1, updated_at = NOW() WHERE id = $2 RETURNING *`,
      [status, id]
    );

    return NextResponse.json({ quotation: result.rows[0] });
  } catch (error) {
    console.error('Update quotation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id') || 'dev-user';
    // Authentication disabled for development
    // if (!userId) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    await query('DELETE FROM quotations WHERE id = $1', [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete quotation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
