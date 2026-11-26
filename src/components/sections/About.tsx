import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

interface Pillar {
  index: string;
  title: string;
  detail: string;
}

const pillars: Pillar[] = [
  {
    index: "01",
    title: "Full-cycle engineering",
    detail:
      "Specification, interface design, backend APIs, and cloud deployment handled by a unified team.",
  },
  {
    index: "02",
    title: "Multi-tenant SaaS",
    detail:
      "Role-based access control, isolated tenant data models, and subscription-ready system boundaries.",
  },
  {
    index: "03",
    title: "Modern core stack",
    detail:
      "Next.js and TypeScript frontends backed by .NET Core, Python, Node.js, and relational databases.",
  },
  {
    index: "04",
    title: "Direct collaboration",
    detail:
      "Work directly with the engineers scoping architecture, writing production code, and shipping updates.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0b0d14] border-t border-[#eef0f5]/[0.08] py-16 md:py-24 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="About DevSyntix"
          title="Engineering structured around your domain"
          subtitle="We build custom software, responsive web platforms, and SaaS systems designed for clear operation and long-term maintenance"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="surface-card p-6 rounded-[12px] flex flex-col justify-between gap-4"
            >
              <span className="text-[12px] font-mono tabular-nums text-[#7a8296]">
                {pillar.index}
              </span>
              <div className="space-y-2">
                <h3 className="text-[16px] font-medium text-[#eef0f5] leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-[14px] text-[#a3a9b8] leading-[1.55]">
                  {pillar.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
