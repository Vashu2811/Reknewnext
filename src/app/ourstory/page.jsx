import React from "react";
import {
  ChevronRight,
  Users,
  Rocket,
  Lightbulb,
  History,
  CheckCircle2,
  BarChart2,
} from "lucide-react";
import Section from "../../components/Section";
import Consultation from "../../components/Consultation";
import color from "../../../public/assets/logo-left-2.webp";
import Image from "next/image";

const OurStory = () => {
  const gradientText = (
    <div className="text-[#374151]">
      Be Part of Our <span className="text-highlight pr-2">Story</span>
    </div>
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Our Story - ReKnew Enterprise AI Transformation",
    "description": "Learn about ReKnew's journey from founding principles to becoming a leader in ethical AI hiring and enterprise transformation.",
    "url": "https://d3ni7pvekaqu2j.cloudfront.net/ourstory",
    "mainEntity": {
      "@type": "Organization",
      "name": "ReKnew",
      "description": "Enterprise AI transformation company specializing in ethical AI hiring solutions",
      "url": "https://d3ni7pvekaqu2j.cloudfront.net",
      "foundingDate": "2020",
      "industry": "Artificial Intelligence",
      "numberOfEmployees": "100+",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="text-[#374151] bg-white/95 w-full min-h-screen overflow-x-hidden font-sans">
      <section className="w-full relative text-[#374151] min-h-screen body65 md:h-[760px] h-[550px] flex justify-center text-center p-0 m-0 overflow-hidden">
        <Image
          src={color}
          alt="ReKnew AI Enterprise Transformation Background"
          className="absolute w-[200px] top-36 md:top-60 right-0 lg:w-[350px] lg:top-20 lg:right-40"
          style={{ zIndex: 1 }}
          priority
        />
        <div className="flex flex-col items-center justify-center w-[1280px] gap-9">
          <Section
            rotatingWords={["Discover", "Follow", "Explore"]}
            headingStart="Our Journey to"
            headingEnd="Ethical AI Hiring"
            description="From founding principles to real-world impact—learn how ReKnew.AI is transforming the hiring landscape through innovative enterprise AI solutions."
            primaryButton={{
              text: "Get Started",
              action: "getStarted"
            }}
            secondaryButton={{
              text: "Learn More",
              action: "learnMore"
            }}
          />
        </div>
      </section>

      {/* Our Journey Section - Radial Gradient Style */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 border border-[#FF512F]/20 mb-6">
                <History className="w-4 h-4 text-[#FF512F] mr-2" />
                <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                  Our Journey So Far
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                From a Bold Idea to a Game-Changer in
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#FF512F] pl-2">
                    Enterprise AI
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
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Over the years, we've transformed countless enterprises through
                AI-first strategies and innovative solutions that revolutionize hiring and business operations.
              </p>
            </div>

            <div className="space-y-16">
              {/* Mission Statement */}
              <div className="bg-gradient-to-r from-[#FF512F]/5 to-[#FF8A63]/5 rounded-2xl p-8 border border-[#FF512F]/10">
                <h2 className="text-2xl font-bold mb-4 text-[#374151]">
                  Our story began with a simple realization
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Enterprises struggle to keep pace with technological
                  advancements. While AI and automation were revolutionizing
                  industries, many businesses were still grappling with outdated
                  systems, siloed data, and inefficient workflows.
                </p>

                <h3 className="text-xl font-bold mb-4 text-[#374151]">
                  ReKnew was founded to bridge this gap, creating AI-powered
                  solutions that:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Enhance decision-making with real-time insights.",
                    "Optimize workflows through intelligent automation.",
                    "Unify data ecosystems for smarter business operations.",
                    "Enable businesses to react faster and scale efficiently.",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <span className="flex-shrink-0 p-1 rounded-full bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10">
                        <CheckCircle2 className="w-5 h-5 text-[#FF512F]" />
                      </span>
                      <span className="text-xl text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section - Diagonal Gradient Style */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/5 via-transparent to-[#FF8A63]/5" />
        <div className="absolute inset-0 backdrop-blur-[100px] opacity-30" />
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 border border-[#FF512F]/20 mb-6">
                <Users className="w-4 h-4 text-[#FF512F] mr-2" />
                <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                  About Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Who
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#FF512F] pl-2">
                    We Are
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
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                More than just a technology company—we are architects of
                transformation who empower enterprises through innovative AI solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: "Our Identity",
                  description:
                    "ReKnew is a pioneering force in enterprise AI transformation. We help enterprises revitalize their core business units by seamlessly integrating AI, automation, and data intelligence.",
                  stats: { value: "100+", label: "Enterprise Clients" },
                },
                {
                  title: "Our Approach",
                  description:
                    "The modern business landscape demands continuous evolution. We provide the strategy, tools, and expertise to help businesses navigate this transformation with confidence.",
                  stats: { value: "95%", label: "Success Rate" },
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden
                                        border border-[#FF512F]/10 hover:border-[#FF512F]/30
                                        transition-all duration-500 hover:-translate-y-1
                                        hover:shadow-[0_20px_50px_-15px_rgba(255,81,47,0.15)]
                                        p-8"
                >
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#374151] to-[#374151] group-hover:from-[#FF512F] group-hover:to-[#FF8A63] bg-clip-text text-transparent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us Section - Mesh Gradient Style */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/5 via-[#FF8A63]/3 to-[#FF512F]/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 border border-[#FF512F]/20 mb-6">
                <Rocket className="w-4 h-4 text-[#FF512F] mr-2" />
                <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                  Our Core Values
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#FF512F] px-2">
                    Drives Us
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
                Forward
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our commitment to innovation and excellence shapes everything we
                do, driving transformative outcomes for our clients through ethical AI solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Scalability & Future-Readiness",
                  description:
                    "We don't just solve today's problems—we future-proof your business with AI-driven transformation strategies that ensure long-term success.",
                  icon: Rocket,
                  stat: "2.5x",
                  statText: "Average Growth",
                },
                {
                  title: "Data-Driven Decisions",
                  description:
                    "Transform fragmented data into actionable insights, fueling smarter decision-making and sustainable growth through advanced analytics.",
                  icon: BarChart2,
                  stat: "99%",
                  statText: "Accuracy Rate",
                },
                {
                  title: "Customer-Centricity",
                  description:
                    "Our solutions are meticulously designed to solve real business challenges and enhance operational excellence with measurable results.",
                  icon: Users,
                  stat: "95%",
                  statText: "Client Satisfaction",
                },
                {
                  title: "Innovation Leadership",
                  description:
                    "Continuously pushing boundaries with cutting-edge AI technologies to drive intelligent automation and efficiency across enterprises.",
                  icon: Lightbulb,
                  stat: "100+",
                  statText: "Innovation Projects",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden
                  border border-[#FF512F]/10 hover:border-[#FF512F]/30
                   transition-all duration-500 hover:-translate-y-2
                hover:shadow-[0_20px_50px_-15px_rgba(255,81,47,0.15)]
                    p-8"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FF512F]/20 to-[#FF8A63]/20 opacity-20" />
                          <span className="relative flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10">
                            <item.icon className="w-8 h-8 text-[#FF512F]" />
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#374151] to-[#374151] group-hover:from-[#FF512F] group-hover:to-[#FF8A63] bg-clip-text text-transparent transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Wave Gradient Style */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/8 via-transparent to-[#FF8A63]/8" style={{
          backgroundImage: "repeating-linear-gradient(45deg, rgba(255,81,47,0.08) 0px, rgba(255,81,47,0.08) 25px, transparent 25px, transparent 50px)",
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission Side */}
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 border border-[#FF512F]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#FF512F] mr-2" />
                  <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                    Our Mission
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-[#374151]">
                  Empowering Through
                  <span className="relative inline-block">
                    <span className="relative z-10 text-[#FF512F] pl-2">
                      Innovation
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
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  To empower enterprises by optimizing workflows, unifying data,
                  and integrating AI-driven solutions, enabling them to make
                  intelligent, data-backed decisions that fuel growth and
                  innovation in the modern digital landscape.
                </p>
              </div>

              {/* Vision Side */}
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 border border-[#FF512F]/20">
                  <Lightbulb className="w-4 h-4 text-[#FF512F] mr-2" />
                  <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                    Our Vision
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-[#374151]">
                  Shaping the
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
                </h2>
                <div className="space-y-4 text-xl text-gray-600 leading-relaxed">
                  <p>
                    We envision a future where businesses operate with seamless
                    intelligence, connecting their core functions, people, and
                    technology to drive efficiency and maximize potential.
                  </p>
                  <p>
                    ReKnew aims to be the bridge between legacy business models
                    and AI-powered enterprises, fostering agility, intelligence,
                    and resilience in an ever-evolving marketplace.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                className="relative group inline-flex items-center justify-center px-8 py-4
                                overflow-hidden rounded-xl bg-gradient-to-r from-[#FF512F] to-[#FF8A63]
                                hover:from-[#FF8A63] hover:to-[#FF512F] transition-all duration-500
                                shadow-[0_10px_30px_-10px_rgba(255,81,47,0.3)]"
              >
                <span className="relative flex items-center text-lg font-semibold text-white">
                  Join Our Journey
                  <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section - Soft Gradient Style */}
      <div className="py-[120px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/5 via-[#FF8A63]/3 to-[#FF512F]/5" />
        <div className="relative z-10">
          <Consultation
            title={gradientText}
            tag_one="Join us in shaping the future of enterprise AI. Partner with ReKnew to transform your business through innovative technology solutions."
            btn_name="Schedule a Consultation"
            className="relative z-10"
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default OurStory;
