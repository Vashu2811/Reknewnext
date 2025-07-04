"use client";
import React, { useEffect, useState } from "react";
import Aigraph from "../../../public/assets/slidericon-8.png";
import Businessai from "../../../public/assets/slidericon-7.png";
import Assistants from "../../../public/assets/slidericon-2.png";
import DataAiImage from "../../../public/assets/slidericon-1.png";
import Cloudsolustion from "../../../public/assets/slidericon-4.png";
import Compliance from "../../../public/assets/slidericon-3.png";
import Generative from "../../../public/assets/slidericon-6.png";
import Transformation from "../../../public/assets/slidericon-5.png";
import color from "../../../public/assets/logo-left-2.webp";
import { Code2, RockingChair } from "lucide-react";
import {
  ChevronRight,
  Factory,
  HeartPulse,
  BadgeDollarSign,
  Store,
  PackageSearch,
  Building,
  Cog,
  Brain,
  Calendar,
  LineChart,
  Users,
  Shield,
  Database,
  Zap,
  BarChart3,
  Network,
} from "lucide-react";
import { Lock } from "lucide-react";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import NewCardSlider from "../../components/NewCardSlider";
import icon9 from "../../../public/assets/icon9.svg";
import icon10 from "../../../public/assets/icon10.svg";
import icon11 from "../../../public/assets/icon11.svg";
import Section from "../../components/Section";
import Consultation from "../../components/Consultation";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import Flywheel from "../../components/Flywheel";

const gradientText = (
  <div className="text-[#374151]">
    Get in<span className="text-highlight pl-1">Touch</span> with Us
  </div>
);
const gradientText1 = (
  <>
    Organizations{" "}
    <span className="font-bold text-[20px] text-[#374151] px-1 flex-shrink-0">
      struggle to modernize
    </span>{" "}
    and re-engineer their businesses, products, processes and meet their
    customer demands.
  </>
);
const gradientText2 = (
  <>
    <span className="font-bold text-[20px] text-[#374151] px-1 flex-shrink-0">
      {" "}
      Data is siloed and locked
    </span>{" "}
    in warehouses and systems where use and value is limited
  </>
);
const gradientText3 = (
  <>
    The work done and the way we{" "}
    <span className="font-bold text-[20px] text-[#374151] px-1 flex-shrink-0">
      {" "}
      work is highly
    </span>{" "}
    manual. In regulated industries, the burden of compliance adds layers of
    mandatory manual work
  </>
);
const gradientText4 = (
  <>
    <span className="font-bold text-[20px] text-[#374151] px-1 flex-shrink-0">
      {" "}
      Skills are lacking{" "}
    </span>{" "}
    to create the future and future proof the business
  </>
);

