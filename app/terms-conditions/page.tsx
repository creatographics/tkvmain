import { BoxedPageLayout } from '@/components/boxed-page-layout';

export default function TermsConditionsPage() {
  return (
    <BoxedPageLayout>
      {/* Hero Section */}
      <section className="relative pt-28 pb-8">
        <div className="container mx-auto px-6 max-w-[800px]">
          <div className="text-center">
            <h1 className="text-white text-[36px] font-bold mb-2">
              Terms and Conditions
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
            As a Customer of TKV Creatographics, you need to be aware that, when signing up for an account with TKV Creatographics, you accept and agree to abide by our Web Designing & Web Hosting Terms of Service.
          </p>
        </div>

        <div className="space-y-8">
          {/* Contract */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Contract</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%] mb-3">
              The clients' approval for work to commence shall be deemed a contractual agreement between the Client and TKV Creatographics. The approval for the work can be through either an email confirming back the quote (with the quote document attached) or the quote document signed by the Client.
            </p>
            <p className="text-[#939DB8] text-[14px] leading-[170%]">
              Payment of the advance fee indicates that the Client accepts these terms and conditions, and approves to commence the work.
            </p>
          </div>

          {/* Usage of Services */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Usage of TKV Creatographics Services/Products</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%]">
              The Client agrees not to use TKV Creatographics services/products delivered for any business that is harmful to society or children or illegal. Further, the Client is fully responsible for all and any content published/distributed or allowed to be published/distributed through the Client's website.
            </p>
          </div>

          {/* Technical Support */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">2 Months of Free Technical Support</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%] mb-3">
              TKV Creatographics provides 2 months of free technical support for the following kinds of issues:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-[#939DB8] mt-1">•</span>
                <p className="text-[#939DB8] text-[13px] leading-[160%]">Server-side scripting/programming errors/bugs</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#939DB8] mt-1">•</span>
                <p className="text-[#939DB8] text-[13px] leading-[160%]">Logical Bugs/Calculation related errors/bugs</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#939DB8] mt-1">•</span>
                <p className="text-[#939DB8] text-[13px] leading-[160%]">Connection errors/API Integration Errors</p>
              </li>
            </ul>
            <p className="text-[#939DB8] text-[14px] leading-[170%]">
              The above support is not available if errors/bugs arise due to any external entity such as server upgrades, code edits by external parties, or OS/browser version changes.
            </p>
          </div>

          {/* Photography and Graphics */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Photography and Graphics</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%] mb-3">
              Stock images used for creating any banner, promotion graphic, or animation are not part of the project deliverables unless otherwise agreed. The Client should purchase the license to use stock images from respective 3rd parties at their own cost.
            </p>
            <p className="text-[#939DB8] text-[14px] leading-[170%]">
              Images delivered along with bundled software/solution/script are for Demo Purposes only and shall not be used for commercial purposes without proper licensing.
            </p>
          </div>

          {/* Browser Compatibility */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Browser Compatibility</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%]">
              TKV Creatographics makes every effort to design pages that work flawlessly on the most popular current browsers (latest versions of Chrome, Firefox, Safari). We recommend using the latest version of Chrome or Firefox. Support for older browsers like IE11 can be provided for an additional charge.
            </p>
          </div>

          {/* Search Engine Services */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Search Engine Submission</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%]">
              The following services are not part of the project unless agreed otherwise in writing: submission of websites on different search engines, securing rankings, and Search Engine Optimization (On Page/Off Page).
            </p>
          </div>

          {/* Site Maintenance */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Site Maintenance</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%]">
              Unless otherwise agreed in writing, the following services will be separately billed after the website has been made live: content updates, refinements and logical tweaks, and design updates.
            </p>
          </div>

          {/* Payment Terms */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Payment Terms</h2>
            <div className="space-y-3">
              <p className="text-[#939DB8] text-[14px] leading-[170%]">
                <span className="text-white font-medium">Payment Due:</span> Payment shall be due within 14 days of the invoice date unless specifically mentioned in the Invoice.
              </p>
              <p className="text-[#939DB8] text-[14px] leading-[170%]">
                <span className="text-white font-medium">Late Payment:</span> Accounts that have not been settled within 14 days will incur a late payment charge of USD 100 or 5% of the Invoiced Amount (whichever is higher) for each week delayed.
              </p>
              <p className="text-[#939DB8] text-[14px] leading-[170%]">
                <span className="text-white font-medium">Mode of Payment:</span>
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#939DB8] mt-1">•</span>
                  <p className="text-[#939DB8] text-[13px]">Clients Based Outside India: International Wire Transfers, Credit Card/PayPal</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#939DB8] mt-1">•</span>
                  <p className="text-[#939DB8] text-[13px]">Clients Based in India: UPI, NEFT, RTGS, or Physical Cheques</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Cancellation */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Cancellation</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%] mb-3">
              Both parties reserve the right to cancel the project at any stage.
            </p>
            <p className="text-[#939DB8] text-[14px] leading-[170%]">
              In case the Client cancels, payments made for the project can be refunded after deducting the upfront payment amount and payments received against completed milestones. In case TKV Creatographics cancels, refunds will be processed after deducting $15 per hour for hours spent on the work performed.
            </p>
          </div>

          {/* Project Delivery & Timelines */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Project Delivery & Timelines</h2>
            <div className="space-y-3">
              <p className="text-[#939DB8] text-[14px] leading-[170%]">
                <span className="text-white font-medium">Client Responsibilities:</span> The Client must provide all necessary content, materials, approvals, and feedback as agreed at the beginning of the project.
              </p>
              <p className="text-[#939DB8] text-[14px] leading-[170%]">
                <span className="text-white font-medium">Project Inactivity:</span> If a project remains inactive or the Client is unresponsive for 30 days, TKV Creatographics reserves the right to treat the project as completed and raise the final invoice. After 60 days of inactivity, the project may be terminated.
              </p>
              <p className="text-[#939DB8] text-[14px] leading-[170%]">
                <span className="text-white font-medium">Scope of Work:</span> Any request for features beyond the agreed scope will be treated as a new assignment and charged separately.
              </p>
            </div>
          </div>

          {/* Copyright/Ownership Rights */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Copyright/Ownership Rights</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%] mb-3">
              TKV Creatographics will retain the copyright of any material, including design, artwork, and source code, created for the Client unless otherwise agreed in writing.
            </p>
            <p className="text-[#939DB8] text-[14px] leading-[170%]">
              The Client owns rights to logo/graphics/images supplied by them, website interface (if ordered with Exclusive Rights), and programming files/source code (if ordered with Exclusive Rights).
            </p>
          </div>

          {/* Domain Names */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Domain Names</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%]">
              Domain names registered by TKV Creatographics on the client's behalf are the property of TKV Creatographics until the client has paid for the domain and any associated fees. TKV Creatographics agrees to transfer such domains when all accounts have been settled.
            </p>
          </div>

          {/* Jurisdiction */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Jurisdiction</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%]">
              All disputes shall be subject to the exclusive jurisdiction of Puducherry, India.
            </p>
          </div>

          {/* Important Notes */}
          <div>
            <h2 className="text-white text-[18px] font-semibold mb-3">Important Notes</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%] mb-3">
              TKV Creatographics reserves the right to change or modify any of these terms or conditions at any time, but agreements signed prior to the updates remain unaffected.
            </p>
            <p className="text-[#939DB8] text-[14px] leading-[170%]">
              In no event will TKV Creatographics be liable for any damages, including lost profits, lost savings, or other incidental, consequential, or special damages arising out of the operation of or inability to operate these web pages or website.
            </p>
          </div>

          {/* Contact */}
          <div className="pt-6 border-t border-[#1B1E2A]">
            <h2 className="text-white text-[18px] font-semibold mb-3">Questions? Contact Us</h2>
            <p className="text-[#939DB8] text-[14px] leading-[170%] mb-4">
              If you have any questions regarding these terms and conditions, please don't hesitate to reach out.
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
