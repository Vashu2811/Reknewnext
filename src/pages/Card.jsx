import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardData = [
  {
    title: "AI-Powered Intelligence",
    text: "Transform decision-making with real-time insights and predictive analytics.",
  },
  {
    title: "Smart Workflow Automation",
    text: "Streamline operations with intelligent process automation and optimization.",
  },
  {
    title: "Data-Driven Growth",
    text: "Leverage unified analytics to unlock actionable business insights.",
  },
  {
    title: "Enterprise Integration",
    text: "Seamlessly connect legacy systems with cutting-edge technology.",
  },
  {
    title: "Scalable Solutions",
    text: "Future-proof your business with adaptable AI-driven architecture.",
  },
];

const CardSlider = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrowVisibility = () => {
    if (!sliderRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', updateArrowVisibility);
      updateArrowVisibility();
      return () => slider.removeEventListener('scroll', updateArrowVisibility);
    }
  }, []);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    
    const scrollAmount = direction === 'left' ? -400 : 400;
    sliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    
    e.preventDefault();
    const x = e.clientX;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full max-w-[1300px] mx-auto px-4 mt-10 mb-16">
      <h1 className="text-[24px] md:text-[44px] sm:text-[18px] font-semibold text-center mb-10">
        Why <span className="backgroundImage">Businesses</span> Choose Us?
      </h1>

      <div className="relative group">
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-x-6"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        )}

        <div
          ref={sliderRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="overflow-x-auto scrollbar-hide scroll-smooth"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
          }}
        >
          <div className="flex gap-6  min-w-max">
            {cardData.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className={`bgcardd rounded-[16px] p-4 min-w-[260px] sm:min-w-[300px] md:min-w-[360px] lg:min-w-[400px] h-[174px]  shadow-xl transition-transform cursor-grab active:cursor-grabbing`}
                >
                 
                 <div className=""> <h3 className="text-[16px] font-semibold  mb-2 text-[#665EE9]">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 max-w-[450px] leading-relaxed">
                    {card.text}
                  </p>
                  </div>
                  
                </div>
              );
            })}
          </div>
          
        </div>

        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-6"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CardSlider;