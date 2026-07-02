"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@components/ui/GlassCard";
import { NeonButton } from "@components/ui/NeonButton";

// Areas of Interest — replaces NPM Package Registry section
const areas = [
    {
        name: "Full Stack Development",
        version: "React + Node.js",
        desc: "Building end-to-end web applications — from pixel-perfect React frontends to robust Express.js backends with database integration.",
        url: "https://github.com/AbdiAliAbdi",
        type: "PRIMARY_INTEREST",
        id: "area-01"
    },
    {
        name: "Backend Development",
        version: "Node + Express + DB",
        desc: "Designing REST APIs, server-side logic, authentication systems, and middleware. Passionate about clean architecture and scalable server patterns.",
        url: "https://github.com/AbdiAliAbdi",
        type: "CORE_FOCUS",
        id: "area-02"
    },
    {
        name: "Cloud Computing",
        version: "AWS Academy",
        desc: "Exploring cloud infrastructure with AWS — EC2, S3, IAM, and VPC. Working towards cloud certifications and understanding cloud-native application design.",
        url: "https://github.com/AbdiAliAbdi",
        type: "LEARNING",
        id: "area-03"
    },
    {
        name: "Database Design",
        version: "SQL + NoSQL",
        desc: "Designing efficient relational schemas with MySQL/PostgreSQL and document models with MongoDB. Understanding query optimization and data modeling principles.",
        url: "https://github.com/AbdiAliAbdi",
        type: "CORE_SKILL",
        id: "area-04"
    },
    {
        name: "Artificial Intelligence",
        version: "Exploring AI/ML",
        desc: "Fascinated by how AI is reshaping software. Exploring machine learning concepts, AI-powered APIs, and how to integrate intelligent features into web applications.",
        url: "https://github.com/AbdiAliAbdi",
        type: "EXPLORATION",
        id: "area-05"
    },
    {
        name: "Software Architecture",
        version: "System Design",
        desc: "Learning the principles of scalable system design — microservices, caching strategies, load balancing, and how to architect software that can grow.",
        url: "https://github.com/AbdiAliAbdi",
        type: "GROWTH_AREA",
        id: "area-06"
    }
];

// Text scramble effect
const DecryptText = ({ text, reveal = false }: { text: string, reveal: boolean }) => {
    const [display, setDisplay] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    useEffect(() => {
        if (!reveal) {
            setDisplay(text);
            return;
        }

        let iterations = 0;
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iterations >= text.length) {
                clearInterval(interval);
            }

            iterations += 1 / 2;
        }, 30);

        return () => clearInterval(interval);
    }, [reveal, text]);

    return <span>{display}</span>;
}

