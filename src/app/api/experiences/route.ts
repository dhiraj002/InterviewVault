// import { NextRequest, NextResponse } from "next/server";
// import connectDb from "@/lib/dbConnect";
// import ExperienceModel from "@/model/shareExperience";

// const DEFAULT_PAGE_SIZE = 10; // ✅ Larger default for production
// const MAX_PAGE_SIZE = 50; // ✅ Safety limit

// const industryToInterviewCategoryMap: Record<string, string> = {
//     private: "corporate",
//     government: "government",
//     competitive: "competitive-exam",
// };

// // ✅ Predefine fields to return for performance
// const EXPERIENCE_FIELDS = "position company examName createdAt additionalNotes interviewTypes rounds name outcome currentRole difficultyLevel upvotes";

// export async function GET(req: NextRequest) {
//     try {
//         await connectDb(); // ✅ Cached connection

//         const { searchParams } = new URL(req.url);

//         // 🔢 Pagination
//         const page = Math.max(parseInt(searchParams.get("page") || "1", 10), 1);
//         const pageSize = Math.min(Math.max(parseInt(searchParams.get("limit") || DEFAULT_PAGE_SIZE.toString(), 10), 1), MAX_PAGE_SIZE);

//         // 🔍 Search
//         const search = searchParams.get("search")?.trim() || "";
//         // const query: Record<string, any> = {};
//         // const query: Record<string, string | number | boolean | any> = {};
//         const query: { [key: string]: unknown } = {};

//         if (search) {
//             // ✅ Use $text only if index exists, fallback to regex
//             const indexes = await ExperienceModel.collection.indexes();
//             const hasTextIndex = indexes.some((idx) => Object.keys(idx.key).some((k) => idx.key[k] === "text"));

//             if (hasTextIndex) {
//                 query.$text = { $search: search };
//             } else {
//                 query.$or = [{ position: { $regex: search, $options: "i" } }, { company: { $regex: search, $options: "i" } }, { examName: { $regex: search, $options: "i" } }, { additionalNotes: { $regex: search, $options: "i" } }];
//             }
//         }

//         // 🧠 Filters
//         const filterableFields = ["outcome"];
//         for (const field of filterableFields) {
//             const value = searchParams.get(field);
//             if (value && value !== "all") {
//                 query[field] = value;
//             }
//         }

//         // 🏭 Industry mapping
//         const industryParam = searchParams.get("industry");
//         if (industryParam && industryParam !== "all") {
//             const mappedCategory = industryToInterviewCategoryMap[industryParam];
//             if (mappedCategory) query.interviewCategory = mappedCategory;
//         }

//         // ✅ Run queries in parallel
//         const [total, experiences] = await Promise.all([
//             ExperienceModel.countDocuments(query),
//             ExperienceModel.find(query)
//                 .sort({ createdAt: -1 }) // ✅ Make sure createdAt is indexed
//                 .skip((page - 1) * pageSize)
//                 .limit(pageSize)
//                 .select(EXPERIENCE_FIELDS)
//                 .lean(),
//         ]);

//         // 📝 Format results for frontend
//         const formatted = experiences.map((exp) => ({
//             id: typeof exp._id === "string" ? exp._id : String(exp._id),
//             title: `${exp.position || "Untitled"} - ${exp.company || exp.examName || "Unknown"}`,
//             company: exp.company || exp.examName || "Unknown",
//             postedDate: new Date(exp.createdAt).toDateString(),
//             summary: exp.additionalNotes,
//             tags: exp.interviewTypes || [],
//             rounds: exp.rounds || [],
//             name: exp.name,
//             outcome: exp.outcome,
//             currRole: exp.currentRole,
//             difficultyLevel: exp.difficultyLevel,
//             //upvote: exp.upvotes || 0,
//         }));

//         return NextResponse.json({
//             experiences: formatted,
//             pagination: {
//                 page,
//                 totalPages: Math.ceil(total / pageSize),
//                 total,
//             },
//         });
//     } catch (error) {
//         console.error("❌ API Error:", error);
//         return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//     }
// }

// app/api/experiences/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/dbConnect";
import ExperienceModel from "@/model/shareExperience";

const DEFAULT_PAGE_SIZE = 10;
const MAX_PAGE_SIZE = 50;

const industryToInterviewCategoryMap: Record<string, string> = {
    private: "corporate",
    government: "government",
    competitive: "competitive-exam",
};

const EXPERIENCE_FIELDS = "position company examName createdAt additionalNotes interviewTypes rounds name outcome currentRole difficultyLevel upvotes status";

export async function GET(req: NextRequest) {
    try {
        await connectDb();

        const { searchParams } = new URL(req.url);

        const page = Math.max(parseInt(searchParams.get("page") || "1", 10), 1);
        const pageSize = Math.min(Math.max(parseInt(searchParams.get("limit") || DEFAULT_PAGE_SIZE.toString(), 10), 1), MAX_PAGE_SIZE);

        const search = searchParams.get("search")?.trim() || "";
        const query: { [key: string]: unknown } = {
            status: "published", // ✅ Only published experiences
        };

        if (search) {
            const indexes = await ExperienceModel.collection.indexes();
            const hasTextIndex = indexes.some((idx) => Object.keys(idx.key).some((k) => idx.key[k] === "text"));

            if (hasTextIndex) {
                query.$text = { $search: search };
            } else {
                query.$or = [{ position: { $regex: search, $options: "i" } }, { company: { $regex: search, $options: "i" } }, { examName: { $regex: search, $options: "i" } }, { additionalNotes: { $regex: search, $options: "i" } }];
            }
        }

        const filterableFields = ["outcome"];
        for (const field of filterableFields) {
            const value = searchParams.get(field);
            if (value && value !== "all") {
                query[field] = value;
            }
        }

        const industryParam = searchParams.get("industry");
        if (industryParam && industryParam !== "all") {
            const mappedCategory = industryToInterviewCategoryMap[industryParam];
            if (mappedCategory) query.interviewCategory = mappedCategory;
        }

        const [total, experiences] = await Promise.all([
            ExperienceModel.countDocuments(query),
            ExperienceModel.find(query)
                .sort({ createdAt: -1 })
                .skip((page - 1) * pageSize)
                .limit(pageSize)
                .select(EXPERIENCE_FIELDS)
                .lean(),
        ]);

        const formatted = experiences.map((exp) => ({
            id: typeof exp._id === "string" ? exp._id : String(exp._id),
            title: `${exp.position || "Untitled"} - ${exp.company || exp.examName || "Unknown"}`,
            company: exp.company || exp.examName || "Unknown",
            postedDate: new Date(exp.createdAt).toDateString(),
            summary: exp.additionalNotes,
            tags: exp.interviewTypes || [],
            rounds: exp.rounds || [],
            name: exp.name,
            outcome: exp.outcome,
            currRole: exp.currentRole,
            difficultyLevel: exp.difficultyLevel,
            status: exp.status, // ✅ useful if frontend wants to check
        }));

        return NextResponse.json({
            experiences: formatted,
            pagination: {
                page,
                totalPages: Math.ceil(total / pageSize),
                total,
            },
        });
    } catch (error) {
        console.error("❌ API Error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
