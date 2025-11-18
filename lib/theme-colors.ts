// Theme-aware color utility classes
// Use these classes instead of hardcoded colors for proper dark/light mode support

export const themeColors = {
  // Backgrounds
  bg: {
    primary: 'bg-background', // #FFFFFF (light) / #08090A (dark)
    card: 'bg-card', // #FFFFFF (light) / #0f0f0f (dark)
    muted: 'bg-muted', // #f5f5f5 (light) / #1a1a1a (dark)
    popover: 'bg-popover',
  },
  
  // Text colors
  text: {
    primary: 'text-foreground', // #08090A (light) / #fafafa (dark)
    muted: 'text-muted-foreground', // #6b6b6b (both)
    white: 'text-white dark:text-white', // Always white
    card: 'text-card-foreground',
  },
  
  // Borders
  border: {
    default: 'border-border', // #e5e5e5 (light) / #1f1f1f (dark)
    muted: 'border-muted',
  },
  
  // Accent colors (stay same in both modes)
  accent: {
    orange: 'text-orange-500',
    orangeBg: 'bg-orange-500',
    gradient: 'bg-gradient-to-r from-orange-500 to-red-500',
  },
};

// Common component class combinations
export const themeClasses = {
  card: 'bg-card text-card-foreground border-border',
  cardHover: 'hover:bg-muted transition-colors',
  input: 'bg-background border-border text-foreground',
  button: {
    primary: 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
    secondary: 'bg-card text-card-foreground border-border hover:bg-muted',
  },
};
