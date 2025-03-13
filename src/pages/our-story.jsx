"use client";
import sideimgleft from "../../public/images/Reknewside img.png";
import sideimgright from "../../public/images/ovrmissionreknew.png";
import walkman from "../../public/images/ourjourney.png";
import { ArrowRight } from "lucide-react";
import Consultation from "./Consultation";
import Image from "next/image";
import bggrid from "../../public/images/bggrid.png";
import Navbar from "@/components/navbar";
import Footer from "../components/footer";
import "./style.css";

export default function ourstory() {
  return (
    <>
      <div className="text-white bg-black font-montserrat w-full min-h-screen bg-cover bg-center">
        <Navbar />
        <section className="w-full h-full md:h-[625px] py-10 md:py-0 flex justify-center items-center text-center">
          <div className="flex flex-col w-[360px] md:w-[730px] lg:w-[950px] xl:w-[1280px] gap-12">
            <p className="font-normal text-2xl leading-[120%] tracking-[0]">
              Our Story
            </p>
            <div className="flex font-semibold text-4xl md:text-[62px] leading-[120%] tracking-[0]  ">
              REVOLUTIONIZING ENTERPRISES FOR A SMARTER FUTURE
            </div>
          </div>
        </section>

        {/* Who We Are Section */}

        <div className="flex flex-row w-full justify-center items-center md:py-[100px] py-[50px] ">
          <div className="flex flex-col lg:flex-row w-[360px] md:w-[730px] lg:w-[950px] xl:w-[1280px] lg:gap-8 xl:gap-[52px]">
            <Image
              src={sideimgleft}
              alt="Digital transformation visualization"
              className="rounded-lg object-cover lg:w-[459px] lg:h-[400px] xl:w-[614px] xl:h-[400px]"
            />

            <div className="flex flex-col lg:w-[459px] xl:w-[614px] gap-[52px] ">
              <div className="flex flex-col gap-8 ">
                <span className="font-semibold text-[44px] leading-[120%] tracking-[0]">
                  Who We Are
                </span>
                <div className="flex flex-col gap-[18px]  ">
                  <div className="text-lg font-normal leading-[140%] tracking-[0] text-[#CFD0D3] text-justify">
                    ReKnew is more than just a technology company—we are
                    architects of transformation. Our mission is to help
                    enterprises revitalize their core business units by
                    seamlessly integrating AI, automation, and data
                    intelligence.
                  </div>
                  <div className="text-lg font-normal leading-[140%] tracking-[0] text-[#CFD0D3] text-justify">
                    The modern business landscape is evolving rapidly, and
                    organizations must adapt, innovate, and optimize to stay
                    ahead. At ReKnew, we provide the strategy, tools, and
                    expertise to help businesses navigate this transformation
                    with confidence.
                  </div>
                </div>
              </div>
              <div className="flex w-[244px]  h-[46px] border-[1px] gap-[6px] px-5 py-3 items-center border-[rgba(255,255,255,0.36)] rounded-lg transition-all cursor-pointer">
                <span className="font-semibold text-base leading-[140%] tracking-[0] w-full">
                  Discover Our Services
                </span>
                <ArrowRight size={18} className="" />
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission */}

        <div className="w-full py-[50px] md:py-[100px] flex justify-center items-center">
          <div className="flex flex-row w-[360px] md:w-[730px] lg:w-[950px] xl:w-[1280px]">
            <div className="bg-center relative border border-[rgba(35,37,48,1)] flex flex-col gap-6  items-center justify-center p-6 md:p-12 rounded-2xl shadow-[inset_0px_1px_1px_1px_rgba(16,17,20,0.25)]">
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-full w-full" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,1)] to-transparent h-[2px] w-3/4 " />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233, 1)] to-transparent h-[3px] w-3/4" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-[3px]  w-full" />

              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_25%,white)] rounded-2xl"></div>

              <h2 className="font-semibold text-[44px] leading-[120%] text-center text-white z-10">
                Our Mission
              </h2>
              <p className="font-medium text-[20px] leading-[160%] text-center text-[rgba(207,208,211,1)] z-10">
                To empower enterprises by optimizing workflows, unifying data,
                and integrating AI-driven solutions, enabling them to make
                intelligent, data-backed decisions that fuel growth and
                innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision */}

        <div className="flex w-full md:py-[100px] py-[50px] justify-center items-center ">
          <div className="flex flex-col w-[360px] lg:flex-row md:w-[730px] lg:w-[950px] xl:w-[1280px] gap-8 xl:gap-[52px]">
            <div className="flex flex-col lg:w-[459px] xl:w-[614px] gap-[52px] order-2 lg:order-1 ">
              <div className="flex flex-col gap-8">
                <h2 className="font-semibold text-[44px] leading-[120%] tracking-[0]">
                  Our Vision
                </h2>
                <div className="flex flex-col gap-[18px] font-normal text-lg leading-[140%] tracking-[0] text-[#CFD0D3]">
                  <p>
                    We envision a future where businesses operate with seamless
                    intelligence, connecting their core functions, people, and
                    technology to drive efficiency and maximize potential.
                  </p>
                  <p>
                    ReKnew aims to be the bridge between legacy business models
                    and Al-powered enterprises, fostering agility, intelligence,
                    and resilience in a constantly evolving digital world.
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-[344px]  h-[46px] border-[1px] gap-[5px] px-5 py-3 items-center border-[rgba(255,255,255,0.36)] rounded-lg transition-all cursor-pointer">
                <span className="flex font-semibold text-base leading-[140%] tracking-[0] w-full">
                  Explore Our Al-Powered Solutions
                </span>
                <ArrowRight size={18} />
              </div>
            </div>
            <Image
              src={sideimgright}
              alt="AI technology visualization"
              className="rounded-lg object-cover order-1 lg:order-2 lg:w-[459px] lg:h-[400px] xl:w-[614px] xl:h-[400px]"
            />
          </div>
        </div>

        {/* Our Journey */}

        <div className="flex justify-center items-center w-full py-[50px]  md:py-[100px]  text-white">
          <div className="flex flex-col justify-center items-center gap-[72px] w-[360px] md:w-[730px] lg:w-[950px] xl:w-[1280px] ">
            <div className="flex flex-col justify-center items-center  gap-4 ">
              <h1 className="font-semibold text-[44px] leading-[120%] tracking-[0%]">
                Our Journey
              </h1>
              <p className="font-medium text-center md:text-start text-xl leading-[140%] tracking-[0%]">
                From a Bold Idea to a Game-Changer in Enterprise AI
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 xl:gap-[52px]">
              <div className=" lg:w-[459px] xl:w-[614px] flex flex-col gap-[34px]">
                <Image
                  src={walkman}
                  alt="AI technology visualization"
                  className="rounded-lg object-cover lg:w-[459px] lg:h-[291px] xl:w-[614px] xl:h-[291px]"
                />
                <p className="font-normal text-lg leading-[140%] tracking-[0%]">
                  Over the years, we have helped numerous enterprises across
                  finance, healthcare, retail, supply chain, and technology
                  sectors transform their business models, adopt AI-first
                  strategies, and unlock new levels of efficiency and growth.
                </p>
              </div>
              <div className="lg:w-[459px] xl:w-[614px] flex flex-col gap-[34px]">
                <div className=" flex flex-col gap-[18px] ">
                  <div className=" flex flex-row gap-[22px] w-full ">
                    <span
                      className={`bg-[#665EE9] h-[34px] transition-all w-[6px] flex-shrink-0`}
                      style={{
                        clipPath: "polygon(0 0, 100% 34%, 100% 100%, 0 66%)",
                      }}
                    ></span>
                    <div className="font-medium text-[26px] leading-[120%] tracking-[0%]">
                      Our story began with a simple realization
                    </div>
                  </div>
                  <div className="font-normal text-lg leading-[140%] tracking-[0%] text-[#CFD0D3]">
                    Enterprises struggle to keep pace with technological
                    advancements. While AI and automation were revolutionizing
                    industries, many businesses were still grappling with
                    outdated systems, siloed data, and inefficient workflows.
                  </div>
                </div>
                <div className=" flex w-full border-t border-t-[#23262F] "></div>

                <div className=" flex flex-col gap-[18px] ">
                  <div className=" flex flex-row gap-[22px] w-full">
                    <span
                      className="bg-[#665EE9] h-[34px] transition-all w-[6px] flex-shrink-0"
                      style={{
                        clipPath: "polygon(0 0, 100% 34%, 100% 100%, 0 66%)",
                      }}
                    ></span>
                    <div className="font-medium text-[26px] leading-[120%] tracking-[0%]">
                      ReKnew was founded to bridge this gap, creating AI-powered
                      solutions that
                    </div>
                  </div>
                  <ul className=" list-disc pl-5 font-normal text-lg leading-[140%] tracking-[0%] space-y-2 text-[#CFD0D3]">
                    <li>Enhance decision-making with real-time insights.</li>
                    <li>Optimize workflows through intelligent automation.</li>
                    <li>
                      Unify data ecosystems for smarter business operations.
                    </li>
                    <li>
                      Enable businesses to react faster and scale efficiently.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center flex-row w-[211px] h-[46px] gap-[6px] px-[20px] py-[12px] rounded-[8px] border border-[#FFFFFF5C] hover:cursor-pointer ">
              <span className="font-semibold text-base leading-[140%] tracking-[0%]">
                Meet Our Experts
              </span>
              <ArrowRight width={18} height={18} />
            </div>
          </div>
        </div>

        {/* What Drives Us */}

        <div className="flex flex-row justify-center w-full h-full py-[50px]  md:py-[100px]">
          <div className="justify-center flex w-[360px] md:w-[730px] flex-col xl:flex-row lg:w-[950px] xl:w-[1280px] gap-8 xl:gap-[52px]">
            <div className="flex flex-col w-full items-center xl:w-[467px] gap-12">
              <div className="flex flex-col gap-6 ">
                <div className="font-semibold text-[44px] leading-[120%] tracking-[0%]">
                  What Drives Us?
                </div>
              </div>
              <div className="flex flex-row justify-center w-[276px] h-[46px] gap-[6px] px-[20px] py-[12px] rounded-[8px] border border-[#FFFFFF5C] hover:cursor-pointer ">
                <span className="font-semibold text-base leading-[140%] tracking-[0%]">
                  Discover Our AI Solutions
                </span>
                <ArrowRight width={18} height={18} />
              </div>
            </div>
            <div className="flex w-full xl:w-[761px] justify-center xl:justify-start">
              <div className="flex flex-col h-fit gap-2 md:h-[528px] items-center md:relative w-full md:max-w-[700px]">
                <div
                  className="flex flex-col w-[300px] lg:w-[364.5px] h-[223px] md:absolute top-[305px] left-[370px] lg:left-[396px] gap-[12px] rounded-[16px] border border-[rgba(35,38,47,1)] p-[32px]  shadow-[inset_0px_1px_1px_1px_rgba(199,211,234,0.12),inset_0px_24px_48px_1px_rgba(199,211,234,0.05)]"
                  style={{
                    backgroundImage: `url(${bggrid})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: 12,
                    height: "223px",
                  }}
                >
                  <h3 className="font-semibold text-lg leading-[140%] tracking-[0%] text-[#665EE9] z-10">
                    Scalability & Future-Readiness
                  </h3>
                  <p className="font-medium text-base leading-[140%] tracking-[0%] text-[#CFD0D3] z-10">
                    We don't just solve today's problems-we future-proof your
                    business with Al-driven transformation strategies.
                  </p>

                  <div className="md:absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-full w-full" />
                  <div className="md:absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,1)] to-transparent h-[2px] w-3/4 " />
                  <div className="md:absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233, 1)] to-transparent h-[3px] w-3/4" />
                  <div className="md:absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-[3px]  w-full" />

                  <div className="md:absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.2)] [mask-image:radial-gradient(350px_200px_at_top,transparent_25%,white)] rounded-2xl"></div>
                </div>
                <div
                  className="flex flex-col w-[300px] lg:w-[364.5px] h-[223px] md:absolute top-[255px] left-[35px] lg:left-0 gap-[12px] rounded-[16px] border border-[rgba(35,38,47,1)] p-[32px]  shadow-[inset_0px_1px_1px_1px_rgba(199,211,234,0.12),inset_0px_24px_48px_1px_rgba(199,211,234,0.05)]"
                  style={{
                    backgroundImage: `url(${bggrid})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: 12,
                  }}
                >
                  <h3 className="font-semibold text-lg leading-[140%] tracking-[0%] text-[#665EE9] z-10">
                    Data-Driven Decisions
                  </h3>
                  <p className="font-medium text-base leading-[140%] tracking-[0%] text-[#CFD0D3] z-10">
                    We help enterprises turn fragmented data into actionable
                    insights, fueling growth and smarter decision-making.
                  </p>

                  <div className="md:absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-full w-full" />
                  <div className="md:absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,1)] to-transparent h-[2px] w-3/4 " />
                  <div className="md:absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233, 1)] to-transparent h-[3px] w-3/4" />
                  <div className="md:absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-[3px]  w-full" />

                  <div className="md:absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.2)] [mask-image:radial-gradient(350px_200px_at_top,transparent_25%,white)] rounded-2xl"></div>
                </div>
                <div
                  className="flex flex-col w-[300px] lg:w-[364.5px] h-[223px] md:absolute top-[50px] left-[370px] lg:left-[396px] gap-[12px] rounded-[16px] border border-[rgba(35,38,47,1)] p-[32px]  shadow-[inset_0px_1px_1px_1px_rgba(199,211,234,0.12),inset_0px_24px_48px_1px_rgba(199,211,234,0.05)]"
                  style={{
                    backgroundImage: `url(${bggrid})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: 12,
                  }}
                >
                  <h3 className="font-semibold text-lg leading-[140%] tracking-[0%] text-[#665EE9] z-10">
                    Customer-Centricity
                  </h3>
                  <p className="font-medium text-base leading-[140%] tracking-[0%] text-[#CFD0D3] z-10">
                    Our solutions are designed to solve real business challenges
                    and enhance operational excellence.
                  </p>

                  <div className="md:absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-full w-full" />
                  <div className="md:absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,1)] to-transparent h-[2px] w-3/4 " />
                  <div className="md:absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233, 1)] to-transparent h-[3px] w-3/4" />
                  <div className="md:absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-[3px]  w-full" />

                  <div className="md:absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.2)] [mask-image:radial-gradient(350px_200px_at_top,transparent_25%,white)] rounded-2xl"></div>
                </div>
                <div
                  className="flex flex-col w-[300px] lg:w-[364.5px] h-[223px] md:absolute top-0 left-[35px] lg:left-0 gap-[12px] rounded-[16px] border border-[rgba(35,38,47,1)] p-[32px]  shadow-[inset_0px_1px_1px_1px_rgba(199,211,234,0.12),inset_0px_24px_48px_1px_rgba(199,211,234,0.05)]"
                  style={{
                    backgroundImage: `url(${bggrid})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: 12,
                  }}
                >
                  <h3 className="font-semibold text-lg leading-[140%] tracking-[0%] text-[#665EE9] z-10">
                    Innovation
                  </h3>
                  <p className="font-medium text-base leading-[140%] tracking-[0%] text-[#CFD0D3] z-10">
                    We are continuously pushing boundaries, exploring the latest
                    AI technologies to drive intelligent automation and business
                    efficiency.
                  </p>

                  <div className="md:absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-full w-full" />
                  <div className="md:absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,1)] to-transparent h-[2px] w-3/4 " />
                  <div className="md:absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,1)] to-transparent h-[3px] w-3/4" />
                  <div className="md:absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-[rgba(102,94,233,0.2)] to-transparent h-[3px]  w-full" />

                  <div className="md:absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.2)] [mask-image:radial-gradient(350px_200px_at_top,transparent_25%,white)] rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Let’s Talk */}
        <Consultation
          title="Join Us in Shape the Future"
          tag_one="At ReKnew, we aim to redefine enterprises by integrating AI, automation, and intelligence into business."
          tag_two="Ready to future-proof and unlock your enterprise’s potential?"
          btn_name="Get in Touch with Us"
        />
        <Footer />
      </div>
    </>
  );
}
