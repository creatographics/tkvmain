const reasons = [
  {
    number: "01",
    title: "End-to-end expertise",
    description: "We don't just craft visuals, we build systems that integrate with your marketing & business goals."
  },
  {
    number: "02",
    title: "Local roots, scaled thinking",
    description: "Based in Pondicherry but equipped to serve clients across India with full technical & creative capability."
  },
  {
    number: "03",
    title: "Transparent & measurable",
    description: "Clear processes, timely delivery, and focus on measurable results, not just outputs."
  },
  {
    number: "04",
    title: "Tailored collaboration",
    description: "We partner with you, understand your business, and build solutions that are uniquely yours."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-1 mb-4">
            <div className="h-8 w-1 bg-orange-600 rounded-full"></div>
            <div className="h-6 w-1 bg-orange-400 rounded-full"></div>
            <div className="h-10 w-1 bg-orange-600 rounded-full"></div>
            <div className="h-7 w-1 bg-orange-300 rounded-full"></div>
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600 mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight max-w-3xl">
            Your strategic partner for growth
          </h2>
        </div>

        {/* Reasons Grid - Fixed Overlap Issue */}
        <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 hover:border-orange-500/40 hover:shadow-lg transition-all">
                {/* Large Background Number - Fixed positioning */}
                <div className="absolute -top-2 -right-2 text-[100px] font-bold text-orange-50 leading-none select-none pointer-events-none">
                  {reason.number}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4 inline-flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center shadow-sm">
                      <span className="text-sm font-bold text-white">{reason.number}</span>
                    </div>
                    <div className="h-1 w-12 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
