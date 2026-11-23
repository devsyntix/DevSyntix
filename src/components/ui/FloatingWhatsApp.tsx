"use client";

import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-8 sm:right-8 z-40 flex items-center pointer-events-auto">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with DevSyntix on WhatsApp at ${siteConfig.contact.whatsapp}`}
        title={`Chat on WhatsApp (${siteConfig.contact.whatsapp})`}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] shadow-[0_10px_28px_rgba(37,211,102,0.5),inset_0_1px_2px_rgba(255,255,255,0.45)] hover:shadow-[0_14px_35px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 border border-white/25"
      >
        {/* WhatsApp Logo Icon */}
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-105" />

        {/* Live Online Ping Indicator */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10b981] border-2 border-white" />
        </span>
      </a>
    </div>
  );
}
