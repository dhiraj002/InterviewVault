// app/api/share-experience/[id]/route.ts

import { NextResponse, NextRequest } from "next/server";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../lib/authOptions"; // adjust if your path differs
import connectDb from "../../../../lib/dbConnect";
import Experience from "../../../../model/shareExperience";
export const DELETE = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    await connectDb();
    const { id } = await params;

    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const experience = await Experience.findById(id);

        if (!experience) {
            return NextResponse.json({ message: "Experience not found" }, { status: 404 });
        }

        await Experience.findByIdAndDelete(id);

        return NextResponse.json({ message: "Experience deleted successfully" }, { status: 200 });
    } catch {
        return NextResponse.json({ message: "Failed to delete experience" }, { status: 500 });
    }
};

// Patch /api/share-experience/:id
export const PATCH = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    await connectDb();

    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const { id } = await params;

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
        const body = await req.json();
        const updated = await Experience.findByIdAndUpdate(id, { $set: body }, { new: true });

        if (!updated) {
            return NextResponse.json({ error: "Experience not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Experience updated successfully", experience: updated });
    } catch {
        return NextResponse.json({ message: "Failed to updated experience" }, { status: 500 });
    }
};
