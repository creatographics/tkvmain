import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import crypto from 'crypto';

function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id') || 'dev-user';

    const result = await query(`
      SELECT id, full_name, email, role, created_at, updated_at
      FROM users
      ORDER BY created_at DESC
    `);

    // Transform database fields to match frontend interface
    const transformedUsers = result.rows.map((user: any) => ({
      id: user.id,
      name: user.full_name,
      email: user.email,
      phone: '',
      role: user.role,
      status: 'active',
      createdAt: user.created_at,
      lastLogin: user.updated_at,
    }));

    return NextResponse.json(transformedUsers);
  } catch (error) {
    console.error('Error in users API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('Creating user with data:', body);

    // Validate required fields
    if (!body.name || !body.email || !body.password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    // Hash the password
    const passwordHash = hashPassword(body.password);

    const result = await query(
      `INSERT INTO users (full_name, email, role, password_hash, created_at, updated_at)
       VALUES ($1, $2, $3, $4, NOW(), NOW())
       RETURNING id, full_name, email, role, created_at, updated_at`,
      [
        body.name,
        body.email,
        body.role || 'staff',
        passwordHash,
      ]
    );

    if (!result.rows || result.rows.length === 0) {
      throw new Error('No user returned from database');
    }

    const user = result.rows[0];
    
    const response = {
      id: user.id,
      name: user.full_name,
      email: user.email,
      phone: '',
      role: user.role,
      status: 'active',
      createdAt: user.created_at,
      lastLogin: user.updated_at,
    };
    
    console.log('User created successfully:', response);
    
    return NextResponse.json(response);
  } catch (error: any) {
    console.error('Error in users POST API:', error);
    return NextResponse.json(
      { 
        error: 'Failed to create user',
        details: error.message || 'Internal server error'
      },
      { status: 500 }
    );
  }
}
