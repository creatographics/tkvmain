import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Try to get IP from various headers
  const forwarded = request.headers.get('x-forwarded-for');
  const real = request.headers.get('x-real-ip');
  const cfConnecting = request.headers.get('cf-connecting-ip');
  
  let ip = 
    cfConnecting || 
    (forwarded ? forwarded.split(',')[0] : null) || 
    real || 
    'Unknown';

  return NextResponse.json({ ip });
}
