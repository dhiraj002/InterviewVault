"use client";

import Link from "next/link";

interface ExperienceCardProps {
    id?: string;
    title?: string;
    company: string;
    postedDate?: string;
    summary?: string;
    tags?: string[];
    rounds?: string[]; // you can replace `any` with `Round[]` if you have it typed
    name?: string;
    outcome?: "selected" | "rejected" | "pending";
    currRole?: string;
    difficultyLevel?: string;
    upvote?: number;
}

function capitalizeFirst(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default function ExperienceCard({ title, tags, summary, upvote, name, currRole, difficultyLevel, outcome }: ExperienceCardProps) {
    function getOutcomeColor(outcome: string) {
        console.log(outcome);
        const value = outcome.toLowerCase();
        if (value === "selected" || value === "offer received") return "bg-green-500";
        if (value === "rejected" || value === "not-selected") return "bg-red-500";
        return "bg-yellow-400";
    }

    return (
        <div className="bg-[#161b22] border border-gray-700 rounded-xl p-5 hover:border-blue-500 transition shadow-sm cursor-pointer">
            {/* Title & Subtitle */}
            <h3 className="font-semibold text-lg text-white mb-1">{title}</h3>
            {/* <p className="text-sm text-gray-400 mb-2">{subtitle}</p> */}

            {/* Metadata Row */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-300 font-medium mb-3">
                {name && <span>🙍 {name}</span>}
                {currRole && <span>💼 {capitalizeFirst(currRole)}</span>}
                {difficultyLevel && <span>💡 {capitalizeFirst(difficultyLevel)}</span>}
                {outcome && <span className={`px-2 py-1 rounded text-xs text-white font-semibold ${getOutcomeColor(outcome)}`}> {capitalizeFirst(outcome)}</span>}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
                {tags?.map((tag, i) => (
                    <span key={i} className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">
                        {capitalizeFirst(tag)}
                    </span>
                ))}
            </div>

            {/* Summary */}
            <p className="text-sm text-gray-300 mb-4 line-clamp-3">{summary}</p>

            {/* Footer */}
            <div className="flex justify-between  items-center text-xs text-gray-400">
                <span className="bold">👍 {upvote}</span>
                <Link href="#" className="text-blue-400 hover:underline">
                    Read More →
                </Link>
            </div>
        </div>
    );
}
