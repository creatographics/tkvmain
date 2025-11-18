import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id');
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const form_type = searchParams.get('form_type');
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    let query = `
      SELECT 
        fs.*,
        u.full_name as assigned_to_name
      FROM form_submissions fs
      LEFT JOIN users u ON fs.assigned_to = u.id
      WHERE 1=1
    `;
    const params: any[] = [];
    let paramCount = 0;

    if (form_type) {
      paramCount++;
      query += ` AND fs.form_type = $${paramCount}`;
      params.push(form_type);
    }

    if (status) {
      paramCount++;
      query += ` AND fs.status = $${paramCount}`;
      params.push(status);
    }

    query += ` ORDER BY fs.created_at DESC`;
    
    paramCount++;
    query += ` LIMIT $${paramCount}`;
    params.push(limit);
    
    paramCount++;
    query += ` OFFSET $${paramCount}`;
    params.push(offset);

    const result = await pool.query(query, params);

    // Get total count
    let countQuery = 'SELECT COUNT(*) FROM form_submissions WHERE 1=1';
    const countParams: any[] = [];
    let countParamCount = 0;

    if (form_type) {
      countParamCount++;
      countQuery += ` AND form_type = $${countParamCount}`;
      countParams.push(form_type);
    }

    if (status) {
      countParamCount++;
      countQuery += ` AND status = $${countParamCount}`;
      countParams.push(status);
    }

    const countResult = await pool.query(countQuery, countParams);
    const total = parseInt(countResult.rows[0].count);

    return NextResponse.json({
      submissions: result.rows,
      total,
      limit,
      offset,
    });
  } catch (error: any) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch submissions', details: error.message },
      { status: 500 }
    );
  }
}
