export function GridBackground() {
  return (
    <div 
      aria-hidden="true" 
      className="absolute inset-0 pointer-events-none"
      style={{
        '--line-bg': '#f6f6f6',
        '--line-color': '#e5e6e6'
      } as React.CSSProperties}
    >
      <div className="relative w-full h-full">
        {/* Horizontal grid lines */}
        <div 
          className="absolute top-0 left-0 right-0 h-px opacity-50"
          style={{
            background: 'var(--line-color)'
          }}
        />
        
        {/* Vertical grid lines */}
        <div className="absolute inset-0 grid grid-cols-12 gap-0">
          {Array.from({ length: 13 }).map((_, i) => (
            <div
              key={i}
              className="relative h-full"
            >
              <div 
                className="absolute left-0 top-0 bottom-0 w-px opacity-30"
                style={{
                  background: 'var(--line-color)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
