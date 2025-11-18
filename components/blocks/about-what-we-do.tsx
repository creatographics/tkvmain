import Link from "next/link";
import { ArrowRight, Package, Globe, Palette, TrendingUp, FileText } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Brand Identity & Systems",
    description: "Naming, logo, brand guidelines, messaging, visual assets"
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Responsive WordPress sites, performance-first coding, UX-driven layouts"
  },
  {
    icon: Palette,
    title: "Graphic & Print Design",
    description: "Brochures, packaging, stationery, large format, marketing collateral"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Growth",
    description: "Meta-Ads & Google-Ads strategy, social content creation, performance tracking"
  },
  {
    icon: FileText,
    title: "Content Strategy & SEO",
    description: "Blog writing, site optimisation, keyword strategy, ongoing content support"
  }
];

export function WhatWeDo() {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center">
              <div className="h-5 w-5 border-2 border-white rounded-full"></div>
            </div>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600 mb-3">
            What We Do
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight max-w-3xl">
            Comprehensive creative solutions
          </h2>
        </div>

        {/* Services Grid - Compact Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-orange-500/40 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative h-12 w-12 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center group-hover:from-orange-100 group-hover:to-orange-200 transition-all">
                      <Icon className="h-6 w-6 text-orange-600 relative z-10" strokeWidth={1.5} />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-600/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-gray-900 mb-1.5 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* More Services Link */}
          <Link
            href="/services"
            className="group relative rounded-xl border-2 border-dashed border-orange-300 bg-gradient-to-br from-orange-50/50 to-transparent p-5 transition-all hover:border-orange-500 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="relative h-12 w-12 rounded-lg bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-1.5">
                  Explore All Services
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  View our complete service portfolio
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
