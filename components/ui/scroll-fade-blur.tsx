"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollFadeBlurProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollFadeBlur = ({ children, className }: ScrollFadeBlurProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the section has scrolled past the top
      // 0 = section is in view, 1 = section has scrolled past
      let progress = 0;
      
      if (rect.top < 0) {
        // Section is scrolling up past the viewport
        const scrolledDistance = Math.abs(rect.top);
        const sectionHeight = rect.height;
        progress = Math.min(scrolledDistance / (sectionHeight * 0.5), 1);
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = 1 - scrollProgress * 0.6; // Fade to 40% opacity
  const blur = scrollProgress * 8; // Blur up to 8px
  const scale = 1 - scrollProgress * 0.05; // Slight scale down

  return (
    <div
      ref={ref}
      className={cn("transition-all duration-300 ease-out", className)}
      style={{
        opacity,
        filter: `blur(${blur}px)`,
        transform: `scale(${scale})`,
      }}
    >
      {children}
    </div>
  );
};
