import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, TrendingUp } from "lucide-react";

const trustFactors = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and SOC 2 Type II certified"
  },
  {
    icon: Award,
    title: "Industry Leader",
    description: "Rated #1 CRM by G2 and Capterra users"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "24/7 customer support with 98% satisfaction rate"
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Average 40% increase in sales productivity"
  }
];

export function TrustSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by industry leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of companies that rely on our platform every day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {factor.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {factor.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
