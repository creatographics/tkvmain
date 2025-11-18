"use client";

import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/registry/magicui/flickering-grid";
import { cn } from "@/lib/utils";
import ServicesBentoGrid from "@/components/services-bento-grid";

export const Pricing = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "py-8 px-4 md:py-12 lg:py-14 bg-gradient-to-b from-slate-50 via-slate-50/50 to-white dark:from-[#171210] dark:via-[#1A1512] dark:to-[#171210] overflow-hidden",
        className
      )}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-12 lg:py-14">
        <div className="space-y-4 text-center mb-8 md:mb-12">
          <h2 className="text-2xl tracking-tight md:text-3xl lg:text-4xl text-[#012A38] dark:text-white">
            Our <span className="highlight">Services</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mx-auto max-w-2xl leading-snug text-balance">
            Comprehensive digital solutions to transform your business. From design to development, 
            we deliver excellence across all creative and technical services.
          </p>
        </div>

        <ServicesBentoGrid />

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Need a custom solution? We've got you covered.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg shadow-orange-500/20">
            Get a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};
