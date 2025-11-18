'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Palette,
  Code,
  Camera,
  TrendingUp,
  Smartphone,
  Box,
  Video,
  Briefcase,
  ArrowRight,
  Layout,
  Layers,
  Mail,
  Sparkles,
  Tag,
  FileText,
  BookOpen,
  Share2,
  ShoppingCart,
  Globe,
  Wrench,
  Server,
  Shield,
  MousePointer,
  Search,
  MessageSquare,
  Users,
  BarChart,
  Target,
  Megaphone,
  Star,
  Monitor,
  Tablet,
  CheckCircle,
  Zap,
  Package,
  Cpu,
  Eye,
  Film,
  Image as ImageIcon,
  Home,
  Shirt,
  Coffee,
  Building,
  Scissors,
  Palette as PaletteIcon,
  Play,
  Music,
  Plane,
  UserCheck,
  Award,
  BookMarked,
  Newspaper,
  PenTool,
  BadgeCheck,
  Briefcase as BriefcaseIcon,
  Sparkles as SparklesIcon
} from "lucide-react";
import Link from "next/link";

const servicesData = [
  {
    id: "graphic-designing",
    category: "Graphic Designing",
    icon: Palette,
    title: "Graphic Designing",
    description: "Transform your brand vision into stunning visual experiences. Our expert designers craft compelling graphics that capture attention, communicate your message effectively, and leave lasting impressions. From concept to execution, we blend artistic creativity with strategic thinking to deliver designs that resonate with your audience and elevate your brand identity.",
    highlight: "800+ Successful Design Deliveries",
    navTagline: "Brand Visuals",
    ctaTitle: "Elevate Your Brand’s Visual Story",
    ctaDescription: "Schedule a design strategy session tailored to your campaign or rebrand.",
    services: [
      { name: "Website sketching and wireframing", icon: Layout, description: "Create detailed wireframes and sketches to plan your website's structure and user flow effectively." },
      { name: "UX/UI design (frontend)", icon: Layers, description: "Design intuitive and engaging user interfaces that provide seamless experiences across all devices." },
      { name: "Custom Email Templates", icon: Mail, description: "Professional email templates that are responsive, branded, and optimized for maximum engagement." },
      { name: "Graphics, Icons, Characters", icon: Sparkles, description: "Custom graphics, icons, and character designs that bring your brand's personality to life." },
      { name: "Logo Designing", icon: Tag, description: "Memorable logo designs that capture your brand essence and make a lasting impression." },
      { name: "Brand Identity Design", icon: Award, description: "Complete brand identity systems including colors, typography, and visual guidelines for consistency." },
      { name: "Book Layouts", icon: BookOpen, description: "Professional book layout and typesetting services for print and digital publications." },
      { name: "Social Media Graphics", icon: Share2, description: "Eye-catching social media graphics optimized for each platform to boost engagement." },
      { name: "Label Design", icon: Tag, description: "Product label designs that stand out on shelves and communicate your brand values." },
      { name: "Brochures & Flyers", icon: FileText, description: "Compelling brochure and flyer designs that effectively communicate your message and drive action." }
    ]
  },
  {
    id: "website-designing",
    category: "Website Designing",
    icon: Code,
    title: "Website Designing",
    description: "Build powerful, responsive websites that drive results. Our web design services combine cutting-edge technology with user-centric design principles to create digital experiences that engage visitors and convert them into customers. From e-commerce platforms to corporate websites, we deliver solutions that are fast, secure, and optimized for all devices.",
    highlight: "120+ High-Converting Websites Launched",
    navTagline: "Web Experience",
    ctaTitle: "Transform Your Website Experience",
    ctaDescription: "Request a UX walkthrough and see how we optimize journeys for conversions.",
    services: [
      { name: "eCommerce solutions", icon: ShoppingCart, description: "Full-featured online stores with secure payment gateways, inventory management, and seamless checkout." },
      { name: "WordPress Website", icon: Globe, description: "Custom WordPress websites with powerful CMS capabilities and easy content management." },
      { name: "Shopify, Squarespace, Wix", icon: Monitor, description: "Professional websites built on popular platforms with custom themes and integrations." },
      { name: "Design (PSD, Sketch, Figma) - HTML", icon: Code, description: "Convert your design files into pixel-perfect, responsive HTML/CSS code with clean markup." },
      { name: "Complete Website Revamp", icon: Wrench, description: "Transform your outdated website with modern design, improved UX, and enhanced performance." },
      { name: "Website Optimization", icon: Zap, description: "Speed optimization, SEO improvements, and performance enhancements for better user experience." },
      { name: "Website Maintenance & Support", icon: Wrench, description: "Ongoing maintenance, updates, bug fixes, and technical support to keep your site running smoothly." },
      { name: "Web Hosting and Data Backups", icon: Server, description: "Reliable hosting solutions with automated backups, security monitoring, and 99.9% uptime." },
      { name: "Domain & SSL", icon: Shield, description: "Domain registration, DNS management, and SSL certificates for secure, trusted websites." },
      { name: "Landing Page", icon: MousePointer, description: "High-converting landing pages designed to capture leads and drive specific marketing goals." }
    ]
  },
  {
    id: "digital-marketing",
    category: "Digital Marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Accelerate your business growth with strategic digital marketing solutions. Our data-driven approach combines SEO, social media marketing, content strategy, and paid advertising to maximize your online presence. We help you reach the right audience at the right time, turning clicks into customers and building lasting relationships with your target market.",
    highlight: "3.5x Average Campaign ROI",
    navTagline: "Growth Engine",
    ctaTitle: "Boost Your Campaign Performance",
    ctaDescription: "Get a marketing growth plan with channel mix and projected ROI.",
    services: [
      { name: "Search Engine Optimization Services", icon: Search, description: "Improve your search rankings with on-page optimization, technical SEO, and strategic link building." },
      { name: "Search Engine Marketing Services", icon: Target, description: "Targeted paid search campaigns that drive qualified traffic and maximize your advertising ROI." },
      { name: "Social Media Marketing Services", icon: Share2, description: "Build your brand presence with strategic social media campaigns across all major platforms." },
      { name: "Email Marketing Services", icon: Mail, description: "Engaging email campaigns with automation, segmentation, and A/B testing for optimal results." },
      { name: "Influencer marketing", icon: Users, description: "Connect with relevant influencers to amplify your brand message and reach new audiences." },
      { name: "Content writing", icon: FileText, description: "SEO-optimized content that engages readers, builds authority, and drives organic traffic." },
      { name: "Pay-Per-Click (PPC) Advertising", icon: Megaphone, description: "Strategic PPC campaigns on Google, Facebook, and other platforms for immediate results." },
      { name: "Video Marketing", icon: Video, description: "Engaging video content and distribution strategies that boost engagement and conversions." },
      { name: "Online Reputation Management", icon: Star, description: "Monitor and manage your online reputation with review management and brand protection." },
      { name: "Analytics & Conversion Tracking", icon: BarChart, description: "Comprehensive analytics setup and reporting to track performance and optimize campaigns." }
    ]
  },
  {
    id: "app-development",
    category: "App Design & Development",
    icon: Smartphone,
    title: "App Design & Development",
    description: "Transform your ideas into powerful mobile applications. Our expert team develops native and cross-platform apps that deliver exceptional user experiences. From concept to deployment, we focus on creating intuitive, high-performance applications that engage users and drive business growth. Whether iOS, Android, or both, we bring your vision to life.",
    highlight: "150+ Apps Live on App Stores",
    navTagline: "Launch Apps",
    ctaTitle: "Prototype Your Next App Release",
    ctaDescription: "Share your product vision and we’ll map the sprints to ship it fast.",
    services: [
      { name: "iOS App Development", icon: Smartphone, description: "Native iOS apps built with Swift for optimal performance and seamless Apple ecosystem integration." },
      { name: "Android App Development", icon: Tablet, description: "Native Android apps using Kotlin that leverage the full power of the Android platform." },
      { name: "Cross-platform Solutions", icon: Monitor, description: "Build once, deploy everywhere with React Native or Flutter for cost-effective app development." },
      { name: "UI/UX Design services", icon: Layers, description: "User-centered mobile app designs that prioritize usability and create delightful experiences." },
      { name: "App Development", icon: Code, description: "Full-cycle mobile app development from concept to launch with scalable architecture." },
      { name: "Automated QA and testing", icon: CheckCircle, description: "Comprehensive testing including unit, integration, and UI tests to ensure app quality." },
      { name: "Progressive Web Apps", icon: Globe, description: "Web apps that work like native apps with offline capabilities and push notifications." },
      { name: "Deployment and Maintenance", icon: Wrench, description: "App store submission, ongoing updates, bug fixes, and performance monitoring." },
      { name: "Custom API Integration", icon: Cpu, description: "Seamless integration with third-party services, payment gateways, and backend systems." },
      { name: "App Store Optimization", icon: TrendingUp, description: "Optimize your app listing with keywords, screenshots, and descriptions for better visibility." }
    ]
  },
  {
    id: "2d-3d-designing",
    category: "2D & 3D Designing",
    icon: Box,
    title: "2D & 3D Designing",
    description: "Bring your imagination to life with stunning 2D and 3D designs. Our creative team specializes in creating immersive visual experiences, from character design and animation to architectural visualization and product modeling. Using industry-leading tools and techniques, we deliver photorealistic renders and engaging animations that captivate audiences and showcase your vision.",
    highlight: "500+ Immersive Visual Assets Created",
    navTagline: "Immersive Renders",
    ctaTitle: "Visualize Concepts in 2D & 3D",
    ctaDescription: "Send us your brief to receive moodboards, renders, and motion ideas.",
    services: [
      { name: "2D & 3D Animation", icon: Film, description: "Bring your ideas to life with stunning 2D and 3D animations for marketing and entertainment." },
      { name: "2D & 3D Character Design", icon: Users, description: "Create memorable characters with detailed designs for games, films, and brand mascots." },
      { name: "2D & 3D Environment Design", icon: Home, description: "Immersive environment designs for games, virtual tours, and architectural visualization." },
      { name: "3D Rendering", icon: Eye, description: "Photorealistic 3D renders that showcase products and spaces with stunning detail." },
      { name: "3D Motion Capture", icon: Video, description: "Capture realistic movements and expressions for characters in games and animations." },
      { name: "Product Visualization", icon: Package, description: "3D product renders that showcase features and details before physical production." },
      { name: "Architectural Walkthroughs", icon: Building, description: "Interactive 3D walkthroughs that bring architectural designs to life for clients." },
      { name: "3D Modeling for Games/AR/VR", icon: Box, description: "Optimized 3D models for gaming, augmented reality, and virtual reality experiences." },
      { name: "Visual Effects (VFX)", icon: Sparkles, description: "Professional VFX for videos, films, and commercials that enhance visual storytelling." },
      { name: "3D Printing Design", icon: Cpu, description: "Design and prepare 3D models optimized for various 3D printing technologies." }
    ]
  },
  {
    id: "photography",
    category: "Photography",
    icon: Camera,
    title: "Photography",
    description: "Capture the essence of your brand through professional photography. Our skilled photographers combine technical expertise with artistic vision to create stunning images that tell your story. From product photography and corporate headshots to event coverage and lifestyle shoots, we deliver high-quality visuals that enhance your brand and engage your audience.",
    highlight: "1,000+ Brand Shoots Captured",
    navTagline: "Signature Shoots",
    ctaTitle: "Plan a Signature Shoot",
    ctaDescription: "Tell us the story you need captured and we’ll handle crew, gear, and mood.",
    services: [
      { name: "Portrait Photography", icon: Users, description: "Professional portrait photography for individuals, families, and corporate headshots." },
      { name: "Event Photography", icon: Camera, description: "Capture special moments at weddings, conferences, and corporate events with style." },
      { name: "Product Photography", icon: Package, description: "High-quality product photos that showcase details and drive e-commerce sales." },
      { name: "Real Estate Photography", icon: Home, description: "Professional property photography that highlights features and attracts potential buyers." },
      { name: "Fashion Photography", icon: Shirt, description: "Editorial and commercial fashion photography for brands, designers, and magazines." },
      { name: "Food Photography", icon: Coffee, description: "Mouth-watering food photography for restaurants, menus, and culinary brands." },
      { name: "Architectural Photography", icon: Building, description: "Stunning architectural photography that captures the beauty of buildings and spaces." },
      { name: "Photo Editing and Retouching", icon: Scissors, description: "Professional photo editing, color correction, and retouching for flawless results." },
      { name: "Commercial & Advertising", icon: Megaphone, description: "Commercial photography for advertising campaigns, catalogs, and marketing materials." },
      { name: "Travel & Lifestyle Photography", icon: Plane, description: "Capture authentic moments and destinations for travel brands and lifestyle publications." }
    ]
  },
  {
    id: "videography",
    category: "Videography",
    icon: Video,
    title: "Videography",
    description: "Create compelling video content that captivates and converts. Our videography services encompass everything from corporate films and promotional videos to event coverage and social media content. With professional equipment and creative storytelling, we produce high-quality videos that effectively communicate your message and leave a lasting impact on your audience.",
    highlight: "300+ Story-Driven Films Produced",
    navTagline: "Cinematic Stories",
    ctaTitle: "Produce Film-Ready Stories",
    ctaDescription: "Let’s storyboard your next film, from script to post-production.",
    services: [
      { name: "Event Videography", icon: Video, description: "Professional event coverage that captures the energy and emotion of your special occasions." },
      { name: "Promotional Videos", icon: Megaphone, description: "Engaging promotional videos that showcase your brand and drive customer action." },
      { name: "Fashion Videos", icon: Shirt, description: "Dynamic fashion videos for runway shows, lookbooks, and brand campaigns." },
      { name: "Color Correction", icon: PaletteIcon, description: "Professional color grading and correction to achieve the perfect cinematic look." },
      { name: "Motion Graphics", icon: Film, description: "Animated graphics and text that add visual interest and explain complex concepts." },
      { name: "Visual Effects (VFX)", icon: Sparkles, description: "Cutting-edge visual effects that enhance storytelling and create impossible scenes." },
      { name: "Corporate Films", icon: Briefcase, description: "Professional corporate videos for internal communications, training, and brand messaging." },
      { name: "Music & Short Films", icon: Music, description: "Creative music videos and short films that tell compelling stories through cinema." },
      { name: "Drone Videography", icon: Plane, description: "Stunning aerial footage that provides unique perspectives for any project." },
      { name: "Editing & Post-Production", icon: Scissors, description: "Expert video editing, sound design, and post-production for polished final results." }
    ]
  },
  {
    id: "other-services",
    category: "Other Services",
    icon: Briefcase,
    title: "Other Services",
    description: "Expand your reach with our specialized creative and marketing services. From celebrity endorsements and PR campaigns to portfolio development and social media verification, we offer comprehensive solutions to elevate your brand presence. Our diverse range of services is designed to meet unique business needs and help you stand out in competitive markets.",
    highlight: "70+ Celeb & Media Partnerships Secured",
    navTagline: "Premium Access",
    ctaTitle: "Unlock Premium Brand Opportunities",
    ctaDescription: "Consult with our partnerships team for PR, endorsements, and verification.",
    services: [
      { name: "Casting Actors and Models", icon: UserCheck, description: "Professional casting services to find the perfect talent for your projects and campaigns." },
      { name: "IMDB Profile Creation", icon: Star, description: "Create and optimize your IMDB profile to establish credibility in the entertainment industry." },
      { name: "Wikipedia", icon: BookMarked, description: "Wikipedia page creation and management for notable individuals and organizations." },
      { name: "Celebrity Marketing", icon: Award, description: "Leverage celebrity partnerships and endorsements to amplify your brand reach." },
      { name: "Press Release", icon: Newspaper, description: "Professional press release writing and distribution to major media outlets and journalists." },
      { name: "Sketching", icon: PenTool, description: "Custom sketches and illustrations for concept art, storyboards, and creative projects." },
      { name: "Brand Endorsements", icon: Award, description: "Secure strategic brand endorsements from influencers and industry leaders." },
      { name: "Social Media Verification (Blue Tick)", icon: BadgeCheck, description: "Assistance with social media verification process to establish authenticity and credibility." },
      { name: "Portfolio Design & Development", icon: BriefcaseIcon, description: "Professional portfolio websites that showcase your work and attract new opportunities." },
      { name: "Public Relations (PR) Campaigns", icon: Megaphone, description: "Strategic PR campaigns to build brand awareness and manage public perception." }
    ]
  }
];

