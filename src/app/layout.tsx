import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import JsonLd from "@/components/seo/JsonLd";
import ScrollControls from "@/components/ui/ScrollControls";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-sans-face",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://devsyntix.com";

export const viewport: Viewport = {
  themeColor: "#0b0d14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DevSyntix | Custom Software Development & Scalable SaaS Solutions",
    template: "%s | DevSyntix",
  },
  description:
    "DevSyntix engineers high-performance custom software, scalable SaaS platforms, responsive web applications, and AI automation solutions. Turn your vision into tomorrow's digital product.",
  keywords: [
    "DevSyntix",
    "devsyntix.com",
    "DevSyntix software",
    "DevSyntix software development",
    "DevSyntix SaaS solutions",
    "DevSyntix technology",
    "DevSyntix official website",
    "Software Development",
    "SaaS Development",
    "Custom Software Solutions",
    "Web Application Development",
    "AI Automation",
    "Enterprise Software Solutions",
    "Cloud Architecture",
    "Full-Stack Engineering",
    "Next.js Development",
    "Scalable SaaS Platforms",
    "API Integration",
  ],
  authors: [{ name: "DevSyntix Engineering", url: siteUrl }],
  creator: "DevSyntix",
  publisher: "DevSyntix",
  category: "technology",
  classification: "Software Development & Technology Services",
  applicationName: "DevSyntix",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "DevSyntix | Custom Software Development & Scalable SaaS Solutions",
    description:
      "DevSyntix engineers high-performance custom software, scalable SaaS platforms, responsive web applications, and AI automation solutions.",
    url: siteUrl,
    siteName: "DevSyntix",
    images: [
      {
        url: "/brand/banner.png",
        width: 1200,
        height: 630,
        alt: "DevSyntix — Custom Software Development and SaaS Solutions",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevSyntix | Custom Software Development & Scalable SaaS Solutions",
    description:
      "DevSyntix engineers high-performance custom software, scalable SaaS platforms, responsive web applications, and AI automation solutions.",
    images: ["/brand/banner.png"],
    creator: "@DevSyntix",
    site: "@DevSyntix",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/logo-icon.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "googleb90a1c97fbd5bc51",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#0b0d14] text-[#eef0f5] antialiased flex flex-col font-sans">
        <JsonLd />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
        <ScrollControls />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
