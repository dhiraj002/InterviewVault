// // components/ExperienceHeader.tsx

import { BadgeCheck, Building2, CalendarDays, Layers, User2, Trophy } from "lucide-react";
import { formatDistanceToNow, parse } from "date-fns";
interface ExperienceHeaderProps {
    data: {
        title?: string;
        position?: string;
        category: string;
        date: string;
        difficultyLevel: string;
        mode: string;
        salary?: string;
        result: string;
        tags?: string[];
        applicationSource: string;
        name: string;
    };
}

function capitalizeFirst(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function formatPostedAgo(dateString: string): string {
    const parsedDate = parse(dateString, "EEE MMM dd yyyy", new Date());
    const distance = formatDistanceToNow(parsedDate, { addSuffix: true });
    return `Posted ${distance.replace("about ", "")}`;
}

export default function ExperienceHeader({ data }: ExperienceHeaderProps) {
    // export default function ExperienceHeader() {
    return (
        <section className="space-y-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-bold text-white">{data.title} </h1>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <CalendarDays className="w-4 h-4" />
                    {/* <span>{format(data.date)}</span> */}
                    <span>{formatPostedAgo(data.date)}</span>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                <h6 className="font-bold text-white">{capitalizeFirst(data.name)}</h6>
                <div className="flex items-center gap-2">
                    <User2 className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">Category:</span>
                    <span className="text-white">{capitalizeFirst(data?.category)}</span>
                    {/* <span className="text-white">Private</span> */}
                </div>

                <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">Difficulty:</span>
                    <span className="text-white">{capitalizeFirst(data.difficultyLevel)}</span>
                    {/* <span className="text-white">Hard</span> */}
                </div>

                <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">Mode:</span>
                    <span className="text-white">{capitalizeFirst(data.mode)}</span>
                </div>

                {data?.salary && (
                    <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">Salary:</span>
                        <span className="text-white">{data.salary}</span>
                    </div>
                )}

                <div className="flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">Result:</span>
                    <span className={`font-semibold ${data.result === "Selected" ? "text-green-400" : data.result == "Rejected" ? "text-red-400" : "text-yellow-400"}`}>{capitalizeFirst(data.result)}</span>
                </div>
            </div>

            {/* {data.tags && data.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                    {data.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-700">
                            #{tag}
                        </span>
                    ))} */}
            {/* </div>
            )} */}
        </section>
    );
}

//***********************************************************************************************************************************************8 */

// "use client";

// import { ArrowLeft, Share2, Bookmark } from "lucide-react";
// import Link from "next/link";

// interface ExperienceHeaderProps {
//     company: string;
//     role: string;
//     rounds: number;
//     codingProblems: number;
// }

// // export function ExperienceHeader({ company, role, rounds, codingProblems }: ExperienceHeaderProps) {
// export default function ExperienceHeader() {
//     return (
//         <div className="relative w-full border-b border-gray-800 pb-4 mb-6">
//             {/* Go Back */}
//             <Link href="/browse" className="text-sm text-muted-foreground flex items-center gap-2 mb-4">
//                 <ArrowLeft className="w-4 h-4" />
//                 Go Back
//             </Link>

//             {/* Main Info */}
//             <div className="flex items-center justify-between">
//                 <div>
//                     <h1 className="text-xl md:text-2xl font-semibold">
//                         <span className="text-white">Google</span> <span className="text-muted-foreground font-normal">| Sde2</span>
//                     </h1>

//                     <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
//                         <div className="flex items-center gap-1">
//                             <ClockIcon className="w-4 h-4" />4 Rounds
//                         </div>
//                         <div className="flex items-center gap-1">
//                             <CodeIcon className="w-4 h-4" />4 Coding Problems
//                         </div>
//                     </div>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex items-center gap-4">
//                     <button className="hover:text-white text-muted-foreground">
//                         <Share2 className="w-5 h-5" />
//                     </button>
//                     <button className="hover:text-white text-muted-foreground">
//                         <Bookmark className="w-5 h-5" />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg viewBox="0 0 24 24" fill="none" {...props}>
//             <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//             <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={2} />
//         </svg>
//     );
// }

// function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
//     return (
//         <svg viewBox="0 0 24 24" fill="none" {...props}>
//             <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//             <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//     );
// }
