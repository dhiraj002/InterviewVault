// app/api/share-experience/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();

    // ✅ validate required fields
    if (!body.title || !body.examType || !body.year || !body.location || !body.outcome || !body.summary || !body.detailedExperience) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("Received interview experience:", body);

    return NextResponse.json({ message: "Success" });
}
