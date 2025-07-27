import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Retrieve token from either secure or default cookie
    const token = request.cookies.get("next-auth.session-token")?.value ?? request.cookies.get("__Secure-next-auth.session-token")?.value;

    // Define protected routes
    const protectedRoutes = ["/share-experience", "/dashboard"];

    // Check if current route is protected
    const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

    // If user is not authenticated and accessing protected route, redirect to login
    if (!token && isProtectedRoute) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("from", pathname); // optional: support redirect after login
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

// Middleware applies only to selected routes (can be expanded later)
export const config = {
    matcher: ["/share-experience/:path*", "/dashboard/:path*"], // include dashboard as well
};
