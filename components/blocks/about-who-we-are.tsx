export function WhoWeAre() {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-5xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Who We Are */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex gap-1">
                <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                <div className="h-2 w-2 rounded-full bg-orange-400"></div>
                <div className="h-2 w-2 rounded-full bg-orange-200"></div>
              </div>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600">
              Who We Are
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
              Full-service <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">design & digital</span> agency
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Founded and led by industry veteran <span className="font-semibold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">VikramRaja</span>, TKV Creatographics is a full-service design & digital agency based in Pondicherry. With over <span className="font-semibold text-gray-900">15 years of experience</span> in branding, web design, graphic design and digital marketing, we combine creativity with strategic thinking to deliver holistic solutions for businesses that want to stand out and scale.
            </p>
          </div>

          {/* Our Vision */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-1">
                <div className="h-2.5 w-2.5 rounded-full bg-orange-600"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-orange-400"></div>
              </div>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600">
              Our Vision
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
              Beyond the logo
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We believe that a brand is much more than a logo — it's an experience, a journey, and the sum of every visual and digital touchpoint. Our vision is to elevate ideas into impactful brands and design digital ecosystems that are as functional as they are beautiful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