const Ourservices = () => {
  // eslint-disable-next-line no-unused-vars
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Remove problematic parallax effect
  // eslint-disable-next-line no-unused-vars
  const parallaxY = { y: 0 }; // Simplified static value

  useEffect(() => {
    // Set basic document title
    document.title = "Our Services | ReKnew - Enterprise AI & Data Transformation Solutions";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover ReKnew\'s comprehensive AI and data transformation services. From data modernization to generative AI solutions, we help enterprises scale and innovate through intelligent automation and analytics.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover ReKnew\'s comprehensive AI and data transformation services. From data modernization to generative AI solutions, we help enterprises scale and innovate through intelligent automation and analytics.';
      document.head.appendChild(meta);
    }

    // Set keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'enterprise AI services, data transformation, business intelligence, AI analytics, data modernization, cloud migration, machine learning solutions, enterprise automation, data governance, digital transformation');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'enterprise AI services, data transformation, business intelligence, AI analytics, data modernization, cloud migration, machine learning solutions, enterprise automation, data governance, digital transformation';
      document.head.appendChild(meta);
    }

    // Set Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Our Services | ReKnew - Enterprise AI & Data Transformation Solutions');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = 'Our Services | ReKnew - Enterprise AI & Data Transformation Solutions';
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Transform your enterprise with ReKnew\'s comprehensive AI and data services. Leverage data modernization, AI-powered analytics, and intelligent automation for business growth.');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = 'Transform your enterprise with ReKnew\'s comprehensive AI and data services. Leverage data modernization, AI-powered analytics, and intelligent automation for business growth.';
      document.head.appendChild(meta);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', 'https://reknew.ai/ourservices');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:url');
      meta.content = 'https://reknew.ai/ourservices';
      document.head.appendChild(meta);
    }

    // Set canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://reknew.ai/ourservices');
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://reknew.ai/ourservices';
      document.head.appendChild(link);
    }

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const calculated = (winScroll / height) * 100;
      setScrollProgress(calculated);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      title: "Data & BI Platform Modernization",
      description:
        "Transform your legacy systems with modern data architecture utilizing DATA MESH, DATA FABRIC, and LAKEHOUSE approaches.",
      details: [
        "Enterprise Data Strategy",
        "Cloud Migration & Integration",
        "Advanced Data Virtualization",
        "Real-time Data Streaming",
        "Legacy System Modernization",
      ],
      buttonname: "Explore Modernization",
      img: Businessai,
    },
    {
      id: 2,
      title: "AI-Powered Analytics",
      description:
        "Leverage cognitive intelligence to transform historical data into actionable insights through advanced analytics.",
      details: [
        "Machine Learning Solutions",
        "Natural Language Processing",
        "Predictive Analytics",
        "Embedded Analytics (OEM)",
      ],
      buttonname: "Discover AI Solutions",
      img: Aigraph,
    },
    {
      id: 3,
      title: "Enterprise Data Governance",
      description:
        "Build a robust foundation for data monetization while ensuring compliance and data quality.",
      details: [
        "Comprehensive Governance Framework",
        "Data Operating Models",
        "Automated Stewardship",
        "Compliance Management",
      ],
      buttonname: "Learn About Governance",
      img: Assistants,
    },
    {
      id: 4,
      title: "Self-Service Analytics Platform",
      description:
        "Empower your teams with intuitive self-service analytics using No-Code/Low-Code solutions.",
      details: [
        "Automated Data Pipelines",
        "Enterprise Data Marketplace",
        "Analytics Workbench",
        "Visual Analytics Tools",
      ],
      buttonname: "Enable Self-Service",
      img: DataAiImage,
    },
    {
      id: 5,
      title: "Master Data Management",
      description:
        "Unified solution for managing critical business data across domains - from customer to product information.",
      details: [
        "Multi-Domain MDM",
        "Data Quality Control",
        "Smart Matching Engine",
        "Centralized Data Hub",
      ],
      buttonname: "Master Your Data",
      img: Compliance,
    },
    {
      id: 6,
      title: "Knowledge Graph Solutions",
      description:
        "Unlock hidden relationships in your data with advanced graph analytics and visualization.",
      details: [
        "Customer 360° View",
        "Fraud Detection Networks",
        "Security Intelligence",
        "Relationship Analytics",
      ],
      buttonname: "Explore Graph Analytics",
      img: Cloudsolustion,
    },
    {
      id: 7,
      title: "Digital Transformation",
      description:
        "Modernize your digital infrastructure with microservices and cutting-edge front-end architecture.",
      details: [
        "Modern UI/UX Design",
        "Cloud-Native Development",
        "DevSecOps Integration",
        "API Management",
        "Microservices Architecture",
      ],
      buttonname: "Transform Digital Assets",
      img: Transformation,
    },
    {
      id: 8,
      title: "Generative AI Solutions",
      description:
        "Accelerate innovation with state-of-the-art generative AI technologies and frameworks.",
      details: [
        "Custom AI Models",
        "Enterprise AI Strategy",
        "Use Case Development",
        "AI Infrastructure Design",
      ],
      buttonname: "Explore Gen-AI",
      img: Generative,
    },
  ];

  const theFutureCards = [
    {
      icon: <Cog className="w-8 h-8 text-[#FFFF]" />,
      title: "Organizations struggle to modernize",
      description: gradientText1,
      foundation: "Data Foundation",
    },
    {
      icon: <Lock className="w-8 h-8 text-[#FFFF]" />,
      title: "Data is siloed and locked",
      description: gradientText2,
      foundation: "Tech Foundation",
    },
    {
      icon: <RockingChair className="w-8 h-8 text-[#FFFF]" />,
      title: "Work is highly manual",
      description: gradientText3,
      foundation: "Innovation Foundation",
    },
    {
      icon: <Code2 className="w-8 h-8 text-[#FFFF]" />,
      title: "Skills are lacking",
      description: gradientText4,
      foundation: "People Foundation",
    },
  ];

  const starterPack = {
    foundations: [
      {
        title: "Domain Tuned LM",
        description:
          "A fine-tuned Language Model grounded on a target domain (ex: Banking) that is more reliable than general purpose LLMs.",
        details:
          "Carefully curated and validated domain datasets provide transparency.",
      },
      {
        title: "Domain Knowledge Graph",
        description:
          "A connected graph of knowledge representing an industry domain complete with accessible APIs ready for Agentic use cases.",
        details:
          "Configurable and enrichable with Enterprise-specific knowledge.",
      },
      {
        title: "Domain Document Store",
        description:
          "A carefully curated set of relevant industry documents, vectorized to support RAG use cases.",
        details: "Extendable with Enterprise documents.",
      },
    ],
    solution: [
      {
        title: "Compliance & Risk Advisor",
        description:
          "A fine-tuned Language Model grounded on a target domain (ex: Banking) that is more reliable than general purpose LLMs.",
        details:
          "Carefully curated and validated domain datasets provide transparency.",
      },
      {
        title: "Complaints Manager",
        description:
          "A fine-tuned Language Model grounded on a target domain (ex: Banking) that is more reliable than general purpose LLMs.",
        details:
          "Carefully curated and validated domain datasets provide transparency.",
      },
      {
        title: "Generative Search XP",
        description:
          "A Generative Search Experience to enhance customer-facing search results with natural language support and agentic features.",
        details:
          "Pluggable and easily integrated into existing digital solutions.",
      },
    ],
    uitility: [
      {
        title: "Synthetic Data Generator",
        description:
          "A utility to generate synthetic data to enable AI-based models and applications.",
        details: "Configurable with an intuitive frontend.",
      },
      {
        title: "Enterprise MCP Server",
        description:
          "An Enterprise-ready Model Context Protocol (MCP) server to enable Agentic tools.",
        details: "Pluggable with new and existing Enterprise APIs.",
      },
      {
        title: "Agentic Bootstrap",
        description:
          "Library of common Enterprise agents based on standard patterns and best practices.",
        details: "Designed for quick deployment and easily extensible.",
      },
    ],
  };

  const journeySteps = [
    {
      phase: "Step 1: Assess",
      icon: icon11,
      step: <LooksOneIcon className="h-8 w-8 text-[#FFFF]" />,
      title: "Evaluate The Foundation",
      points: [
        'Baseline current capabilities across the "4Ss"',
        "Establish an initial use case library",
        "Identify data readiness for use cases",
        "Identify ReKnew Starter Packs for acceleration",
        "Identify talent readiness",
      ],
    },
    {
      phase: "Step 2: Build",
      icon: icon9,
      step: <LooksTwoIcon className="h-8 w-8 text-[#FFFF]" />,
      title: "Solve Initial Use Cases Implementation",
      points: [
        "Leverage priority use cases for initial test and learn",
        "Define operating model for Enterprise-wide deployment",
        "Prioritize use case and architecture investments",
      ],
    },
    {
      phase: "Step 3: Scale",
      icon: icon10,
      step: <Looks3Icon className="h-8 w-8 text-[#FFFF]" />,
      title: "Scale Capabilities across the Enterprise",
      points: [
        "Upgrade architecture stack to best-fit capabilities",
        "Expand use case application for AI/ML driven Enterprise",
        "Measure, evaluate and iterate",
      ],
    },
  ];

  return (
    <div className="text-[#374151] w-full min-h-screen overflow-x-hidden font-sans">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF512F] to-[#FF8A63] z-50"
        style={{ scaleX }}
      />

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-[10%] w-64 h-64 bg-gradient-to-br from-[#FF512F]/5 to-[#FF8A63]/5 
                             rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-[10%] w-64 h-64 bg-gradient-to-br from-[#FF8A63]/5 to-[#FF512F]/5 
                             rounded-full blur-3xl"
        />
      </div>
      <section className="w-full relative text-[#374151] min-h-screen body65 md:h-[760px] h-[550px] flex justify-center text-center p-0 m-0 overflow-hidden">
        <Image
          src={color}
          alt="color-sharp"
          className="absolute w-[200px] top-36 md:top-60 right-0 lg:w-[350px] lg:top-20 lg:right-40"
          style={{ zIndex: 1 }}
        />
        <div className="flex flex-col items-center justify-center w-[1280px] gap-9">
          <Section
            rotatingWords={["Transform", "Optimize", "Automate"]}
            headingStart="Your Recruitment"
            headingEnd="With Ethical Intelligence"
            description="Our services—from resume screening to voice-based scoring—deliver actionable, bias-free insights."
            primaryButton={{
              text: "Get Started",
            }}
            secondaryButton={{
              text: "Learn More",
            }}
          />
        </div>
      </section>
      {/* Core Services Section - with enhanced animations */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-br from-[#FFF8F6] via-white to-[#FFF4F0] relative"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F08 1px,transparent 1px),linear-gradient(-45deg,#FF8A6308 1px,transparent 1px)] bg-[size:40px_40px]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50"></div>
        </div>

        <div className="relative container mx-auto">
          <div
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Enhanced Section Header */}
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 border border-[#FF512F]/20 mb-6">
              <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                Enterprise AI Solutions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#374151]">
              Our Core Service
              <span className="relative inline-block">
                <span className="relative z-10 text-[#FF512F] pl-2">
                  Offerings
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5c30-5 70-5 100 0"
                    stroke="#FF512F"
                    strokeWidth="2"
                    fill="none"
                    className="transition-all duration-300"
                  />
                </svg>
              </span>
              {/* <span className="text-highlight">Offerings</span> */}
            </h2>
            <p className="text-xl text-[#374151] max-w-3xl mx-auto">
              End-to-end AI-driven transformation solutions across multiple
              industries. We help modernize legacy systems, automate workflows,
              and enhance customer engagement.
            </p>
          </div>

          {/* Enhanced Service Cards Slider Container */}
          <div className="w-full overflow-visible md:py-16 py-8 lg:py-16">
            <div className="max-w-[1920px] mx-auto relative">
              <NewCardSlider
                cards={services.map((service) => ({
                  ...service,
                  cardStyle:
                    "group relative bg-white rounded-2xl overflow-hidden border border-[#FF512F]/10 hover:border-[#FF512F]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(255,81,47,0.15)]",
                  titleStyle:
                    "text-2xl font-bold bg-gradient-to-r from-[#374151] to-[#374151] group-hover:from-[#FF512F] group-hover:to-[#FF8A63] bg-clip-text text-transparent transition-colors duration-300",
                  descriptionStyle: "text-[#374151] mt-4",
                  detailsStyle: "mt-6 space-y-2",
                  buttonStyle:
                    "mt-8 inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 hover:from-[#FF512F] hover:to-[#FF8A63] hover:text-white transition-all duration-300 font-medium",
                }))}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Industries We Serve */}
      <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-12 md:py-[100px] bg-gradient-to-br from-[#FFF8F6] via-white to-[#FFF4F0] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F05 1px,transparent 1px),linear-gradient(-45deg,#FF8A6305 1px,transparent 1px)] bg-[size:30px_30px]"></div>
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#FF512F]/5 to-[#FF8A63]/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-40 -left-20 w-96 h-96 bg-gradient-to-br from-[#FF8A63]/5 to-[#FF512F]/5 rounded-full blur-3xl"
          />
        </div>

        <div className="relative flex flex-col max-w-7xl items-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 border border-[#FF512F]/20 mb-6">
              <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                Industry Expertise
              </span>
            </div>
            <h1 className="text-3xl md:text-[44px] text-[#374151] font-medium mb-4">
              {/* <span className="text-highlight">Industries</span> */}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#FF512F] pr-2">
                  Industries
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5c30-5 70-5 100 0"
                    stroke="#FF512F"
                    strokeWidth="2"
                    fill="none"
                    className="transition-all duration-300"
                  />
                </svg>
              </span>
              We Serve
            </h1>
            <p className="text-[#374151] text-lg max-w-4xl mx-auto">
              We empower businesses across various industries with cutting-edge
              AI solutions to innovate, scale, and thrive in the digital era
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 w-full">
            {[
              {
                icon: <HeartPulse size={40} className="text-[#FF512F]" />,
                title: "Healthcare & Life Sciences",
                features: [
                  {
                    icon: <Brain size={20} />,
                    text: "AI-powered diagnostic assistance",
                  },
                  {
                    icon: <Users size={20} />,
                    text: "Patient journey optimization",
                  },
                  {
                    icon: <LineChart size={20} />,
                    text: "Clinical trial analytics",
                  },
                ],
              },
              {
                icon: <BadgeDollarSign size={40} className="text-[#FF512F]" />,
                title: "Banking & Finance",
                features: [
                  {
                    icon: <Shield size={20} />,
                    text: "Risk assessment automation",
                  },
                  {
                    icon: <Database size={20} />,
                    text: "Fraud detection systems",
                  },
                  {
                    icon: <BarChart3 size={20} />,
                    text: "Algorithmic trading solutions",
                  },
                ],
              },
              {
                icon: <Store size={40} className="text-[#FF512F]" />,
                title: "Retail & E-Commerce",
                features: [
                  {
                    icon: <Users size={20} />,
                    text: "Customer behavior analytics",
                  },
                  { icon: <Zap size={20} />, text: "Inventory optimization" },
                  {
                    icon: <LineChart size={20} />,
                    text: "Personalized recommendations",
                  },
                ],
              },
              {
                icon: <PackageSearch size={40} className="text-[#FF512F]" />,
                title: "Supply Chain & Logistics",
                features: [
                  { icon: <Zap size={20} />, text: "Route optimization" },
                  { icon: <Calendar size={20} />, text: "Demand forecasting" },
                  { icon: <Network size={20} />, text: "Warehouse automation" },
                ],
              },
              {
                icon: <Building size={40} className="text-[#FF512F]" />,
                title: "Insurance",
                features: [
                  {
                    icon: <Shield size={20} />,
                    text: "Claims processing automation",
                  },
                  {
                    icon: <Database size={20} />,
                    text: "Risk assessment models",
                  },
                  {
                    icon: <Users size={20} />,
                    text: "Customer service optimization",
                  },
                ],
              },
              {
                icon: <Factory size={40} className="text-[#FF512F]" />,
                title: "Manufacturing",
                features: [
                  { icon: <Zap size={20} />, text: "Predictive maintenance" },
                  {
                    icon: <LineChart size={20} />,
                    text: "Quality control automation",
                  },
                  {
                    icon: <BarChart3 size={20} />,
                    text: "Production optimization",
                  },
                ],
              },
            ].map(({ icon, title, features }, index) => (
              <div
                key={index}
                className="group flex flex-col p-8 gap-6 rounded-2xl border border-[#FF512F]/10 
                                         bg-white/80 backdrop-blur-xl
                                         transition-all duration-500 "
              >
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/20 to-[#FF8A63]/20 
                                                    blur-xl rounded-full transform "
                    />
                    <div
                      className="relative p-4 rounded-2xl bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 
                                                    "
                    >
                      {icon}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2
                      className="font-semibold text-xl text-[#374151] 
                                                   transition-colors duration-300"
                    >
                      {title}
                    </h2>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {features.map((feature, idx) => (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      key={idx}
                      className="flex items-center gap-4 group/item relative"
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-[#FF512F]/0 to-[#FF8A63]/0 
                                                         
                                                        rounded-lg transition-all duration-300"
                      />
                      <div className="relative flex items-center gap-4 p-2">
                        <div
                          className="p-2.5 rounded-xl bg-gradient-to-br from-[#FF512F]/5 to-[#FF8A63]/5 
                                                             
                                                            transition-all duration-300"
                        >
                          <div
                            className="text-[#FF512F] transform  
                                                                transition-transform duration-300"
                          >
                            {feature.icon}
                          </div>
                        </div>
                        <span
                          className="text-[#374151] text-sm font-medium
                                                             transition-colors duration-300"
                        >
                          {feature.text}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center px-8 py-4 rounded-xl 
                                 bg-gradient-to-r from-[#FF512F] to-[#FF8A63] hover:from-[#FF8A63] 
                                 hover:to-[#FF512F] transition-all duration-500 shadow-lg 
                                 hover:shadow-[0_10px_30px_-10px_rgba(255,81,47,0.5)]"
          >
            <span className="flex items-center text-lg font-semibold text-white">
              Discover Industry Solutions
              <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </motion.button>
        </div>
      </div>

      {/* A Typical Three-Part Journey Section */}
      <div className="py-[100px] bg-gradient-to-br from-[#FFF8F6] via-white to-[#FFF4F0] p-4 sm:p-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F08 1px,transparent 1px),linear-gradient(-45deg,#FF8A6308 1px,transparent 1px)] bg-[size:40px_40px]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 border border-[#FF512F]/20 mb-6">
              <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                Our Approach
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-medium text-[#374151] mb-4">
              A Typical Three-Part
              <span className="relative inline-block">
                <span className="relative z-10 text-[#FF512F] pl-2">
                  Journey
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5c30-5 70-5 100 0"
                    stroke="#FF512F"
                    strokeWidth="2"
                    fill="none"
                    className="transition-all duration-300"
                  />
                </svg>
              </span>
              {/* <span className="text-highlight"> Journey</span> */}
            </h1>
            <p className="text-lg md:text-xl text-[#374151] max-w-3xl mx-auto">
              Our systematic approach to enterprise modernization ensures a
              smooth transition and successful implementation
            </p>
          </motion.div>

          <div className="flex flex-col gap-12">
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-8 min-h-[600px]">
              {journeySteps.map((item, index) => (
                <div  key={index}
                  className="group w-full bg-white/80 backdrop-blur-xl rounded-2xl p-6 
                                             border border-[#FF512F]/10 hover:border-[#FF512F]/30 
                                             transition-all duration-500 relative
                                             hover:shadow-[0_20px_50px_-15px_rgba(255,81,47,0.15)]"
                >
                  {/* Content Container */}
                  <div className="relative z-20">
                    {/* Phase Label */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "auto" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
                      className="inline-flex px-4 py-1 rounded-full mb-4
                                                     bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 
                                                     border border-[#FF512F]/20"
                    >
                      <span
                        className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] 
                                                         bg-clip-text text-transparent font-medium 
                                                         whitespace-nowrap"
                      >
                        {item.phase}
                      </span>
                    </motion.div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div
                          className="absolute inset-0 from-[#FF512F]/20 to-[#FF8A63]/20 
                                                             blur-xl rounded-full border border-[#FF512F]/20 transform group-hover:scale-125 transition-transform duration-500"
                        />
                        <div
                          className="relative p-4 rounded-2xl  from-[#FF512F]/10 to-[#FF8A63]/10 
                                                             group-hover:from-[#FF512F]/20 border border-[#FF512F]/20 group-hover:to-[#FF8A63]/20 transition-all duration-500"
                        >
                          <Image
                            src={item.icon}
                            alt={item.phase}
                            className="w-12 h-12"
                          />
                        </div>
                      </div>
                      <h3
                        className="font-bold text-xl text-[#374151] group-hover:text-[#FF512F] 
                                                       transition-colors duration-300"
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Points */}
                    <div className="space-y-4">
                      {item.points.map((point, idx) => (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.3 + idx * 0.1 }}
                          key={idx}
                          className="flex items-start gap-3 group/item"
                        >
                          <div className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-[#FF512F] to-[#FF8A63] flex-shrink-0" />
                          <span className="text-[#374151] group-hover/item:text-[#FF512F] transition-colors duration-300">
                            {point}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ReKnew Starter Pack */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-br from-[#FFF8F6] via-white to-[#FFF4F0] relative overflow-hidden"
      >
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F08 1px,transparent 1px),linear-gradient(-45deg,#FF8A6308 1px,transparent 1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,81,47,0.1)_0%,transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 border border-[#FF512F]/20 mb-6"
            >
              <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                Jump-Start Your AI Journey
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#374151] to-[#374151]/80">
              ReKnew
              <span className="relative inline-block">
                <span className="relative z-10 text-[#FF512F] pl-2">
                  Starter Pack
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5c30-5 70-5 100 0"
                    stroke="#FF512F"
                    strokeWidth="2"
                    fill="none"
                    className="transition-all duration-300"
                  />
                </svg>
              </span>
              {/* <span className="text-highlight">Starter Pack</span> */}
            </h2>
            <p className="text-xl text-[#374151]/80 leading-relaxed">
              Starter Packs help Enterprises accelerate their initiatives by
              providing well-defined, configurable and deployable assets. They
              help Enterprises go from 0 to v0.5 with minimal effort, providing
              a framework to deliver the first MVP and v1.0.
            </p>
          </motion.div>

          {/* Enhanced Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto perspective-1000">
            {[
              {
                title: "Foundation Layer",
                description: "Core AI Infrastructure",
                items: starterPack.foundations,
                icon: <Database className="w-6 h-6" />,
                benefits: [
                  "Rapid Deployment",
                  "Enterprise Scale",
                  "Production Ready",
                ],
                features: [
                  "Auto-scaling",
                  "High Availability",
                  "Security First",
                ],
                gradientFrom: "from-[#FF512F]",
                gradientTo: "to-[#FF8A63]",
              },
              {
                title: "Solution Layer",
                description: "Business Applications",
                items: starterPack.solution,
                icon: <Cog className="w-6 h-6" />,
                benefits: [
                  "Industry Specific",
                  "Customizable",
                  "Integration Ready",
                ],
                features: ["User-Friendly", "Scalable", "Customizable"],
                gradientFrom: "from-[#FF8A63]",
                gradientTo: "to-[#FF512F]",
              },
              {
                title: "Utility Layer",
                description: "Support Tools & Services",
                items: starterPack.uitility,
                icon: <Zap className="w-6 h-6" />,
                benefits: ["DevOps Ready", "Monitoring", "Security"],
                features: ["Real-Time Insights", "Automation", "Reliability"],
                gradientFrom: "from-[#FF512F]",
                gradientTo: "to-[#FF8A63]",
              },
            ].map((layer, index) => (
              <div
                key={index}
                className="group relative transform-gpu transition-all duration-300"
              >
                {/* Enhanced Card Container */}
                <div
                  className="relative bg-white rounded-2xl p-8 border border-[#FF512F]/10 
                                             shadow-[0_10px_40px_-15px_rgba(255,81,47,0.1)]
                                             "
                >
                  {/* Card Header */}
                  <div className="flex items-start gap-4 mb-8">
                    <motion.div
                      // whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.5 }}
                      className={`p-4 rounded-xl bg-gradient-to-r ${layer.gradientFrom} ${layer.gradientTo} 
                                                     shadow-lg group-hover:shadow-2xl transition-all duration-500`}
                    >
                      <div className="text-white">{layer.icon}</div>
                    </motion.div>
                    <div>
                      <h3
                        className="font-bold text-2xl bg-gradient-to-r from-[#374151] to-[#374151] 
                                                       group-hover:from-[#FF512F] group-hover:to-[#FF8A63] 
                                                       bg-clip-text text-transparent transition-colors duration-300"
                      >
                        {layer.title}
                      </h3>
                      <p className="text-[#374151]/70 mt-1">
                        {layer.description}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Items Grid */}
                  <div className="space-y-4">
                    {layer.items.map((item, idx) => (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        key={idx}
                        className="relative overflow-hidden rounded-lg 
                                                         bg-white border border-[#FF512F]/10
                                                         p-6 hover:border-[#FF512F]/30 
                                                         transition-all duration-300"
                      >
                        <div className="space-y-3">
                          <h4 className="font-medium text-[#374151] text-lg">
                            {item.title}
                          </h4>
                          <p className="text-sm text-[#374151]/80">
                            {item.description}
                          </p>
                          <div
                            className="text-xs text-[#374151]/60 
                                                                 bg-gradient-to-r from-[#FF512F]/5 to-[#FF8A63]/5 
                                                                 p-3 rounded-lg"
                          >
                            {item.details}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <button
              className="group relative inline-flex items-center justify-center px-8 py-4 
                                       rounded-xl overflow-hidden bg-gradient-to-r from-[#FF512F] to-[#FF8A63] 
                                       hover:from-[#FF8A63] hover:to-[#FF512F] transition-all duration-500 
                                       transform hover:scale-105 active:scale-95"
            >
              <span className="relative flex items-center text-lg font-semibold text-white">
                Start Building Today
                <ChevronRight
                  className="ml-2 w-5 h-5 transition-transform duration-300 
                                                    group-hover:translate-x-1"
                />
              </span>
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Future Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative min-h-screen bg-gradient-to-br from-[#FFF8F6] via-white to-[#FFF4F0] py-24 px-4 sm:px-8 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F08 1px,transparent 1px),linear-gradient(-45deg,#FF8A6308 1px,transparent 1px)] bg-[size:40px_40px]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 border border-[#FF512F]/20 mb-6">
              <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                Current Challenges
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[#374151]">The </span>
              <span className="relative inline-block">
                <span className="relative z-10 text-[#FF512F] px-2">
                  Future
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5c30-5 70-5 100 0"
                    stroke="#FF512F"
                    strokeWidth="2"
                    fill="none"
                    className="transition-all duration-300"
                  />
                </svg>
              </span>
              <span className="text-[#374151]">Should Feel Like the </span>
              <span className="relative inline-block">
                <span className="relative z-10 text-[#FF512F] pl-2">
                  Future
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5c30-5 70-5 100 0"
                    stroke="#FF512F"
                    strokeWidth="2"
                    fill="none"
                    className="transition-all duration-300"
                  />
                </svg>
              </span>
              <span className="text-[#374151]">! Yet...</span>
            </h1>
          </motion.div>

          {/* Enhanced Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {theFutureCards.map((card, index) => (
              <motion.div
                // initial={{ opacity: 0, translateY: 20 }}
                // whileInView={{ opacity: 1, translateY: 0 }}
                // viewport={{ once: true }}
                // transition={{ delay: index * 0.2 }}
                // whileHover={{ translateY: -8 }}
                key={index}
                className="group relative rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-500"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 border border-[#FF512F]/10 group-hover:border-[#FF512F]/30" />

                {/* Card Content */}
                <div className="relative p-8">
                  <div className="flex flex-col md:flex-row  items-start gap-6">
                    {/* Icon Container */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/20 to-[#FF8A63]/20 blur-xl rounded-full transform group-hover:scale-125 transition-transform duration-500" />
                      <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[#FF512F] to-[#FF8A63] group-hover:from-[#FF8A63] group-hover:to-[#FF512F] transition-all duration-500 shadow-lg">
                        {card.icon}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#374151] mb-3 group-hover:text-[#FF512F] transition-colors duration-300">
                        {card.title}
                      </h3>
                      <div className="text-[#374151]/80 group-hover:text-[#374151] transition-colors duration-300">
                        {card.description}
                      </div>

                      {/* Foundation Label */}
                      <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 border border-[#FF512F]/20">
                        <span className="text-sm bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent">
                          {card.foundation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/5 to-[#FF8A63]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Enhanced Bottom Question */}
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#374151] to-[#374151]/80 bg-clip-text text-transparent">
              Can Enterprises harness the potential of
              <span className="text-highlight block mt-2">
                AI-driven flywheels?
              </span>
            </h2>
          </motion.div>
        </div>
      </motion.section>

      {/* Gradient Text */}
      <div className=" md:flex lg:flex xl:flex justify-center items-center">
        <Flywheel />
      </div>
      {/* Consultation Section */}
      <motion.div
        whileInView={{ opacity: [0, 1], y: [50, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="py-[100px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/5 to-[#FF8A63]/5 opacity-50" />
          <Consultation
            title={gradientText}
            tag_one="Let's explore how ReKnew can transform your enterprise with AI-driven solutions."
            btn_name="Schedule a Free Consultation"
          />
        </div>
      </motion.div>

      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50
                        focus:bg-white focus:p-4 focus:text-[#FF512F]"
      >
        Skip to main content
      </a>
    </div>
  );
};

export default Ourservices;
