export function TechSpendSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center text-center mb-11">
          <p className="text-[11px] font-semibold uppercase tracking-[0.045em] text-orange-600 mb-6">
            Optimize Tech Spend
          </p>
          
          <h2 className="text-[44px] md:text-[56px] font-semibold tracking-tight leading-none text-gray-900 max-w-[600px] mb-4">
            Consolidate your design stack
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-[580px]">
            Replace multiple design tools and subscriptions with one comprehensive platform.
            Save money while improving quality and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Cost Comparison Card */}
          <div className="p-8 border rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
            <h3 className="font-bold text-2xl text-gray-900 mb-6">Traditional approach</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Design software licenses</span>
                <span className="font-semibold text-gray-900">$2,400/mo</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Stock photo subscriptions</span>
                <span className="font-semibold text-gray-900">$500/mo</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Freelance designers</span>
                <span className="font-semibold text-gray-900">$5,000/mo</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Project management tools</span>
                <span className="font-semibold text-gray-900">$300/mo</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-gray-900">Total monthly cost</span>
                <span className="font-bold text-2xl text-gray-900">$8,200</span>
              </div>
            </div>
          </div>

          {/* TKV Solution Card */}
          <div className="p-8 border rounded-xl bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200">
            <h3 className="font-bold text-2xl text-gray-900 mb-6">TKV Creatographics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-orange-200">
                <span className="text-gray-600">All design services</span>
                <span className="font-semibold text-gray-900">Included</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-orange-200">
                <span className="text-gray-600">Unlimited revisions</span>
                <span className="font-semibold text-gray-900">Included</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-orange-200">
                <span className="text-gray-600">Project management</span>
                <span className="font-semibold text-gray-900">Included</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-orange-200">
                <span className="text-gray-600">Dedicated support</span>
                <span className="font-semibold text-gray-900">Included</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-gray-900">Total monthly cost</span>
                <span className="font-bold text-2xl bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">$3,500</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg border border-orange-200">
              <p className="text-center">
                <span className="font-bold text-2xl bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Save $4,700/mo</span>
                <span className="block text-sm text-gray-600 mt-1">That's $56,400 per year</span>
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 border rounded-xl bg-gray-50 border-gray-200 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-2">
              57%
            </div>
            <p className="text-sm text-gray-600">Average cost reduction</p>
          </div>

          <div className="p-6 border rounded-xl bg-gray-50 border-gray-200 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-2">
              3x
            </div>
            <p className="text-sm text-gray-600">Faster project delivery</p>
          </div>

          <div className="p-6 border rounded-xl bg-gray-50 border-gray-200 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-sm text-gray-600">Quality guaranteed</p>
          </div>

          <div className="p-6 border rounded-xl bg-gray-50 border-gray-200 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-sm text-gray-600">Support availability</p>
          </div>
        </div>
      </div>
    </section>
  );
}
