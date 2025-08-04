// import ExperienceModel from "@/model/shareExperience";
// import connectDb from "@/lib/dbConnect";
// import { formatDistanceToNow } from "date-fns";

// interface GetExperienceParams {
//     page?: number;
//     limit?: number;
// }

// export async function getAllExperiences({ page = 1, limit = 1 }: GetExperienceParams) {
//     try {
//         await connectDb();

//         const skip = (page - 1) * limit;
//         const total = await ExperienceModel.countDocuments();
//         const experiences = await ExperienceModel.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit).lean();

//         const formattedExperiences = experiences.map((exp) => {
//             const createdAt = new Date(exp.createdAt);
//             return {
//                 id: exp._id,
//                 userId: exp.user,
//                 title: `${exp.position || "Untitled"} - ${exp.company || exp.examName || "Unknown"}`,
//                 company: exp.company || exp.examName || "Unknown",
//                 type: exp.interviewCategory || "corporate",
//                 postedDate: `Posted ${formatDistanceToNow(createdAt, { addSuffix: true })}`,
//                 summary: exp.additionalNotes,
//                 votes: exp.upvotes,
//                 tags: exp.interviewTypes,
//                 rounds: exp.rounds,
//                 name: exp.name,
//                 outcome: exp.outcome,
//                 currRole: exp.currentRole,
//                 difficultyLevel: exp.difficultyLevel,
//             };
//         });

//         return {
//             data: formattedExperiences,
//             pagination: {
//                 total,
//                 page,
//                 totalPages: Math.ceil(total / limit),
//             },
//         };
//     } catch (error) {
//         console.error("DB fetch error:", error);
//         return { data: [], error: "Failed to fetch experiences" };
//     }
// }
