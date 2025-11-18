export function StoryFounder() {
  return (
    <section id="our-story" className="py-12 md:py-16">
      <div className="container max-w-5xl">
        {/* Combined Story & Founder - More Creative */}
        <div className="relative rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-orange-50/20 to-white p-8 md:p-10 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-50/60 to-transparent rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 grid gap-8 md:grid-cols-[2fr_1fr]">
            {/* Story Content */}
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600">
                Our Story
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                From studio to <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">full-service agency</span>
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                What started as a modest design studio in Pondicherry has grown into <span className="font-semibold text-gray-900">TKV Creatographics OPC</span>, a registered professional company delivering full-service creative and digital solutions. Over the years, we've built a portfolio spanning start-ups and established businesses, helped brands refresh their identity, migrated sites to WordPress, executed Meta & Google campaigns, and supported clients through transformation.
              </p>
              
              {/* Timeline */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex-1">
                  <div className="h-2 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-200 rounded-full"></div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs font-semibold text-orange-600">2015</span>
                    <span className="text-xs font-semibold text-gray-400">Today</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Card */}
            <div className="rounded-xl border border-orange-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-600 mb-4">
                Meet The Founder
              </p>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    VR
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-green-500 border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    VikramRaja
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                    Founder & CEO
                  </p>
                </div>
                <div className="w-full pt-4 border-t border-gray-200 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Experience</span>
                    <span className="font-semibold text-gray-900">15+ years</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Location</span>
                    <span className="font-semibold text-gray-900">Pondicherry</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Team</span>
                    <span className="font-semibold text-gray-900">Remote</span>
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
