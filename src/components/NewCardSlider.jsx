"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Database,
  Cloud,
  LineChart,
  Layers,
  Cpu,
  Brain,
  Network,
  GitMerge,
  Shield,
  BarChart3,
  Code2,
  Workflow,
  Server,
  MonitorDot,
  Boxes,
  ClipboardCheck,
  Users,
  CircuitBoard,
  Microscope,
  Bot,
  Settings2,
  Factory,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const NewCardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);
    return () => clearInterval(timer);
  });

  const previousSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setIsAutoPlaying(false);
  };

  const getIconForPoint = (point) => {
    const iconMapping = {
      // Data & BI Platform Modernization
      "ENTERPRISE DATA": {
        icon: Database,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      "CLOUD MIGRATION": {
        icon: Cloud,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      "DATA VIRTUALIZATION": {
        icon: Network,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      "REAL-TIME": {
        icon: LineChart,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      LEGACY: { icon: Factory, gradient: "from-[#FF512F]/20 to-[#FF512F]/10" },

      // AI-Powered Analytics
      "MACHINE LEARNING": {
        icon: Brain,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      "NATURAL LANGUAGE": {
        icon: Bot,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      PREDICTIVE: {
        icon: Sparkles,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      EMBEDDED: {
        icon: CircuitBoard,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },

      // Data Governance
      GOVERNANCE: {
        icon: Shield,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      OPERATING: {
        icon: Settings2,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      STEWARDSHIP: {
        icon: Users,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      COMPLIANCE: {
        icon: ClipboardCheck,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },

      // Analytics Platform
      PIPELINE: {
        icon: GitMerge,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      MARKETPLACE: {
        icon: Boxes,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      WORKBENCH: {
        icon: Microscope,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      ANALYTICS: {
        icon: BarChart3,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },

      // MDM and Architecture
      MDM: { icon: Database, gradient: "from-[#FF512F]/20 to-[#FF512F]/10" },
      QUALITY: { icon: Shield, gradient: "from-[#FF512F]/20 to-[#FF512F]/10" },
      MATCHING: {
        icon: GitMerge,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      HUB: { icon: Network, gradient: "from-[#FF512F]/20 to-[#FF512F]/10" },

      // UI/UX and Development
      "UI/UX": {
        icon: MonitorDot,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      DEVELOPMENT: {
        icon: Code2,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      DEVSECOPS: {
        icon: Shield,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      API: { icon: Workflow, gradient: "from-[#FF512F]/20 to-[#FF512F]/10" },
      MICROSERVICES: {
        icon: Layers,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },

      // Gen-AI
      AI: { icon: Brain, gradient: "from-[#FF512F]/20 to-[#FF512F]/10" },
      MODELS: { icon: Cpu, gradient: "from-[#FF512F]/20 to-[#FF512F]/10" },
      STRATEGY: {
        icon: Settings2,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      "USE CASE": {
        icon: Microscope,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
      INFRASTRUCTURE: {
        icon: Server,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },

      // Default
      DEFAULT: {
        icon: Settings2,
        gradient: "from-[#FF512F]/20 to-[#FF512F]/10",
      },
    };

    const match = Object.entries(iconMapping).find(([key]) =>
      point.toUpperCase().includes(key)
    );

    return match ? match[1] : iconMapping.DEFAULT;
  };

  return (
    <div className="relative w-full max-w-[1920px] mx-auto perspective flex flex-col">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F05 1px,transparent 1px),linear-gradient(-45deg,#FF8A6305 1px,transparent 1px)] bg-[size:20px_20px]"></div>
        <div className="absolute w-full h-full bg-gradient-to-br from-[#FF512F]/5 via-transparent to-[#FF8A63]/5 rounded-[80px] blur-3xl opacity-20"></div>
      </div>

      {/* Improved Slider Container */}
      <div className="relative h-[750px] flex items-center justify-center">
        <div className="absolute w-full flex justify-center items-center perspective-1000">
          {[-1, 0, 1].map((offset) => {
            const index = (currentIndex + offset + cards.length) % cards.length;

            return (
              <motion.div
                key={index}
                custom={offset}
                initial={false}
                animate={{
                  x: `${offset * 110}%`,
                  scale: offset === 0 ? 1 : 0.85,
                  opacity: offset === 0 ? 1 : 0.5,
                  zIndex: offset === 0 ? 2 : 1,
                  rotateY: offset * 15,
                  filter: offset === 0 ? "none" : "blur(2px)",
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                }}
                className="absolute origin-center cursor-pointer transform-gpu"
                onClick={() =>
                  offset !== 0 &&
                  (offset === -1 ? previousSlide() : nextSlide())
                }
              >
                {/* Enhanced Card Container */}
                <div
                  className={`w-[350px] md:w-[550px] xl:w-[700px] bg-white rounded-[32px] 
                  shadow-[0_24px_48px_-12px_rgba(255,81,47,0.18)]
                  border-2 border-[#FF512F]/10 transition-all duration-500 
                  ${
                    offset === 0
                      ? " group"
                      : "opacity-90 transition-all duration-300"
                  }`}
                >
                  {/* Improved Card Header */}
                  <div className="relative overflow-hidden rounded-t-[32px] md:p-6 lg:p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/5 via-white to-[#FF8A63]/5"></div>
                    <div className="relative">
                      <div
                        className="w-40 h-40 mx-auto rounded-2xl overflow-hidden
                          border-4 border-white
                          transition-all duration-500"
                        // whileHover={{ scale: 1.05 }}
                      >
                         <Image
                          src={cards[index].img}
                          alt={cards[index].title}
                          className="w-full h-full object-contain transform transition-transform duration-700"
                        />
                    
                      </div>

                      <h2
                        className="text-2xl font-bold text-center mt-8 bg-gradient-to-r from-[#232323] to-[#232323] 
                        bg-clip-text text-transparent
                        transition-all duration-300 px-4"
                      >
                        {cards[index].title}
                      </h2>
                    </div>
                  </div>

                  {/* Enhanced Card Content with Icons */}
                  <div className="lg:p-8 md:p-6 p-2 lg:space-y-8">
                    <p className="text-gray-600 text-center text-lg leading-relaxed">
                      {cards[index].description}
                    </p>

                    <div className="md:space-y-3 lg:space-y-3">
                      {cards[index].details.map((point, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-4 p-3 rounded-xl
                            transition-all duration-300"
                        >
                          <motion.span
                            // whileHover={{ scale: 1.1 }}
                            className={`p-2.5 rounded-xl bg-gradient-to-br ${
                              getIconForPoint(point).gradient
                            }
                              shadow-sm backdrop-blur-sm
                              transition-all duration-300`}
                          >
                            {React.createElement(getIconForPoint(point).icon, {
                              className: `w-5 h-5 text-[#FF512F]
                                stroke-2 transition-transform duration-300
                                `,
                            })}
                          </motion.span>
                          <span
                            className="text-gray-600 
                             flex-1 font-medium"
                          >
                            {point}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {offset === 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center pt-4"
                      >
                        <button
                          className="relative group overflow-hidden inline-flex items-center justify-center 
                          px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF512F] to-[#FF8A63] 
                          transition-all duration-500 
                          transform  shadow-[0_16px_32px_-8px_rgba(255,81,47,0.25)]"
                        >
                          <div
                            className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff20 1px,transparent 1px),linear-gradient(-45deg,#ffffff20 1px,transparent 1px)] 
                            bg-[size:8px_8px] opacity-0  transition-opacity duration-500"
                          />
                          <span className="relative flex items-center font-semibold text-lg text-white">
                            {cards[index].buttonname}
                            <ChevronRight className="ml-2 w-5 h-5 transform transition-transform duration-300" />
                          </span>
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Navigation Buttons */}
      <div className="absolute z-10 inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 sm:px-4 md:px-4">
        {[
          { onClick: previousSlide, icon: ChevronLeft, direction: "left" },
          { onClick: nextSlide, icon: ChevronRight, direction: "right" },
        ].map((btn, index) => (
          <motion.button
            key={index}
            onClick={btn.onClick}
            whileHover={{ x: btn.direction === "left" ? -5 : 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3  rounded-xl sm:rounded-2xl bg-white 
              border-2 border-[#FF512F]/50 
              transition-all duration-300 group z-20"
          >
            <btn.icon
              className="w-8  h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 text-[#FF512F] 
               transition-transform duration-300"
            />
          </motion.button>
        ))}
      </div>

      {/* Enhanced Progress Dots - Updated positioning */}
      <div className="relative md:mt-20 lg:mt-28 mt-5 flex justify-center">
        <div
          className="flex gap-5 p-6 rounded-full 
          bg-white/95 shadow-[0_8px_32px_-8px_rgba(255,81,47,0.3)] border border-[#FF512F]/10
          backdrop-blur-md"
        >
          {cards.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              whileHover={{ scale: 1.2 }}
              className={`transition-all duration-300 relative ${
                index === currentIndex
                  ? "w-2 h-2 bg-gradient-to-r from-[#FF512F] to-[#FF8A63]"
                  : "w-2 h-2 bg-[#FF512F]/20 hover:bg-[#FF512F]/40"
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FF512F] to-[#FF8A63] rounded-full"
                  layoutId="activeSlide"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCardSlider;
