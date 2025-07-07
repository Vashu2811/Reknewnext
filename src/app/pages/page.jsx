// pages/index.js
'use client';
import { useEffect, lazy, Suspense, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ReKnewModal from '../../model/ReKnewModal';
import HomepageVarticalSlider from './HomepageVarticalSlider';
import Ourservices from './SeirvesSlider';
import SuccessstorySliderSection from './SuccessstorySliderSection';
import FoundersExperience from './FoundersExperience';
import { useTheme } from "@/Context/ThemeContext";



// const CardList = lazy(() => import('./Foundation'));
const Consultation = lazy(() => import('./Consultation'));

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        document.title = 'Home | ReKnew';
    }, []);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <ReKnewModal isOpen={isModalOpen} onClose={closeModal} />
            <div className="text-gray-800 dark:text-gray-100 font-sans w-full min-h-screen overflow-x-hidden">
                {/* Progress Bar */}
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF512F] to-[#FF8A63] dark:from-[#FF512F] dark:to-[#FF8A63] z-50"
                    style={{ scaleX }}
                />

                <HomepageVarticalSlider />

                {/* Founders Experience Section - Added directly after the slider */}
                <FoundersExperience />

                {/* Main Content */}
                <div className="dark:text-gray-100 flex flex-col overflow-x-hidden">
                    <Ourservices />

                    

                    <SuccessstorySliderSection />

                    <div className="relative overflow-y-hidden overflow-x-hidden">
                        <div className=" flex justify-center items-center relative">
                            <div className="py-[100px]">
                                <Suspense fallback={<div className="loader">Loading...</div>}>
                                    <Consultation />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
