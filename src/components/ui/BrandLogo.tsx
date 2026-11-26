import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showWordmark?: boolean;
}

export default function BrandLogo({
  className = "",
  size = "md",
  showWordmark = true,
}: BrandLogoProps) {
  const iconDimensions = {
    sm: { width: 30, height: 30, wordmarkHeight: 14 },
    md: { width: 36, height: 36, wordmarkHeight: 17 },
    lg: { width: 44, height: 44, wordmarkHeight: 22 },
    xl: { width: 54, height: 54, wordmarkHeight: 28 },
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* iOS 27 Squircle 3D Emblem Container */}
      <div
        className="relative flex items-center justify-center rounded-[14px] bg-white/[0.06] backdrop-blur-2xl p-1.5 border border-white/20 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.4),0_8px_20px_rgba(0,0,0,0.6)] transition-all duration-300 group-hover:scale-105"
        style={{ width: iconDimensions.width, height: iconDimensions.height }}
      >
        {/* Specular corner glint */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <Image
          src="/brand/logo.png"
          alt="DevSyntix — Custom Software Development and SaaS Solutions"
          width={iconDimensions.width * 2}
          height={iconDimensions.height * 2}
          className="w-full h-full object-contain drop-shadow-[0_2px_10px_rgba(41,216,255,0.5)]"
          priority
        />
      </div>

      {/* Official DEVSYNTIX 3D Wordmark with Electric Blue Accent */}
      {showWordmark && (
        <div className="flex items-center">
          <Image
            src="/brand/wordmark-white.png"
            alt="DevSyntix — Software Development & SaaS Solutions"
            width={790}
            height={101}
            style={{ height: `${iconDimensions.wordmarkHeight}px`, width: "auto" }}
            className="object-contain filter drop-shadow-[0_2px_10px_rgba(0,114,255,0.35)] transition-transform duration-200 group-hover:brightness-110"
            priority
          />
        </div>
      )}
    </div>
  );
}
