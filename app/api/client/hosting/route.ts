import { NextRequest, NextResponse } from 'next/server';

// GET - Fetch hosting plans for a client
export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id');

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // TODO: Replace with actual database query
    // const hostingPlans = await db.hostingPlans.findMany({
    //   where: { user_id: userId }
    // });

    // Mock data for now
    const hostingPlans = [
      {
        id: '1',
        user_id: userId,
        plan_name: 'Business Hosting Pro',
        status: 'active',
        start_date: '2024-01-01',
        expiry_date: '2025-01-01',
        price: 8000,
        features: [
          '10GB SSD Storage',
          'Unlimited Bandwidth',
          'Free SSL Certificate',
          '24/7 Support',
          'Daily Backups'
        ]
      }
    ];

    return NextResponse.json({ hostingPlans });
  } catch (error) {
    console.error('Error fetching hosting plans:', error);
    return NextResponse.json(
      { error: 'Failed to fetch hosting plans' },
      { status: 500 }
    );
  }
}

// POST - Create renewal request
export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id');

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { plan_id, years, total_amount } = body;

    // TODO: Save renewal request to database
    // const renewalRequest = await db.renewalRequests.create({
    //   data: {
    //     user_id: userId,
    //     plan_id,
    //     years,
    //     total_amount,
    //     status: 'pending',
    //     created_at: new Date()
    //   }
    // });

    // TODO: Send notification to admin
    // await sendAdminNotification({
    //   type: 'renewal_request',
    //   user_id: userId,
    //   plan_id,
    //   years,
    //   total_amount
    // });

    return NextResponse.json({
      success: true,
      message: 'Renewal request submitted successfully'
    });
  } catch (error) {
    console.error('Error creating renewal request:', error);
    return NextResponse.json(
      { error: 'Failed to create renewal request' },
      { status: 500 }
    );
  }
}
