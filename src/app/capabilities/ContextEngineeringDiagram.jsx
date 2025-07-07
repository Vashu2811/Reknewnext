import HexagonWhite from '../../../public/assets/white-hexagon.png';
import HexagonBlack from '../../../public/assets/dark-hexagon.png';
import { useTheme } from '@/Context/ThemeContext';
import Image from 'next/image';

export default function ContextEngineeringDiagram() {
    const { theme } = useTheme();
    return (
        <div className="min-h-screen py-32 max-w-[1500px] px-4 mx-auto relative text-slate-800 overflow-hidden">
            <header className="mb-8 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#374151] dark:text-gray-100">
                    Context Engineering<sup>™</sup> for
                    <span className="relative inline-block">
                        <span className="relative inline-block">
                                    <span className="relative z-10 text-[#FF512F] dark:text-[#FF512F] px-2">Smarter AI</span>
                                    <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5c30-6 70-5 100 0" stroke="#FF512F" strokeWidth="2" fill="none" className="transition-all duration-300" />
                                    </svg>
                                </span>
                    </span>
                    Systems
                </h2>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 text-center mx-auto max-w-6xl">
                    Transforming raw organizational knowledge into easily accessible, semantically rich, and actionable context empowers AI systems to
                    understand, reason, and perform tasks with greater accuracy and efficiency across diverse applications
                </p>
            </header>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-[35%] flex justify-center items-center">
                    <div>
                        {' '}
                        <Image src={theme === 'dark' ? HexagonWhite : HexagonBlack} alt="ReKnew logo" className="" />
                    </div>
                </div>

                <div className="md:w-[65%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 dark:text-gray-300">
                    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl transition-all duration-500 overflow-hidden p-4 shadow">
                        <h3 className="text-[#FF512F] text-lg md:text-xl font-medium mb-2">Knowledge Architecture</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2">
                                <span className="text-[#FF512F] text-2xl">•</span>
                                <span className="text-base md:text-lg">
                                    Mapping and organizing existing enterprise data sources (documents, databases, communications, process documentation)
                                </span>
                            </li>
                            <li className="flex gap-2">
                               <span className="text-[#FF512F] text-2xl">•</span>
                                <span className="text-base md:text-lg">Creating taxonomies and relationships between different knowledge assets</span>
                            </li>
                            <li className="flex gap-2">
                               <span className="text-[#FF512F] text-2xl">•</span>
                                <span className="text-base md:text-lg">Identifying gaps and redundancies in organizational knowledge</span>
                            </li>
                        </ul>
                    </div>

                    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl transition-all duration-500 overflow-hidden p-4 shadow">
                        <h3 className="text-[#FF512F] text-lg md:text-xl font-medium mb-2">Data Preparation & Enhancement</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2">
                               <span className="text-[#FF512F] text-2xl">•</span>
                                <span className="text-base md:text-lg">Cleaning and standardizing data formats</span>
                            </li>
                            <li className="flex gap-2">
                               <span className="text-[#FF512F] text-2xl">•</span>
                                <span className="text-base md:text-lg">Adding metadata and semantic annotations</span>
                            </li>
                            <li className="flex gap-2">
                               <span className="text-[#FF512F] text-2xl">•</span>
                                <span className="text-base md:text-lg">Creating knowledge graphs to represent relationships</span>
                            </li>
                            <li className="flex gap-2">
                               <span className="text-[#FF512F] text-2xl">•</span>
                                <span className="text-base md:text-lg">Developing verification and validation processes</span>
                            </li>
                        </ul>
                    </div>

                    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl transition-all duration-500 overflow-hidden p-4 shadow">
                        <h3 className="text-[#FF512F] text-lg md:text-xl font-medium mb-2">Access Layer Design</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2">
                               <span className="text-[#FF512F] text-2xl">•</span>
                                <span className="text-base md:text-lg">Building APIs and interfaces for AI systems to access knowledge</span>
                            </li>
                            <li className="flex gap-2">
                               <span className="text-[#FF512F] text-2xl">•</span>
                                <span className="text-base md:text-lg">Implementing security and compliance controls</span>
                            </li>
                            <li className="flex gap-2">
                               <span className="text-[#FF512F] text-2xl">•</span>
                                <span className="text-base md:text-lg">Creating caching and optimization strategies</span>
                            </li>
                            <li className="flex gap-2">
                               <span className="text-[#FF512F] text-2xl">•</span>
                                <span className="text-base md:text-lg">Designing feedback loops to improve knowledge quality</span>
                            </li>
                        </ul>
                    </div>

                    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl transition-all duration-500 overflow-hidden p-4 shadow">
                        <h3 className="text-[#FF512F] text-lg md:text-xl font-medium mb-2">Context-Aware Integration</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2">
                               <span className="text-[#FF512F] text-2xl">•</span>
                                <span className="text-base md:text-lg">Developing prompting strategies to effectively utilize organizational context</span>
                            </li>
                            <li className="flex gap-2">
                               <span className="text-[#FF512F] text-2xl">•</span>
                                <span className="text-base md:text-lg">Creating evaluation frameworks for context relevance</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-[#FF512F] text-2xl">•</span>
                                <span className="text-base md:text-lg">Building processes to maintain context freshness</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
