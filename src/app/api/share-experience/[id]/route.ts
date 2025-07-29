// app/api/share-experience/[id]/route.ts

import { NextResponse, NextRequest } from "next/server";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../../lib/authOptions"; // adjust if your path differs
import connectDb from "../../../../lib/dbConnect";
import Experience from "../../../../model/shareExperience";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    await connectDb();

    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const experience = await Experience.findById(params.id);

        if (!experience) {
            return NextResponse.json({ message: "Experience not found" }, { status: 404 });
        }

        // Optional: If you want to ensure users can only delete their own entries:
        // if (experience.email !== session.user.email) {
        //     return NextResponse.json({ message: "Forbidden" }, { status: 403 });
        // }

        await Experience.findByIdAndDelete(params.id);

        return NextResponse.json({ message: "Experience deleted successfully" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Failed to delete experience" }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        await connectDb();
        const body = await req.json();

        const updated = await Experience.findByIdAndUpdate(params.id, { $set: body }, { new: true });

        if (!updated) {
            return NextResponse.json({ error: "Experience not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Experience updated successfully", experience: updated });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
