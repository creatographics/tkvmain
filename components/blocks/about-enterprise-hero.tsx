export function EnterpriseHero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container max-w-5xl relative">
        <div className="flex flex-col items-center text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.29em] text-orange-600 mb-6">
            TKV Creatographics for Enterprises
          </p>
          
          <h1 className="text-[44px] sm:text-[60px] lg:text-[74px] font-semibold tracking-tight leading-[103%] max-w-[800px] text-gray-900 mb-6">
            Creative excellence for the world's best
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-[590px] mb-10">
            Give your team the tools to centralize, secure, and simplify your brand.
            Increase creative velocity, redefine collaboration, and optimize design spend with TKV Creatographics.
          </p>
          
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-orange-700"
          >
            <span>Talk to our team</span>
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 20 20" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
