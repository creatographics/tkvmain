import { NextRequest, NextResponse } from 'next/server';

// GET - Fetch domains for a client
export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id');

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // TODO: Replace with actual database query
    // const domains = await db.domains.findMany({
    //   where: { user_id: userId }
    // });

    // Mock data for now
    const domains = [
      {
        id: '1',
        user_id: userId,
        domain_name: 'yourcompany.com',
        status: 'active',
        registration_date: '2024-01-01',
        expiry_date: '2025-01-01',
        auto_renew: true,
        registrar: 'GoDaddy',
        access_with: 'admin'
      }
    ];

    return NextResponse.json({ domains });
  } catch (error) {
    console.error('Error fetching domains:', error);
    return NextResponse.json(
      { error: 'Failed to fetch domains' },
      { status: 500 }
    );
  }
}
