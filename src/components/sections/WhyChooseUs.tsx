import React from "react";
import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";

const commitments = [
  { label: "Source ownership", value: "100% client IP transfer" },
  { label: "API architecture", value: "Typed REST & GraphQL" },
  { label: "Release workflow", value: "Automated CI/CD" },
  { label: "Support window", value: "Mon–Sat direct team" },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="bg-[#0b0d14] border-t border-[#eef0f5]/[0.08] px-4 sm:px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Approach"
          title="Built for maintainability from day one"
          subtitle="Clear system boundaries, readable codebases, and predictable delivery milestones"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {siteConfig.whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            const number = String(index + 1).padStart(2, "0");

            return (
              <div
                key={item.title}
                className="surface-card p-6 rounded-[12px] flex flex-col justify-between gap-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-mono tabular-nums text-[#7a8296]">
                    {number}
                  </span>
                  <div className="w-8 h-8 rounded-[6px] bg-[#1a1e28] border border-[#eef0f5]/[0.08] flex items-center justify-center text-[#a3a9b8]">
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-[16px] font-medium text-[#eef0f5] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-[1.55] text-[#a3a9b8]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Commitments Ledger */}
        <div className="mt-8 rounded-[12px] bg-[#07080d] border border-[#eef0f5]/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#eef0f5]/[0.08]">
          {commitments.map((item) => (
            <div key={item.label} className="p-5 space-y-1">
              <div className="text-[12px] text-[#7a8296]">{item.label}</div>
              <div className="text-[15px] font-medium text-[#eef0f5] tabular-nums">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
