"use client";

import React, { useState, type FormEvent, type ChangeEvent } from "react";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  XTwitterIcon,
  ThreadsIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/ui/SocialIcons";
import { siteConfig } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [deliveredTo, setDeliveredTo] = useState<string>("info@devsyntix.com");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length === 12 && val.startsWith("91")) {
      val = val.slice(2);
    }
    setFormData((prev) => ({ ...prev, phone: val.slice(0, 10) }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const digitsOnly = formData.phone.replace(/\D/g, "");
    if (digitsOnly.length !== 10) {
      setSubmitError("Phone number must be 10 digits.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const text = await res.text();
      let data: { success?: boolean; deliveredTo?: string; error?: string } | null = null;
      try {
        data = JSON.parse(text);
      } catch {
        // Non-JSON response
      }

      if (!res.ok || (data && !data.success)) {
        throw new Error(
          data?.error || "Unable to send your message right now. Please try again."
        );
      }

      if (data?.deliveredTo) {
        setDeliveredTo(data.deliveredTo);
      }
      setIsSubmitted(true);
    } catch (err: unknown) {
      console.error("Submission error:", err);
      const message =
        err instanceof Error
          ? err.message
          : "There was an issue sending your message. Please try again.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const inputClasses =
    "w-full px-3.5 py-2.5 bg-[#07080d] border border-[#eef0f5]/[0.1] rounded-[8px] text-[14px] text-[#eef0f5] placeholder:text-[#7a8296] transition-[border-color,background-color] duration-150 focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/25";

  return (
    <section
      id="contact"
      className="bg-[#0b0d14] border-t border-[#eef0f5]/[0.08] py-16 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          tag="Contact"
          title="Discuss your project"
          subtitle="Send your requirements to our engineering team for architecture scoping and a milestone estimate"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mt-10">
          {/* Form Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-[14px] bg-[#11141c] border border-[#eef0f5]/[0.08]">
              {isSubmitted ? (
                <div className="py-8 text-left space-y-4">
                  <div className="w-10 h-10 rounded-[8px] bg-[#4cc38a]/15 border border-[#4cc38a]/30 flex items-center justify-center text-[#4cc38a]">
                    <CheckCircle2 className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-[20px] font-medium text-[#eef0f5]">
                      Inquiry received
                    </h3>
                    <p className="text-[14px] text-[#a3a9b8] max-w-md leading-[1.6]">
                      Thank you, <span className="text-[#eef0f5] font-medium">{formData.fullName}</span>. Your message has been delivered to{" "}
                      <span className="text-[#eef0f5] font-mono text-[13px]">{deliveredTo}</span>. Our team will reply to{" "}
                      <span className="text-[#eef0f5]">{formData.email}</span> shortly.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setSubmitError(null);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          company: "",
                          message: "",
                        });
                      }}
                      className="btn-press h-10 px-4 rounded-[8px] text-[14px] font-medium text-[#eef0f5] bg-[#1a1e28] border border-[#eef0f5]/[0.1] hover:border-[#eef0f5]/[0.2]"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitError && (
                    <div className="p-3.5 rounded-[8px] bg-[#e5484d]/10 border border-[#e5484d]/30 text-[#eef0f5] text-[13px] leading-relaxed space-y-1">
                      <p>{submitError}</p>
                      <p className="text-[#a3a9b8]">
                        You can also reach us at{" "}
                        <a
                          href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
                            `Project Inquiry - ${formData.fullName || "DevSyntix"}`
                          )}&body=${encodeURIComponent(formData.message || "")}`}
                          className="text-[#4da3ff] underline underline-offset-2"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[13px] font-medium text-[#a3a9b8] mb-1.5"
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className={`${inputClasses} h-11`}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[13px] font-medium text-[#a3a9b8] mb-1.5"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className={`${inputClasses} h-11`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[13px] font-medium text-[#a3a9b8] mb-1.5"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Optional"
                        className={`${inputClasses} h-11`}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[13px] font-medium text-[#a3a9b8] mb-1.5"
                      >
                        Phone number
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-[13px] font-mono tabular-nums text-[#7a8296] pointer-events-none border-r border-[#eef0f5]/[0.08] pr-2.5">
                          +91
                        </span>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          inputMode="numeric"
                          pattern="[0-9]{10}"
                          maxLength={10}
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          placeholder="10-digit number"
                          required
                          className={`${inputClasses} h-11 pl-16 font-mono tabular-nums`}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[13px] font-medium text-[#a3a9b8] mb-1.5"
                    >
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Scope, goals, and target timeline"
                      rows={4}
                      required
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-press w-full sm:w-auto h-11 px-6 rounded-[8px] font-medium text-[14px] text-[#0b0d14] bg-[#eef0f5] hover:bg-white flex items-center justify-center gap-2 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4da3ff]"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#0b0d14]/30 border-t-[#0b0d14] rounded-full animate-spin" />
                          <span>Sending</span>
                        </>
                      ) : (
                        <>
                          <span>Send message</span>
                          <Send className="w-4 h-4" strokeWidth={1.5} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Direct Details & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="surface-card flex items-start gap-4 p-5 rounded-[12px]"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-[8px] bg-[#1a1e28] border border-[#eef0f5]/[0.08] flex items-center justify-center text-[#a3a9b8]">
                <Mail className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <span className="text-[12px] text-[#7a8296] block">
                  Email
                </span>
                <p className="text-[15px] font-medium text-[#eef0f5] mt-0.5 truncate">
                  {siteConfig.contact.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="surface-card flex items-start gap-4 p-5 rounded-[12px]"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-[8px] bg-[#1a1e28] border border-[#eef0f5]/[0.08] flex items-center justify-center text-[#a3a9b8]">
                <Phone className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-[12px] text-[#7a8296] block">
                  Phone consultation
                </span>
                <p className="text-[15px] font-medium font-mono tabular-nums text-[#eef0f5] mt-0.5">
                  {siteConfig.contact.phone}
                </p>
                <p className="text-[12px] text-[#7a8296] mt-0.5">
                  Mon–Sat, call &amp; WhatsApp
                </p>
              </div>
            </a>

            <div className="p-5 rounded-[12px] bg-[#11141c] border border-[#eef0f5]/[0.08]">
              <span className="text-[12px] text-[#7a8296] block mb-3">
                Channels
              </span>
              <div className="grid grid-cols-5 gap-2">
                {socialList.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="btn-press h-10 rounded-[8px] bg-[#07080d] border border-[#eef0f5]/[0.08] hover:border-[#eef0f5]/[0.18] flex items-center justify-center text-[#7a8296] hover:text-[#eef0f5]"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
