"use client";
import React, { useEffect, useRef, useState } from "react";
import sideImage from "../../public/images/AI-DrivenInsights.png";
import healthcare from "../../public/images/Healthcare.png";
import finance from "../../public/images/Finance & Banking.png";
import ecommerce from "../../public/images/E-Commerce.png";
import supply from "../../public/images/Supply.webp";
import bgfream from "../../public/images/bg-fream.png";
import workflowImage from "../../public/images/Workflow.png";
import dataIntegrationImage from "../../public/images/SmartDataIntegration.png";
import Marquee from "react-fast-marquee";
import "./style.css";
import modernizationImage from "../../public/images/Modernization.png";
import { ArrowRight } from "lucide-react";
import Consultation from "./Consultation";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "../components/footer";
import CardSlider from "./Card";
import { motion, AnimatePresence } from "framer-motion";
// import FOG from "vanta/dist/vanta.fog.min";
// import * as THREE from "three";
const words = ["Generative", "Streamline", "Strategy", "Innovation", "Optimize"];
export default function Home() {
  // const vantaRef = useRef(null);
  // const vantaEffect = useRef(null);

  // useEffect(() => {
  //   if (!vantaRef.current) return;

  //   if (!vantaEffect.current) {
  //     vantaEffect.current = FOG({
  //       el: vantaRef.current,
  //     THREE: THREE,
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.0,
  //     minWidth: 200.0,
  //     highlightColor: 0x778cef,
  //     midtoneColor: 0x4c4ee5,
  //     lowlightColor: 0xc8c8d9,
  //     baseColor: 0x000000,
  //     speed: 2,
  //     zoom: 1,
  //     fog: true,
  //     fogDensity: 0.01,
  //     fogColor: 0x0c0c0c,
  //     });
  //   }

  //   return () => {
  //     if (vantaEffect.current) {
  //       vantaEffect.current.destroy();
  //       vantaEffect.current = null;
  //     }
  //   };
  // }, [vantaRef]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);
  const sectionsRef = useRef({});
  const [selectedTab, setSelectedTab] = useState("AI-Driven Insights");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelectedTab(entry.target.getAttribute("data-section"));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Object.values(sectionsRef.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const images = {
    "AI-Driven Insights": sideImage,
    "Workflow Optimization": workflowImage,
    "Smart Data Integration": dataIntegrationImage,
    "Enterprise Modernization": modernizationImage,
  };
 
  function ProcessCard({ number, title, description }) {
    return (
      <div className="flex flex-col items-center max-w-md mx-auto w-full gap-[16px] md:gap-6 lg:gap-8 ">
        {/* Number Circle */}
        <div className="flex flex-col justify-center items-center gap-3 md:gap-4 ">
          <div className="w-14 h-14 rounded-full bg-[#101114] border border-[#23262F] flex items-center justify-center z-10">
            <span className="text-[#665EE9] text-[32px] font-bold">
              {number}
            </span>
          </div>
          <h2 className="font-semibold text-base lg:text-xl leading-[120%] tracking-[0]">
            {title}
          </h2>
        </div>

        {/* Content */}
        <div className="flex relative w-full h-full border border-[#23262F] rounded-[16px] p-3 lg:p-[32px] bg-[#101114] shadow-[inset_0px_1px_1px_1px_#C7D3EA1F,inset_0px_24px_48px_1px_#C7D3EA0D]">
          <p className="font-medium text-lg leading-[140%] tracking-[0] text-[#CFD0D3] z-10">
            {description}
          </p>

          <div className="absolute inset-y-0 right-0 bg-gradient-to-b from-transparent via-[rgba(102,94,233,0.2)] to-transparent w-full h-full" />
          <div className="absolute inset-y-[10%] right-0 bg-gradient-to-b from-transparent via-[rgba(102,94,233,1)] to-transparent w-[2px] h-3/4" />
          <div className="absolute inset-y-[10%] right-0 bg-gradient-to-b from-transparent via-[rgba(102,94,233,1)] to-transparent w-[3px] h-3/4" />
          <div className="absolute inset-y-0 right-0 bg-gradient-to-b from-transparent via-[rgba(102,94,233,0.2)] to-transparent w-[3px] h-full" />
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(200px_350px_at_right,transparent_25%,white)] rounded-2xl"></div>
        </div>
      </div>
    );
  }

  const gradientText = (
    <>
      Let’s <span className="backgroundImage">Talk!</span>
    </>
  );

  return (
    <>
      <div className="back-background text-white   font-montserrat w-full min-h-screen">
        <Navbar />
        <section
          // ref={vantaRef}
          className="w-full lg:min-h-screen md:h-[760px] h-[550px] flex justify-center items-center text-center"
        >
          <div className="flex flex-col w-[1280px] gap-9">
            <div className="flex text-[28px] sm:text-[28px] md:text-[55px]  font-normal justify-center  lg:text-[89px] leading-[120%] tracking-[0]  ">
              {/* <span>
                {" "}
                <span className="backgroundImage"> Reimagine </span> How Your
                Business Operates
              </span> */}
             <div>
             <div className="flex justify-center">
              <AnimatePresence mode="wait">
  <motion.span
    key={words[index]}
    className="backgroundImage md:w-[450px] relative -top-1 flex justify-center"
    initial={{ opacity: 0, y: 15, scale: 0.9 }}
    animate={{ 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] // Smoother entrance
      }
    }}
    exit={{ 
      opacity: 0, 
      y: -15, 
      scale: 0.9,
      transition: {
        duration: 0.35, // Faster exit for better flow
        ease: [0.4, 0, 0.2, 1] // Subtle exit easing
      }
    }}
  >
    {words[index]}
  </motion.span>
