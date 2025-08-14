"use client";

import { useEffect, useState } from "react";
import ExperienceHeader from "../components/ExperienceHeader";
import RoundCard from "../components/RoundCard";
import OverallExperience from "../components/OverallExperience";

// Type definitions
interface RoundDetails {
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

interface Experience {
    _id: string;
    position: string;
    company: string;
    examName: string;
    status: string;
    interviewCategory: string;
    createdAt: string;
    difficultyLevel: string;
    applicationSource: string;
    interviewFormat: string;
    salaryRange: string;
    name: string;
    outcome: "selected" | "rejected" | "pending";
    rounds: RoundDetails[];
    preprationTips: string;
    additionalNotes: string;
    surprisingAspects?: string;
    email: string;
    overallRating: number;
}

export default function ExperienceWrapper({ id }: { id: string }) {
    const [experience, setExperience] = useState<Experience | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchExperience() {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(`/api/experiences/${id}`);

                if (!res.ok) throw new Error("Failed to fetch experience");
                const data = await res.json();
                console.log(data);

                setExperience(data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Something went wrong");
                }
            } finally {
                setLoading(false);
            }
        }

        fetchExperience();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
                {/* Skeleton loading UI */}
                <div className="h-8 w-48 bg-gray-700 rounded mb-6 animate-pulse"></div>
                <div className="space-y-2 w-full max-w-4xl">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="h-10 bg-gray-700 rounded animate-pulse" />
                    ))}
                </div>
            </div>
        );
    }

    if (error || !experience) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-2xl font-semibold text-gray-100 mb-2">Experience Not Found</h2>
                <p className="text-gray-400">The interview experience you are looking for might have been removed or does not exist.</p>
            </div>
        );
    }

    // Process the experience data
    const expHeaderData = {
        id: experience._id,
        title: `${experience.position || "Untitled"} - ${experience.company || experience.examName || "Unknown"}`,
        company: experience.company || experience.examName || "Unknown",
        status: experience.status?.toLowerCase() || "draft",
        category: experience.interviewCategory || "corporate",
        date: new Date(experience.createdAt).toDateString(),
        difficultyLevel: experience.difficultyLevel,
        applicationSource: experience.applicationSource,
        mode: experience.interviewFormat,
        salary: experience.salaryRange,
        name: experience.name || "Anonymous",
        email: experience.email,
        result: experience.outcome === "selected" ? "Selected" : experience.outcome === "rejected" ? "Rejected" : "Pending",
        overallRating: experience.overallRating,
    };

    const rounds = experience.rounds.map((round) => ({
        id: round.id,
        name: round.name,
        type: round.type,
        mode: round.mode,
        difficulty: round.difficulty,
        duration: round.duration,
        summary: round.summary,
        questions: round.questions,
        feedback: round.feedback,
        outcome: round.outcome,
    }));

    return (
        <main className="px-4 md:px-10 py-6 max-w-5xl mx-auto">
            {/* Experience Header */}
            <ExperienceHeader data={expHeaderData} />

            {/* Interview Rounds Section */}
            <div className="rounded-lg border border-gray-700 bg-[#0d1117] p-4 shadow-sm mt-6">
                <h1 className="text-2xl md:text-2xl font-bold text-white mb-5">Interview Rounds</h1>
                {experience.rounds.length > 0 && <RoundCard rounds={rounds} />}
            </div>

            {/* Overall Experience */}
            <OverallExperience preprationTips={experience.preprationTips} generalAdvice={experience.additionalNotes} surprisingAspects={experience?.surprisingAspects} />
        </main>
    );
}
