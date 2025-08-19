import { NextResponse } from "next/server";

import Experience from "@/model/shareExperience";

import connectDb from "@/lib/dbConnect";
import User from "@/model/user";

// GET /api/admin/stats
export async function GET() {
    try {
        await connectDb();

        const totalUsers = await User.countDocuments();
        const totalExperiences = await Experience.countDocuments();
        const pendingApprovals = await Experience.countDocuments({ status: "pending" });

        return NextResponse.json({
            success: true,
            stats: {
                totalUsers,
                totalExperiences,
                pendingApprovals,
            },
        });
    } catch (error: unknown) {
        console.error("Error fetching stats:", error);
        return NextResponse.json({ success: false, message: "Failed to fetch stats" }, { status: 500 });
    }
}
