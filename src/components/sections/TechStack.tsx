import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcons";

interface TechItem {
  name: string;
  role: string;
}

interface TechCategory {
  label: string;
  items: TechItem[];
}

const techStack: TechCategory[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", role: "Component interfaces" },
      { name: "Next.js", role: "App Router & SSR" },
      { name: "TypeScript", role: "Typed client architecture" },
      { name: "Angular", role: "Enterprise web apps" },
      { name: "JavaScript", role: "Core runtime" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: ".NET Core", role: "Enterprise APIs" },
      { name: "Node.js", role: "Event-driven services" },
      { name: "Python", role: "Automation & microservices" },
      { name: "Java", role: "Distributed systems" },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", role: "Relational ACID store" },
      { name: "SQL Server", role: "Enterprise data layer" },
      { name: "MongoDB", role: "Document storage" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "Azure", role: "Managed cloud infra" },
      { name: "AWS", role: "Compute & storage" },
      { name: "Docker", role: "Container builds" },
      { name: "GitHub Actions", role: "CI/CD workflows" },
      { name: "CI/CD Pipelines", role: "Automated releases" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="technologies"
      className="bg-[#0b0d14] border-t border-[#eef0f5]/[0.08] px-4 sm:px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Technology stack"
          title="Tools we build with"
          subtitle="Proven frameworks, typed service boundaries, relational databases, and automated deployment infrastructure"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {techStack.map((category) => (
            <div
              key={category.label}
              className="rounded-[12px] bg-[#11141c] border border-[#eef0f5]/[0.08] overflow-hidden"
            >
              <div className="px-5 py-3.5 border-b border-[#eef0f5]/[0.08] bg-[#07080d]/60 flex items-center justify-between">
                <h3 className="text-[14px] font-medium text-[#eef0f5]">
                  {category.label}
                </h3>
                <span className="text-[12px] font-mono tabular-nums text-[#7a8296]">
                  {String(category.items.length).padStart(2, "0")} tools
                </span>
              </div>

              <div className="divide-y divide-[#eef0f5]/[0.06]">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="px-5 py-3 flex items-center justify-between gap-4 hover:bg-[#151923] transition-colors duration-150"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        <TechIcon name={tech.name} className="w-4 h-4" />
                      </div>
                      <span className="text-[14px] font-medium text-[#eef0f5] truncate">
                        {tech.name}
                      </span>
                    </div>
                    <span className="text-[13px] text-[#7a8296] text-right flex-shrink-0">
                      {tech.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
