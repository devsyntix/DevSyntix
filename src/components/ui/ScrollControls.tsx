"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollControls() {
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolledDown(window.scrollY > 400);
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`fixed bottom-20 right-6 z-40 transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolledDown
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <button
        type="button"
        onClick={handleClick}
        aria-label="Scroll to top"
        className="btn-press flex items-center justify-center w-12 h-12 rounded-[12px] bg-[#11141c] border border-[#eef0f5]/[0.12] text-[#a3a9b8] hover:text-[#eef0f5] hover:bg-[#1a1e28] hover:border-[#eef0f5]/[0.22] shadow-[0_6px_20px_rgba(0,0,0,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4da3ff]"
      >
        <ArrowUp className="w-4 h-4" strokeWidth={1.5} />
      </button>
    </div>
  );
}
