export function CollaborationSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center text-center mb-11 lg:mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.045em] text-orange-600 mb-6">
            Work Better Together
          </p>
          
          <h2 className="text-[44px] md:text-[56px] font-semibold tracking-tight leading-none text-gray-900 max-w-[520px] mb-4">
            More collaboration.
            <br />
            Less revisions.
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-[506px]">
            See what your teammates are working on, comment, and share design files.
            Building great brands is a multiplayer game, so let's start collaborating.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Collaboration Features */}
          <div className="space-y-6">
            <div className="p-6 border rounded-xl bg-gray-50 border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Real-time feedback</h3>
                  <p className="text-gray-600">
                    Comment directly on designs and get instant notifications when changes are made.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border rounded-xl bg-gray-50 border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Team collaboration</h3>
                  <p className="text-gray-600">
                    Work together seamlessly with your entire team on every project.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Card */}
          <div className="p-8 border rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
            <h3 className="font-bold text-gray-900 text-[36px] leading-[120%] tracking-[-0.01em] mb-4">
              Keep your files in your cloud.
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-[389px] mb-4">
              Store all your design files in your cloud account. Stay compliant and in control of your data with the TKV platform.
            </p>
            <a
              href="/security"
              className="group inline-flex items-center text-lg md:text-xl text-orange-600 hover:text-orange-700"
            >
              <span className="mr-1">See security & compliance</span>
              <svg className="transition-all relative top-[1px] h-4 w-4 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl bg-gray-50 border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Version control</h4>
            <p className="text-sm text-gray-600">
              Track every change and revert to previous versions anytime.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-gray-50 border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Easy sharing</h4>
            <p className="text-sm text-gray-600">
              Share designs with stakeholders with a single click.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-gray-50 border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Secure access</h4>
            <p className="text-sm text-gray-600">
              Control who can view and edit with granular permissions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
