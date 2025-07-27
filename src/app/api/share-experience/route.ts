import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../lib/authOptions"; // adjust if your path differs
import connectDb from "../../../lib/dbConnect";
import UserModel from "../../../model/user";
import Experience from "../../../model/shareExperience";

export async function POST(req: NextRequest) {
    try {
        await connectDb();

        const session = await getServerSession(authOptions);
        if (!session || !session.user?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const user = await UserModel.findOne({ email: session.user.email });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const data = await req.json();

        const newExperience = await Experience.create({
            ...data,
            user: user._id,
        });

        return NextResponse.json({ success: true, experience: newExperience }, { status: 201 });
    } catch (err) {
        console.error("Error saving experience:", err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
