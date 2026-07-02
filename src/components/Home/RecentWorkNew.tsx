"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@components/ui/GlassCard";


// Academic & Learning Experience — replacing fake company experience
const experiences = [
    {
        id: "coursework",
        company: "B.Tech Computer Engineering",
        role: "Student @ Birla Vishvakarma Mahavidyalaya",
        period: "2022 – 2026 (Expected)",
        location: "Gujarat, India",
        description: "Pursuing a Bachelor of Technology in Computer Engineering at BVM, one of India's respected engineering institutions. Building core theoretical and practical skills across the full computer science spectrum.",
        details: [
            "Studying core subjects: Database Systems, Operating Systems, Computer Networks, and Software Engineering.",
            "Applying theoretical knowledge in lab sessions involving C programming, Java OOP, and web technologies.",
            "Developing problem-solving skills through Data Structures & Algorithms coursework.",
            "Participating in collaborative academic projects simulating real software development workflows.",
            "Exploring Artificial Intelligence and Cloud Computing as elective study areas."
        ],
        tech: ["Java", "C", "SQL", "Computer Networks", "OS", "DBMS"],
        stats: {
            "Degree": "B.Tech",
            "Field": "Comp. Eng.",
            "Grad": "2026"
        }
    },
    {
        id: "selflearning",
        company: "Independent Learning",
        role: "Self-Taught Full Stack Developer",
        period: "2023 – Present",
        location: "Online / India",
        description: "Dedicated to continuous self-learning beyond the university curriculum. Actively building full-stack projects, following online courses, and exploring modern development tools and cloud platforms.",
        details: [
            "Completed multiple Udemy and freeCodeCamp courses on JavaScript, React, and Node.js.",
            "Built full-stack projects integrating React frontends with Express.js + MongoDB backends.",
            "Explored AWS Academy cloud labs covering EC2, S3, IAM, and VPC fundamentals.",
            "Practicing Data Structures & Algorithms problems on LeetCode and HackerRank.",
            "Following system design resources to understand scalable software architecture."
        ],
        tech: ["React", "Next.js", "Node.js", "MongoDB", "AWS", "PostgreSQL"],
        stats: {
            "Projects": "8+",
            "Platform": "Online",
            "Focus": "Full Stack"
        }
    },
    {
        id: "cloudlabs",
        company: "AWS Academy Cloud Labs",
        role: "Cloud Computing Learner",
        period: "2024 – Present",
        location: "AWS Academy Program",
        description: "Hands-on cloud computing experience through the AWS Academy program. Gaining practical exposure to core AWS services and understanding cloud architecture principles through guided laboratory work.",
        details: [
            "Completed AWS Academy Cloud Foundations laboratory modules.",
            "Hands-on work with EC2 instances, S3 buckets, and IAM policy management.",
            "Explored VPC networking, security groups, and cloud cost optimization basics.",
            "Building towards AWS Certified Cloud Practitioner certification.",
            "Understanding cloud-native application architecture and deployment models."
        ],
        tech: ["AWS EC2", "AWS S3", "AWS IAM", "VPC", "Cloud Architecture"],
        stats: {
            "Provider": "AWS Academy",
            "Type": "Cloud Labs",
            "Goal": "AWS CCP"
        }
    },
    {
        id: "opensource",
        company: "Open Source Exploration",
        role: "Open Source Learner & Contributor",
        period: "2024 – Present",
        location: "GitHub",
        description: "Actively exploring open-source software as a learning resource and contribution pathway. Building GitHub portfolio, studying codebases, and participating in beginner-friendly open source communities.",
        details: [
            "Maintaining personal GitHub repositories with student projects and code experiments.",
            "Studying popular open-source repositories to understand professional coding standards.",
            "Contributing to beginner-friendly open-source issues and documentation improvements.",
            "Using GitHub for version control, code reviews, and collaborative development practice.",
            "Growing a public portfolio to demonstrate skills and learning progression."
        ],
        tech: ["Git", "GitHub", "Markdown", "Open Source"],
        stats: {
            "Platform": "GitHub",
            "Repos": "Growing",
            "Focus": "Portfolio"
        }
    }
];

