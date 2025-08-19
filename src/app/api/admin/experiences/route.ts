// app/api/admin/experiences/route.ts
import { NextResponse } from "next/server";
import connectDb from "@/lib/dbConnect";
import Experience from "@/model/shareExperience"; // Make sure this exists

// GET /api/admin/experiences
export async function GET() {
    try {
        await connectDb();

        // Fetch all experiences, select only needed fields (for example)
        const experiences = await Experience.find({}, "position company interviewCategory examName status createdAt name")
            .sort({ createdAt: -1 }) // newest first
            .lean();

        const formattedExperiences = experiences.map((exp) => ({
            id: exp._id as string,
            title: `${exp.position || "Untitled"} - ${exp.company || exp.examName || "Unknown"}`,
            company: exp.company || exp.examName || "Unknown",
            status: exp?.status?.toLowerCase() || "draft",
            type: exp.interviewCategory || "corporate",
            date: exp.createdAt.toISOString().split("T")[0],
            name: exp.name || "Unknown",
        }));

        return NextResponse.json({
            success: true,
            count: formattedExperiences.length,
            formattedExperiences,
        });
    } catch (error: unknown) {
        console.error("Error fetching experiences:", error);
        return NextResponse.json({ success: false, message: "Failed to fetch experiences" }, { status: 500 });
    }
}
