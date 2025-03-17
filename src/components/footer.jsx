import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/Reknew-logo.png";

const Footer = () => {
  return (
    <div className="footer flex bg-black   justify-center items-center flex-col w-full h-fit px-4 py-6 md:px-8 md:py-8 lg:py-12 lg:px-12 xl:py-20 xl:px-20 2xl:pt-28 2xl:px-40 2xl:pb-24">
      <div className="flex flex-col gap-8 w-full max-w-7xl">
        <div className="flex flex-col md:flex-row w-full justify-between items-center sm:text-center md:text-left  gap-10 md:gap-16 lg:gap-24">
          <div className="max-w-xs flex flex-col gap-6">
            <div className="flex sm:justify-center md:justify-start ">
              <Link href="/">
                {" "}
                <Image
                  src={Logo}
                  alt="ReKnew logo"
                  width={162}
                  height={47}
                  className="w-[162px]  h-[47px]"
                />
              </Link>
            </div>
            <p className="text-sm text-gray-400 leading-[140%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut aliqua.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg text-white">Quick Links</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <Link href="/">
                  <li>Home</li>
                </Link>
                <Link href="/our-story">
                  {" "}
                  <li>Our Story</li>
                </Link>
                <Link href="/our-services">
                  <li>Our Services</li>
                </Link>
                <Link href="/our-team">
                  {" "}
                  <li>Our Team</li>
                </Link>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg text-white">Get in Touch</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>2972 Westheimer Rd. Santa Ana, Illinois 85486</li>
                <li>debbie.baker@example.com</li>
                <li>(505) 555-0125</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700"></div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          <p className="text-xs text-gray-500">
            © 2025 ReKnew. All Rights Reserved.
          </p>
          <div className="flex flex-row gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <span
                key={index}
                className="text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                <Icon size={20} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
