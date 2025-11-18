import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase } from "lucide-react";

export function CareersCTA() {
  return (
    <section className="container max-w-5xl">
      <div className="relative overflow-hidden rounded-2xl border border-orange-500/20 bg-gradient-to-br from-[#0A0A0A] via-[#1A0F0A] to-[#0A0A0A] p-12 md:p-16 lg:p-20 text-center">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_50%)]" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border border-orange-500/30 bg-orange-500/10 mb-6 md:mb-8">
            <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-orange-400" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Join <span className="highlight">Our Team</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
            We're always looking for talented designers, developers, and creatives who are passionate about building exceptional digital experiences. Explore our open positions and become part of something special.
          </p>
          
          <Link href="/careers">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 h-12 px-8 text-base"
            >
              View Open Roles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
