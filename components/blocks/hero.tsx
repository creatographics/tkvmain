'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from "next/image";
import Marquee from "react-fast-marquee";

import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { DashedLine } from "@/components/ui/dashed-line";
import { Highlighter } from "@/registry/magicui/highlighter";
import { FlickeringGrid } from "@/registry/magicui/flickering-grid";
import { GridPattern } from "@/registry/magicui/grid-pattern";
import DarkVeil from "@/components/DarkVeil";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Creative Excellence",
    description: "Award-winning designs that capture your brand's essence.",
    icon: CircleDot,
  },
  {
    title: "Full-Service Solutions",
    description: "From concept to completion, we handle everything.",
    icon: Blend,
  },
  {
    title: "Fast Turnaround",
    description: "Quick delivery without compromising on quality.",
    icon: Diamond,
  },
  {
    title: "Client Success",
    description: "300+ satisfied clients and growing partnerships.",
    icon: ChartNoAxesColumn,
  },
];

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { theme } = useTheme();
  const [mountedTheme, setMountedTheme] = useState(false);
  const slides = [
    '/homeslider.png',
    '/homeslider1.png',
    '/homeslider2.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    setMountedTheme(true);
  }, []);

  const isDarkMode = mountedTheme ? theme === 'dark' : true;

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-8 px-6 md:px-12 lg:px-16 animate-fade-in opacity-0 relative overflow-hidden"
    >
          <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="relative z-10 flex flex-col gap-8 md:gap-14 lg:flex-row lg:gap-20 lg:items-center">
            {/* Left side - Main content */}
            <div className="flex-1 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/95 text-slate-800 shadow-[0_12px_30px_rgba(15,23,42,0.08)] ring-1 ring-black/5 dark:bg-white/10 dark:text-white dark:ring-white/15 transition-shadow mb-8">
            <span className="rounded-full bg-gradient-to-r from-orange-400/20 to-orange-500/10 px-2 py-0.5 text-[0.7rem] font-semibold text-orange-500">
              New
            </span>
            <span className="text-sm font-medium">Creative Studio Portfolio</span>
            <ArrowRight className="w-4 h-4 text-slate-400" strokeWidth={2.5} />
          </div>

          <h1
            className="text-2xl tracking-tight md:text-3xl lg:text-4xl leading-tight mb-6 text-foreground max-w-3xl"
            style={{
              fontWeight: 500,
            }}
          >
            <span className="block">We Design <span className="highlight">Websites</span> &</span>
            <span className="block"><span className="highlight">Brands</span> That Win <span className="highlight">Customers</span>.</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-xl leading-[1.85]">
            A{' '}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-orange-500/60 bg-white text-[#012A38] shadow-[0_2px_6px_rgba(15,23,42,0.08)] transition-all duration-500 hover:border-orange-500/70 hover:shadow-[0_4px_12px_rgba(15,23,42,0.12)] hover:scale-[1.02]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-orange-500 flex-shrink-0"
              >
                <path d="m12 19 7-7 3 3-7 7-3-3z"/>
                <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                <path d="m2 2 7.586 7.586"/>
                <circle cx="11" cy="11" r="2"/>
              </svg>
              <span className="text-foreground font-medium text-base" style={{
                background: `
                  url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grainFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='4' seed='3'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grainFilter)' opacity='0.2'/%3E%3C/svg%3E"),
                  linear-gradient(to bottom, #FD4821 0%, #FF6A00 50%, #FE7404 100%)
                `,
                backgroundSize: '100px 100px, 100% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'relative',
                display: 'inline-block',
                WebkitTextStrokeWidth: '0px'
              }}>creative design</span>
            </span>{' '}
            and{' '}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-orange-500/60 bg-white text-[#012A38] shadow-[0_2px_6px_rgba(15,23,42,0.08)] transition-all duration-500 hover:border-orange-500/70 hover:shadow-[0_4px_12px_rgba(15,23,42,0.12)] hover:scale-[1.02]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-orange-500 flex-shrink-0"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <span className="text-foreground font-medium text-base" style={{
                background: `
                  url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grainFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='4' seed='3'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grainFilter)' opacity='0.2'/%3E%3C/svg%3E"),
                  linear-gradient(to bottom, #FD4821 0%, #FF6A00 50%, #FE7404 100%)
                `,
                backgroundSize: '100px 100px, 100% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'relative',
                display: 'inline-block',
                WebkitTextStrokeWidth: '0px'
              }}>digital marketing</span>
            </span>{' '}
            agency in Pondicherry — building{' '}
            <Highlighter action="underline" color="#FF9800">
              standout brands
            </Highlighter>{' '}
            and{' '}
            <Highlighter action="highlight" color="#FFE6C7">
              conversion-focused websites
            </Highlighter>.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg shadow-orange-500/20"
            >
              <a href="/contact">
                Get Free Estimate
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border/50 hover:bg-muted/50 text-foreground"
              asChild
            >
              <a href="/about">
                View Our Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Background Slider */}
            <div className="flex-1 hidden lg:block relative min-h-[500px]">
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {slides.map((slide, index) => (
                  <div
                    key={slide}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-1000",
                      currentSlide === index ? "opacity-80" : "opacity-0"
                    )}
                  >
                    <Image
                      src={slide}
                      alt={`Slide ${index + 1}`}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Inline Trusted By Section */}
          <div className="relative z-10 mt-6 md:mt-8">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
              {/* Left: Text */}
              <div className="flex-shrink-0 text-center md:text-left">
                <p className="text-[0.75rem] md:text-sm font-medium text-slate-600 dark:text-slate-300">
                  Trusted by <span className="font-bold text-orange-600">300+</span> businesses worldwide
                </p>
              </div>
              
              {/* Divider */}
              <div className="hidden md:block h-7 w-px bg-slate-300"></div>
              
              {/* Right: Moving Logos */}
              <div className="flex-1 w-full overflow-hidden">
                <Marquee pauseOnHover className="[--duration:22s]" gradient={false}>
                  {[
                    { name: "Naturals", logo: "/images/logos/Naturals.png", width: 90, height: 28 },
                    { name: "Palo Alto", logo: "/images/logos/Paloalto.png", width: 90, height: 28 },
                    { name: "Veira", logo: "/images/logos/Veira.png", width: 90, height: 28 },
                    { name: "Unpause", logo: "/images/logos/unpause.png", width: 90, height: 28 },
                    { name: "Tradegully", logo: "/images/logos/tradegully.png", width: 90, height: 28 },
                    { name: "Metamind", logo: "/images/logos/Metamind.png", width: 90, height: 28 },
                    { name: "Inaura", logo: "/images/logos/Inaura.png", width: 90, height: 28 },
                    { name: "Datanimbus", logo: "/images/logos/Datanimbus.png", width: 100, height: 28 },
                    { name: "Bombay Curry", logo: "/images/logos/Bombay-Curry.png", width: 90, height: 28 },
                  ].map((company, index) => (
                    <div key={index} className="mx-5 flex items-center">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        width={company.width}
                        height={company.height}
                        className="object-contain opacity-60 hover:opacity-100 transition-opacity dark:invert dark:brightness-0 dark:contrast-200"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
          </div>
    </section>
  );
};