const RecentWorkNew = () => {
    const [activeExp, setActiveExp] = useState(experiences[0].id);

    return (
        <section className="relative z-10 py-24 overflow-hidden">
            <div className="container mx-auto px-4 relative">

                {/* Section Header */}
                <div className="flex flex-col items-center mb-24 relative">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent -z-10" />
                    <div className="bg-deep-bg px-8 relative z-10">
                        <h4 className="text-neon-cyan font-mono tracking-[0.6em] text-xs mb-2 text-center uppercase animate-pulse">
                            System Logs
                        </h4>
                        <h2 className="text-4xl md:text-6xl font-bold text-white text-center uppercase tracking-tighter shadow-neon-cyan drop-shadow-[0_0_15px_rgba(0,243,255,0.4)]">
                            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Journey</span>
                        </h2>
                    </div>
                    {/* Rotating Rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-neon-cyan/20 rounded-full animate-[spin_10s_linear_infinite] -z-20 pointer-events-none border-dashed" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-neon-purple/20 rounded-full animate-[spin_15s_linear_infinite_reverse] -z-20 pointer-events-none border-dotted" />
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-start justify-center">

                    {/* The "Arc Reactor" / Central Hub Visual */}
                    <div className="order-2 lg:order-1 lg:sticky lg:top-32 relative w-full lg:w-1/3 flex justify-center perspective-1000">
                        {/* Holographic Projection Base */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center scale-75 md:scale-100">
                            {/* Core Glow */}
                            <div className="absolute inset-0 bg-neon-cyan/20 rounded-full blur-[50px] animate-pulse" />

                            {/* Outer Static Ring */}
                            <div className="absolute inset-0 border border-white/10 rounded-full" />

                            {/* Rotating Outer Ring (Icons) */}
                            <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                                {["java", "react", "nextjs", "nodejs", "python", "mysql", "aws", "git"].map((icon, i) => {
                                    const angle = (i * 360) / 8;
                                    return (
                                        <div
                                            key={icon}
                                            className="absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5"
                                            style={{
                                                transform: `rotate(${angle}deg) translate(10rem) rotate(-${angle}deg)`
                                            }}
                                        >
                                            <div className="w-full h-full bg-black/80 rounded-full border border-neon-cyan/50 p-2 shadow-[0_0_10px_#00f3ff] flex items-center justify-center animate-pulse">
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={`https://skillicons.dev/icons?i=${icon}`}
                                                        alt={icon}
                                                        fill
                                                        className="object-contain opacity-90"
                                                        unoptimized
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Inner Rotating Ring */}
                            <div className="absolute inset-16 border-4 border-l-neon-cyan/80 border-t-neon-cyan/20 border-r-neon-cyan/80 border-b-neon-cyan/20 rounded-full shadow-[0_0_20px_#00f3ff] animate-[spin_3s_linear_infinite]" />

                            {/* Counter-Rotating Ring */}
                            <div className="absolute inset-20 border-2 border-dashed border-neon-purple/60 rounded-full animate-[spin_5s_linear_infinite_reverse]" />

                            {/* Center Reactor Core */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-28 h-28 bg-deep-bg/90 rounded-full border-2 border-neon-cyan flex items-center justify-center shadow-[inset_0_0_30px_#00f3ff,0_0_30px_#00f3ff] overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 to-transparent animate-spin-slow" />
                                    <div className="text-5xl text-white animate-pulse z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                                        ⚛
                                    </div>
                                    <div className="absolute inset-0 border-t-4 border-neon-cyan/50 rounded-full animate-spin-fast" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Panels / Data Stream */}
                    <div className="order-1 lg:order-2 w-full lg:w-2/3">
                        <div className="relative border-l-2 border-white/10 ml-4 pl-6 md:ml-0 md:pl-0 md:border-l-0 space-y-8 md:space-y-12">
                            {experiences.map((exp, idx) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                                    onClick={() => setActiveExp(exp.id)}
                                    className={`relative group cursor-pointer perspective-1000`}
                                >
                                    {/* Timeline Connector for Mobile */}
                                    <div className="absolute -left-[35px] top-6 w-5 h-5 bg-black border-2 border-neon-cyan rounded-full md:hidden z-10" />

                                    <GlassCard className={`p-6 md:p-10 transition-all duration-500 transform-gpu ${activeExp === exp.id ? "border-neon-cyan/50 bg-white/5 shadow-[0_0_30px_rgba(0,243,255,0.1)] scale-[1.02]" : "border-white/5 hover:border-white/20 opacity-80"}`}>

                                        {/* Header */}
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                                            <div>
                                                <h3 className={`text-xl md:text-3xl font-bold ${activeExp === exp.id ? "text-white" : "text-gray-400"}`}>
                                                    {exp.company}
                                                </h3>
                                                <p className="text-neon-cyan font-mono text-xs md:text-sm tracking-wider mt-1">{exp.role} <span className="text-gray-500 block sm:inline">| {exp.location}</span></p>
                                            </div>
                                            <span className="text-[10px] md:text-xs font-mono text-neon-purple border border-neon-purple/30 px-2 py-1 rounded-full bg-neon-purple/10 whitespace-nowrap">
                                                {exp.period}
                                            </span>
                                        </div>

                                        {/* Expandable Content */}
                                        <AnimatePresence>
                                            {activeExp === exp.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-gray-300 mb-6 leading-relaxed text-lg border-t border-white/10 pt-4">
                                                        {exp.description}
                                                    </p>

                                                    {/* Key Details List */}
                                                    <ul className="mb-6 space-y-2">
                                                        {exp.details.map((detail, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                                                                <span className="text-neon-cyan mt-1">▹</span>
                                                                {detail}
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    {/* Tech Stack */}
                                                    <div className="flex flex-wrap gap-2 mb-8">
                                                        {exp.tech.map(t => (
                                                            <span key={t} className="text-xs font-mono bg-black/50 text-neon-purple px-2 py-1 rounded border border-neon-purple/30 shadow-[0_0_5px_rgba(188,19,254,0.2)]">
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Stats Grid - "HUD" Style */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/10 pt-6">
                                                        {Object.entries(exp.stats).map(([label, value]) => (
                                                            <div key={label} className="text-center bg-black/30 p-2 rounded border border-white/5">
                                                                <div className="text-base md:text-xl font-bold text-white text-shadow-glow">{value}</div>
                                                                <div className="text-[9px] md:text-[10px] uppercase text-gray-500 tracking-wider font-mono mt-1">{label}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Holographic Scanline Overlay */}
                                        {activeExp === exp.id && (
                                            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl z-20">
                                                <div className="w-full h-[2px] bg-neon-cyan/50 shadow-[0_0_15px_#00f3ff] animate-scan-fast top-0 left-0 absolute" />
                                            </div>
                                        )}

                                        {/* Status Light */}
                                        <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${activeExp === exp.id ? "bg-neon-cyan shadow-[0_0_10px_#00f3ff]" : "bg-gray-700"}`} />
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RecentWorkNew;
