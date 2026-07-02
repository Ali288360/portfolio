"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@components/ui/GlassCard";

// Certifications — organized as Completed, In Progress, Planned
const certs = [
    {
        title: "AWS Academy Cloud Foundations",
        issuer: "Amazon Web Services",
        id: "AWS-CLOUD-FOUND",
        level: "COMPLETED",
        date: "2024",
        icon: "☁️",
        statusColor: "green"
    },
    {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        id: "FCC-RWD-2024",
        level: "COMPLETED",
        date: "2024",
        icon: "🌐",
        statusColor: "green"
    },
    {
        title: "JavaScript Algorithms",
        issuer: "freeCodeCamp",
        id: "FCC-JS-2024",
        level: "COMPLETED",
        date: "2024",
        icon: "⚡",
        statusColor: "green"
    },
    {
        title: "Oracle Java SE (OCA)",
        issuer: "Oracle",
        id: "ORACLE-JAVA-IP",
        level: "IN PROGRESS",
        date: "2025",
        icon: "☕",
        statusColor: "yellow"
    },
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        id: "AWS-CCP-PLAN",
        level: "PLANNED",
        date: "2025",
        icon: "🎯",
        statusColor: "blue"
    },
    {
        title: "Google Cloud Skills Boost",
        issuer: "Google Cloud",
        id: "GCP-SKILLS-PLAN",
        level: "PLANNED",
        date: "2025",
        icon: "🔵",
        statusColor: "blue"
    },
    {
        title: "Meta Front-End Developer",
        issuer: "Meta / Coursera",
        id: "META-FE-PLAN",
        level: "PLANNED",
        date: "2025–2026",
        icon: "🔷",
        statusColor: "blue"
    },
    {
        title: "AWS Solutions Architect Associate",
        issuer: "Amazon Web Services",
        id: "AWS-SAA-FUTURE",
        level: "PLANNED",
        date: "2026",
        icon: "🏗️",
        statusColor: "gray"
    }
];

const statusStyles: Record<string, { border: string; text: string; bg: string; dot: string }> = {
    green: {
        border: "border-green-500",
        text: "text-green-400",
        bg: "bg-green-500/10",
        dot: "bg-green-500"
    },
    yellow: {
        border: "border-yellow-500",
        text: "text-yellow-400",
        bg: "bg-yellow-500/10",
        dot: "bg-yellow-500"
    },
    blue: {
        border: "border-neon-cyan",
        text: "text-neon-cyan",
        bg: "bg-neon-cyan/10",
        dot: "bg-neon-cyan"
    },
    gray: {
        border: "border-white/20",
        text: "text-gray-400",
        bg: "bg-white/5",
        dot: "bg-gray-500"
    }
};

const SecurityClearance = () => {
    return (
        <section className="relative z-10 container mx-auto px-4 py-24">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-20 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-16 h-16 border-2 border-neon-cyan rounded-full flex items-center justify-center mb-6 relative">
                        <div className="absolute inset-2 border border-neon-purple rounded-full animate-spin-slow" />
                        <span className="text-2xl animate-pulse">🏅</span>
                    </div>
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-bold text-white text-center uppercase tracking-tighter mb-2">
                    Certifications &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Credentials</span>
                </h2>

                <div className="flex items-center gap-2 text-[10px] font-mono text-neon-cyan/70 tracking-[0.3em] uppercase border border-neon-cyan/20 px-3 py-1 rounded bg-black/40 backdrop-blur-sm mt-3">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span>Completed · In Progress · Planned</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {certs.map((cert, idx) => {
                    const style = statusStyles[cert.statusColor];
                    return (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <GlassCard className="h-full relative overflow-hidden bg-black/40 border-l-2 border-l-neon-cyan group-hover:bg-black/60 transition-all duration-500">

                                {/* Holographic Watermark */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl pointer-events-none opacity-[0.03] grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.05]">
                                    {cert.icon}
                                </div>

                                {/* Scanning Laser Effect */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-neon-cyan/50 shadow-[0_0_10px_#00f3ff] -translate-y-10 group-hover:translate-y-[200px] transition-transform duration-[1.5s] ease-linear pointer-events-none opacity-0 group-hover:opacity-100" />

                                <div className="p-6 relative z-10 flex flex-col h-full">
                                    {/* Badge Header */}
                                    <div className="flex justify-between items-start mb-4 border-b border-white/5 pb-3">
                                        <div className="flex flex-col">
                                            <span className="text-[9px] text-gray-500 font-mono uppercase tracking-widest">Status</span>
                                            <span className={`text-[10px] font-bold font-mono ${style.text}`}>{cert.level}</span>
                                        </div>
                                        <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-cyan/50 transition-colors">
                                            <span className="text-sm">{cert.icon}</span>
                                        </div>
                                    </div>

                                    {/* Cert Details */}
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors leading-tight">
                                        {cert.title}
                                    </h3>
                                    <p className="text-xs text-neon-purple font-mono mb-6">{cert.issuer}</p>

                                    {/* Badge Footer */}
                                    <div className="mt-auto pt-3 border-t border-white/5 flex justify-between items-end">
                                        <div className="flex flex-col">
                                            <span className="text-[9px] text-gray-600 font-mono">YEAR</span>
                                            <span className="text-[10px] text-gray-400 font-mono font-bold tracking-wider group-hover:text-white transition-colors">{cert.date}</span>
                                        </div>

                                        <div className={`${style.bg} ${style.text} border ${style.border}/20 px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider flex items-center gap-1`}>
                                            <span className={`w-1 h-1 ${style.dot} rounded-full animate-pulse`} />
                                            {cert.level === "COMPLETED" ? "Verified" : cert.level === "IN PROGRESS" ? "Active" : "Planned"}
                                        </div>
                                    </div>
                                </div>

                                {/* Corner Accents */}
                                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-neon-cyan/50 transition-colors" />
                                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10 group-hover:border-neon-cyan/50 transition-colors" />
                            </GlassCard>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default SecurityClearance;
