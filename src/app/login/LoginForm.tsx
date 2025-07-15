// "use client";

// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useRouter, useSearchParams } from "next/navigation";
// import { Mail, Lock, Eye, EyeOff } from "lucide-react";

// export default function LoginForm() {
//     const [formData, setFormData] = useState({ email: "", password: "" });
//     const [showPassword, setShowPassword] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);
//     const router = useRouter();
//     const searchParams = useSearchParams();
//     const from = searchParams.get("from") || "/";

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setIsLoading(true);
//         try {
//             const res = await fetch("/api/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(formData),
//             });
//             const data = await res.json();

//             if (res.status === 200) {
//                 toast.success("🎉 Login successful!");
//                 // router.push("/share-experience");
//                 router.push(from);
//                 router.refresh();
//             } else {
//                 toast.error(data.message || "❌ Login failed.");
//             }
//         } catch {
//             toast.error("🚫 Network error or server down.");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Email Field */}
//             <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                 <div className="relative">
//                     <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         placeholder="Enter your email"
//                         className="w-full pl-10 pr-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         required
//                     />
//                 </div>
//             </div>

//             {/* Password Field */}
//             <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//                 <div className="relative">
//                     <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                     <input
//                         type={showPassword ? "text" : "password"}
//                         name="password"
//                         value={formData.password}
//                         onChange={handleInputChange}
//                         placeholder="Enter your password"
//                         className="w-full pl-10 pr-12 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         required
//                     />
//                     <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
//                         {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                     </button>
//                 </div>
//             </div>

//             <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//                 {isLoading ? "Signing in..." : "Sign In"}
//             </button>
//         </form>
//     );
// }

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
