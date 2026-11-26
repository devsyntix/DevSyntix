import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  tag,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`space-y-3 ${centered ? "text-center mx-auto" : "text-left"}`}>
      {tag && (
        <p className="text-[13px] font-mono text-[#7a8296] tracking-[0.01em]">
          {tag}
        </p>
      )}

      <h2 className="text-[28px] sm:text-[36px] font-medium tracking-[-0.02em] leading-[1.15] text-[#eef0f5]">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-[15px] sm:text-[17px] text-[#a3a9b8] leading-[1.6] font-normal ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
