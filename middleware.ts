import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Routes that require authentication (CRM routes)
const protectedRoutes = [
  '/dashboard',
  '/crm',
  '/leads',
  '/clients',
  '/expenses',
  '/profile',
  '/invoices',
  '/payments',
  '/reports',
  '/quotations',
  '/notifications',
  '/settings',
  '/users',
  '/analytics',
  '/submissions',
  '/activity-log',
  '/client-dashboard',
  '/client-portal/dashboard',
  '/client-portal/profile',
  '/client-portal/billing',
  '/client-portal/notifications',
  '/client-portal/settings',
  '/client-portal/invoice',
];

// Routes that are public (website routes)
const publicRoutes = [
  '/', 
  '/home',
  '/homenew',
  '/login', 
  '/signup', 
  '/forgot-password', 
  '/forgot-email',
  '/reset-password',
  '/about',
  '/services',
  '/contact',
  '/works',
  '/quote',
  '/quotation',
  '/portfolio',
  '/blog',
  '/gallery',
  '/our-story',
  '/careers',
  '/privacy-policy',
  '/terms-conditions',
  '/cancellation-refund',
];

// Admin-only routes (for future use)
const adminRoutes = ['/admin', '/settings/users', '/settings/roles'];

// Suspicious paths that should be blocked
const suspiciousPaths = [
  '/wp-admin',
  '/phpmyadmin',
  '/.env',
  '/config.php',
  '/backup',
  '/.git',
  '/sql',
  '/database',
  '/admin.php',
  '/administrator',
  '/wp-login',
  '/xmlrpc.php',
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Block suspicious paths immediately
  if (suspiciousPaths.some((path) => pathname.toLowerCase().includes(path))) {
    console.warn(`🚨 Blocked suspicious path attempt: ${pathname} from IP: ${req.ip || 'unknown'}`);
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  // Check for authentication token in localStorage (via cookie or header)
  // Since we're using localStorage in the client, check for the session in a different way
  const token = req.cookies.get('tkv-session')?.value;

  // Protect CRM routes - redirect to login if not authenticated
  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
    const redirectUrl = new URL('/login', req.url);
    redirectUrl.searchParams.set('redirect', pathname);
    console.log(`🔒 Protected route accessed without auth: ${pathname} - Redirecting to login`);
    return NextResponse.redirect(redirectUrl);
  }

  // Redirect authenticated users away from login/signup pages
  if ((pathname === '/login' || pathname === '/signup') && token) {
    console.log(`✅ Authenticated user accessing ${pathname} - Redirecting to dashboard`);
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // Check admin routes (placeholder for future role-based access)
  if (adminRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    
    // TODO: Add role check here by decoding JWT token
    // For now, redirect to unauthorized
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  // Add security headers
  const response = NextResponse.next();
  
  // Allow framing for localhost/development (for browser preview)
  const host = req.headers.get('host') || '';
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  } else {
    response.headers.set('X-Frame-Options', 'DENY');
  }
  
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};
