"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.06,
        rootMargin: "0px 0px -24px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 8px, 0)",
        opacity: isVisible ? 1 : 0,
        transition: `opacity 350ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 350ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
