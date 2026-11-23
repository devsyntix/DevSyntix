import React from "react";
import BrandLogo from "@/components/ui/BrandLogo";
import {
  InstagramIcon,
  FacebookIcon,
  XTwitterIcon,
  ThreadsIcon,
  LinkedInIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/config/site";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { label: "Custom Software Development", href: "#services" },
  { label: "Web Application Development", href: "#services" },
  { label: "SaaS Product Development", href: "#services" },
  { label: "Mobile Application Development", href: "#services" },
  { label: "Cloud Solutions & Integration", href: "#services" },
  { label: "AI & Automation", href: "#services" },
];

export default function Footer() {
  const currentYear = 2026;

  const socialList = [
    {
      name: "Instagram",
      icon: InstagramIcon,
      href: siteConfig.social.instagram,
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      href: siteConfig.social.facebook,
    },
    {
      name: "X (Twitter)",
      icon: XTwitterIcon,
      href: siteConfig.social.twitter,
    },
    {
      name: "Threads",
      icon: ThreadsIcon,
      href: siteConfig.social.threads,
    },
    ...(siteConfig.social.linkedin
      ? [
          {
            name: "LinkedIn",
            icon: LinkedInIcon,
            href: siteConfig.social.linkedin,
          },
        ]
      : []),
  ];

  return (
    <footer className="relative bg-black border-t border-white/[0.08] overflow-hidden text-[#86868b]">
      {/* Subtle Apple ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/3 h-72 w-72 rounded-full bg-[#0071e3]/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-20 pb-8 sm:pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-16 border-b border-white/[0.08]">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <a href="#home" className="inline-block">
              <BrandLogo size="lg" />
            </a>
            <p className="text-xs sm:text-sm leading-relaxed max-w-sm text-[#86868b] tracking-tight">
              DevSyntix is a premier technology-driven software engineering and
              SaaS solutions enterprise. We build scalable digital products,
              intelligent automation systems, and high-impact software for the next
              decade.
            </p>

            <div className="pt-1 sm:pt-2">
              <span className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/50 font-semibold mb-2 sm:mb-3">
                Social Ecosystem
              </span>
              <div className="flex items-center gap-2">
                {socialList.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`DevSyntix on ${social.name}`}
                      className="ios-btn w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#86868b] hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all"
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links & Services side-by-side on Mobile */}
          <div className="grid grid-cols-2 gap-6 lg:contents">
            {/* Quick Links (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 mb-3 sm:mb-5">
                Navigation
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-[#86868b] hover:text-white transition-colors duration-200 tracking-tight"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 mb-3 sm:mb-5">
                Core Capabilities
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <a
                      href={service.href}
                      className="text-xs sm:text-sm text-[#86868b] hover:text-white transition-colors duration-200 block truncate tracking-tight"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 mb-3 sm:mb-5">
              Connect
            </h4>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-[#86868b] tracking-tight">
              <div>
                <span className="text-[10px] sm:text-xs text-white/40 block">Email</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white hover:text-[#29d8ff] transition-colors truncate block"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div>
                <span className="text-[10px] sm:text-xs text-white/40 block">Direct</span>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-white hover:text-[#29d8ff] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-[#86868b]">
          <p>&copy; {currentYear} DevSyntix. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <span className="text-white/10">&bull;</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <span className="text-white/10">&bull;</span>
            <span className="inline-flex items-center gap-1.5 text-[#29d8ff] font-medium tracking-tight">
              <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] shadow-[0_0_6px_#30d158]" />
              <span>Software Development &bull; SaaS Solutions</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
