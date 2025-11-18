'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CompanyHero() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container max-w-6xl">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600">
            ABOUT US
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-bold tracking-tight leading-[1.1] text-gray-900 mb-6">
          Building the future of{' '}
          <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            creative excellence
          </span>
        </h1>

        {/* Description */}
        <p className="text-center text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
          We're a team of passionate designers, developers, and strategists dedicated to helping businesses transform their digital presence and achieve remarkable growth.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors"
          >
            <span>Join Our Team</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
          </Link>
          <Link 
            href="#values"
            className="group inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
          >
            <span>Our Values</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
