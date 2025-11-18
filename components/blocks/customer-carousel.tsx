"use client";

import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Bob Bousquet",
    title: "Director of IT",
    quote: "Twingate had faster speeds than any other solution we evaluated. They make zero trust easy and our users are loving the experience.",
    image: "/testimonials/bob.jpg"
  },
  {
    name: "Luis Zaldivar",
    title: "SRE Manager",
    quote: "We got set up in literally 30 minutes and Twingate has easily scaled to manage our most complex workflows. Even our engineers love it - and that's a high bar.",
    image: "/testimonials/luis.jpg"
  },
  {
    name: "Emery Wells",
    title: "CEO",
    quote: "Our old VPN was giving us serious issues and causing flaky Zoom calls with everyone working remotely. It drove me and my team crazy. Twingate couldn't come soon enough.",
    image: "/testimonials/emery.jpg"
  },
  {
    name: "Christian Trummer",
    title: "CTO",
    quote: "We evaluated several competing vendors for zero trust and Twingate was clearly the easiest to deploy. We got Twingate up in minutes.",
    image: "/testimonials/christian.jpg"
  },
  {
    name: "Paul Guthrie",
    title: "Information Security Officer",
    quote: "We've invested heavily in automation at Blend and Twingate is a powerful platform that allows us to programmatically deploy and maintain a zero trust approach to our infrastructure.",
    image: "/testimonials/paul.jpg"
  }
];

export function CustomerCarousel() {
  return (
    <section className="py-16 px-4 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join 300+ businesses that trust TKV Creatographics for their digital success
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card 
                key={index} 
                className="min-w-[400px] bg-card/50 backdrop-blur border-border/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
