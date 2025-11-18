import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, Shield, Zap, Users, Target } from "lucide-react";

const commitments = [
  {
    icon: Heart,
    text: "We will listen deeply to your business goals and challenges."
  },
  {
    icon: Shield,
    text: "We will deliver clean, modern, high-quality design and development aligned with your brand."
  },
  {
    icon: Zap,
    text: "We will set up digital campaigns and strategies that are measurable and optimised."
  },
  {
    icon: Target,
    text: "We will stay agile, improving and adapting as your business changes."
  },
  {
    icon: Users,
    text: "We will be your partner, not just a vendor — committed to your long-term success."
  }
];

export function CommitmentCTA() {
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-5xl">
        {/* Our Commitment */}
        <div className="mb-12">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="relative h-10 w-10">
                <div className="absolute inset-0 rounded-lg bg-orange-600 opacity-20"></div>
                <div className="absolute inset-2 rounded-md bg-orange-600 opacity-40"></div>
                <div className="absolute inset-4 rounded-sm bg-orange-600"></div>
              </div>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600 mb-3">
              Our Commitment to You
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight max-w-3xl mx-auto">
              What you can <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">expect from us</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {commitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-orange-500/40 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex flex-col gap-4">
                    {/* Dual Color Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative h-12 w-12 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center group-hover:from-orange-100 group-hover:to-orange-200 transition-all">
                        <Icon className="h-6 w-6 text-orange-600 relative z-10" strokeWidth={1.5} />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-600/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-1 w-8 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
                        <span className="text-xs font-bold text-orange-600">{(index + 1).toString().padStart(2, '0')}</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {commitment.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Let's Create Together CTA */}
        <div className="rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-50 to-white p-8 md:p-12 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-100 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600">
              LET'S WORK TOGETHER
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Ready to <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">elevate your brand</span>?
            </h2>
            
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Are you ready to elevate your brand, build a <span className="font-semibold text-gray-900">powerful web presence</span>, and launch <span className="font-semibold text-gray-900">digital campaigns</span> that convert? Let's talk — we'd love to hear about your vision and see how we can bring it to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link 
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </Link>
              <Link 
                href="/quote"
                className="group inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
              >
                <span>Get a Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
