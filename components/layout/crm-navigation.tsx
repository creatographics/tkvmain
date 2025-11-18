'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Receipt, 
  DollarSign,
  TrendingUp,
  Settings,
  Search,
  Bell,
  ChevronDown,
  Menu,
  X,
  LogOut,
  UserCircle,
  CreditCard,
  BarChart3,
  Briefcase,
  Globe,
  UserPlus,
  Package,
  MessageSquare,
  Sun,
  Moon,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/lib/auth-context';
import { cn } from '@/lib/utils';

// Navigation structure with all CRM pages
const navigation = [
  {
    name: 'Main',
    icon: LayoutDashboard,
    items: [
      { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
      { name: 'Clients', href: '/clients', icon: Users },
      { name: 'Quotations', href: '/quotations', icon: FileText },
      { name: 'Invoices', href: '/invoices', icon: Receipt },
      { name: 'Users', href: '/users', icon: UserCircle },
      { name: 'Activity Log', href: '/activity-log', icon: Activity },
    ],
  },
  {
    name: 'Finance',
    icon: DollarSign,
    items: [
      { name: 'Expenses', href: '/expenses', icon: CreditCard },
      { name: 'Payments', href: '/payments', icon: DollarSign },
      { name: 'Reports', href: '/reports', icon: BarChart3 },
    ],
  },
  {
    name: 'Business',
    icon: Briefcase,
    items: [
      { name: 'Analytics', href: '/analytics', icon: TrendingUp },
      { name: 'Leads', href: '/leads', icon: UserPlus },
      { name: 'SEO Manager', href: '/seo', icon: Globe },
      { name: 'Submissions', href: '/submissions', icon: MessageSquare },
    ],
  },
];

export function CRMNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Get user initials
  const userInitials = user?.user_metadata?.full_name
    ?.split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'U';

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(savedTheme);
      document.documentElement.style.colorScheme = savedTheme;
    }
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    document.documentElement.style.colorScheme = newTheme;
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6">
          <nav className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center flex-shrink-0">
              <Image 
                src="/images/CGlogo.png"
                alt="TKV Creatographics" 
                width={40}
                height={40}
                className="rounded-lg transition-transform hover:scale-105"
                priority
              />
            </Link>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              {/* Search Dropdown */}
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-lg hover:bg-muted"
                  >
                    <Search className="h-4 w-4 text-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80 bg-card border-border" sideOffset={8}>
                  <div className="p-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search clients, invoices, quotations..."
                        className="w-full pl-9 pr-3 py-2 bg-muted/50 border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="mt-3 text-xs text-muted-foreground text-center">
                      Press <kbd className="px-1.5 py-0.5 bg-muted border border-border rounded text-foreground">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-muted border border-border rounded text-foreground">K</kbd> for quick search
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-lg hover:bg-muted"
                onClick={toggleTheme}
                title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? (
                  <Moon className="h-4 w-4 text-foreground" />
                ) : (
                  <Sun className="h-4 w-4 text-foreground" />
                )}
              </Button>

              {/* User Profile Dropdown */}
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-9 w-9 rounded-lg hover:bg-muted"
                  >
                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-xs font-medium">
                      {userInitials}
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-card border-border" sideOffset={8}>
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium text-foreground">{user?.user_metadata?.full_name || 'User'}</p>
                      <p className="text-xs text-muted-foreground">{user?.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="cursor-pointer">
                      <UserCircle className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-red-500">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Hamburger Menu */}
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-lg hover:bg-muted"
                  >
                    <Menu className="h-5 w-5 text-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-72 max-h-[calc(100vh-5rem)] overflow-y-auto bg-card border-border" sideOffset={8}>
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    
                    // Dropdown menu items
                    if (item.items) {
                      return (
                        <div key={item.name} className="mb-2">
                          <DropdownMenuLabel className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70 px-3 py-2 bg-muted/30">
                            <Icon className="h-3 w-3" />
                            {item.name}
                          </DropdownMenuLabel>
                          <div className="py-1">
                            {item.items.map((subItem) => {
                              const SubIcon = subItem.icon;
                              const isActive = pathname === subItem.href;
                              
                              return (
                                <DropdownMenuItem key={subItem.name} asChild className="mx-2">
                                  <Link
                                    href={subItem.href}
                                    className={cn(
                                      'dropdown-link flex items-center gap-2.5 cursor-pointer px-3 py-2 text-sm rounded-md transition-all',
                                      isActive 
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium' 
                                        : 'hover:bg-muted/50'
                                    )}
                                  >
                                    <SubIcon className="h-4 w-4" />
                                    <span>{subItem.name}</span>
                                  </Link>
                                </DropdownMenuItem>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }

                    return null;
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16" />
    </>
  );
}