const PackageRegistry = () => {
    const [hoveredArea, setHoveredArea] = useState<string | null>(null);

    return (
        <section className="relative z-10 container mx-auto px-4 py-12 md:py-24">

            {/* Holographic Header */}
            <div className="flex flex-col items-center mb-12 md:mb-24 relative">
                <div className="relative group cursor-default">
                    <h2 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-cyan to-white uppercase tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity duration-500 text-center">
                        Areas of <span className="text-neon-cyan drop-shadow-[0_0_15px_rgba(0,243,255,0.8)]">Interest</span>
                    </h2>
                    <div className="absolute -inset-4 border border-neon-cyan/20 rounded-lg skew-x-12 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:skew-x-0 transition-all duration-700 pointer-events-none" />
                    <div className="absolute -inset-4 border border-neon-purple/20 rounded-lg -skew-x-12 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:skew-x-0 transition-all duration-700 delay-100 pointer-events-none" />
                </div>

                <div className="mt-4 flex items-center gap-4 text-[10px] md:text-xs font-mono text-neon-cyan/70 tracking-[0.2em] md:tracking-[0.3em]">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-neon-cyan rounded-full animate-pulse" />
                    <span>DOMAINS_I_AM_BUILDING_TOWARD</span>
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-neon-cyan rounded-full animate-pulse" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 relative z-10 perspective-2000">
                {areas.map((area, idx) => (
                    <motion.div
                        key={area.id}
                        initial={{ opacity: 0, y: 50, rotateX: 10 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        onMouseEnter={() => setHoveredArea(area.id)}
                        onMouseLeave={() => setHoveredArea(null)}
                        className="group relative"
                    >
                        {/* Neural Connection Lines */}
                        <div className="absolute -top-6 md:-top-10 left-1/2 w-0.5 h-6 md:h-10 bg-gradient-to-b from-transparent to-neon-cyan/20 -z-10 group-hover:h-8 md:group-hover:h-12 group-hover:-top-8 md:group-hover:-top-12 transition-all duration-300 pointer-events-none" />
                        <div className="absolute -top-8 md:-top-12 left-1/2 w-2 h-2 rounded-full bg-neon-cyan/0 group-hover:bg-neon-cyan/50 blur-sm transition-all duration-300 -translate-x-1/2 pointer-events-none" />

                        <GlassCard className="h-auto md:h-full relative overflow-hidden bg-black/60 md:bg-black/40 border-neon-cyan/30 md:border-white/5 md:group-hover:border-neon-cyan/50 md:group-hover:bg-black/60 transition-all duration-500 backdrop-blur-md rounded-xl shadow-[0_0_20px_rgba(0,243,255,0.1)] md:shadow-[0_10px_30px_rgba(0,0,0,0.5)] md:group-hover:shadow-[0_0_30px_rgba(0,243,255,0.15)]">

                            {/* Animated Border Trace */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                <defs>
                                    <linearGradient id="gradient-border-area" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#00f3ff" />
                                        <stop offset="100%" stopColor="#bc13fe" />
                                    </linearGradient>
                                </defs>
                                <rect x="0" y="0" width="100%" height="100%" fill="none" rx="12" ry="12" stroke="url(#gradient-border-area)" strokeWidth="2" className="md:hidden" />
                                <rect x="0" y="0" width="100%" height="100%" fill="none" rx="12" ry="12" stroke="url(#gradient-border-area)" strokeWidth="2" strokeDasharray="400" strokeDashoffset="400" className="hidden md:block">
                                    <animate attributeName="stroke-dashoffset" from="400" to="0" dur="1s" begin="mouseenter" fill="freeze" />
                                </rect>
                            </svg>

                            <div className="p-5 md:p-8 h-auto md:h-full flex flex-col relative z-20">
                                {/* Header: Type & Version */}
                                <div className="flex justify-between items-start mb-4 md:mb-6">
                                    <div className="flex flex-col">
                                        <span className="text-[8px] md:text-[9px] text-neon-cyan font-mono tracking-widest uppercase mb-1 opacity-70">Domain</span>
                                        <span className="text-[10px] md:text-xs text-white font-bold bg-white/10 px-2 py-1 rounded w-fit">{area.type}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[8px] md:text-[9px] text-neon-purple font-mono tracking-widest uppercase mb-1 opacity-70">Stack</span>
                                        <span className="text-[10px] md:text-xs text-neon-purple font-mono">{area.version}</span>
                                    </div>
                                </div>

                                {/* Area Identity */}
                                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white md:text-white md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-neon-cyan md:group-hover:to-white transition-all duration-300">
                                    {area.name}
                                </h3>

                                {/* Description with Decrypt Effect on Hover */}
                                <div className="text-sm text-gray-400 leading-relaxed mb-6 md:mb-8 flex-grow h-auto md:h-20 overflow-hidden font-mono">
                                    <DecryptText text={area.desc} reveal={hoveredArea === area.id} />
                                </div>

                                {/* Terminal Simulation */}
                                <div className="mt-auto relative overflow-hidden rounded bg-black/80 border border-white/10 p-3 mb-4 group-hover:border-neon-cyan/30 transition-colors hidden md:block">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                    </div>
                                    <div className="font-mono text-xs text-neon-cyan truncate">
                                        <span className="text-pink-500 mr-2">➜</span>
                                        <span className="text-gray-400">~</span>
                                        {hoveredArea === area.id ? (
                                            <span className="animate-pulse"> learning {area.name.toLowerCase().replace(/ /g, '-')}_</span>
                                        ) : (
                                            <span className="opacity-50"> exploring...</span>
                                        )}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/5 group-hover:border-neon-cyan/20 transition-colors">
                                    <div className="flex flex-col">
                                        <span className="text-[8px] md:text-[9px] uppercase text-gray-500 font-mono">GitHub</span>
                                        <span className="text-base md:text-lg font-bold text-white">@AbdiAliAbdi</span>
                                    </div>
                                    <a href={area.url} target="_blank" rel="noopener noreferrer">
                                        <NeonButton className="px-4 py-2 text-[10px] md:text-xs group-hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-shadow">
                                            View Work
                                        </NeonButton>
                                    </a>
                                </div>
                            </div>

                            {/* Background Grid Pattern */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default PackageRegistry;
