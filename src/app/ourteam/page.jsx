// pages/index.js
'use client';
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Image from 'next/image';
import CardList from '../../components/Foundation';
import Consultation from '../../components/Consultation';
import { motion, useScroll, useSpring } from 'framer-motion';
import YourComponent from '../../components/Outcoms';
import ScrollToBottomButton from '../../components/scrollBottom';
import Section from '../../components/Section';

 export default function MyHome() {
    useEffect(() => {
        // Set basic document title
        document.title = 'ReKnew - AI-Powered Enterprise Transformation & Intelligent Automation';
        
        // Set meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Transform your enterprise with ReKnew\'s AI-powered solutions. We help businesses reduce inefficiencies, automate workflows, and unlock growth opportunities through intelligent automation and data-driven insights.');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = 'Transform your enterprise with ReKnew\'s AI-powered solutions. We help businesses reduce inefficiencies, automate workflows, and unlock growth opportunities through intelligent automation and data-driven insights.';
            document.head.appendChild(meta);
        }

        // Set keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'AI enterprise transformation, intelligent automation, business process optimization, workflow automation, AI-powered solutions, enterprise AI, digital transformation, business efficiency, ReKnew AI');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'keywords';
            meta.content = 'AI enterprise transformation, intelligent automation, business process optimization, workflow automation, AI-powered solutions, enterprise AI, digital transformation, business efficiency, ReKnew AI';
            document.head.appendChild(meta);
        }

        // Set Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', 'ReKnew - AI-Powered Enterprise Transformation & Intelligent Automation');
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:title');
            meta.content = 'ReKnew - AI-Powered Enterprise Transformation & Intelligent Automation';
            document.head.appendChild(meta);
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', 'Reimagine, revitalize, and reinvent how your business operates. ReKnew helps enterprises reduce inefficiencies, automate workflows, and unlock growth through AI-powered transformation.');
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:description');
            meta.content = 'Reimagine, revitalize, and reinvent how your business operates. ReKnew helps enterprises reduce inefficiencies, automate workflows, and unlock growth through AI-powered transformation.';
            document.head.appendChild(meta);
        }

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.setAttribute('content', 'https://reknew.ai/');
        } else {
            const meta = document.createElement('meta');
            meta.setAttribute('property', 'og:url');
            meta.content = 'https://reknew.ai/';
            document.head.appendChild(meta);
        }

        // Set canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', 'https://reknew.ai/');
        } else {
            const link = document.createElement('link');
            link.rel = 'canonical';
            link.href = 'https://reknew.ai/';
            document.head.appendChild(link);
        }
    }, []);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const handleExplore = () => {
        console.log('Explore Solutions clicked');
    };

    const handleConsultation = () => {
        console.log('Book a Consultation clicked');
    };

    return (
        <div className="font-sans text-white w-full min-h-screen bg-cover bg-center">
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF512F] to-[#FF8A63] z-50"
                    style={{ scaleX }}
                />

                <section className="w-full relative text-[#374151] min-h-screen body65 md:h-[760px] h-[550px] flex justify-center text-center p-0 m-0 overflow-hidden">
                    <Image
                        src="/assets/logo-left-2.webp"
                        alt="color-sharp"
                        width={350}
                        height={350}
                        className="absolute w-[200px] top-36 md:top-60 right-0 lg:w-[350px] lg:top-20 lg:right-40"
                        style={{ zIndex: 1 }}
                    />
                    <div className="flex flex-col items-center justify-center w-[1280px] gap-9">
                        <Section
                            rotatingWords={['Reimagine', 'Revitalize', 'Reinvent']}
                            headingStart="How Your"
                            headingEnd="Business Operates"
                            description="We help enterprises reduce inefficiencies, automate workflows, and unlock growth opportunities."
                            primaryButton={{
                                text: "Explore Solutions",
                                onClick: handleExplore
                            }}
                            secondaryButton={{
                                text: "Book a Consultation",
                                onClick: handleConsultation
                            }}
                        />
                    </div>
                    <ScrollToBottomButton />
                </section>

                <div className="text-[#374151] flex flex-col overflow-x-hidden">
                    <div className="relative py-24 lg:py-32 min-h-screen overflow-hidden bg-gradient-to-b from-white to-[#f8f9fc]">
                        <Image
                            src="/assets/small logo.webp"
                            alt="color-sharp"
                            width={250}
                            height={250}
                            className="absolute bottom-40 right-2"
                            style={{ zIndex: 1 }}
                        />
                        <div className="relative container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 z-10">
                            <div className="text-center mb-20">
                                <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
                                    <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 rounded-full text-[#FF512F] text-sm font-medium tracking-wide">
                                        Transform Your Enterprise
                                    </span>
                                    <h1 className="text-4xl md:text-[56px] font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#374151] to-[#374151]/80 max-w-3xl px-4">
                                        The{' '}
                                        <span className="relative inline-block">
                                            <span className="relative z-10 text-[#FF512F]">Next</span>
                                            <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                                <path
                                                    d="M0 5c30-5 70-5 100 0"
                                                    stroke="#FF512F"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    className="transition-all duration-300"
                                                />
                                            </svg>
                                        </span>{' '}
                                        Foundation
                                        <br className="hidden md:block" /> built on Your Foundation
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                                        Turn your foundation into an AI Backbone
                                    </p>
                                </div>
                            </div>
                            <div className="relative rounded-xl backdrop-blur-sm mt-24">
                                <CardList />
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#f4f7fc] relative">
                        <YourComponent />
                    </div>

                    <div className="relative overflow-y-hidden overflow-x-hidden">
                        <div className="bg-[#f4f7fc] flex justify-center items-center relative">
                            <div className="py-[100px]">
                                <Consultation
                                    title={
                                        <div className="text-[#374151]">
                                            Let’s <span className="text-[#FF512F]">Talk!</span>
                                        </div>
                                    }
                                    tag_one="Reimagine your business with AI-powered transformation. Get in touch with us to see how we can help your enterprise scale, optimize, and thrive."
                                    btn_name="Schedule a Free Consultation"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

