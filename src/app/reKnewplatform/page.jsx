// export default function ReKnewPlatform() {
//     return (
//         <div>
//             <h1>The ReKnew Platform</h1>
//             <p>Welcome to the ReKnew Platform page!</p>
//         </div>
//     );
// }

'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import automate from '../../../public/assets/Frame3.png';
import Unify from '../../../public/assets/Frame2.png';
import Leverage from '../../../public/assets/Frame4.png';
import Scalewith from '../../../public/assets/Frame1.png';
import DigitalEarth from '../../../public/assets/Frame14.png';
import color from '../../../public/assets/logo-left-2.webp';
import { ChevronRight, CheckCircle2, ArrowUpRight, Zap, Brain, Workflow, Database, MessageSquareCode, Shield } from 'lucide-react';
import Section from '../../components/Section';
import Consultation from '../../components/Consultation';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

function ReKnewPlatform() {
    useEffect(() => {
        document.title = 'ReKnew Platform | ReKnew';
    }, []);
    const cardRefs = useRef([]);
    const headerRef = useRef(null);

    useEffect(() => {
        // Header animation
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

        // Cards staggered animation
        cardRefs.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%'
                    }
                }
            );
        });
    }, []);

    const gradientText = (
        <div className="text-[#374151]">
            <span className="text-highlight pr-2">Get Started</span>with ReKnew
        </div>
    );
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const categories = [
        { title: 'Cloud Platforms', items: ['AWS', 'Google Cloud', 'Azure'] },
        { title: 'Enterprise Software', items: ['SAP', 'Oracle', 'Salesforce'] },
        { title: 'Data Tools', items: ['SQL', 'NoSQL', 'BigQuery', 'Snowflake'] },
        { title: 'Automation Frameworks', items: ['RPA', 'ML', 'NLP', 'OCR'] },
        { title: 'APIs & Third-Party Services', items: ['RESTful APIs', 'Webhooks'] }
    ];
    const aiSolutions = [
        {
            icon: Brain,
            title: 'AI-Driven Business Intelligence',
            description: 'Transform raw data into actionable insights with our AI-powered analytics.',
            features: [
                'Real-time dashboards for instant decision-making',
                'Predictive analytics for forecasting trends and risks',
                'AI-powered reporting for data-driven strategies'
            ]
        },
        {
            icon: Workflow,
            title: 'Intelligent Workflow Automation',
            description: 'Boost efficiency and eliminate manual, time-consuming tasks with AI-powered automation.',
            features: [
                'Automate repetitive processes with smart workflows',
                'Reduce human errors and increase accuracy',
                'Enhance productivity with intelligent task assignment'
            ]
        },
        {
            icon: Database,
            title: 'Smart Data Integration & Management',
            description: 'Break down data silos and create a unified business intelligence ecosystem.',
            features: [
                'Seamlessly integrate with existing enterprise systems',
                'Unify structured and unstructured data for better insights',
                'Ensure secure, scalable, and efficient data management'
            ]
        },
        {
            icon: MessageSquareCode,
            title: 'Conversational AI & Chatbots',
            description: 'Enhance customer and employee engagement with AI-driven virtual assistants.',
            features: [
                '24/7 AI-powered customer support bots',
                'AI-driven internal knowledge assistants',
                'Voice and text-based AI interactions for enterprises'
            ]
        },
        {
            icon: Shield,
            title: 'AI-Powered Security & Compliance',
            description: 'Protect your business with AI-driven security solutions and compliance automation.',
            features: [
                'AI-based fraud detection and risk analysis',
                'Automated compliance tracking and regulatory reporting',
                'Real-time security monitoring and threat detection'
            ]
        }
    ];

    const handleGetStarted = () => {
        console.log('Get Started clicked');
    };

    const handleLearnMore = () => {
        console.log('Learn More clicked');
    };

    return (
        <>
            <div className="text-[#374151] font-sans w-full min-h-screen overflow-x-hidden">
                <section className="w-full relative text-[#374151] min-h-screen body65 md:h-[760px] h-[550px] flex justify-center text-center p-0 m-0 overflow-hidden">
                    <Image
                        src={color}
                        alt="color-sharp"
                        className="absolute w-[200px] top-36 md:top-60 right-0 lg:w-[350px] lg:top-20 lg:right-40"
                        style={{ zIndex: 1 }}
                    />
                    <div className="flex flex-col items-center justify-center w-[1280px] gap-9">
                        <Section
                            rotatingWords={['Explore', 'Understand', 'Experience']}
                            headingStart="The Power of"
                            headingEnd="The ReKnew Platform"
                            description="Built on responsible AI, our platform delivers fairness, transparency, and compliance at every hiring step."
                            primaryButton={{
                                text: 'Get Started',
                                onClick: () => handleGetStarted()
                            }}
                            secondaryButton={{
                                text: 'Learn More',
                                onClick: () => handleLearnMore()
                            }}
                        />
                    </div>
                </section>
                <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF512F] to-[#FF8A63] z-50" style={{ scaleX }} />

                <div className="bg-gradient-to-br from-white via-[#FFF8F6] to-[#FFF4F0] relative">
                    {/* Enhanced Background Pattern */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F08 1px,transparent 1px),linear-gradient(-45deg,#FF8A6308 1px,transparent 1px)] bg-[size:40px_40px]"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50"></div>
                    </div>

                    <section className="relative text-[#374151] flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-16">
                        {/* Enhanced Header Section */}
                        <div ref={headerRef} className="flex flex-col max-w-7xl items-center mx-auto text-center mb-16 gap-8">
                            <div className="relative inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 border border-[#FF512F]/20 shadow-[0_0_15px_-3px_rgba(255,81,47,0.1)]">
                                <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                                    Platform Benefits
                                </span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h1 className="text-4xl md:text-[48px] lg:text-[44px] font-bold leading-[120%] text-[#374151]">
                                    Why Choose the{' '}
                                    <span className="text-highlight relative inline-block group">
                                        ReKnew
                                        <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path
                                                d="M0 5c30-6 70-5 100 0"
                                                stroke="#FF512F"
                                                strokeWidth="2"
                                                fill="none"
                                                className="transition-all duration-300"
                                            />
                                        </svg>
                                        {/* <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF512F] to-[#FF8A63] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span> */}
                                    </span>{' '}
                                    Platform?
                                </h1>
                            </div>
                            <p className="text-lg md:text-xl lg:text-xl text-gray-600 font-medium leading-[150%] max-w-4xl">
                                In today's fast-evolving business landscape, enterprises must adapt, automate, and optimize to stay competitive. The ReKnew
                                platform is designed to empower businesses with AI-driven solutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1500px] mx-auto">
                            {[
                                {
                                    image: Leverage,
                                    title: 'Leverage AI for Smarter Insights',
                                    description: 'Unlock real-time data-driven decision making with advanced analytics and AI-powered intelligence.'
                                },
                                {
                                    image: automate,
                                    title: 'Automate & Optimize Workflows',
                                    description: 'Increase operational efficiency and reduce costs with intelligent automation solutions.'
                                },
                                {
                                    image: Unify,
                                    title: 'Unify & Enhance Data Ecosystems',
                                    description: 'Centralize data for seamless analysis and reporting across your organization.'
                                },
                                {
                                    image: Scalewith,
                                    title: 'Scale with AI-Powered Intelligence',
                                    description: 'Future-proof your business with adaptable and scalable AI solutions.'
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    ref={(el) => (cardRefs.current[index] = el)}
                                    className="group relative flex gap-6 justify-center w-full items-start bg-white rounded-xl p-8 
                                    transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(255,81,47,0.15)] 
                                    border border-[#FF512F]/10 hover:border-[#FF512F]/30
                                    before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#FF512F]/5 before:to-[#FF8A63]/5 before:opacity-0 
                                    before:transition-opacity before:duration-500 group-hover:before:opacity-100 overflow-hidden">
                                    {/* Enhanced gradient background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/80 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                                    {/* Enhanced mesh pattern */}
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F05 1px,transparent 1px),linear-gradient(-45deg,#FF8A6305 1px,transparent 1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                                    <div className="relative flex flex-col md:flex-row lg:flex-row justify-center items-center gap-6">
                                        {/* Enhanced icon container */}
                                        <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-500">
                                            <div
                                                className="p-4 rounded-xl bg-gradient-to-br from-white to-[#FFF8F6] shadow-[0_10px_30px_-10px_rgba(255,81,47,0.2)] 
                                            border border-[#FF512F]/10 group-hover:border-[#FF512F]/30 transition-all duration-500">
                                                <Image src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                                            </div>
                                        </div>

                                        {/* Enhanced content */}
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-xl md:text-2xl font-medium bg-gradient-to-r from-[#374151] to-[#374151] group-hover:from-[#FF512F] group-hover:to-[#FF8A63] bg-clip-text text-transparent transition-all duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 group-hover:text-[#374151] transition-colors duration-300">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Enhanced CTA button */}
                        <div className="flex justify-center mt-12">
                            <button
                                className="relative group inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-lg 
                            bg-gradient-to-r from-[#FF512F] to-[#FF8A63] shadow-[0_10px_30px_-10px_rgba(255,81,47,0.3)]
                            hover:shadow-[0_20px_40px_-15px_rgba(255,81,47,0.4)] transition-all duration-500">
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF8A63] to-[#FF512F] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff20 1px,transparent 1px),linear-gradient(-45deg,#ffffff20 1px,transparent 1px)] bg-[size:10px_10px]"></div>
                                <span className="relative flex items-center text-lg font-semibold text-white tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                                    Start Your AI Transformation
                                    <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </button>
                        </div>
                    </section>

                    <section className="py-[100px] text-[#374151] bg-gradient-to-br from-[#FFF8F6] via-white to-[#FFF4F0] relative overflow-hidden">
                        {/* Floating Elements */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#FF512F]/5 to-[#FF8A63]/5 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#FF8A63]/5 to-[#FF512F]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        </div>

                        <div className="container mx-auto px-6 relative">
                            <header className="flex flex-col max-w-7xl items-center mx-auto text-center mb-16 md:mb-20 gap-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="relative inline-flex items-center px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#FF512F]/20 shadow-[0_0_15px_-3px_rgba(255,81,47,0.1)]">
                                    <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                                        Core Features
                                    </span>
                                </motion.div>
                                <h1 className="text-4xl md:text-[48px] lg:text-[44px] font-bold leading-[120%] text-[#374151]">
                                    Key Capabilities of the{' '}
                                    <span className="relative inline-block group">
                                        <span className="relative z-10 bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent">ReKnew</span>
                                        <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path
                                                d="M0 5c30-6 70-5 100 0"
                                                stroke="#FF512F"
                                                strokeWidth="2"
                                                fill="none"
                                                className="transition-all duration-300"
                                            />
                                        </svg>
                                        {/* <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#FF512F]/10 rounded-full transform origin-left transition-all duration-300 group-hover:scale-x-110"></span> */}
                                    </span>{' '}
                                    Platform
                                </h1>
                                <p className="text-lg md:text-xl lg:text-xl text-gray-600 font-medium leading-[150%] max-w-4xl">
                                    Our platform brings together AI, automation, and data intelligence to create a seamless digital transformation experience
                                </p>
                            </header>

                            <main className="max-w-6xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                    {aiSolutions.slice(0, 3).map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="group relative  flex-col gap-6 p-8 rounded-2xl bg-white/90 backdrop-blur-sm
                                                hover:bg-white shadow-[0_0_30px_-10px_rgba(255,81,47,0.1)] hover:shadow-[0_0_50px_-12px_rgba(255,81,47,0.25)]
                                                transition-all duration-500 border border-[#FF512F]/10 hover:border-[#FF512F]/30 flex justify-center items-center"
                                        >
                                            {/* ...existing card content... */}
                                            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#FF512F]/5 to-[#FF8A63]/5 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-700"></div>
                                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tl from-[#FF8A63]/3 to-transparent rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-700"></div>

                                            <div className="relative">
                                                {/* Enhanced title container */}
                                                <div className="flex flex-col gap-2 mb-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="relative">
                                                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/20 to-[#FF8A63]/20 rounded-xl blur-xl transform scale-125"></div>
                                                            <span className="relative flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 flex items-center justify-center">
                                                                {item.icon && <item.icon className="w-7 h-7 text-[#FF512F]" />}
                                                            </span>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h2 className="text-2xl md:text-[28px] font-bold bg-gradient-to-r from-[#374151] to-[#374151] bg-clip-text text-transparent">
                                                                {item.title}
                                                            </h2>
                                                        </div>
                                                    </div>

                                                    {/* Enhanced description container */}
                                                    <div className="relative mt-2">
                                                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#FF512F]/20 to-[#FF8A63]/20 rounded-full"></div>
                                                        <div className="relative pl-6">
                                                            {/* <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-[#FF512F]/20 to-[#FF8A63]/20"></div> */}
                                                            <p className="text-[17px] leading-relaxed text-[#4B5563] font-medium">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Rest of the features list */}
                                                <ul className="space-y-4">
                                                    {item.features.map((feature, idx) => (
                                                        <motion.li
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.1 + idx * 0.1 }}
                                                            viewport={{ once: true }}
                                                            key={idx}
                                                            className="flex items-start space-x-3 group/item">
                                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                                                                {idx === 0 ? (
                                                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF512F]" />
                                                                ) : idx === 1 ? (
                                                                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF512F]" />
                                                                ) : (
                                                                    <Zap className="w-3.5 h-3.5 text-[#FF512F]" />
                                                                )}
                                                            </span>
                                                            <span className="text-[#4B5563] group-hover:text-[#374151] transition-colors duration-300">
                                                                {feature}
                                                            </span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8">
                                    {aiSolutions.slice(3).map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="group relative flex flex-col gap-6 p-8 rounded-2xl bg-white/90 backdrop-blur-sm
                                                hover:bg-white shadow-[0_0_30px_-10px_rgba(255,81,47,0.1)] hover:shadow-[0_0_50px_-12px_rgba(255,81,47,0.25)]
                                                transition-all duration-500 border border-[#FF512F]/10 hover:border-[#FF512F]/30  justify-center items-center"
                                        >
                                            {/* ...existing card content... */}

                                            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#FF512F]/5 to-[#FF8A63]/5 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-700"></div>
                                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tl from-[#FF8A63]/3 to-transparent rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-700"></div>

                                            <div className="relative">
                                                {/* Enhanced title container */}
                                                <div className="flex flex-col gap-2 mb-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="relative">
                                                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/20 to-[#FF8A63]/20 rounded-xl blur-xl transform scale-125"></div>
                                                            <span className="relative flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 flex items-center justify-center">
                                                                {item.icon && <item.icon className="w-7 h-7 text-[#FF512F]" />}
                                                            </span>
                                                        </div>
                                                        <div className="flex-1">
                                                            <h2 className="text-2xl md:text-[28px] font-bold bg-gradient-to-r from-[#374151] to-[#374151] bg-clip-text text-transparent">
                                                                {item.title}
                                                            </h2>
                                                        </div>
                                                    </div>

                                                    {/* Enhanced description container */}
                                                    <div className="relative mt-2">
                                                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#FF512F]/20 to-[#FF8A63]/20 rounded-full"></div>
                                                        <div className="relative pl-6">
                                                            {/* <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-[#FF512F]/20 to-[#FF8A63]/20"></div> */}
                                                            <p className="text-[17px] leading-relaxed text-[#4B5563] font-medium">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Rest of the features list */}
                                                <ul className="space-y-4">
                                                    {item.features.map((feature, idx) => (
                                                        <motion.li
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.1 + idx * 0.1 }}
                                                            viewport={{ once: true }}
                                                            key={idx}
                                                            className="flex items-start space-x-3 group/item">
                                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                                                                {idx === 0 ? (
                                                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF512F]" />
                                                                ) : idx === 1 ? (
                                                                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF512F]" />
                                                                ) : (
                                                                    <Zap className="w-3.5 h-3.5 text-[#FF512F]" />
                                                                )}
                                                            </span>
                                                            <span className="text-[#4B5563] group-hover:text-[#374151] transition-colors duration-300">
                                                                {feature}
                                                            </span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Enhanced CTA button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="flex justify-center mt-16">
                                    <button className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl overflow-hidden bg-gradient-to-r from-[#FF512F] to-[#FF8A63] hover:from-[#FF8A63] hover:to-[#FF512F] transition-all duration-500">
                                        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff20_1px,transparent_1px),linear-gradient(-45deg,#ffffff20_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                                        <span className="relative flex items-center text-lg font-semibold text-white tracking-wide">
                                            Explore AI Solutions
                                            <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                                        </span>
                                    </button>
                                </motion.div>
                            </main>
                        </div>
                    </section>

                    <section className="py-24 text-[#374151] bg-gradient-to-br from-[#f8faff] via-[#fff8f8] to-[#fff4f8] relative overflow-hidden">
                        {/* Enhanced Background Pattern with Dynamic Elements */}
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F03 1px,transparent 1px),linear-gradient(-45deg,#FF8A6303 1px,transparent 1px)] bg-[size:30px_30px] opacity-70"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50"></div>
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{
                                    scale: [0.8, 1.2, 0.8],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                                className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-[#FF8A63]/5 rounded-full blur-3xl"
                            />
                            <motion.div
                                initial={{ scale: 1, opacity: 0 }}
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.2, 0.4, 0.2]
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 1
                                }}
                                className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#FF512F]/5 to-purple-500/5 rounded-full blur-3xl"
                            />
                        </div>

                        <div className="container mx-auto px-6 relative">
                            <header className="flex flex-col max-w-7xl items-center mx-auto text-center mb-20 gap-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="relative inline-flex items-center px-6 py-2 rounded-full bg-white/90 backdrop-blur-md border border-[#FF512F]/20 shadow-[0_0_15px_-3px_rgba(255,81,47,0.1)] hover:shadow-[0_0_20px_-3px_rgba(255,81,47,0.2)] transition-all duration-300">
                                    <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                                        Integration Ready
                                    </span>
                                </motion.div>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="text-4xl md:text-[48px] lg:text-[44px] font-bold leading-[120%] text-[#374151]">
                                    Seamless Integration with{' '}
                                    <span className="relative inline-block group">
                                        <span className="relative z-10 bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent">
                                            Leading Technologies
                                        </span>
                                        <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path
                                                d="M0 5c30-6 70-5 100 0"
                                                stroke="#FF512F"
                                                strokeWidth="2"
                                                fill="none"
                                                className="transition-all duration-300"
                                            />
                                        </svg>
                                        {/* <motion.span 
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5, duration: 0.5 }}
                                            className="absolute bottom-1 left-0 w-full h-[6px] bg-[#FF512F]/10 rounded-full origin-left"
                                        /> */}
                                    </span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="text-lg md:text-xl lg:text-2xl text-gray-600 font-medium leading-[150%] max-w-4xl">
                                    The ReKnew platform is designed to integrate seamlessly with your existing business ecosystem
                                </motion.p>
                            </header>

                            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative flex justify-center items-center group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 rounded-2xl blur-2xl transform group-hover:scale-110 transition-transform duration-500"></div>
                                    <Image
                                        src={DigitalEarth}
                                        alt="Digital technology integration visualization"
                                        className="relative rounded-2xl md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500 shadow-lg"
                                    />
                                </motion.div>

                                <div className="flex flex-col space-y-8">
                                    {categories.map((category, index) => (
                                        <motion.div
                                           
                                            key={index}
                                            className="group border-b border-gray-200 pb-3 transition-all duration-300 hover:border-[#FF512F]/30">
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                                                <h3 className="text-xl md:text-xl font-semibold bg-gradient-to-r from-[#374151] to-[#374151] group-hover:from-[#FF512F] group-hover:to-[#FF8A63] bg-clip-text text-transparent transition-colors duration-300">
                                                    {category.title}
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {category.items.map((item, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="py-2 px-4 rounded-lg bg-white/80 backdrop-blur-sm text-[#4B5563] text-sm md:text-base
                                                            border border-[#FF512F]/10 group-hover:border-[#FF512F]/30
                                                            shadow-[0_2px_10px_-3px_rgba(255,81,47,0.1)]
                                                            transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#FF512F]/5 hover:to-[#FF8A63]/5">
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}

                                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6">
                                        <button className="relative group inline-flex items-center justify-center px-8 py-4 rounded-xl overflow-hidden bg-gradient-to-r from-[#FF512F] to-[#FF8A63] hover:from-[#FF8A63] hover:to-[#FF512F] transition-all duration-500 shadow-lg hover:shadow-xl">
                                            <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff20_1px,transparent_1px),linear-gradient(-45deg,#ffffff20_1px,transparent_1px)] bg-[size:10px_10px]"></div>
                                            <span className="relative flex items-center text-lg font-semibold text-white tracking-wide">
                                                Talk to an Expert
                                                <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                                            </span>
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-[100px] text-[#374151] relative overflow-hidden">
                        {/* Enhanced floating elements */}
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F05 1px,transparent 1px),linear-gradient(-45deg,#FF8A6305 1px,transparent 1px)] bg-[size:20px_20px] opacity-70"></div>
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.2, 0.4, 0.2]
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                }}
                                className="absolute -top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#FF512F]/5 to-[#FF8A63]/5 rounded-full blur-3xl"
                            />
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.1, 0.3, 0.1]
                                }}
                                transition={{
                                    duration: 12,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 1
                                }}
                                className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF8A63]/5 to-[#FF512F]/5 rounded-full blur-3xl"
                            />
                        </div>

                        <div className="container mx-auto px-6 relative">
                            <header className="flex flex-col max-w-7xl items-center mx-auto text-center mb-20 gap-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="relative inline-flex items-center px-6 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-[#FF512F]/20 shadow-[0_0_15px_-3px_rgba(255,81,47,0.1)]">
                                    <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                                        Future-Ready Solutions
                                    </span>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 animate-pulse"></div>
                                </motion.div>

                                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
                                    <h1 className="text-4xl md:text-[48px] lg:text-[56px] font-bold leading-[1.1] text-[#374151]">
                                        Future-Proof your{' '}
                                        <span className="relative inline-block">
                                            <span className="relative z-10 bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent">
                                                Business
                                            </span>
                                            <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                                <path
                                                    d="M0 5c30-6 70-5 100 0"
                                                    stroke="#FF512F"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    className="transition-all duration-300"
                                                />
                                            </svg>
                                            {/* <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                                <motion.path
                                                    initial={{ pathLength: 0 }}
                                                    whileInView={{ pathLength: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                    d="M0,2 Q40,7 80,2 T160,2"
                                                    stroke="url(#gradient)"
                                                    strokeWidth="4"
                                                    fill="none"
                                                />
                                                <defs>
                                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#FF512F" stopOpacity="0.2" />
                                                        <stop offset="100%" stopColor="#FF8A63" stopOpacity="0.2" />
                                                    </linearGradient>
                                                </defs>
                                            </svg> */}
                                        </span>{' '}
                                        with AI
                                    </h1>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="text-lg md:text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed max-w-4xl">
                                    The ReKnew Platform is scalable, secure, and future-ready—helping enterprises evolve in an AI-driven world
                                </motion.p>
                            </header>

                            <div className="max-w-6xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {[
                                        {
                                            icon: (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-8 h-8"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="url(#icon-gradient)"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M2 20h20" />
                                                    <path d="M5 17l4-8 4 3 4-10 2 15" />
                                                </svg>
                                            ),
                                            title: 'Built for Growth',
                                            text: 'Our modular architecture ensures that you can scale AI adoption at your own pace, adapting to your evolving business needs.',
                                            gradient: 'from-[#FF512F]/80 to-[#FF8A63]/80'
                                        },
                                        {
                                            icon: (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-8 h-8"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="url(#icon-gradient)"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="5" />
                                                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                                </svg>
                                            ),
                                            title: 'Powered by Innovation',
                                            text: 'We continuously integrate the latest advancements in AI, machine learning, and automation to keep you ahead of the curve.',
                                            gradient: 'from-[#FF8A63]/80 to-[#FF512F]/80'
                                        },
                                        {
                                            icon: (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-8 h-8"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="url(#icon-gradient)"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round">
                                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                                </svg>
                                            ),
                                            title: 'Secure & Compliant',
                                            text: 'Enterprise-grade security and industry-standard compliance protocols ensure your data stays protected at all times.',
                                            gradient: 'from-[#FF512F]/80 to-[#FF8A63]/80'
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 }}
                                            key={index}
                                            className="group relative bg-white rounded-2xl transition-all duration-500 overflow-hidden">
                                            {/* Gradient definitions for icons */}
                                            <svg width="0" height="0">
                                                <defs>
                                                    <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#FF512F" />
                                                        <stop offset="100%" stopColor="#FF8A63" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                            <div
                                                className="relative p-8 bg-gradient-to-br from-white to-white/50 backdrop-blur-sm 
                                                border border-[#FF512F]/10 rounded-2xl transition-all duration-500 
                                                group-hover:border-[#FF512F]/30 group-hover:shadow-[0_20px_50px_-15px_rgba(255,81,47,0.15)]">
                                                <motion.div
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    whileInView={{ scale: 1, opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.2 + 0.3 }}
                                                    className="flex flex-col gap-6">
                                                    {/* Enhanced icon container with centered positioning */}
                                                    <div className="relative w-full flex justify-center mb-6">
                                                        <div className="relative w-20 h-20">
                                                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
                                                            <div className="relative flex items-center justify-center w-full h-full rounded-2xl bg-white shadow-[0_8px_20px_-6px_rgba(255,81,47,0.2)] border border-[#FF512F]/10 group-hover:border-[#FF512F]/30 transition-all duration-500">
                                                                <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                                                    {item.icon}
                                                                </div>
                                                            </div>
                                                            {/* Decorative dots */}
                                                            <div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-gradient-to-r from-[#FF512F] to-[#FF8A63] opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                            <div className="absolute -left-1 -bottom-1 w-2 h-2 rounded-full bg-gradient-to-r from-[#FF8A63] to-[#FF512F] opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                        </div>
                                                    </div>

                                                    <div className="text-center space-y-4">
                                                        <h4
                                                            className="text-2xl font-bold bg-gradient-to-r from-[#374151] to-[#374151] 
                                                            group-hover:from-[#FF512F] group-hover:to-[#FF8A63] 
                                                            bg-clip-text text-transparent transition-all duration-300">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-lg text-gray-600 leading-relaxed">{item.text}</p>
                                                    </div>

                                                    {/* Enhanced decorative elements */}
                                                    <div
                                                        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF512F]/20 to-transparent 
                                                        transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Enhanced CTA button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="flex justify-center mt-16">
                                <button
                                    className="group relative inline-flex items-center justify-center px-8 py-4 
                                    overflow-hidden rounded-xl bg-gradient-to-r from-[#FF512F] to-[#FF8A63] 
                                    shadow-[0_10px_30px_-10px_rgba(255,81,47,0.3)]
                                    hover:shadow-[0_20px_40px_-15px_rgba(255,81,47,0.4)] transition-all duration-500">
                                    <div
                                        className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF8A63] to-[#FF512F] 
                                        opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                    <div
                                        className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff20 1px,transparent 1px),
                                        linear-gradient(-45deg,#ffffff20 1px,transparent 1px)] bg-[size:10px_10px]"></div>
                                    <span
                                        className="relative flex items-center text-lg font-semibold text-white tracking-wide 
                                        group-hover:translate-x-1 transition-transform duration-300">
                                        Start Your AI Journey
                                        <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </button>
                            </motion.div>
                        </div>
                    </section>

                    <div className="py-[100px]">
                        <Consultation
                            title={gradientText}
                            tag_one="Ready to unlock AI-powered efficiency for your enterprise? Connect with us today to explore how the ReKnew Platform can revolutionize your business."
                            btn_name="Schedule a Free Consultation"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReKnewPlatform;
