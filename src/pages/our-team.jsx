"use client";
import "./style.css";
import React from "react";
import bgfreamcenter from "../../public/images/bgframcenter.png";
import backCard from "../../public/images/background-fream.svg";
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
        <section className="w-full min-h-screen flex justify-center items-center px-4 text-center">
          <div className="max-w-4xl">
            <p className="text-lg md:text-xl mb-8">Our Team</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Innovators, Thinkers, and Al Visionaries
            </h1>
            {/* <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              INTELLIGENT ENTERPRISES
            </h1> */}
            <p className="text-[12px] md:text-[12px] px-8 leading-tight mb-8">
              At ReKnew, we believe that technology is only as powerful as the
              people behind it. Our team consists of Al experts, data
              scientists, engineers, and industry leaders who share a common
              goal: to revolutionize businesses through Al-driven
              transformation.
            </p>
            <p className="text-[12px] md:text-[12px] px-8 leading-tight mb-8">
              With deep expertise in artificial intelligence, cloud computing,
              automation, and enterprise solutions, we bring cutting-edge
              innovations to life.
            </p>
            <div className="flex justify-center">
              <button className="px-3 py-1 rounded-[8px] text-gray-950 bg-white transition-colors flex  items-center">
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
        <div className="min-h-screen text-white">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Team Behind the Innovation
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-4xl mx-auto text-gray-300">
              Beyond our leadership, ReKnew is powered by a diverse and talented
              team of:
            </p>
          </div>
          <div className="container mx-auto px-4 pb-16">
            <main className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
                <div
                  className="bgcard bg-opacity-50 backdrop-blur-sm p-6 rounded-lg  hover:border-indigo-600 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <h2 className="text-xl font-semibold text-[#665EE9]">
                      AI Engineers
                    </h2>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    Developing advanced machine learning models & automation
                    systems.
                  </p>
                </div>

                <div
                  className="bgcard bg-opacity-50 backdrop-blur-sm p-6 rounded-lg  hover:border-indigo-600 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <h2 className="text-xl font-semibold text-[#665EE9]">
                      Data Scientists
                    </h2>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    Turning big data into business intelligence.
                  </p>
                </div>

                <div
                  className="bgcard bg-opacity-50 backdrop-blur-sm p-6 rounded-lg  hover:border-indigo-600 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <h2 className="text-xl font-semibold text-[#665EE9]">
                      Cloud & DevOps Experts
                    </h2>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    Ensuring our AI infrastructure is scalable & efficient.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                <div
                  className="bgcard bg-opacity-50 backdrop-blur-sm p-6 rounded-lg  hover:border-indigo-600 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <h2 className="text-xl font-semibold text-[#665EE9]">
                      UI/UX Designers
                    </h2>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    Creating seamless and intuitive user experiences.
                  </p>
                </div>

                <div
                  className="bgcard bg-opacity-50 backdrop-blur-sm p-6 rounded-lg  hover:border-indigo-600 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <h2 className="text-xl font-semibold text-[#665EE9]">
                      Business & Strategy Consultants
                    </h2>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    Helping enterprises successfully integrate AI into their
                    operations.
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button className="border border-gray-800 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md flex items-center transition-all duration-300 group">
                  Meet the Full Team
                  <ArrowRight
                    className="ml-2 mt-1 group-hover:translate-x-1 transition-transform"
                    size={18}
                  />
                </button>
              </div>
            </main>
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
              Join Us in Shaping the Future
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
              We’re on a mission to redefine business transformation with AI. If you’re a problem-solver, innovator, or AI enthusiast, we’d love to have you on board!
              </p>
              <div className="mt-8">
                <button className="inline-flex items-center border border-gray-700 text-white px-4 py-2 rounded transition-colors">
                Explore Open Positions
                  <ArrowRight size={16} className="ml-2 mt-1" />
                </button>
              </div>
            </div>
          </section>

        <div className="min-h-screen  text-white">
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
