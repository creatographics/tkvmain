'use client';

import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/registry/magicui/flickering-grid";
import { ArrowRight, Palette, Layers, Sparkles, PenTool, Search, FileText, Share2, Mail, Code, ShoppingCart, Smartphone, Wrench } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const servicesColumn1 = [
  { name: "Web Design", description: "Responsive & Modern", icon: Palette },
  { name: "UI/UX Design", description: "User-Centered Design", icon: Layers },
  { name: "Brand Identity", description: "Logo & Guidelines", icon: Sparkles },
  { name: "Graphic Design", description: "Visual Content", icon: PenTool },
];

const servicesColumn2 = [
  { name: "SEO Optimization", description: "Search Rankings", icon: Search },
  { name: "Content Marketing", description: "Strategic Content", icon: FileText },
  { name: "Social Media", description: "Community Growth", icon: Share2 },
  { name: "Email Marketing", description: "Campaign Management", icon: Mail },
  { name: "PPC Advertising", description: "Paid Campaigns", icon: Search },
  { name: "Analytics & Reporting", description: "Data Insights", icon: FileText },
  { name: "Influencer Marketing", description: "Brand Partnerships", icon: Share2 },
  { name: "Marketing Automation", description: "Workflow Optimization", icon: Mail },
];

const servicesColumn3 = [
  { name: "Web Development", description: "Custom Solutions", icon: Code },
  { name: "E-Commerce", description: "Online Stores", icon: ShoppingCart },
  { name: "Mobile Apps", description: "iOS & Android", icon: Smartphone },
  { name: "Maintenance", description: "Ongoing Support", icon: Wrench },
];

export function FinalCTAIntegration() {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const scrollRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer1 = scrollRef1.current;
    const scrollContainer2 = scrollRef2.current;
    const scrollContainer3 = scrollRef3.current;

    if (!scrollContainer1 || !scrollContainer2 || !scrollContainer3) return;

    let scrollPosition1 = 0;
    let scrollPosition2 = 0;
    let scrollPosition3 = 0;
    const scrollSpeed = 0.5;
    let animationId: number;

    const animate = () => {
      // Column 1: Scroll up
      scrollPosition1 += scrollSpeed;
      const maxScroll1 = scrollContainer1.scrollHeight / 3;
      if (scrollPosition1 >= maxScroll1) {
        scrollPosition1 = 0;
      }
      scrollContainer1.style.transform = `translateY(-${scrollPosition1}px)`;

      // Column 2: Scroll down (opposite direction) - infinite loop
      scrollPosition2 += scrollSpeed;
      const maxScroll2 = scrollContainer2.scrollHeight / 3;
      if (scrollPosition2 >= maxScroll2) {
        scrollPosition2 = 0;
      }
      // Negative transform to scroll down visually
      scrollContainer2.style.transform = `translateY(-${maxScroll2 - scrollPosition2}px)`;

      // Column 3: Scroll up
      scrollPosition3 += scrollSpeed;
      const maxScroll3 = scrollContainer3.scrollHeight / 3;
      if (scrollPosition3 >= maxScroll3) {
        scrollPosition3 = 0;
      }
      scrollContainer3.style.transform = `translateY(-${scrollPosition3}px)`;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="py-16 px-4 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container relative z-10 max-w-[1200px] mx-auto">
        <div className="relative overflow-hidden rounded-[36px] border border-[rgba(15,23,42,0.08)] bg-white/95 px-6 py-10 md:px-10 lg:px-14">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white/70" aria-hidden="true" />
            <FlickeringGrid
              className="absolute inset-0 z-[-1]"
              squareSize={4}
              gridGap={6}
              color="#FFEDD5"
              maxOpacity={0.15}
              flickerChance={0.07}
              height={800}
              width={1200}
            />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - CTA Content */}
          <div className="max-w-xl">
            <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-sm font-medium text-orange-500 mb-6">
              Full-Service Agency
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-[#012A38]">
              Everything you need to{' '}
              <span style={{
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
              }}>
                grow online
              </span>
            </h2>
            
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              From stunning web design to powerful marketing strategies, we offer comprehensive creative and digital solutions to help your business stand out and succeed.
            </p>
            
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg shadow-orange-500/20"
            >
              <Link href="/services" className="gap-2">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Right side - 3 Column Animated Grid */}
          <div 
            className="relative h-[500px] overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
            }}
          >
            <div className="grid grid-cols-3 gap-3 h-full">
              {/* Column 1 - Scroll Up */}
              <div className="relative overflow-hidden">
                <div 
                  ref={scrollRef1}
                  className="space-y-3"
                  style={{ willChange: 'transform' }}
                >
                  {[...servicesColumn1, ...servicesColumn1, ...servicesColumn1].map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={index}
                        className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-4 hover:border-orange-500/30 transition-all duration-300"
                      >
                        <div className="flex flex-col gap-2">
                          <div className="w-8 h-8 rounded bg-muted/50 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-foreground/60" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm text-foreground mb-1">{service.name}</h3>
                            <p className="text-xs text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Column 2 - Scroll Down */}
              <div className="relative overflow-hidden">
                <div 
                  ref={scrollRef2}
                  className="space-y-3"
                  style={{ willChange: 'transform' }}
                >
                  {[...servicesColumn2, ...servicesColumn2, ...servicesColumn2].map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={index}
                        className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-4 hover:border-orange-500/30 transition-all duration-300"
                      >
                        <div className="flex flex-col gap-2">
                          <div className="w-8 h-8 rounded bg-muted/50 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-foreground/60" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm text-foreground mb-1">{service.name}</h3>
                            <p className="text-xs text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Column 3 - Scroll Up */}
              <div className="relative overflow-hidden">
                <div 
                  ref={scrollRef3}
                  className="space-y-3"
                  style={{ willChange: 'transform' }}
                >
                  {[...servicesColumn3, ...servicesColumn3, ...servicesColumn3].map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={index}
                        className="bg-card/50 backdrop-blur border border-border/50 rounded-lg p-4 hover:border-orange-500/30 transition-all duration-300"
                      >
                        <div className="flex flex-col gap-2">
                          <div className="w-8 h-8 rounded bg-muted/50 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-foreground/60" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm text-foreground mb-1">{service.name}</h3>
                            <p className="text-xs text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
