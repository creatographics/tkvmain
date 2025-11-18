import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    platform: "G2",
    rating: 4.8,
    reviews: "2,500+",
    badge: "Leader Winter 2024"
  },
  {
    platform: "Capterra",
    rating: 4.9,
    reviews: "1,800+",
    badge: "Best Value 2024"
  },
  {
    platform: "TrustPilot",
    rating: 4.7,
    reviews: "3,200+",
    badge: "Excellent"
  },
  {
    platform: "Software Advice",
    rating: 4.8,
    reviews: "1,500+",
    badge: "Front Runner"
  }
];

const awards = [
  "Best CRM Software 2024",
  "Fastest Growing SaaS",
  "Top Rated by Users",
  "Innovation Award Winner"
];

export function SocialProofSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recognized by industry experts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Award-winning platform trusted by thousands
          </p>
        </div>

        {/* Review Platforms */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur border-border/50"
            >
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold mb-2">{review.platform}</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < Math.floor(review.rating) 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-semibold">{review.rating}</span>
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  {review.reviews} reviews
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {review.badge}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Awards */}
        <div className="flex flex-wrap justify-center gap-4">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="px-6 py-3 bg-card/50 backdrop-blur border border-border/50 rounded-lg text-sm font-medium"
            >
              🏆 {award}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
