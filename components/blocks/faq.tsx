import Link from "next/link";
import { FlickeringGrid } from "@/registry/magicui/flickering-grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Our Services",
    questions: [
      {
        question: "What services does your agency offer?",
        answer:
          "We offer a comprehensive range of services including web design, UI/UX design, brand identity, graphic design, web development, e-commerce solutions, mobile app development, SEO, content marketing, social media management, and digital marketing strategies.",
      },
      {
        question: "How long does a typical web design project take?",
        answer:
          "The timeline varies based on project complexity, but most standard websites take 4-8 weeks from initial consultation to launch. Complex e-commerce or custom web applications may take 8-16 weeks. We'll provide a detailed timeline during our initial consultation.",
      },
      {
        question: "Do you offer ongoing website maintenance?",
        answer:
          "Yes, we provide comprehensive maintenance packages to keep your website secure, updated, and performing at its best. Our maintenance plans include regular updates, security monitoring, backups, and technical support.",
      },
    ],
  },
  {
    title: "Getting Started",
    questions: [
      {
        question: "What's the process for starting a project?",
        answer:
          "Our process begins with a discovery call to understand your needs, followed by a proposal, planning phase, design mockups, development, testing, and finally, launch. We maintain clear communication throughout the entire process to ensure your vision is realized.",
      },
      {
        question: "How much does a website cost?",
        answer:
          "Website costs vary based on your specific requirements. A basic website typically starts at $2,500, while more complex e-commerce or custom web applications can range from $10,000 to $50,000+. We'll provide a detailed quote after understanding your project needs.",
      },
      {
        question: "Do you work with businesses outside your local area?",
        answer:
          "Absolutely! We work with clients worldwide. Our team is experienced in remote collaboration and uses modern tools to ensure seamless communication regardless of your location.",
      },
    ],
  },
  {
    title: "Digital Marketing",
    questions: [
      {
        question: "How long does it take to see results from SEO?",
        answer:
          "SEO is a long-term strategy, and results typically start becoming noticeable within 3-6 months. However, this can vary based on your industry, competition, and the current state of your website. We provide monthly reports to track progress and make necessary adjustments.",
      },
      {
        question: "What's included in your social media management?",
        answer:
          "Our social media management includes content creation, post scheduling, community engagement, performance analytics, and strategy development. We tailor our approach to align with your brand voice and business goals.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section
      className={cn(
        "py-8 px-4 md:py-12 lg:py-14 bg-gradient-to-b from-slate-50 via-blue-50/20 to-white dark:from-[#171210] dark:via-[#1A1512] dark:to-[#171210] overflow-hidden",
        className
      )}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-12 lg:py-14">
        <div className={cn("mx-auto grid gap-12 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-3xl lg:text-4xl text-[#012A38] dark:text-white">
                Frequently Asked Questions
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-3xl lg:text-4xl text-[#012A38] dark:text-white">
                Frequently Asked Questions
              </h2>
            )}
            <p className="text-slate-600 max-w-md leading-snug">
              Can't find the answer you're looking for?{' '}
              <Link href="/contact" className="text-orange-500 hover:text-orange-400 transition-colors font-medium">
                Contact us
              </Link>{' '}
              for more information.
            </p>
          </div>

          <div className="space-y-6">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-lg font-semibold text-[#012A38]">
                  {category.title}
                </h3>
                
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {category.questions.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`${categoryIndex}-${i}`}
                      className="rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-sm transition-all duration-200 hover:border-orange-500/30 data-[state=open]:border-orange-500/50 data-[state=open]:shadow-sm"
                    >
                      <AccordionTrigger className="px-5 py-4 text-left text-base font-bold text-[#012A38] dark:text-white hover:no-underline [&[data-state=open]]:text-orange-600">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-4 pt-0 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
