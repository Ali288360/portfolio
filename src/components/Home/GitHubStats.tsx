"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GlassCard } from "@components/ui/GlassCard";

const StatsImage = ({ src, alt, className, errorMessage = "System Offline" }: { src: string, alt: string, className?: string, errorMessage?: string }) => {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center border border-red-500/30 bg-red-500/5 rounded-lg">
                <div className="text-red-500 font-mono text-2xl mb-2">⚠</div>
                <div className="text-red-400 font-mono text-xs uppercase tracking-widest">{errorMessage}</div>
                <div className="text-red-500/50 font-mono text-[10px] mt-1">SIGNAL_LOST</div>
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            fill
            className={className}
            unoptimized
            onError={() => setError(true)}
        />
    );
};

const GitHubStats = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full mt-12 mb-12"
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent flex-1" />
                <h3 className="text-xl text-neon-cyan font-mono tracking-widest uppercase">
                    GitHub Intelligence
                </h3>
                <div className="h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* GitHub Stats Card */}
                <GlassCard className="col-span-1 md:col-span-2 lg:col-span-1 min-h-[180px] flex items-center justify-center bg-black/40 relative">
                    <div className="relative w-full h-full min-h-[150px]">
                        <StatsImage
                            src="https://github-readme-stats.vercel.app/api?username=AbdiAliAbdi&show_icons=true&theme=dracula&bg_color=00000000&hide_border=true&title_color=00f3ff&text_color=ededed&icon_color=bc13fe"
                            alt="GitHub Stats"
                            className="object-contain"
                            errorMessage="STATS_SERVER_OFFLINE"
                        />
                    </div>
                </GlassCard>

                {/* Streak Stats */}
                <GlassCard className="col-span-1 min-h-[180px] flex items-center justify-center bg-black/40 relative">
                    <div className="relative w-full h-full min-h-[150px]">
                        <StatsImage
                            src="https://nirzak-streak-stats.vercel.app?user=AbdiAliAbdi&theme=dracula&hide_border=true&background=00000000&ring=bc13fe&currStreakLabel=00f3ff"
                            alt="GitHub Streak"
                            className="object-contain"
                            errorMessage="STREAK_DATA_UNAVAILABLE"
                        />
                    </div>
                </GlassCard>

                {/* Top Langs */}
                <GlassCard className="col-span-1 min-h-[180px] flex items-center justify-center bg-black/40 relative">
                    <div className="relative w-full h-full min-h-[150px]">
                        <StatsImage
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=AbdiAliAbdi&theme=dracula&bg_color=00000000&hide_border=true&title_color=00f3ff&text_color=ededed"
                            alt="Top Languages"
                            className="object-contain"
                            errorMessage="LANG_ANALYSIS_FAILED"
                        />
                    </div>
                </GlassCard>

                {/* Activity Graph - Full Width */}
                <GlassCard className="col-span-1 md:col-span-2 lg:col-span-3 min-h-[200px] flex items-center justify-center bg-black/40 overflow-hidden relative">
                    <div className="w-full overflow-x-auto">
                        <div className="relative w-full min-w-[600px] h-[180px]">
                            <StatsImage
                                src="https://github-readme-activity-graph.vercel.app/graph?username=AbdiAliAbdi&theme=react-dark&bg_color=050505&color=bc13fe&line=00f3ff&point=ffffff&area=true&hide_border=true"
                                alt="Activity Graph"
                                className="object-contain"
                                errorMessage="ACTIVITY_LOG_CORRUPTED"
                            />
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* Tech Stack Icons */}
            <div className="mt-10">
                <p className="text-center text-gray-400 mb-4 font-mono text-xs uppercase tracking-[0.3em]">Analyzed Competencies</p>
                <div className="flex justify-center flex-wrap gap-4">
                    <Image
                        src="https://skillicons.dev/icons?i=java,js,ts,react,nextjs,nodejs,python,mysql,mongodb,aws"
                        alt="Skills"
                        width={400}
                        height={50}
                        className="h-auto"
                        unoptimized
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default GitHubStats;
