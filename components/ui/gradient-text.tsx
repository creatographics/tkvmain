import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'gradient' | 'highlight' | 'premium';
}

export function GradientText({ children, className, variant = 'highlight' }: GradientTextProps) {
  const variantClasses = {
    gradient: 'gradient-text',
    highlight: 'highlight',
    premium: 'gradient-text premium-text',
  };

  return (
    <span className={cn(variantClasses[variant], className)}>
      {children}
    </span>
  );
}
