import {
  Code2,
  Globe,
  Layers,
  Smartphone,
  Palette,
  Cloud,
  Bot,
  Plug,
  Lightbulb,
  Building2,
  Cpu,
  Users,
  Shield,
  Zap,
} from "lucide-react";

export const siteConfig = {
  name: "DevSyntix",
  tagline: "Custom software engineered for production scale",
  description:
    "DevSyntix designs and builds custom software, web applications, mobile apps, and multi-tenant SaaS platforms from architecture through deployment.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://devsyntix.com",

  contact: {
    email: "info@devsyntix.com",
    phone: "+91 70665 44055",
    whatsapp: "+91 70665 44055",
    whatsappNumber: "917066544055",
    defaultWhatsAppMessage:
      "Hello DevSyntix, I visited your website and would like to discuss a software project.",
  },

  social: {
    whatsapp:
      "https://wa.me/917066544055?text=Hello%20DevSyntix%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20software%20project.",
    instagram: "https://www.instagram.com/devsyntix_/",
    facebook: "https://www.facebook.com/profile.php?id=61596414960836",
    twitter: "https://x.com/DevSyntix",
    threads: "https://www.threads.com/@devsyntix_?hl=en",
    linkedin: "",
  },

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Technologies", href: "#technologies" },
    { label: "Projects", href: "#projects" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  services: [
    {
      title: "Custom software development",
      description:
        "Tailored internal tools and line-of-business software built around your exact workflows and operational requirements.",
      icon: Code2,
    },
    {
      title: "Web application development",
      description:
        "Responsive React and Next.js web applications built with typed APIs, clean routing, and fast page loads.",
      icon: Globe,
    },
    {
      title: "SaaS product development",
      description:
        "End-to-end SaaS engineering from initial MVP through multi-tenant data isolation, authentication, and billing.",
      icon: Layers,
    },
    {
      title: "Mobile application development",
      description:
        "Native and cross-platform iOS and Android applications backed by shared API contracts and offline-safe state.",
      icon: Smartphone,
    },
    {
      title: "UI/UX design",
      description:
        "Component systems and clear interaction flows that keep complex product interfaces straightforward to use.",
      icon: Palette,
    },
    {
      title: "Cloud solutions & integration",
      description:
        "Infrastructure setup, containerization, and deployment automation across AWS, Azure, and managed cloud hosts.",
      icon: Cloud,
    },
    {
      title: "Workflow automation",
      description:
        "Automated pipelines, document processing, and LLM integrations that cut repetitive manual work.",
      icon: Bot,
    },
    {
      title: "API development & integration",
      description:
        "Documented REST and GraphQL interfaces connecting ERPs, payment gateways, CRMs, and third-party services.",
      icon: Plug,
    },
  ],

  whyChooseUs: [
    {
      title: "Direct technical clarity",
      description:
        "We scope architecture, data models, and milestone deliverables upfront so there are no surprises mid-build.",
      icon: Lightbulb,
    },
    {
      title: "Clean system architecture",
      description:
        "Modular services, normalized schemas, and typed boundaries designed to evolve cleanly as requirements grow.",
      icon: Building2,
    },
    {
      title: "Proven core stack",
      description:
        "We standardize on Next.js, TypeScript, .NET Core, Python, and PostgreSQL for long-term maintainability.",
      icon: Cpu,
    },
    {
      title: "Readable interfaces",
      description:
        "Interfaces structured around real user tasks with accessible keyboard states and responsive mobile layouts.",
      icon: Users,
    },
    {
      title: "Tested releases",
      description:
        "Automated builds, strict type checks, and repeatable CI/CD pipelines catch regressions before production.",
      icon: Shield,
    },
    {
      title: "Performance budgets",
      description:
        "Lean bundles, indexed queries, and caching strategies that keep response times predictable under load.",
      icon: Zap,
    },
  ],

  projects: [
    {
      title: "The Grand Estate",
      description:
        "Architectural showcase and digital sales platform engineered for The Grand Estate in North Bangalore. Features responsive villa exploration, structured floor-plan presentation, and direct lead capture built with React and Tailwind CSS.",
      image: "/projects/grand-estate.jpg",
      tags: ["React", "Tailwind CSS", "Vite", "Vercel"],
      category: "Real estate web platform",
      location: "North Bangalore",
      link: "https://the-grand-estate.vercel.app/#home",
    },
  ],

  faqs: [
    {
      question: "What services does DevSyntix provide?",
      answer:
        "DevSyntix handles end-to-end custom software development, responsive web applications, multi-tenant SaaS products, mobile apps, API integrations, workflow automation, UI/UX design, and cloud deployment.",
    },
    {
      question: "Do you work with startups and early-stage businesses?",
      answer:
        "Yes. We work with founders, startups, and established businesses—whether you are scoping a focused MVP to validate a market or scaling an existing software system.",
    },
    {
      question: "Can you develop custom SaaS products?",
      answer:
        "Yes. We build custom SaaS applications tailored to your domain, covering system architecture, role-based access, tenant isolation, backend APIs, frontend interfaces, and production hosting.",
    },
    {
      question: "Do you provide website maintenance and support?",
      answer:
        "Yes. We offer ongoing maintenance covering dependency updates, bug fixes, performance profiling, security patches, and incremental feature work.",
    },
    {
      question: "How is software development priced?",
      answer:
        "Pricing depends on project scope, technical complexity, integrations, and timeline. Once we review your requirements, we provide a transparent milestone estimate before writing code.",
    },
    {
      question: "Do you offer ongoing technical support after launch?",
      answer:
        "Yes. We provide post-launch support, monitoring setup, troubleshooting, and scheduled engineering sprints to keep your system reliable.",
    },
    {
      question: "Which technologies does DevSyntix work with?",
      answer:
        "Our primary stack includes React, Next.js, TypeScript, Angular, .NET Core, Node.js, Python, Java, PostgreSQL, SQL Server, MongoDB, Docker, AWS, and Azure.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Focused marketing sites or prototypes typically ship within a few weeks, while custom web applications and multi-tenant SaaS platforms span several milestones across a shared delivery schedule.",
    },
    {
      question: "Can you upgrade or improve an existing application?",
      answer:
        "Yes. We audit and modernize legacy web apps, refactor slow database queries, redesign dated interfaces, add API integrations, and migrate older codebases to current frameworks.",
    },
    {
      question: "How do I get started with DevSyntix?",
      answer:
        "Share your project requirements using the contact form below or message us directly on WhatsApp. Our engineering team will review the scope and follow up to schedule a technical call.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export function getWhatsAppUrl(message?: string): string {
  const text = message?.trim() || siteConfig.contact.defaultWhatsAppMessage;
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
