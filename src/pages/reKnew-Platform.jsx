"use client";
import React from "react";
import automate from "../../public/images/Automate.png";
import Unify from "../../public/images/Unify.png";
import Leverage from "../../public/images/Leverage.png";
import Scalewith from "../../public/images/Scalewith.png";
import DigitalEarth from "../../public/images/ImageEarth.webp";
import { ArrowRight } from "lucide-react";
import Consultation from "./Consultation";
import "./style.css";
import Navbar from "@/components/navbar";
// import Footer from "";
import Image from "next/image";
import Footer from "@/components/footer";



export default function ReKnewPlatform() {
  return (
    <>
      <div
        className="text-white bg-black font-sans w-full min-h-screen bg-cover bg-center"
      >
<Navbar />
        <section className="w-full min-h-screen h-full md:h-[625px] py-10 md:py-0 flex justify-center items-center text-center">
          <div className="flex flex-col w-[360px] md:w-[730px] lg:w-[950px] xl:w-[1280px] gap-4 md:gap-11 lg:gap-12">
            <p className="font-normal text-2xl leading-[120%] tracking-[0]">
            The ReKnew Platform
            </p>
           <div className="flex  flex-col gap-5">
           <div className="flex font-semibold text-4xl md:text-[62px] leading-[120%] tracking-[0]  p-4">
            POWERING INTELLIGENT ENTERPRISES WITH AI & AUTOMATION
            </div>
            <p className="text-[14px] md:text-[20px] lg:text-[20px  ] font-normal leading-[140%] mb-8 p-4">
              At ReKnew, we’ve built an AI-powered platform that helps
              enterprises optimize operations, enhance decision-making, and
              drive innovation. Our scalable, intelligent, and data-driven
              solutions integrate seamlessly into your business
              ecosystem—enabling faster, smarter, and more efficient workflows.
            </p>
           </div>
            <div className="flex justify-center">
              <button className="px-3 py-1 rounded-[8px] text-gray-950 bg-white hover:bg-blue-700 transition-colors flex  items-center">
                Schedule a Demo
                <ArrowRight className="ml-2 mt-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <div className="mb-[100px] text-white flex flex-col items-center justify-center px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-[44px] lg:text-[44px] font-bold mb-4">
              Why Choose the ReKnew Platform?
            </h1>
            <p className="text-sm md:text-[20px] lg:text-[20px] text-gray-300 max-w-7xl">
              In today's fast-evolving business landscape, enterprises must
              adapt, automate, and optimize to stay competitive. The ReKnew
              platform is designed to:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                image: Leverage,
                title: "Leverage AI for Smarter Insights",
                description: "Unlock real-time data-driven decision making.",
              },
              {
                image: automate,
                title: "Automate & Optimize Workflows",
                description:
                  "Increase operational efficiency and reduce costs.",
              },
              {
                image: Unify,
                title: "Unify & Enhance Data Ecosystems",
                description:
                  "Centralize data for seamless analysis and reporting.",
              },
              {
                image: Scalewith,
                title: "Scale with AI-Powered Intelligence",
                description:
                  "Future-proof your business with adaptable solutions.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex justify-center items-center rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-cover rounded-full"
                  />
                </div>
                <div  className="relative ">
                  <h3 className=" relative text-lg md:text-[20px] lg:text-[20px] leading-[140%] font-semibold text-[#665EE9] mb-2 z-50">
                    {item.title}
                  </h3>
                  <p className="relative text-sm md:text-[18px] lg:text-[18px] leading-[140%] font-normal text-white max-w-[400px] z-50">
                    {item.description}
                  </p>
                  <div className="absolute inset-y-0 -left-4 bg-gradient-to-b from-transparent via-[rgba(102,94,233,0.2)] to-transparent w-full h-full" />
          <div className="absolute inset-y-[10%] -left-4 bg-gradient-to-b from-transparent via-[rgba(102,94,233,1)] to-transparent w-[2px] h-3/4" />
          <div className="absolute inset-y-[10%] -left-4 bg-gradient-to-b from-transparent via-[rgba(102,94,233,1)] to-transparent w-[3px] h-3/4" />
          <div className="absolute inset-y-0 -left-4 bg-gradient-to-b from-transparent via-[rgba(102,94,233,0.2)] to-transparent w-[3px] h-full" />
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(200px_350px_at_left,transparent_25%,white)] rounded-2xl"></div>
                </div>
                
              </div>
            ))}
          </div>

          <button className="border border-gray-800 hover:bg-indigo-700 text-white font-semibold leading-[140%]  py-3 px-6 rounded-md flex items-center transition-all duration-300 shadow-md">
            Start Your AI Transformation
            <ArrowRight className="ml-2 mt-1 h-4 w-4" />
          </button>
        </div>

        <div className="my-[100px] text-white">
          <header className="container mx-auto px-4 py-8 md:py-12">
            <h1 className="text-3xl md:text-[44px] lg:text-[44px] font-semibold leading-[120%] text-center">
              Key Capabilities of the ReKnew Platform
            </h1>
            <p className="text-center font-medium mt-4 max-w-7xl mx-auto text-gray-300 leading-[140%] text-sm md:text-[20px] lg:text-[20px]" >
              Our platform brings together AI, automation, and data intelligence
              to create a seamless digital transformation experience.
            </p>
          </header>

          <main className="container mx-auto px-4 lg:px-56 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
              <div className="relative bgcard bg-opacity-50 backdrop-blur-sm p-6 rounded-[16px]  hover:border-indigo-600 transition-all duration-300">
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-full w-full" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,1)] to-transparent h-[2px] w-2/3 " />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233, 1)] to-transparent h-[3px] w-2/3" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-[3px]  w-full" />

              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_25%,white)] rounded-2xl"></div>
                <div className="relative flex items-center mb-4">
                  <h2 className="text-xl font-semibold text-indigo-400">
                    AI-Driven Business Intelligence
                  </h2>
                </div>
                <p className="relative text-sm text-gray-300 mb-4">
                  Transform raw data into actionable insights with our
                  AI-powered analytics.
                </p>
                <ul className=" relative space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>
                      Real-time dashboards for instant decision-making
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>
                      Predictive analytics for forecasting trends and risks
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>AI-powered reporting for data-driven strategies</span>
                  </li>
                </ul>
              </div>

              <div
                className="relative bgcard bg-opacity-50 backdrop-blur-sm p-6 rounded-[16px]  hover:border-indigo-600 transition-all duration-300"
              >
                 <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-full w-full" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,1)] to-transparent h-[2px] w-2/3 " />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233, 1)] to-transparent h-[3px] w-2/3" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-[3px]  w-full" />

              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_25%,white)] rounded-2xl"></div>
                <div className="relative flex items-center mb-4">
                  <h2 className="relative text-xl font-semibold text-indigo-400">
                    Intelligent Workflow Automation
                  </h2>
                </div>
                <p className="relative text-sm text-gray-300 mb-4">
                  Boost efficiency and eliminate manual, time-consuming tasks
                  with AI-powered automation.
                </p>
                <ul className="relative space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>
                      Automate repetitive processes with smart workflows
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>Reduce human errors and increase accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>
                      Enhance productivity with intelligent task assignment
                    </span>
                  </li>
                </ul>

                </div>

               <div
                className="relative bgcard bg-opacity-50 backdrop-blur-sm p-6 rounded-[16px]  hover:border-indigo-600 transition-all duration-300"
              >
                 <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-full w-full" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,1)] to-transparent h-[2px] w-2/3 " />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233, 1)] to-transparent h-[3px] w-2/3" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-[3px]  w-full" />

              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_25%,white)] rounded-2xl"></div>
                <div className="relative flex items-center mb-4">
                  <h2 className="relative text-xl font-semibold text-indigo-400">
                  Smart Data Integration & Management
                  </h2>
                </div>
                <p className="relative text-sm text-gray-300 mb-4">
                Break down data silos and create a unified business intelligence ecosystem.
                </p>
                <ul className="relative space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>
                    Seamlessly integrate with existing enterprise systems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>Unify structured and unstructured data for better insights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>
                    Ensure secure, scalable, and efficient data management
                    </span>
                  </li>
                </ul>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
               <div
                className="relative bgcard bg-opacity-50 backdrop-blur-sm p-6 rounded-[16px]  hover:border-indigo-600 transition-all duration-300"
              >
                 <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-full w-full" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,1)] to-transparent h-[2px] w-2/3 " />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233, 1)] to-transparent h-[3px] w-2/3" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-[3px]  w-full" />

              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_25%,white)] rounded-2xl"></div>
                <div className="relative flex items-center mb-4">
                  <h2 className="relative text-xl font-semibold text-indigo-400">
                  Conversational AI & Chatbots
                  </h2>
                </div>
                <p className="relative text-sm text-gray-300 mb-4">
                Enhance customer and employee engagement with AI-driven virtual assistants.
                </p>
                <ul className="relative space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>
                      24/7 AI-powered customer support bots
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>AI-driven internal knowledge assistants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span>
                    Voice and text-based AI interactions for enterprises
                    </span>
                  </li>
                </ul>
                </div>

                   <div
                className="relative bgcard bg-opacity-50 backdrop-blur-sm p-6 rounded-[16px]  hover:border-indigo-600 transition-all duration-300"
              >
                 <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-full w-full" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,1)] to-transparent h-[2px] w-2/3 " />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233, 1)] to-transparent h-[3px] w-2/3" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-[3px]  w-full" />

              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_25%,white)] rounded-2xl"></div>
                <div className="relative flex items-center mb-4">
                  <h2 className="relative text-xl font-semibold text-indigo-400">
                  AI-Powered Security & Compliance
                  </h2>
                </div>
                <p className="relative text-sm text-gray-300 mb-4">
                Protect your business with AI-driven security solutions and compliance automation.                </p>
                <ul className="relative space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>AI-based fraud detection and risk analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>
                        Automated compliance tracking and regulatory reporting
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span>
                        Real-time security monitoring and threat detection
                      </span>
                    </li>
                </ul>
                </div>
            </div>

            <div className="flex justify-center mt-8">
              <button className="border border-gray-800 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md flex items-center transition-all duration-300 group">
                Explore Our AI Solutions
                <ArrowRight
                  className="ml-2 mt-1 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </button>
            </div>
          </main>
        </div>

        <div className="my-[100px] text-white flex flex-col items-center justify-center p-4 md:p-8">
          <div className="max-w-6xl w-full mx-auto text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Seamless Integration with Leading Technologies
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-4xl mx-auto">
              The ReKnew platform is designed to integrate seamlessly with your
              existing business ecosystem, supporting
            </p>
          </div>

          <div className="max-w-[1100px]  w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="flex justify-center items-center">
              <Image
                src={DigitalEarth}
                alt="Digital technology integration visualization"
                className="rounded-lg md:h-[548px]  object-cover shadow-lg shadow-indigo-500/30"
              />
            </div>

            <div className="flex flex-col space-y-6">
              {[
                {
                  title: "Cloud Platforms",
                  items: ["AWS", "Google Cloud", "Azure"],
                },
                {
                  title: "Enterprise Software",
                  items: ["SAP", "Oracle", "Salesforce"],
                },
                {
                  title: "Data Tools",
                  items: ["SQL", "NoSQL", "BigQuery", "Snowflake"],
                },
                {
                  title: "Automation Frameworks",
                  items: ["RPA", "ML", "NLP", "OCR"],
                },
                {
                  title: "APIs & Third-Party Services",
                  items: ["RESTful APIs", "Webhooks", "IoT"],
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="border-b border-gray-800 pb-4 md:flex md:justify-between md:items-center"
                >
                  <h3 className="text-lg font-medium mb-2">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, idx) => (
                      <button
                        key={idx}
                        className="py-1.5 px-3 rounded-full border border-gray-700 bg-gray-900 text-xs md:text-sm"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-6">
                <button className="hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-md border border-gray-700 flex items-center transition-colors duration-300">
                  Talk to an Expert
                  <span className="ml-2">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 my-[100px] flex flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-bold text-center">
            Future-Proof Your Business with AI
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-5xl mx-auto mt-4 text-center">
            The ReKnew Platform is scalable, secure, and future-ready—helping
            enterprises evolve in an AI-driven world.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 w-full max-w-6xl">
            {[
              {
                title: "Built for Growth",
                text: "Our modular architecture ensures that you can scale AI adoption at your own pace.",
              },
              {
                title: "Powered by Innovation",
                text: "We continuously integrate the latest advancements in AI, machine learning, and automation.",
              },
              {
                title: "Secure & Compliant",
                text: "Enterprise-grade security and industry-standard compliance protocols keep your data safe.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bgcard bg-opacity-70 rounded-lg p-6 md:p-8 transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <div className="text-blue-500 mb-4">
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {item.title}
                  </h2>
                </div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <button className="hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-md border border-gray-700 flex items-center transition-colors duration-300">
              Talk to an Expert
              <ArrowRight className="h-4 mt-1 w-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Let’s Talk */}
        <Consultation 
          title="Get Started with ReKnew"
          tag_one="Ready to unlock AI-powered efficiency for your enterprise? Connect with us today to explore how the ReKnew Platform can revolutionize your business."
          btn_name="Schedule a Free Consultation"
        />
        <Footer />
      </div>
      
    </>
  );
}

