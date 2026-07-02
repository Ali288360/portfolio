"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { NeonButton } from "@components/ui/NeonButton";
import TerminalWindow from "@components/ui/TerminalWindow";

const HomeHeroNew = () => {
    return (
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-[90vh] container mx-auto px-4 gap-12 pt-20 lg:pt-0">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-light text-neon-cyan tracking-[0.2em] mb-4 uppercase">
                        Welcome to the Future
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        Bhushan Zade
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-2xl md:text-4xl font-semibold text-gray-300 mb-8 h-[60px]"
                >
                    <TypeAnimation
                        sequence={[
                            "Full Stack Developer",
                            1000,
                            "UI/UX Designer",
                            1000,
                            "Open Source Contributor",
                            1000,
                            "Tech Enthusiast",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple drop-shadow-[0_0_5px_rgba(0,243,255,0.5)]"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="max-w-2xl text-gray-400 mb-10 text-lg leading-relaxed mx-auto lg:mx-0"
                >
                    Building immersive web experiences with modern technologies.
                    Transforming ideas into high-performance, futuristic digital reality.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, type: "spring" }}
                    className="flex gap-6 justify-center lg:justify-start"
                >
                    <NeonButton variant="primary">View Projects</NeonButton>
                    <NeonButton variant="secondary">Contact Me</NeonButton>
                </motion.div>
            </div>

            {/* Right Content - Terminal */}
            <div className="flex-1 w-full max-w-xl z-20 mt-10 lg:mt-0">
                <TerminalWindow />
            </div>
        </div>
    );
};

export default HomeHeroNew;
