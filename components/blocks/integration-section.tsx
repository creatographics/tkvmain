import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const integrations = [
  { name: "AWS", logo: "☁️" },
  { name: "Azure", logo: "🔷" },
  { name: "Google Cloud", logo: "🌐" },
  { name: "Okta", logo: "🔐" },
  { name: "Azure AD", logo: "🔑" },
  { name: "Slack", logo: "💬" },
  { name: "GitHub", logo: "🐙" },
  { name: "GitLab", logo: "🦊" },
];

export function IntegrationSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Integrations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Works with your existing tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Seamlessly integrate with your favorite platforms and services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all cursor-pointer group"
            >
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {integration.logo}
                </div>
                <p className="font-semibold">{integration.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="gap-2">
            View all integrations
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
