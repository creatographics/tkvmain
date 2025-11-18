'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  // Sample blog post data - replace with actual data fetching
  const posts: Record<string, any> = {
    'wetracked-woocommerce-launch': {
      title: "wetracked.io Now Available for WooCommerce: The Same Ad Tracking That's Revolutionizing Shopify Stores",
      date: "Nov 4, 2024",
      category: "Product Updates",
      author: {
        name: "John Doe",
        role: "Tech Lead",
        image: "/blog/author.jpg"
      },
      image: "/blog/featured-post.jpg",
      content: `
        <p>After helping 7,000+ Shopify stores achieve 100% tracking accuracy, we're bringing our proven solution to WooCommerce. Here's what this means for your store.</p>
        
        <h3>The Challenge with WooCommerce Tracking</h3>
        <p>WooCommerce store owners have long struggled with accurate conversion tracking. Between iOS 14 privacy changes, ad blockers, and cookie restrictions, many stores are losing visibility into which marketing channels actually drive sales.</p>
        
        <h3>Our Solution</h3>
        <p>wetracked.io uses server-side tracking to bypass browser limitations and ensure 100% accurate attribution. This means you can finally trust your data and make informed decisions about your marketing spend.</p>
        
        <ul>
          <li>Server-side tracking for 100% accuracy</li>
          <li>Easy integration with WooCommerce</li>
          <li>Real-time conversion data</li>
          <li>Support for all major ad platforms</li>
        </ul>
        
        <h3>Getting Started</h3>
        <p>Setting up wetracked.io on your WooCommerce store takes just a few minutes. Our plugin integrates seamlessly with your existing setup, and you'll start seeing accurate data immediately.</p>
      `
    },
    'fix-ios-14-tracking': {
      title: "How to Fix iOS 14 Tracking Issues in 2024",
      date: "Nov 1, 2024",
      category: "Guides",
      author: {
        name: "Jane Smith",
        role: "Marketing Lead",
        image: "/blog/author2.jpg"
      },
      image: "/blog/ios-tracking.jpg",
      content: `
        <p>Complete guide to recovering lost conversions and improving your ad tracking accuracy on iOS devices.</p>
        
        <h3>Understanding the Problem</h3>
        <p>iOS 14 introduced App Tracking Transparency (ATT), which requires apps to ask permission before tracking users. This has significantly impacted conversion tracking for advertisers.</p>
        
        <h3>The Impact on Your Business</h3>
        <p>Many businesses have seen their tracking accuracy drop by 50% or more since iOS 14. This makes it difficult to optimize campaigns and understand true ROI.</p>
        
        <h3>Solutions That Work</h3>
        <ul>
          <li>Implement server-side tracking</li>
          <li>Use first-party data collection</li>
          <li>Set up conversion APIs</li>
          <li>Optimize for modeled conversions</li>
        </ul>
      `
    },
    'improve-roas-tracking': {
      title: "5 Ways to Improve Your ROAS with Better Tracking",
      date: "Oct 25, 2024",
      category: "Strategy",
      author: {
        name: "Mike Johnson",
        role: "Growth Strategist",
        image: "/blog/author3.jpg"
      },
      image: "/blog/improve-roas.jpg",
      content: `
        <p>Practical strategies to maximize your return on ad spend through accurate conversion tracking.</p>
        
        <h3>1. Implement Server-Side Tracking</h3>
        <p>Server-side tracking ensures you capture every conversion, even when browser-based tracking fails.</p>
        
        <h3>2. Track the Full Customer Journey</h3>
        <p>Understanding how customers interact with your brand across multiple touchpoints is crucial for optimization.</p>
        
        <h3>3. Use Attribution Modeling</h3>
        <p>Different attribution models can reveal insights about which channels deserve more credit for conversions.</p>
        
        <h3>4. Monitor Quality Metrics</h3>
        <p>Don't just track conversions - track conversion quality, lifetime value, and other important metrics.</p>
        
        <h3>5. Test and Iterate</h3>
        <p>Use your accurate tracking data to run experiments and continuously improve your campaigns.</p>
      `
    }
  };

  return posts[slug] || null;
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-[800px] mx-auto px-5 pt-32 pb-24">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-orange-500 hover:text-orange-400">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Breadcrumb */}
      <div className="pt-32 pb-8 px-5">
        <div className="max-w-[1110px] mx-auto">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="px-5 pb-24">
        <div className="max-w-[1110px] mx-auto">
          {/* Meta Info */}
          <div className="flex items-center gap-3 mb-6">
            <time className="text-muted-foreground text-sm">{post.date}</time>
            <span className="text-muted-foreground/70">/</span>
            <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-medium rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-helveticaDisplay font-bold text-[40px] md:text-[56px] leading-[110%] mb-8 text-foreground">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mb-12 pb-8 border-b border-border">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-foreground font-bold">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <p className="text-foreground font-medium">{post.author.name}</p>
              <p className="text-muted-foreground text-sm">{post.author.role}</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video mb-12 rounded-xl overflow-hidden bg-card border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/10 blur-3xl" />
            </div>
          </div>

          {/* Content with Sidebar Layout */}
          <div className="grid lg:grid-cols-[200px_1fr] gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <nav className="border-l-2 border-border pl-4">
                  <ul className="space-y-4">
                    <li>
                      <a href="#what-it-is" className="text-muted-foreground hover:text-foreground transition-colors block text-sm">
                        What It Is
                      </a>
                    </li>
                    <li>
                      <a href="#why-it-matters" className="text-muted-foreground hover:text-foreground transition-colors block text-sm">
                        Why It Matters
                      </a>
                    </li>
                    <li>
                      <a href="#get-started" className="text-muted-foreground hover:text-foreground transition-colors block text-sm">
                        Get Started
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div>
              <div 
                className="prose prose-invert max-w-none
                  prose-headings:font-helveticaDisplay prose-headings:font-bold prose-headings:text-foreground
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-foreground prose-p:text-base prose-p:leading-relaxed prose-p:mb-6
                  prose-ul:text-foreground prose-ul:mb-6
                  prose-li:mb-2
                  prose-strong:text-foreground prose-strong:font-semibold
                  prose-a:text-orange-500 prose-a:no-underline hover:prose-a:text-orange-400"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Section */}
              <div className="mt-16 pt-8 border-t border-border">
                <p className="text-muted-foreground text-sm mb-4">Share this article</p>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-card hover:bg-muted text-foreground rounded-lg transition-colors border border-border">
                    Twitter
                  </button>
                  <button className="px-4 py-2 bg-card hover:bg-muted text-foreground rounded-lg transition-colors border border-border">
                    LinkedIn
                  </button>
                  <button className="px-4 py-2 bg-card hover:bg-muted text-foreground rounded-lg transition-colors border border-border">
                    Facebook
                  </button>
                </div>
              </div>

              {/* Back to Blog */}
              <div className="mt-12">
                <Link 
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Articles
                </Link>
              </div>
            </div>
          </div>

          {/* Author Section */}
          <div className="mt-16 pt-12 border-t border-border">
            <div className="bg-gradient-to-br from-card to-background border border-border rounded-2xl p-8 md:p-10">
              <h3 className="font-helveticaDisplay font-bold text-2xl text-foreground mb-8">About the Author</h3>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-foreground font-bold text-3xl shadow-lg">
                      {post.author.name.charAt(0)}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-background rounded-full flex items-center justify-center border-2 border-orange-500">
                      <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <h4 className="text-foreground font-bold text-xl md:text-2xl mb-2">{post.author.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-sm font-medium rounded-full">
                        {post.author.role}
                      </span>
                      <span className="text-muted-foreground/70">•</span>
                      <span className="text-muted-foreground text-sm">Expert Contributor</span>
                    </div>
                  </div>
                  <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
                    {post.author.name} is a {post.author.role} with extensive experience in ad tracking, 
                    conversion optimization, and ecommerce growth strategies. Passionate about helping 
                    businesses achieve accurate data tracking and better marketing ROI.
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground text-sm">Follow:</span>
                    <div className="flex gap-3">
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-orange-500/50 transition-all"
                        aria-label="Twitter"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-orange-500/50 transition-all"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-orange-500/50 transition-all"
                        aria-label="Email"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="px-5 pb-24">
        <div className="max-w-[1126px] mx-auto">
          <h2 className="font-helveticaDisplay font-bold text-3xl text-foreground mb-8">Other Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "How to Fix iOS 14 Tracking Issues in 2024",
                excerpt: "Complete guide to recovering lost conversions and improving your ad tracking accuracy on iOS devices.",
                category: "Guides",
                date: "Nov 1, 2024",
                slug: "fix-ios-14-tracking"
              },
              {
                title: "5 Ways to Improve Your ROAS with Better Tracking",
                excerpt: "Practical strategies to maximize your return on ad spend through accurate conversion tracking.",
                category: "Strategy",
                date: "Oct 25, 2024",
                slug: "improve-roas-tracking"
              },
              {
                title: "Understanding Server-Side Tracking",
                excerpt: "Learn how server-side tracking works and why it's essential for accurate conversion data.",
                category: "Education",
                date: "Oct 20, 2024",
                slug: "server-side-tracking"
              }
            ].map((article, index) => (
              <Link
                key={index}
                href={`/blog/${article.slug}`}
                className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-orange-500/30 transition-all"
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
                      {article.category}
                    </span>
                    <span className="text-muted-foreground/70 text-xs">{article.date}</span>
                  </div>
                  
                  <h3 className="text-foreground font-bold text-lg mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
