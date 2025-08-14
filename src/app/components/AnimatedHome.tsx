// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState, useRef } from "react";
// import Link from "next/link";

// export default function Hero() {
//     const [shouldAnimate, setShouldAnimate] = useState(false);
//     const hasAnimated = useRef(false);

//     useEffect(() => {
//         // Only animate on first mount (fresh load/reload)
//         // Check if this is truly the first render of this component instance
//         if (!hasAnimated.current) {
//             setShouldAnimate(true);
//             hasAnimated.current = true;
//         }
//     }, []);

//     // Animation variants for cleaner code
//     const fadeInUpVariants = {
//         hidden: { opacity: 0, y: 50 },
//         visible: { opacity: 1, y: 0 },
//     };

//     const fadeInVariants = {
//         hidden: { opacity: 0 },
//         visible: { opacity: 1 },
//     };

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.3,
//                 delayChildren: 0.1,
//             },
//         },
//     };

//     return (
//         <section className="bg-black text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//             {/* Background gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none" />

//             <motion.div className="max-w-6xl w-full text-center relative z-10" variants={containerVariants} initial={shouldAnimate ? "hidden" : "visible"} animate="visible">
//                 {/* Heading */}
//                 <motion.h1
//                     variants={fadeInUpVariants}
//                     transition={{
//                         duration: 0.8,
//                         ease: [0.25, 0.1, 0.25, 1], // Custom easing for smoother feel
//                     }}
//                     className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-tight"
//                 >
//                     Share Your <span className="block sm:inline bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">Interview Stories</span>
//                 </motion.h1>

//                 {/* Subheading */}
//                 <motion.p
//                     variants={fadeInUpVariants}
//                     transition={{
//                         duration: 0.8,
//                         ease: [0.25, 0.1, 0.25, 1],
//                     }}
//                     className="mt-4 sm:mt-6 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-2 leading-relaxed"
//                 >
//                     Discover, learn, and inspire with real interview experiences from top professionals around the world.
//                 </motion.p>

//                 {/* Buttons */}
//                 <motion.div
//                     variants={fadeInVariants}
//                     transition={{
//                         duration: 0.6,
//                         ease: [0.25, 0.1, 0.25, 1],
//                     }}
//                     className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
//                 >
//                     <Link
//                         href="/browse"
//                         className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5"
//                     >
//                         <span className="flex items-center justify-center gap-2">
//                             Browse Experiences
//                             <motion.span className="inline-block" animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
//                                 →
//                             </motion.span>
//                         </span>
//                     </Link>

//                     <Link
//                         href="/share-experience"
//                         className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-gray-500/25 transform hover:-translate-y-0.5"
//                     >
//                         <span className="flex items-center justify-center gap-2">
//                             Share Your Story
//                             <motion.span className="inline-block" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
//                                 ✨
//                             </motion.span>
//                         </span>
//                     </Link>
//                 </motion.div>

//                 {/* Feature highlights */}
//                 <motion.div
//                     variants={fadeInVariants}
//                     transition={{
//                         duration: 0.6,
//                         ease: [0.25, 0.1, 0.25, 1],
//                     }}
//                     className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-gray-400"
//                 >
//                     <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
//                         <span>Real Experiences</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                         <span>Top Companies</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                         <span>Career Growth</span>
//                     </div>
//                 </motion.div>
//             </motion.div>
//         </section>
//     );
// }

//**************************************************************************new below&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */

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
        <section className="bg-black text-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
    );
}
