import connectDb from "../../../lib/dbConnect";
import Experience from "../../../model/shareExperience";

export interface Interview {
    id: string;
    title: string;
    company: string;
    status: "draft" | "review" | "pending" | "published";
    type: "corporate" | "startup" | "exam";
    date: string; // ISO date string
}

export async function getUserInterviews(userId: string): Promise<Interview[]> {
    try {
        await connectDb();

        const experiences = await Experience.find({ user: userId }).sort({ createdAt: -1 });

        const formatted: Interview[] = experiences.map((exp) => ({
            id: exp._id.toString(),
            title: `${exp.position || "Untitled"} - ${exp.company || exp.examName || "Unknown"}`,
            company: exp.company || exp.examName || "Unknown",
            status: exp?.status?.toLowerCase() || "draft",
            type: exp.interviewCategory || "corporate",
            date: exp.createdAt.toISOString().split("T")[0],
        }));

        return formatted;
    } catch (error) {
        console.error("❌ Failed to fetch formatted interviews:", error);
        return [];
    }
}
