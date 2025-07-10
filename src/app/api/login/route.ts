import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDb from "../../../lib/dbConnect";
import UserModel from "../../../model/user";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
        }

        await connectDb();

        const user = await UserModel.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: "User not found. Please sign up first." }, { status: 404 });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ message: "Incorrect password or username" }, { status: 401 });
        }

        const JWT_SECRET = process.env.JWT_SECRET;
        const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

        if (!JWT_SECRET) {
            throw new Error("JWT_SECRET not defined in environment variables");
        }

        // ✅ Generate token safely
        const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN } as unknown as jwt.SignOptions);

        // ✅ Send as secure HttpOnly cookie
        const response = NextResponse.json({ message: "Login successful", userId: user._id }, { status: 200 });

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60, // 7 days
            path: "/",
        });

        return response;
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}