const heroHighlights = [
  {
    title: "Instant hardening",
    description: "Deploy enterprise-grade protection with advanced WAF, rate limiting, and bot defenses in a single engagement.",
    icon: Shield
  },
  {
    title: "Planet-scale defense",
    description: "Our autonomous response mitigates threats in under a minute, drawing from 70+ specialized service tracks.",
    icon: Globe
  },
  {
    title: "Single control plane",
    description: "One strategy team overseeing analytics, roadmaps, and CI/CD-ready creative workflows across every channel.",
    icon: Server
  }
];

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState("graphic-designing");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          );

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.1,
      }
    );

    servicesData.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    setActiveSection(id);
    const yOffset = 120;
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - yOffset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1D1711] px-4 pt-16 pb-12 md:pt-20 md:pb-14 lg:pt-24 lg:pb-16">
        <div className="container relative mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#EBD5C1]/40 bg-[#2A2318]/60 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F6A351] shadow-sm backdrop-blur-sm">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V12L14.5 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Security
          </div>
          <div className="mt-6 flex flex-col items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-[#F9F4EF] sm:text-4xl lg:text-5xl leading-[1.15]">
              Ship fearlessly on the open Internet
            </h1>
            <p className="max-w-2xl text-sm text-[#C9B5A3]/90 sm:text-base leading-relaxed">
              Cloudflare's unified security platform blocks exploits, bots, and record-breaking DDoS attacks in seconds — backed by more than 340 Tbps of global capacity, giving you the comfort to focus on code-writing, not fire-fighting.
            </p>
          </div>
          <div className="mt-10 mx-auto max-w-6xl">
            <div className="highlight-grid grid gap-0 rounded-2xl bg-[#1D1711] sm:grid-cols-2 lg:grid-cols-3">
              {heroHighlights.map((item, index) => {
                const HighlightIcon = item.icon;
                return (
                  <div
                    key={index}
                    className="highlight-card relative flex h-full flex-col"
                  >
                    <div className="highlight-card-inner flex h-full flex-col gap-3 p-6 text-left">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F6A351]/10 border border-[#F6A351]/20 text-[#F6A351]">
                        <HighlightIcon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold text-[#F9F4EF] leading-tight">{item.title}</h3>
                      <p className="text-xs text-[#C9B5A3]/85 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <style jsx global>{`
          .highlight-grid {
            position: relative;
            background: #1D1711;
          }
          .highlight-card {
            position: relative;
          }
          .highlight-card-inner {
            position: relative;
            z-index: 1;
            border-radius: 16px;
            background: #2A2318;
            border: none;
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03), 0 12px 24px -16px rgba(0, 0, 0, 0.4);
          }
          .highlight-card-inner h3 {
            margin: 0;
          }
          .service-card::after {
            content: '';
            position: absolute;
            top: -20%;
            right: -15%;
            width: 280px;
            height: 280px;
            background: radial-gradient(circle at center, rgba(246, 163, 81, 0.7) 0%, rgba(246, 163, 81, 0.4) 30%, rgba(246, 163, 81, 0.15) 60%, transparent 100%);
            opacity: 0;
            filter: blur(40px);
            transition: opacity 0.6s ease, transform 0.6s ease;
            transform: translate(30px, -30px) scale(0.8);
            pointer-events: none;
            z-index: 1;
          }
          .service-card:hover::after {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 120px;
            height: 1px;
            background: linear-gradient(90deg, transparent 0%, rgba(246, 163, 81, 0.3) 20%, rgba(255, 200, 120, 0.9) 50%, rgba(246, 163, 81, 0.3) 80%, transparent 100%);
            opacity: 0;
            filter: blur(0.5px);
            box-shadow: 0 0 8px rgba(246, 163, 81, 0.6), 0 0 16px rgba(246, 163, 81, 0.4);
            transition: opacity 0.6s ease, width 0.6s ease;
            pointer-events: none;
            z-index: 2;
          }
          .service-card:hover::before {
            opacity: 1;
            width: 140px;
          }
          .service-card > * {
            position: relative;
            z-index: 3;
          }
        `}</style>
      </section>

      {/* Services Section with Sidebar */}
      <section className="py-12 px-4 md:py-16 lg:py-20 bg-[#18100A]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Dropdown Navigation */}
            <div className="sticky top-16 z-30 lg:hidden">
              <button
                type="button"
                onClick={() => setNavOpen((prev) => !prev)}
                className="w-full flex items-center justify-between rounded-xl border border-[#3D2A1C]/60 bg-[#20140D] px-4 py-3 text-sm font-semibold shadow-sm shadow-orange-500/10"
              >
                <span className="flex items-center gap-2">
                  {servicesData.find((section) => section.id === activeSection)?.category ?? "Select a service"}
                </span>
                {navOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {navOpen && (
                <div className="mt-2 rounded-xl border border-[#3D2A1C]/60 bg-[#1C130C] shadow-lg shadow-orange-500/10">
                  <ul className="max-h-80 overflow-y-auto">
                    {servicesData.map((section) => (
                      <li key={section.id}>
                        <button
                          type="button"
                          onClick={() => {
                            setNavOpen(false);
                            scrollToSection(section.id);
                          }}
                          className={`w-full text-left px-4 py-3 text-sm font-medium border-b border-[#3D2A1C]/50 last:border-b-0 ${
                            activeSection === section.id ? "bg-[#2A1C11]/70 text-foreground" : "text-muted-foreground hover:bg-[#2A1C11]/50"
                          }`}
                        >
                          {section.category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Desktop Sidebar Navigation */}
            <aside className="hidden lg:block lg:w-72 flex-shrink-0">
              <div className="sticky top-24">
              <nav className="relative rounded-2xl border border-[#3E2A1C]/60 bg-gradient-to-br from-[#2D1B11]/80 via-[#1F140C]/95 to-[#170F09]/95 backdrop-blur-md p-4 shadow-[0_26px_52px_-26px_rgba(15,4,0,0.75)]">
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
                <ul className="space-y-1.5">
                  {servicesData.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;
                    const subtitleSource = section.navTagline ?? section.category;
                    return (
                      <li key={section.id} className="relative">
                        {isActive && (
                          <div className="absolute -left-3 top-1/2 h-10 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-orange-500 to-orange-400 shadow-[0_8px_16px_rgba(246,111,26,0.35)]" />
                        )}
                        <button
                          type="button"
                          onClick={() => scrollToSection(section.id)}
                          className={`group relative w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                            isActive
                              ? "bg-[#2A1C11] text-foreground shadow-md shadow-orange-500/20 ring-1 ring-orange-500/40"
                              : "text-muted-foreground hover:text-foreground hover:bg-[#24170F]/80"
                          }`}
                        >
                          <span
                            className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border text-sm font-semibold transition-colors ${
                              isActive
                                ? "border-orange-500 bg-orange-500/15 text-orange-600"
                                : "border-[#3E2A1C] bg-[#20140D]/80 text-orange-500 group-hover:border-orange-500/40"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </span>
                          <div className="flex-1 text-left leading-tight">
                            <span className="block text-sm font-semibold whitespace-normal">{section.category}</span>
                            <span className={`block text-xs transition-colors ${
                              isActive ? "text-[#C69E7A]" : "text-muted-foreground/80 group-hover:text-[#C69E7A]"
                            }`}>
                              {subtitleSource}
                            </span>
                          </div>
                          <ArrowRight
                            className={`h-3.5 w-3.5 transition-all duration-300 ${
                              isActive
                                ? "translate-x-0 opacity-100 text-orange-500"
                                : "-translate-x-1 opacity-0 text-orange-400 group-hover:translate-x-0 group-hover:opacity-100"
                            }`}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 space-y-12">
              {servicesData.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.id} id={section.id} className="scroll-mt-28">
                    {/* Services Grid - Single Container with Border */}
                    <div className="relative rounded-2xl border-2 border-dashed border-[#3E291C]/50 bg-[#24170F]/60 p-1 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.8)]">
                      <div className="rounded-xl border border-[#4A2F1E]/60 overflow-hidden bg-[#1C120B] relative">
                        {/* Animated Orange Glowing Line Effect (Top) */}
                        <div className="absolute top-0 left-0 right-0 h-[1px] z-20 overflow-hidden">
                          <div 
                            className="absolute inset-0"
                            style={{
                              background: 'linear-gradient(90deg, transparent 0%, rgba(246, 111, 26, 0.8) 50%, transparent 100%)',
                              boxShadow: '0 0 20px rgba(246, 111, 26, 0.6), 0 0 40px rgba(246, 111, 26, 0.4)'
                            }}
                          />
                          {/* Animated Glare Effect */}
                          <div 
                            className="absolute top-0 left-0 h-full w-32"
                            style={{
                              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
                              animation: 'glareMove 3s ease-in-out infinite',
                              filter: 'blur(8px)'
                            }}
                          />
                        </div>
                        {/* Fade Effect on Right Top Corner */}
                        <div 
                          className="absolute top-0 right-0 w-64 h-64 pointer-events-none rounded-tr-xl z-0"
                          style={{
                            background: 'radial-gradient(circle at top right, rgba(253, 72, 33, 0.08) 0%, transparent 70%)',
                          }}
                        />
                        
                        {/* Section Header Inside Container */}
                        <div className="p-6 border-b border-border/50 relative z-10">
                          <div className="flex items-center gap-3 mb-3">
                            <Icon className="w-6 h-6 text-orange-500" />
                            <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                          </div>
                          <p className="text-sm text-muted-foreground max-w-full md:max-w-[60%]">{section.description}</p>
                          {section.highlight && (
                            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-500/10 text-orange-600 px-3 py-1 text-xs font-semibold">
                              <Sparkles className="w-3 h-3" />
                              <span>{section.highlight}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-[#1C120B]">
                          <svg width="0" height="0" style={{ position: 'absolute' }}>
                            <defs>
                              <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#FFC878', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#F6A351', stopOpacity: 1 }} />
                              </linearGradient>
                            </defs>
                          </svg>
                          {section.services.map((service, index) => {
                            const ServiceIcon = service.icon;
                            return (
                              <Link
                                key={index}
                                href="/contact"
                                className="service-card group relative overflow-hidden block p-6 border-r border-b border-[#3E2A1C]/45 last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 hover:bg-[#24170F]/70 transition-colors duration-200"
                              >
                                {/* Icon */}
                                <div className="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors duration-200">
                                  <ServiceIcon className="w-5 h-5" style={{ 
                                    stroke: 'url(#icon-gradient)',
                                    filter: 'drop-shadow(0 0 3px rgba(255, 200, 120, 0.5))'
                                  }} />
                                </div>

                                {/* Title */}
                                <h3 className="text-base font-semibold text-foreground leading-tight mb-2.5">
                                  {service.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {service.description}
                                </p>
                              </Link>
                            );
                          })}
                          
                          {/* Combined CTA Section */}
                          <div className="col-span-1 sm:col-span-2 lg:col-span-2 border-r border-b border-[#3E2A1C]/45 lg:border-r-0 bg-[#1C120B]">
                            <div className="p-6">
                              <div className="rounded-2xl border border-orange-500/25 bg-[#27190F]/90 backdrop-blur-sm p-6 shadow-sm shadow-orange-500/10 space-y-4">
                                <div className="space-y-2">
                                  <h3 className="text-lg font-semibold text-foreground">
                                    {section.ctaTitle ?? "Ready to get started?"}
                                  </h3>
                                  <p className="text-sm text-[#C9B5A3]/90 leading-relaxed">
                                    {section.ctaDescription ?? "Let’s bring your vision to life with a dedicated creative squad that understands your brand ambitions."}
                                  </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3">
                                  <Button
                                    asChild
                                    size="sm"
                                    className="w-full sm:w-auto px-6 h-11 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30"
                                  >
                                    <Link href="/contact" className="flex items-center justify-center gap-2">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                      </svg>
                                      Hire Us
                                      <ArrowRight className="w-3 h-3" />
                                    </Link>
                                  </Button>
                                  <Button
                                    asChild
                                    size="sm"
                                    variant="ghost"
                                    className="w-full sm:w-auto px-6 h-11 border border-[#C9B5A3]/70 bg-transparent hover:bg-transparent text-[#C9B5A3] hover:text-orange-400 transition-colors"
                                  >
                                    <Link href="/contact" className="flex items-center justify-center gap-2">
                                      View Our Works
                                      <ArrowRight className="w-3 h-3" />
                                    </Link>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 px-4 md:py-20 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your{' '}
            <span style={{
              background: `
                url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grainFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='4' seed='3'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grainFilter)' opacity='0.2'/%3E%3C/svg%3E"),
                linear-gradient(to bottom, #FD4821 0%, #FF6A00 50%, #FE7404 100%)
              `,
              backgroundSize: '100px 100px, 100% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative',
              display: 'inline-block',
              WebkitTextStrokeWidth: '0px'
            }}>
              Digital Presence?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold shadow-lg shadow-orange-500/30"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <Link href="/about">
                Learn About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
