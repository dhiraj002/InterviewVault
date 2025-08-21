"use client";

import Link from "next/link";
import { useMemo } from "react";

interface ExperienceCardProps {
    id?: string;
    title?: string;
    company?: string;
    postedDate?: string;
    summary?: string;
    tags?: string[];
    rounds?: string[];
    name?: string;
    outcome?: "selected" | "rejected" | "pending" | string;
    currRole?: string;
    difficultyLevel?: string;

    // upvote?: number;
}

function capitalizeFirst(str: string) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";
}

function getOutcomeColor(outcome: string) {
    const value = outcome.toLowerCase();
    if (value === "selected" || value === "offer received") return "bg-green-500";
    if (value === "rejected" || value === "not-selected") return "bg-red-500";
    return "bg-yellow-400";
}

export default function ExperienceCard({ id, title, tags, summary, name, currRole, difficultyLevel, outcome }: ExperienceCardProps) {
    // Precompute formatted values

    const outcomeBadge = useMemo(() => {
        if (!outcome) return null;
        return <span className={`px-2 py-1 rounded text-xs text-white font-semibold ${getOutcomeColor(outcome)}`}>{capitalizeFirst(outcome)}</span>;
    }, [outcome]);

    return (
        // <div className="bg-[#161b22] border border-gray-700 rounded-xl p-5 hover:border-blue-500 transition-colors shadow-sm ">
        <div className={`bg-[#161b22] border border-gray-700 rounded-xl p-5 hover:border-blue-500 transition-colors shadow-sm h-full`}>
            {/* Title */}
            <h3 className="font-semibold text-lg text-white mb-2 truncate">{title || "Untitled Experience"}</h3>

            {/* Metadata */}
            <div className="flex flex-wrap gap-3 text-xs text-gray-300 font-medium mb-3">
                {name && <span>🙍 {name}</span>}
                {currRole && <span>💼 {capitalizeFirst(currRole)}</span>}
                {difficultyLevel && <span>💡 {capitalizeFirst(difficultyLevel)}</span>}
                {outcomeBadge}
            </div>

            {/* Tags */}
            {tags?.length ? (
                <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag, i) => (
                        <span key={i} className="bg-gray-700 text-xs px-2 py-1 rounded text-gray-200">
                            {capitalizeFirst(tag)}
                        </span>
                    ))}
                </div>
            ) : null}

            {/* Summary */}
            {summary && <p className="text-sm text-gray-300 mb-4 line-clamp-3">{summary}</p>}

            {/* Footer */}
            <div className="flex justify-between items-center text-xs text-gray-400">
                {/* <span>👍 {upvote}</span> */}
                {id ? (
                    <Link href={`/experience/${id}`} className="text-blue-400 hover:underline">
                        Read More →
                    </Link>
                ) : (
                    <span className="text-gray-500">No Details</span>
                )}
            </div>
        </div>
    );
}
