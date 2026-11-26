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
  tagline: "Building Digital Experiences. Engineering Tomorrow.",
  description:
    "We craft premium digital solutions that transform ideas into powerful, scalable, and beautifully designed software products. From concept to deployment, we engineer the future.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://devsyntix.com",

  contact: {
    email: "info@devsyntix.com",
    phone: "+91 70665 44055",
    whatsapp: "+91 70665 44055",
    whatsappNumber: "917066544055",
    defaultWhatsAppMessage:
      "Hello DevSyntix! I visited your website and would like to discuss a project with your team.",
  },

  social: {
    whatsapp:
      "https://wa.me/917066544055?text=Hello%20DevSyntix!%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project%20with%20your%20team.",
    instagram: "https://www.instagram.com/devsyntix_/",
    facebook: "https://www.facebook.com/profile.php?id=61596414960836",
    twitter: "https://x.com/DevSyntix",
    threads: "https://www.threads.com/@devsyntix_?hl=en",
    linkedin: "",
  },

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Technologies", href: "#technologies" },
    { label: "Projects", href: "#projects" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  services: [
    {
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to solve your unique business challenges and drive operational efficiency at scale.",
      icon: Code2,
    },
    {
      title: "Web Application Development",
      description:
        "High-performance, responsive web applications built with modern frameworks that deliver exceptional user experiences.",
      icon: Globe,
    },
    {
      title: "SaaS Product Development",
      description:
        "End-to-end SaaS product engineering — from architecture and MVP to multi-tenant platforms ready for market launch.",
      icon: Layers,
    },
    {
      title: "Mobile Application Development",
      description:
        "Native and cross-platform mobile apps crafted for iOS and Android with fluid interfaces and robust performance.",
      icon: Smartphone,
    },
    {
      title: "UI/UX Design",
      description:
        "Research-driven design systems and intuitive interfaces that elevate brand identity and maximize user engagement.",
      icon: Palette,
    },
    {
      title: "Cloud Solutions & Integration",
      description:
        "Seamless cloud migration, infrastructure optimization, and integration strategies across AWS, GCP, and Azure.",
      icon: Cloud,
    },
    {
      title: "AI & Automation",
      description:
        "Intelligent automation pipelines and AI-powered features that streamline workflows and unlock actionable insights.",
      icon: Bot,
    },
    {
      title: "API Development & Integration",
      description:
        "Robust, well-documented RESTful and GraphQL APIs that connect systems and enable seamless data exchange.",
      icon: Plug,
    },
  ],

  technologies: {
    frontend: [
      { name: "React", icon: "/tech/react.svg" },
      { name: "Next.js", icon: "/tech/nextjs.svg" },
      { name: "TypeScript", icon: "/tech/typescript.svg" },
      { name: "Tailwind CSS", icon: "/tech/tailwind.svg" },
      { name: "Vue.js", icon: "/tech/vue.svg" },
      { name: "Angular", icon: "/tech/angular.svg" },
    ],
    backend: [
      { name: "Node.js", icon: "/tech/nodejs.svg" },
      { name: "Python", icon: "/tech/python.svg" },
      { name: "Go", icon: "/tech/go.svg" },
      { name: "Rust", icon: "/tech/rust.svg" },
      { name: "Java", icon: "/tech/java.svg" },
      { name: "GraphQL", icon: "/tech/graphql.svg" },
    ],
    database: [
      { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
      { name: "MongoDB", icon: "/tech/mongodb.svg" },
      { name: "Redis", icon: "/tech/redis.svg" },
      { name: "MySQL", icon: "/tech/mysql.svg" },
      { name: "Supabase", icon: "/tech/supabase.svg" },
      { name: "Firebase", icon: "/tech/firebase.svg" },
    ],
    cloudDevOps: [
      { name: "AWS", icon: "/tech/aws.svg" },
      { name: "Google Cloud", icon: "/tech/gcp.svg" },
      { name: "Docker", icon: "/tech/docker.svg" },
      { name: "Kubernetes", icon: "/tech/kubernetes.svg" },
      { name: "Vercel", icon: "/tech/vercel.svg" },
      { name: "GitHub Actions", icon: "/tech/github.svg" },
    ],
  },

  whyChooseUs: [
    {
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies and creative problem-solving to deliver solutions that set you apart from the competition.",
      icon: Lightbulb,
    },
    {
      title: "Scalable Architecture",
      description:
        "Every system we build is designed to grow with your business — handling millions of users without breaking a sweat.",
      icon: Building2,
    },
    {
      title: "Modern Technologies",
      description:
        "We leverage the latest frameworks, languages, and tools to ensure your product stays ahead of the technology curve.",
      icon: Cpu,
    },
    {
      title: "User-Centric Design",
      description:
        "Our design philosophy puts users first, creating interfaces that are intuitive, accessible, and delightful to use.",
      icon: Users,
    },
    {
      title: "Reliable Solutions",
      description:
        "Battle-tested code, comprehensive testing, and robust CI/CD pipelines ensure your product runs flawlessly 24/7.",
      icon: Shield,
    },
    {
      title: "Performance Driven",
      description:
        "Optimized for speed, efficiency, and responsiveness — because every millisecond counts in the digital experience.",
      icon: Zap,
    },
  ],

  projects: [
    {
      title: "The Grand Estate — Luxury Real Estate Platform",
      description:
        "A bespoke architectural showcase and digital sales platform engineered for The Grand Estate by DevSyntix Builder. Features high-performance interactive property exploration, responsive luxury typography, immersive visual galleries, and conversion-optimized lead capture for premium luxury villas in North Bangalore.",
      image: "/projects/grand-estate.jpg",
      tags: ["React", "Tailwind CSS", "Vite", "Luxury Real Estate", "Vercel"],
      category: "Luxury Real Estate Platform",
      link: "https://the-grand-estate.vercel.app/#home",
    },
  ],

  faqs: [
    {
      question: "What services does DevSyntix provide?",
      answer:
        "DevSyntix provides end-to-end technology solutions, including custom software development, web application development, SaaS product development, API integration, AI-powered solutions, UI/UX design, and cloud-based solutions. We help businesses transform ideas into scalable digital products.",
    },
    {
      question: "Do you work with startups and early-stage businesses?",
      answer:
        "Absolutely! We work with startups, entrepreneurs, and established businesses. Whether you have an initial idea, need an MVP (Minimum Viable Product), or want to scale an existing application, we can help turn your vision into a functional digital solution.",
    },
    {
      question: "Can you develop custom SaaS products?",
      answer:
        "Yes! We specialize in building custom SaaS applications tailored to your business requirements. From planning and architecture to development, deployment, and scalability, we help create secure, reliable, and user-friendly software products.",
    },
    {
      question: "Do you provide website maintenance and support?",
      answer:
        "Yes. We can provide ongoing website maintenance, performance optimization, security updates, bug fixes, and feature enhancements to keep your digital products running smoothly and efficiently.",
    },
    {
      question: "How much does software development cost?",
      answer:
        "The cost depends on project complexity, features, technology requirements, development time, and overall scope. We follow a project-based approach and provide customized quotations after understanding your requirements.\n\nContact us for a project estimate.",
    },
    {
      question: "Do you offer ongoing technical support?",
      answer:
        "Yes. We offer ongoing technical assistance, troubleshooting, maintenance, updates, and performance improvements. Our goal is to ensure your application remains reliable, secure, and ready to grow with your business.",
    },
    {
      question: "Which technologies does DevSyntix work with?",
      answer:
        "We work with modern technologies and frameworks, including React, JavaScript, .NET, ASP.NET Core, SQL Server, cloud platforms, and other tools selected according to project requirements.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines depend on the scope, complexity, and required features. A simple website may take a few weeks, while larger applications and SaaS platforms may require several months. We establish a clear development timeline before starting.",
    },
    {
      question: "Can you upgrade or improve an existing website or application?",
      answer:
        "Yes. We can help modernize existing applications, improve performance, redesign user interfaces, integrate new features, fix technical issues, and migrate applications to modern technologies.",
    },
    {
      question: "How do I get started with DevSyntix?",
      answer:
        "Getting started is simple! Contact us through our website with your project details. Our team will review your requirements, discuss your goals, and suggest an appropriate development approach.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

export function getWhatsAppUrl(message?: string): string {
  const text = message?.trim() || siteConfig.contact.defaultWhatsAppMessage;
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

