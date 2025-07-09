/* eslint-disable no-unused-vars */
import Arrow from '../../../public/assets/Arrow logo.png';
import FirstPrinciple from './FirstPrinciple';
import MessageFromCEO from './MessagefromourCEO';
import Image from 'next/image';

// Slide component is now just a wrapper
const Slide = ({ children }) => (
    <div className="opacity-100 z-10">
        {children}
    </div>
);

const AboutUspageSlider = () => {
    const slides = [
        { id: '1', title: 'From Reports to Real-Time Engagement', content: <FirstPrinciple /> },
        { id: '2', title: 'From Siloed to Scaled Impact', content: <MessageFromCEO /> }
    ];

    // No navigation, animation, or theme logic in SSR
    return (
        <div className="relative w-full overflow-hidden min-h-[500px] md:min-h-0">
            <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                {/* Slider Container */}
                <div className="relative mx-auto">
                    {/* Slides Container - All slides rendered statically */}
                    <div className="relative">
                        {slides.map((slide) => (
                            <Slide key={slide.id}>
                                <div className="pb-16 sm:pb-20 md:pb-8">{slide.content}</div>
                            </Slide>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUspageSlider;
