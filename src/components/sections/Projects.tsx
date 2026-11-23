"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  gradientStyle: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "The Grand Estate",
    category: "Luxury Real Estate Platform",
    description:
      "A bespoke architectural showcase and digital sales platform engineered for The Grand Estate by DevSyntix Builder. Features high-performance interactive property exploration, responsive luxury typography, immersive visual galleries, and conversion-optimized lead capture for premium luxury villas in North Bangalore.",
    technologies: ["React", "Tailwind CSS", "Vite", "Luxury Real Estate", "Vercel"],
    gradientStyle: "from-[#0b2b20] via-[#0071e3] to-[#29d8ff]",
    link: "https://the-grand-estate.vercel.app/#home",
    image: "/projects/grand-estate.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-black px-3.5 sm:px-6 py-10 sm:py-20 md:py-32">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] sm:h-[700px] w-[350px] sm:w-[700px] rounded-full bg-[#af52de]/10 blur-[100px] sm:blur-[180px] ambient-float"
      />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Selected Work"
          title="Engineered to Inspire."
          subtitle="A showcase of mission-critical custom software development, enterprise web applications, and scalable digital solutions delivered by DevSyntix."
        />

        {/* Featured Project Showcase Card */}
        <div className={`mt-6 sm:mt-12 lg:mt-16 ${projects.length === 1 ? "max-w-3xl mx-auto" : "grid grid-cols-1 md:grid-cols-2 gap-6"}`}>
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live project: ${project.title}`}
              className="ios-glass-card rounded-2xl sm:rounded-[32px] overflow-hidden group flex flex-col justify-between border border-white/10 hover:border-[#29d8ff]/40 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:shadow-[0_25px_60px_rgba(41,216,255,0.15)] block"
            >
              {/* Spatial UI Mockup Preview with Specular Lighting & Live Image Background */}
              <div
                className="relative h-48 sm:h-72 md:h-96 p-3.5 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden bg-black"
              >
                {/* Live Website Background Image */}
                <Image
                  src={project.image}
                  alt={`${project.title} live website showcase`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 768px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Vignette & Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px] opacity-25 pointer-events-none" />

                {/* Spatial glass pill on top */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-tight text-white bg-black/60 backdrop-blur-xl border border-white/20 shadow-lg">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-semibold tracking-tight text-[#30d158] bg-black/60 backdrop-blur-xl border border-[#30d158]/40 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse" />
                      Live Production
                    </span>
                  </div>
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-[#29d8ff] group-hover:text-[#29d8ff] transition-all duration-300 shadow-lg">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Simulated Spatial App Glass Frame with Real URL */}
                <div className="relative z-10 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-black/60 backdrop-blur-2xl border border-white/20 shadow-2xl max-w-[240px] sm:max-w-sm group-hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff453a]" />
                    <span className="w-2 h-2 rounded-full bg-[#ffd60a]" />
                    <span className="w-2 h-2 rounded-full bg-[#30d158]" />
                    <span className="text-[10px] sm:text-[11px] font-mono text-white/90 ml-1 truncate">
                      the-grand-estate.vercel.app
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#29d8ff] font-medium pt-0.5 sm:pt-1">
                    <span>Premium Villa Showcase</span>
                    <span className="text-white/60">Bangalore</span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-[#29d8ff] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[10px] sm:text-xs font-mono text-[#86868b] bg-white/[0.04] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-white/10 flex-shrink-0">
                    0{index + 1}
                  </span>
                </div>

                <p className="text-xs sm:text-sm leading-snug sm:leading-relaxed text-[#86868b] mb-3 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium text-white/80 bg-white/[0.05] border border-white/10 backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Projects link */}
        <div className="mt-8 sm:mt-16 text-center">
          <a
            href="#contact"
            className="ios-btn inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-tight text-white/80 bg-white/[0.04] border border-white/10 hover:border-white/25 hover:text-white transition-all shadow-sm"
          >
            <span>Have a project in mind? Let&apos;s build together</span>
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#29d8ff]" />
          </a>
        </div>
      </div>
    </section>
  );
}
