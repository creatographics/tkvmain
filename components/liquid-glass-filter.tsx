'use client';

export function LiquidGlassFilter() {
  return (
    <svg 
      className="liquid-glass-filter" 
      style={{ 
        position: 'fixed', 
        width: 0, 
        height: 0, 
        pointerEvents: 'none',
        visibility: 'hidden'
      }}
    >
      <defs>
        <filter id="liquidGlassFilter">
          <feTurbulence 
            type="turbulence" 
            baseFrequency="0.01" 
            numOctaves="2" 
            result="turbulence" 
          />
          <feDisplacementMap 
            in="SourceGraphic"
            in2="turbulence"    
            scale="200" 
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
        
        {/* Alternative smoother liquid effect */}
        <filter id="liquidGlassFilterSmooth">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.008" 
            numOctaves="3" 
            result="turbulence" 
          />
          <feDisplacementMap 
            in="SourceGraphic"
            in2="turbulence"    
            scale="150" 
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
        
        {/* Subtle liquid effect for buttons */}
        <filter id="liquidGlassFilterSubtle">
          <feTurbulence 
            type="turbulence" 
            baseFrequency="0.015" 
            numOctaves="1" 
            result="turbulence" 
          />
          <feDisplacementMap 
            in="SourceGraphic"
            in2="turbulence"    
            scale="100" 
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
      </defs>
    </svg>
  );
}
