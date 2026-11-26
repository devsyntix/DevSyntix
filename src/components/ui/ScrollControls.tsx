"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowUp, ChevronDown } from "lucide-react";

export default function ScrollControls() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolledDown, setScrolledDown] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;

          if (totalHeight > 0) {
            setScrollProgress(Math.min(100, Math.max(0, (currentY / totalHeight) * 100)));
          }

          setScrolledDown(currentY > 300);

          if (Math.abs(currentY - lastScrollY) > 8) {
            setScrollDirection(currentY > lastScrollY ? "down" : "up");
            lastScrollY = currentY;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = useCallback(() => {
    if (scrolledDown) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll down to Services
      const target = document.getElementById("services") || document.getElementById("about");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
      }
    }
  }, [scrolledDown]);

  // Circumference for 38px diameter circle (radius = 18px)
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-[74px] right-4 sm:bottom-[96px] sm:right-8 z-40 transition-all duration-400 ease-out ${
        scrolledDown
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        type="button"
        onClick={handleClick}
        aria-label={scrolledDown ? "Scroll up to top" : "Scroll down to explore"}
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full ios-glass border border-white/20 shadow-[0_12px_35px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.35)] hover:border-[#29d8ff]/50 hover:shadow-[0_0_25px_rgba(41,216,255,0.35)] active:scale-95 transition-all duration-300 backdrop-blur-2xl bg-black/60"
      >
        {/* SVG Circular Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 44 44"
          aria-hidden="true"
        >
          {/* Background track */}
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2.5"
          />
          {/* Animated progress stroke */}
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="url(#scrollGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: "stroke-dashoffset 0.15s ease-out" }}
          />
          <defs>
            <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#29d8ff" />
              <stop offset="50%" stopColor="#0071e3" />
              <stop offset="100%" stopColor="#af52de" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Dynamic Icon */}
        <div className="relative z-10 text-white/90 group-hover:text-[#29d8ff] transition-colors duration-300">
          {scrolledDown ? (
            <ArrowUp
              className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 group-hover:-translate-y-0.5"
              strokeWidth={2.25}
            />
          ) : (
            <ChevronDown
              className="w-4 h-4 sm:w-4.5 sm:h-4.5 animate-bounce transition-transform duration-300"
              strokeWidth={2.25}
            />
          )}
        </div>

        {/* Apple Tooltip on Desktop hover */}
        <span className="pointer-events-none absolute right-full mr-3 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-tight text-white/90 bg-black/80 border border-white/15 backdrop-blur-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 hidden sm:block whitespace-nowrap shadow-lg">
          {scrolledDown ? "Back to Top" : "Scroll Down"}
        </span>
      </button>
    </div>
  );
}
