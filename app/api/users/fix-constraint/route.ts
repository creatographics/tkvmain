import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// Fix the role constraint to allow all role types
export async function POST(request: NextRequest) {
  try {
    // Drop the old constraint
    await query(`
      ALTER TABLE users DROP CONSTRAINT IF EXISTS users_role_check
    `);
    
    console.log('Dropped old constraint');

    // Add new constraint with all roles
    await query(`
      ALTER TABLE users ADD CONSTRAINT users_role_check 
      CHECK (role IN ('admin', 'manager', 'staff', 'client'))
    `);
    
    console.log('Added new constraint');

    // Verify the new constraint
    const verifyConstraint = await query(`
      SELECT 
        con.conname AS constraint_name,
        pg_get_constraintdef(con.oid) AS constraint_definition
      FROM pg_constraint con
      JOIN pg_class rel ON rel.oid = con.conrelid
      WHERE rel.relname = 'users'
      AND con.contype = 'c'
      AND con.conname LIKE '%role%'
    `);

    return NextResponse.json({
      success: true,
      message: 'Role constraint updated successfully',
      newConstraint: verifyConstraint.rows[0]
    });
  } catch (error: any) {
    console.error('Fix constraint error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: error.message,
        detail: error.detail
      },
      { status: 500 }
    );
  }
}
