"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/our-story", label: "Our Story" },
    { href: "/reKnew-Platform", label: "The ReKnew Platform" },
    { href: "/our-services", label: "Our Services" },
    { href: "/our-team", label: "Our Team" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
//     <div
//       className="bg-black sticky top-0 z-50 bg-opacity-5 backdrop-blur-md border-b"
//       style={{
//         borderImageSource:
//           "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 52.07%, rgba(255, 255, 255, 0) 100%)",
//         borderImageSlice: 1,
//       }}
//     >
//       <nav className="w-full mx-auto lg:gap-8 xl:gap-12 px-4 py-4 gap-12 flex justify-between lg:justify-center items-center h-[110px]">
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="/Reknew-logo.png"
//             alt="ReKnew logo"
//             width={125}
//             height={125}
//             className="lg:w-[140.22px] xl:w-full h-[33.8px]"
//             priority
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         {/* <div className="hidden md:flex lg:flex gap-8 font-medium text-[#FFFFFF] text-[14px]">
//           {navLinks.map(({ to, label }) => (
//             <Link
//               key={to}
//               href={to}
//               className={`flex transition-colors cursor-pointer ${
//                 pathname === to ? "text-[#665EE9] font-bold" : "hover:text-[#665EE9]"
//               }`}
//             >
//               {label}
//             </Link>
//           ))}
//         </div> */}
//         <div className="hidden  md:flex lg:flex xl:flex gap-4 lg:gap-8 font-medium text-white text-sm md:text-base">
//   {navLinks.map(({ to, label }) => (
//     <Link
//       key={to}
//       href={to}
//       className={`flex transition-colors cursor-pointer ${
//         pathname === to ? "text-[#665EE9] font-bold" : "hover:text-[#665EE9]"
//       }`}
//     >
//       {label}
//     </Link>
//   ))}
// </div>

//         {/* Buttons */}
//         <div className="hidden lg:flex gap-2 lg:ml-[70px]">
//           <button className="px-3 text-[#FFFFFF] flex items-center justify-center h-[36px] font-[600] rounded-[8px] border-[#636668] border hover:bg-gray-800 transition-colors">
//             Log In
//           </button>

//           <button className="px-3 lg:text-[14px] leading-[140%] tracking-[0%] justify-center h-[36px] font-[600] rounded-[8px] hover:bg-[#665EE9] hover:text-white transition-colors flex items-center bg-white text-black hover:cursor-pointer">
//             Explore Our Platform <ArrowRight className="ml-2 h-4 w-4" />
//           </button>
//         </div>

//         {/* Mobile Menu Toggle Button */}
//         <button className="lg:hidden" onClick={toggleMenu}>
//           {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
//         </button>
//       </nav>

//       {/* Mobile Navigation Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-gray-900 py-4">
//           <div className="container mx-auto px-4 flex flex-col space-y-4">
//             {navLinks.map(({ to, label }) => (
//               <Link
//                 key={to}
//                 href={to}
//                 className={`transition-colors cursor-pointer ${
//                   pathname === to ? "text-[#665EE9] font-bold" : "hover:text-[#665EE9]"
//                 }`}
//               >
//                 {label}
//               </Link>
//             ))}

//             {/* Mobile Buttons */}
//             <div className="flex flex-col space-y-2 pt-4">
//               <button className="px-3 py-1 text-[14px] font-[600] text-[#FFFFFF] rounded-[8px] border border-[#636668] hover:bg-gray-800 transition-colors">
//                 Log In
//               </button>
//               <button className="px-4 py-2 text-[14px] font-[600] text-[#262626] rounded-[8px] bg-white hover:bg-blue-700 transition-colors flex items-center justify-center">
//                 Explore Our Platform <ArrowRight className="ml-2 h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>



// <div className="bg-black sticky top-0 z-50 bg-opacity-5 backdrop-blur-md border-b " 
//       style={{ 
//         borderImageSource: "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 52.07%, rgba(255, 255, 255, 0) 100%)",
//         borderImageSlice: 1,
//       }}>
//       <nav className=" w-full mx-auto lg:gap-8 xl:gap-12 px-4 py-4 gap-12 flex justify-between lg:justify-center items-center h-[110px] ">
//         <Link href="/"> <Image
//             src="/Reknew-logo.png"
//             alt="ReKnew logo"
//             width={125}
//             height={125}
//             className="lg:w-[140.22px] xl:w-full h-[33.8px]"
//             priority
//           /></Link>

//         <div className="hidden lg:flex lg:gap-5 xl:gap-8 font-medium text-[#FFFFFF] lg:text-[14px]">
//           {navLinks.map(({ href, label }) => (
//             <Link
//               key={href}
//               href={href}
//               className={`flex transition-colors cursor-pointer ${
//                 pathname === href ? "text-[#665EE9] font-bold" : "hover:text-[#665EE9]"
//               }`}
//             >
//               {label}
//             </Link>
//           ))}
//         </div>

//         <div className="hidden lg:flex gap-2 md:ml-[70px] lg:ml-[70px]">
//           <button className="px-3 text-[#FFFFFF] flex items-center justify-center h-[36px] font-[600]  rounded-[8px] border-[#636668]  border hover:bg-gray-800 transition-colors">
//             Log In
//           </button>
        
//           <button className="px-3 lg:text-[14px]   leading-[140%] tracking-[0%] justify-center h-[36px] font-[600] rounded-[8px] hover:bg-[#665EE9] hover:text-white transition-colors flex items-center bg-white  text-black hover:cursor-pointer ">
//             Explore Our Platform <ArrowRight className="ml-2 h-4 w-4" />
//           </button>
//         </div>

//         <button className="lg:hidden" onClick={toggleMenu}>
//           {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </nav>

//       {isMenuOpen && (
//         <div className="lg:hidden bg-gray-900 py-4">
//           <div className="container mx-auto px-4 flex flex-col space-y-4">
//             {navLinks.map(({ to, label }) => (
//               <Link
//                 key={to}
//                 href={to}
//                 className={`transition-colors cursor-pointer ${
//                   location.pathname === to ? "text-[#665EE9] font-bold" : "hover:text-[#665EE9]"
//                 }`}
//               >
//                 {label}
//               </Link>
//             ))}
//             <div className="flex flex-col space-y-2 pt-4">
//               <button className="px-3 py-1 text-[14px] font-[600] text-[#FFFFFF]  rounded-[8px] border border-[#636668] hover:bg-gray-800 transition-colors">
//                 LogIn
//               </button>
//               <button className="px-4 py-2 text-[14px] font-[600] text-[#262626] rounded-[8px] bg-white hover:bg-blue-700 transition-colors flex items-center justify-center">
//                 ExploreOurPlatform <ArrowRight className="ml-2 h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div> 

<div
  className="border-b"
  style={{
    borderImageSource:
      "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 52.07%, rgba(255, 255, 255, 0) 100%)",
    borderImageSlice: 1,
  }}
>
  <nav className="w-full mx-auto px-4 py-4 gap-6 flex sm:justify-evenly md:justify-between lg:justify-center justify-between items-center h-[110px] lg:h-[90px] xl:h-[100px]">
    {/* Logo */}
    <Link href="/">
      <Image
        src="/Reknew-logo.png"
        alt="ReKnew logo"
        width={140}
        height={40}
        className="w-[120px] lg:w-[140px] xl:w-[150px] h-auto"
        priority
      />
    </Link>

    {/* Navigation Links */}
    <div className="hidden  lg:flex md:gap-4 lg:gap-6 xl:gap-10 text-white text-sm xl:text-base whitespace-nowrap">
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`transition-colors cursor-pointer ${
            pathname === href ? "text-[#665EE9] font-bold" : "hover:text-[#665EE9]"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>

    {/* Buttons */}
    <div className="hidden lg:flex gap-3 xl:gap-5 md:ml-[70px] lg:ml-[70px]">
      <button className="px-4 py-2 flex  text-white font-semibold rounded-lg border border-[#636668]  justify-center hover:bg-gray-800 transition">
        Log In
      </button>

      <button className="px-5 py-2 bg-white text-black font-semibold rounded-lg hover:bg-[#665EE9] hover:text-white transition flex justify-center items-center">
        Explore Our Platform <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>

    {/* Mobile Menu Button */}
    <button className="lg:hidden" onClick={toggleMenu}>
      {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  </nav>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="lg:hidden bg-gray-900 py-4">
      <div className="container mx-auto px-4 flex flex-col space-y-4">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition-colors cursor-pointer ${
              pathname === href ? "text-[#665EE9] font-bold" : "hover:text-[#665EE9]"
            }`}
          >
            {label}
          </Link>
        ))}
        <div className="flex flex-col space-y-2 pt-4">
          <button className="px-3 py-2 text-sm font-semibold text-white rounded-lg border border-[#636668] hover:bg-gray-800 transition">
            Log In
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-black rounded-lg bg-white hover:bg-blue-700 transition flex items-center justify-center">
            Explore Our Platform <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )}
</div>


  );
}
