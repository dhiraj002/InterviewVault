import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Retrieve token from either secure or default cookie
    const token = request.cookies.get("next-auth.session-token")?.value ?? request.cookies.get("__Secure-next-auth.session-token")?.value;

    // Decode session token
    const decodedToken = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    });

    // Define protected routes
    const protectedRoutes = ["/share-experience", "/dashboard", "/admin"];

    // Check if current route is protected
    const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

    // If user is not authenticated and accessing protected route, redirect to login
    if (!token && isProtectedRoute) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("from", pathname); // optional: support redirect after login
        return NextResponse.redirect(loginUrl);
    }
    if (pathname.startsWith("/admin")) {
        if (!decodedToken || !decodedToken.isAdmin) {
            return NextResponse.redirect(new URL("/", request.url)); // redirect non-admins
        }
    }

    return NextResponse.next();
}

// Middleware applies only to selected routes (can be expanded later)
export const config = {
    matcher: ["/share-experience/:path*", "/dashboard/:path*", "/admin/:path*"], // include dashboard as well
};
