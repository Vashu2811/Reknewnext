import React from 'react';

const HeadquartersHeader = () => {
  return (
    <div className="relative dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-6 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Visit Our
            <span className="relative inline-block">
              <span className="relative z-10 text-[#FF512F] dark:text-[#FF512F] px-2">Headquarters</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path
                  d="M0 5c30-5 70-5 100 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-[#FF512F] dark:text-[#FF512F] transition-all duration-300"
                />
              </svg>
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">Reach out to start a conversation</p>
        </div>
      </div>
    </div>
  );
};

export default HeadquartersHeader;
