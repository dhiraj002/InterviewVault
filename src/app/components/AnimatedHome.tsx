"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
    // const [shouldAnimate, setShouldAnimate] = useState(true);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // Small delay to ensure smooth animation start
        const timer = setTimeout(() => {
            setIsInitialized(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    // Animation variants for cleaner code
    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.1,
            },
        },
    };

    return (
        <>
            {/* <section className="bg-black text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"> */}
            <section className="bg-black text-white min-h-[80vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none" />

                <motion.div className="max-w-6xl w-full text-center relative z-10" variants={containerVariants} initial="hidden" animate={isInitialized ? "visible" : "hidden"}>
                    {/* Heading */}
                    <motion.h1
                        variants={fadeInUpVariants}
                        transition={{
                            duration: 0.8,
                            ease: [0.25, 0.1, 0.25, 1], // Custom easing for smoother feel
                        }}
                        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-tight"
                    >
                        Share Your <span className="block sm:inline bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Interview Stories</span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        variants={fadeInUpVariants}
                        transition={{
                            duration: 0.8,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="mt-4 sm:mt-6 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-2 leading-relaxed"
                    >
                        Discover, learn, and inspire with real interview experiences from top professionals around the world.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={fadeInVariants}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
                    >
                        <Link
                            href="/browse"
                            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Browse Experiences
                                <motion.span className="inline-block" animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                                    →
                                </motion.span>
                            </span>
                        </Link>

                        <Link
                            href="/share-experience"
                            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-gray-500/25 transform hover:-translate-y-0.5"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Share Your Story
                                <motion.span className="inline-block" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                                    ✨
                                </motion.span>
                            </span>
                        </Link>
                    </motion.div>

                    {/* Feature highlights */}
                    <motion.div
                        variants={fadeInVariants}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-gray-400"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span>Real Experiences</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Top Companies</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Career Growth</span>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="bg-black py-16 px-4 sm:px-6 lg:px-8 relative">
                {/* Seamless section border gradient */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-white"
                    >
                        Platform Statistics
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {[
                            { value: "5K+", label: "Interview Experiences", color: "text-blue-400" },
                            { value: "50+", label: "Exam Categories", color: "text-green-400" },
                            { value: "25K+", label: "Active Users", color: "text-purple-400" },
                            // { value: "95%", label: "Success Rate", color: "text-orange-400" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                custom={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                                className="border border-gray-800 bg-gray-900/50 rounded-lg p-6 text-center backdrop-blur-sm hover:shadow-md hover:border-purple-500/30 transition-all duration-300"
                            >
                                <h3 className={`text-3xl sm:text-4xl font-bold ${stat.color}`}>{stat.value}</h3>
                                <p className="text-gray-300 mt-2 text-sm sm:text-base">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose InterviewVault Section */}
            <section className="py-8 sm:py-12 md:py-16 px-4 bg-black relative">
                {/* Seamless connection gradient */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-white"
                    >
                        Why Choose InterviewVault?
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                            className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300 p-4 sm:p-6 rounded-lg bg-gray-900/50 border border-gray-800/50 hover:border-blue-500/30 backdrop-blur-sm"
                        >
                            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:border-blue-400/50 transition-colors duration-300">
                                <span className="text-xl sm:text-2xl md:text-3xl">📝</span>
                            </div>
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">Detailed Experiences</h3>
                            <p className="text-xs sm:text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                                Get comprehensive interview experiences with specific questions, tips, and preparation strategies.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                            className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300 p-4 sm:p-6 rounded-lg bg-gray-900/50 border border-gray-800/50 hover:border-green-500/30 backdrop-blur-sm"
                        >
                            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:border-green-400/50 transition-colors duration-300">
                                <span className="text-xl sm:text-2xl md:text-3xl">🔍</span>
                            </div>
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-green-400 transition-colors duration-300">Easy Search</h3>
                            <p className="text-xs sm:text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                                Filter experiences by exam type, year, location, and specific topics you want to focus on.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300 p-4 sm:p-6 rounded-lg bg-gray-900/50 border border-gray-800/50 hover:border-purple-500/30 backdrop-blur-sm sm:col-span-2 lg:col-span-1"
                        >
                            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:border-purple-400/50 transition-colors duration-300">
                                <span className="text-xl sm:text-2xl md:text-3xl">🤝</span>
                            </div>
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">Community Support</h3>
                            <p className="text-xs sm:text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                                Connect with fellow aspirants, ask questions, and get guidance from successful candidates.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
