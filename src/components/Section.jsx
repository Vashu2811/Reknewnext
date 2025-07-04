/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
"use client";
import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './style.css';
import color from '../../public/assets/logo-left-2.webp';
import CanvasDots from './canvas';
import { ChevronRight } from 'lucide-react';
import ScrollToBottomButton from './scrollBottom';

const Section = ({
    rotatingWords = [],
    headingStart = '',
    headingEnd = '',
    description = '',
    primaryButton = {
        text: '',
        href: '',
        action: '',
        onClick: null
    },
    secondaryButton = {
        text: '',
        href: '',
        action: '',
        onClick: null
    },
    backgroundImage = color,
    className = ''
}) => {
    const sectionsRef = useRef({});
    const [index, setIndex] = useState(0);
    const words = rotatingWords;

    const handleButtonClick = (button) => {
        // If onClick function is provided (for client components), use it
        if (button.onClick && typeof button.onClick === 'function') {
            button.onClick();
            return;
        }

        // Otherwise handle href and action (for server components)
        if (button.href) {
            // Navigate to URL
            window.location.href = button.href;
        } else if (button.action) {
            // Handle specific actions
            switch (button.action) {
                case 'getStarted':
                    console.log('Get Started clicked');
                    // Add your get started logic here
                    break;
                case 'learnMore':
                    console.log('Learn More clicked');
                    // Add your learn more logic here
                    break;
                case 'contact':
                    window.location.href = '/contact';
                    break;
                case 'services':
                    window.location.href = '/ourservices';
                    break;
                default:
                    console.log('Button clicked:', button.action);
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <>
            <section
                className={`w-full  relative text-[#374151] min-h-screen body65 md:h-[760px] h-[550px] flex justify-center text-center p-0 m-0 overflow-hidden ${className}`}>
                <CanvasDots />
                {/* {backgroundImage && (
                    <img 
                        src={backgroundImage} 
                        alt="color-sharp" 
                        className="absolute w-[200px] top-36 md:top-60 right-0 lg:w-[350px] lg:top-20 lg:-right-20" 
                        style={{ zIndex: 1 }} 
                    />
                )} */}

                <div className="flex flex-col items-center justify-center  gap-9">
                    <div className="flex text-[32px] md:text-[55px] justify-center items-center font-normal lg:text-[89px] leading-[120%] tracking-[0]">
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex whitespace-nowrap items-center justify-center space-x-4">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={words[index]}
                                        className="text-[#FF512F] inline-flex justify-end"
                                        style={{
                                            transformStyle: 'preserve-3d',
                                            transform: 'translateZ(100px)'
                                        }}
                                        initial={{ opacity: 0, rotateX: 90, rotateY: 0, rotateZ: 0 }}
                                        animate={{
                                            opacity: 1,
                                            rotateX: 0,
                                            rotateY: 0,
                                            rotateZ: 0,
                                            transition: {
                                                duration: 0.6,
                                                ease: [0.17, 0.67, 0.83, 0.67]
                                            }
                                        }}
                                        exit={{
                                            opacity: 0,
                                            rotateX: -90,
                                            rotateY: 0,
                                            rotateZ: 0,
                                            transition: {
                                                duration: 0.4,
                                                ease: [0.55, 0.085, 0.68, 0.53]
                                            }
                                        }}>
                                        <span>{words[index]}</span>
                                    </motion.div>
                                </AnimatePresence>
                                <span className="inline-block">{headingStart}</span>
                            </div>
                            <h1 className="mt-4">{headingEnd}</h1>
                        </div>
                    </div>
                    <div className="mx-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium text-center">
                        {/* <p className="px-72 text-[14px] md:text-[22px] lg:text-[22px] font-medium text-center">{description}</p> */}

                        <p className="flex flex-wrap w-full">{description}</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                            {primaryButton.text && (
                                <button
                                    onClick={() => handleButtonClick(primaryButton)}
                                    className="relative w-fit group inline-flex items-center justify-center px-3 lg:px-8 py-3 overflow-hidden rounded-lg bg-gradient-to-r from-[#FF512F] to-[#FF8A63] hover:from-[#FF8A63] hover:to-[#FF512F] transition-all duration-300 ease-out hover:scale-105 transform">
                                    <span className="relative flex justify-center items-center md:text-lg text-[14px] font-semibold text-white tracking-wide">
                                        {primaryButton.text}
                                        <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                                            <ChevronRight />
                                        </span>
                                    </span>
                                </button>
                            )}
                            {secondaryButton.text && (
                                <button
                                    onClick={() => handleButtonClick(secondaryButton)}
                                    className="relative w-fit group inline-flex items-center justify-center lg:px-8 py-3 px-3 overflow-hidden rounded-lg border-2 border-[#FF512F] bg-transparent hover:bg-gradient-to-r hover:from-[#FF512F] hover:to-[#FF8A63] transition-all duration-300 ease-out hover:scale-105 transform">
                                    <span className="relative flex justify-center items-center md:text-lg text-[14px] font-semibold text-[#FF512F] group-hover:text-white tracking-wide">
                                        {secondaryButton.text}
                                        <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                                            <ChevronRight />
                                        </span>
                                    </span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <ScrollToBottomButton />
            </section>
        </>
    );
};

export default Section;
