import LeadershipTeam from './AboutUsTeamSection';
import AboutUspageSlider from './AboutUspageSlider';
import CareerOpportunities from './CareerOpportunities';
import Arrow from '../../../public/assets/Arrow logo.png';
import HeadquartersHeader from './HeadquartersHeader';
import ContactInformation from './ContactInformation';
import StrategicAcceleration from './StrategicAcceleration';
import LifeAtReknew from './LifeAtReknew';
import { Lightbulb } from 'lucide-react';
import Image from 'next/image';

// Accept isDarkMode as a prop for SSR
const OurStory = ({ isDarkMode = false }) => {
    // No hooks or client-side logic

    return (
        <div className="text-[#374151] dark:text-gray-100 font-sans w-full min-h-screen overflow-x-hidden">
            {/* Modal logic removed for SSR */}
            {/* Progress Bar - Animated scroll indicator */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF512F] to-[#FF512F] dark:from-[#FF512F] dark:to-[#FF512F] z-50" />

            {/* Hero Slider Section */}
            <AboutUspageSlider />

            {/* Our Journey Section - Company origin story */}
            <section className={`py-32 relative overflow-hidden${isDarkMode ? " bg-gray-900" : "bg-transparent"}`}>
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl flex justify-center items-center flex-col mx-auto">
                        <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${isDarkMode ? "text-white" : "text-[#374151]"}`}>
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
                                        <div className={`bg-gradient-to-br rounded-2xl p-8 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden flex-1${isDarkMode ? " from-gray-800 to-gray-900 text-gray-100" : " from-white to-gray-50 text-gray-900"}`}>
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF512F]/5 to-[#FF8A63]/5 opacity-50"></div>

                                            <div className="relative">
                                                <h3 className="text-2xl font-bold mb-6  pb-3 border-b border-[#FF512F]/20">
                                                    Our story began with a simple realization
                                                </h3>
                                                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
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
                                            <div className={`bg-gradient-to-br mt-[190px] p-3 ml-[2px] rounded-full shadow-lg shadow-[#FF512F]/20 z-10${isDarkMode ? " from-gray-800 to-gray-900" : " from-white to-gray-50"}`}>
                                                <Image src={Arrow} alt="-" className="inline-block top-[2px] h-6 w-6 relative object-contain" />
                                            </div>
                                        </div>

                                        {/* Content Card */}
                                        <div className={`bg-gradient-to-br rounded-2xl p-8 border border-[#FF512F]/20 shadow-xl hover:shadow-2xl transition duration-300 relative overflow-hidden flex-1${isDarkMode ? " from-gray-800 to-gray-900 text-gray-100" : " from-white to-gray-50 text-gray-900"}`}>
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF512F]/5 to-[#FF8A63]/5 opacity-50"></div>

                                            <div className="relative">
                                                <h3 className="text-2xl font-bold mb-6 pb-3 border-b border-[#FF512F]/20">
                                                    ReKnew was founded to bridge this gap
                                                </h3>
                                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
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
            <StrategicAcceleration isDarkMode={isDarkMode} />

            {/* Leadership Team Section */}
            <section className={`relative overflow-hidden ${isDarkMode ? "bg-gray-900" : "bg-transparent"}`}>
                <LeadershipTeam  />
            </section>

            {/* Life at ReKnew Section */}
            <LifeAtReknew isDarkMode={isDarkMode} />

            {/* Career Opportunities Section - Current job openings */}
            {/* Modal logic removed for SSR, pass a no-op function */}
            <CareerOpportunities openHiringModal={undefined} isDarkMode={undefined} />

            {/* Use the new HeadquartersHeader component */}
            <HeadquartersHeader isDarkMode={isDarkMode} />

            {/* Use the new ContactInformation component */}
            <ContactInformation  />
        </div>
    );
};

export default OurStory;
