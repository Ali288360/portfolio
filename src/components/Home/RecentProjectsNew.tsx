"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@components/ui/GlassCard";


// Abdi Ali Abdi - Student Projects
const projects = [
    {
        id: "portfolio",
        title: "Personal Portfolio Website",
        codename: "PORTFOLIO_V2",
        status: "DEPLOYED",
        description: "A cyberpunk-themed personal portfolio built with Next.js, showcasing projects, skills, and academic background. Features 3D animations, glassmorphism UI, and responsive design.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        image: "🌐",
        github: "https://github.com/Ali288360",
        live: "https://Ali288360.netlify.app",
        stats: {
            "Type": "Portfolio",
            "Stack": "Full Stack",
            "Status": "Live"
        }
    },
    {
        id: "student-mgmt",
        title: "Student Management System",
        codename: "STUDENT_SYS",
        status: "COMPLETED",
        description: "A full-stack web application for managing student records, courses, attendance, and grades. Includes admin and student portals with role-based authentication using JWT.",
        tech: ["React", "Node.js", "Express.js", "MySQL"],
        image: "🎓",
        github: "https://github.com/Ali288360",
        live: "",
        stats: {
            "Backend": "REST API",
            "Auth": "JWT",
            "DB": "MySQL"
        }
    },
    {
        id: "task-app",
        title: "Task Management App",
        codename: "TASK_PROTOCOL",
        status: "ACTIVE",
        description: "A React-based task management application with CRUD operations, drag-and-drop task reordering, priority levels, and a MongoDB backend. Supports user authentication and persistent data.",
        tech: ["React", "Node.js", "MongoDB", "Express.js"],
        image: "✅",
        github: "https://github.com/Ali288360",
        live: "",
        stats: {
            "Features": "CRUD+Auth",
            "DB": "MongoDB",
            "UI": "React"
        }
    },
    {
        id: "weather-app",
        title: "Weather Application",
        codename: "WEATHER_CORE",
        status: "DEPLOYED",
        description: "A responsive weather application consuming the OpenWeatherMap API. Displays real-time weather, 5-day forecasts, and location-based search with a clean, modern UI.",
        tech: ["React", "REST API", "CSS3", "JavaScript"],
        image: "🌤️",
        github: "https://github.com/Ali288360",
        live: "https://github.com/Ali288360",
        stats: {
            "API": "OpenWeather",
            "Type": "Frontend",
            "Design": "Responsive"
        }
    },
    {
        id: "auth-system",
        title: "Authentication System",
        codename: "AUTH_GATE",
        status: "COMPLETED",
        description: "A secure user authentication backend built with Node.js and Express. Implements JWT tokens, bcrypt password hashing, protected routes, email verification flow, and middleware patterns.",
        tech: ["Node.js", "Express.js", "PostgreSQL", "JWT"],
        image: "🔐",
        github: "https://github.com/Ali288360",
        live: "",
        stats: {
            "Security": "JWT+Bcrypt",
            "DB": "PostgreSQL",
            "Type": "Backend"
        }
    },
    {
        id: "aws-labs",
        title: "AWS Cloud Labs",
        codename: "CLOUD_OPS",
        status: "IN PROGRESS",
        description: "Hands-on cloud computing lab exercises using AWS Academy. Covers EC2 instances, S3 storage, IAM roles, VPC networking, and basic cloud architecture patterns from AWS Academy coursework.",
        tech: ["AWS EC2", "AWS S3", "AWS IAM", "VPC"],
        image: "☁️",
        github: "https://github.com/Ali288360",
        live: "",
        stats: {
            "Platform": "AWS Academy",
            "Services": "EC2,S3,IAM",
            "Focus": "Cloud Arch."
        }
    },
    {
        id: "library-mgmt",
        title: "Library Management System",
        codename: "LIBRARY_SYS",
        status: "COMPLETED",
        description: "A Java-based library management system demonstrating OOP principles. Features book cataloging, member management, borrow/return tracking, and search functionality with file I/O persistence.",
        tech: ["Java", "OOP", "File I/O", "Swing UI"],
        image: "📚",
        github: "https://github.com/Ali288360",
        live: "",
        stats: {
            "Language": "Java",
            "Concepts": "OOP+DSA",
            "Type": "Desktop"
        }
    },
    {
        id: "rest-api",
        title: "REST API Backend",
        codename: "API_NEXUS",
        status: "ACTIVE",
        description: "A production-ready REST API built with Express.js following best practices. Includes proper routing, request validation, error handling middleware, rate limiting, and full CRUD operations with MongoDB.",
        tech: ["Node.js", "Express.js", "MongoDB", "Postman"],
        image: "🛠️",
        github: "https://github.com/Ali288360",
        live: "",
        stats: {
            "Endpoints": "RESTful",
            "Validation": "Middleware",
            "Docs": "Postman"
        }
    }
];

