import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// Test endpoint to verify database connection
export async function GET(request: NextRequest) {
  try {
    // Test 1: Check database connection
    const testQuery = await query('SELECT NOW() as current_time');
    console.log('Database connection test:', testQuery.rows[0]);

    // Test 2: Check users table exists
    const tableCheck = await query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = 'users'
    `);
    
    // Test 3: Check users table structure
    const columnCheck = await query(`
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns
      WHERE table_name = 'users'
      ORDER BY ordinal_position
    `);

    // Test 4: Count existing users
    const userCount = await query('SELECT COUNT(*) as count FROM users');

    return NextResponse.json({
      success: true,
      tests: {
        databaseConnection: testQuery.rows[0],
        tableExists: tableCheck.rows.length > 0,
        tableStructure: columnCheck.rows,
        userCount: userCount.rows[0].count,
      }
    });
  } catch (error: any) {
    console.error('Database test error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: error.message,
        stack: error.stack
      },
      { status: 500 }
    );
  }
}
