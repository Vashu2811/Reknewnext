'use client';
import { useEffect, useRef } from 'react';
import { Brain, Send, Shield, Zap, Database, Cloud, Factory, Settings, FileCode, Users, Rocket, RefreshCw, Briefcase } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const YourComponent = () => {
    const cardsRef = useRef([]);
    const titleRef = useRef(null);
    const textRef = useRef(null);

    const outcomes = [
        {
            title: 'Speed',
            icon: <Zap className="w-6 h-6 text-[#FF512F]" />,
            description: 'Faster time to insight, reduced cycle time in process execution, business agility, accelerated application development'
        },
        {
            title: 'Scale',
            icon: <Send className="w-6 h-6 text-[#FF512F]" />,
            description: 'Cloud infrastructure optimized for data and AI workloads, increased productivity, greater ROI'
        },
        {
            title: 'Sophistication',
            icon: <Brain className="w-6 h-6 text-[#FF512F]" />,
            description: 'Modern architectures and techniques driving new business outcomes, enabling future growth'
        },
        {
            title: 'Safety',
            icon: <Shield className="w-6 h-6 text-[#FF512F]" />,
            description: 'Safety by design with automation, stronger controls, and traceability'
        }
    ];

    const enablementItems = [
        {
            title: 'Data, AI & Technology Strategy',
            icon: <Database className="w-5 h-5 text-[#FF512F]" />
        },
        {
            title: 'Capability Buildout',
            icon: <Cloud className="w-5 h-5 text-[#FF512F]" />
        },
        {
            title: 'Use Case Delivery',
            icon: <Factory className="w-5 h-5 text-[#FF512F]" />
        },
        {
            title: 'Process Re-design',
            icon: <Settings className="w-5 h-5 text-[#FF512F]" />
        },
        {
            title: 'Governance & Oversight Design',
            icon: <Shield className="w-5 h-5 text-[#FF512F]" />
        },
        {
            title: 'Data, AI & Technology Architecture Blueprint',
            icon: <FileCode className="w-5 h-5 text-[#FF512F]" />
        },
        {
            title: 'Talent Buildout / Augmentation',
            icon: <Users className="w-5 h-5 text-[#FF512F]" />
        },
        {
            title: 'Acceleration with Starter Packs',
            icon: <Rocket className="w-5 h-5 text-[#FF512F]" />
        },
        {
            title: 'Change Management',
            icon: <RefreshCw className="w-5 h-5 text-[#FF512F]" />
        },
        {
            title: 'Workforce Optimization',
            icon: <Briefcase className="w-5 h-5 text-[#FF512F]" />
        }
    ];

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 40, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );

        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );

        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }, []);

    return (
        <>
            <div className="relative min-h-screen py-24 lg:py-32 overflow-hidden bg-[radial-gradient(circle_at_top_right,#FFF8F6,transparent_70%),radial-gradient(circle_at_bottom_left,#FFF4F0,white_70%)]">
                {/* Enhanced gradient mesh background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(60deg,#FF512F05_1px,transparent_1px),linear-gradient(-60deg,#FF8A6305_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
                    <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,white,#FFF8F6,#FFF4F0,white)] opacity-40 mix-blend-overlay"></div>
                </div>

                <div className="relative container mx-auto px-4 z-10">
                    {/* Enhanced header section */}
                    <motion.div className="text-center mb-24">
                        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
                            <motion.span className="relative inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#FF512F]/5 via-[#FF6E4A]/8 to-[#FF8A63]/5 [box-shadow:inset_0_0_20px_rgba(255,81,47,0.1)] backdrop-blur-sm">
                                <span className="bg-gradient-to-r from-[#FF512F] via-[#FF6E4A] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                                    What outcomes we enable
                                </span>
                            </motion.span>
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                                The{' '}
                                <span className="relative inline-block group">
                                    <span className="bg-[linear-gradient(90deg,#FF512F,#FF6E4A,#FF8A63)] bg-clip-text text-transparent bg-[length:200%_100%] group-hover:bg-[length:100%_100%] transition-all duration-500">
                                        4S Outcomes
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
                                    {/* <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#FF512F] via-[#FF6E4A] to-[#FF8A63] opacity-80 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span> */}
                                </span>{' '}
                                Framework
                            </h1>
                        </div>
                    </motion.div>

                    {/* Enhanced outcome cards with improved hover */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                        {outcomes.map((outcome, index) => (
                            <motion.div
                                key={index}
                                className="group relative p-8 bg-white/80 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-[#FF512F]/20 hover:border-[#FF512F]/10"
                                style={{
                                    backgroundImage: `
                                    linear-gradient(rgba(255,81,47,0.03) 1.5px, transparent 1.5px),
                                    linear-gradient(90deg, rgba(255,81,47,0.03) 1.5px, transparent 1.5px)
                                `,
                                    backgroundSize: '20px 20px'
                                }}>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/40 via-transparent to-[#FF512F]/5"></div>
                                <div className="absolute -inset-px rounded-2xl group-hover:shadow-[inset_0_0_20px_rgba(255,81,47,0.1)] transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="relative p-3 rounded-xl bg-[#FF512F]/5 group-hover:bg-gradient-to-br group-hover:from-[#FF512F]/10 group-hover:to-[#FF8A63]/10 transition-all duration-500">
                                            {outcome.icon}
                                        </div>
                                        <h3 className="text-2xl font-semibold text-[#374151] group-hover:text-[#FF512F] transition-colors duration-300">
                                            {outcome.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                                        {outcome.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Enhanced capabilities section */}
                    <motion.div
                        className="relative bg-white/90 rounded-3xl p-12 lg:p-16 overflow-hidden"
                        style={{
                            boxShadow: '0 0 60px -12px rgba(255,81,47,0.12)'
                        }}>
                        {/* Enhanced background pattern */}
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F05_1px,transparent_1px),linear-gradient(-45deg,#FF8A6305_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/80"></div>
                        </div>

                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center max-w-3xl mx-auto mb-16">
                                <span className="inline-block px-4 py-1.5 mb-4 rounded-full text-sm font-medium bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 text-[#FF512F]">
                                    How we enable them
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#374151] mb-4">Strategy, Capabilities & Delivery</h3>
                                <p className="text-gray-600 text-lg">Comprehensive solutions to transform and modernize your enterprise</p>
                            </motion.div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {enablementItems.map((item, index) => (
                                    <motion.div
                                        key={item.title}
                                        
                                        className="group relative bg-gradient-to-b from-white to-white/90 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-[0_8px_30px_rgba(255,81,47,0.12)] transition-all duration-500 hover:-translate-y-1 border border-[#FF512F]/20"
                                        style={{
                                            backgroundImage: `
                                            linear-gradient(rgba(255,81,47,0.03) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(255,81,47,0.03) 1px, transparent 1px)
                                        `,
                                            backgroundSize: '16px 16px'
                                        }}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-white/80 opacity-90 group-hover:opacity-50 transition-all duration-500"></div>

                                        <div className="relative flex items-center gap-3 p-6">
                                            <div className="flex-shrink-0">
                                                <div className="relative p-3 rounded-xl bg-white border border-[#FF512F]/10 shadow-sm group-hover:border-[#FF512F]/20 group-hover:shadow-md transition-all duration-300">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/5 to-[#FF8A63]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                                    <div className="relative z-10">{item.icon}</div>
                                                </div>
                                            </div>
                                            <span className="text-[15px] font-medium text-gray-600 group-hover:text-[#374151] transition-colors duration-300">
                                                {item.title}
                                            </span>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF512F]/40 to-[#FF8A63]/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default YourComponent;