const RecentProjectsNew = () => {
    const [activeProject, setActiveProject] = useState(projects[0].id);

    return (
        <section id="projects" className="relative z-10 py-24 overflow-hidden">
            {/* Background Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-4"
                    >
                        <span className="text-neon-cyan/80 font-mono tracking-[0.5em] text-xs uppercase border border-neon-cyan/30 px-4 py-2 rounded-full bg-neon-cyan/5 backdrop-blur-sm shadow-[0_0_10px_rgba(0,243,255,0.2)]">
                            Build Log
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
                        Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">Archive</span>
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent rounded-full opacity-70" />
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:h-[650px] items-stretch">

                    {/* Project Selector / Mission List */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar">
                        {projects.map((project, idx) => (
                            <motion.button
                                key={project.id}
                                onClick={() => setActiveProject(project.id)}
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.07 }}
                                className={`relative p-5 text-left transition-all duration-300 rounded-xl border group overflow-hidden ${activeProject === project.id
                                    ? "bg-neon-cyan/10 border-neon-cyan shadow-[0_0_20px_rgba(0,243,255,0.2)]"
                                    : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-2 relative z-10">
                                    <h3 className={`text-lg font-bold font-mono tracking-tight ${activeProject === project.id ? "text-neon-cyan" : "text-white"}`}>
                                        {project.codename}
                                    </h3>
                                    <span className={`text-[9px] px-2 py-0.5 rounded border tracking-wider font-mono ${project.status === "IN PROGRESS" ? "border-yellow-500 text-yellow-400 bg-yellow-500/10" :
                                        project.status === "ACTIVE" ? "border-green-500 text-green-400 bg-green-500/10" :
                                            "border-neon-purple text-neon-purple bg-neon-purple/10"
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-400 font-mono tracking-wider relative z-10 truncate">{project.title}</p>

                                {/* Background Sweep Animation */}
                                {activeProject === project.id && (
                                    <motion.div
                                        layoutId="activeGlow"
                                        className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-cyan/5 to-transparent z-0"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Active Project Details / Holographic View */}
                    <div className="w-full lg:w-2/3 relative perspective-1000">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject}
                                initial={{ opacity: 0, rotateX: -10, scale: 0.95 }}
                                animate={{ opacity: 1, rotateX: 0, scale: 1 }}
                                exit={{ opacity: 0, rotateX: 10, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "circOut" }}
                                className="h-full"
                            >
                                <GlassCard className="h-full p-6 md:p-12 relative overflow-hidden flex flex-col border-neon-cyan/30 shadow-[0_0_50px_rgba(0,243,255,0.1)]" >

                                    {/* Holographic Grid Overlay */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(188,19,254,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(188,19,254,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none opacity-50" />

                                    {/* Scanning Line Animation */}
                                    <div className="absolute inset-0 pointer-events-none z-0">
                                        <div className="w-full h-[2px] bg-neon-cyan/30 shadow-[0_0_20px_#00f3ff] animate-scan-fast" />
                                    </div>

                                    {/* Project Content */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex flex-col md:flex-row justify-between items-start">
                                            <div>
                                                <div className="text-5xl md:text-7xl mb-4 md:mb-6 animate-bounce-slow filter drop-shadow-[0_0_25px_rgba(0,243,255,0.6)]">
                                                    {projects.find(p => p.id === activeProject)?.image}
                                                </div>
                                                <h2 className="text-2xl md:text-5xl font-bold text-white mb-2 uppercase tracking-tighter">
                                                    {projects.find(p => p.id === activeProject)?.title}
                                                </h2>
                                                <div className="h-1 w-16 md:w-24 bg-neon-purple rounded-full shadow-[0_0_15px_#bc13fe] mt-2" />
                                            </div>

                                            {/* Tech Stack Chips (Floating) */}
                                            <div className="flex flex-row md:flex-col gap-2 items-start md:items-end mt-4 md:mt-0 flex-wrap">
                                                {projects.find(p => p.id === activeProject)?.tech.map((t, i) => (
                                                    <motion.div
                                                        key={t}
                                                        initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                                                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                                        transition={{
                                                            delay: 0.3 + (i * 0.1),
                                                            type: "spring",
                                                            filter: { type: "tween", ease: "linear" }
                                                        }}
                                                        className="px-2 md:px-3 py-1 bg-black/60 border border-neon-cyan/30 text-neon-cyan text-[10px] md:text-xs font-mono rounded backdrop-blur-md shadow-[0_0_10px_rgba(0,243,255,0.1)]"
                                                    >
                                                        {t}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        <p className="mt-6 md:mt-8 text-sm md:text-xl text-gray-300 leading-relaxed max-w-2xl border-l-4 border-neon-purple/50 pl-4 md:pl-6 py-2 bg-gradient-to-r from-neon-purple/5 to-transparent rounded-r-lg">
                                            {projects.find(p => p.id === activeProject)?.description}
                                        </p>

                                        {/* Action Buttons */}
                                        <div className="flex gap-4 mt-6">
                                            <a
                                                href={projects.find(p => p.id === activeProject)?.github || "#"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 border border-white/20 text-gray-300 hover:border-neon-cyan hover:text-neon-cyan text-xs font-mono rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                                            >
                                                <span>⌥</span> GitHub
                                            </a>
                                            {projects.find(p => p.id === activeProject)?.live ? (
                                                <a
                                                    href={projects.find(p => p.id === activeProject)?.live || "#"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 border border-neon-purple/40 text-neon-purple hover:bg-neon-purple/10 text-xs font-mono rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(188,19,254,0.3)]"
                                                >
                                                    <span>↗</span> Live Demo
                                                </a>
                                            ) : (
                                                <span className="flex items-center gap-2 px-4 py-2 border border-white/5 text-gray-600 text-xs font-mono rounded cursor-not-allowed">
                                                    ↗ No Live Demo
                                                </span>
                                            )}
                                        </div>

                                        {/* Project Stats */}
                                        <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 pt-6 md:pt-10 border-t border-white/10">
                                            {Object.entries(projects.find(p => p.id === activeProject)?.stats || {}).map(([key, value], i) => (
                                                <motion.div
                                                    key={key}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                                    className="bg-black/40 p-2 md:p-4 rounded-lg border border-white/5 hover:border-neon-cyan/50 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]"
                                                >
                                                    <div className="text-lg md:text-3xl font-bold text-white group-hover:text-neon-cyan transition-colors">{value}</div>
                                                    <div className="text-[9px] md:text-xs text-gray-500 uppercase tracking-widest font-mono mt-1 group-hover:text-neon-cyan/70">{key}</div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Decorative Spinning Elements */}
                                    <div className="absolute -bottom-24 -right-24 w-96 h-96 pointer-events-none opacity-40">
                                        <div className="absolute inset-0 border border-dashed border-neon-cyan/20 rounded-full animate-spin-slow" />
                                        <div className="absolute inset-8 border border-dotted border-neon-purple/30 rounded-full animate-spin-reverse-slow" />
                                        <div className="absolute inset-16 border-t-2 border-l-2 border-neon-cyan/40 rounded-full animate-[spin_5s_linear_infinite]" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-48 h-48 border border-white/5 rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-neon-cyan rounded-full animate-ping" />
                                            </div>
                                        </div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent animate-[spin_8s_linear_infinite]" />
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[120%] bg-gradient-to-b from-transparent via-neon-purple/20 to-transparent animate-[spin_12s_linear_infinite_reverse]" />
                                    </div>
                                </GlassCard>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentProjectsNew;
