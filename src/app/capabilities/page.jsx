"use client"
import React, { useState, lazy, useEffect, useRef, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cog, Database, Zap } from 'lucide-react';
import small from '../../../public/assets/small logo.webp';
import { motion, useScroll, useSpring } from 'framer-motion';
import ContextEngineeringDiagram from './ContextEngineeringDiagram';
import ReknewSection from './reknew-section';
import ReKnewModal from '@/model/ReKnewModal';
import Image from 'next/image';
import DataandAiVarticalSlider from './CapabilitiesSlideerSection';
import CtaConsultation from './CtaSection';

const CardList = lazy(() => import('./Foundation'));
gsap.registerPlugin(ScrollTrigger);

function Capabilities() {
    useEffect(() => {
        document.title = 'Capabilities | ReKnew';
    }, []);
    const cardRefs = useRef([]);
    const headerRef = useRef(null);

    useEffect(() => {
        cardRefs.current.forEach((card) => {
            if (card) card.style.willChange = 'opacity, transform';
        });

        ScrollTrigger.batch(cardRefs.current, {
            onEnter: (batch) => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out'
                });
            },
            start: 'top 85%'
        });

        gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 80%'
                }
            }
        );
    }, []);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);
    const starterPack = {
        foundations: [
            {
                title: 'Domain Tuned LM',
                description: ' A fined tuned Language Model grounded on target domain (ex: Banking) that is more reliable than general purpose LLMs.',
                descriptiontwo: 'Carefully curated and validated domain datasets provide transparency.'
            },
            {
                title: 'Domain Knowledge Graph',
                description: 'A connected graph of knowledge representing an industry domain complete with accessible APIs ready for Agentic use cases.',
                descriptiontwo: 'Configurable and enrich able with Enterprise-specific knowledge.'
            },
            {
                title: 'Domain Document Store',
                description: 'A carefully curated set of relevant industry documents, vectorized to support RAG use cases.',
                descriptiontwo: 'Extendable with Enterprise documents.'
            }
        ],
        solution: [
            {
                title: 'Compliance & Risk Advisor',
                description: 'A fined tuned Language Model grounded on a target domain (ex: Banking) that is more reliable than general purpose LLMs.',
                descriptiontwo: 'Carefully curated and validated domain datasets provide transparency.'
            },
            {
                title: 'Complaints Manager',
                description: ' A fined tuned Language Model grounded on a target domain (ex: Banking) that is more reliable than general purpose LLMs.',
                descriptiontwo: 'Carefully curated and validated domain datasets provide transparency.'
            },
            {
                title: 'Generative Search XP',
                description: 'A Generative Search Experience to enhance customer-facing search results with natural language support and agentic features.',
                descriptiontwo: 'Pluggable and easily integrated into existing digital solutions.'
            }
        ],

        uitility: [
            {
                title: 'Data Management Hub',
                description: 'A fully integrated turnkey data management solution that covers data governance, metadata, quality, lineage, etc.'
            },
            {
                title: 'Metadata Generator',
                description: 'A utility to generate business metadata to describe data assets.',
                descriptiontwo: 'Automates the need to have human generated metadata and enables easier leverage of data for AI / LLM use cases.'
            },
            {
                title: 'Synthetic Data Generator',
                description: 'A utility to generate synthetic data to enable AI-based models and applications.Configurable with an intuitive frontend.'
            },
            {
                title: 'Enterprise MCP Server',
                description: ' An Enterprise-ready Model Context Protocol (MCP) server to enable Agentic tools.',
                descriptiontwo: 'Pluggable with new and existing Enterprise APIs.'
            },
            {
                title: 'Agentic Bootstrap',
                description: 'Library of common Enterprise agents based on standard patterns and best practices.',
                descriptiontwo: 'Designed for quick deployment and easily extensible.'
            }
        ]
    };

    return (
        <>
            <ReKnewModal isOpen={isModalOpen} onClose={closeModal} />
            <div className="text-[#374151] dark:text-gray-100 font-sans w-full min-h-screen overflow-x-hidden">
                <DataandAiVarticalSlider />
                {/* <div className="fixed inset-0 pointer-events-none z-0">
                    <div
                        className="absolute bottom-1 right-[10%] w-64 h-64 bg-gradient-to-br from-[#FF512F]/5 to-[#FF512F]/5 dark:from-[#FF512F]/5 dark:to-[#FF512F]/5 
                             rounded-full blur-3xl"
                    />
                    <div
                        className="absolute bottom-[30%] left-[5%] w-64 h-64 bg-gradient-to-br from-[#FF512F]/5 to-[#FF512F]/5 dark:from-[#FF512F]/5 dark:to-[#FF512F]/5 
                             rounded-full blur-3xl"
                    />
                </div> */}
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF512F] to-[#FF8A63] dark:from-[#FF512F] dark:to-[#FF8A63] z-50"
                    style={{ scaleX }}
                />

                <div className=" z-10 relative">
                    <div className="relative py-24 lg:py-32 overflow-hidden  dark:from-gray-900">
                        <Image src={small} alt="color-sharp" className="absolute w-[250px] bottom-40 right-2" style={{ zIndex: 1 }} loading="lazy" />
                        <div className="relative container mx-auto px-4 z-10">
                            <div className="text-center mb-20">
                                <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
                                    <h1 className="text-4xl md:text-[56px] font-bold leading-tight max-w-7xl px-4">
                                        <span className="relative inline-block">
                                            <span className="relative z-10 text-[#FF512F] dark:text-[#FF512F]">Next Gen</span>
                                            <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                                <path
                                                    d="M0 5c30-5 70-5 100 0"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    className="text-[#FF512F] dark:text-[#FF512F] transition-all duration-300"
                                                />
                                            </svg>
                                        </span>{' '}
                                        Solutions, Architected on Four Essential Foundations
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                                        Transform enterprise backbone into a future-ready AI infrastructure
                                    </p>
                                </div>
                            </div>
                            <div className="relative rounded-xl backdrop-blur-sm mt-24">
                                <Suspense fallback={<div className="loader">Loading...</div>}>
                                    <CardList />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                    <ContextEngineeringDiagram />
                    <ReknewSection />

                    <section className="py-24  text-[#374151] dark:text-gray-100  flex justify-center items-center relative overflow-hidden">
                        <div className="container mx-auto px-4 relative z-10">
                            {/* Enhanced Section Header */}
                            <div className="max-w-3xl mx-auto text-center mb-20">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#374151] to-[#374151]/80 dark:from-gray-100 dark:to-gray-100">
                                    ReKnew
                                    <span className="relative inline-block">
                                        <span className="relative z-10 text-[#FF512F] dark:text-[#FF512F] pl-2">Accelerators™</span>
                                        <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path
                                                d="M0 5c30-5 70-5 100 0"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                fill="none"
                                                className="text-[#FF512F] dark:text-[#FF512F] transition-all duration-300"
                                            />
                                        </svg>
                                    </span>
                                </h2>
                                <p className="text-lg text-[#374151]/80 dark:text-gray-100/80 leading-relaxed">
                                    Accelerators help enterprises fast track their initiatives by providing <br /> well-defined, configurable and deployable
                                    assets
                                </p>
                            </div>

                            {/* Enhanced Grid Layout */}
                            <div className="flex justify-center items-center">
                                <div className="grid grid-cols-1 max-w-[1500px] px-3 gap-4 perspective-1000">
                                {[
                                    {
                                        title: 'Foundation Layer',
                                        description: 'Core AI Infrastructure',
                                        items: starterPack.foundations,
                                        icon: <Database className="w-6 h-6" />,
                                        benefits: ['Rapid Deployment', 'Enterprise Scale', 'Production Ready'],
                                        features: ['Auto-scaling', 'High Availability', 'Security First'],
                                        gradientFrom: 'from-[#FF512F]',
                                        gradientTo: 'to-[#FF8A63]'
                                    },
                                    {
                                        title: 'Solution Layer',
                                        description: 'Business Applications',
                                        items: starterPack.solution,
                                        icon: <Cog className="w-6 h-6" />,
                                        benefits: ['Industry Specific', 'Customizable', 'Integration Ready'],
                                        features: ['User-Friendly', 'Scalable', 'Customizable'],
                                        gradientFrom: 'from-[#FF512F]',
                                        gradientTo: 'to-[#FF8A63]'
                                    },
                                    {
                                        title: 'Utility Layer',
                                        description: 'Support Tools & Services',
                                        items: starterPack.uitility,
                                        icon: <Zap className="w-6 h-6" />,
                                        benefits: ['DevOps Ready', 'Monitoring', 'Security'],
                                        features: ['Real-Time Insights', 'Automation', 'Reliability'],
                                        gradientFrom: 'from-[#FF512F]',
                                        gradientTo: 'to-[#FF8A63]'
                                    }
                                ].map((layer, index) => (
                                    <div key={index} className="group  relative transform-gpu transition-all duration-300">
                                        {/* Enhanced Card Container */}
                                        <div
                                            className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-[#FF512F]/20 dark:border-[#FF512F]/20 
                                            shadow-md hover:shadow-lg transition-all duration-300">
                                            {/* Card Header */}
                                            <div className="flex flex-col items-center text-center mb-8">
                                                <div
                                                    className={`p-4 mb-4 rounded-xl bg-gradient-to-r ${layer.gradientFrom} ${layer.gradientTo} 
                                                     shadow-lg group-hover:shadow-2xl transition-all duration-500`}>
                                                    <div className="text-white">{layer.icon}</div>
                                                </div>
                                                <div>
                                                    <h3
                                                        className="relative font-bold text-3xl bg-gradient-to-br from-[#FF512F] to-[#FF8A63] dark:from-[#FF512F] dark:to-[#FF8A63] 
                                                       bg-clip-text text-transparent transition-colors duration-300 pb-2">
                                                        {layer.title}
                                                        <span className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-gradient-to-r from-[#FF512F] to-[#FF8A63]"></span>
                                                    </h3>
                                                    <p className="text-[#374151]/70 dark:text-gray-100/70 mt-1 text-lg font-medium">{layer.description}</p>
                                                </div>
                                            </div>

                                            {/* Enhanced Items Grid */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                                                {layer.items.map((item, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="relative overflow-hidden rounded-lg 
                                                         bg-white dark:bg-gray-800 border-2 border-[#FF512F]/15 dark:border-[#FF512F]/15
                                                         p-6 hover:border-[#FF512F]/40 dark:hover:border-[#FF512F]/40 
                                                         hover:shadow-md transition-all duration-300">
                                                        <div className="space-y-3">
                                                            <h4 className="font-semibold text-[#374151] dark:text-gray-100 text-lg border-b border-[#FF512F]/20 pb-2 relative">
                                                                {item.title}
                                                                <div className="absolute -bottom-px left-0 w-8 h-[2px] bg-[#FF512F]"></div>
                                                            </h4>

                                                            <div className="flex">
                                                                <span className="text-[#FF512F] text-2xl">•</span>
                                                                <p className="text-lg pl-2 text-[#374151]/80 dark:text-gray-100/80">{item.description}</p>
                                                            </div>

                                                            <div className="flex">
                                                                {item.descriptiontwo && <span className="text-[#FF512F] text-2xl">•</span>}
                                                                <p className="text-lg pl-2 text-[#374151]/80 dark:text-gray-100/80">
                                                                    {item.descriptiontwo}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            </div>
                        </div>
                    </section>

                    <div className="relative overflow-y-hidden overflow-x-hidden">
                        <div className=" flex justify-center items-center relative">
                            <div className="py-[100px]">
                                <Suspense fallback={<div className="loader">Loading...</div>}>
                                    <CtaConsultation />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default React.memo(Capabilities);
