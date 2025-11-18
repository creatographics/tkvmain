import { BoxedPageLayout } from '@/components/boxed-page-layout';

export default function PrivacyPolicyPage() {
  return (
    <BoxedPageLayout>
      {/* Hero Section */}
      <section className="relative pt-28 pb-8">
        <div className="container mx-auto px-6 max-w-[800px]">
          <div className="text-center">
            <h1 className="text-white text-[36px] font-bold mb-2">
              Privacy Policy
            </h1>
            <p className="text-[#939DB8] text-[13px]">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 max-w-[800px] pb-16">
        {/* Introduction */}
        <div className="mb-8 pb-6 border-b border-[#1B1E2A]">
          <p className="text-[#939DB8] text-[14px] leading-[170%]">
            This privacy policy discloses the privacy practices for creatographics.com. We are committed to protecting your personal information and your right to privacy.
          </p>
        </div>

        <div className="space-y-8">
          {/* What information do we collect? */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">What information do we collect?</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%]">
              We only collect personally identifiable information from you when you log into our site or enter information into our form fields. You may be asked to enter your name, email address, mailing address, or phone number.
            </p>
          </div>

          {/* Information Collection, Use, and Sharing */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Information Collection, Use, and Sharing</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%] mb-4">
              We collect and use your information to provide you with the best possible service. Here's how we use your data:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#939DB8] mt-1">•</span>
                <div>
                  <div className="text-white text-[14px] font-medium mb-1">Personalize Experience</div>
                  <p className="text-[#939DB8] text-[13px] leading-[160%]">
                    Your information helps us to better respond to your individual needs.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#939DB8] mt-1">•</span>
                <div>
                  <div className="text-white text-[14px] font-medium mb-1">Improve Website</div>
                  <p className="text-[#939DB8] text-[13px] leading-[160%]">
                    We continually strive to improve our website offerings based on feedback.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#939DB8] mt-1">•</span>
                <div>
                  <div className="text-white text-[14px] font-medium mb-1">Customer Service</div>
                  <p className="text-[#939DB8] text-[13px] leading-[160%]">
                    Respond to your requests and support needs more effectively.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#939DB8] mt-1">•</span>
                <div>
                  <div className="text-white text-[14px] font-medium mb-1">Periodic Emails</div>
                  <p className="text-[#939DB8] text-[13px] leading-[160%]">
                    Send you information and respond to inquiries via email campaigns.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* How do we protect your information? */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">How do we protect your information?</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%]">
              We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. Your information is stored in a password-protected database.
            </p>
          </div>

          {/* Do we use cookies? */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Do we use cookies?</h2>
            <div className="space-y-3">
              <p className="text-[#939DB8] text-[14px] leading-[170%]">
                Yes, Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enable the site's or service provider's systems to recognize your browser and capture and remember certain information.
              </p>
              <p className="text-[#939DB8] text-[14px] leading-[170%]">
                We use cookies to help us remember, understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
              </p>
            </div>
          </div>

          {/* Remarketing */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Remarketing</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%] mb-3">
              Cookies are also used to display remarketing advertisements based on the user's previous visits to creatographics.com across the internet.
            </p>
            <p className="text-[#939DB8] text-[14px] leading-[170%]">
              Remarketing advertisements are displayed through Google's display advertisement network. Users may opt out of Google's use of cookies at any time by visiting the Google Ads Preferences Manager.
            </p>
          </div>

          {/* Do we disclose any information to outside parties? */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Information Disclosure</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%]">
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
          </div>

          {/* Third-party links */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Third-party Links</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%]">
              Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies.
            </p>
          </div>

          {/* Contact */}
          <div className="pt-6 border-t border-[#1B1E2A]">
            <h2 className="text-white text-[18px] font-semibold mb-3">Questions? Contact Us</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%] mb-4">
              If you have any questions regarding this privacy policy, please don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="mailto:contact@creatographics.com" 
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-[#0F1112] text-[14px] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Email Us
              </a>
              <a 
                href="tel:+919629683501" 
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1B1E2A] text-white text-[14px] font-semibold rounded-lg hover:bg-[#2A2F3F] transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </BoxedPageLayout>
  );
}
