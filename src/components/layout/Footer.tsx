import React from "react";
import BrandLogo from "@/components/ui/BrandLogo";
import {
  InstagramIcon,
  FacebookIcon,
  XTwitterIcon,
  ThreadsIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

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
  { label: "Custom software development", href: "#services" },
  { label: "Web application development", href: "#services" },
  { label: "SaaS product development", href: "#services" },
  { label: "Mobile application development", href: "#services" },
  { label: "Cloud solutions & integration", href: "#services" },
  { label: "Workflow automation", href: "#services" },
];

export default function Footer() {
  const currentYear = 2026;

  const socialList = [
    {
      name: "WhatsApp",
      icon: WhatsAppIcon,
      href: siteConfig.social.whatsapp,
    },
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
      name: "X",
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
    <footer className="bg-[#07080d] border-t border-[#eef0f5]/[0.08] text-[#7a8296]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-16 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-[#eef0f5]/[0.08]">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="#home"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4da3ff] rounded-[6px]"
            >
              <BrandLogo size="md" />
            </a>
            <p className="text-[14px] leading-[1.6] max-w-xs text-[#a3a9b8]">
              DevSyntix designs and builds custom software, web applications, mobile apps, and multi-tenant SaaS platforms.
            </p>

            <div>
              <p className="text-[12px] font-medium text-[#7a8296] mb-3">
                Social
              </p>
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
                      className="btn-press w-9 h-9 rounded-[8px] bg-[#11141c] border border-[#eef0f5]/[0.08] flex items-center justify-center text-[#7a8296] hover:text-[#eef0f5] hover:border-[#eef0f5]/[0.16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4da3ff]"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[13px] font-medium text-[#eef0f5] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] text-[#a3a9b8] hover:text-[#eef0f5] transition-colors duration-150 block leading-[24px]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-medium text-[#eef0f5] mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-[14px] text-[#a3a9b8] hover:text-[#eef0f5] transition-colors duration-150 block truncate leading-[24px]"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-medium text-[#eef0f5] mb-4">
              Connect
            </h4>
            <div className="space-y-4 text-[14px]">
              <div>
                <span className="text-[12px] text-[#7a8296] block mb-0.5">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-[#eef0f5] hover:text-[#4da3ff] transition-colors duration-150 truncate block"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div>
                <span className="text-[12px] text-[#7a8296] block mb-0.5">
                  Phone
                </span>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-[#eef0f5] hover:text-[#4da3ff] transition-colors duration-150 font-mono tabular-nums"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div>
                <span className="text-[12px] text-[#7a8296] block mb-0.5">
                  WhatsApp
                </span>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#eef0f5] hover:text-[#4cc38a] transition-colors duration-150 inline-flex items-center gap-2 font-mono tabular-nums"
                >
                  <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                  <span>{siteConfig.contact.whatsapp}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Row with right clearance for floating WhatsApp button */}
        <div className="pt-8 pr-16 sm:pr-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[13px] text-[#7a8296]">
          <p>&copy; {currentYear} DevSyntix. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-[#eef0f5] transition-colors duration-150">
              Privacy
            </a>
            <a href="#contact" className="hover:text-[#eef0f5] transition-colors duration-150">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
