import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import crypto from 'crypto';

function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { id } = params;

    // If password is provided, update it; otherwise, keep the existing one
    let result;
    if (body.password && body.password.trim() !== '') {
      const passwordHash = hashPassword(body.password);
      result = await query(
        `UPDATE users 
         SET full_name = $1, email = $2, role = $3, password_hash = $4, updated_at = NOW()
         WHERE id = $5
         RETURNING id, full_name, email, role, created_at, updated_at`,
        [
          body.name,
          body.email,
          body.role,
          passwordHash,
          id,
        ]
      );
    } else {
      result = await query(
        `UPDATE users 
         SET full_name = $1, email = $2, role = $3, updated_at = NOW()
         WHERE id = $4
         RETURNING id, full_name, email, role, created_at, updated_at`,
        [
          body.name,
          body.email,
          body.role,
          id,
        ]
      );
    }

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const user = result.rows[0];
    
    return NextResponse.json({
      id: user.id,
      name: user.full_name,
      email: user.email,
      phone: '',
      role: user.role,
      status: 'active',
      createdAt: user.created_at,
      lastLogin: user.updated_at,
    });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const result = await query(
      'DELETE FROM users WHERE id = $1 RETURNING id',
      [id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
