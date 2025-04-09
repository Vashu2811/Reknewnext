// components/Footer.js
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { useRouter } from 'next/navigation';
import ScrollToTopButton from "./ScrollTop"; // Adjust path if needed

const Footer = () => {
  // const handleNavigation = () => {
  //   setIsMenuOpen(false);
  //   setIsTransitioning(false);
  //   window.scrollTo(0, 0);
  // };
  const router = useRouter();

  const handleNavigation = (e, path) => {
    e.preventDefault(); // prevent default anchor behavior
    router.push(path); // programmatic navigation
    setIsMenuOpen(false);
    setIsTransitioning(false);
    window.scrollTo(0, 0);
  };
  return (
    <div className="bg-gradient-to-b from-white via-gray-50/80 to-gray-100/50 font-sans">
      <div className="container mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="lg:max-w-[450px] flex flex-col gap-6">
            <Link href="/" className="w-fit">
              <Image
                src="/assets/rklogo_black.png"
                alt="ReKnew Logo"
                width={208}
                height={80}
              />
            </Link>
            <div className="group">
              <p
                className="text-gray-600 text-[17px] leading-[1.6]  rounded-xl
                                bg-gradient-to-br from-white via-gray-50/30 to-transparent
                                hover:from-[#ff715508] hover:to-transparent
                                transition-all duration-500 ease-out
                                hover:border-[#ff715515]"
              >
                <span className="font-bold text-[#ff7155]">ReKnew</span>
                <span className="text-gray-400 mx-3">—</span>
                <span className="text-gray-700">
                  We help organizations reduce inefficiencies, automate
                  workflows, and unlock growth opportunities.
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 xl:gap-16">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[#232323] text-xl relative group cursor-default">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#ff7155] rounded-full transition-all duration-700 ease-in-out group-hover:w-full opacity-70"></span>
              </h3>
              <span className="flex flex-col gap-3 text-gray-600 pt-1">
   {['ourstory', 'ourservices', 'ourteam'].map((item, index) => {
        const path = `/${item.toLowerCase().replace(' ', '-')}`;
        return (
          <a
            key={index}
            href={path}
            onClick={(e) => handleNavigation(e, path)}
            className="group flex items-center gap-2 w-fit hover:text-[#ff7155] transition-all duration-300 text-[17px]"
          >
            <span className="relative overflow-hidden pl-0 group-hover:pl-6 transition-all duration-500 ease-out">
              <span className="absolute left-0 w-4 h-[1px] bg-[#ff7155] top-[50%] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              {item}
            </span>
          </a>
        );
      })}
                
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-[#232323] text-xl relative group cursor-default">
                Coffee: Please Drop By!
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#ff7155] rounded-full transition-all duration-700 ease-in-out group-hover:w-full opacity-70"></span>
              </h3>
              <div className="flex flex-col gap-2">
                {[
                  {
                    icon: MapPin,
                    text: "4030 Old Milton Parkway Alpharetta, GA 30005 USA",
                    href: "https://maps.google.com",
                  },
                  {
                    icon: Mail,
                    text: "social@reknew.ai",
                    href: "mailto:social@reknew.ai",
                  },
                  {
                    icon: Phone,
                    text: "+1(678) 253-2599",
                    href: "tel:+16782532599",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-center gap-3 text-gray-600 py-1.5 px-2 rounded-lg transition-all duration-500 text-[16px]"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <item.icon
                      size={20}
                      className="text-[#ff7155] shrink-0 transition-all duration-500 ease-out group-hover:scale-110"
                    />
                    <span className="select-all cursor-text transition-all hover:text-[#ff7155] duration-500 group-hover:translate-x-1 text-gray-700">
                      {item.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 mt-8 border-t border-gray-200/70">
          <p className="text-gray-500 text-sm">
            © 2025 ReKnew. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            {[
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Linkedin, href: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="p-2.5 rounded-full text-gray-500 hover:text-[#ff7155] hover:bg-[#ff715508] transition-all duration-500 hover:scale-125 relative group"
              >
                <item.icon
                  size={20}
                  strokeWidth={1.5}
                  className="transition-transform duration-500"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Footer;
