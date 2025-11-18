"use client";

import { useEffect, useState } from "react";

interface AnimatedCircularProgressBarProps {
  value: number;
  min?: number;
  max?: number;
  gaugePrimaryColor?: string;
  gaugeSecondaryColor?: string;
  className?: string;
}

export function AnimatedCircularProgressBar({
  value = 0,
  min = 0,
  max = 100,
  gaugePrimaryColor = "rgb(79 70 229)",
  gaugeSecondaryColor = "rgba(0, 0, 0, 0.1)",
  className = "",
}: AnimatedCircularProgressBarProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    setDisplayValue(value);
  }, [value]);

  const circumference = 2 * Math.PI * 45;
  const percentValue = ((displayValue - min) / (max - min)) * 100;
  const strokeDashoffset = circumference - (percentValue / 100) * circumference;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg className="size-40" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth="10"
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          style={{ stroke: gaugeSecondaryColor }}
        />
        {/* Progress circle */}
        <circle
          className="progress-ring__circle stroke-current"
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          style={{
            stroke: gaugePrimaryColor,
            strokeDasharray: circumference,
            strokeDashoffset,
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
            transition: "stroke-dashoffset 0.5s ease",
          }}
        />
      </svg>
      <span className="absolute text-2xl font-semibold">
        {Math.round(displayValue)}%
      </span>
    </div>
  );
}
