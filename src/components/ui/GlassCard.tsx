"use client";

import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** CSS color value used for the hover glow, e.g. "rgba(59,130,246,0.5)" */
  glowColor?: string;
  /** Enable scale + glow border on hover */
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  glowColor = "rgba(139,92,246,0.45)",
  hoverEffect = false,
}: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition-all duration-300 ${
        hoverEffect
          ? "hover:scale-[1.02] hover:border-white/20"
          : ""
      } ${className}`}
      style={
        hoverEffect
          ? ({
              "--glow-color": glowColor,
            } as React.CSSProperties)
          : undefined
      }
      onMouseEnter={(e) => {
        if (!hoverEffect) return;
        const target = e.currentTarget;
        target.style.boxShadow = `0 0 24px 2px ${glowColor}, inset 0 0 24px 0 ${glowColor.replace(/[\d.]+\)$/, "0.08)")}`;
        target.style.borderColor = glowColor.replace(/[\d.]+\)$/, "0.35)");
      }}
      onMouseLeave={(e) => {
        if (!hoverEffect) return;
        const target = e.currentTarget;
        target.style.boxShadow = "";
        target.style.borderColor = "";
      }}
    >
      {children}
    </div>
  );
}
