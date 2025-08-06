// app/experience/[id]/page.tsx
import { Metadata } from "next";
import ExperienceHeader from "../components/ExperienceHeader";
import RoundCard from "../components/RoundCard";
import { getExperience } from "../action/action";
import OverallExperience from "../components/OverallExperience";

interface RoundDetails {
    id: string;
    name: string;
    type: string;
    mode: string;
    difficulty: string;
    duration: string;
    summary: string;
    questions: string;
    feedback: string;
    outcome: string;
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Experience Detail | InterviewVault",
    };
}

export default async function ExperiencePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await getExperience(id);

    // Ensure data is an object, not an array
    const experience = Array.isArray(data) ? data[0] : data;

    if (!experience) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-2xl font-semibold text-gray-100 mb-2">Experience Not Found</h2>
                <p className="text-gray-400">The interview experience you're looking for might have been removed or doesn't exist.</p>
            </div>
        );
    }

    const expHeaderData = {
        id: experience?._id,
        title: `${experience?.position || "Untitled"} - ${experience?.company || experience?.examName || "Unknown"}`,
        company: experience?.company || experience?.examName || "Unknown",
        status: experience?.status?.toLowerCase() || "draft",
        category: experience?.interviewCategory || "corporate",
        date: new Date(experience.createdAt).toDateString(),
        difficultyLevel: experience?.difficultyLevel,
        applicationSource: experience?.applicationSource,
        mode: experience?.interviewFormat,
        salary: experience?.salaryRange,
        name: experience?.name || "Anonymous",
        result: experience?.outcome === "selected" ? "Selected" : experience?.outcome === "rejected" ? "Rejected" : "Pending",
        // ? experience.createdAt.toISOString().split("T")[0] : ""
    };

    const rounds = experience?.rounds?.map((round: RoundDetails) => ({
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
            <ExperienceHeader data={expHeaderData} />
            <div className="rounded-lg border border-gray-700 bg-[#0d1117] p-4 shadow-sm mt-6">
                <h1 className="text-2xl md:text-2xl font-bold text-white mb-5">Interview Rounds</h1>
                {experience?.rounds && <RoundCard rounds={rounds} />}
            </div>

            <OverallExperience preprationTips={experience?.preprationTips} generalAdvice={experience?.additionalNotes} />
        </main>
    );
}
