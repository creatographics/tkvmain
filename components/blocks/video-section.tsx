"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 px-4 md:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              See It In Action
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See Our Work in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how we transform brands and build exceptional digital experiences
            </p>
          </div>

          <Card className="bg-card border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                {!isPlaying ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="w-20 h-20 rounded-full"
                      onClick={() => setIsPlaying(true)}
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </Button>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                    <div className="absolute bottom-8 left-8 text-white">
                      <h3 className="text-2xl font-bold mb-2">Portfolio Showcase</h3>
                      <p className="text-white/80">3:00 minutes</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                      onClick={() => setIsPlaying(false)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                    {/* Replace with actual video embed */}
                    <div className="w-full h-full flex items-center justify-center bg-black">
                      <p className="text-white">Video Player Placeholder</p>
                      {/* Example: 
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      /> */}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
