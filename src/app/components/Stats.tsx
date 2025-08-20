"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Stats {
    totalUsers: number;
    totalExperiences: number;
    pendingApprovals: number;
}

export default function StatsSection() {
    const [stats, setStats] = useState<Stats>({
        totalUsers: 0,
        totalExperiences: 0,
        pendingApprovals: 0,
    });

    useEffect(() => {
        let isMounted = true;

        const fetchStats = async () => {
            try {
                const res = await fetch("/api/admin/stats");
                if (!res.ok) throw new Error("Failed to fetch stats");
                const data = await res.json();

                if (isMounted && data.success) {
                    setStats(data.stats);
                }
            } catch (err) {
                console.error("Failed to fetch stats:", err);
                // keep defaults (0) if error occurs
            }
        };

        fetchStats();
        return () => {
            isMounted = false;
        };
    }, []);

    const cards = [
        {
            title: "Total Users",
            value: stats.totalUsers,
            color: "text-purple-400",
        },
        {
            title: "Total Experiences",
            value: stats.totalExperiences,
            color: "text-blue-400",
        },
        {
            title: "Exam Categories",
            value: 5,
            color: "text-green-400",
        },
    ];

    return (
        <>
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
                    {cards.map((stat, i) => (
                        <motion.div
                            key={stat.title}
                            custom={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                            className="border border-gray-800 bg-gray-900/50 rounded-lg p-6 text-center backdrop-blur-sm hover:shadow-md hover:border-purple-500/30 "
                        >
                            <h3 className={`text-3xl sm:text-4xl font-bold ${stat.color}`}>{stat.value}</h3>
                            <p className="text-gray-300 mt-2 text-sm sm:text-base">{stat.title}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}
