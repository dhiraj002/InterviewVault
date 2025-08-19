// app/api/admin/users/route.ts
import { NextResponse, NextRequest } from "next/server";
import connectDb from "@/lib/dbConnect";
import User from "@/model/user";
import { Types } from "mongoose";

// GET /api/admin/users

// DELETE /api/admin/users/:id
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDb();

        const { id } = await params;
        console.log("Deleting user with ID:", id);

        // Validate ObjectId
        if (!Types.ObjectId.isValid(id)) {
            return NextResponse.json({ success: false, message: "Invalid user ID" }, { status: 400 });
        }

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "User deleted successfully" });
    } catch (error: unknown) {
        console.error("Error deleting user:", error);
        return NextResponse.json({ success: false, message: "Failed to delete user" }, { status: 500 });
    }
}
