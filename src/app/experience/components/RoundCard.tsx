"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface InterviewRound {
    id: string;
    name: string;
    type: string;
    mode: string;
    difficulty: string;
    duration: string;
    summary: string;
    questions: string[];
    feedback: string;
    outcome: string;
}

interface RoundCardProps {
    rounds: InterviewRound[];
}

function capitalizeFirst(str: string) {
    // return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    if (!str.trim()) return "";

    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

export default function RoundCard({ rounds }: RoundCardProps) {
    const [activeRoundId, setActiveRoundId] = useState<string | null>(null);

    const toggleRound = (id: string) => {
        setActiveRoundId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="space-y-4">
            {rounds.map((round) => {
                const isOpen = activeRoundId === round.id;

                return (
                    <div key={round.id} className="border border-gray-700 rounded-2xl overflow-hidden bg-[#161b22]">
                        {/* Header */}
                        <button onClick={() => toggleRound(round.id)} className="w-full text-left px-4 py-4 bg-[#0d1117] hover:bg-[#1a1f26] transition duration-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-white text-lg font-semibold">{capitalizeFirst(round.name)}</h2>
                                {isOpen ? <ChevronUp className="text-white" size={25} /> : <ChevronDown className="text-white" size={25} />}
                            </div>

                            {/* Metadata */}
                            <div className="flex flex-wrap gap-2 mt-3 text-sm text-gray-300">
                                <div className="bg-gray-800 px-3 py-1 rounded">Outcome: {capitalizeFirst(round.outcome)}</div>
                                <div className="bg-gray-800 px-3 py-1 rounded">Type: {capitalizeFirst(round.type)}</div>
                                <div className="bg-gray-800 px-3 py-1 rounded">Mode: {capitalizeFirst(round.mode)}</div>
                                <div className="bg-gray-800 px-3 py-1 rounded">Difficulty: {capitalizeFirst(round.difficulty)}</div>
                                <div className="bg-gray-800 px-3 py-1 rounded">Duration: {round.duration}</div>
                            </div>
                        </button>

                        {/* Accordion Content */}
                        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                            <div className="p-5 space-y-5 text-gray-200 text-[16px] leading-relaxed">
                                {/* Summary */}
                                <div>
                                    <h3 className="text-white font-semibold mb-1 text-[16px]">Summary</h3>
                                    <p>{round.summary}</p>
                                </div>

                                {/* Questions */}
                                <div>
                                    <h3 className="text-white font-semibold mb-1 text-[16px]">Questions</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                                        {round.questions
                                            .map((q) => q.trim())
                                            .filter((q) => q.length > 0)
                                            .map((q, i) => (
                                                <li key={i}>{q}</li>
                                            ))}
                                    </ul>
                                </div>

                                {/* Feedback */}
                                {round.feedback && (
                                    <div>
                                        <h3 className="text-white font-semibold mb-1 text-[16px]">Feedback</h3>
                                        <p>{round.feedback}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
