"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FlickeringGridProps {
  className?: string;
  squareSize?: number;
  gridGap?: number;
  color?: string;
  maxOpacity?: number;
  flickerChance?: number;
  height?: number;
  width?: number;
}

export function FlickeringGrid({
  className,
  squareSize = 4,
  gridGap = 6,
  color = "#6B7280",
  maxOpacity = 0.3,
  flickerChance = 0.1,
  height = 800,
  width = 800,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cols = Math.floor(width / (squareSize + gridGap));
    const rows = Math.floor(height / (squareSize + gridGap));

    const squares: { opacity: number; targetOpacity: number }[][] = [];
    for (let i = 0; i < rows; i++) {
      squares[i] = [];
      for (let j = 0; j < cols; j++) {
        squares[i][j] = {
          opacity: Math.random() * maxOpacity,
          targetOpacity: Math.random() * maxOpacity,
        };
      }
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const square = squares[i][j];

          // Smoothly transition to target opacity
          square.opacity += (square.targetOpacity - square.opacity) * 0.1;

          // Randomly change target opacity
          if (Math.random() < flickerChance) {
            square.targetOpacity = Math.random() * maxOpacity;
          }

          ctx.fillStyle = color;
          ctx.globalAlpha = square.opacity;
          ctx.fillRect(
            j * (squareSize + gridGap),
            i * (squareSize + gridGap),
            squareSize,
            squareSize
          );
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [squareSize, gridGap, color, maxOpacity, flickerChance, height, width]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={cn("pointer-events-none", className)}
    />
  );
}
