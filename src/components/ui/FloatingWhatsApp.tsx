"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { siteConfig, getWhatsAppUrl } from "@/config/site";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = getWhatsAppUrl();

  return (
    <div
      className="fixed bottom-5 left-4 sm:bottom-8 sm:left-8 z-40 flex items-center gap-2.5 pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with DevSyntix on WhatsApp at ${siteConfig.contact.whatsapp}`}
        className="group relative flex items-center gap-2.5 p-2 sm:p-2.5 pl-2.5 sm:pl-3 pr-3.5 sm:pr-4 rounded-full ios-glass border border-white/20 shadow-[0_12px_35px_rgba(0,0,0,0.7),inset_0_1px_1.5px_rgba(255,255,255,0.35)] hover:border-[#25D366]/60 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] active:scale-95 transition-all duration-300 backdrop-blur-2xl bg-black/70"
      >
        {/* WhatsApp Icon Circle with Emerald Glow */}
        <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#25D366] text-black shadow-[0_0_16px_rgba(37,211,102,0.6)] group-hover:scale-105 transition-transform duration-300">
          <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
          
          {/* Live Online Ping Indicator */}
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366] border border-black" />
          </span>
        </div>

        {/* Text Pill with Apple SF typography */}
        <div className="flex flex-col text-left">
          <span className="text-[11px] sm:text-xs font-semibold tracking-tight text-white group-hover:text-[#25D366] transition-colors leading-tight">
            Chat on WhatsApp
          </span>
          <span className="text-[9px] sm:text-[10px] text-[#86868b] leading-none mt-0.5">
            Instant Reply &bull; +91 70665 44055
          </span>
        </div>
      </a>
    </div>
  );
}
