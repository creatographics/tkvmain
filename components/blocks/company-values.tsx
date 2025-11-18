import { Lightbulb, Heart, Target, Zap } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We constantly push boundaries and explore new creative solutions to deliver exceptional results."
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships based on trust and transparency."
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Every project is measured by impact. We focus on delivering measurable business outcomes."
  },
  {
    icon: Zap,
    title: "Agile & Fast",
    description: "We move quickly without compromising quality, adapting to your evolving business needs."
  }
];

export function CompanyValues() {
  return (
    <section id="values" className="py-12 md:py-16">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600 mb-3">
            Our Values
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight max-w-3xl mx-auto">
            The principles that <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">guide everything</span> we do
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-orange-500/40 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4">
                  <div className="relative h-12 w-12 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center group-hover:from-orange-100 group-hover:to-orange-200 transition-all">
                    <Icon className="h-6 w-6 text-orange-600 relative z-10" strokeWidth={1.5} />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-600/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
