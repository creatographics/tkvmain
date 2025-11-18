import { NextRequest, NextResponse } from 'next/server';

// POST - Create admin notification
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, client_email, services, plan_id, years, total_amount, user_id } = body;

    // TODO: Save notification to database
    // const notification = await db.adminNotifications.create({
    //   data: {
    //     type,
    //     client_email,
    //     data: JSON.stringify({ services, plan_id, years, total_amount }),
    //     user_id,
    //     status: 'unread',
    //     created_at: new Date()
    //   }
    // });

    // TODO: Send email notification to admin
    // await sendEmail({
    //   to: 'admin@tkvcreatographics.com',
    //   subject: getNotificationSubject(type),
    //   body: getNotificationBody(type, body)
    // });

    console.log('Admin notification created:', {
      type,
      client_email,
      services,
      plan_id,
      years,
      total_amount
    });

    return NextResponse.json({
      success: true,
      message: 'Notification sent to admin'
    });
  } catch (error) {
    console.error('Error creating admin notification:', error);
    return NextResponse.json(
      { error: 'Failed to create notification' },
      { status: 500 }
    );
  }
}

// GET - Fetch admin notifications
export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id');

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // TODO: Replace with actual database query
    // const notifications = await db.adminNotifications.findMany({
    //   where: { status: 'unread' },
    //   orderBy: { created_at: 'desc' }
    // });

    // Mock data for now
    const notifications = [
      {
        id: '1',
        type: 'renewal_request',
        client_email: 'client@example.com',
        message: 'Client requested hosting renewal for 2 years',
        created_at: new Date().toISOString(),
        status: 'unread'
      },
      {
        id: '2',
        type: 'service_expiring',
        client_email: 'client@example.com',
        message: 'Hosting plan "Business Pro" expires in 15 days',
        created_at: new Date().toISOString(),
        status: 'unread'
      }
    ];

    return NextResponse.json({ notifications });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch notifications' },
      { status: 500 }
    );
  }
}
