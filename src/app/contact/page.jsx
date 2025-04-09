'use client';
import React, { useEffect } from 'react';
import { MapPin, Mail, Phone, ChevronRight, CheckCircle2 } from 'lucide-react';
import Consultation from '../../components/Consultation';
import Section from '../../components/Section';
import { motion, useScroll, useSpring } from 'framer-motion';
import color from '../../../public/assets/logo-left-2.webp';
import Image from 'next/image';

const ContectUs = () => {
    
    useEffect(() => {
        document.title = 'Contect Us | ReKnew';
    }, []);
    const gradientText = (
        <div className="text-[#232323]">
            Let’s Transform Your <span className="text-highlight pr-2">Business</span>with AI
        </div>
    );
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const handleGetStarted = () => {
        console.log('Get Started clicked');
    };

    const handleLearnMore = () => {
        console.log('Learn More clicked');
    };

    return (
        <>
            <div className="text-[#232323] font-sans w-full min-h-screen overflow-x-hidden">
                {/* <Section 
                rotatingWords={['Partner', 'Collaborate', 'Connect']}
                headingStart="With Us to"
                headingEnd="Reimagine Hiring"
                description="Ready to explore ethical AI hiring? Reach out—we’d love to talk about your goals and how we can help."
                primaryButton={{
                    text: "Get Started",
                    onClick: () => handleGetStarted()
                }}
                secondaryButton={{
                    text: "Learn More",
                    onClick: () => handleLearnMore()
                }}
            /> */}

                <section className="w-full relative text-[#374151] min-h-screen body65 md:h-[760px] h-[550px] flex justify-center text-center p-0 m-0 overflow-hidden">
                    <Image
                        src={color}
                        alt="color-sharp"
                        className="absolute w-[200px] top-36 md:top-60 right-0 lg:w-[350px] lg:top-20 lg:right-40"
                        style={{ zIndex: 1 }}
                    />
                    <div className="flex flex-col items-center justify-center w-[1280px] gap-9">
                        <Section
                            rotatingWords={['Partner', 'Collaborate', 'Connect']}
                            headingStart="With Us to"
                            headingEnd="Reimagine Hiring"
                            description="Ready to explore ethical AI hiring? Reach out—we’d love to talk about your goals and how we can help."
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

                <div className="relative bg-gradient-to-b from-[#FFF8F6] to-white py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                Let's Build the
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-[#FF512F] px-2">Future</span>
                                    <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5c30-5 70-5 100 0" stroke="#FF512F" strokeWidth="2" fill="none" className="transition-all duration-300" />
                                    </svg>
                                </span>
                                Together
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">Connect with ReKnew's AI experts to transform your business vision into reality</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#FFF8F6] via-white to-[#FFF4F0] relative">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F08 1px,transparent 1px),linear-gradient(-45deg,#FF8A6308 1px,transparent 1px)] bg-[size:40px_40px]"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50"></div>
                    </div>

                    <section className="relative w-full bg-gradient-to-br from-white/80 via-white/90 to-white/80 backdrop-blur-sm py-[50px] lg:py-[100px]">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#FF512F]/5 to-[#FF8A63]/5 rounded-full blur-3xl" />
                            <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF8A63]/5 to-[#FF512F]/5 rounded-full blur-3xl" />
                        </div>

                        <div className="container mx-auto px-6">
                            <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-[52px] items-center">
                                <div className="flex flex-col w-full md:w-1/2 gap-8">
                                    <div className="flex flex-col gap-4">
                                        <div
                                            className="relative inline-flex items-center px-6 py-2 w-fit rounded-full 
                                            bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 border border-[#FF512F]/20
                                            shadow-[0_2px_10px_-3px_rgba(255,81,47,0.15)]">
                                            <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                                                Our Global Presence
                                            </span>
                                        </div>
                                        <h1 className="text-4xl md:text-[48px] lg:text-[44px] font-bold leading-[120%]">
                                            Visit Our{' '}
                                            <span className="relative inline-block group">
                                                <span className="relative z-10 bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent">
                                                    Headquarters
                                                </span>
                                                <span className="absolute bottom-2 left-0 w-full h-[6px] bg-[#FF512F]/10 rounded-full transform origin-left"></span>
                                            </span>
                                        </h1>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {[
                                            {
                                                icon: MapPin,
                                                title: 'ReKnew Global Headquarters',
                                                content: ['4030 Old Milton Parkway', 'Alpharetta, GA 30005', 'United States of America'],
                                                gradient: 'from-blue-500/10 to-[#FF8A63]/10'
                                            },
                                            {
                                                icon: Phone,
                                                title: 'Call Us Directly',
                                                content: ['+1 (678) 253-2599'],
                                                gradient: 'from-green-500/10 to-[#FF512F]/10'
                                            },
                                            {
                                                icon: Mail,
                                                title: 'Email Us',
                                                content: ['social@reknew.ai'],
                                                gradient: 'from-[#FF512F]/10 to-[#FF8A63]/10'
                                            }
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="relative flex items-start gap-4 p-6 rounded-xl bg-white 
                                                border border-[#FF512F]/10">
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF512F]/5 to-[#FF8A63]/5 rounded-xl"></div>

                                                <div className="relative flex-shrink-0">
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-xl blur-xl`}></div>
                                                    <span
                                                        className="relative flex items-center justify-center w-14 h-14 rounded-xl 
                                                        bg-white border border-[#FF512F]/20
                                                        shadow-[0_8px_20px_-6px_rgba(255,81,47,0.2)]">
                                                        <item.icon className="w-6 h-6 text-[#FF512F]" />
                                                    </span>
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                    <h3 className="text-lg font-semibold text-[#232323]">{item.title}</h3>
                                                    {item.content.map((line, i) => (
                                                        <p key={i} className="text-[#666666]">
                                                            {line}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div
                                        className="relative mt-4 p-8 rounded-2xl overflow-hidden
                                        bg-gradient-to-br from-white to-white/50 backdrop-blur-sm
                                        border border-[#FF512F]/10">
                                        <div className="absolute inset-0">
                                            <div
                                                className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F05 1px,transparent 1px),linear-gradient(-45deg,#FF8A6305 1px,transparent 1px)] 
                                                bg-[size:20px_20px]"></div>
                                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 rounded-full blur-2xl"></div>
                                        </div>

                                        <div className="relative">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5 text-[#FF512F]"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2">
                                                        <circle cx="12" cy="12" r="10" />
                                                        <polyline points="12 6 12 12 16 14" />
                                                    </svg>
                                                </span>
                                                <h3 className="text-xl font-semibold bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent">
                                                    Business Hours
                                                </h3>
                                            </div>

                                            <div className="space-y-4">
                                                {[
                                                    { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM', status: 'Open' },
                                                    { day: 'Saturday & Sunday', hours: 'Closed', status: 'Closed' }
                                                ].map((schedule, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center justify-between p-4 rounded-xl bg-white/80 
                                                            border border-[#FF512F]/10">
                                                        <div className="flex flex-col">
                                                            <span className="font-medium text-[#232323]">{schedule.day}</span>
                                                            <span className="text-sm text-[#666666]">{schedule.hours}</span>
                                                        </div>
                                                        <span
                                                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                                schedule.status === 'Open'
                                                                    ? 'bg-green-50 text-green-600 border border-green-100'
                                                                    : 'bg-red-50 text-red-600 border border-red-100'
                                                            }`}>
                                                            {schedule.status}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-4 flex items-start gap-2 text-sm text-[#666666]">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-5 h-5 text-[#FF512F] flex-shrink-0"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <line x1="12" y1="16" x2="12" y2="12" />
                                                    <line x1="12" y1="8" x2="12.01" y2="8" />
                                                </svg>
                                                <p>Holiday schedules may vary. Please contact us for specific holiday hours.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative w-full md:w-1/2 rounded-2xl overflow-hidden h-[750px]">
                                    <div className="relative h-full justify-center items-center flex flex-col">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.089661800831!2d-84.2924891!3d34.0492566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f57504a7749b71%3A0x42d6525d17aad619!2s4030%20Old%20Milton%20Pkwy%2C%20Alpharetta%2C%20GA%2030005!5e0!3m2!1sen!2sus!4v1709697547975!5m2!1sen!2sus"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Office Location"
                                            className="w-full mt-12 h-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="w-full py-[50px] lg:py-[100px] flex justify-center items-center bg-gradient-to-br from-white/80 via-white/90 to-white/80 backdrop-blur-sm relative">
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F05 1px,transparent 1px),linear-gradient(-45deg,#FF8A6305 1px,transparent 1px)] bg-[size:20px_20px]"></div>
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FF512F]/5 to-[#FF8A63]/5 rounded-full blur-3xl"></div>
                        </div>

                        <div className="flex flex-col lg:flex-row w-[360px] md:w-[730px] lg:w-[950px] xl:w-[1280px] gap-[52px] relative">
                            <div className="flex flex-col gap-8 text-left max-w-xl">
                                <div className="flex flex-col gap-6">
                                    <div
                                        className="relative inline-flex items-center px-6 py-2 w-fit rounded-full 
                                        bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 border border-[#FF512F]/20
                                        shadow-[0_2px_10px_-3px_rgba(255,81,47,0.15)]">
                                        <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                                            AI Transformation Partner
                                        </span>
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="font-bold text-2xl md:text-3xl lg:text-[44px] leading-[120%] text-[#232323]">
                                            Revolutionize Your
                                            <br className="hidden md:block" />
                                            <span className="relative inline-block mt-2 group">
                                                <span className="relative z-10 bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent">
                                                    Business with AI
                                                </span>
                                                <span className="absolute bottom-2 left-0 w-full h-[6px] bg-[#FF512F]/10 rounded-full transform origin-left"></span>
                                            </span>
                                        </h2>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <p className="text-lg leading-[160%] text-[#666666]">
                                        Join industry leaders who have achieved transformative results with our enterprise AI solutions. Experience the power
                                        of:
                                    </p>

                                    <div className="space-y-4">
                                        {[
                                            {
                                                title: 'Intelligent Automation',
                                                desc: 'Reduce operational costs by up to 40%'
                                            },
                                            {
                                                title: 'Data-Driven Insights',
                                                desc: 'Make informed decisions with 99% accuracy'
                                            },
                                            {
                                                title: 'Seamless Integration',
                                                desc: 'Deploy AI solutions in weeks, not months'
                                            }
                                        ].map((benefit, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <span
                                                    className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 
                                                    flex items-center justify-center">
                                                    <CheckCircle2 className="w-4 h-4 text-[#FF512F]" />
                                                </span>
                                                <div className="space-y-1">
                                                    <span className="block font-semibold text-[#232323]">{benefit.title}</span>
                                                    <span className="text-[#666666] text-sm">{benefit.desc}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex flex-col relative w-[330px] md:w-[600px] lg:w-[761px] p-8 rounded-2xl
                                    bg-white/80 backdrop-blur-sm border border-[#FF512F]/10">
                                <div className="flex flex-col gap-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                className="w-full p-4 bg-white/50 text-[#232323] rounded-xl
                                                    border border-[#FF512F]/10
                                                    focus:border-[#FF512F]/50 focus:ring-[#FF512F]/30 focus:ring-2
                                                    outline-none"
                                            />
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                className="w-full p-4 bg-white/50 text-[#232323] rounded-xl
                                                    border border-[#FF512F]/10
                                                    focus:border-[#FF512F]/50 focus:ring-[#FF512F]/30 focus:ring-2
                                                    outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="Your Phone (optional)"
                                            className="w-full p-4 bg-white/50 text-[#232323] rounded-xl
                                                border border-[#FF512F]/10
                                                focus:border-[#FF512F]/50 focus:ring-[#FF512F]/30 focus:ring-2
                                                outline-none"
                                        />
                                    </div>

                                    <div className="relative">
                                        <textarea
                                            name="message"
                                            placeholder="Tell us about your project"
                                            rows={5}
                                            className="w-full p-4 bg-white/50 text-[#232323] rounded-xl
                                                border border-[#FF512F]/10
                                                focus:border-[#FF512F]/50 focus:ring-[#FF512F]/30 focus:ring-2
                                                outline-none resize-none"></textarea>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                                    <button
                                        className="relative w-full md:w-auto inline-flex items-center justify-center px-8 py-4 
                                        overflow-hidden rounded-xl bg-gradient-to-r from-[#FF512F] to-[#FF8A63] 
                                        shadow-[0_10px_30px_-10px_rgba(255,81,47,0.3)]">
                                        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff20 1px,transparent 1px),linear-gradient(-45deg,#ffffff20 1px,transparent 1px)] bg-[size:10px_10px]"></div>
                                        <span className="relative flex items-center text-lg font-semibold text-white">
                                            Send Message
                                            <ChevronRight className="ml-2 w-5 h-5" />
                                        </span>
                                    </button>

                                    <p className="text-sm text-[#666666] flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF512F] to-[#FF8A63]"></span>
                                        Your data is safe with us
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-[100px]">
                        <Consultation
                            title={gradientText}
                            tag_one="Our team is ready to help you leverage AI for efficiency, intelligence, and growth."
                            btn_name="Schedule a Consultation"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContectUs;
