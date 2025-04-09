// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { ArrowRight, Menu, X } from "lucide-react";
// import Logo from "../../public/images/Reknew-logo.png";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname(); // Get current path

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/our-story", label: "Our Story" },
//   { to: "/reKnew-Platform", label: "The ReKnew Platform" },
//   { to: "/our-services", label: "Our Services" },
//   { to: "/our-team", label: "Our Team" },
//   { to: "/contact", label: "Contact Us" },
// ];

//   return (

// <div
//   className="border-b"
//   style={{
//     borderImageSource:
//       "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 52.07%, rgba(255, 255, 255, 0) 100%)",
//     borderImageSlice: 1,
//   }}
// >
//   <nav className="w-full mx-auto px-4 py-4 gap-6 flex sm:justify-evenly md:justify-between lg:justify-center justify-between items-center h-[110px] lg:h-[90px] xl:h-[100px]">
//     {/* Logo */}
//     <Link href="/">
//       <Image
//         // src="/Reknew-logo.png"
//         src={Logo}
//         alt="ReKnew logo"
//         width={140}
//         height={40}
//         className="w-[120px] lg:w-[140px] xl:w-[150px] h-auto"
//         priority
//       />
//     </Link>

//     {/* Navigation Links */}
//     <div className="hidden  lg:flex md:gap-4 lg:gap-6 xl:gap-10 text-white text-sm xl:text-base whitespace-nowrap">
//       {navLinks.map((item, i) => (
//         <Link
//           key={i}
//           href={item.to}
//           className={`transition-colors cursor-pointer ${
//             pathname === item.to ? "text-[#665EE9] font-bold" : "hover:text-[#665EE9]"
//           }`}
//         >
//           {item.label}
//         </Link>
//       ))}
//     </div>

//     {/* Buttons */}
//     <div className="hidden lg:flex gap-3 xl:gap-5 md:ml-[70px] lg:ml-[70px] whitespace-pre overflow-x-hidden">
//       <button className="px-4 py-2 flex  text-white font-semibold rounded-lg border border-[#636668]  justify-center hover:bg-gray-800 transition">
//         Log In
//       </button>

//       <button className="px-5 py-2 bg-white text-black font-semibold rounded-lg hover:bg-[#665EE9] hover:text-white transition flex justify-center items-center">
//         Explore Our Platform <ArrowRight className="ml-1 h-4 w-4" />
//       </button>
//     </div>

//     {/* Mobile Menu Button */}
//     <button className="lg:hidden" onClick={toggleMenu}>
//       {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//     </button>
//   </nav>

//   {/* Mobile Menu */}
//   {isMenuOpen && (
//     <div className="lg:hidden bg-gray-900 py-4">
//       <div className="container mx-auto px-4 flex flex-col space-y-4">
//         {navLinks.map(({ href, label }) => (
//           <Link
//             key={href}
//             href={href}
//             className={`transition-colors cursor-pointer ${
//               pathname === href ? "text-[#665EE9] font-bold" : "hover:text-[#665EE9]"
//             }`}
//           >
//             {label}
//           </Link>
//         ))}
//         <div className="flex flex-col space-y-2 pt-4">
//           <button className="px-3 py-2 text-sm font-semibold text-white rounded-lg border border-[#636668] hover:bg-gray-800 transition">
//             Log In
//           </button>
//           <button className="px-4 py-2 text-sm font-semibold text-black rounded-lg bg-white hover:bg-blue-700 transition flex items-center justify-center">
//             Explore Our Platform <ArrowRight className="ml-2 h-5 w-5" />
//           </button>
//         </div>
//       </div>
//     </div>
//   )}
// </div>

