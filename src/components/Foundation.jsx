'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, Cloud, Settings2, Users, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CardList = () => {
    const cardRefs = useRef([]);
    const featureRefs = useRef([]);

    useEffect(() => {
        // Card animations
        if (cardRefs.current.length) {
            cardRefs.current.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: 75,
                        scale: 0.95
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1.2,
                        ease: "elastic.out(1, 0.75)",
                        delay: index * 0.2,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            end: "bottom 60%",
                            toggleActions: "play none none reverse",
                        }
                    }
                );
            });
        }

        // Feature animations
        if (featureRefs.current.length) {
            featureRefs.current.forEach((feature, index) => {
                gsap.fromTo(
                    feature,
                    { x: -20, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.5,
                        delay: 0.5 + (index % 3) * 0.1,
                        scrollTrigger: {
                            trigger: feature,
                            start: "top 90%",
                        }
                    }
                );
            });
        }
    }, []);

    const cards = [
        {
            icon: Database,
            title: 'Your Data',
            subtitle: 'Foundation',
            engineeringType: 'Data Engineering',
            readyState: 'Upgrade to AI-Ready',
            features: ['Vector Stores', 'Knowledge Graph', 'Semantic Layer']
        },
        {
            icon: Cloud,
            title: 'Your Cloud',
            subtitle: 'Foundation',
            engineeringType: 'Cloud Engineering',
            readyState: 'Enhance to AI-Ready',
            features: ['LLM Capabilities', 'Agent Deployment', 'LLM / Agent Ops']
        },
        {
            icon: Settings2,
            title: 'Your Workflow',
            subtitle: 'Foundation',
            engineeringType: 'Workflow Engineering',
            readyState: 'Optimize to AI-Ready',
            features: ['Agentic Tools', 'Human-AI Workflows', 'Agents as a Service']
        },
        {
            icon: Users,
            title: 'Your Talent',
            subtitle: 'Foundation',
            engineeringType: 'Talent Engineering',
            readyState: 'Up-skill to AI-Ready',
            features: ['Developer Readiness', 'Workforce Readiness', 'Agentic Work Redesign']
        }
    ];

    return (
        <div className="py-16 ">
            <div className="max-w-[1600px] mx-auto px-4">

                <div className="space-y-12">
                    {cards.map((item, i) => (
                        <div
                            key={i}
                            ref={(el) => cardRefs.current[i] = el}
                            className="group flex w-full justify-center flex-col lg:flex-row items-start lg:items-center gap-6 h-auto lg:h-36 p-6 transition-all duration-300 bg-white/80 backdrop-blur border border-[#e5e7eb26] rounded-lg shadow-lg hover:shadow-xl hover:border-[#FF512F33] hover:scale-[1.01]"
                        >
                            <div className="flex items-center gap-4 min-w-[200px]">
                                <div className="p-4 rounded-xl bg-[#FF512F10] transition-all duration-300 group-hover:bg-[#FF512F20] group-hover:scale-110">
                                    <span>
                                        <item.icon className="w-10 h-10 text-[#FF512F]" />
                                    </span>
                                </div>
                                <div>
                                    <p className="text-[20px] font-semibold text-[#374151] group-hover:text-[#FF512F] transition-colors">
                                        {item.title}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#FF512F]"></span>
                                        <p className="text-[16px] text-[#666666]">{item.subtitle}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 w-full items-center">
                                {[item.engineeringType, item.readyState, 'Context Engineered'].map((text, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="z-10 px-4 py-2 bg-[#FF512F08] text-[#374151] rounded-lg text-[16px] font-medium whitespace-nowrap hover:bg-[#FF512F15] transition-all duration-300 hover:translate-x-2">
                                            {text}
                                        </div>
                                        {index < 2 && (
                                            <ChevronRight className="hidden lg:block h-6 w-6 text-[#FF512F]" />
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="min-w-[250px] pl-6 border-l border-[#FF512F20]">
                                <ul className="flex flex-col gap-3 font-normal text-base">
                                    {item.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            ref={(el) => featureRefs.current.push(el)}
                                            className="flex items-center gap-2 text-[16px] text-[#374151] hover:text-[#FF512F] transition-all duration-300 hover:translate-x-2"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF512F]"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardList;





























