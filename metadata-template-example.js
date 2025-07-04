// METADATA TEMPLATE FOR NEXT.JS 13+ APP ROUTER
// This is an example template showing how to create metadata for different pages

// EXAMPLE 1: Home Page Metadata
export const homeMetadata = {
  title: "ReKnew - AI-Powered Enterprise Transformation & Intelligent Automation",
  description: "Transform your enterprise with ReKnew's AI-powered solutions. We help businesses reduce inefficiencies, automate workflows, and unlock growth opportunities through intelligent automation and data-driven insights.",
  keywords: [
    "AI enterprise transformation",
    "intelligent automation", 
    "business process optimization",
    "workflow automation",
    "AI-powered solutions",
    "enterprise AI",
    "digital transformation",
    "business efficiency",
    "ReKnew AI"
  ],
  openGraph: {
    title: "ReKnew - AI-Powered Enterprise Transformation",
    description: "Transform your enterprise with AI-powered solutions. Reduce inefficiencies and unlock growth opportunities.",
    url: "https://reknew.ai",
    type: "website",
    images: [
      {
        url: "https://reknew.ai/assets/reknew-logo-white.png",
        width: 1200,
        height: 630,
        alt: "ReKnew - Enterprise AI Transformation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReKnew - AI-Powered Enterprise Transformation",
    description: "Transform your enterprise with AI-powered solutions. Reduce inefficiencies and unlock growth opportunities.",
  },
  alternates: {
    canonical: "https://reknew.ai",
  },
};

// EXAMPLE 2: Services Page Metadata
export const servicesMetadata = {
  title: "Our Services - Enterprise AI Solutions | ReKnew",
  description: "Explore ReKnew's comprehensive AI services: intelligent automation, workflow optimization, data analytics, and enterprise transformation solutions. Custom AI implementation for your business needs.",
  keywords: [
    "AI services",
    "enterprise automation",
    "workflow optimization",
    "business intelligence",
    "custom AI solutions",
    "data analytics",
    "process automation",
    "AI consulting"
  ],
  openGraph: {
    title: "Our Services - Enterprise AI Solutions | ReKnew",
    description: "Explore ReKnew's comprehensive AI services: intelligent automation, workflow optimization, and enterprise transformation solutions.",
    url: "https://reknew.ai/ourservices",
    type: "website",
    images: [
      {
        url: "https://reknew.ai/assets/services-banner.png",
        width: 1200,
        height: 630,
        alt: "ReKnew AI Services - Enterprise Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Enterprise AI Solutions | ReKnew",
    description: "Comprehensive AI services for enterprise transformation and automation.",
  },
  alternates: {
    canonical: "https://reknew.ai/ourservices",
  },
};

// EXAMPLE 3: Contact Page Metadata
export const contactMetadata = {
  title: "Contact Us - Get Started with AI Transformation | ReKnew",
  description: "Ready to transform your enterprise with AI? Contact ReKnew today for a consultation. Get expert guidance on intelligent automation and workflow optimization for your business.",
  keywords: [
    "contact ReKnew",
    "AI consultation",
    "enterprise transformation consultation",
    "get started with AI",
    "business automation consultation",
    "AI implementation support"
  ],
  openGraph: {
    title: "Contact Us - Get Started with AI Transformation | ReKnew",
    description: "Ready to transform your enterprise with AI? Contact ReKnew today for expert guidance on intelligent automation.",
    url: "https://reknew.ai/contact",
    type: "website",
    images: [
      {
        url: "https://reknew.ai/assets/contact-banner.png",
        width: 1200,
        height: 630,
        alt: "Contact ReKnew - AI Transformation Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get Started with AI Transformation | ReKnew",
    description: "Ready to transform your enterprise with AI? Contact ReKnew today for expert guidance.",
  },
  alternates: {
    canonical: "https://reknew.ai/contact",
  },
};

// EXAMPLE 4: Team Page Metadata
export const teamMetadata = {
  title: "Our Team - AI Experts & Innovation Leaders | ReKnew",
  description: "Meet the brilliant minds behind ReKnew's AI transformation solutions. Our team of AI experts, engineers, and business strategists are dedicated to revolutionizing enterprise automation.",
  keywords: [
    "ReKnew team",
    "AI experts",
    "machine learning engineers",
    "business strategists",
    "AI innovation team",
    "enterprise AI specialists",
    "automation experts"
  ],
  openGraph: {
    title: "Our Team - AI Experts & Innovation Leaders | ReKnew",
    description: "Meet the brilliant minds behind ReKnew's AI transformation solutions. Our team of AI experts and business strategists.",
    url: "https://reknew.ai/ourteam",
    type: "website",
    images: [
      {
        url: "https://reknew.ai/assets/team-banner.png",
        width: 1200,
        height: 630,
        alt: "ReKnew Team - AI Experts and Innovation Leaders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team - AI Experts & Innovation Leaders | ReKnew",
    description: "Meet the brilliant minds behind ReKnew's AI transformation solutions.",
  },
  alternates: {
    canonical: "https://reknew.ai/ourteam",
  },
};

// HOW TO USE IN YOUR PAGES:
// 
// 1. For App Router (Next.js 13+) - Create metadata.js in each folder:
// 
// /app/page.js (Home page)
// export { homeMetadata as metadata } from './metadata-template-example.js';
// 
// /app/services/metadata.js
// export { servicesMetadata as metadata } from '../metadata-template-example.js';
// 
// 2. Or directly in page files:
// 
// /app/services/page.js
// export const metadata = {
//   title: "Services | ReKnew",
//   description: "Our AI services...",
//   // ... rest of metadata
// };
// 
// export default function ServicesPage() {
//   return <div>Services content</div>;
// }

// IMPORTANT NOTES:
// 
// 1. Metadata in App Router is automatically handled - no need for <Head> component
// 2. Child page metadata overrides parent/global metadata
// 3. Use template in root layout for consistent formatting: template: "%s | ReKnew"
// 4. Always include canonical URLs for SEO
// 5. Optimize Open Graph images (1200x630px recommended)
// 6. Keep descriptions under 160 characters for search snippets
// 7. Use structured data (JSON-LD) for rich snippets
