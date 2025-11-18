import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const comparisonData = [
  {
    feature: "Setup Time",
    traditional: "Weeks to months",
    ourPlatform: "Minutes",
    highlight: true
  },
  {
    feature: "User Training",
    traditional: "Extensive training required",
    ourPlatform: "Intuitive, no training needed"
  },
  {
    feature: "Customization",
    traditional: "Limited, requires IT",
    ourPlatform: "Unlimited, self-service"
  },
  {
    feature: "Mobile Access",
    traditional: "Basic or none",
    ourPlatform: "Full-featured mobile apps"
  },
  {
    feature: "Integrations",
    traditional: "Few, expensive add-ons",
    ourPlatform: "100+ native integrations"
  },
  {
    feature: "Pricing",
    traditional: "Complex, hidden fees",
    ourPlatform: "Transparent, all-inclusive"
  },
  {
    feature: "Support",
    traditional: "Business hours only",
    ourPlatform: "24/7 expert support"
  },
  {
    feature: "Updates",
    traditional: "Manual, infrequent",
    ourPlatform: "Automatic, continuous"
  }
];

export function ComparisonSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why choose our CRM?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we compare to traditional CRM solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border/50 overflow-hidden">
            <CardContent className="p-0">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-muted/50 border-b border-border">
                <div className="font-semibold">Feature</div>
                <div className="font-semibold text-center">Traditional CRM</div>
                <div className="font-semibold text-center text-primary">Our Platform</div>
              </div>

              {/* Comparison Rows */}
              {comparisonData.map((item, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-3 gap-4 p-6 border-b border-border last:border-0 ${
                    item.highlight ? 'bg-primary/5' : ''
                  }`}
                >
                  <div className="font-medium">{item.feature}</div>
                  <div className="text-center text-muted-foreground flex items-center justify-center gap-2">
                    <X className="w-4 h-4 text-destructive" />
                    <span className="text-sm">{item.traditional}</span>
                  </div>
                  <div className="text-center flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{item.ourPlatform}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link href="/signup">
                Start Your Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
