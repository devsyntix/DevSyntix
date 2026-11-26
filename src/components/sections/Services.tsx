import React from "react";
import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#0b0d14] border-t border-[#eef0f5]/[0.08] px-4 sm:px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Capabilities"
          title="Custom software & SaaS services"
          subtitle="End-to-end product engineering across web applications, multi-tenant SaaS platforms, mobile apps, and cloud infrastructure"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {siteConfig.services.map((service, index) => {
            const Icon = service.icon;
            const itemNumber = String(index + 1).padStart(2, "0");

            return (
              <div
                key={service.title}
                className="surface-card p-5 rounded-[12px] flex flex-col justify-between gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-[6px] bg-[#1a1e28] border border-[#eef0f5]/[0.08] flex items-center justify-center text-[#a3a9b8]">
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <span className="text-[12px] font-mono tabular-nums text-[#7a8296]">
                    {itemNumber}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-[15px] font-medium text-[#eef0f5] leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[14px] leading-[1.55] text-[#a3a9b8]">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
