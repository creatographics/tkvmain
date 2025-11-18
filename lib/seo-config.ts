// SEO Configuration for TKV Creatographics
// Centralized SEO metadata management

export const siteConfig = {
  name: "TKV Creatographics",
  description: "Your trusted creative design and digital marketing agency in Pondicherry — building high-converting websites, powerful brands, and measurable growth strategies for businesses since 2015.",
  url: "https://tkvcreatographics.com",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/tkvcreatographics",
    facebook: "https://facebook.com/tkvcreatographics",
    instagram: "https://instagram.com/tkvcreatographics",
    linkedin: "https://linkedin.com/company/tkvcreatographics",
  },
  creator: "TKV Creatographics",
  keywords: [
    "web design Puducherry",
    "creative agency Puducherry",
    "branding services India",
    "digital marketing Puducherry",
    "graphic design Pondicherry",
    "website development",
    "logo design services",
    "photography Puducherry",
    "videography services",
    "UI UX design",
  ],
  location: {
    city: "Puducherry",
    state: "Puducherry",
    country: "India",
    address: "Puducherry, India",
    phone: "+91-XXXXXXXXXX",
    email: "hello@tkvcreatographics.com",
  },
};

export const defaultMetadata = {
  title: {
    default: "TKV Creatographics | Creative Agency in Puducherry | Web Design & Branding",
    template: "%s | TKV Creatographics",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@tkvcreatographics",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
  },
};

// Page-specific SEO configurations
export const pageMetadata = {
  home: {
    title: "TKV Creatographics | Creative Agency in Pondicherry Since 2015",
    description: "Your trusted creative design and digital marketing agency in Pondicherry — building high-converting websites, powerful brands, and measurable growth strategies for businesses that want to stand out online.",
    keywords: "creative agency Pondicherry, web design Pondicherry, branding services, digital marketing, graphic design Pondicherry",
  },
  services: {
    title: "Our Services | Web Design, Branding & Digital Marketing",
    description: "Comprehensive creative services including web design, branding, digital marketing, photography, videography, and 3D modeling. Professional solutions for businesses in Puducherry and beyond.",
    keywords: "web design services, branding agency, digital marketing services, photography Puducherry, videography services",
  },
  portfolio: {
    title: "Portfolio | Our Creative Work & Client Projects",
    description: "Explore our portfolio of successful web design, branding, and digital marketing projects. See how we've helped businesses transform their digital presence.",
    keywords: "design portfolio, web design examples, branding projects, creative work showcase",
  },
  about: {
    title: "About Us | Creative Team in Puducherry Since 2015",
    description: "Meet the creative minds behind TKV Creatographics. Professional team of designers, developers, and marketers dedicated to bringing your vision to life since 2015.",
    keywords: "about TKV Creatographics, creative team, design agency Puducherry, our story",
  },
  blog: {
    title: "Blog | Design Tips, Trends & Industry Insights",
    description: "Stay updated with the latest design trends, marketing tips, and industry insights from TKV Creatographics. Expert advice for growing your business online.",
    keywords: "design blog, marketing tips, web design trends, branding insights",
  },
  contact: {
    title: "Contact Us | Get Your Free Quote Today",
    description: "Ready to transform your brand? Contact TKV Creatographics for a free consultation. Located in Puducherry, serving clients across India and globally.",
    keywords: "contact creative agency, free quote, Puducherry design agency contact, get in touch",
  },
  quote: {
    title: "Get Free Quote | Project Consultation",
    description: "Request a free quote for your web design, branding, or digital marketing project. Quick response, transparent pricing, and expert consultation.",
    keywords: "free quote, project consultation, web design pricing, branding cost",
  },
};

// Service-specific SEO
export const serviceMetadata = {
  webDesign: {
    title: "Web Design & Development Services | Responsive Websites Puducherry",
    description: "Professional web design and development services in Puducherry. Create stunning, responsive, SEO-friendly websites that convert visitors into customers.",
    keywords: "web design Puducherry, website development, responsive design, custom websites",
  },
  branding: {
    title: "Branding & Logo Design Services | Brand Identity Puducherry",
    description: "Complete branding solutions including logo design, brand identity, and visual guidelines. Build a memorable brand that stands out in the market.",
    keywords: "branding services, logo design, brand identity, visual identity design",
  },
  digitalMarketing: {
    title: "Digital Marketing Services | SEO, Social Media & PPC Puducherry",
    description: "Results-driven digital marketing services including SEO, social media marketing, PPC campaigns, and content marketing. Grow your online presence.",
    keywords: "digital marketing Puducherry, SEO services, social media marketing, PPC advertising",
  },
  photography: {
    title: "Professional Photography Services | Product & Commercial Puducherry",
    description: "High-quality photography services for products, events, and commercial projects. Professional equipment and experienced photographers in Puducherry.",
    keywords: "photography Puducherry, product photography, commercial photography, event photography",
  },
  videography: {
    title: "Videography Services | Corporate & Promotional Videos Puducherry",
    description: "Professional videography services for corporate videos, promotional content, and brand storytelling. Cinematic quality video production.",
    keywords: "videography Puducherry, corporate videos, promotional videos, video production",
  },
  "3dModeling": {
    title: "3D & 2D Modeling Services | Animation & Visualization",
    description: "Expert 3D and 2D modeling services for product visualization, architectural renders, and animation. Bring your ideas to life with stunning visuals.",
    keywords: "3D modeling, 2D design, product visualization, 3D animation",
  },
};

// Structured Data Templates
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  image: `${siteConfig.url}/og-image.jpg`,
  email: siteConfig.location.email,
  telephone: siteConfig.location.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.state,
    addressCountry: siteConfig.location.country,
  },
  sameAs: [
    siteConfig.links.facebook,
    siteConfig.links.twitter,
    siteConfig.links.instagram,
    siteConfig.links.linkedin,
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.location.phone,
    contactType: "customer service",
    email: siteConfig.location.email,
    availableLanguage: ["English", "Tamil", "Hindi"],
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.location.phone,
  email: siteConfig.location.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.state,
    addressCountry: siteConfig.location.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "11.9416",
    longitude: "79.8083",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  image: `${siteConfig.url}/og-image.jpg`,
  sameAs: [
    siteConfig.links.facebook,
    siteConfig.links.twitter,
    siteConfig.links.instagram,
    siteConfig.links.linkedin,
  ],
};
