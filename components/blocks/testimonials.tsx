"use client";

import { ReactNode, useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

import { Quote } from "lucide-react";
import { FlickeringGrid } from "@/registry/magicui/flickering-grid";
import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DashedLine } from "@/components/ui/dashed-line";

const items = [
  {
    quote: "TKV Creatographics rebuilt our booking experience with a responsive site and ADA-compliant UI that doubled appointment requests in one quarter.",
    author: "Aparna Menon",
    role: "Head of Digital",
    company: "Naturals",
    highlights: ["rebuilt", "responsive site", "ADA-compliant UI", "doubled appointment requests"],
  },
  {
    quote: "Their brand identity workshop translated our security-first values into a cohesive logo system and investor collateral that lands enterprise deals.",
    author: "Michael Reyes",
    role: "VP Marketing",
    company: "Palo Alto",
    highlights: ["brand identity workshop", "cohesive logo system", "investor collateral", "enterprise deals"],
  },
  {
    quote: "The Shopify revamp and conversion funnels TKV built lifted Veira's average order value by 42% while keeping fulfillment crystal clear.",
    author: "Ritika Sharma",
    role: "Head of E-commerce",
    company: "Veira",
    highlights: ["Shopify revamp", "conversion funnels", "average order value", "42%"],
  },
  {
    quote: "Weekly SEO sprints and long-form content briefs pushed Tradegully from page five to the top three positions for every strategic keyword we track.",
    author: "Raghav Patel",
    role: "Growth Lead",
    company: "Tradegully",
    highlights: ["SEO sprints", "long-form content briefs", "top three positions", "strategic keyword"],
  },
  {
    quote: "Social media playbooks from TKV gave Unpause plug-and-play reels, caption formulas, and dashboards that saved ten hours every week.",
    author: "Mira Sood",
    role: "Social Media Manager",
    company: "Unpause",
    highlights: ["Social media playbooks", "plug-and-play reels", "caption formulas", "saved ten hours"],
  },
  {
    quote: "Marketing automation flows built in Klaviyo now nurture Metamind's leads automatically and recovered 28% more abandoned demos in Q2.",
    author: "Karthik Iyer",
    role: "CRM Strategist",
    company: "Metamind",
    highlights: ["Marketing automation flows", "Klaviyo", "nurture leads", "recovered 28%"],
  },
  {
    quote: "UI/UX prototypes and moderated usability tests from TKV cut Inaura's onboarding drop-off in half before the app even hit beta.",
    author: "Aisha Rahman",
    role: "Product Lead",
    company: "Inaura",
    highlights: ["UI/UX prototypes", "moderated usability tests", "onboarding drop-off", "in half"],
  },
  {
    quote: "Ongoing maintenance retainers mean Datanimbus gets security patches, analytics insights, and stakeholder reports before we even ask.",
    author: "Omkar Bhosale",
    role: "Operations Director",
    company: "Datanimbus",
    highlights: ["maintenance retainers", "security patches", "analytics insights", "stakeholder reports"],
  },
];

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const highlightWords = (text: string, words: string[]): ReactNode => {
  if (!words?.length) {
    return text;
  }

  const pattern = words.map(escapeRegExp).join("|");
  const regex = new RegExp(`(${pattern})`, "gi");

  return text.split(regex).map((part, index) => {
    const matches = words.find((word) => word.toLowerCase() === part.toLowerCase());

    if (matches) {
      return (
        <span key={`${part}-${index}`} className="text-[#012A38] font-bold">
          {part}
        </span>
      );
    }

    return (
      <span key={`${part}-${index}`} className="text-slate-600">
        {part}
      </span>
    );
  });
};

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  const autoplay = useRef(
    Autoplay({
      delay: 5500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <>
      <section
        className={cn(
          "py-8 px-4 md:py-12 lg:py-14 bg-gradient-to-b from-white via-orange-50/20 to-white dark:from-[#171210] dark:via-[#171210] dark:to-[#1A1512] overflow-hidden",
          className
        )}
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-12 lg:py-14">
          <div className="space-y-4 mb-8 md:mb-12">
            <h2 className="text-2xl tracking-tight md:text-3xl lg:text-4xl text-[#012A38] dark:text-white">
              What Our <span className="highlight">Clients</span> Say
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-md leading-snug">
              TKV Creatographics is built on the principles that make the best creative partnerships
              successful: <span className="highlight-grey">understanding vision</span>, delivering excellence, and always exceeding
              <span className="highlight-grey">expectations</span>.
            </p>
          </div>

          <div className="relative -mr-6 md:-mr-10 lg:-mr-14">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[autoplay.current]}
              className="w-full"
            >
              <CarouselContent className="">
                {items.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="group basis-full sm:basis-1/2 lg:basis-1/3 transition-all duration-700 ease-out"
                  >
                    <Card
                      className={cn(
                        "h-full overflow-hidden border border-border/40 bg-gradient-to-br from-card/70 via-transparent to-card/20 backdrop-blur-sm transition-all duration-700 ease-out hover:border-orange-500/30",
                        "opacity-100 translate-y-0 group-aria-hidden:opacity-20 group-aria-hidden:translate-y-6 motion-reduce:transition-none motion-reduce:transform-none"
                      )}
                    >
                      <CardContent className="flex h-full flex-col justify-between gap-8 p-6 md:p-8">
                        <div className="space-y-5">
                          <div className="flex items-center justify-between">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200/60">
                              <Quote className="h-3.5 w-3.5 text-orange-500" />
                              <span className="text-xs font-semibold text-orange-700">Client Review</span>
                            </div>
                          </div>
                          <blockquote className="font-display text-sm font-medium leading-relaxed text-muted-foreground md:text-base lg:text-lg">
                            “{highlightWords(testimonial.quote, testimonial.highlights)}”
                          </blockquote>
                        </div>
                        <div className="space-y-1">
                          <div className="text-primary font-semibold">
                            {testimonial.author}
                          </div>
                          <div className="text-muted-foreground text-sm">
                            {testimonial.role} · {testimonial.company}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
        </div>
        </div>
      </section>
    </>
  );
};
