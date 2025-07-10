import { NextRequest, NextResponse } from "next/server";
import connectDb from "../../../lib/dbConnect";
import UserModel from "../../../model/user";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, password } = body;

        if (!firstName || !lastName || !email || !password) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }
        if (typeof firstName !== "string" || typeof lastName !== "string" || typeof email !== "string" || typeof password !== "string") {
            return NextResponse.json({ message: "Invalid input types" }, { status: 400 });
        }
        await connectDb();

        const userExists = await UserModel.findOne({ email });
        if (userExists) {
            return NextResponse.json({ message: "User already exists, please enter another email " }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await UserModel.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        return NextResponse.json({ message: "User created", userId: newUser._id }, { status: 201 });
    } catch (error) {
        console.error("Signup error:", error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}
