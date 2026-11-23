"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcons";

interface TechItem {
  name: string;
  color: string;
  tag: string;
}

interface TechCategory {
  label: string;
  items: TechItem[];
}

const techStack: TechCategory[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", color: "#61DAFB", tag: "UI Framework" },
      { name: "Next.js", color: "#FFFFFF", tag: "Full-Stack React" },
      { name: "TypeScript", color: "#3178C6", tag: "Typed Architecture" },
      { name: "Angular", color: "#DD0031", tag: "Enterprise Client" },
      { name: "JavaScript", color: "#F7DF1E", tag: "Modern ESNext" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: ".NET Core", color: "#512BD4", tag: "Enterprise API" },
      { name: "Node.js", color: "#339933", tag: "Event Runtime" },
      { name: "Python", color: "#3776AB", tag: "AI & Microservices" },
      { name: "Java", color: "#ED8B00", tag: "Robust Distributed" },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", color: "#4169E1", tag: "Relational ACID" },
      { name: "SQL Server", color: "#CC2927", tag: "Enterprise Relational" },
      { name: "MongoDB", color: "#47A248", tag: "Document Store" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "Azure", color: "#0078D4", tag: "Enterprise Cloud" },
      { name: "AWS", color: "#FF9900", tag: "Scalable Infra" },
      { name: "Docker", color: "#2496ED", tag: "Containers" },
      { name: "GitHub Actions", color: "#FFFFFF", tag: "CI/CD Automation" },
      { name: "CI/CD Pipelines", color: "#29D8FF", tag: "Zero-Downtime Deploy" },
    ],
  },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="technologies" className="relative overflow-hidden bg-black px-3.5 sm:px-6 py-10 sm:py-20 md:py-32">
      {/* Ambient background blur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-[#0071e3]/10 blur-[90px] sm:blur-[150px] ambient-float"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-1/4 -z-10 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-[#af52de]/10 blur-[90px] sm:blur-[150px] ambient-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Technology Matrix"
          title="Modern Stack. Infinite Scale."
          subtitle="Battle-tested frameworks, cloud infrastructure, and modern toolchains powering custom software development and scalable SaaS applications."
        />

        {/* iOS 27 Segmented Control Tab Switcher */}
        <div className="mt-6 sm:mt-12 lg:mt-16 flex justify-center">
          <div className="inline-flex p-1 sm:p-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] max-w-full overflow-x-auto">
            {techStack.map((category, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={category.label}
                  onClick={() => setActiveTab(index)}
                  className={`ios-btn px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-sm font-semibold tracking-tight transition-all duration-300 ${
                    isActive
                      ? "text-white bg-white/[0.14] shadow-[0_4px_16px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.3)] border border-white/20"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Squircles - 2 Columns on Mobile */}
        <div className="mx-auto max-w-4xl mt-6 sm:mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-5">
            {techStack[activeTab].items.map((tech) => (
              <div
                key={tech.name}
                className="ios-glass-card p-3 sm:p-6 rounded-xl sm:rounded-[24px] relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Top specular highlight */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 sm:gap-3.5">
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white/[0.06] border border-white/12 flex items-center justify-center p-1.5 sm:p-2.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/[0.09] group-hover:border-white/25 shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex-shrink-0"
                      style={{
                        boxShadow: `0 0 20px ${tech.color}18`,
                      }}
                    >
                      <TechIcon name={tech.name} className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" />
                    </div>
                    <span className="text-xs sm:text-base font-semibold tracking-tight text-white group-hover:text-[#29d8ff] transition-colors leading-tight">
                      {tech.name}
                    </span>
                  </div>
                </div>

                <div className="mt-2.5 sm:mt-5 pt-2 sm:pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] sm:text-xs text-[#86868b]">
                  <span className="truncate pr-1">{tech.tag}</span>
                  <span className="font-mono text-[9px] sm:text-[10px] text-white/40 flex-shrink-0">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Stack Ecosystem Pills */}
        <div className="mt-8 sm:mt-16 pt-6 sm:pt-12 border-t border-white/[0.08] text-center">
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#86868b] block mb-3 sm:mb-6">
            Supported Enterprise Ecosystem
          </span>
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 max-w-4xl mx-auto">
            {[
              "React", "Next.js", "TypeScript", ".NET", "Python", "Node.js", 
              "PostgreSQL", "SQL Server", "MongoDB", "AWS", "Azure", "Docker", "CI/CD"
            ].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium text-white/80 bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:border-white/25 transition-all"
              >
                <TechIcon name={tech === ".NET" ? ".NET Core" : tech === "CI/CD" ? "CI/CD Pipelines" : tech} className="w-3.5 h-3.5" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
