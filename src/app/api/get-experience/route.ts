// src/app/api/share-experience/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import connectDb from "@/lib/dbConnect";
import Experience from "../../../model/shareExperience";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session || !session.user?.email) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        await connectDb();

        const experiences = await Experience.find({
            email: session.user.email,
        }).sort({ createdAt: -1 });

        return NextResponse.json({ experiences }, { status: 200 });
    } catch (error) {
        console.error("Error fetching experiences:", error);
        return NextResponse.json({ message: "Failed to fetch experiences" }, { status: 500 });
    }
}
