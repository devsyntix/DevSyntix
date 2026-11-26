import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
}

export default function BrandLogo({
  className = "",
  size = "md",
  showWordmark = true,
}: BrandLogoProps) {
  const dimensions = {
    sm: { icon: 24, wordmarkHeight: 15 },
    md: { icon: 28, wordmarkHeight: 17 },
    lg: { icon: 32, wordmarkHeight: 20 },
  }[size];

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/brand/logo.png"
        alt="DevSyntix mark"
        width={dimensions.icon * 2}
        height={dimensions.icon * 2}
        style={{ width: dimensions.icon, height: dimensions.icon }}
        className="object-contain flex-shrink-0"
        priority
      />
      {showWordmark && (
        <Image
          src="/brand/wordmark-white.png"
          alt="DevSyntix"
          width={790}
          height={101}
          style={{ height: `${dimensions.wordmarkHeight}px`, width: "auto" }}
          className="object-contain"
          priority
        />
      )}
    </span>
  );
}
