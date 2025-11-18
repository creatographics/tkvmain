import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// Test creating a user with detailed error reporting
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('Test create - Input data:', body);

    // Test the exact query that would be used
    const testQuery = `
      INSERT INTO users (full_name, email, role, created_at, updated_at)
      VALUES ($1, $2, $3, NOW(), NOW())
      RETURNING id, full_name, email, role, created_at, updated_at
    `;
    
    const params = [
      body.name || 'Test User',
      body.email || 'test@example.com',
      body.role || 'staff',
    ];

    console.log('Test create - Query:', testQuery);
    console.log('Test create - Params:', params);

    const result = await query(testQuery, params);

    console.log('Test create - Result:', result.rows[0]);

    return NextResponse.json({
      success: true,
      user: result.rows[0],
      message: 'User created successfully'
    });
  } catch (error: any) {
    console.error('Test create error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: error.message,
        code: error.code,
        detail: error.detail,
        hint: error.hint,
        stack: error.stack
      },
      { status: 500 }
    );
  }
}
