"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowRight, MessageSquare, Terminal, Activity, Layers } from "lucide-react";

// WebGL 3D Model loads dynamically for high-performance client rendering
const HeroCanvas3D = dynamic(() => import("@/components/ui/HeroCanvas3D"), {
  ssr: false,
});

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
      className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 pb-8 sm:pt-36 sm:pb-20 md:pt-44 md:pb-36 px-3.5 sm:px-6"
    >
      {/* ── 3D Interactive WebGL Tech Model Canvas ── */}
      <HeroCanvas3D />

      {/* ── Apple iOS 27 Spatial Aurora Ambient Lighting ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="hero-aurora hero-aurora-1 absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] sm:h-[650px] w-[450px] sm:w-[800px] rounded-full bg-gradient-to-b from-[#0071e3]/20 via-[#af52de]/15 to-transparent blur-[100px] sm:blur-[160px]" />
        <div className="hero-aurora hero-aurora-2 absolute top-1/3 -left-32 h-[300px] sm:h-[450px] w-[300px] sm:w-[450px] rounded-full bg-[#29d8ff]/15 blur-[90px] sm:blur-[140px]" />
        <div className="hero-aurora hero-aurora-3 absolute -bottom-20 -right-20 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-[#af52de]/20 blur-[100px] sm:blur-[150px]" />
      </div>

      {/* ── Apple Vision Spatial Frosted Grid ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── iOS 27 Spatial Floating Widgets (Desktop only) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 max-w-7xl mx-auto px-6"
      >
        {/* Top-Left: iOS 27 System Telemetry Widget */}
        <div className="hero-float-card hero-float-card-1 absolute left-8 top-[24%] hidden xl:flex items-center gap-3 p-4 rounded-[24px] ios-glass shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1.5px_rgba(255,255,255,0.3)]">
          <div className="w-10 h-10 rounded-2xl bg-white/[0.08] border border-white/20 flex items-center justify-center text-[#29d8ff] shadow-inner">
            <Activity className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#30d158] shadow-[0_0_8px_#30d158]" />
              <span className="text-[12px] font-semibold text-white tracking-tight">
                Neural Core SLA
              </span>
            </div>
            <div className="text-[11px] font-mono text-[#86868b] mt-0.5">
              0.8ms Latency &bull; 99.999%
            </div>
          </div>
        </div>

        {/* Top-Right: iOS 27 Architecture Pill */}
        <div className="hero-float-card hero-float-card-2 absolute right-8 top-[26%] hidden xl:flex items-center gap-3 p-4 rounded-[24px] ios-glass shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1.5px_rgba(255,255,255,0.3)]">
          <div className="w-10 h-10 rounded-2xl bg-white/[0.08] border border-white/20 flex items-center justify-center text-[#af52de] shadow-inner">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[12px] font-semibold text-white tracking-tight">
              Spatial Cloud Matrix
            </div>
            <div className="text-[11px] text-[#29d8ff] font-mono mt-0.5">
              Next.js 16 &bull; Cloud SaaS
            </div>
          </div>
        </div>

        {/* Bottom-Right: iOS Code Engine */}
        <div className="hero-float-card hero-float-card-3 absolute right-16 bottom-[18%] hidden lg:flex items-center gap-3 p-3.5 rounded-[22px] ios-glass shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1.5px_rgba(255,255,255,0.3)]">
          <div className="w-8 h-8 rounded-xl bg-white/[0.08] border border-white/20 flex items-center justify-center text-[#0071e3]">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="text-[12px] font-mono font-medium text-white/80">
            DevSyntix.Deploy(SaaS)
          </span>
        </div>
      </div>

      {/* ── Main Hero Section ── */}
      <div className="relative z-10 mx-auto max-w-5xl px-2 sm:px-6 text-center">
        {/* Apple iOS 27 Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-0.5 sm:py-1.5 rounded-full bg-white/[0.06] border border-white/[0.14] backdrop-blur-2xl mb-3 sm:mb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#29d8ff] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#29d8ff]" />
          </span>
          <span className="text-[10px] sm:text-xs font-semibold tracking-tight text-white/90">
            Next-Gen Software Engineering &bull; SaaS &bull; AI
          </span>
        </div>

        {/* Apple Headline with Precision SF Typography */}
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] text-white leading-[1.08] sm:leading-[1.04] max-w-4xl mx-auto">
          <span className="sr-only">
            DevSyntix — Custom Software Development &amp; Scalable SaaS Solutions.{" "}
          </span>
          Building{" "}
          <span className="bg-gradient-to-r from-white via-[#f5f5f7] to-[#86868b] bg-clip-text text-transparent">
            Digital
          </span>{" "}
          Experiences.
          <br />
          Engineering{" "}
          <span className="bg-gradient-to-r from-[#29d8ff] via-[#af52de] to-[#0071e3] bg-clip-text text-transparent">
            Tomorrow.
          </span>
        </h1>

        {/* Apple Neutral Body Copy - Compact on phone */}
        <p className="mx-auto mt-3 sm:mt-8 max-w-2xl text-xs sm:text-lg md:text-xl text-[#a1a1a6] leading-relaxed font-normal tracking-[-0.015em] px-2 line-clamp-3 sm:line-clamp-none">
          DevSyntix transforms ideas into powerful digital products through custom
          software solutions, responsive web application development, intelligent AI
          automation, and scalable SaaS platforms.
        </p>

        {/* iOS 27 CTA Buttons with Apple Intelligence Aura */}
        <div className="mt-5 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4">
          <button
            onClick={() => handleScrollTo("services")}
            className="apple-intelligence-glow ios-btn group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-semibold tracking-tight text-white rounded-full bg-white/[0.12] backdrop-blur-3xl border border-white/20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_10px_35px_rgba(41,216,255,0.3)] hover:bg-white/[0.18]"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => handleScrollTo("contact")}
            className="ios-btn group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-4 text-xs sm:text-sm font-semibold tracking-tight text-white rounded-full bg-white/[0.04] border border-white/12 backdrop-blur-2xl hover:border-white/30 hover:bg-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
          >
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#29d8ff] transition-transform group-hover:scale-110" />
            <span>Let&apos;s Talk</span>
          </button>
        </div>

        {/* Apple Metrics Triad - Compact on phone */}
        <div className="mt-6 sm:mt-18 pt-4 sm:pt-10 border-t border-white/[0.08] max-w-2xl mx-auto grid grid-cols-3 gap-2 sm:gap-6 text-center">
          <div>
            <div className="text-lg sm:text-3xl font-bold tracking-tight text-white">
              100%
            </div>
            <div className="text-[9px] sm:text-xs text-[#86868b] font-medium mt-0.5 sm:mt-1">
              Code Precision
            </div>
          </div>
          <div>
            <div className="text-lg sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-[#29d8ff] to-[#0071e3] bg-clip-text text-transparent">
              Enterprise
            </div>
            <div className="text-[9px] sm:text-xs text-[#86868b] font-medium mt-0.5 sm:mt-1">
              Architecture
            </div>
          </div>
          <div>
            <div className="text-lg sm:text-3xl font-bold tracking-tight text-[#af52de]">
              Infinite
            </div>
            <div className="text-[9px] sm:text-xs text-[#86868b] font-medium mt-0.5 sm:mt-1">
              Scalability
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card Animations */}
      <style jsx>{`
        .hero-aurora-1 {
          animation: auroraShift 14s ease-in-out infinite alternate;
        }
        .hero-aurora-2 {
          animation: auroraShift 16s ease-in-out infinite alternate-reverse;
        }
        .hero-aurora-3 {
          animation: auroraShift 18s ease-in-out infinite alternate;
        }
        @keyframes auroraShift {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(30px, 20px) scale(1.08);
          }
        }
        .hero-float-card-1 {
          animation: iosDrift 10s ease-in-out infinite;
        }
        .hero-float-card-2 {
          animation: iosDrift 12s ease-in-out infinite 1s;
        }
        .hero-float-card-3 {
          animation: iosDrift 14s ease-in-out infinite 2s;
        }
        @keyframes iosDrift {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}
