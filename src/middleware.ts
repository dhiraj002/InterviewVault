import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

    // If user is not logged in and trying to access a protected route
    if (!token && request.nextUrl.pathname.startsWith("/share-experience")) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("from", request.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
    }

    // Allow request to continue
    return NextResponse.next();
}
export const config = {
    matcher: [
        // Apply middleware to all routes except public ones
        "/share-experience/:path*",
    ],
};
