// app/api/admin/users/route.ts
import { NextResponse } from "next/server";
import connectDb from "@/lib/dbConnect";
import User from "@/model/user";

// GET /api/admin/users
export async function GET() {
    try {
        await connectDb();

        // Fetch only firstName, lastName, and email
        const users = await User.find({}, "firstName email lastName").lean();

        return NextResponse.json({
            success: true,
            count: users.length,
            users,
        });
    } catch (error: unknown) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ success: false, message: "Failed to fetch users" }, { status: 500 });
    }
}
