import './globals.css';
import type { Metadata } from 'next';
import { AuthProvider } from '@/lib/auth-context';
import { Toaster } from '@/components/ui/toaster';
import { AppLayout } from '@/components/app-layout';
import { ThemeProvider } from '@/components/theme-provider';
import { LiquidGlassFilter } from '@/components/liquid-glass-filter';
import { defaultMetadata, siteConfig } from '@/lib/seo-config';


export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: defaultMetadata.title,
  description: defaultMetadata.description,
  keywords: defaultMetadata.keywords,
  authors: defaultMetadata.authors,
  creator: defaultMetadata.creator,
  openGraph: defaultMetadata.openGraph,
  twitter: defaultMetadata.twitter,
  robots: defaultMetadata.robots,
  verification: defaultMetadata.verification,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="h-full bg-background font-['Schibsted_Grotesk',sans-serif] antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LiquidGlassFilter />
          <div
            className="pointer-events-none fixed inset-0 -z-10"
            aria-hidden
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
                backgroundSize: "100% 160px, 180px 100%",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 15%, rgba(0,0,0,0.7) 85%, transparent 100%)",
              }}
            />
          </div>
          <AuthProvider>
            <AppLayout>
              {children}
            </AppLayout>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
