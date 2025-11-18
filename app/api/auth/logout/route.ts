import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json();

    if (userId) {
      // Log activity
      await query(
        `INSERT INTO activity_logs (user_id, action, ip_address, user_agent, details)
         VALUES ($1, $2, $3, $4, $5)`,
        [
          userId,
          'logout',
          request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
          request.headers.get('user-agent') || 'unknown',
          JSON.stringify({ method: 'local_auth' })
        ]
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
