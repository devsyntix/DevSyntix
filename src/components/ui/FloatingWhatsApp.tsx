"use client";

import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <div className="fixed bottom-6 right-6 z-40 pointer-events-auto">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Message DevSyntix on WhatsApp at ${siteConfig.contact.whatsapp}`}
        title={`WhatsApp (${siteConfig.contact.whatsapp})`}
        className="btn-press flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba5a] shadow-[0_6px_20px_rgba(0,0,0,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4da3ff]"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
