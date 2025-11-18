'use client';

import { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/layout/footer';

type SidebarContextType = {
  isCollapsed: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const value = useMemo(() => ({
    isCollapsed,
    toggleSidebar,
  }), [isCollapsed]);

  return (
    <SidebarContext.Provider value={value}>
      <div className="min-h-screen flex flex-col">
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}

type SidebarContentProps = {
  children: ReactNode;
  className?: string;
};

export function SidebarContent({ children, className }: SidebarContentProps) {
  const { isCollapsed } = useSidebar();
  
  return (
    <div 
      className={cn(
        'h-screen overflow-y-auto transition-all duration-300 ease-in-out',
        'min-w-0 bg-gray-50 flex flex-col',
        className
      )}
      style={{
        marginLeft: isCollapsed ? '80px' : '256px',
        width: `calc(100vw - ${isCollapsed ? '80px' : '256px'})`
      }}
    >
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}
