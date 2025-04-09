import React from 'react';
import consulation from '../../public/assets/Conversation-amico.png';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';


const Consultation = () => {
    const consultationContent = {
        badge: "Expert AI Consultation",
        title: "Transform Your Business",
        subtitle: "with AI Innovation",
        description: "Book a personalized consultation with our AI experts and discover how ReKnew's cutting-edge solutions can revolutionize your operations. Get insights tailored to your industry needs.",
        features: [
            "Custom AI Strategy Development",
            "ROI-Focused Solutions",
            "Industry-Specific Expertise"
        ],
        cta: "Schedule Your Free Strategy Session"
    };

    return (
        <div
        className="flex flex-row justify-center items-center w-full gap-2.5"
        
    >
        <div
            className="w-[360px] md:w-[730px] lg:w-[950px] xl:w-[1500px] gap-[36px] xl:gap-[48px] flex relative flex-col lg:flex-row 
            p-8 md:p-10 rounded-2xl border border-[#e5e7eb26] shadow-xl transition-all duration-500 
            bg-gradient-to-br from-white via-[#FFF8F6] to-[#FFF4F0] overflow-hidden"
          
        >
            {/* Background patterns */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F05 1px,transparent 1px),linear-gradient(-45deg,#FF8A6305 1px,transparent 1px)] bg-[size:20px_20px] opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50"></div>
            
            {/* Floating elements */}
            <div 
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FF512F]/5 to-[#FF8A63]/5 rounded-full blur-3xl"
               
            />

            {/* Image Section */}
            <div 
                className="flex items-center justify-center lg:w-[500px]  h-full my-auto z-10"
              
            >
                <div className="relative flex items-center justify-center w-full">
                    <Image 
                        src={consulation} 
                        alt="AI Consultation" 
                        className="rounded-lg w-full h-full object-contain " 
                    />
                </div>
            </div>

            {/* Content Section */}
            <div 
                className="flex flex-col justify-center lg:w-[516px] xl:w-[640px] gap-[34px] z-10"
               
            >
                <div className="flex flex-col gap-[14px]">
                    {/* Enhanced Badge */}
                    <div 
                        className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm 
                        border border-[#FF512F]/20 shadow-[0_2px_10px_-3px_rgba(255,81,47,0.1)] mb-4 w-fit"
                       
                    >
                        <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">
                            {consultationContent.badge}
                        </span>
                    </div>

                    {/* Enhanced Title */}
                    <div 
                        className="font-medium lg:text-[44px] xl:text-[44px] leading-[120%] tracking-[0%] capitalize"
                        
                    >
                        <span className="bg-gradient-to-r from-[#FF512F] to-[#DD2476] bg-clip-text text-transparent">
                            {consultationContent.title}
                        </span>
                        <br />
                        <span className="text-[#374151]">{consultationContent.subtitle}</span>
                    </div>

                    {/* Enhanced Description */}
                    <div 
                        className="text-lg md:text-[20px] font-normal text-gray-600"
                        
                    >
                        {consultationContent.description}
                    </div>

                    {/* Added Features List */}
                    <div 
                        className="flex flex-wrap gap-3 mt-4"
                       
                    >
                        {consultationContent.features.map((feature, index) => (
                            <span 
                                key={index}
                                className="px-4 py-2 text-sm rounded-full bg-white/80 backdrop-blur-sm 
                                border border-[#FF512F]/10 text-gray-600
                                shadow-[0_2px_10px_-3px_rgba(255,81,47,0.1)]"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>

                    {/* Enhanced CTA Button */}
                    <button 
                        className="relative w-fit group inline-flex items-center justify-center px-4 py-4 overflow-hidden rounded-xl 
                        bg-gradient-to-r from-[#FF512F] to-[#FF8A63] shadow-lg hover:shadow-xl
                        hover:from-[#FF8A63] hover:to-[#FF512F] transition-all duration-500 mt-6 max-w-fit"
                       
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff20 1px,transparent 1px),linear-gradient(-45deg,#ffffff20 1px,transparent 1px)] bg-[size:10px_10px]"></div>
                        <span className="relative flex items-center md:text-lg text-sm font-semibold text-white tracking-wide whitespace-nowrap  transition-transform duration-300">
                            {consultationContent.cta}
                            <ChevronRight className="ml-2 w-5 h-5 transform  transition-transform duration-300" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Consultation;
