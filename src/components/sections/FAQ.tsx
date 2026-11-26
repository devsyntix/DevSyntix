"use client";

import React, { useState } from "react";
import { Plus, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="bg-[#0b0d14] border-t border-[#eef0f5]/[0.08] px-4 sm:px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          tag="Questions"
          title="Common engineering questions"
          subtitle="Clear answers on scope, supported technologies, timelines, and ongoing maintenance"
        />

        <div className="mt-10 rounded-[12px] bg-[#11141c] border border-[#eef0f5]/[0.08] divide-y divide-[#eef0f5]/[0.08] overflow-hidden">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const itemNumber = String(index + 1).padStart(2, "0");

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className={`w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4da3ff] ${
                    isOpen ? "bg-[#151923]" : "hover:bg-[#151923]/60"
                  }`}
                >
                  <div className="flex items-baseline gap-3 sm:gap-4 min-w-0">
                    <span className="text-[12px] font-mono tabular-nums text-[#7a8296] flex-shrink-0">
                      {itemNumber}
                    </span>
                    <h3
                      className={`text-[15px] sm:text-[16px] font-medium leading-snug transition-colors duration-150 ${
                        isOpen ? "text-[#eef0f5]" : "text-[#eef0f5]/90"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0 text-[#7a8296] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "rotate-45 text-[#eef0f5]" : "rotate-0"
                    }`}
                  >
                    <Plus className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 bg-[#151923]"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 pl-12 sm:pl-14 text-[14px] text-[#a3a9b8] leading-[1.6] whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Inline CTA Strip */}
        <div className="mt-6 p-6 rounded-[12px] bg-[#11141c] border border-[#eef0f5]/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-[16px] font-medium text-[#eef0f5]">
              Have a specific technical requirement
            </h3>
            <p className="text-[14px] text-[#a3a9b8]">
              Share your architecture or timeline directly with our team
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-press inline-flex items-center justify-center gap-2 h-10 px-4 rounded-[8px] text-[14px] font-medium bg-[#1a1e28] text-[#eef0f5] border border-[#eef0f5]/[0.1] hover:border-[#eef0f5]/[0.2] hover:bg-[#212633] flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4da3ff]"
          >
            <span>Contact team</span>
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
