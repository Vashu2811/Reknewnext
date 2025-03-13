"use client";
import "./style.css";
import React from "react";
import bgfreamcenter from "../../public/images/bgframcenter.png";
import { ArrowRight } from "lucide-react";
import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Consultation from "./Consultation";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default  function ContectUs() {
  return (
    <>
      <div
        className="text-white bg-black font-sans w-full min-h-screen bg-cover bg-center"
      >
        <Navbar />
        <section className="w-full min-h-screen flex justify-center items-center px-4 text-center">
          <div className="max-w-4xl">
            <p className="text-lg md:text-xl mb-8">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              LET’S BUILD THE FUTURE TOGETHER!
            </h1>

            <p className="text-[12px] md:text-[12px] px-8 leading-tight mb-8">
              At ReKnew, we’re always excited to connect with businesses looking
              to harness the power of AI, automation, and digital
              transformation. Whether you’re looking for a consultation,
              partnership, demo, or career opportunity, our team is here to
              help.
            </p>
            <h1 className="text-[18px] md:text-[18px] px-8 font-semibold leading-tight mb-8">
              Have a question? <span className="text-white">•</span>{" "}
              <span>Want to explore our solutions?</span>{" "}
              <span className="text-white">•</span> Looking for a career with
              us?
            </h1>
            <div className="flex justify-center">
              <button className="px-3 py-1 rounded-[8px] text-gray-950 bg-white transition-colors flex  items-center">
                Join Our Team
                <ArrowRight className="ml-2 mt-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <div className="min-h-screen  text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-8  items-center px-3 md:px-32 sm:px-2">
              <div className="space-y-8">
                <div className="flex items-center gap-1">
                  <span
                    style={{
                      clipPath: "polygon(0 0, 30% 15%, 30% 100%, 0 85%)",
                    }}
                    className="bg-[#665EE9] w-5 h-10"
                  ></span>
                  <h2 className="text-3xl font-bold">Our Office</h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6  flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-400">
                        [Your Office Address]
                        <br />
                        [City, State, ZIP Code]
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6  flex-shrink-0" />
                    <p className="text-gray-400">[+XX-XXXX-XXXXXX]</p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6  flex-shrink-0" />
                    <p className="text-gray-400">[your@email.com]</p>
                  </div>
                  <div className="flex items-start border-t border-[#23262F] space-x-4" />

                  <div className="flex items-start  space-x-4">
                    <div>
                      <h3 className="font-semibold text-[#665EE9] text-lg mb-2">
                        Office Hours
                      </h3>
                      <p className="text-gray-400">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday & Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.697403441436425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564749296!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-screen text-white">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get in Touch with Us
            </h1>
          </div>
          <div className="container mx-auto px-4 pb-16">
            <main className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
                <div
                  className="bgcard bg-opacity-50 backdrop-blur-sm p-6 rounded-lg  hover:border-indigo-600 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <h2 className="text-xl font-semibold text-[#665EE9]">
                      Business Inquiries & Partnerships
                    </h2>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    Interested in collaborating with ReKnew? Let’s discuss how
                    AI can transform your business.
                  </p>
                  <div className="mt-8">
                    <button className="text-sm inline-flex items-center border border-gray-700 text-white px-4 py-2 rounded transition-colors">
                      <Mail size={16} className="mr-2 mt-1" />{" "}
                      business@email.com
                    </button>
                  </div>
                </div>

                <div
                  className="bgcard bg-opacity-50 backdrop-blur-sm p-6 rounded-lg  hover:border-indigo-600 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <h2 className="text-xl font-semibold text-[#665EE9]">
                    Sales & Solutions Consultation
                    </h2>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                  Want to see how our AI-powered platform can optimize your enterprise?
                  </p>
                  <div className="mt-8">
                    <button className="text-sm inline-flex items-center border border-gray-700 text-white px-4 py-2 rounded transition-colors">
                      <Mail size={16} className="mr-2 mt-1" />{" "}
                      sales@email.com
                    </button>
                  </div>
                </div>

                <div
                  className="bgcard bg-opacity-50 backdrop-blur-sm p-6 rounded-lg  hover:border-indigo-600 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <h2 className="text-xl font-semibold text-[#665EE9]">
                    Customer Support & Help Desk
                    </h2>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                  Need assistance with our platform or services? Our team is here to help!
                  </p>
                  <div className="mt-8">
                    <button className="text-sm inline-flex items-center border border-gray-700 text-white px-4 py-2 rounded transition-colors">
                      <Mail size={16} className="mr-2 mt-1" />{" "}
                      support@email.com
                    </button>
                  </div>
                </div>
                
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                <div
                  className="bgcard bg-opacity-50 backdrop-blur-sm p-6 rounded-lg  hover:border-indigo-600 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <h2 className="text-xl font-semibold text-[#665EE9]">
                    Press & Media
                    </h2>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                  For media inquiries, interviews, and PR collaborations.
                  </p>
                  <div className="mt-8">
                    <button className="text-sm inline-flex items-center border border-gray-700 text-white px-4 py-2 rounded transition-colors">
                      <Mail size={16} className="mr-2 mt-1" />{" "}
                      media@email.com
                    </button>
                  </div>
                </div>

                <div
                  className="bgcard bg-opacity-50 backdrop-blur-sm p-6 rounded-lg  hover:border-indigo-600 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <h2 className="text-xl font-semibold text-[#665EE9]">
                    Careers & Hiring
                    </h2>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                  Excited to be part of ReKnew? Explore our job openings and apply today!
                  </p>
                  <div className="mt-8">
                    <button className="text-sm inline-flex items-center border border-gray-700 text-white px-4 py-2 rounded transition-colors">
                      <Mail size={16} className="mr-2 mt-1" />{" "}
                      careers@email.com
                    </button>
                  </div>
                </div>
               
              </div>

              <div className="flex justify-center mt-8">
                <button className="border border-gray-800 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md flex items-center transition-all duration-300 group">
                  Meet the Full Team
                  <ArrowRight
                    className="ml-2 mt-1 group-hover:translate-x-1 transition-transform"
                    size={18}
                  />
                </button>
              </div>
            </main>
          </div>
        </div>
        <section className="container py-16">
            <div
              style={{
                backgroundImage: `url(${bgfreamcenter})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="bg-opacity-60 rounded-xl p-4  text-center max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Connect with Us on Social Media
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
              Stay updated with our latest AI innovations, company news, and insights.
              </p>
              <div className="mt-8">
                <button className="inline-flex items-center border border-gray-700 text-white px-4 py-2 rounded transition-colors">
                Follow Us
                  <ArrowRight size={16} className="ml-2 mt-1" />
                </button>
              </div>
            </div>
          </section>
        {/*  */}

        <Consultation 
          title="Let's Transform Your Business with AI"
          tag_one="Our team is ready to help you leverage AI for efficiency, intelligence, and growth."
          btn_name="Schedule a Consultation"
        />
        <Footer />
      </div>
    </>
  );
}