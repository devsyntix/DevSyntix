"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";

const counterStats = [
  { label: "Uptime SLA", value: "99.99%" },
  { label: "Delivery Velocity", value: "3x" },
  { label: "Dedicated Support", value: "24/7" },
  { label: "Modern Toolsets", value: "50+" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-black px-3.5 sm:px-6 py-10 sm:py-20 md:py-32">
      {/* Background radial aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-[#af52de]/10 blur-[90px] sm:blur-[150px] ambient-float"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 -z-10 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-[#0071e3]/10 blur-[90px] sm:blur-[150px] ambient-float"
      />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Why DevSyntix"
          title="Engineered for Scalable Performance."
          subtitle="We deliver uncompromising quality, modern architecture, and custom software solutions that give growing businesses a strategic digital advantage."
        />

        {/* Features 2-Column on Mobile, 3-Column on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 lg:gap-6 mt-6 sm:mt-12 lg:mt-16">
          {siteConfig.whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            const number = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                className="ios-glass-card relative flex flex-col p-3.5 sm:p-6 lg:p-8 rounded-xl sm:rounded-[28px] overflow-hidden group"
              >
                {/* Top specular highlight */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div>
                  {/* Number & Icon Header */}
                  <div className="flex items-center justify-between mb-2 sm:mb-5">
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#86868b] bg-white/[0.05] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/10">
                      {number}
                    </span>
                    <div className="flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-2xl bg-white/[0.06] border border-white/15 text-[#af52de] shadow-inner group-hover:scale-105 transition-transform">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-lg lg:text-xl font-semibold tracking-tight text-white mb-1 sm:mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[10px] sm:text-sm leading-tight sm:leading-relaxed text-[#86868b] line-clamp-2 sm:line-clamp-none">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Apple iOS 27 Control Center Widget Metrics Bar */}
        <div className="mt-6 sm:mt-16 p-1.5 sm:p-2 rounded-2xl sm:rounded-[32px] ios-glass border border-white/15">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
            {counterStats.map((stat, index) => (
              <div
                key={index}
                className="p-3 sm:p-6 rounded-xl sm:rounded-[24px] bg-white/[0.03] hover:bg-white/[0.06] transition-colors text-center"
              >
                <div className="text-lg sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-semibold tracking-tight text-[#86868b] mt-0.5 sm:mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
