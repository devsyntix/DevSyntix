"use client";

import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

const deliverySpecs = [
  {
    index: "01",
    area: "Web & SaaS apps",
    stack: "Next.js, React, TypeScript",
    note: "Multi-tenant",
  },
  {
    index: "02",
    area: "Backend & APIs",
    stack: ".NET Core, Python, Node.js",
    note: "REST & GraphQL",
  },
  {
    index: "03",
    area: "Data modeling",
    stack: "PostgreSQL, SQL Server, MongoDB",
    note: "Indexed schemas",
  },
  {
    index: "04",
    area: "Cloud & CI/CD",
    stack: "AWS, Azure, Docker, GitHub Actions",
    note: "Automated builds",
  },
];

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="bg-[#0b0d14] pt-28 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Engineering Copy */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-[13px] font-mono text-[#7a8296] tracking-[0.01em]">
              Custom software &amp; SaaS engineering
            </p>

            <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-medium tracking-[-0.03em] leading-[1.06] text-[#eef0f5]">
              <span className="sr-only">
                DevSyntix — Custom Software Development &amp; Scalable SaaS Solutions.{" "}
              </span>
              Custom software built from architecture to launch
            </h1>

            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#a3a9b8] font-normal max-w-xl">
              DevSyntix designs and engineers bespoke web applications, mobile apps, and multi-tenant SaaS platforms for growing teams
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleScrollTo("contact")}
                className="btn-press inline-flex items-center justify-center gap-2 h-11 px-5 rounded-[8px] text-[14px] font-medium bg-[#eef0f5] text-[#0b0d14] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4da3ff]"
              >
                <span>Start a project</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo("services")}
                className="btn-press inline-flex items-center justify-center h-11 px-5 rounded-[8px] text-[14px] font-medium bg-[#1a1e28] text-[#eef0f5] border border-[#eef0f5]/[0.08] hover:border-[#eef0f5]/[0.18] hover:bg-[#212633] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4da3ff]"
              >
                Explore services
              </button>
            </div>
          </div>

          {/* Right Column: Engineering Workbench Blueprint */}
          <div className="lg:col-span-5">
            <div className="rounded-[16px] bg-[#11141c] border border-[#eef0f5]/[0.1] p-5 space-y-4">
              {/* Workbench Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#eef0f5]/[0.08]">
                <span className="text-[12px] font-mono text-[#a3a9b8]">
                  devsyntix / architecture-spec
                </span>
                <span className="text-[12px] font-mono text-[#4da3ff]">
                  Production stack
                </span>
              </div>

              {/* Specification Rows */}
              <div className="divide-y divide-[#eef0f5]/[0.06]">
                {deliverySpecs.map((spec) => (
                  <div
                    key={spec.index}
                    className="py-3 first:pt-1 last:pb-1 flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <span className="text-[12px] font-mono tabular-nums text-[#7a8296] pt-0.5 flex-shrink-0">
                        {spec.index}
                      </span>
                      <div className="min-w-0">
                        <div className="text-[14px] font-medium text-[#eef0f5] leading-snug">
                          {spec.area}
                        </div>
                        <div className="text-[13px] text-[#7a8296] truncate">
                          {spec.stack}
                        </div>
                      </div>
                    </div>
                    <span className="text-[12px] font-mono text-[#a3a9b8] flex-shrink-0 pt-0.5">
                      {spec.note}
                    </span>
                  </div>
                ))}
              </div>

              {/* Shipped Work Highlight Slot */}
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo("projects");
                }}
                className="btn-press block rounded-[10px] bg-[#07080d] border border-[#eef0f5]/[0.08] hover:border-[#eef0f5]/[0.16] p-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4da3ff]"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[12px] font-mono text-[#4cc38a]">
                    Latest shipped work
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#7a8296] group-hover:text-[#eef0f5] transition-colors duration-150" strokeWidth={1.5} />
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[14px] font-medium text-[#eef0f5]">
                    The Grand Estate
                  </span>
                  <span className="text-[12px] font-mono text-[#7a8296]">
                    React · Bangalore
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
