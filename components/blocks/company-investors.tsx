export function CompanyInvestors() {
  const partners = [
    { name: "Boutique Villa", logo: "BV" },
    { name: "Soulful Boutique", logo: "SB" },
    { name: "Edenfrost", logo: "EF" },
    { name: "Gratitude", logo: "GR" },
    { name: "Odentiti", logo: "OD" },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600 mb-3">
            Trusted By
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
            Partnering with <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">innovative brands</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-gray-200 bg-white p-8 transition-all hover:border-orange-500/40 hover:shadow-lg flex items-center justify-center"
            >
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-orange-100 mb-3 group-hover:from-orange-100 group-hover:to-orange-200 transition-all">
                  <span className="text-xl font-bold text-orange-600">{partner.logo}</span>
                </div>
                <p className="text-xs font-medium text-gray-600">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            And <span className="font-semibold text-gray-700">50+ more</span> amazing clients across India
          </p>
        </div>
      </div>
    </section>
  );
}
