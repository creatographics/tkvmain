'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    'All',
    'Product Updates',
    'Guides',
    'Education',
    'Strategy',
    'Comparisons',
    'Case Studies'
  ];
  
  // Featured posts for carousel
  const featuredPosts = [
    {
      title: "wetracked.io Now Available for WooCommerce: The Same Ad Tracking That's Revolutionizing Shopify Stores",
      excerpt: "After helping 7,000+ Shopify stores achieve 100% tracking accuracy, we're bringing our proven solution to WooCommerce. Here's what this means for your store.",
      image: "/blog/featured-post.jpg",
      category: "Product Updates",
      date: "Nov 4, 2024",
      readTime: "5 min read",
      slug: "wetracked-woocommerce-launch"
    },
    {
      title: "How to Fix iOS 14 Tracking Issues in 2024",
      excerpt: "Complete guide to recovering lost conversions and improving your ad tracking accuracy on iOS devices.",
      image: "/blog/ios-tracking.jpg",
      category: "Guides",
      date: "Nov 1, 2024",
      readTime: "8 min read",
      slug: "fix-ios-14-tracking"
    },
    {
      title: "5 Ways to Improve Your ROAS with Better Tracking",
      excerpt: "Practical strategies to maximize your return on ad spend through accurate conversion tracking.",
      image: "/blog/improve-roas.jpg",
      category: "Strategy",
      date: "Oct 25, 2024",
      readTime: "7 min read",
      slug: "improve-roas-tracking"
    }
  ];

  const blogPosts = [
    {
      title: "How to Fix iOS 14 Tracking Issues in 2024",
      excerpt: "Complete guide to recovering lost conversions and improving your ad tracking accuracy on iOS devices.",
      image: "/blog/ios-tracking.jpg",
      category: "Guides",
      date: "Nov 1, 2024",
      readTime: "8 min read",
      slug: "fix-ios-14-tracking"
    },
    {
      title: "Server-Side Tracking vs Client-Side: What's the Difference?",
      excerpt: "Understanding the key differences and why server-side tracking is becoming essential for ecommerce.",
      image: "/blog/server-side-tracking.jpg",
      category: "Education",
      date: "Oct 28, 2024",
      readTime: "6 min read",
      slug: "server-side-vs-client-side"
    },
    {
      title: "5 Ways to Improve Your ROAS with Better Tracking",
      excerpt: "Practical strategies to maximize your return on ad spend through accurate conversion tracking.",
      image: "/blog/improve-roas.jpg",
      category: "Strategy",
      date: "Oct 25, 2024",
      readTime: "7 min read",
      slug: "improve-roas-tracking"
    },
    {
      title: "The Complete Guide to Meta Conversion API",
      excerpt: "Everything you need to know about implementing and optimizing Meta's Conversion API for your store.",
      image: "/blog/meta-capi.jpg",
      category: "Guides",
      date: "Oct 22, 2024",
      readTime: "10 min read",
      slug: "meta-conversion-api-guide"
    },
    {
      title: "Ad Blockers Are Killing Your Conversions: Here's the Fix",
      excerpt: "How ad blockers affect your tracking and what you can do to recover those lost conversions.",
      image: "/blog/ad-blockers.jpg",
      category: "Education",
      date: "Oct 18, 2024",
      readTime: "5 min read",
      slug: "ad-blockers-fix"
    },
    {
      title: "Triple Whale vs Hyros vs wetracked.io: An Honest Comparison",
      excerpt: "A detailed comparison of the top ad tracking solutions for ecommerce stores in 2024.",
      image: "/blog/comparison.jpg",
      category: "Comparisons",
      date: "Oct 15, 2024",
      readTime: "12 min read",
      slug: "tracking-solutions-comparison"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Blog Header Section */}
      <header className="pt-32 md:pt-36 pb-12 md:pb-16 px-5">
        <div className="max-w-[1126px] mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full mb-4">
                  <span className="text-sm font-semibold text-orange-500">Articles</span>
                </div>
              </div>
              
              <h1 className="font-helveticaDisplay font-bold text-[40px] md:text-[64px] leading-[110%] text-foreground mb-6">
                Blog
              </h1>
              
              <p className="text-muted-foreground text-lg md:text-xl max-w-[640px]">
                No-nonsense insights and practical tips on enhancing your ad tracking strategy. Learn from the best and get real results.
              </p>
            </div>
            
            {/* Blog Graphic */}
            <div className="hidden md:block relative w-[200px] h-[200px]">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl rotate-12 opacity-80" />
                <div className="absolute w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl -rotate-12 opacity-60" />
                <div className="absolute w-16 h-16 bg-gradient-to-br from-orange-300 to-red-300 rounded-lg rotate-45 opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <section className="px-5 mb-12 md:mb-16">
        <div className="max-w-[1126px] mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbars pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-foreground'
                    : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Carousel */}
      <section className="px-5 mb-16 md:mb-24">
        <div className="max-w-[1126px] mx-auto">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredPosts.map((post, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="group block bg-card border border-border rounded-2xl overflow-hidden hover:border-border/50 transition-all h-full"
                    >
                      <div className="grid md:grid-cols-2 gap-0 h-full">
                        <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[400px] overflow-hidden bg-muted">
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/5" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/10 blur-3xl" />
                          </div>
                        </div>
                        
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-medium rounded-full">
                              {post.category}
                            </span>
                            <span className="text-muted-foreground/70 text-sm">{post.date}</span>
                            <span className="text-muted-foreground/70 text-sm">•</span>
                            <span className="text-muted-foreground/70 text-sm">{post.readTime}</span>
                          </div>
                          
                          <h2 className="text-foreground font-bold text-2xl md:text-3xl mb-4 group-hover:text-orange-400 transition-colors">
                            {post.title}
                          </h2>
                          
                          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 w-8'
                      : 'bg-[#939DB8]/30 hover:bg-[#939DB8]/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-5 pb-24 md:pb-32">
        <div className="max-w-[1126px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts
              .filter(post => activeCategory === 'All' || post.category === activeCategory)
              .map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-border/50 transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent group-hover:from-orange-500/20 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-orange-500/10 blur-2xl" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 bg-orange-500/10 text-orange-500 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground/70 text-xs">{post.date}</span>
                  </div>
                  
                  <h3 className="text-foreground font-bold text-lg mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-muted-foreground/70 text-xs">
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-5 pb-24 md:pb-32">
        <div className="max-w-[1126px] mx-auto">
          <div className="bg-gradient-to-br from-card to-background border border-border rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-helveticaDisplay font-bold text-2xl md:text-3xl text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-[600px]">
              Get the latest insights on ad tracking, conversion optimization, and ecommerce growth delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 bg-background border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-foreground font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
