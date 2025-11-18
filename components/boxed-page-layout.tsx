'use client';

import { ReactNode } from 'react';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

interface BoxedPageLayoutProps {
  children: ReactNode;
  includeFooter?: boolean;
}

export function BoxedPageLayout({ children, includeFooter = true }: BoxedPageLayoutProps) {
  return (
    <div className="min-h-screen py-8 px-4 md:px-8 lg:px-12 bg-white dark:bg-[#171210]">
      <div className="relative w-full max-w-[1400px] mx-auto">
        <div className="relative overflow-hidden rounded-[40px] border border-slate-200/60 dark:border-[#4A3A2E] bg-white dark:bg-[#221E1A]">
          <SiteHeader />
          {children}
          {includeFooter && <SiteFooter />}
        </div>
      </div>
    </div>
  );
}
