import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/dbConnect";
import ExperienceModel from "@/model/shareExperience";

const PAGE_SIZE = 10;

const industryToInterviewCategoryMap: Record<string, string> = {
    private: "corporate",
    government: "government",
    competitive: "competitive-exam",
};

export async function GET(req: NextRequest) {
    try {
        // ✅ Connect to MongoDB only once
        await connectDb();

        const { searchParams } = new URL(req.url);

        // 🔢 Pagination & Search
        const page = parseInt(searchParams.get("page") || "1", 10);
        const search = searchParams.get("search") || "";

        // const query: any = {};
        const query: Record<string, unknown> = {};

        // 🔍 Text Search (multi-field)
        if (search.trim()) {
            const searchableFields = ["position", "company", "examName", "currentRole", "examStages", "industryType", "interviewCategory"];

            query.$or = searchableFields.map((field) => ({
                [field]: { $regex: search, $options: "i" }, // Case-insensitive partial match
            }));
        }

        // 🧠 Filters (dropdowns)
        const filterableFields = [
            "outcome", // selected / rejected
        ];

        for (const field of filterableFields) {
            const value = searchParams.get(field);
            if (value && value !== "all") {
                query[field] = value;
            }
        }

        const industryParam = searchParams.get("industry");

        if (industryParam && industryParam !== "all") {
            const mappedCategory = industryToInterviewCategoryMap[industryParam];
            if (mappedCategory) {
                query.interviewCategory = mappedCategory; // ✅ Apply this instead of industry
            }
        }

        console.log("🔎 Final Mongo Query:", query);

        // 📦 Fetch paginated and sorted results
        const total = await ExperienceModel.countDocuments(query);

        const experiences = await ExperienceModel.find(query)
            .sort({ createdAt: -1 }) // Newest first
            .skip((page - 1) * PAGE_SIZE)
            .limit(PAGE_SIZE)
            .lean(); // ⚡️ Faster, no Mongoose document overhead

        const formatted = experiences.map((exp) => ({
            id: exp._id as string,
            title: `${exp.position || "Untitled"} - ${exp.company || exp.examName || "Unknown"}`,
            company: exp.company || exp.examName || "Unknown",
            postedDate: `Posted ${new Date(exp.createdAt).toDateString()}`,
            summary: exp.additionalNotes,
            tags: exp.interviewTypes || [],
            rounds: exp.rounds || [],
            name: exp.name,
            outcome: exp.outcome,
            currRole: exp.currentRole,
            difficultyLevel: exp.difficultyLevel,
            upvote: exp.upvotes || 0,
        }));

        return NextResponse.json({
            experiences: formatted,
            pagination: {
                page,
                totalPages: Math.ceil(total / PAGE_SIZE),
                total,
            },
        });
    } catch (error) {
        console.error("❌ API Error:", error);
        return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
    }
}
