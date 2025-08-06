import mongoose from "mongoose";
import connectDb from "../../../lib/dbConnect";
import ExperienceModel from "../../../model/shareExperience";

/**
 * Fetches a single interview experience by its ID.
 * @param id - The MongoDB document ID.
 * @returns The experience object or null.
 */
export async function getExperience(id: string) {
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            console.warn("Invalid ID format:", id);
            return null;
        }

        await connectDb();

        const experience = await ExperienceModel.findById(id).lean();

        if (!experience) {
            console.warn("Experience not found:", id);
            return null;
        }

        return experience;
    } catch (error) {
        console.error("Error fetching experience:", error);
        return null;
    }
}
