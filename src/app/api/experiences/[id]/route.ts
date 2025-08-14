import { NextResponse, NextRequest } from "next/server";
import mongoose from "mongoose";

import connectDb from "@/lib/dbConnect";
import ExperienceModel from "@/model/shareExperience";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ error: "Invalid experience ID" }, { status: 400 });
    }

    try {
        await connectDb();

        const experience = await ExperienceModel.findById(id).lean();

        if (!experience) {
            return NextResponse.json({ error: "Experience not found" }, { status: 404 });
        }

        return NextResponse.json(experience);
    } catch (error) {
        debugger;
        console.error("Error fetching experience:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
