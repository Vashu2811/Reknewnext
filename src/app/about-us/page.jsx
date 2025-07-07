"use client"
import { useEffect, useMemo, useState } from 'react';
import LeadershipTeam from './AboutUsTeamSection';
import AboutUspageSlider from './AboutUspageSlider';
import HiringModel from '../../model/HiringmodelReknew';
import CareerOpportunities from './CareerOpportunities';
import Arrow from '../../../public/assets/Arrow logo.png';
import HeadquartersHeader from './HeadquartersHeader';
import ContactInformation from './ContactInformation';
import StrategicAcceleration from './StrategicAcceleration';
import LifeAtReknew from './LifeAtReknew';
import { Lightbulb } from 'lucide-react';
import Image from 'next/image';

export const generateMetadata = () => ({
  title: "About Us | ReKnew - Our Story & Leadership Team",
  description:
    "Learn about ReKnew's journey, mission, and leadership team. We bridge the gap between enterprises and AI transformation, helping organizations thrive in the digital age.",
  metadataBase: new URL("https://next-meta-seo.vercel.app"),
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | ReKnew - Our Story & Leadership Team",
    description:
      "Learn about ReKnew's journey, mission, and leadership team. We bridge the gap between enterprises and AI transformation, helping organizations thrive in the digital age.",
    url: "https://reknew.ai/about-us",
    siteName: "Health Wealth Safe",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/7b51162a-d886-4727-b920-6942b1bce177.jpg?token=h6uIKapL9RvEAZTxnfwWQiFT-B-wXH55jnK67eFe54o&height=800&width=1200&expires=33287797796",
        width: 1200,
        height: 630,
        alt: "About Health Wealth Safe",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ReKnewAI",
    title: "About Us | ReKnew - Our Story & Leadership Team",
    description:
      "Learn about ReKnew's journey, mission, and leadership team. We bridge the gap between enterprises and AI transformation, helping organizations thrive in the digital age.",
    images: [
      "https://opengraph.b-cdn.net/production/images/7b51162a-d886-4727-b920-6942b1bce177.jpg?token=h6uIKapL9RvEAZTxnfwWQiFT-B-wXH55jnK67eFe54o&height=800&width=1200&expires=33287797796",
    ],
  },
});

export default function  OurStory() {
    useEffect(() => {
        document.title = 'About-us | ReKnew';
    }, []);

    useMemo(
        () => ({
            hidden: { opacity: 0, y: 30 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: 'easeOut' }
            }
        }),
        []
    );

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

   

    return (
        <div className="text-[#374151] dark:text-gray-100 font-sans w-full min-h-screen overflow-x-hidden">
           
            
            <HiringModel isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            {/* Progress Bar - Animated scroll indicator */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF512F] to-[#FF512F] dark:from-[#FF512F] dark:to-[#FF512F] z-50" />

            {/* Hero Slider Section */}
            <AboutUspageSlider />

            {/* Our Journey Section - Company origin story */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl flex justify-center items-center flex-col mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                            The
                            <span className="relative inline-block mx-2">
                                <span className="relative z-10 text-[#FF512F]">Spark</span>
                                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5c30-5 70-5 100 0" stroke="#FF512F" strokeWidth="2" fill="none" className="transition-all duration-300" />
                                </svg>
                            </span>
                        </h2>

                        <div className="space-y-16">
                            {/* Journey Timeline */}
                            <div className="relative">
                                {/* Vertical Timeline Line */}
                                <div className="absolute left-[24px] top-2 bottom-0 w-1 bg-gradient-to-b from-[#FF512F] to-[#FF8A63] rounded-full hidden md:block"></div>

                                {/* Journey Item 1 */}
                                <div className="journey-item mb-16">
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                                        {/* Timeline Icon */}
                                        <div className="md:flex hidden flex-shrink-0 items-start">
                                            <div className="bg-gradient-to-br  from-[#FF512F] to-[#FF8A63] p-3 ml-[2px] rounded-full shadow-lg shadow-[#FF512F]/20 z-10">
                                                <Lightbulb className="h-6 w-6 text-white" />
                                            </div>
                                        </div>

                                        {/* Content Card */}
                                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden flex-1">
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF512F]/5 to-[#FF8A63]/5 opacity-50"></div>

                                            <div className="relative">
                                                <h3 className="text-2xl font-bold mb-6 text-[#374151] dark:text-gray-100 pb-3 border-b border-[#FF512F]/20">
                                                    Our story began with a simple realization
                                                </h3>
                                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                                    Enterprises today face unprecedented pressure to leverage AI and intelligent Agents for automation and
                                                    efficiency at scale. This technological shift is creating challenges across business, product, technology,
                                                    and data functions. The skills needed to build the future are scarce, while existing foundations require
                                                    significant enhancement.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Journey Item 2 */}
                                <div className="journey-item">
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                                        {/* Timeline Icon */}
                                        <div className="md:flex hidden flex-col flex-shrink-0 items-start">
                                            
                                            {/* <div className="bg-gradient-to-br mt-[190px] from-[#FF512F] to-[#FF8A63] p-3 ml-[2px] rounded-full shadow-lg shadow-[#FF512F]/20 z-10">
                                                <Lightbulb className="h-6 w-6 text-white" />
                                            </div> */}
                                            <div className="bg-gradient-to-br  from-white to-gray-50 mt-[190px] p-3 ml-[2px] rounded-full shadow-lg shadow-[#FF512F]/20 z-10">
                                                {/* <Lightbulb className="h-6 w-6 text-white" /> */}
                                                <Image src={Arrow} alt="-" className="inline-block top-[2px] h-6 w-6 relative  object-contain" />
                                            </div>
                                        </div>

                                        {/* Content Card */}
                                        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden flex-1">
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF512F]/5 to-[#FF8A63]/5 opacity-50"></div>

                                            <div className="relative">
                                                <h3 className="text-2xl font-bold mb-6 text-[#374151] dark:text-gray-100 pb-3 border-b border-[#FF512F]/20">
                                                    ReKnew was founded to bridge this gap
                                                </h3>
                                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                                    At ReKnew, we are partnering with enterprises to overcome these readiness challenges, revitalizing their core
                                                    capabilities and positioning them for success in this rapidly evolving landscape.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Acceleration Section - Core Principles */}
            <StrategicAcceleration />

            {/* Leadership Team Section */}
            <section className=" relative overflow-hidden">
                <LeadershipTeam />
            </section>

            {/* Life at ReKnew Section */}
            <LifeAtReknew />

            {/* Career Opportunities Section - Current job openings */}
            <CareerOpportunities openHiringModal={openModal} />

            {/* Message from CEO Section - Personal company vision */}

            {/* Use the new HeadquartersHeader component */}
            <HeadquartersHeader />

            {/* Use the new ContactInformation component */}
            <ContactInformation />
        </div>
    );
};

