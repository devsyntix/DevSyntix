import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  gradient?: boolean;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  tag,
  gradient = true,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`space-y-1.5 sm:space-y-3.5 ${centered ? "text-center mx-auto" : ""}`}>
      {/* Apple iOS Tag Pill */}
      {tag && (
        <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-white/[0.05] border border-white/[0.12] backdrop-blur-xl ${centered ? "mx-auto" : ""}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#29d8ff] shadow-[0_0_8px_#29d8ff]" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase text-white/80">
            {tag}
          </span>
        </div>
      )}

      {/* Apple SF Pro Headline - Optimized line height and size for mobile */}
      <h2
        className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.035em] leading-[1.12] sm:leading-[1.08] ${
          gradient
            ? "bg-gradient-to-r from-white via-[#f5f5f7] to-[#86868b] bg-clip-text text-transparent"
            : "text-white"
        }`}
      >
        {title}
      </h2>

      {/* Apple Subheading - Compact on mobile */}
      {subtitle && (
        <p
          className={`text-xs sm:text-base md:text-lg text-[#86868b] leading-relaxed tracking-[-0.015em] font-normal px-2 ${
            centered ? "mx-auto max-w-xl sm:max-w-2xl" : "max-w-xl sm:max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
