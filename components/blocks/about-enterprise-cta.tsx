export function EnterpriseCTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-600 to-orange-700 p-12 md:p-16 text-center">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }} />
          </div>

          <div className="relative z-10">
            <h2 className="text-[32px] md:text-[52px] lg:text-[64px] font-bold text-white leading-[98%] mb-5">
              Excellence starts today
            </h2>
            
            <p className="text-base md:text-lg text-orange-50 max-w-[483px] mx-auto mb-8">
              Join the world's best companies who trust TKV Creatographics for their creative needs.
              Let's build something extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-orange-600 shadow-lg transition-all hover:shadow-xl hover:scale-105"
              >
                <span>Schedule a consultation</span>
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </a>

              <a
                href="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white hover:text-orange-600"
              >
                <span>View our work</span>
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-orange-500/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
                <div>
                  <div className="text-3xl font-bold mb-1">500+</div>
                  <div className="text-sm text-orange-100">Projects delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">98%</div>
                  <div className="text-sm text-orange-100">Client satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">15+</div>
                  <div className="text-sm text-orange-100">Years experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm text-orange-100">Support available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
