"use client";
import "./style.css";
import React from "react";
import underline from "../../public/images/Underline5.png";
import { ArrowRight } from "lucide-react";
import FounderName from "../../public/images/Founder.png";
import ChiefDataScientistName from "../../public/images/Chief Data Scientist.png";
import ChiefTechnologyOfficer from "../../public/images/Cto.png";
import VPofProduct from "../../public/images/VpofProduct.png";
import Consultation from "./Consultation";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";


export default function Ourteam() {
  const industriesServe = [
    {
      title : 'AI Engineers',
      des : 'Developing advanced machine learning models & automation systems.'
    },
    {
      title : 'Data Scientists',
      des : 'Turning big data into business intelligence.'
    },
    {
      title : 'Cloud & DevOps Experts',
      des : 'Ensuring our AI infrastructure is scalable & efficient.'
    },
    {
      title : 'UI/UX Designers',
      des : 'Creating seamless and intuitive user experiences.'
    },
    {
      title : 'Business & Strategy Consultants',
      des : 'Helping enterprises successfully integrate AI into their operations.'
    },
  ]
  const values = [
    {
      id: 1,
      title: "Leverage AI for Smarter Insights",
      description: "Unlock real-time data-driven decision-making.",
    },
    {
      id: 2,
      title: "Leverage AI for Smarter Insights",
      description: "Unlock real-time data-driven decision-making.",
    },
    {
      id: 3,
      title: "Leverage AI for Smarter Insights",
      description: "Unlock real-time data-driven decision-making.",
    },
    {
      id: 4,
      title: "Leverage AI for Smarter Insights",
      description: "Unlock real-time data-driven decision-making.",
    },
  ];
  const ValueCard = ({ value }) => {
    return (
      <div className="p-6 flex flex-col border border-[#ccc] rounded-md">
        <h3 className="text-indigo-400 font-medium text-lg mb-3">
          {value.title}
        </h3>
        <p className="text-white/70 text-sm">{value.description}</p>
      </div>
    );
  };

  const leadershipTeam = [
    {
      id: 1,
      name: "Founder Name",
      title: "Founder & CEO",
      description: `Visionary leader transforming enterprises through AI.
      
  With over 15 years of experience in technology, a deep understanding of industries, AI-data relationships, and vast leadership expertise, our founder has provided business-oriented insights driving innovation and growth across multiple sectors.
  
  "I'm on a mission to empower businesses to think, act, and evolve intelligently."`,
      image: FounderName,
    },
    {
      id: 2,
      name: "CTO Name",
      title: "Chief Technology Officer",
      description: `AI Architect & Engineering Leader
      
  Our technology leader is expert in deep AI, cloud computing, and distributed systems. Specializing in production-grade platforms that power lightning-fast, secure, and valuable AI-based solutions.`,
      image: ChiefTechnologyOfficer,
    },
    {
      id: 3,
      name: "Chief Data Scientist Name",
      title: "Head of AI & Data Science",
      description: `Driving Data-Driven Business Intelligence
      
  With a background in machine learning, predictive analytics, and big data, working with our AI research team, they turn theory into focused AI solutions that deliver measurable business outcomes and transform how companies extract the most accurate decisions.`,
      image: ChiefDataScientistName,
    },
    {
      id: 4,
      name: "VP of Product Name",
      title: "VP, AI Solutions & Innovation",
      description: `Bridging Business & Technology
      
  Helping our clients to develop AI solutions that with measurable business impact. Specializing in AI product strategy, go-to-market planning, and organizations seamlessly adopt AI and drive tangible business outcomes.`,
      image: VPofProduct,
    },
  ];

  const LeadershipCard = ({ leader, isEven }) => {
    return (
      <div
        className={`flex flex-col md:flex-row items-center justify-center gap-8 py-12 md:py-16 ${
          isEven ? "md:flex-row-reverse" : ""
        }`}
      >
        <Image src={leader.image} alt={leader.name} className="w-80" />

        <div className={`text-left  md:text-left max-w-xl`}>
          <h2 className="text-2xl md:text-3xl font-bold  text-[#665EE9] mb-1">
            {leader.name}
          </h2>
          <Image src={underline}  className="w-[35%] h-[5px]" />
          <h3 className="text-lg md:text-xl text-white/80 mb-4">
            {leader.title}
          </h3>
          <p className="text-white/70 text-sm md:text-base whitespace-pre-line mb-6">
            {leader.description}
          </p>
          <span
            // href="#"
            className="inline-flex items-center gap-2  border border-gray-800 rounded-md px-4 py-2 hover:bg-[#665EE9]/10 transition-colors"
          >
            <span className="font-extrabold text-[#0A66C2]">in</span>
            <span>LinkedIn Profile</span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="text-white bg-black font-montserrat w-full min-h-screen bg-cover bg-center"
      >
        <Navbar />
        
        <section className="w-full min-h-screen h-full md:h-[625px] py-10 md:py-0 flex justify-center items-center text-center">
                  <div className="flex flex-col w-[360px] md:w-[730px] lg:w-[950px] xl:w-[1280px] gap-[48px] md:gap-11 lg:gap-12">
                  <p className="font-normal text-2xl leading-[120%] tracking-[0]">
                    Our Team
                    </p>
                   <div className="flex  flex-col gap-5">
                   <div className="flex font-semibold text-3xl md:text-[62px] leading-[120%] tracking-[0]  lg:px-24">
                   INNOVATORS, THINKERS, AND AI VISIONARIES
                    </div>
                    <p className="text-[14px] md:text-[20px] lg:text-[20px] font-normal leading-[140%] lg:px-24 ">
                    At ReKnew, we believe that technology is only as powerful as the
              people behind it. Our team consists of Al experts, data
              scientists, engineers, and industry leaders who share a common
              goal: to revolutionize businesses through Al-driven
              transformation.
                    </p>
                    <p className="text-[14px] md:text-[20px] lg:text-[20px  ] font-normal leading-[140%] lg:px-24">
                    With deep expertise in artificial intelligence, cloud computing,
              automation, and enterprise solutions, we bring cutting-edge
              innovations to life.
                    </p>
                   </div>
                    <div className="flex justify-center">
                      <button className="px-3 py-1 rounded-[8px] text-gray-950 bg-white hover:bg-blue-700 transition-colors flex  items-center">
                      Join Our Team
                        <ArrowRight className="ml-2 mt-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </section>

        <div className="min-h-screen  text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Meet Our Leadership
              </h1>
              <p className="text-white/70 max-w-2xl mx-auto">
                Our leadership team is dedicated to driving innovation and
                delivering impact across industries.
              </p>
            </div>
            <div className="space-y-8 ">
              {leadershipTeam.map((leader, index) => (
                <LeadershipCard
                  key={leader.id}
                  leader={leader}
                  isEven={index % 2 !== 0}
                />
              ))}
            </div>
          </div>
        </div>



        
<div className="w-full py-[50px] lg:py-[100px] flex justify-center items-center">
            <div className="flex flex-col w-[360px] md:w-[730px] lg:w-[950px] xl:w-[1280px] gap-[52px] items-center">
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-4xl lg:text-[44px] leading-[120%] text-center text-white">
                The Team Behind the Innovation
                </h2>
                <p className="font-medium text-[20px] leading-[140%] text-center">
                Beyond our leadership, ReKnew is powered by a diverse and talented team of:
                </p>
              </div>
              <div className="flex flex-wrap gap-8 w-full justify-center">
                {industriesServe.map((ind, i) => (
                  <div key={i} className="bgcard flex relative flex-wrap w-[348px] lg:w-[405.33px] gap-3 rounded-2xl border border-[#23262F] p-8 shadow-[inset_0px_1px_1px_1px_#C7D3EA1F,inset_0px_24px_48px_1px_#C7D3EA0D]"
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
                <span className="flex font-semibold text-base leading-[140%] tracking-[0]">Find Out How We Can Help Your Industry</span>
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
          
           <div className="w-full py-[50px] md:py-[100px] flex justify-center items-center">
          <div className="flex flex-row w-[360px] md:w-[730px] lg:w-[950px] xl:w-[1280px]">
            <div className="bg-center relative border border-[rgba(35,37,48,1)] flex flex-col gap-6  items-center justify-center p-6 md:p-12 rounded-2xl shadow-[inset_0px_1px_1px_1px_rgba(16,17,20,0.25)]">
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-full w-full" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,1)] to-transparent h-[2px] w-3/4 " />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233, 1)] to-transparent h-[3px] w-3/4" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-[3px]  w-full" />

              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_25%,white)] rounded-2xl"></div>

              <h2 className="font-semibold text-[44px] leading-[120%] text-center text-white z-10">
              Join Us in Shaping the Future
              </h2>
              <p className="font-medium text-[20px] leading-[160%] text-center text-[rgba(207,208,211,1)] z-10">
              We’re on a mission to redefine business transformation with AI. If you’re a problem-solver, innovator, or AI enthusiast, we’d love to have you on board!
              </p>
              <div className="z-10 flex w-fit border border-[rgba(255,255,255,0.36)] flex-row gap-[6px] px-5 py-3 items-center rounded-lg transition-all cursor-pointer">
                  <span className="flex font-semibold text-sm md:text-base leading-[140%] tracking-[0]">Explore Open Positions</span>
                  <ArrowRight size={18} />
                </div>.
            </div>
          </div>
        </div>

        {/* <div className="min-h-screen  text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Our Culture & Values
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {values.map((value) => (
                <ValueCard key={value.id} value={value} />
              ))}
            </div>

            <div className="flex justify-center">
              <button className="group flex items-center gap-2 border border-white/20 rounded px-5 py-2.5 hover:bg-white/5 transition-colors">
                <span>Explore Our Careers</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 ml-2 mt-1"
                />
              </button>
            </div>
          </div>
        </div> */}

         <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-5xl w-full">

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-20">Our Culture & Values</h1>
        
      
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-700"></div>
          
       
          <div className="hidden md:block absolute left-0 right-0 top-1/2 h-px bg-gray-700"></div>
          
          <div className="pb-8 md:pb-16">
            <h2 className="text-xl font-medium text-indigo-400 mb-4">Innovation & Curiosity</h2>
            <p className="text-gray-300">
              We push the boundaries of what AI can do for businesses.
            </p>
          </div>

          <div className="pb-8 md:pb-16">
            <h2 className="text-xl font-medium text-indigo-400 mb-4">Collaboration & Trust</h2>
            <p className="text-gray-300">
              We believe that great things happen when brilliant minds work together.
            </p>
          </div>
      
          <div>
            <h2 className="text-xl font-medium text-indigo-400 mb-4">Impact-Driven Mindset</h2>
            <p className="text-gray-300">
              Every solution we create is designed to drive real value and measurable impact.
            </p>
          </div>
      
          <div>
            <h2 className="text-xl font-medium text-indigo-400 mb-4">Continuous Learning & Growth</h2>
            <p className="text-gray-300">
              Technology evolves fast, and so do we. We invest in research, learning, and upskilling.
            </p>
          </div>
        </div>
        
        
        <div className="flex justify-center">
              <button className="group flex items-center gap-2 border border-white/20 rounded px-5 py-2.5 hover:bg-white/5 transition-colors">
                <span>Explore Our Careers</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 ml-2 mt-1"
                />
              </button>
            </div>
      </div>
    </div> 

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
