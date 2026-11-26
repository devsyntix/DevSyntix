"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setProgress(Math.min(100, Math.max(0, currentProgress)));
            setIsVisible(window.scrollY > 15);
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

  return (
    <div
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-[60] h-[2.5px] pointer-events-none transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="h-full bg-gradient-to-r from-[#29d8ff] via-[#0071e3] via-[#af52de] to-[#ff2d55] shadow-[0_0_12px_rgba(41,216,255,0.8)] transition-transform duration-100 ease-out will-change-transform"
        style={{
          width: "100%",
          transform: `scaleX(${progress / 100})`,
          transformOrigin: "left",
        }}
      />
    </div>
  );
}
