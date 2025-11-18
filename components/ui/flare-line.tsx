'use client';

import { cn } from "@/lib/utils";

interface FlareLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export const FlareLine = ({
  orientation = "horizontal",
  className,
}: FlareLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className,
      )}
    >
      {/* Base gradient line */}
      <div
        className={cn(
          "absolute",
          isHorizontal
            ? "h-px w-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"
            : "h-full w-px bg-gradient-to-b from-transparent via-orange-500/40 to-transparent"
        )}
      />
      
      {/* Animated flare effect */}
      <div
        className={cn(
          "absolute animate-flare",
          isHorizontal
            ? "h-px w-32 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
            : "h-32 w-px bg-gradient-to-b from-transparent via-orange-400 to-transparent",
          isHorizontal ? "top-0 left-0" : "left-0 top-0"
        )}
        style={{
          filter: 'blur(2px)',
          boxShadow: isHorizontal 
            ? '0 0 20px rgba(251, 146, 60, 0.6)' 
            : '0 0 20px rgba(251, 146, 60, 0.6)'
        }}
      />
      
      <style jsx>{`
        @keyframes flare {
          0% {
            ${isHorizontal ? 'left: -128px' : 'top: -128px'};
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            ${isHorizontal ? 'left: 100%' : 'top: 100%'};
            opacity: 0;
          }
        }
        
        .animate-flare {
          animation: flare 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
