"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { getWhatsAppUrl } from "@/config/site";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Tech", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 25);

      if (Math.abs(currentY - lastScrollY) > 6) {
        setScrollDirection(currentY > lastScrollY && currentY > 90 ? "down" : "up");
        lastScrollY = currentY;
      }

      const sections = ["home", "about", "services", "technologies", "projects", "faq", "contact"];
      let current = "home";
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 160) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── iOS 27 Floating Dynamic Island Bar with Scroll-Direction Physics ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 pointer-events-none transition-all duration-300 ease-out ${
          scrollDirection === "down" && !mobileMenuOpen
            ? "-translate-y-2 opacity-95 scale-[0.99]"
            : "translate-y-0 opacity-100 scale-100"
        }`}
      >
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-500 max-w-5xl w-full ${
            scrolled
              ? "ios-island shadow-[0_20px_50px_rgba(0,0,0,0.85),inset_0_1px_1.5px_rgba(255,255,255,0.3)] border border-white/20"
              : "bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)]"
          }`}
        >
          {/* DevSyntix Brand Mark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group transition-opacity hover:opacity-90 active:scale-95 duration-200"
          >
            <BrandLogo size="sm" />
          </a>

          {/* iOS 27 Segmented Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/[0.05] border border-white/[0.08]">
            {navLinks.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 text-[13px] font-medium tracking-tight rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-white bg-white/[0.14] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_8px_rgba(0,0,0,0.4)] font-semibold"
                      : "text-white/60 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Action: Apple Intelligence "Let's Talk" Capsule */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="apple-intelligence-glow ios-btn group relative inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-tight text-white rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_20px_rgba(41,216,255,0.25)] hover:bg-white/[0.14]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#29d8ff] transition-transform duration-300 group-hover:rotate-12" />
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden ios-btn w-9 h-9 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center text-white/90 hover:text-white"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-[#29d8ff]" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </nav>
      </header>

      {/* ── iOS 27 VisionOS / Control Center Sheet (Mobile) ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/75 backdrop-blur-3xl transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-20 inset-x-4 max-w-sm mx-auto p-6 rounded-[32px] ios-glass border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.3)] transition-all duration-400 ease-out ${
            mobileMenuOpen ? "scale-100 translate-y-0" : "scale-95 -translate-y-4"
          }`}
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="text-xs font-semibold tracking-wider text-white/50 uppercase">
              DevSyntix Spatial Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col gap-1.5 py-4">
            {navLinks.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-2xl text-base font-semibold tracking-tight transition-all ${
                    isActive
                      ? "bg-white/[0.12] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] border border-white/15"
                      : "text-white/70 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="apple-intelligence-glow ios-btn flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-2xl font-semibold text-sm text-white bg-gradient-to-r from-[#0071e3] to-[#af52de] shadow-lg shadow-blue-500/25"
            >
              <Sparkles className="w-4 h-4 text-[#29d8ff]" />
              <span>Let&apos;s Talk</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="ios-btn flex items-center justify-center gap-2 w-full py-3 px-5 rounded-2xl font-semibold text-xs text-white bg-[#25D366]/15 border border-[#25D366]/40 hover:bg-[#25D366]/25 transition-all shadow-[0_4px_16px_rgba(37,211,102,0.2)]"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
