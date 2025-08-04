"use client";

import { signIn } from "next-auth/react";
// import { useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useState } from "react";

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    // const searchParams = useSearchParams();
    // const from = searchParams.get("from") || "/";

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
        <div className="bg-[#0d1117] p-6 md:p-10 rounded-xl shadow-lg flex flex-col items-center text-center justify-center space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold">Sign In to Your Account</h2>

            <button onClick={handleGoogleLogin} disabled={isLoading} className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white cursor-pointer text-black rounded-lg font-medium hover:bg-gray-100 transition disabled:opacity-50">
                <FcGoogle size={22} />
                {isLoading ? "Signing in..." : "Sign in with Google"}
            </button>

            <p className="text-gray-400 text-sm">Secure Google login. No passwords needed.</p>
        </div>
    );
}
