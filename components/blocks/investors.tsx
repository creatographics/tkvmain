const team = [
  {
    name: "Karthik V",
    role: "Founder & Creative Director",
    focus: "Brand Strategy · Motion Direction",
    initials: "KV",
  },
  {
    name: "Priya Sharma",
    role: "Lead Designer",
    focus: "Identity Systems · UI Craft",
    initials: "PS",
  },
  {
    name: "Rahul Kumar",
    role: "Senior Developer",
    focus: "Next.js · Web Animations",
    initials: "RK",
  },
  {
    name: "Meera Patel",
    role: "Marketing Lead",
    focus: "Campaign Strategy · Performance",
    initials: "MP",
  },
  {
    name: "Vikram Singh",
    role: "3D Artist",
    focus: "Product Visuals · Motion",
    initials: "VS",
  },
  {
    name: "Arjun Nair",
    role: "Cinematographer",
    focus: "Films · Post Production",
    initials: "AN",
  },
];

export function Investors() {
  return (
    <section className="container max-w-5xl">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)]">
        <div className="space-y-6 lg:space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-orange-400">
            Inside TKV
          </div>
          <div className="space-y-4">
            <h2 className="text-[2.15rem] font-semibold tracking-tight text-foreground md:text-[2.45rem]" style={{
              fontWeight: '500',
              color: '#FAFAFA'
            }}>
              Meet the <span className="highlight">makers</span> guiding every glow-up
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Strategy minds, motion wizards, and detail-obsessed builders working in sync. Together we craft expressive brands, cinematic visuals, and web experiences that move people to action.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-orange-500/15 bg-gradient-to-br from-[#0E0E0E] via-[#0C0C0C] to-[#080808] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-orange-500/70 mb-3">
                Collective Experience
              </p>
              <p className="text-3xl font-semibold text-white">
                45+ years
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Across brand, product, film, and digital.
              </p>
            </div>
            <div className="rounded-xl border border-orange-500/15 bg-gradient-to-br from-[#0E0E0E] via-[#0C0C0C] to-[#080808] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-orange-500/70 mb-3">
                Disciplines
              </p>
              <p className="text-3xl font-semibold text-white">
                6 core teams
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Brand • Motion • Product • Growth • Film • Experiential
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {team.map((member) => (
            <article
              key={member.name}
              className="group relative overflow-hidden rounded-2xl border border-orange-500/15 bg-gradient-to-br from-[#0B0B0B] via-[#070707] to-[#050505] p-6 shadow-[0_18px_40px_-28px_rgba(251,146,60,0.35)] transition-all duration-400 hover:border-orange-500/30 hover:shadow-[0_20px_48px_-24px_rgba(251,146,60,0.4)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(251,146,60,0.18),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex flex-col gap-5">
                <header className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-orange-400/70">
                      Core Team
                    </p>
                    <div>
                      <h3 className="text-[1.25rem] font-semibold text-white leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs font-medium uppercase tracking-[0.24em] text-orange-500/70 mt-1">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-orange-500/25 bg-gradient-to-br from-orange-500/20 to-orange-600/15 text-sm font-bold text-orange-200 shadow-inner group-hover:border-orange-400/40 group-hover:text-orange-100">
                    {member.initials}
                  </span>
                </header>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.focus}
                </p>

                <footer className="flex items-center justify-between gap-4 border-t border-orange-500/10 pt-4 text-[11px] text-orange-500/70 uppercase tracking-[0.28em]">
                  <span>Mentors</span>
                  <span className="h-[1px] flex-1 bg-gradient-to-l from-orange-500/60 via-orange-500/30 to-transparent" />
                  <span>Builders</span>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
