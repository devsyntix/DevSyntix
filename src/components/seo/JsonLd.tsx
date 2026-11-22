import React from "react";
import { siteConfig } from "@/config/site";

export default function JsonLd() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://devsyntix.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "DevSyntix",
    legalName: "DevSyntix",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/brand/logo.png`,
      caption: "DevSyntix Logo",
    },
    image: `${baseUrl}/brand/banner.png`,
    description:
      "DevSyntix is a premier technology company delivering custom software development, web applications, scalable SaaS development, and AI automation solutions.",
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        contactType: "customer service",
        email: siteConfig.contact.email,
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.twitter,
      siteConfig.social.threads,
    ].filter(Boolean),
    knowsAbout: [
      "Custom Software Solutions",
      "Software Development",
      "SaaS Development",
      "Web Application Development",
      "AI Automation",
      "Cloud Infrastructure",
      "API Integration",
      "UI/UX Design & Architecture",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "DevSyntix",
    alternateName: "DevSyntix Software Engineering",
    description:
      "Building Digital Experiences. Engineering Tomorrow. Custom Software Development & Scalable SaaS Solutions.",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: "en-US",
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#service`,
    name: "DevSyntix — Software Development & SaaS Solutions",
    url: baseUrl,
    image: `${baseUrl}/brand/banner.png`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "DevSyntix Technology Services",
      itemListElement: siteConfig.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
        position: index + 1,
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${baseUrl}/#faq`,
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