</AnimatePresence>{" "}
      <span className="">How Your</span>
           
              </div>
              <div><span className="">Business Operates</span></div>
             </div>
            </div>
            <div>
              <p className="md:px-8 sm:px-8  px-8 lg:px-72 text-[14px] md:text-[20px]  lg:text-[20px] font-normal text-gray-300  text-center">
                We help organizations reduce inefficiencies, automate workflows,
                and unlock growth opportunities.
              </p>
            </div>
            <div className="flex  justify-center items-center">
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                <button className="px-4 h-[46px] py-2 text-[#262626] rounded-md font-semibold  bg-[#FFFFFF]  transition-colors flex items-center justify-center tracking-wide">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="px-4 h-[46px] text-[#FFFFFF] py-2 font-semibold rounded-md border border-[#606060] hover:bg-gray-800 transition-colors flex items-center justify-center tracking-wide">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

       {/* <div className="mb-[100px] mt-10  relative">
          <div>
            <h1 className="text-[24px] md:text-[44px] sm:text-[18px] font-semibold text-center mb-[52px] ">
              Why <span className="backgroundImage">Businesses</span> Choose Us?
            </h1>

            <div className="relative w-full overflow-hidden ">
              <div className="flex w-full overflow-hidden gap-10">
                <Marquee direction="left" speed={80}>
                  {[...cardData, ...cardData].map((item, index) => (
                    <div
                      key={index}
                      className="bgcard rounded-[16px] sm:p-4 mx-4 md:p-8 min-w-[260px] min-h-[174px] sm:min-w-[250px] sm:min-h-[1740px] md:min-w-[460px]  md:min-h-[174px] transition-transform duration-500 border border-[#23262F] "
                    >
                      <h2 className="flex  text-[16px] md:text-[16px] font-semibold text-[#665EE9] mb-3 ">
                        {item.title}
                      </h2>
                      <p className="text-gray-300 font-medium text-[20px] sm:text-[12px] md:text-[20px] ">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>*/}
        <div>
          <CardSlider />
        </div>


        {/*  How We Transform Your Business*/}
        <div className="flex flex-col justify-center items-center px-4 py-6 md:px-8 lg:px-12 ">
          <div className="flex flex-col  max-w-7xl items-center ">
            <div className="text-center mb-[52px] ">
              <h1 className="text-[24px] md:text-[44px] lg:text-[44px] font-semibold mb-4">
                How We Transform Your{" "}
                <span className="backgroundImage">Business</span>
              </h1>
              <p className="text-gray-300 max-w-7xl md:text-[20px] sm:text-[12px] mx-auto mb-8">
                We help enterprises embrace AI-driven transformation in a
                strategic, scalable, and sustainable way.
              </p>
              <button className="h-[46px] border border-[#606060]  text-white font-semibold py-2 px-6 rounded-md inline-flex items-center transition-all duration-300">
                See How It Works <ArrowRight size={16} className="ml-2 mt-1" />
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-[52px] justify-center items-center px-4 md:px-8 lg:px-16">
              <div className="space-y-10">
                {Object.keys(images).map((section) => (
                  <div
                    key={section}
                    ref={(el) => (sectionsRef.current[section] = el)}
                    data-section={section}
                    className={`relative pl-4 cursor-pointer transition-all duration-300 ${
                      selectedTab === section ? "text-white" : "text-[#838383]"
                    }`}
                  >
                    <div>
                      <span
                        className={`absolute left-0 top-0 h-[34px] w-5 transition-all duration-300 ${
                          selectedTab === section
                            ? "bg-[#665EE9]"
                            : "bg-[#838383]"
                        }`}
                        style={{
                          clipPath: "polygon(0 0, 30% 15%, 30% 100%, 0 85%)",
                        }}
                      ></span>
                      <h2 className="text-xl md:text-[26px] font-medium mb-4 pl-3">
                        {section}
                      </h2>
                    </div>

                    <ul className="space-y-3">
                      {section === "AI-Driven Insights" && (
                        <>
                          <li className="flex items-start">
                            <span className=" mr-2">•</span>
                            <span className="text-[12PX] md:text-[18px] font-[400]">
                              Use predictive analytics to make smarter business
                              decisions.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className=" mr-2">•</span>
                            <span className="text-xs md:text-[18px] font-[400]">
                              Leverage AI-powered reporting and intelligence.
                            </span>
                          </li>
                          <li
                            key={section}
                            className={`relative w-[105%] right-4 pt-6 ${
                              selectedTab === section
                                ? "border-b-2 border-white"
                                : "border-b-2 border-[#1C1C1C]"
                            }`}
                            onClick={() => setSelectedTab(section)}
                          ></li>
                        </>
                      )}
                      {section === "Workflow Optimization" && (
                        <>
                          <li className="flex items-start">
                            <span className=" mr-2">•</span>
                            <span className="text-xs md:text-[18px] font-[400]">
                              Automate repetitive tasks and focus on high-value
                              work.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className=" mr-2">•</span>
                            <span className="text-xs md:text-[18px] font-[400]">
                              Reduce operational costs with AI-driven process
                              improvements.
                            </span>
                          </li>
                          <li
                            key={section}
                            className={`relative w-[105%] right-4 pt-6 ${
                              selectedTab === section
                                ? "border-b-2 border-white"
                                : "border-b-2 border-[#1C1C1C]"
                            }`}
                            onClick={() => setSelectedTab(section)}
                          ></li>
                        </>
                      )}
                      {section === "Smart Data Integration" && (
                        <>
                          <li className="flex items-start">
                            <span className=" mr-2">•</span>
                            <span className="text-xs md:text-[18px] font-[400]">
                              Consolidate fragmented data into a structured
                              ecosystem.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className=" mr-2">•</span>
                            <span className="text-xs md:text-[18px] font-[400]">
                              Improve data accessibility and enhance
                              decision-making.
                            </span>
                          </li>
                          <li
                            key={section}
                            className={`relative w-[105%] right-4 pt-6 ${
                              selectedTab === section
                                ? "border-b-2 border-white"
                                : "border-b-2 border-[#1C1C1C]"
                            }`}
                            onClick={() => setSelectedTab(section)}
                          ></li>
                        </>
                      )}
                      {section === "Enterprise Modernization" && (
                        <>
                          <li className="flex items-start">
                            <span className=" mr-2">•</span>
                            <span className="text-xs md:text-[18px] font-[400]">
                              Seamlessly integrate AI into business systems.
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className=" mr-2">•</span>
                            <span className="text-xs md:text-[18px] font-[400]">
                              Future-proof operations with scalable solutions.
                            </span>
                          </li>
                        </>
                      )}
                      {section === selectedTab && (
                        <div
                          className={`lg:hidden justify-center flex  lg:justify-end`}
                        >
                          <Image
                            src={images[selectedTab]}
                            alt={selectedTab}
                            loading="lazy"
                            className="rounded-lg w-full max-w-md lg:max-w-lg xl:max-w-xl object-cover shadow-md shadow-blue-900/20 transition-all duration-500"
                          />
                        </div>
                      )}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Image Display Section */}
              <div className="lg:flex justify-center hidden  lg:justify-end">
                <Image
                  src={images[selectedTab]}
                  alt={selectedTab}
                  loading="lazy"
                  className="rounded-lg w-full h-[710px] max-w-md lg:max-w-lg xl:max-w-xl object-cover shadow-md shadow-blue-900/20 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
         <div className="text-white">
          <div className="container mx-auto px-4 py-16 md:py-20 lg:py-[100px]">
            <div className="text-center">
              <h1 className="text-3xl md:text-[44px]  font-semibold mb-4">
                Industries We{" "}
                <span className="bg-gradient-text bg-clip-text text-transparent">
                  Serve
                </span>
              </h1>
              <p className="text-gray-300 font-medium max-w-4xl mx-auto">
                We empower businesses across various industries to innovate,
                scale, and thrive in the digital era.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-[52px]">
                {[
                  {
                    src: healthcare,
                    title: "Healthcare",
                    items: [
                      "AI-driven patient management and predictive diagnostics.",
                      "Intelligent automation for administrative workflows.",
                    ],
                  },
                  {
                    src: finance,
                    title: "Finance & Banking",
                    items: [
                      "Advanced fraud detection with AI-powered risk analysis.",
                      "Automated customer insights and financial forecasting.",
                    ],
                  },
                  {
                    src: ecommerce,
                    title: "Retail & E-Commerce",
                    items: [
                      "Personalized customer experiences with AI-driven advice.",
                      "Demand forecasting and intelligent inventory management.",
                    ],
                  },
                  {
                    src: supply,
                    title: "Supply Chain & Logistics",
                    items: [
                      "Route optimization and AI-powered logistics management.",
                      "Predictive analytics for efficient supply chain operations.",
                    ],
                  },
                ].map(({ src, title, items }, index) => (
                  <div
                  key={index}
                  className="flex flex-col w-full relative gap-[12px] border border-[#23262F] rounded-[16px] shadow-[inset_0px_1px_1px_1px_#C7D3EA1F,inset_0px_24px_48px_1px_#C7D3EA0D]"
                >
                  <div className="flex absolute w-full h-full   z-20 ">
                    <div
                      style={{
                        backgroundImage: `url(${bgfream})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="flex w-full h-full "
                    ></div>
                  </div>
                  <div className="flex justify-center mb-6 z-10">
                      <Image
                        src={src}
                        alt={title}
                        loading="lazy"
                        className="w-40 h-40 p-1"
                      />
                    </div>
                    <div className="flex flex-col z-10  h-fit gap-[16px] pt-[24px] pr-[24px] pb-[32px] pl-[24px] bg-[rgba(16,17,20,0.52)]">
                    <h2 className="font-semibold text-xl lg:text-2xl leading-[140%] tracking-[0]">
                      {title}
                    </h2>
                    <ul className="gap-2 list-disc pl-5">
                      {items.map((item, idx) => (
                        <li
                          key={idx}
                          className="font-medium text-lg leading-[140%] tracking-[0] text-[#CFD0D3] z-10"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                    <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-full w-full" />
                  <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,1)] to-transparent h-[2px] w-3/4 " />
                  <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233, 1)] to-transparent h-[3px] w-3/4" />
                  <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-[3px]  w-full" />

                  <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_25%,white)] rounded-2xl"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <button className="h-[46px] border border-gray-700  text-white font-medium py-2 px-6 rounded-md inline-flex items-center transition-all duration-300">
                Discover How We Help Your Industry{" "}
                <ArrowRight size={16} className="ml-2 mt-1" />
              </button>
            </div>
          </div>
        </div>

        {/*Our  Approach*/}

        <div className=" flex flex-col  justify-center items-center px-4 py-6 md:px-8 lg:px-12 md:py-[100px]">
          <div className="text-center mb-12 md:mb-[52px]">
            <h1 className="text-3xl md:text-[44px] font-semibold mb-4">
              Our <span className="backgroundImage">Approach</span>
            </h1>
            <p className="text-gray-300 font-medium text-[20px]   max-w-3xl mx-auto">
              AI + Strategy = Success
            </p>
          </div>

          <div className=" max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
              {/* Connecting Lines (visible on md and up) */}
              <div className="hidden md:block absolute top-8 left-[15%] right-[15%]">
                <div className="w-full h-full border-dashed border-t-[2px] border-[#23262F]"></div>
              </div>

              {/* Process Cards */}
              <ProcessCard
                number="1"
                title="Understand & Analyze"
                description="We assess your current business processes, challenges, and data landscape to create an AI-driven roadmap."
              />

              <ProcessCard
                number="2"
                title="Develop & Integrate"
                description="We deploy AI-powered solutions, automate workflows, and unify data to drive efficiency and intelligence."
              />

              <ProcessCard
                number="3"
                title="Optimize & Scale"
                description="We continuously monitor, improve, and scale AI capabilities to ensure your business stays ahead in a rapidly changing digital world."
              />
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button className="h-[46px] border border-gray-700  text-white font-medium py-2 px-6 rounded-md inline-flex items-center transition-all duration-300">
              Start Your AI Journey Today{" "}
              <ArrowRight size={16} className="ml-2 mt-1" />
            </button>
          </div>
        </div>

        {/*  Let’s Talk */}

        <Consultation
          title={gradientText}
          tag_one="Reimagine your business with AI-powered transformation. Get in touch with us to see how we can help your enterprise scale, optimize, and thrive."
          btn_name="Schedule a Free Consultation"
        />
      </div>
      <Footer />
    </>
  );
}