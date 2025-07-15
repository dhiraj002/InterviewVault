// // app/signup/SignUpForm.tsx (Client Component)
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import { signIn, signOut } from "next-auth/react";

// export default function SignUpForm() {
//     const router = useRouter();
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//     });
//     const [showPassword, setShowPassword] = useState(false);
//     const [isLoading, setIsLoading] = useState(false);

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setIsLoading(true);

//         try {
//             const res = await fetch("/api/signup", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(formData),
//             });

//             const data = await res.json();

//             if (res.status === 201) {
//                 toast.success("🎉 " + data.message);
//                 setFormData({ firstName: "", lastName: "", email: "", password: "" });
//                 router.push("/login");
//             } else {
//                 toast.error(data.message, {
//                     duration: 5000,
//                     style: { background: "#7f1d1d", color: "#fff" },
//                 });
//             }
//         } catch (err) {
//             console.error("Client signup error:", err);
//             toast.error("❌ Network error or server not responding");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center md:pt-10 md:pb-7">
//             <div className="max-w-md w-full">
//                 <div className="text-center mb-8">
//                     <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
//                     <p className="text-gray-600">Join InterviewVault and start sharing your experiences</p>
//                 </div>

//                 <div className="bg-white rounded-2xl shadow-xl p-8">
//                     <form className="space-y-6">
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
//                                 <div className="relative">
//                                     <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                                     <input
//                                         type="text"
//                                         name="firstName"
//                                         value={formData.firstName}
//                                         onChange={handleInputChange}
//                                         placeholder="First name"
//                                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
//                                 <div className="relative">
//                                     <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                                     <input
//                                         type="text"
//                                         name="lastName"
//                                         value={formData.lastName}
//                                         onChange={handleInputChange}
//                                         placeholder="Last name"
//                                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
//                             <div className="relative">
//                                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleInputChange}
//                                     placeholder="Enter your email"
//                                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//                             <div className="relative">
//                                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                                 <input
//                                     type={showPassword ? "text" : "password"}
//                                     name="password"
//                                     value={formData.password}
//                                     onChange={handleInputChange}
//                                     placeholder="Create a password"
//                                     className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                     required
//                                 />
//                                 <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
//                                     {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                                 </button>
//                             </div>
//                         </div>

//                         <button
//                             type="submit"
//                             disabled={isLoading}
//                             className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
//                         >
//                             {isLoading ? "Creating Account..." : "Create Account"}
//                         </button>
//                     </form>

//                     <h2 className="text-black"> Sign in with Google</h2>
//                     <button className="text-black" onClick={() => signIn("google")}>
//                         Sign in
//                     </button>
//                     <button className="text-black" onClick={() => signOut()}>
//                         Sign out
//                     </button>
//                     <div className="mt-8 text-center">
//                         <p className="text-gray-600">
//                             Already have an account?{" "}
//                             <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
//                                 Sign in
//                             </Link>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
