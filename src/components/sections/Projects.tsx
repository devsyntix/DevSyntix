"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0b0d14] border-t border-[#eef0f5]/[0.08] px-4 sm:px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tag="Selected work"
          title="Recent production delivery"
          subtitle="Live web platforms and custom software built by DevSyntix"
        />

        <div className="mt-10 space-y-6">
          {siteConfig.projects.map((project, index) => (
            <article
              key={project.title}
              className="rounded-[16px] bg-[#11141c] border border-[#eef0f5]/[0.08] overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Clean Live Preview Frame without overlapping pills */}
              <div className="lg:col-span-7 bg-[#07080d] p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-[#eef0f5]/[0.08]">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open live preview of ${project.title}`}
                  className="block relative aspect-[16/10] w-full rounded-[8px] overflow-hidden border border-[#eef0f5]/[0.08] hover:border-[#eef0f5]/[0.2] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4da3ff]"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} live website screenshot`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-top"
                  />
                </a>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[12px] font-mono tabular-nums text-[#7a8296]">
                      {String(index + 1).padStart(2, "0")} · {project.category}
                    </span>
                    <span className="text-[12px] font-mono text-[#7a8296]">
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-[22px] sm:text-[26px] font-medium tracking-[-0.02em] text-[#eef0f5] leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-[14px] leading-[1.6] text-[#a3a9b8]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-[6px] text-[12px] font-mono text-[#a3a9b8] bg-[#1a1e28] border border-[#eef0f5]/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#eef0f5]/[0.08] flex items-center justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#4da3ff] hover:text-[#eef0f5] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4da3ff] rounded-[6px]"
                  >
                    <span>Visit live site</span>
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                  <span className="text-[12px] font-mono text-[#4cc38a]">
                    Live
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
