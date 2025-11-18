import Link from "next/link";
import { ArrowRight, MapPin, Users } from "lucide-react";

export function CompanyTeam() {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Team Info */}
          <div className="space-y-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600 mb-3">
                Our Team
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight mb-4">
                A passionate team of <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">creative minds</span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                We're a diverse group of designers, developers, strategists, and marketers working together to create exceptional digital experiences. Our remote-first culture allows us to attract top talent from across India.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-orange-600" strokeWidth={1.5} />
                  <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                    10+
                  </span>
                </div>
                <p className="text-sm text-gray-600">Team Members</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-orange-600" strokeWidth={1.5} />
                  <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                    Remote
                  </span>
                </div>
                <p className="text-sm text-gray-600">Work Culture</p>
              </div>
            </div>
          </div>

          {/* Join CTA */}
          <div className="rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-50 to-white p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Join Our Growing Team
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              We're always looking for talented individuals who are passionate about design, technology, and making an impact. If you're ready to work on exciting projects with amazing clients, we'd love to hear from you.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                </div>
                <p className="text-sm text-gray-700">Flexible remote work environment</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                </div>
                <p className="text-sm text-gray-700">Work on diverse, challenging projects</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                </div>
                <p className="text-sm text-gray-700">Continuous learning and growth opportunities</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link 
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
