// app/api/admin/experiences/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import connectDB from "@/lib/dbConnect";
import Experience from "@/model/shareExperience";

export const PATCH = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    await connectDB();
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const { id } = await params;
        const { status } = await req.json();
        console.log("Updating experience:", { id, status });

        // 1. Find the experience first
        const experience = await Experience.findById(id);
        if (!experience) {
            return NextResponse.json({ error: "Experience not found" }, { status: 404 });
        }

        // 2. Check ownership or admin
        const userId = session.user.id; // make sure your session has user.id stored
        const isAdmin = session.user.isAdmin; // also add this in your session if needed

        // Ownership or admin check
        if (experience.user.toString() !== userId && !isAdmin) {
            return NextResponse.json({ message: "Access denied. Only the owner or an admin can edit this experience." }, { status: 403 });
        }

        if (!status) {
            return NextResponse.json({ message: "Status is required" }, { status: 400 });
        }

        const updatedExp = await Experience.findByIdAndUpdate(id, { $set: { status } }, { new: true });

        if (!updatedExp) {
            return NextResponse.json({ message: "Experience not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "Experience status updated successfully",
            experience: updatedExp,
        });
    } catch (error) {
        console.error("Error updating experience status:", error);
        return NextResponse.json({ message: "Failed to update experience status" }, { status: 500 });
    }
};
