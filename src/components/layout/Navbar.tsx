"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#technologies" },
  { label: "Work", href: "#projects" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const sections = ["home", "about", "services", "technologies", "projects", "faq", "contact"];
      let current = "home";
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 140) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 h-16 border-b transition-[background-color,border-color] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "bg-[#07080d]/95 backdrop-blur-md border-[#eef0f5]/[0.08]"
            : "bg-[#0b0d14]/80 backdrop-blur-sm border-transparent"
        }`}
      >
        <nav
          className="mx-auto max-w-6xl h-full px-4 sm:px-6 flex items-center justify-between gap-4"
          aria-label="Primary navigation"
        >
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4da3ff] rounded-[6px]"
            aria-label="DevSyntix home"
          >
            <BrandLogo size="sm" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-[14px] rounded-[8px] transition-[color,background-color] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4da3ff] ${
                    isActive
                      ? "text-[#eef0f5] bg-[#1a1e28] font-medium"
                      : "text-[#a3a9b8] hover:text-[#eef0f5] hover:bg-[#11141c] font-normal"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-press hidden sm:inline-flex items-center justify-center h-9 px-4 rounded-[8px] text-[14px] font-medium bg-[#eef0f5] text-[#0b0d14] hover:bg-[#ffffff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4da3ff]"
            >
              Start a project
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden btn-press w-9 h-9 rounded-[8px] bg-[#11141c] border border-[#eef0f5]/[0.08] flex items-center justify-center text-[#a3a9b8] hover:text-[#eef0f5] hover:border-[#eef0f5]/[0.16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4da3ff]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" strokeWidth={1.5} />
              ) : (
                <Menu className="w-4 h-4" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-[#07080d]/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative z-10 mt-20 mx-4 p-4 rounded-[14px] bg-[#11141c] border border-[#eef0f5]/[0.1] shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const targetId = link.href.replace("#", "");
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`h-10 px-3 flex items-center rounded-[8px] text-[15px] transition-colors duration-150 ${
                      isActive
                        ? "bg-[#1a1e28] text-[#eef0f5] font-medium"
                        : "text-[#a3a9b8] hover:text-[#eef0f5] hover:bg-[#1a1e28]/50 font-normal"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-[#eef0f5]/[0.08]">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="btn-press flex items-center justify-center w-full h-11 px-4 rounded-[8px] font-medium text-[14px] bg-[#eef0f5] text-[#0b0d14] hover:bg-white"
              >
                Start a project
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
