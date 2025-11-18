'use client';

import Link from 'next/link';
import { Mail, Phone, Globe, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t border-border bg-card/95 backdrop-blur-sm z-40">
      <div className="max-w-[1400px] mx-auto px-6 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Company Info */}
          <div className="flex items-center gap-4 md:gap-6 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">TKV Creatographics</span>
            <div className="hidden md:block w-px h-3 bg-border" />
            <a href="mailto:support@tkvcreatographics.com" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Mail className="h-3 w-3 flex-shrink-0" />
              <span className="hidden sm:inline">support@tkvcreatographics.com</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Phone className="h-3 w-3 flex-shrink-0" />
              <span className="hidden sm:inline">+91 98765 43210</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>

          {/* Center: Links */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap justify-center">
            <Link href="/dashboard" className="hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <Link href="/terms-conditions" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <a 
              href="https://tkvcreatographics.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-0.5 hover:text-foreground transition-colors"
            >
              <Globe className="h-3 w-3" />
              Website
            </a>
          </div>

          {/* Right: Copyright */}
          <div className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
            © {currentYear}
            <Heart className="h-2.5 w-2.5 text-red-500 fill-red-500" />
            TKV
          </div>
        </div>
      </div>
    </footer>
  );
}
