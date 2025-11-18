export function PerformanceSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center text-center mb-11 lg:mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.045em] text-orange-600 mb-6">
            Unbeatable Performance
          </p>
          
          <h2 className="text-[44px] md:text-[56px] font-semibold tracking-tight leading-none text-gray-900 max-w-[439px] mb-4">
            Deliver projects as fast as you want
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-[485px]">
            You set how fast we deliver. Get answers to design questions faster than ever
            and rapidly improve project turnaround speeds.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          {/* Main Card */}
          <div className="flex-1 border rounded-xl backdrop-blur-sm flex flex-col-reverse sm:flex-row lg:flex-col-reverse sm:justify-end lg:justify-start bg-gray-50 border-gray-200">
            <div className="grow p-8">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-orange-600">∞</div>
                  <p className="text-sm text-gray-600 mt-2">Unlimited revisions</p>
                </div>
              </div>
            </div>
            <div className="px-9 py-8 mr-8 max-w-[321px]">
              <p className="text-gray-600">Deliver up to</p>
              <h3 className="mt-4 text-[36px] md:text-[48px] leading-[90%]">
                <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">100+</span>
                <br />
                <span className="text-gray-900">projects per month</span>
              </h3>
              <p className="mt-4 lg:-mr-16 text-gray-600">
                Enabled by our dedicated team of designers, a radically better approach to creative production.
              </p>
            </div>
          </div>

          {/* Side Cards */}
          <div className="lg:flex-1 flex flex-col sm:flex-row lg:flex-col gap-5">
            <div className="flex-1 p-9 border rounded-xl backdrop-blur-sm flex flex-col justify-end bg-gray-50 border-gray-200">
              <div className="h-20 mb-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg" />
              <h4 className="font-bold text-lg md:text-xl text-gray-900 leading-[124%]">
                Faster delivery equals faster growth
              </h4>
              <p className="mt-2 text-gray-600">
                Stop wasting time waiting for designs to finish and spend more time growing your business,
                even with large project volumes.
              </p>
            </div>
            
            <div className="flex-1 p-9 border rounded-xl backdrop-blur-sm flex flex-col justify-end bg-gray-50 border-gray-200">
              <div className="h-20 mb-4 bg-gradient-to-r from-orange-600/20 to-orange-700/20 rounded-lg" />
              <h4 className="font-bold text-lg md:text-xl text-gray-900 leading-[124%]">
                Infinite scalability, zero-config
              </h4>
              <p className="mt-2 text-gray-600">
                We scale everything seamlessly and automatically. Stop worrying about project spikes,
                keep requesting designs, and enjoy uninterrupted service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
