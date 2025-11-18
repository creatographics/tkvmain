'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Calendar, Users, X, Briefcase, MapPin, Clock } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
export default function AboutPage() {
  const [expandedValue, setExpandedValue] = useState<number | null>(null);
  const [selectedRole, setSelectedRole] = useState<any>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [foundedCount, setFoundedCount] = useState(2000);
  const [clientsCount, setClientsCount] = useState(0);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const headline = headlineRef.current;
    if (!headline) return;

    const items = Array.from(
      headline.querySelectorAll<HTMLElement>('[data-scroll-reveal]')
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.4 }
    );

    items.forEach(item => observer.observe(item));

    return () => {
      items.forEach(item => observer.unobserve(item));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            let currentYear = 2000;
            const yearInterval = setInterval(() => {
              currentYear++;
              setFoundedCount(currentYear);
              if (currentYear >= 2019) {
                clearInterval(yearInterval);
              }
            }, 30);
            
            let currentClients = 0;
            const clientsInterval = setInterval(() => {
              currentClients++;
              setClientsCount(currentClients);
              if (currentClients >= 30) {
                clearInterval(clientsInterval);
              }
            }, 50);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const jobRoles = [
    {
      id: 1,
      title: "Senior Graphic Designer",
      category: "Design",
      type: "Full-time",
      location: "Puducherry or Remote",
      shortDesc: "We're looking for a talented designer with 5+ years of experience in branding, print, and digital design.",
      fullDesc: "We're seeking a Senior Graphic Designer to join our creative team. You'll work on diverse projects from logo design to marketing campaigns, collaborating with clients and team members to deliver exceptional visual solutions.",
      responsibilities: [
        "Create compelling visual designs for various media including print, digital, and social",
        "Develop brand identities and style guides for clients",
        "Collaborate with the creative team on campaign concepts",
        "Present design concepts to clients and stakeholders",
        "Mentor junior designers and provide constructive feedback"
      ],
      requirements: [
        "5+ years of professional graphic design experience",
        "Expert proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
        "Strong portfolio demonstrating branding and visual design skills",
        "Excellent communication and presentation skills",
        "Bachelor's degree in Graphic Design or related field"
      ],
      benefits: [
        "Competitive salary package",
        "Flexible work arrangements (remote/hybrid)",
        "Health insurance coverage",
        "Professional development opportunities",
        "Creative and collaborative work environment"
      ]
    },
    {
      id: 2,
      title: "Web Developer",
      category: "Development",
      type: "Full-time",
      location: "Remote",
      shortDesc: "Join our team to build beautiful, responsive websites using modern technologies.",
      fullDesc: "We're looking for a skilled Web Developer to create and maintain high-quality websites and web applications. You'll work with React, Next.js, and Tailwind CSS to build responsive, performant solutions for our clients.",
      responsibilities: [
        "Develop responsive websites and web applications",
        "Write clean, maintainable code following best practices",
        "Collaborate with designers to implement pixel-perfect designs",
        "Optimize applications for maximum speed and scalability",
        "Participate in code reviews and technical discussions"
      ],
      requirements: [
        "3+ years of experience with React and Next.js",
        "Strong proficiency in JavaScript/TypeScript",
        "Experience with Tailwind CSS and modern CSS techniques",
        "Understanding of web performance optimization",
        "Familiarity with Git and version control workflows"
      ],
      benefits: [
        "Fully remote position",
        "Competitive salary",
        "Latest tech stack and tools",
        "Learning and development budget",
        "Flexible working hours"
      ]
    },
    {
      id: 3,
      title: "Social Media Manager",
      category: "Marketing",
      type: "Part-time",
      location: "Puducherry",
      shortDesc: "Manage social media accounts for our clients and create engaging content.",
      fullDesc: "We're seeking a creative Social Media Manager to develop and execute social media strategies for our diverse client portfolio. You'll create engaging content, manage multiple platforms, and analyze performance metrics.",
      responsibilities: [
        "Develop and implement social media strategies",
        "Create engaging content for Instagram, Facebook, and LinkedIn",
        "Schedule posts and manage content calendars",
        "Monitor and respond to comments and messages",
        "Analyze performance metrics and prepare reports"
      ],
      requirements: [
        "2+ years of social media management experience",
        "Strong understanding of social media platforms and best practices",
        "Excellent writing and communication skills",
        "Experience with social media management tools",
        "Creative mindset with attention to detail"
      ],
      benefits: [
        "Flexible part-time schedule",
        "Work with diverse brands",
        "Creative freedom",
        "Growth opportunities",
        "Supportive team environment"
      ]
    },
    {
      id: 4,
      title: "UI/UX Designer",
      category: "Design",
      type: "Full-time",
      location: "Remote",
      shortDesc: "Design intuitive and beautiful user interfaces for web and mobile applications.",
      fullDesc: "We're looking for a talented UI/UX Designer to create exceptional user experiences. You'll conduct user research, create wireframes and prototypes, and design interfaces that are both beautiful and functional.",
      responsibilities: [
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and high-fidelity designs",
        "Design user interfaces for web and mobile applications",
        "Collaborate with developers to ensure design implementation",
        "Maintain and evolve design systems"
      ],
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma and design tools",
        "Strong portfolio showcasing UX process and UI design",
        "Understanding of user-centered design principles",
        "Experience with design systems and component libraries"
      ],
      benefits: [
        "Remote-first culture",
        "Competitive compensation",
        "Latest design tools and resources",
        "Professional growth opportunities",
        "Collaborative team environment"
      ]
    },
    {
      id: 5,
      title: "Content Writer",
      category: "Marketing",
      type: "Full-time",
      location: "Puducherry or Remote",
      shortDesc: "Create compelling content for websites, blogs, and marketing materials.",
      fullDesc: "We're seeking a skilled Content Writer to create engaging content across various formats. You'll write website copy, blog posts, social media content, and marketing materials that resonate with target audiences.",
      responsibilities: [
        "Write clear, compelling copy for various mediums",
        "Create blog posts and articles on industry topics",
        "Develop content strategies for clients",
        "Edit and proofread content for accuracy",
        "Collaborate with design and marketing teams"
      ],
      requirements: [
        "2+ years of professional writing experience",
        "Excellent writing, editing, and proofreading skills",
        "Understanding of SEO best practices",
        "Ability to adapt tone and style for different audiences",
        "Portfolio of published work"
      ],
      benefits: [
        "Flexible work arrangements",
        "Competitive salary",
        "Diverse writing opportunities",
        "Professional development",
        "Creative team culture"
      ]
    },
    {
      id: 6,
      title: "Video Editor",
      category: "Production",
      type: "Full-time",
      location: "Puducherry",
      shortDesc: "Edit and produce high-quality video content for various platforms.",
      fullDesc: "We're looking for a talented Video Editor to create compelling video content. You'll edit promotional videos, social media content, and client projects using industry-standard tools.",
      responsibilities: [
        "Edit video content for various platforms and formats",
        "Add motion graphics, effects, and transitions",
        "Color grade and audio mix video projects",
        "Collaborate with creative team on video concepts",
        "Manage video assets and project files"
      ],
      requirements: [
        "3+ years of video editing experience",
        "Proficiency in Adobe Premiere Pro and After Effects",
        "Strong understanding of video formats and codecs",
        "Creative eye for storytelling and pacing",
        "Portfolio of edited video work"
      ],
      benefits: [
        "Access to professional equipment",
        "Competitive salary package",
        "Creative projects",
        "Skill development opportunities",
        "Collaborative work environment"
      ]
    }
  ];

  const categories = ['All', 'Design', 'Development', 'Marketing', 'Production'];
  
  const filteredRoles = selectedCategory === 'All' 
    ? jobRoles 
    : jobRoles.filter(role => role.category === selectedCategory);

  const values = [
    {
      id: 1,
      title: "Creative Excellence",
      color: "#11C7F5",
      content: [
        "We care about delivering exceptional creative work. We're a passionate team that moves with purpose. We don't waste time in endless revisions or unnecessary meetings.",
        "We design, we create, we deliver results.",
        "We work on challenging creative projects at a rapid pace. We care about the final product, not just the process. Every project gets our full attention and expertise.",
        "A great creative agency isn't about having the fanciest office or the most awards. It's about working as a team to create work we're proud of and that delivers results for our clients."
      ]
    },
    {
      id: 2,
      title: "Smart Solutions",
      color: "#FFC45E",
      content: [
        "We're a boutique agency and we can't compete with massive agencies on budget — and we believe that's our strength. We can't buy Super Bowl ads, but we can create campaigns that actually convert.",
        "Doing more with less is our superpower. It means we find creative and effective ways of solving problems, not just throwing money at them."
      ]
    },
    {
      id: 3,
      title: "Client-First Approach",
      color: "#FF4A75",
      content: [
        "Treating clients and team members with respect is fundamental to who we are. We believe in honest communication and delivering on our promises.",
        "We build long-term relationships based on trust and results. Your success is our success.",
        "We won't compromise on quality to save time. We're in this for the long run and want to build work that stands the test of time."
      ]
    },
    {
      id: 4,
      title: "Take Ownership",
      color: "#D438FF",
      content: [
        "We empower our team to make decisions and take ownership of their work. We trust our creatives to do what they do best.",
        "Our goal isn't to micromanage. Our goal is to provide the tools and support you need to create your best work."
      ]
    },
    {
      id: 5,
      title: "Innovation First",
      color: "#2AA4F5",
      content: [
        "We don't just follow trends — we create them. We question the status quo and find better ways to solve creative challenges.",
        "We learn from the best but always add our own unique perspective. The only limit is our imagination."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <style jsx global>{`
        .careers-heading-gradient {
          background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .accent-gradient {
          background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
        }

        @keyframes letter-glow {
          0%, 100% {
            color: hsl(var(--foreground));
            text-shadow: 0 0 0px transparent;
          }
          50% {
            background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 0 20px rgba(255, 107, 53, 0.5);
          }
        }

        .animated-word {
          display: inline-block;
        }

        .animated-word span {
          display: inline-block;
          color: hsl(var(--foreground));
          animation: letter-glow 10s ease-in-out infinite;
        }

        .animated-word span:nth-child(1) { animation-delay: 0s; }
        .animated-word span:nth-child(2) { animation-delay: 0.15s; }
        .animated-word span:nth-child(3) { animation-delay: 0.3s; }
        .animated-word span:nth-child(4) { animation-delay: 0.45s; }
        .animated-word span:nth-child(5) { animation-delay: 0.6s; }
        .animated-word span:nth-child(6) { animation-delay: 0.75s; }
        .animated-word span:nth-child(7) { animation-delay: 0.9s; }

        /* Custom Scrollbar Styles */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: #1B1E2A;
        }

        ::-webkit-scrollbar-thumb {
          background: #4B5563;
          border-radius: 6px;
          border: 2px solid #1B1E2A;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #6B7280;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: #4B5563 #1B1E2A;
        }

        .section-separator {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #727DA1 50%, transparent 100%);
          opacity: 0.2;
        }

        .reveal-text {
          color: hsl(var(--muted-foreground) / 0.7);
          transition: color 0.8s ease-out;
        }
        
        .reveal-text.revealed {
          color: hsl(var(--foreground));
        }

        @keyframes shine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        .pill-header {
          position: relative;
          border-radius: 9999px;
          padding: 1.5px;
          background: 
            linear-gradient(90deg, 
              rgba(114, 125, 161, 0.1) 0%,
              rgba(255, 255, 255, 0.2) 25%,
              rgba(255, 255, 255, 0.3) 50%,
              rgba(255, 255, 255, 0.2) 75%,
              rgba(114, 125, 161, 0.1) 100%
            ),
            rgba(114, 125, 161, 0.1);
          background-size: 200% 100%, 100% 100%;
          animation: shine 6s linear infinite;
        }

        .pill-header-inner {
          border-radius: 9999px;
          background: rgba(11, 12, 20, 0.95);
          backdrop-filter: blur(20px);
        }

        [data-scroll-reveal] {
          position: relative;
          display: block;
          overflow: hidden;
        }

        [data-scroll-reveal] > span {
          display: inline-block;
          transform: translateY(110%);
          opacity: 0;
          transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s ease;
        }

        [data-scroll-reveal].is-visible > span {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>

      {/* Header */}
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative container mx-auto px-8">
          <div className="pt-24 lg:pt-36 flex flex-col items-center">
            <div className="text-transparent bg-clip-text font-bold uppercase text-center bg-gradient-to-b from-orange-500 text-[11px] tracking-[2.9px] to-[#DADFFC]">
              Work with us
            </div>
            <h1
              ref={headlineRef}
              className="mt-4 pb-2 sm:mx-0 text-center text-foreground text-[36px] lg:text-[56px] tracking-[-0.28px] leading-tight max-w-[347px] lg:max-w-[600px] font-bold space-y-3"
            >
              <span className="block" data-scroll-reveal>
                <span>Refine Your Ideas</span>
              </span>
              <span className="block text-orange-500" data-scroll-reveal>
                <span>•</span>
              </span>
              <span className="block" data-scroll-reveal>
                <span>Redefine Your Design</span>
              </span>
            </h1>
          </div>

          <div className="relative mt-12 mx-auto font-inter max-w-[600px] text-[16px] leading-[170%]">
            <p ref={(el) => { textRefs.current[0] = el; }} className="reveal-text text-left mb-6">
              Founded and led by industry veteran Vikram Adithya Raja, TKV Creatographics is a full-service design & digital agency based in Pondicherry. With over 15 years of experience in branding, web design, graphic design and digital marketing, we combine creativity with strategic thinking to deliver holistic solutions for businesses that want to stand out and scale.
            </p>
          </div>

          <div className="relative mt-12 mx-auto font-inter max-w-[600px] text-[16px] leading-[170%]">
            <h3 ref={(el) => { textRefs.current[5] = el; }} className="reveal-text text-left text-[20px] font-bold text-foreground mb-4">Our Story</h3>
            <p ref={(el) => { textRefs.current[6] = el; }} className="reveal-text text-left mb-6">
              What started as a modest design studio in Pondicherry has grown into TKV Creatographics OPC, a registered professional company delivering full-service creative and digital solutions. Over the years, we've built a portfolio spanning start-ups and established businesses, helped brands refresh their identity, migrated sites to WordPress, executed Meta & Google campaigns, and supported clients through transformation.
            </p>
            
            <h3 ref={(el) => { textRefs.current[7] = el; }} className="reveal-text text-left text-[20px] font-bold text-foreground mb-4">Meet The Founder</h3>
            <p ref={(el) => { textRefs.current[8] = el; }} className="reveal-text text-left">
              <span className="font-semibold text-orange-500">Vikram Adithya Raja — Founder & CEO</span><br />
              With 15+ years in the industry, Vikram brings a unique mix of creative design and digital marketing strategy. Under his leadership, the team at TKV Creatographics thrives on innovation, efficiency and delivering beyond expectations.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <div className="relative mt-20 px-8 flex flex-col items-center">
          {/* Background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-orange-500/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-40 right-10 w-[450px] h-[450px] bg-orange-600/25 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-400/20 rounded-full blur-[90px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
          </div>

          <div className="relative z-10 text-center mb-12 max-w-[650px]">
            <h2 className="text-[32px] md:text-[38px] font-bold text-foreground mb-3">Our Core Values</h2>
            <p className="text-muted-foreground text-[15px]">The principles that guide everything we do</p>
          </div>
          
          <div className="relative z-10 w-full max-w-[700px] space-y-3">
            {values.map((value, index) => (
              <div
                key={value.id}
                onClick={() => setExpandedValue(expandedValue === index ? null : index)}
                className={`group cursor-pointer relative rounded-2xl overflow-hidden border transition-all duration-500 ${
                  expandedValue === index 
                    ? 'border-orange-500/50 bg-gradient-to-br from-orange-500/5 via-card to-card shadow-lg shadow-orange-500/10' 
                    : 'border-border bg-card/80 hover:border-orange-500/30 hover:bg-card hover:shadow-md'
                }`}
              >
                {/* Noise/Grain texture overlay */}
                <div 
                  className="absolute inset-0 opacity-[0.03] mix-blend-soft-light pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '200px 200px'
                  }}
                />

                {/* Animated blob glow when expanded */}
                {expandedValue === index && (
                  <>
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-orange-500/40 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '3s' }} />
                    <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-orange-600/35 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                  </>
                )}

                {/* Gradient accent bar */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 ${
                    expandedValue === index ? 'bg-gradient-to-b from-orange-500 to-orange-600' : 'bg-transparent'
                  }`}
                />
                
                {/* Content */}
                <div className="relative py-6 px-6 md:px-8 pl-12 md:pl-16">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Number badge */}
                      <div 
                        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          expandedValue === index
                            ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30'
                            : 'bg-muted text-muted-foreground group-hover:bg-orange-500/10 group-hover:text-orange-500'
                        }`}
                      >
                        0{index + 1}
                      </div>
                      
                      {/* Title */}
                      <h3
                        className={`select-none text-[19px] md:text-[21px] font-bold transition-colors duration-300 ${
                          expandedValue === index ? 'text-orange-500' : 'text-foreground group-hover:text-orange-500'
                        }`}
                      >
                        {value.title}
                      </h3>
                    </div>
                    
                    {/* Chevron */}
                    <ChevronDown
                      className={`flex-shrink-0 transition-all duration-500 ${
                        expandedValue === index 
                          ? 'rotate-180 text-orange-500' 
                          : 'text-muted-foreground group-hover:text-orange-500'
                      }`}
                      size={24}
                    />
                  </div>
                  
                  {/* Expandable content */}
                  <div
                    style={{
                      maxHeight: expandedValue === index ? '1000px' : 0,
                      opacity: expandedValue === index ? 1 : 0
                    }}
                    className="transition-all duration-500 ease-in-out overflow-hidden"
                  >
                    <div className="pt-6 space-y-4 border-t border-border/50 mt-6">
                      {value.content.map((paragraph, pIndex) => (
                        <p 
                          key={pIndex} 
                          className="text-foreground/90 text-[15px] leading-relaxed"
                          style={{
                            animationDelay: `${pIndex * 100}ms`
                          }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  expandedValue === index ? 'opacity-100' : ''
                }`} />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <section className="mt-12 mx-auto px-8 font-inter text-foreground max-w-[520px]">
          <p>Work at a fast-growing creative agency in a team of super-talented colleagues (award-winning designers, ex-agency creatives, and… you?).</p>
          <p>
            <Link className="text-blue-400 hover:text-blue-300 transition" target="_blank" href="/#portfolio">Work hard, treat people well, and have fun.</Link>
          </p>
        </section>

        <div className="mt-24"></div>

        {/* Our Team Section */}
        <div className="container mx-auto max-w-[1100px] px-6">
          <div className="section-separator"></div>
          <section className="py-16 md:py-20">
            <h3 className="text-center text-foreground font-bold text-[32px] md:text-[38px] mb-3">Our team</h3>
            <p className="text-center text-muted-foreground text-[15px] max-w-[600px] mx-auto mb-10">
              Meet the talented people behind our creative work
            </p>
            
            {/* Stats Cards */}
            <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[560px] mx-auto mb-12">
              <div className="relative rounded-xl border border-border bg-gradient-to-br from-card to-background p-6 overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center border border-orange-500/30 group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="careers-heading-gradient text-[40px] leading-[100%] font-bold mb-1.5">{foundedCount}</div>
                    <div className="text-[14px] text-muted-foreground font-medium">Founded</div>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-xl border border-border bg-gradient-to-br from-card to-background p-6 overflow-hidden group hover:border-orange-500/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center border border-orange-500/30 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="careers-heading-gradient text-[40px] leading-[100%] font-bold mb-1.5">{clientsCount}+</div>
                    <div className="text-[14px] text-muted-foreground font-medium">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members Grid with Gradient Fade */}
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="rounded-lg border border-border bg-card/60 p-4 hover:bg-muted hover:border-slate-600/30 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-base flex-shrink-0 group-hover:scale-110 transition-transform">K</div>
                  <div>
                    <p className="text-foreground font-semibold text-[15px] leading-tight">Karthik V</p>
                    <p className="text-muted-foreground text-[13px] mt-0.5">Founder & Creative Director</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-border bg-card/60 p-4 hover:bg-muted hover:border-slate-600/30 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-base flex-shrink-0 group-hover:scale-110 transition-transform">P</div>
                  <div>
                    <p className="text-foreground font-semibold text-[15px] leading-tight">Priya Sharma</p>
                    <p className="text-muted-foreground text-[13px] mt-0.5">Lead Designer</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-border bg-card/60 p-4 hover:bg-muted hover:border-slate-600/30 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-base flex-shrink-0 group-hover:scale-110 transition-transform">R</div>
                  <div>
                    <p className="text-foreground font-semibold text-[15px] leading-tight">Rahul Kumar</p>
                    <p className="text-muted-foreground text-[13px] mt-0.5">Senior Developer</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-border bg-card/60 p-4 hover:bg-muted hover:border-slate-600/30 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-base flex-shrink-0 group-hover:scale-110 transition-transform">A</div>
                  <div>
                    <p className="text-foreground font-semibold text-[15px] leading-tight">Anjali Reddy</p>
                    <p className="text-muted-foreground text-[13px] mt-0.5">Brand Strategist</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-border bg-card/60 p-4 hover:bg-muted hover:border-slate-600/30 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-base flex-shrink-0 group-hover:scale-110 transition-transform">V</div>
                  <div>
                    <p className="text-foreground font-semibold text-[15px] leading-tight">Vikram Singh</p>
                    <p className="text-muted-foreground text-[13px] mt-0.5">3D Artist</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-border bg-card/60 p-4 hover:bg-muted hover:border-slate-600/30 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-base flex-shrink-0 group-hover:scale-110 transition-transform">M</div>
                  <div>
                    <p className="text-foreground font-semibold text-[15px] leading-tight">Meera Patel</p>
                    <p className="text-muted-foreground text-[13px] mt-0.5">Marketing Lead</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-border bg-card/60 p-4 hover:bg-muted hover:border-slate-600/30 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-base flex-shrink-0 group-hover:scale-110 transition-transform">A</div>
                  <div>
                    <p className="text-foreground font-semibold text-[15px] leading-tight">Arjun Nair</p>
                    <p className="text-muted-foreground text-[13px] mt-0.5">Photographer</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-border bg-card/60 p-4 hover:bg-muted hover:border-slate-600/30 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-base flex-shrink-0 group-hover:scale-110 transition-transform">D</div>
                  <div>
                    <p className="text-foreground font-semibold text-[15px] leading-tight">Divya Menon</p>
                    <p className="text-muted-foreground text-[13px] mt-0.5">Content Writer</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border border-border bg-card/60 p-4 hover:bg-muted hover:border-slate-600/30 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-base flex-shrink-0 group-hover:scale-110 transition-transform">R</div>
                  <div>
                    <p className="text-foreground font-semibold text-[15px] leading-tight">Rohan Desai</p>
                    <p className="text-muted-foreground text-[13px] mt-0.5">Video Editor</p>
                  </div>
                </div>
              </div>
              </div>
              {/* Gradient Fade Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/60 via-background/30 to-transparent pointer-events-none"></div>
            </div>
          </section>
        </div>

      </main>

      <SiteFooter />
    </div>
  );
}
