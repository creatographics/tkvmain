'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, TrendingUp, BookOpen, FileText, Star, Moon, Sun, Briefcase, User, ArrowRight } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [mounted, setMounted] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="site-header fixed top-4 md:top-12 left-0 right-0 z-40 px-5 transition-all duration-300">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-4">
          {/* Left Pill - Logo Only (Desktop) */}
          <div className="hidden md:block group relative">
            <Link href="/" aria-label="Go to homepage" className="flex items-center flex-shrink-0">
              <Image 
                src="/images/CGlogo.png" 
                alt="TKV Creatographics" 
                width={48} 
                height={48} 
                className="h-[40px] w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
            {/* Hover Tooltip */}
            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out pointer-events-none z-50">
              <div className="relative bg-white/95 dark:bg-black/95 border-y border-y-orange-500/10 border-r border-r-black/5 dark:border-r-white/5 px-3 py-1.5 whitespace-nowrap backdrop-blur-md shadow-[0_0_20px_rgba(249,115,22,0.15),0_8px_16px_rgba(0,0,0,0.1)]" style={{ borderRadius: '90px' }}>
                {/* Glow reflection flowing from left to right */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-orange-500/5 via-30% to-transparent pointer-events-none" style={{ borderRadius: '90px' }}></div>
                
                {/* Shine effect on left border where light hits - with pulse animation */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] pointer-events-none" style={{
                  background: 'linear-gradient(to bottom, rgba(251, 146, 60, 0.2) 0%, rgba(251, 146, 60, 0.9) 50%, rgba(251, 146, 60, 0.2) 100%)',
                  boxShadow: '0 0 8px rgba(249, 115, 22, 0.6), 0 0 12px rgba(249, 115, 22, 0.3)',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  borderRadius: '90px 0 0 90px',
                  clipPath: 'inset(0 0 0 0 round 90px 0 0 90px)'
                }}></div>
                
                {/* Shine traveling on top border (25%) - with glow animation */}
                <div className="absolute left-0 top-0 w-[25%] h-[1px] bg-gradient-to-r from-orange-300/90 via-orange-400/50 to-transparent pointer-events-none" style={{
                  boxShadow: '0 0 6px rgba(249, 115, 22, 0.5)',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  borderRadius: '90px 0 0 0'
                }}></div>
                
                {/* Shine traveling on bottom border (25%) - with glow animation */}
                <div className="absolute left-0 bottom-0 w-[25%] h-[1px] bg-gradient-to-r from-orange-300/90 via-orange-400/50 to-transparent pointer-events-none" style={{
                  boxShadow: '0 0 6px rgba(249, 115, 22, 0.5)',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  borderRadius: '0 0 0 90px'
                }}></div>
                
                {/* Noise texture overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  borderRadius: '90px'
                }}></div>
                
                {/* Grain texture */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grainFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='4' seed='3'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grainFilter)' opacity='0.7'/%3E%3C/svg%3E")`,
                  backgroundSize: '100px 100px',
                  borderRadius: '90px'
                }}></div>
                
                <p className="text-sm font-medium text-black dark:text-white relative z-10">
                  TKV Creatographics
                </p>
              </div>
            </div>
          </div>

          {/* Right Pill - Menu Button and Icons */}
          <div className={`pill-header hidden md:block ${isScrolled ? 'scrolled' : ''}`}>
            <div className="pill-header-inner glass-surface glass-surface--fallback flex items-center gap-1 px-3 h-[60px] text-slate-700 dark:text-white">
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="pill-button"
                aria-label="Toggle theme"
              >
                {!mounted ? (
                  <div className="w-5 h-5" />
                ) : theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button 
                onClick={() => {
                  if (user) {
                    router.push('/dashboard');
                  } else {
                    setLoginModalOpen(true);
                  }
                }}
                className="pill-button"
                aria-label={user ? 'Go to Dashboard' : 'Sign in'}
              >
                <User className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
                className="pill-button pill-menu-button text-sm"
                aria-label="Toggle menu"
              >
                {desktopMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="text-sm font-medium">Menu</span>
              </button>
            </div>

            {/* Desktop Menu Dropdown - Positioned relative to pill */}
            {desktopMenuOpen && (
              <div className="absolute right-0 top-[64px] w-[280px] rounded-2xl border border-black/5 bg-white/95 text-slate-900 shadow-[0_20px_40px_-20px_rgba(15,23,42,0.45)] animate-in slide-in-from-top-4 duration-200 max-h-[calc(100vh-104px)] overflow-y-auto z-50 dark:bg-slate-900 dark:text-white dark:border-white/10">
                <div className="rounded-2xl p-3 space-y-4">

                  {/* Single Column Layout */}
                  <div className="space-y-4">
                    {/* Pages & Support */}
                    <div className="border border-black/5 rounded-xl p-3 bg-white/90 dark:bg-slate-900/70 dark:border-white/10">
                      <h3 className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500 mb-2 px-1 dark:text-slate-300">Company</h3>
                      <div className="space-y-1 mb-3">
                        <Link href="/services" className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors dark:text-white dark:hover:bg-white/10" onClick={() => setDesktopMenuOpen(false)}>
                          <span>Services</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>

                        <Link href="/about" className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors dark:text-white dark:hover:bg-white/10" onClick={() => setDesktopMenuOpen(false)}>
                          <span>About</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>

                        <Link href="/portfolio" className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors dark:text-white dark:hover:bg-white/10" onClick={() => setDesktopMenuOpen(false)}>
                          <span>Portfolio</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>

                        <Link href="/blog" className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors dark:text-white dark:hover:bg-white/10" onClick={() => setDesktopMenuOpen(false)}>
                          <span>Blog</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>
                      </div>

                      <div className="border-t border-slate-200 dark:border-white/10 my-3"></div>

                      <h3 className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500 mb-2 px-1 dark:text-slate-300">Support</h3>
                      <div className="space-y-1 mb-3">
                        <Link href="/contact" className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors dark:text-white dark:hover:bg-white/10" onClick={() => setDesktopMenuOpen(false)}>
                          <span>Contact</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>

                        <Link href="/careers" className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors dark:text-white dark:hover:bg-white/10" onClick={() => setDesktopMenuOpen(false)}>
                          <span>Careers</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                        </Link>
                      </div>

                      <div className="border-t border-slate-200 dark:border-white/10 my-3"></div>

                      {/* Social Media Links */}
                      <div className="px-1">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500 mb-2 dark:text-slate-300">Follow Us</p>
                        <div className="flex flex-wrap items-center gap-2">
                          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors dark:text-slate-200 dark:hover:bg-white/10" aria-label="Facebook">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </a>
                          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors dark:text-slate-200 dark:hover:bg-white/10" aria-label="Instagram">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </a>
                          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors dark:text-slate-200 dark:hover:bg-white/10" aria-label="Twitter">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                          </a>
                          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors dark:text-slate-200 dark:hover:bg-white/10" aria-label="LinkedIn">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="px-3 mb-3">
                    <Link href="/quote" className="group relative flex items-center justify-center gap-2 py-2.5 px-4 rounded-[20px] overflow-hidden border border-transparent bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-sm hover:border-white/30 hover:shadow-[inset_1px_1px_2px_0_rgba(255,255,255,0.3),inset_-1px_-1px_2px_0_rgba(255,255,255,0.3),0_0_30px_rgba(255,100,0,0.3)] hover:scale-[1.02] transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]" onClick={() => setDesktopMenuOpen(false)} data-turbo="false">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Get Free Quote
                    </Link>
                  </div>

                  {/* Get in Touch Section */}
                  <div className="border-t border-border/50 pt-3 px-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-muted-foreground/70 mb-2">Get in Touch</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground/80">
                      <a href="mailto:admin@tkvcreatographics.com" className="flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50 transition-colors dark:border-white/10 dark:text-white/90 dark:hover:bg-white/10">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="truncate">admin@tkvcreatographics.com</span>
                      </a>
                      <a href="tel:+919629683501" className="flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50 transition-colors dark:border-white/10 dark:text-white/90 dark:hover:bg-white/10">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +91 96296 83501
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle - Full Width on Mobile */}
          <div className="md:hidden pill-header flex-1">
            <div className="pill-header-inner glass-surface glass-surface--fallback flex items-center justify-between gap-2 px-3 h-[60px] text-slate-700 dark:text-white">
              <Link href="/" aria-label="Go to homepage" className="flex items-center flex-shrink-0">
                <Image 
                  src="/images/CGlogo.png" 
                  alt="TKV Creatographics" 
                  width={48} 
                  height={48} 
                  className="h-[40px] w-auto" 
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(249, 115, 22, 0.4)) drop-shadow(0 0 40px rgba(249, 115, 22, 0.2)) drop-shadow(0 0 60px rgba(249, 115, 22, 0.1))'
                  }}
                  priority
                />
              </Link>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 hover:text-orange-500 transition-colors rounded-lg hover:bg-muted"
                  aria-label="Toggle theme"
                >
                  {!mounted ? (
                    <div className="w-5 h-5" />
                  ) : theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 text-foreground hover:text-orange-500 transition-colors"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  <span className="text-sm font-medium">Menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Menu Dropdown Backdrop */}
      {desktopMenuOpen && (
        <div className="fixed inset-0 z-30 hidden md:block">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setDesktopMenuOpen(false)}
          />
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="glass-dropdown absolute left-4 right-4 top-[88px] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] animate-in slide-in-from-top-4 duration-200 max-h-[calc(100vh-108px)] overflow-y-auto">
            <nav className="p-4 space-y-1">
              <Link 
                href="/services" 
                className="block px-4 py-3 rounded-lg hover:bg-muted transition-colors text-foreground font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>

              <Link 
                href="/portfolio" 
                className="block px-4 py-3 rounded-lg hover:bg-muted transition-colors text-foreground font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>

              {/* About Expandable */}
              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-muted transition-colors text-foreground font-medium"
                >
                  <span>About</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileAboutOpen && (
                  <div className="mt-1 ml-4 space-y-1 pb-2">
                    <Link href="/our-story" className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                      <Star className="w-4 h-4 text-orange-500" />
                      Our Story
                    </Link>
                    <Link href="/careers" className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                      <Briefcase className="w-4 h-4 text-orange-500" />
                      Careers
                    </Link>
                  </div>
                )}
              </div>

              {/* Blog Expandable */}
              <div>
                <button
                  onClick={() => setMobileBlogOpen(!mobileBlogOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-muted transition-colors text-foreground font-medium"
                >
                  <span>Blog</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileBlogOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileBlogOpen && (
                  <div className="mt-1 ml-4 space-y-1 pb-2">
                    <Link href="/blog" className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                      <TrendingUp className="w-4 h-4 text-orange-500" />
                      Design Trends
                    </Link>
                    <Link href="/blog" className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                      <FileText className="w-4 h-4 text-orange-500" />
                      Case Studies
                    </Link>
                    <div className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground opacity-60 cursor-not-allowed">
                      <BookOpen className="w-4 h-4 text-orange-500" />
                      <span>Tutorials</span>
                      <span className="px-2 py-0.5 bg-orange-500/20 text-orange-500 text-[10px] font-semibold rounded-full ml-auto">Coming Soon</span>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/contact" 
                className="block px-4 py-3 rounded-lg hover:bg-muted transition-colors text-foreground font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-3 mt-3 border-t border-border">
                <Link 
                  href="/quote" 
                  className="block px-4 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {loginModalOpen && !user && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLoginModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-md bg-background border border-border rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient Background Accent */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={() => setLoginModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="relative p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 mb-4 shadow-lg shadow-orange-500/30">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Welcome Back</h2>
                <p className="text-muted-foreground text-sm">Sign in to access your CRM dashboard</p>
              </div>

              {/* Description */}
              <div className="bg-muted/50 rounded-xl p-4 mb-6 border border-border">
                <p className="text-center text-sm text-muted-foreground leading-relaxed">
                  Manage your clients, track projects, and grow your business with our powerful CRM platform.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link href="/login" className="block">
                  <button
                    className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-200 hover:scale-[1.02]"
                    onClick={() => setLoginModalOpen(false)}
                  >
                    Go to Login Page
                  </button>
                </Link>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-background px-2 text-muted-foreground">or</span>
                  </div>
                </div>

                <Link href="/signup" className="block">
                  <button
                    className="w-full py-3 border-2 border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-all duration-200"
                    onClick={() => setLoginModalOpen(false)}
                  >
                    Create New Account
                  </button>
                </Link>
              </div>

              {/* Footer */}
              <p className="text-center text-xs text-muted-foreground mt-6">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
