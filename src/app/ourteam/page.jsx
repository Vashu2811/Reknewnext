'use client';
import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import color from '../../../public/assets/logo-left-2.webp';
import { Linkedin, Twitter, Mail, Users2, Lightbulb, Target, Workflow, Brain, Award } from 'lucide-react';
import Section from '../../components/Section';
import Consultation from '../../components/Consultation';
import Murlisir from '../../../public/assets/MurliSir.jpg';
import Image from 'next/image';

const OurTeam = () => {
    useEffect(() => {
        document.title = 'Our Team | ReKnew';
    }, []);

    
const teamMembers = [
    {
      name: 'Murali sajja',
      role: 'Senior Director',
      image: Murlisir,
      bio: 'With 30 years of experience, Murali specializes in Consulting, Technology, Automation, Integration, ERP, Automotive, and Logistics. He brings strong technical depth and business acumen to enterprise transformation',
      social: {
        linkedin: 'https://www.linkedin.com/in/murali-sajja/',
        twitter: 'https://twitter.com/sarahchen',
        email: 'sarah.chen@reknew.ai'
      }
    },
    {
      name: "Les D'Souza",
      role: 'Head of Data Engineering',
      image: 'https://th.bing.com/th/id/OIP.wtAKxkGGXN9VYFm4BSlslQHaHa?rs=1&pid=ImgDetMain',
      bio: 'Les brings 30 years of expertise in Financial Services, Technology, Data & Analytics, AI & Gen AI, Digital Transformation, and Innovation. He excels at driving strategy and delivering modern enterprise solutions',
      social: {
        linkedin: 'https://linkedin.com/in/mrodriguez',
        twitter: 'https://twitter.com/mrodriguez',
        email: 'michael.rodriguez@reknew.ai'
      }
    },
    {
      name: 'Dr. Lisa Wang',
      role: 'Director of AI Research',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&h=500&auto=format&fit=crop',
      bio: 'Les brings 30 years of expertise in Financial Services, Technology, Data & Analytics, AI & Gen AI, Digital Transformation, and Innovation. He excels at driving strategy and delivering modern enterprise solutions',
      social: {
        linkedin: 'https://linkedin.com/in/lisawang',
        twitter: 'https://twitter.com/lisawang',
        email: 'lisa.wang@reknew.ai'
      }
    }
  ];
    const values = [
        {
            icon: Brain,
            title: 'Innovation First',
            description: 'Pushing the boundaries of AI technology to create transformative solutions'
        },
        {
            icon: Target,
            title: 'Client Success',
            description: 'Dedicated to delivering measurable results and exceptional value'
        },
        {
            icon: Users2,
            title: 'Collaborative Spirit',
            description: 'Working together to achieve breakthrough innovations'
        },
        {
            icon: Lightbulb,
            title: 'Continuous Learning',
            description: 'Always evolving and adapting to stay ahead in AI technology'
        },
        {
            icon: Workflow,
            title: 'Excellence in Execution',
            description: 'Delivering high-quality solutions with precision and expertise'
        },
        {
            icon: Award,
            title: 'Ethical Leadership',
            description: 'Committed to responsible AI development and implementation'
        }
    ];

    const gradientText = (
        <div className="text-[#232323]">
            Join Our <span className="text-highlight pr-2">Team</span>of Innovators
        </div>
    );
    //  const [scrollProgress, setScrollProgress] = useState(0);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const handleGetStarted = () => {
        console.log('Get Started button clicked');
    };

    const handleLearnMore = () => {
        console.log('Learn More button clicked');
    };

    return (
        <div className="text-[#232323] w-full min-h-screen overflow-x-hidden">
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF512F] to-[#FF8A63] z-50" style={{ scaleX }} />
            <section className="w-full relative text-[#374151] min-h-screen body65 md:h-[760px] h-[550px] flex justify-center text-center p-0 m-0 overflow-hidden">
                <Image
                    src={color}
                    alt="color-sharp"
                    className="absolute w-[200px] top-36 md:top-60 right-0 lg:w-[350px] lg:top-20 lg:right-40"
                    style={{ zIndex: 1 }}
                />
                <div className="flex flex-col items-center justify-center w-[1280px] gap-9">
                    <Section
                        rotatingWords={['Meet', 'Join', 'Learn from']}
                        headingStart="The Team Behind"
                        headingEnd="ReKnew.AI"
                        description="A passionate crew of AI engineers, behavioral scientists, and visionaries working toward inclusive hiring."
                        primaryButton={{
                            text: 'Get Started',
                            onClick: () => handleGetStarted()
                        }}
                        secondaryButton={{
                            text: 'Learn More',
                            onClick: () => handleLearnMore()
                        }}
                    />
                </div>
            </section>

            {/* Hero Section */}
            <div className="relative bg-gradient-to-b from-[#FFF8F6] to-white py-20">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 border border-[#FF512F]/20 mb-6">
                            <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">Meet Our Team</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            The Minds Behind{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-[#FF512F] pl-2">ReKnew AI</span>
                                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5c30-5 70-5 100 0" stroke="#FF512F" strokeWidth="2" fill="none" className="transition-all duration-300" />
                                </svg>
                            </span>
                            {/* <span className="text-highlight">ReKnew AI</span> */}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            A diverse team of AI experts, innovators, and problem solvers dedicated to transforming enterprises
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Team Members Section */}
            <section className="py-20 bg-gradient-to-br from-[#FFF8F6] via-white to-[#FFF4F0] relative">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,#FF512F08 1px,transparent 1px),linear-gradient(-45deg,#FF8A6308 1px,transparent 1px)] bg-[size:40px_40px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/50"></div>
                </div>

                <div className="container mx-auto px-6 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <motion.div
                             
                                key={index}
                                className="group relative bg-white rounded-2xl overflow-hidden
                                    border border-[#FF512F]/10 hover:border-[#FF512F]/30
                                    transition-all duration-300 hover:-translate-y-1
                                    hover:shadow-[0_20px_50px_-15px_rgba(255,81,47,0.15)]">
                                <div className="relative overflow-hidden">
                                    <div className="aspect-square">
                                        <Image
                                        width={100}
                                        height={100}
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#232323] to-[#232323] group-hover:from-[#FF512F] group-hover:to-[#FF8A63] bg-clip-text text-transparent transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#FF512F] font-medium mt-1">{member.role}</p>
                                    <p className="text-gray-600 mt-4">{member.bio}</p>

                                    <div className="flex  justify-end gap-4 mt-6">
                                        {Object.entries(member.social).map(([platform, link], idx) => {
                                            const Icon = platform === 'linkedin' ? Linkedin : platform === 'twitter' ? Twitter : Mail;
                                            return (
                                                <a
                                                    key={idx}
                                                    href={link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-lg bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10
                                                        hover:from-[#FF512F]/20 hover:to-[#FF8A63]/20
                                                        transition-all duration-300 transform hover:scale-110">
                                                    <Icon className="w-5 h-5 text-[#FF512F]" />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 border border-[#FF512F]/20 mb-6">
                                <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">Join Our Team</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-6">Data Engineering Excellence</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-[#FF512F]">Data Engineering Team</h3>
                                <p className="text-gray-600">
                                    Our Data Engineering team is at the forefront of building enterprise-scale AI infrastructure. We specialize in:
                                </p>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#FF512F] rounded-full"></div>
                                        Large-scale data pipeline development
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#FF512F] rounded-full"></div>
                                        Real-time data processing systems
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#FF512F] rounded-full"></div>
                                        Cloud-native architecture design
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-[#FF512F]">Training Program</h3>
                                <p className="text-gray-600">We invest heavily in developing AI talent through our comprehensive training program:</p>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#FF512F] rounded-full"></div>
                                        6-month intensive AI engineering bootcamp
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#FF512F] rounded-full"></div>
                                        Mentorship from senior AI researchers
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#FF512F] rounded-full"></div>
                                        Hands-on experience with real-world AI projects
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gradient-to-br from-white via-[#FFF8F6] to-white relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-[#FF512F]/10 to-[#FF8A63]/10 border border-[#FF512F]/20 mb-6">
                            <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent font-medium">Our Values</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-6">
                            Principles that Drive Our{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-[#FF512F] pl-2">Innovation</span>
                                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5c30-5 70-5 100 0" stroke="#FF512F" strokeWidth="2" fill="none" className="transition-all duration-300" />
                                </svg>
                            </span>
                            {/* <span className="text-highlight">Innovation</span> */}
                        </h2>
                        <p className="text-xl text-gray-600">Our core values shape everything we do, from development to delivery</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="group p-8 bg-white rounded-xl
                                    border border-[#FF512F]/10 hover:border-[#FF512F]/30
                                    transition-all duration-300 hover:-translate-y-1
                                    hover:shadow-[0_20px_50px_-15px_rgba(255,81,47,0.15)]">
                                <div
                                    className="mb-6 p-4 rounded-xl bg-gradient-to-br from-[#FF512F]/10 to-[#FF8A63]/10 w-fit
                                    transform group-hover:scale-110 transition-transform duration-300">
                                    <value.icon className="w-6 h-6 text-[#FF512F]" />
                                </div>
                                <h3
                                    className="text-xl font-bold mb-4 bg-gradient-to-r from-[#232323] to-[#232323] 
                                    group-hover:from-[#FF512F] group-hover:to-[#FF8A63] bg-clip-text text-transparent">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consultation Section */}
            <div className="py-[100px]">
                <Consultation
                    title={gradientText}
                    tag_one="Be part of a team that's shaping the future of enterprise AI. Explore opportunities to make an impact."
                    btn_name="View Open Positions"
                />
            </div>
        </div>
    );
};

export default OurTeam;
