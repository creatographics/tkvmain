import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// Check the role constraint on users table
export async function GET(request: NextRequest) {
  try {
    // Check constraint definition
    const constraintCheck = await query(`
      SELECT 
        con.conname AS constraint_name,
        pg_get_constraintdef(con.oid) AS constraint_definition
      FROM pg_constraint con
      JOIN pg_class rel ON rel.oid = con.conrelid
      JOIN pg_namespace nsp ON nsp.oid = rel.relnamespace
      WHERE rel.relname = 'users'
      AND con.contype = 'c'
      AND con.conname LIKE '%role%'
    `);

    return NextResponse.json({
      success: true,
      constraints: constraintCheck.rows
    });
  } catch (error: any) {
    console.error('Constraint check error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: error.message
      },
      { status: 500 }
    );
  }
}
