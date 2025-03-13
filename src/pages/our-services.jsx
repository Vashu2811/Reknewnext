"use client";
import React, { useState } from "react";
import Aigraph from "../../public/images/Aigraph.png";
import bgfreamcenter from "../../public/images/bgframcenter.png";
import backCard from "../../public/images/background-fream.svg";
import cardimgbg from "../../public/images/Framebackground.png";
import { ArrowRight } from "lucide-react";
import Consultation from "./Consultation";
import "./style.css";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Footer from "@/components/footer";

function Ourservices() {
  const [activeService, setActiveService] = useState("ai-business");
  const services = [
    {
      id: "ai-business",
      title: "AI-Powered Business Intelligence",
      description:
        "Leverage AI and machine learning to turn complex data into actionable insights.  ",
      details: [
        "Real-time data analytics for faster decision-making.",
        "AI-driven predictive modeling to forecast trends and risks.",
        "Data visualization dashboards for enterprise-wide reporting.",
        "Automated data-driven strategies to optimize operations.",
      ],
      buttonname:"Learn More",
    },
    {
      id: "workflow",
      title: "Workflow Automation & Process Optimization",
      description:
        "Automate and streamline business processes to increase efficiency and reduce operational costs.",
      details: [
        "AI-powered task automation to eliminate repetitive work.",
        "Intelligent workflow design to optimize business operations.",
        "Process mining and bottleneck identification for continuous improvement.",
        "Seamless integration with existing enterprise tools and platforms.",
      ],
       buttonname:"Start Your Automation Journey",
    },
    {
      id: "conversational",
      title: "Conversational AI & Virtual Assistants",
      description:
        "Empower your business with AI-driven customer service, chatbots, and voice assistants.",
      details: [
        "24/7 AI chatbots for customer engagement and support.",
        "Intelligent voice AI agents for automated call handling.",
        "AI-powered helpdesk automation for internal operations.",
        "Multilingual and omnichannel AI to reach global audiences.",
      ],
       buttonname:"Discover AI Chatbots",
    },
    {
      id: "data-engineering",
      title: "Data Engineering & AI-Driven Insights",
      description:
        "Transform your data into a high-value business asset with AI-powered engineering solutions.",
      details: [
        "Data integration & transformation for unified insights.",
        "AI-driven data cleaning & anomaly detection.",
        "Big data analytics and real-time monitoring.",
        "Custom AI/ML models for industry-specific use cases.",
      ],
       buttonname:"Optimize Your Data Strategy"
    },
    {
      id: "cybersecurity",
      title: "AI-Driven Cybersecurity & Compliance",
      description:
        "Protect your enterprise with AI-powered security solutions and regulatory compliance tools.",
      details: [
        "AI-based threat detection and risk management.",
        "Automated compliance tracking for industry regulations.",
        "Real-time fraud detection and anomaly prevention.",
        "Secure AI-driven identity and access management.",
      ],
       buttonname:"Strengthen Your Security"
    },
    {
      id: "cloud",
      title: "Cloud & AI Infrastructure Solutions",
      description:
        "Migrate, scale, and optimize your enterprise cloud and AI-powered infrastructure.",
      details: [
        "AI-optimized cloud architecture and migration.",
        "Serverless computing for cost-efficient scalability.",
        "AI-driven cloud cost optimization and resource allocation.",
        "Secure, scalable hybrid and multi-cloud environments.",
      ],
       buttonname:"Explore Cloud AI"
    },
  ];

  const activeServiceData = services.find(
    (service) => service.id === activeService
  );

  return (
    <>
      <div
        className="text-white bg-black font-sans w-full min-h-screen bg-cover bg-center"
      >
        <Navbar />
        <section className="w-full min-h-screen flex justify-center items-center px-4 text-center">
          <div className="max-w-4xl">
            <p className="text-lg md:text-xl mb-8">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              AI-POWERED SOLUTIONS FOR
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              INTELLIGENT ENTERPRISES
            </h1>
            <p className="text-[14px] md:text-[14px]  leading-tight mb-8">
              At ReKnew, we specialize in transforming enterprises with
              cutting-edge AI, automation, and data intelligence solutions. Our
              services are designed to optimize workflows, unlock data-driven
              decision-making, and enhance business agility, ensuring that
              organizations stay competitive in a fast-evolving digital world.
            </p>
            <div className="flex justify-center">
              <button className="px-3 py-1 rounded-[8px] text-gray-950 bg-white hover:bg-blue-700 transition-colors flex  items-center">
                Schedule a Demo
                <ArrowRight className="ml-2 mt-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <div className="min-h-screen  text-white">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Core Service Offerings
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-4xl mx-auto text-gray-300">
              We provide end-to-end AI-driven transformation solutions across
              multiple industries. Whether you are looking to modernize legacy
              systems, automate workflows, or enhance customer engagement, we
              have the expertise to help.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-around  px-8">
            <div className="mt-6 space-y-2 ">
              {services.map((service, i) => (
                <div key={i} className="border-b border-gray-800 p-2">
                  <button
                    onClick={() => setActiveService(service.id)}
                    className={`w-full text-left p-2 flex items-center border-l-4 transition-all duration-300  ${
                      activeService === service.id
                        ? "border-indigo-500"
                        : "border-transparent "
                    }`}
                  >
                    <div className="mr-3 text-xl">{service.icon}</div>
                    <span className="text-sm md:text-base">
                      {service.title}
                    </span>
                  </button>
                </div>
              ))}
            </div>

            {/* Right: Service Details */}
            <div
              style={{
                backgroundImage: `url(${cardimgbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className=" rounded-lg p-6 md:p-8 "
            >
              <div className="flex mb-6">
                <Image
                  src={Aigraph}
                  alt="Aigraph"
                  className="w-24 h-24 object-cover rounded-full  p-1"
                />
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-indigo-400 mb-4">
                {activeServiceData?.title}
              </h2>
              <p className="text-gray-300 mb-6">
                {activeServiceData?.description}
              </p>

              <ul className="space-y-3 text-left">
                {activeServiceData?.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-sm md:text-base text-gray-300">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button className="inline-flex items-center border border-gray-700 text-white px-4 py-2 rounded transition-colors">
                  {activeServiceData?.buttonname}
                  <ArrowRight size={16} className="ml-2 mt-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="container py-16">
            <div
              style={{
                backgroundImage: `url(${bgfreamcenter})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="bg-opacity-60 rounded-xl p-4  text-center max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Future-Proof Your Enterprise with AI
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
              At ReKnew, we don’t just implement technology—we create intelligent, scalable, and future-ready solutions that help enterprises evolve.
              </p>
              <div className="mt-8">
                <button className="inline-flex items-center border border-gray-700 text-white px-4 py-2 rounded transition-colors">
                Talk to an AI Expert
                  <ArrowRight size={16} className="ml-2 mt-1" />
                </button>
              </div>
            </div>
          </section>
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Industries We Serve</h1>
        <p className="text-sm md:text-base lg:text-lg max-w-4xl mx-auto text-gray-300">
          Our AI solutions are industry-agnostic and have successfully transformed businesses across multiple sectors.
        </p>
      </div>
      <div className="container mx-auto px-4 pb-16">
      
      <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
              <div
                style={{
                  backgroundImage: `url(${backCard})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className=" bg-opacity-50 backdrop-blur-sm p-6 rounded-lg  hover:border-indigo-600 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <h2 className="text-xl font-semibold text-indigo-400">
                  Finance & Banking
                  </h2>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                AI-powered fraud detection and risk analysis.
                </p>
                
              </div>

              <div
                style={{
                  backgroundImage: `url(${backCard})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className=" bg-opacity-50 backdrop-blur-sm p-6 rounded-lg  hover:border-indigo-600 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <h2 className="text-xl font-semibold text-indigo-400">
                  Healthcare
                  </h2>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                Intelligent patient engagement and diagnostics automation.
                </p>
                
              </div>

              <div
                style={{
                  backgroundImage: `url(${backCard})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className=" bg-opacity-50 backdrop-blur-sm p-6 rounded-lg  hover:border-indigo-600 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <h2 className="text-xl font-semibold text-indigo-400">
                  Technology & SaaS
                  </h2>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                AI-powered software automation and product enhancement.
                </p>
                
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <div
                style={{
                  backgroundImage: `url(${backCard})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className=" bg-opacity-50 backdrop-blur-sm p-6 rounded-lg  hover:border-indigo-600 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <h2 className="text-xl font-semibold text-indigo-400">
                  Retail & E-commerce
                  </h2>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                Personalized AI-driven recommendations and customer service.
                </p>
               
              </div>

              <div
                style={{
                  backgroundImage: `url(${backCard})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className=" bg-opacity-50 backdrop-blur-sm p-6 rounded-lg  hover:border-indigo-600 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <h2 className="text-xl font-semibold text-indigo-400">
                  Manufacturing & Supply Chain
                  </h2>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                AI-powered predictive maintenance and logistics optimization.
                </p>
                
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button className="border border-gray-800 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md flex items-center transition-all duration-300 group">
              Find Out How We Can Help Your Industry 
                <ArrowRight
                  className="ml-2 mt-1 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </button>
            </div>
          </main> 
       
      </div>
    </div>


        {/* Let’s Talk */}
        <Consultation 
          title="Get in Touch with Us"
          tag_one="Let’s explore how ReKnew can transform your enterprise with AI-driven solutions."
          btn_name="Schedule a Free Consultation"
        />
        <Footer />
      </div>
    </>
  );
}

export default Ourservices;
