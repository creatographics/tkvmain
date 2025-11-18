import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface HighlighterProps {
  children: ReactNode;
  action?: "highlight" | "underline";
  color?: string;
  className?: string;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#FFF1DA",
  className,
}: HighlighterProps) {
  if (action === "underline") {
    return (
      <span className={cn("relative inline-flex font-semibold text-[#012A38] dark:text-white", className)}>
        <span className="relative z-10">{children}</span>
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 bottom-0 h-[6px] rounded-full"
          style={{ background: color, opacity: 0.9 }}
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-1.5 py-0.5 font-semibold",
        className
      )}
      style={{
        background: color,
        color: "#5F2C00",
      }}
    >
      {children}
    </span>
  );
}
