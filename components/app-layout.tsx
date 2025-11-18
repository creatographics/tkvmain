'use client';

import { usePathname } from 'next/navigation';
import { CRMNavigation } from './layout/crm-navigation';
import { Footer } from './layout/footer';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = ['/login', '/signup', '/forgot-password', '/forgot-email', '/reset-password'].includes(pathname);
  const isErrorPage = pathname === '/unauthorized';
  const isClientPortal = pathname?.startsWith('/client-portal');
  const isHomePage = pathname === '/';
  const isWebsitePage = pathname === '/test-auth' || pathname === '/about' || pathname === '/contact' || pathname === '/quote' || pathname === '/services' || pathname?.startsWith('/services/') || pathname === '/blog' || pathname?.startsWith('/blog/') || pathname === '/privacy-policy' || pathname === '/terms-conditions' || pathname === '/cancellation-refund' || pathname === '/careers' || pathname === '/our-story' || pathname === '/portfolio' || pathname?.startsWith('/portfolio/');
  const isDashboardPage = pathname === '/dashboard';
  
  // Check for suspicious/invalid paths that should show 404 without layout
  const suspiciousPatterns = [
    '/wp-admin',
    '/phpmyadmin',
    '/.env',
    '/config',
    '/admin',
    '/.git',
    '/sql',
    '/database',
  ];
  
  // Exclude legitimate paths from suspicious check
  const isLegitimateBackupPath = pathname?.startsWith('/settings/backup');
  
  const isSuspiciousPath = !isLegitimateBackupPath && suspiciousPatterns.some((pattern) =>
    pathname?.toLowerCase().includes(pattern)
  );

  // Homepage with main website header only (footer is inside page content)
  if (isHomePage) {
    return (
      <div className="w-full min-h-screen overflow-auto bg-background">
        <SiteHeader />
        {children}
      </div>
    );
  }

  // Website pages with main website header and footer
  if (isWebsitePage) {
    return (
      <div className="w-full min-h-screen overflow-auto bg-background">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    );
  }

  // Don't show any layout on auth pages, error pages, client portal, or suspicious paths
  if (isAuthPage || isErrorPage || isSuspiciousPath || isClientPortal) {
    return (
      <div className="w-full h-screen overflow-auto bg-background">
        {children}
      </div>
    );
  }

  // CRM Dashboard and protected pages
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CRMNavigation />
      <main className="flex-1 pt-6 pb-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
