"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@components/ui/GlassCard";
import clsx from "clsx";
import Image from "next/image";

const categories = [
    {
        id: "languages",
        name: "PROG_LANGUAGES",
        skills: [
            { name: "Java", level: 70, icon: "java" },
            { name: "JavaScript", level: 75, icon: "js" },
            { name: "TypeScript", level: 60, icon: "ts" },
            { name: "Python", level: 65, icon: "python" },
            { name: "C", level: 60, icon: "c" },
            { name: "SQL", level: 65, icon: "mysql" },
        ]
    },
    {
        id: "frontend",
        name: "FRONTEND_OPS",
        skills: [
            { name: "React", level: 70, icon: "react" },
            { name: "Next.js", level: 65, icon: "nextjs" },
            { name: "HTML5", level: 85, icon: "html" },
            { name: "CSS3", level: 80, icon: "css" },
            { name: "Tailwind CSS", level: 75, icon: "tailwind" },
            { name: "Responsive Design", level: 78, icon: "html" },
        ]
    },
    {
        id: "backend",
        name: "BACKEND_SYS",
        skills: [
            { name: "Node.js", level: 65, icon: "nodejs" },
            { name: "Express.js", level: 62, icon: "express" },
            { name: "REST APIs", level: 68, icon: "postman" },
            { name: "Authentication", level: 60, icon: "nodejs" },
            { name: "Middleware", level: 55, icon: "express" },
        ]
    },
    {
        id: "db",
        name: "DATA_CORE",
        skills: [
            { name: "MySQL", level: 68, icon: "mysql" },
            { name: "PostgreSQL", level: 60, icon: "postgresql" },
            { name: "MongoDB", level: 65, icon: "mongodb" },
            { name: "Firebase", level: 62, icon: "firebase" },
        ]
    },
    {
        id: "cloud",
        name: "CLOUD_INFRA",
        skills: [
            { name: "AWS", level: 55, icon: "aws" },
            { name: "GitHub Pages", level: 75, icon: "github" },
            { name: "Netlify", level: 70, icon: "netlify" },
        ]
    },
    {
        id: "tools",
        name: "DEV_TOOLS",
        skills: [
            { name: "Git", level: 75, icon: "git" },
            { name: "GitHub", level: 78, icon: "github" },
            { name: "VS Code", level: 85, icon: "vscode" },
            { name: "Postman", level: 68, icon: "postman" },
            { name: "Linux", level: 60, icon: "linux" },
            { name: "Figma", level: 55, icon: "figma" },
        ]
    },
    {
        id: "concepts",
        name: "CS_CONCEPTS",
        skills: [
            { name: "OOP", level: 75, icon: "java" },
            { name: "Data Structures", level: 68, icon: "python" },
            { name: "Algorithms", level: 65, icon: "python" },
            { name: "DBMS", level: 70, icon: "mysql" },
            { name: "OS", level: 65, icon: "linux" },
            { name: "Computer Networks", level: 62, icon: "nodejs" },
            { name: "Software Eng.", level: 70, icon: "git" },
            { name: "REST Architecture", level: 68, icon: "postman" },
        ]
    }
];

const TechArsenal = () => {
    const [activeCategory, setActiveCategory] = useState("frontend");

    return (
        <section className="relative z-10 container mx-auto px-4 py-20">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-16">
                <h4 className="text-neon-cyan font-mono tracking-[0.5em] text-sm mb-2 uppercase">System Capabilities</h4>
                <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
                    Tech <span className="text-neon-purple">Arsenal</span>
                </h2>
                <p className="text-gray-500 font-mono text-xs mt-3 tracking-widest uppercase">{"// actively learning & building"}</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Category Selection (Side Menu) */}
                <div className="w-full lg:w-1/4 flex flex-col gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={clsx(
                                "group relative p-4 text-left border rounded-lg transition-all duration-300 font-mono text-sm tracking-widest uppercase overflow-hidden",
                                activeCategory === cat.id
                                    ? "border-neon-cyan text-neon-cyan bg-neon-cyan/5 shadow-[0_0_15px_rgba(0,243,255,0.1)]"
                                    : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <span className="relative z-10 flex justify-between items-center">
                                <span>{`// ${cat.name}`}</span>
                                {activeCategory === cat.id && (
                                    <motion.span
                                        layoutId="activeDot"
                                        className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"
                                    />
                                )}
                            </span>
                            {/* Hover Glitch Effect Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
                        </button>
                    ))}
                </div>

                {/* Skills Grid (Weapon Rack) */}
                <div className="flex-1 min-h-[400px]">
                    <GlassCard className="h-full p-8 relative overflow-hidden border-neon-cyan/20">
                        {/* Background Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
                            >
                                {categories.find(c => c.id === activeCategory)?.skills.map((skill, idx) => (
                                    <div
                                        key={skill.name}
                                        className="group relative p-4 rounded-xl bg-black/40 border border-white/5 hover:border-neon-purple/50 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            {/* Icon Container with Glow */}
                                            <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 group-hover:border-neon-purple group-hover:shadow-[0_0_15px_rgba(188,19,254,0.3)] transition-all duration-300">
                                                <div className="relative w-8 h-8">
                                                    <Image
                                                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                                        alt={skill.name}
                                                        fill
                                                        className="object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300"
                                                        unoptimized
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex-1">
                                                <h4 className="text-white font-bold group-hover:text-neon-purple transition-colors">{skill.name}</h4>
                                                <div className="flex justify-between items-center text-xs text-gray-500 font-mono mt-1">
                                                    <span>PROFICIENCY</span>
                                                    <span className="text-neon-cyan">{skill.level}%</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Animated Progress Bar */}
                                        <div className="h-2 w-full bg-gray-900 rounded-full overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple shadow-[0_0_10px_rgba(0,243,255,0.5)]"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

export default TechArsenal;
