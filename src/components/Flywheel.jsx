'use client';
import React, { useRef } from 'react';
import { Database, Network, Sparkles, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';

function Flywheel() {
    const cardRefs = useRef([]);

    // const duration = 10;
    // const numPaths = 8;
    const nodes = [
        {
            title: 'Data',
            icon: <Database className="w-6 h-6" />,
            description: 'Incomplete stories and fragmentation',
            solution: 'Data Curation',
            position: 'top-[2%] left-1/2 -translate-x-1/2'
        },
        {
            title: 'AI',
            icon: <Sparkles className="w-6 h-6" />,
            description: 'Reached human limits',
            solution: 'Intelligent Automation',
            position: 'top-[40%] -right-[24%] -translate-y-1/2'
        },
        {
            title: 'Workflows',
            icon: <Workflow className="w-6 h-6" />,
            description: 'Routine human tasks and complex processes',
            solution: 'Efficient Workflows',
            position: 'bottom-[15%] left-1/2 -translate-x-1/2'
        },
        {
            title: 'Integration',
            icon: <Network className="w-6 h-6" />,
            description: 'Disconnected systems and scaling hurdles',
            solution: 'Cloud Connect',
            position: 'top-[40%] -left-[25%] -translate-y-1/2'
        }
    ];

    return (
        <div className="flex flex-col min-h-screen px-4 sm:px-6 lg:px-8 pt-16">
            <div className="flex flex-col gap-8 max-w-6xl mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center text-[#374151] leading-snug">
                    <span>The </span>
                    <span>Flywheel </span>
                    <span>Can Be </span>
                    <span className="relative inline-block">
                        <span className="relative z-10 text-[#FF512F] pl-2">Re-Engineered</span>
                        <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5c30-5 70-5 100 0" stroke="#FF512F" strokeWidth="2" fill="none" className="transition-all duration-300" />
                        </svg>
                    </span>
                    {/* <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent">Re-Engineered</span> */}
                    <span>!</span>
                </h1>

                {/* Mobile Layout */}
                <div className="grid grid-cols-1 sm:hidden gap-6">
                    {nodes.map((node, i) => (
                        <div key={i} className="flex flex-col items-center gap-4 text-center">
                            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex items-center justify-center">
                                <div className="relative p-4 rounded-full bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 shadow-lg">{node.icon}</div>
                            </motion.div>
                            <div className="relative w-full rounded-lg overflow-hidden backdrop-blur-sm border border-[#FF512F]/20 bg-gradient-to-br from-white/90 via-white/90 to-white/80 shadow-md">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F05_1px,transparent_1px),linear-gradient(-45deg,#FF8A6305_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#FF512F]/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative p-4 space-y-2">
                                    <p className="text-sm font-semibold bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent">
                                        {node.solution}
                                    </p>
                                    <p className="text-[#374151]/70 text-sm leading-relaxed">{node.description}</p>
                                </div>
                            </div>
                            <h3 className="text-md font-semibold text-[#374151]">{node.title}</h3>
                        </div>
                    ))}
                </div>

                {/* Desktop Flywheel */}
                <div className="relative w-full aspect-square  mx-auto hidden sm:flex justify-center items-center flex-wrap">
                    {/* Center Text */}
                    <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <p className="p-1 md:p-1 lg:p-4 text-base sm:text-lg font-semibold text-[#374151] shadow-lg rounded-lg border border-[#FF512F]/30 bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10">
                            Re-Engineered
                            <br />
                            the Flywheel
                        </p>
                    </div>
                    {/* <svg className="absolute left-0 top-0 w-[1500px] h-[1500px]" viewBox="0 0 800 800">
             
              <path
                d="M250,250 m-200,0 a200,200 0 1,1 400,0 a200,200 0 1,1 -400,0"
                fill="none"
                stroke="rgba(255, 81, 47, 0.3)"
                strokeWidth="3"
              />
              {Array.from({ length: numPaths }).map((_, index) => (
                <path
                  key={index}
                  d="M-6,-2 L0,2 L6,-2 M0,2 L0,-10"
                  fill="none"
                  stroke="rgba(249, 115, 22, 0.7)"
                  strokeWidth="2"
                  transform-origin="0,0"
                  className="-rotate-90"
                >
                  <animateMotion
                    dur={`${duration}s`}
                    repeatCount="indefinite"
                    rotate="auto"
                    begin={`${(index * duration) / numPaths}s`} // Staggered start times
                  >
                    <mpath href="#motionPath" />
                  </animateMotion>
                </path>
              ))}

            
              <path
                id="motionPath"
                d="M250,250 m-200,0 a200,200 0 1,1 400,0 a200,200 0 1,1 -400,0"
                fill="none"
                stroke="none"
              />
            </svg> */}
                   <div className="hidden md:hidden lg:flex justify-center items-center xl:flex">
                     <div className="absolute bottom-[400px] right-[0px]  rotate-[-270deg] ">
                        <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            
                            <path
                                d="M 20,180 A 150,150 0 0,1 180,20"
                                stroke="#f4c06e"
                                stroke-width="2"
                                fill="transparent"
                                stroke-dasharray="5,5"
                                marker-end="url(#arrowhead)"
                            />
                            <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
                        </svg>
                    </div>
                    <div className="absolute bottom-[200px] right-[0px]  rotate-[180deg] ">
                        <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            
                            <path
                                d="M 20,180 A 150,150 0 0,1 180,20"
                                stroke="#f4c06e"
                                stroke-width="2"
                                fill="transparent"
                                stroke-dasharray="5,5"
                                marker-end="url(#arrowhead)"
                            />
                            <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
                        </svg>
                    </div>

                    <div className="absolute bottom-[400px] left-[0px]  rotate-[360deg] ">
                        <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                          
                            <path
                                d="M 20,180 A 150,150 0 0,1 180,20"
                                stroke="#f4c06e"
                                stroke-width="2"
                                fill="transparent"
                                stroke-dasharray="5,5"
                                marker-end="url(#arrowhead)"
                            />
                            <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
                        </svg>
                    </div>
                    <div className="absolute bottom-[200px] left-[0px]  rotate-[270deg] ">
                        <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                           
                            <path
                                d="M 20,180 A 150,150 0 0,1 180,20"
                                stroke="#f4c06e"
                                stroke-width="2"
                                fill="transparent"
                                stroke-dasharray="5,5"
                                marker-end="url(#arrowhead)"
                            />
                            <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
                        </svg>
                    </div>
                   </div>
                    {/* Nodes */}
                    {nodes.map((node, i) => (
                        <div key={i} ref={(el) => (cardRefs.current[i] = el)} className={`absolute ${node.position} flex flex-col items-center gap-4`}>
                            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex items-center justify-center">
                                <div className="relative p-4 rounded-full bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 shadow-lg">{node.icon}</div>
                            </motion.div>

                            <div className="relative w-[280px] rounded-lg overflow-hidden backdrop-blur-sm border border-[#FF512F]/20 bg-gradient-to-br from-white/90 via-white/90 to-white/80 shadow-md">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F05_1px,transparent_1px),linear-gradient(-45deg,#FF8A6305_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#FF512F]/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative p-4 space-y-2">
                                    <p className="text-sm font-semibold bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent">
                                        {node.solution}
                                    </p>
                                    <p className="text-[#374151]/70 text-sm leading-relaxed">{node.description}</p>
                                </div>
                            </div>

                            <h3 className="text-md sm:text-lg font-semibold text-[#374151] text-center">{node.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Flywheel;

// import React, { useRef } from 'react';
// import { Database, Network, Sparkles, Workflow } from 'lucide-react';
// import { motion } from 'framer-motion';

// function Flywheel() {

//   const cardRefs = useRef([]);
//   const duration = 10;
//   const numPaths = 8;

//   const nodes = [
//     {
//       title: 'Data',
//       icon: <Database className="w-6 h-6 " />,
//       description: 'Incomplete stories and fragmentation',
//       solution: 'Data Curation',
//       position: '-top-[2%] left-1/2 -translate-x-1/2'
//     },
//     {
//       title: 'AI',
//       icon: <Sparkles className="w-6 h-6 " />,
//       description: 'Reached human limits',
//       solution: 'Intelligent Automation',
//       position: 'top-[40%] -right-[24%] -translate-y-1/2'
//     },
//     {
//       title: 'Workflows',
//       icon: <Workflow className="w-6 h-6 " />,
//       description: 'Routine human tasks and complex processes',
//       solution: 'Efficient Workflows',
//       position: 'bottom-[15%] left-1/2 -translate-x-1/2'
//     },
//     {
//       title: 'Integration',
//       icon: <Network className="w-6 h-6 " />,
//       description: 'Disconnected systems and scaling hurdles',
//       solution: 'Cloud Connect',
//       position: 'top-[40%] -left-[25%] -translate-y-1/2'
//     },
//   ];

//   return (
//     <div className='flex flex-col'>
//       <div className="min-h-screen p-8 mt-16">
//         <div className="flex flex-col gap-5 max-w-6xl mx-auto">
//           <h1 className="text-5xl font-medium text-center text-[#374151]">
//             <span>The </span>
//             <span>Flywheel </span>
//             <span>Can Be </span>
//             <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent">Re-Engineered</span>
//             <span>!</span>
//           </h1>

//           <div className="relative w-full aspect-square max-w-4xl justify-center items-center mx-auto p-20">
//             <div className="absolute top-[36%] left-[43%]">
//               <p className="p-3 text-lg font-medium text-center text-[#374151] shadow-md rounded-lg border border-[#FF512F]/20 bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10">
//                 Re-Engineered
//                 <br />
//                 the Flywheel
//               </p>
//             </div>
//             <svg className="absolute left-[18%] top-[10%] w-full h-full" viewBox="0 0 800 800">
//               {/* Circular Path */}
//               <path
//                 d="M250,250 m-200,0 a200,200 0 1,1 400,0 a200,200 0 1,1 -400,0"
//                 fill="none"
//                 stroke="rgba(255, 81, 47, 0.3)"
//                 strokeWidth="3"
//               />
//               {Array.from({ length: numPaths }).map((_, index) => (
//                 <path
//                   key={index}
//                   d="M-6,-2 L0,2 L6,-2 M0,2 L0,-10"
//                   fill="none"
//                   stroke="rgba(249, 115, 22, 0.7)"
//                   strokeWidth="2"
//                   transform-origin="0,0"
//                   className="-rotate-90"
//                 >
//                   <animateMotion
//                     dur={`${duration}s`}
//                     repeatCount="indefinite"
//                     rotate="auto"
//                     begin={`${(index * duration) / numPaths}s`} // Staggered start times
//                   >
//                     <mpath href="#motionPath" />
//                   </animateMotion>
//                 </path>
//               ))}

//               {/* Motion Path */}
//               <path
//                 id="motionPath"
//                 d="M250,250 m-200,0 a200,200 0 1,1 400,0 a200,200 0 1,1 -400,0"
//                 fill="none"
//                 stroke="none"
//               />
//             </svg>

//             {nodes.map((node, i) => (
//               <div
//                 key={i}
//                 ref={el => cardRefs.current[i] = el}
//                 className={`absolute ${node.position} p-4 transition-all duration-500 z-30`}
//               >
//                 <div className={`flex justify-center items-center gap-6
//                   ${i === 0
//                     ? 'flex-col'
//                     : i === 1
//                       ? 'flex-row-reverse'
//                       : i === 3
//                         ? 'flex-row'
//                         : 'flex-col-reverse'}`}>
//                   <div className='group hover:-translate-y-1 transition-all duration-500'>
//                     <div className='relative w-[320px] rounded-xl overflow-hidden backdrop-blur-sm
//                       border border-[#FF512F]/20 hover:border-[#FF512F]/30
//                       bg-gradient-to-br from-white/90 via-white/90 to-white/80
//                       shadow-[0_8px_30px_rgba(255,81,47,0.12)] hover:shadow-[0_12px_40px_rgba(255,81,47,0.18)]
//                       transition-all duration-500'
//                     >
//                       <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F05_1px,transparent_1px),linear-gradient(-45deg,#FF8A6305_1px,transparent_1px)] bg-[size:20px_20px]"></div>
//                       <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#FF512F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                       <div className="relative p-4 space-y-2">
//                         <p className="text-sm font-semibold bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent">
//                           {node.solution}
//                         </p>
//                         <p className="text-[#374151]/70 leading-relaxed text-[14px]">
//                           {node.description}
//                         </p>
//                       </div>
//                       <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF512F]/40 to-[#FF8A63]/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
//                     </div>
//                   </div>

//                   <motion.div
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                     className={`flex ${
//                       i === 0 ? '' // For top node (Data) - pointing up
//                       : i === 1 ? '-rotate-90' // For right node (AI) - pointing right
//                       : i === 2 ? 'rotate-180' // For bottom node (Workflows) - pointing down
//                       : 'rotate-90' // For left node (Integration) - pointing left
//                     }`}
//                   >
//                     <svg width="40" stroke='5' height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
//                       <defs>
//                         <linearGradient id={`arrowGradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
//                           <stop offset="0%" stopColor="#FF512F" />
//                           <stop offset="100%" stopColor="#FF8A63" />
//                         </linearGradient>
//                         <marker
//                           id={`arrowhead-${i}`}
//                           viewBox="0 0 20 20"
//                           refX="10"
//                           refY="10"
//                           markerWidth="20"  // Increased from 6
//                           markerHeight="20" // Increased from 6
//                           orient="auto"
//                         >
//                           <path
//                             d="M 2 10 L 18 2 L 18 18 Z" // Adjusted path for larger arrow
//                             fill={`url(#arrowGradient-${i})`}
//                           />
//                         </marker>
//                       </defs>
//                       <line
//                         x1={i === 0 ? "20" : // Top node (Data) - pointing up
//                             i === 1 ? "5" : // Right node (AI) - pointing right
//                             i === 2 ? "20" : // Bottom node (Workflows) - pointing down
//                             "35"} // Left node (Integration) - pointing left
//                         y1={i === 0 ? "35" : // Top node
//                             i === 1 ? "20" : // Right node
//                             i === 2 ? "5" : // Bottom node
//                             "20"} // Left node
//                         x2={i === 0 ? "20" : // Top node
//                             i === 1 ? "35" : // Right node
//                             i === 2 ? "20" : // Bottom node
//                             "5"} // Left node
//                         y2={i === 0 ? "5" : // Top node
//                             i === 1 ? "20" : // Right node
//                             i === 2 ? "35" : // Bottom node
//                             "20"} // Left node
//                         stroke={`url(#arrowGradient-${i})`}
//                         strokeWidth="2"
//                         strokeDasharray="5,5"
//                         markerEnd={`url(#arrowhead-${i})`}
//                       />
//                       <animate attributeName="strokeDashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
//                     </svg>
//                   </motion.div>

//                   <div className='group box-border flex-col flex justify-center items-center rounded-full w-36 p-3
//                     from-[#FF512F]/5 to-[#FF8A63]/5
//                     border border-[#FF512F]/20 hover:border-[#FF512F]/30
//                     hover:shadow-[0_8px_30px_rgba(255,81,47,0.12)]
//                     transition-all duration-500'
//                   >
//                     <div className="relative p-3 rounded-xl bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10
//                       group-hover:from-[#FF512F]/20 group-hover:to-[#FF8A63]/20 transition-all duration-500"
//                     >
//                       {node.icon}
//                     </div>
//                     <h3 className="text-xl font-semibold text-[#374151] group-hover:bg-gradient-to-r
//                       group-hover:from-[#FF512F] group-hover:to-[#FF8A63]
//                       group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
//                     >
//                       {node.title}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Flywheel;
