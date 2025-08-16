"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        try {
            await signIn("google", { callbackUrl: "/share-experience" });
        } catch {
            toast.error("🚫 Google sign-in failed.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-[#0d1117] p-6 md:p-10 rounded-2xl shadow-lg flex flex-col items-center text-center justify-center space-y-6 w-full max-w-md mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Sign In to InterviewVault</h2>

            <button onClick={handleGoogleLogin} disabled={isLoading} className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition disabled:opacity-50 shadow-md">
                <FcGoogle size={22} />
                {isLoading ? "Signing in..." : "Sign in with Google"}
            </button>

            <p className="text-gray-400 text-sm">Secure Google login. No passwords needed.</p>

            {/* Terms & Privacy Links */}
            <div className="text-sm text-gray-400 space-x-3">
                <Link href="/terms&conditions" className="text-blue-400 underline hover:text-blue-300 transition">
                    Terms & Conditions
                </Link>
                <span>|</span>
                <Link href="/privacy-policy" className="text-blue-400 underline hover:text-blue-300 transition">
                    Privacy Policy
                </Link>
            </div>
        </div>
    );
}
