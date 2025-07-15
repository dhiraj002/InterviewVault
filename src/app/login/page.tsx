// // app/login/page.tsx

// import LoginForm from "./LoginForm"; // your client component
// import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Login | InterviewVault",
//     description: "Login to your InterviewVault account",
// };

// export default function LoginPage() {
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
//             <div className="max-w-md w-full">
//                 <div className="text-center mb-8">
//                     <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome</h1>
//                     <p className="text-gray-600">Sign in to your InterviewVault account</p>
//                 </div>

//                 <div className="bg-white rounded-2xl shadow-xl p-8">
//                     <LoginForm />
//                 </div>
//             </div>
//         </div>
//     );
// }

import LoginForm from "./LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login | InterviewVault",
    description: "Login to your InterviewVault account",
};

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#161b22] rounded-2xl shadow-2xl p-6 md:p-10">
                {/* Left Info Section */}
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">👋 Welcome to InterviewVault</h1>
                    <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                        <li>✅ Share real interview experiences</li>
                        <li>✅ Explore questions asked at top companies</li>
                        <li>✅ Learn from industry peers</li>
                        <li>✅ Save helpful experiences for later</li>
                        <li>✅ No signup hassle — just Google login</li>
                    </ul>
                </div>

                {/* Right Login Section */}
                <LoginForm />
            </div>
        </div>
    );
}
