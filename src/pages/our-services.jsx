"use client";
import "./style.css";
import React, { useEffect, useRef, useState } from "react";
import Aigraph from "../../public/images/Aigraph.png";
import Businessai from "../../public/images/Business ai.png";
import Assistants from "../../public/images/assistants.png";
import DataAiimg from "../../public/images/dataAiimg.png";
import Cloudsolustion from "../../public/images/cloudsolustion.png";
import Compliance from "../../public/images/Compliance.png";
import backCard from "../../public/images/background-fream.svg";
import cardimgbg from "../../public/images/Framebackground.png";
import { ArrowRight } from "lucide-react";
import Consultation from "./Consultation";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const Ourservices = () =>  {
  const serviceRef = useRef({})
  const [activeService, setActiveService] = useState(1);

  const services = [
    {
      id: 1,
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
      img : Businessai
    },
    {
      id: 2,
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
       img : Aigraph
      },
    {
      id: 3,
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
       img : Assistants
      },
    {
      id: 4,
      title: "Data Engineering & AI-Driven Insights",
      description:
        "Transform your data into a high-value business asset with AI-powered engineering solutions.",
      details: [
        "Data integration & transformation for unified insights.",
        "AI-driven data cleaning & anomaly detection.",
        "Big data analytics and real-time monitoring.",
        "Custom AI/ML models for industry-specific use cases.",
      ],
       buttonname:"Optimize Your Data Strategy",
       img : DataAiimg
      },
    {
      id: 5,
      title: "AI-Driven Cybersecurity & Compliance",
      description:
        "Protect your enterprise with AI-powered security solutions and regulatory compliance tools.",
      details: [
        "AI-based threat detection and risk management.",
        "Automated compliance tracking for industry regulations.",
        "Real-time fraud detection and anomaly prevention.",
        "Secure AI-driven identity and access management.",
      ],
       buttonname:"Strengthen Your Security",
       img : Compliance
      },
    {
      id: 6,
      title: "Cloud & AI Infrastructure Solutions",
      description:
        "Migrate, scale, and optimize your enterprise cloud and AI-powered infrastructure.",
      details: [
        "AI-optimized cloud architecture and migration.",
        "Serverless computing for cost-efficient scalability.",
        "AI-driven cloud cost optimization and resource allocation.",
        "Secure, scalable hybrid and multi-cloud environments.",
      ],
       buttonname:"Explore Cloud AI",
       img : Cloudsolustion
      },
  ];

  const industriesServe = [
    {
      title : 'Finance & Banking',
      des : 'AI-powered fraud detection and risk analysis.'
    },
    {
      title : 'Healthcare',
      des : 'Intelligent patient engagement and diagnostics automation.'
    },
    {
      title : 'Technology & SaaS',
      des : 'AI-powered software automation and product enhancement.'
    },
    {
      title : 'Retail & E-commerce',
      des : 'Personalized AI-driven recommendations and customer service.'
    },
    {
      title : 'Manufacturing & Supply Chain',
      des : 'AI-powered predictive maintenance and logistics optimization.'
    },
  ]

  const activeServiceData = services.find(
    (service) => service.id === activeService
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-49% 0px -50% 0px",
      threshold: 0.001,
    };
  
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveService(Number(entry.target.getAttribute("data-section")));
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    const sections = Object.values(serviceRef.current);
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
  
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const servicesOffring = 
  (<div className="w-[350px] md:w-[550px] text-left xl:w-[689px] flex flex-col gap-6 rounded-2xl flex-shrink-0 border border-[#23262F] p-8 shadow-[inset_0px_1px_1px_1px_#C7D3EA1F,inset_0px_24px_48px_1px_#C7D3EA0D]"
    style={{
      backgroundImage: `url(${cardimgbg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="flex flex-col w-full gap-[6px]">
      <Image
        src={activeServiceData?.img}
        alt="Aigraph"
        className="w-[134px] h-[134px] object-cover"
      />
      <div className="flex font-semibold text-base md:text-xl xl:text-[26px] leading-[120%] tracking-[0] text-[#665EE9]  ">
        {activeServiceData?.title}
      </div>
    </div>
    <div className="flex w-full border-t border-[#23262F]"></div>
    <div className="flex flex-col w-full gap-[18px]">
      <div className="flex font-medium text-[18px] leading-[140%] tracking-[0]">
        {activeServiceData?.description}
      </div>
      <ul className=" flex flex-col list-disc pl-5 font-normal text-base leading-[140%] tracking-[0%] gap-2 text-[#CFD0D3]">
        {activeServiceData?.details.map((point, index) => (
          <li key={index}>
            {point}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex w-fit border border-[rgba(255,255,255,0.36)] flex-row gap-[6px] px-5 py-3 items-center rounded-lg transition-all cursor-pointer">
      <span className="flex font-semibold text-sm md:text-base leading-[140%] tracking-[0]">{activeServiceData?.buttonname}</span>
      <ArrowRight size={18} />
    </div>
  </div>)

  return (
    <>
      <div
        className="text-white bg-black font-montserrat w-full min-h-screen bg-cover bg-center"
      
      >
        <Navbar />
          <section className="w-full h-full py-10 md:py-[100px] xl:py-[200px] flex justify-center items-center text-center">
            <div className="flex justify-center items-center flex-col w-[360px] md:w-[730px] lg:w-[950px] xl:w-[1280px] gap-12">
              <p className="font-normal text-2xl leading-[120%] tracking-[0]">Our Services</p>
              <div className="flex flex-col gap-5 ">
                <div className="flex font-semibold text-2xl md:text-3xl lg:text-[62px] leading-[100%]  lg:leading-[120%]  tracking-[0]  ">
                  AI-POWERED SOLUTIONS FOR INTELLIGENT ENTERPRISES
                </div>
                <div className="flex font-normal text-base md:text-lg lg:text-[20px] leading-[140%] tracking-[0]  ">
                  At ReKnew, we specialize in transforming enterprises with cutting-edge AI, automation, and data intelligence solutions. Our services are designed to optimize workflows, unlock data-driven decision-making, and enhance business agility, ensuring that organizations stay competitive in a fast-evolving digital world.
                </div>
              </div>
              <div className="flex flex-row gap-[5px] px-5 py-3 items-center bg-[rgba(255,255,255,1)] rounded-lg transition-all cursor-pointer">
                <span className="flex font-semibold text-base leading-[140%] tracking-[0] text-[rgba(38,38,38,1)] w-full">Explore Our Platform</span>
                <ArrowRight size={18} className="text-black" />
              </div>
            </div>
          </section>


          <div className="w-full h-full py-10 md:py-0 lg:py-[100px] flex justify-center items-center text-center">
            <div className="flex justify-center items-center flex-col w-[360px] md:w-[730px] lg:w-[950px] xl:w-[1280px] gap-[72px]">
              <div className="flex flex-col items-center gap-4 ">
                <div className="flex font-semibold text-2xl md:text-3xl lg:text-[44px] leading-[120%] tracking-[0]  ">
                  Our Core Service Offerings
                </div>
                <div className="flex font-medium text-base md:text-lg lg:text-[20px] leading-[140%] tracking-[0]  ">
                We provide end-to-end AI-driven transformation solutions across multiple industries. Whether you are looking to modernize legacy systems, automate workflows, or enhance customer engagement, we have the expertise to help.
                </div>
              </div>
              <div className="flex flex-row w-full gap-[52px]">
                <div className="flex flex-col w-full gap-8">
                  {services.map((item, i) => (
                  <div 
                    key={i} className="flex flex-col w-full gap-8"
                    ref={(el) => (serviceRef.current[item.id] = el)}
                    data-section={item.id}
                  >
                    <div className="flex flex-ror w-full gap-4 items-center justify-start md:text-left cursor-pointer"
                      onClick={() => setActiveService(item.id)}
                    >
                      <span
                        className={`${item.id === activeService ? 'bg-[#665EE9]' : 'bg-[#828282]'} h-[30px] transition-all w-[6px] flex-shrink-0`}
                        style={{
                          clipPath: "polygon(0 0, 100% 34%, 100% 100%, 0 66%)",
                        }}
                      ></span>
                      <div className="flex font-medium text-base md:text-lg xl:text-[22px] leading-[120%] tracking-[0]  ">
                        {item.title}
                      </div>
                    </div>
                    {services.length-1 > i ? <div className={`flex flex-ror w-full h-[1px] ${item.id === activeService ? 'bg-white' : 'bg-[#828282]'}`}></div> : <div></div>}

                    {item.id === activeService && <div className="flex lg:hidden justify-center md:justify-start">{servicesOffring}</div> }

                    
                  </div>))}

                </div>

                <div className="lg:flex hidden ">{servicesOffring}</div>
              </div>
              
            </div>
          </div>

          <div className="w-full py-[50px] md:py-[100px] flex justify-center items-center">
            <div className="flex flex-row w-[360px] md:w-[730px] lg:w-[950px] xl:w-[1280px]">
              <div
                className="bg-center relative border border-[rgba(35,37,48,1)] flex flex-col gap-[52px]  items-center justify-center p-6 md:p-12 rounded-2xl shadow-[inset_0px_1px_1px_1px_rgba(16,17,20,0.25)]"
              >
                <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-full w-full" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,1)] to-transparent h-[2px] w-3/4 " />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233, 1)] to-transparent h-[3px] w-3/4" />
                <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-[3px]  w-full" />
        
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_25%,white)] rounded-2xl"></div>
                <div className="flex flex-col gap-6">
                  <h2 className="font-semibold text-2xl md:text-3xl lg:text-[44px] leading-[120%] text-center text-white z-10">
                    Future-Proof Your Enterprise with AI
                  </h2>
                  <p className="font-medium text-base md:text-[20px] leading-[160%] text-center text-[rgba(207,208,211,1)] z-10">
                    At ReKnew, we don’t just implement technology—we create intelligent, scalable, and future-ready solutions that help enterprises evolve.
                  </p>
                </div>
                <div className="z-10 flex w-fit border border-[rgba(255,255,255,0.36)] flex-row gap-[6px] px-5 py-3 items-center rounded-lg transition-all cursor-pointer">
                  <span className="flex font-semibold text-sm md:text-base leading-[140%] tracking-[0]">Talk to an AI Expert</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full py-[50px] lg:py-[100px] flex justify-center items-center">
            <div className="flex flex-col w-[360px] md:w-[730px] lg:w-[950px] xl:w-[1280px] gap-[52px] items-center">
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-2xl md:text-3xl lg:text-[44px] leading-[120%] text-center text-white">
                  Industries We Serve
                </h2>
                <p className="font-medium text-base md:text-[20px] leading-[140%] text-center">
                  Our AI solutions are industry-agnostic and have successfully transformed businesses across multiple sectors:
                </p>
              </div>
              <div className="flex flex-wrap gap-8 w-full justify-center">
                {industriesServe.map((ind, i) => (
                  <div key={i} className="flex relative flex-wrap w-[348px] lg:w-[405.33px] gap-3 rounded-2xl border border-[#23262F] p-8 shadow-[inset_0px_1px_1px_1px_#C7D3EA1F,inset_0px_24px_48px_1px_#C7D3EA0D]"
                    style={{
                      backgroundImage: `url(${backCard})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat:'no-repeat',
                    }}
                  >
                    <div className="absolute inset-x-12 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,1)] to-transparent h-[2px] w-1/3 " />
                    <div className="absolute inset-x-12 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233, 1)] to-transparent h-[3px] w-1/3" />
                    <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-[3px]  w-1/3" />


                    <div className="flex font-semibold text-base leading-[140%] tracking-[0] text-[#665EE9]">
                      {ind.title}
                    </div>
                    <div className="flex font-medium text-[18px] leading-[140%] tracking-[0] text-[#CFD0D3]">
                      {ind.des}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex w-fit border border-[rgba(255,255,255,0.36)] flex-row gap-[6px] px-5 py-3 items-center rounded-lg transition-all cursor-pointer">
                <span className="flex font-semibold text-sm md:text-base leading-[140%] tracking-[0]">Find Out How We Can Help Your Industry</span>
                <ArrowRight size={18} />
              </div>
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