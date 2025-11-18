'use client';

import { useEffect, useRef, useState } from 'react';
import { FlareLine } from '@/components/ui/flare-line';

const stats = [
  {
    value: 450,
    suffix: "+",
    label: "Brand stories crafted",
  },
  {
    value: 120,
    suffix: "%",
    label: "Avg. engagement uplift",
  },
  {
    value: 35,
    suffix: "",
    label: "Industries we've served",
  },
  {
    value: 9,
    suffix: "yrs",
    label: "Designing from Pondicherry",
  },
];

export function AnimatedStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            stats.forEach((stat, index) => {
              const duration = 2000;
              const steps = 60;
              const increment = stat.value / steps;
              let currentStep = 0;

              const timer = setInterval(() => {
                currentStep++;
                const newValue = Math.min(
                  Math.round(increment * currentStep),
                  stat.value
                );
                
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = newValue;
                  return newCounts;
                });

                if (currentStep >= steps) {
                  clearInterval(timer);
                }
              }, duration / steps);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={sectionRef} className="relative flex flex-1 flex-col justify-center gap-4 pt-6 lg:pt-0 lg:pl-8">
      <FlareLine orientation="vertical" className="absolute left-0 top-0 max-lg:hidden" />
      <FlareLine orientation="horizontal" className="absolute top-0 lg:hidden" />
      
      {stats.map((stat, index) => (
        <div 
          key={stat.label} 
          className="group relative overflow-hidden rounded-xl border border-orange-500/10 bg-gradient-to-br from-[#0A0A0A] to-[#1A0F0A] p-4 transition-all duration-300 hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]"
          style={{
            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
          }}
        >
          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="relative flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="font-display text-4xl font-bold tracking-tight text-orange-400 transition-all duration-300 group-hover:scale-110">
                {counts[index]}{stat.suffix}
              </div>
            </div>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
