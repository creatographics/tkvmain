import { Lightbulb, Shield, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Creativity with Purpose",
    description: "Bold ideas grounded in business logic and strategy."
  },
  {
    icon: Shield,
    title: "Integrity & Clarity",
    description: "Honest communication, clear deliverables, no hidden surprises."
  },
  {
    icon: Users,
    title: "Collaboration & Ownership",
    description: "We work with you as one team, owning your goals as our own."
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description: "Your growth is our growth — everything we build is meant to scale."
  }
];

export function MissionValues() {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-5xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Our Mission */}
          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-orange-50/30 to-white p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600 mb-3">
              Our Mission
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight mb-4">
              Empowering business <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">growth</span>
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              To empower businesses of all sizes by delivering design and digital solutions that drive growth — not just today but as your business evolves. We aim to be your creative partner at every stage: launch, scale, and beyond.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">15+</div>
                <div className="text-xs text-gray-500 mt-1">Years</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">200+</div>
                <div className="text-xs text-gray-500 mt-1">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">100%</div>
                <div className="text-xs text-gray-500 mt-1">Dedicated</div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="grid grid-cols-2 gap-1">
                <div className="h-3 w-3 rounded bg-orange-600"></div>
                <div className="h-3 w-3 rounded bg-orange-300"></div>
                <div className="h-3 w-3 rounded bg-orange-300"></div>
                <div className="h-3 w-3 rounded bg-orange-600"></div>
              </div>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600">
              Our Values
            </p>
            <div className="relative space-y-8">
              {/* Timeline Line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-orange-600 via-orange-400 to-orange-200"></div>
              
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="group relative flex items-start gap-6"
                  >
                    {/* Icon Circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
