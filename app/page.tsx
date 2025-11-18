import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Pricing } from "@/components/blocks/pricing";
import { Testimonials } from "@/components/blocks/testimonials";
import { UseCasesSection } from "@/components/blocks/use-cases-section";
import { FinalCTAIntegration } from "@/components/blocks/final-cta-integration";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen py-8 px-4 md:px-8 lg:px-12 bg-white dark:bg-[#171210]">
      <div className="relative w-full max-w-[1400px] mx-auto">
        <div className="relative overflow-hidden rounded-[40px] border border-slate-200/60 dark:border-[#362F28] bg-white dark:bg-[#221E1A]">
          <Hero />
          <Features />
          <UseCasesSection />
          <Testimonials />
          <Pricing />
          <FinalCTAIntegration />
          <FAQ />
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