//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoBlack from "../../public/assets/rklogo_black.png";
import { usePathname } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsTransitioning(true);
    setIsMenuOpen(!isMenuOpen);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNavigation = () => {
    setIsMenuOpen(false);
    setIsTransitioning(false);
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/reKnewplatform", label: "The ReKne w Platform" },
    { to: "/ourstory", label: "Our Story" },
    { to: "/ourservices", label: "Our Services" },
    { to: "/ourteam", label: "Our Team" },
    { to: "/contact", label: "Contact Us" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <div className="font-sans" style={{ position: "relative", zIndex: 50 }}>
      <div
        className={`flex items-center transition-all duration-500 ease-in-out px-6 lg:px-10 ${
          isMenuOpen
            ? "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50"
            : ""
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 gap-3 py-4 flex justify-between items-center h-[90px] transition-all duration-500 ease-in-out">
          <div>
            <Link href="/" className="transition-transform duration-300">
              <Image
                src={logoBlack}
                alt="ReKnew logo"
                className="w-[185px] h-auto lg:h-[40px]"
              />
            </Link>
          </div>

          <div className="flex gap-3 items-center">
            <button
              onClick={handleMenuToggle}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className={`menu-button group relative p-3 rounded-xl text-gray-600 transition-all duration-500 cursor-pointer overflow-hidden ${
                isTransitioning ? "pointer-events-none" : ""
              } z-50`}
            >
              <div
                className={`flex flex-col gap-[6px] items-end relative z-10 transition-all duration-500 ${
                  isMenuOpen ? "rotate-180 scale-90" : ""
                }`}
              >
                <span
                  className={`w-6 h-[2px] bg-current transform origin-center transition-all duration-500 ${
                    isMenuOpen
                      ? "rotate-45 translate-y-2 w-6 bg-gradient-to-r from-[#ff7155] to-[#ff9d77]"
                      : "group-hover:w-4 group-hover:bg-gradient-to-r from-[#ff7155] to-[#ff9d77]"
                  }`}
                ></span>
                <span
                  className={`h-[2px] bg-current transform origin-center transition-all duration-500 ${
                    isMenuOpen
                      ? "w-0 opacity-0"
                      : "w-4 opacity-100 group-hover:w-6 group-hover:bg-gradient-to-r from-[#ff9d77] to-[#ff7155]"
                  }`}
                ></span>
                <span
                  className={`w-6 h-[2px] bg-current transform origin-center transition-all duration-500 ${
                    isMenuOpen
                      ? "-rotate-45 -translate-y-2 w-6 bg-gradient-to-r from-[#ff7155] to-[#ff9d77]"
                      : "group-hover:w-5 group-hover:bg-gradient-to-r from-[#ff7155] via-[#ff9d77] to-[#ff7155]"
                  }`}
                ></span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff715515] via-[#ff9d7710] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/5 backdrop-blur-sm transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleMenuToggle}
      ></div>

      <div
        className={`fixed top-0 right-0 w-full h-screen bg-white backdrop-blur-sm transition-all duration-500 ease-out transform ${
          isMenuOpen ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="container mx-auto max-w-7xl h-full flex flex-col px-6 pt-[150px] md:pt-[80px] lg:pt-[80px]">
          <div className="flex flex-col h-full w-full">
            <div className="flex flex-row w-full h-full justify-center items-center">
              <div className="flex flex-col md:flex-row lg:flex-row w-[90%] lg:w-[70%] h-full justify-center items-center">
                <nav className="flex flex-col w-2/3 gap-1 lg:gap-9 md:gap-9 items-start text-left justify-center h-[80%]">
                  {navLinks.map(({ to, label }) => (
                    <Link
                      key={to}
                      href={to}
                      onClick={handleNavigation}
                      className={`group flex text-base md:text-[28px] lg:text-[28px] font-medium ${
                        isActive(to) ? "text-[#ff7155]" : "text-gray-700"
                      }`}
                    >
                      <span className="relative overflow-hidden pl-0 group-hover:pl-8 transition-all hover:text-[#ff7155] duration-500 ease-out">
                        <span className="absolute left-0 w-6 h-[1px] bg-[#ff7155] top-[50%] hover:text-[#ff7155] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                        {label}
                      </span>
                    </Link>
                  ))}
                </nav>

                <div className="h-full flex items-center justify-start p-8">
                  <div className="max-w-md w-full space-y-12">
                    <div className="space-y-6">
                      <h2 className="text-xl md:text-2xl lg:text-2xl font-bold text-left text-gray-900 relative group cursor-default">
                        Coffee! Please Drop By
                        <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#ff7155] rounded-full transition-all duration-700 ease-in-out group-hover:w-full opacity-70"></span>
                      </h2>
                      <div className="space-y-2 md:space-y-3 lg:space-y-4">
                        {[
                          {
                            icon: MapPin,
                            text: "4030 Old Milton Parkway, Alpharetta, GA 30005 USA",
                            href: "https://www.google.com/maps/place/4030+Old+Milton+Pkwy,+Alpharetta,+GA+30005,+USA/@34.06146,-84.2677458,14.12z/data=!4m6!3m5!1s0x88f59fb340b3ce33:0x6d56288bb1ff7696!8m2!3d34.0620544!4d-84.2424242!16s%2Fg%2F11c2hqdc7b?entry=ttu&g_ep=EgoyMDI1MDMzMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",
                          },
                          {
                            icon: Phone,
                            text: "+1(678) 253-2599",
                            href: "tel:+16782532599",
                          },
                          {
                            icon: Mail,
                            text: "social@reknew.ai",
                            href: "mailto:social@reknew.ai",
                          },
                        ].map((item, index) => (
                          <a
                            key={index}
                            href={item.href}
                            className="group flex items-center gap-3 text-gray-600 py-1.5 px-2 rounded-lg transition-all duration-500"
                            target={
                              item.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            <item.icon
                              size={20}
                              className="text-[#ff7155] group-hover:scale-110 transition-all duration-500"
                            />
                            <span className="text-gray-700 group-hover:translate-x-1 hover:text-[#ff7155] transition-all duration-500">
                              {item.text}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h2 className="text-xl md:text-2xl lg:text-2xl font-bold text-left text-gray-900 relative group cursor-default">
                        Social Media
                        <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#ff7155] rounded-full transition-all duration-700 ease-in-out group-hover:w-full opacity-70"></span>
                      </h2>

                      <div className="flex gap-6">
                        {[
                          { icon: Facebook, href: "#" },
                          { icon: Twitter, href: "#" },
                          { icon: Instagram, href: "#" },
                          { icon: Linkedin, href: "#" },
                        ].map((item, index) => (
                          <a
                            key={index}
                            href={item.href}
                            className="p-2.5 rounded-full text-gray-500 hover:text-[#ff7155] hover:bg-[#ff715508] transition-all duration-500 hover:scale-125"
                          >
                            <item.icon size={20} strokeWidth={1.5} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
