import React from 'react'
import manlptop from "../../public/images/Amanwithlaptop_imresizer.png";
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Consultation = ({ title="title", tag_one ='tag_one', tag_two = "", btn_name='btn_name', }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full h-fit gap-4 px-4 py-6 md:px-8  lg:py-12 lg:px-12 xl:py-20 xl:px-20 2xl:pt-28 2xl:px-40 2xl:pb-24 md:py-[100px]">
      <div className="flex relative flex-col md:flex-row w-full max-w-7xl h-fit gap-6 p-6 md:p-8 lg:p-12 rounded-2xl border border-[#23262F] bg-[#10111459] shadow-[inset_0px_1px_1px_1px_#C7D3EA1F,inset_0px_24px_48px_1px_#C7D3EA0D]">
        <div className="flex relative w-full md:w-1/2 z-10">
          <Image
            src={manlptop}
            alt="AI Consultation"
            className="w-full  md:w-[532px] md:h-[369px] object-contain md:absolute md:-top-[101px] md:-left-1"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 gap-6 z-10 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-3xl md:text-4xl leading-[120%]">
              {title}
            </h1>
            <p className="font-medium text-lg md:text-xl leading-[140%] text-[#CFD0D3]">
              {tag_one}
            </p>
            {tag_two && (
              <p className="font-medium text-lg md:text-xl leading-[140%] text-[#CFD0D3]">
                {tag_two}
              </p>
            )}
          </div>
          <div className="flex flex-row justify-center md:justify-start items-center w-fit gap-2 px-5 py-3 rounded-lg bg-white hover:cursor-pointer text-black shadow-md">
            <span className="font-semibold text-base leading-[140%]">
              {btn_name}
            </span>
            <ArrowRight width={18} height={18} />
          </div>
          {!tag_two && (
              <p className="h-5">
              </p>
            )}
        </div>
         <div className="absolute inset-y-0 left-0 bg-gradient-to-b from-transparent via-[rgba(102,94,233,0.2)] to-transparent w-full h-full" />
            <div className="absolute inset-y-10 left-0 bg-gradient-to-b from-transparent via-[rgba(102,94,233,1)] to-transparent w-[2px] h-3/4" />
            <div className="absolute inset-y-10 left-0 bg-gradient-to-b from-transparent via-[rgba(102,94,233,1)] to-transparent w-[3px] h-3/4" />
            <div className="absolute inset-y-0 left-0 bg-gradient-to-b from-transparent via-[rgba(102,94,233,0.2)] to-transparent w-[3px] h-full" />
         <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(200px_350px_at_left,transparent_25%,white)] rounded-2xl"></div>
      </div>
    </div>
  )
}

export default Consultation