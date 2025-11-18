"use client";

import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/registry/magicui/flickering-grid";
import { 
  Stethoscope,
  ShoppingBag,
  Rocket,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    id: "healthcare",
    icon: Stethoscope,
    title: "Clinics & Healthcare",
    description: "Appointment-driven websites, SEO, and digital branding that improve patient reach.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    hoverGlow: "hover:shadow-blue-500/20"
  },
  {
    id: "fashion",
    icon: ShoppingBag,
    title: "Fashion & Retail",
    description: "Brand identity, ecommerce sites, lookbook creatives, packaging & social visuals.",
    gradient: "from-pink-500/10 to-purple-500/10",
    iconColor: "text-pink-400",
    borderColor: "border-pink-500/20",
    hoverGlow: "hover:shadow-pink-500/20"
  },
  {
    id: "startups",
    icon: Rocket,
    title: "Startups & Small Businesses",
    description: "Complete branding, website setup, lead-generation funnels & marketing support.",
    gradient: "from-orange-500/10 to-amber-500/10",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/20",
    hoverGlow: "hover:shadow-orange-500/20"
  }
];

export function UseCasesSection() {
  return (
    <section className="py-8 px-4 md:py-12 lg:py-14 bg-white dark:bg-[#221E1A] overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-12 lg:py-14">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-600">INDUSTRIES WE SPECIALIZE IN</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-[#012A38] dark:text-white leading-tight">
            Designed for Your Industry.
            <br />
            <span className="highlight">
              Built for Your Success.
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We create tailored digital solutions for industries that demand results.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 transition-all duration-300 hover:shadow-xl hover:border-orange-500/30 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 text-[#012A38] group-hover:text-orange-600 transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-sm">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/services">
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg shadow-orange-500/20"
            >
              Explore All Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
