// app/login/page.tsx

import LoginForm from "./LoginForm"; // your client component
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login | InterviewVault",
    description: "Login to your InterviewVault account",
};

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Sign in to your InterviewVault account</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
