"use client";

import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-4">
            <div className="text-center space-y-6 max-w-md">
                <h1 className="text-7xl font-extrabold text-red-500">404</h1>
                <h2 className="text-3xl font-semibold">Page Not Found</h2>
                <p className="text-gray-400">Oops! The page you are looking for does not exist or has been moved.</p>
                <Link href="/" className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
                    <ArrowLeftCircle className="w-5 h-5" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
