import { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Cloud, Settings2, Users, ArrowBigRightDash } from 'lucide-react';
import bridge from '../../../public/assets/bridgee.png';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

const Foundation = () => {
    const cardRefs = useRef([]);
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleCardHover = (index) => {
        setHoveredCard(index);
    };

    const handleCardLeave = () => {
        setHoveredCard(null);
    };

    const cards = [
        {
            icon: Database,
            title: 'Data & AI',
            subtitle: 'Foundation',
            engineeringType: 'Data & AI Engineering',
            readyState: 'Upgrade to AI-Ready',
            features: ['Vector Stores', 'Knowledge Graph', 'Semantic Layer'],
            description:
                "Establish the foundation if it's lacking or update/upgrade it to match the proposed Data Architecture for AI. The goal would be to get the relevant portions of that assessed AI architecture components to be green - anchored and prioritized to the use cases."
        },
        {
            icon: Cloud,
            title: 'Cloud',
            subtitle: 'Foundation',
            engineeringType: 'Cloud Engineering',
            readyState: 'Enhance to AI-Ready',
            features: ['LLM Capabilities', 'Agent Deployment', 'LLM / Agent Ops'],
            description:
                'Define the relevant capabilities needed in the cloud to support AI/Gen AI/Agents and help set them up so they can be utilized for use cases by data scientists / AI engineers.'
        },
        {
            icon: Settings2,
            title: 'Workflow & Digital',
            subtitle: 'Foundation',
            engineeringType: 'Workflow & Digital Engineering',
            readyState: 'Optimize to AI-Ready',
            features: ['Agentic Tools', 'Human-AI Workflows', 'Agents as a Service'],
            description:
                'Establish a workflow solution (Access Context Engine, Connector Framework, Workflow Engine etc.) if lacking or update/upgrade it so it can be used by Agents to invoke process actions. This will enable a "Digital Inside" Enterprise.'
        },
        {
            icon: Users,
            title: 'Talent',
            subtitle: 'Foundation',
            engineeringType: 'Talent Engineering',
            readyState: 'Up-skill to AI-Ready',
            features: ['Developer Readiness', 'Workforce Readiness', 'Agentic Work Redesign'],
            description:
                'Support Data Literacy and AI Fluency efforts by providing curriculum, hands-on training, change management for workforce to understand how to leverage AI-based solutions, etc.'
        }
    ];

    return (
        <div className="relative container mx-auto px-4 z-10">
            <div className="flex flex-col items-center gap-2.5">
                <div className="space-y-12 w-full">
                    {cards.map((item, i) => (
                        <div key={i} className="flex flex-col" onMouseEnter={() => handleCardHover(i)} onMouseLeave={handleCardLeave}>
                            <div
                                ref={(el) => (cardRefs.current[i] = el)}
                                className="group flex w-full justify-center flex-col lg:flex-row items-start lg:items-center gap-8 h-auto lg:h-auto p-8 md:p-10 
                                bg-gradient-to-br from-white via-[#FFF8F6] to-[#FFF4F0] dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-900
                                border border-[#e5e7eb26] rounded-t-2xl shadow-xl transition-all duration-500 
                                overflow-hidden relative cursor-pointer"
                                style={{
                                    borderBottomLeftRadius: hoveredCard === i ? '0' : '1rem',
                                    borderBottomRightRadius: hoveredCard === i ? '0' : '1rem'
                                }}>
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F05 1px,transparent 1px),linear-gradient(-45deg,#FF8A6305 1px,transparent 1px)] dark:bg-[linear-gradient(45deg,#FF512F05 1px,transparent 1px),linear-gradient(-45deg,#FF512F05 1px,transparent 1px)] bg-[size:20px_20px] opacity-70 will-change-transform pointer-events-none"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50 dark:from-gray-900/50 dark:via-transparent dark:to-gray-900/50 will-change-transform pointer-events-none"></div>

                                <div className="flex items-center gap-4 min-w-[240px] z-10">
                                    <div
                                        className="p-4 rounded-xl bg-[#FF512F10] dark:bg-[#FF512F]/10 
                                    transition-all duration-300 group-hover:bg-[#FF512F20] dark:group-hover:bg-[#FF512F]/20">
                                        <span>
                                            <item.icon className="w-10 h-10 text-[#FF512F] dark:text-[#FF512F]" />
                                        </span>
                                    </div>
                                    <div>
                                        <p
                                            className="text-lg md:text-xl font-semibold text-[#374151] dark:text-gray-100 
                                        group-hover:text-[#FF512F] dark:group-hover:text-[#FF512F] transition-colors">
                                            {item.title}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[#FF512F] dark:bg-[#FF512F]"></span>
                                            <p className="text-base text-[#666666] dark:text-gray-400">{item.subtitle}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-l-4 w-2 h-[100px] border-[#FF512F20] dark:border-[#FF512F]/20 hidden lg:block"></div>

                                <div className="flex-1 grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-6 w-full items-center">
                                    {[item.engineeringType, item.readyState, 'Context Engineered'].map((text, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div
                                                className="z-10 px-4 py-2.5 bg-[#FF512F08] dark:bg-[#FF512F]/10 
                                            text-[#374151] dark:text-gray-200 rounded-lg text-base font-medium 
                                            flex-1 will-change-transform flex flex-col items-center gap-1">
                                                {index === 1 && <Image src={bridge} alt="Rocket" className="h-16 w-full object-contain" />}
                                                {text}
                                            </div>
                                            {index < 2 && (
                                                <ArrowBigRightDash className="hidden xl:block h-5 w-5 flex-shrink-0 text-[#FF512F] dark:text-[#FF512F]" />
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="min-w-[250px] lg:pl-8 border-l-0 lg:border-l-4 border-[#FF512F20] dark:border-[#FF512F]/20">
                                    <ul className="flex flex-col gap-4 font-normal">
                                        {item.features.map((feature, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center gap-3 text-base text-[#374151] dark:text-gray-300 
                                                will-change-transform">
                                               <span className="text-[#FF512F] text-2xl">•</span>
                                                <span className="line-clamp-1">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Description panel that slides down on hover */}
                            {hoveredCard === i && (
                                <div className="w-full flex justify-center items-center text-center p-6 bg-[#FFF8F6] dark:bg-gray-800 border border-t-0 border-[#e5e7eb26] rounded-b-2xl shadow-xl animate-slideDown">
                                    <p className="text-base md:text-lg text-[#374151] max-w-6xl dark:text-gray-200">{item.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Foundation;
