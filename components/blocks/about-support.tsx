export function SupportSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center text-center mb-11">
          <p className="text-[11px] font-semibold uppercase tracking-[0.045em] text-orange-600 mb-6">
            Concierge-like Creative Support
          </p>
          
          <h2 className="text-[44px] md:text-[56px] font-semibold tracking-tight leading-none text-gray-900 mb-4">
            Expert creative support
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-[580px]">
            Our dedicated creative support team is here to help. From onboarding and brand guidelines
            to any optimizations or revisions. No bots, only talented designers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          <div className="p-9 border rounded-xl bg-gray-50 border-gray-200 max-w-[410px] mx-auto md:mx-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="mb-6">
              <path d="M16.0001 10.3333V16L19.6667 19.6666M28.3334 16C28.3334 22.8115 22.8116 28.3333 16.0001 28.3333C9.18857 28.3333 3.66675 22.8115 3.66675 16C3.66675 9.18845 9.18857 3.66663 16.0001 3.66663C22.8116 3.66663 28.3334 9.18845 28.3334 16Z" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="paint0_linear" x1="3.66675" y1="3.66663" x2="28.3334" y2="28.3333" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ea580c"/>
                  <stop offset="1" stopColor="#fb923c"/>
                </linearGradient>
              </defs>
            </svg>
            <h3 className="font-bold text-xl text-gray-900 leading-[124%] mb-2">
              24-hour response time
            </h3>
            <p className="text-gray-600">
              Get answers to your questions within 24 hours, every time. Our team is always ready to help.
            </p>
          </div>

          <div className="p-9 border rounded-xl bg-gray-50 border-gray-200 max-w-[410px] mx-auto md:mx-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="mb-6">
              <path d="M16 20V16M16 12H16.0133M28.3333 16C28.3333 22.8115 22.8115 28.3333 16 28.3333C9.18845 28.3333 3.66663 22.8115 3.66663 16C3.66663 9.18845 9.18845 3.66663 16 3.66663C22.8115 3.66663 28.3333 9.18845 28.3333 16Z" stroke="url(#paint1_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="paint1_linear" x1="3.66663" y1="3.66663" x2="28.3333" y2="28.3333" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ea580c"/>
                  <stop offset="1" stopColor="#fb923c"/>
                </linearGradient>
              </defs>
            </svg>
            <h3 className="font-bold text-xl text-gray-900 leading-[124%] mb-2">
              Dedicated account manager
            </h3>
            <p className="text-gray-600">
              Work with a dedicated account manager who understands your brand and business goals.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl bg-gray-50 border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Onboarding assistance</h4>
            <p className="text-sm text-gray-600">
              Get help setting up your account, uploading brand assets, and creating your first project.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-gray-50 border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Training & resources</h4>
            <p className="text-sm text-gray-600">
              Access comprehensive guides, video tutorials, and best practices documentation.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-gray-50 border-gray-200">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Migration support</h4>
            <p className="text-sm text-gray-600">
              Work with our experts and move away from complicated legacy systems to TKV Creatographics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
