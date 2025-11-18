import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Zap, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Active Users",
    description: "Teams trust our platform daily"
  },
  {
    icon: Zap,
    value: "99.9%",
    label: "Uptime",
    description: "Reliable service you can count on"
  },
  {
    icon: TrendingUp,
    value: "10x",
    label: "Faster Setup",
    description: "Compared to traditional solutions"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Secure",
    description: "Enterprise-grade security"
  }
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by industry leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of companies that have transformed their security
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
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
