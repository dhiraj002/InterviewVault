// "use client";

// import { useEffect, useState } from "react";

// export default function StatsSection() {
//     const [stats, setStats] = useState({
//         totalUsers: 0,
//         totalExperiences: 0,
//         pendingApprovals: 0,
//     });

//     useEffect(() => {
//         const fetchStats = async () => {
//             try {
//                 const res = await fetch("/api/admin/stats");
//                 const data = await res.json();
//                 if (data.success) {
//                     setStats(data.stats);
//                 }
//             } catch (err) {
//                 console.error("Failed to fetch stats:", err);
//             }
//         };

//         fetchStats();
//     }, []);

//     const cards = [
//         {
//             title: "Total Users",
//             value: stats.totalUsers,
//             color: "from-indigo-500 to-indigo-700",
//         },
//         {
//             title: "Total Experiences",
//             value: stats.totalExperiences,
//             color: "from-green-500 to-green-700",
//         },
//         {
//             title: "Pending Approvals",
//             value: stats.pendingApprovals,
//             color: "from-yellow-500 to-yellow-700",
//         },
//     ];

//     return (
//         // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 mt-10">
//         //     {cards.map((card, i) => (
//         //         <div key={i} className={`p-6 rounded-xl shadow-md text-center bg-gradient-to-br ${card.color} text-white flex flex-col justify-center items-center hover:scale-105 transition-transform max-w-xs mx-auto w-full`}>
//         //             <h2 className="text-base font-medium">{card.title}</h2>
//         //             <p className="text-3xl font-bold mt-2">{card.value}</p>
//         //         </div>
//         //     ))}
//         // </div>

//         <div className="flex flex-wrap justify-center gap-4 mb-6 mt-6">
//             {cards.map((card, i) => (
//                 <div key={i} className={`px-4 py-3 rounded-lg shadow-md bg-gradient-to-br ${card.color} text-white flex flex-col items-center w-40`}>
//                     <h2 className="text-sm font-medium">{card.title}</h2>
//                     <p className="text-xl font-bold">{card.value}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

"use client";

import { useEffect, useState } from "react";

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
            color: "from-indigo-500 to-indigo-700",
        },
        {
            title: "Total Experiences",
            value: stats.totalExperiences,
            color: "from-green-500 to-green-700",
        },
        {
            title: "Pending Approvals",
            value: stats.pendingApprovals,
            color: "from-yellow-500 to-yellow-700",
        },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-6 mt-6">
            {cards.map((card, i) => (
                <div key={i} className={`px-4 py-3 rounded-lg shadow-md bg-gradient-to-br ${card.color} text-white flex flex-col items-center w-40`}>
                    <h2 className="text-sm font-medium">{card.title}</h2>
                    <p className="text-xl font-bold">{card.value}</p>
                </div>
            ))}
        </div>
    );
}
