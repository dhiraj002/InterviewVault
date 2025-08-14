// import Link from "next/link";

// export default function Home() {
//     return (
//         <>
//             {/* Hero Section */}
//             <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
//                 <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">InterviewVault</h1>
//                 <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Gateway to Competitive Exam Success</h2>
//                 <p className="text-lg md:text-xl max-w-3xl mb-8 text-gray-300">
//                     Connect with thousands of aspirants by sharing your UPSC, SSB, and other competitive exam interview experiences. Learn from real stories and prepare better for your dream career.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                     <Link href="/share-experience" className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
//                         Share Your Experience
//                     </Link>
//                     <Link href="/browse" className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
//                         Browse Experiences
//                     </Link>
//                 </div>
//             </section>

//             {/* Exam Categories Section */}
//             <section className="py-16 px-4 bg-gray-50">
//                 <div className="max-w-6xl mx-auto">
//                     <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Popular Exam Categories</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//                             <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//                                 <span className="text-2xl">🏛️</span>
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-gray-800">UPSC Civil Services</h3>
//                             <p className="text-gray-600 mb-4">Personal interviews, personality tests, and board experiences from successful candidates.</p>
//                             <Link href="/browse?category=upsc" className="text-blue-600 font-medium hover:text-blue-800">
//                                 View Experiences →
//                             </Link>
//                         </div>

//                         <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//                             <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
//                                 <span className="text-2xl">🎖️</span>
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-gray-800">SSB Interview</h3>
//                             <p className="text-gray-600 mb-4">Service Selection Board interviews, psychological tests, and group tasks experiences.</p>
//                             <Link href="/browse?category=ssb" className="text-green-600 font-medium hover:text-green-800">
//                                 View Experiences →
//                             </Link>
//                         </div>

//                         <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//                             <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
//                                 <span className="text-2xl">🏦</span>
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-gray-800">Banking & Finance</h3>
//                             <p className="text-gray-600 mb-4">IBPS, SBI, RBI and other banking sector interview experiences.</p>
//                             <Link href="/browse?category=banking" className="text-purple-600 font-medium hover:text-purple-800">
//                                 View Experiences →
//                             </Link>
//                         </div>

//                         <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//                             <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
//                                 <span className="text-2xl">⚡</span>
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-gray-800">Engineering Services</h3>
//                             <p className="text-gray-600 mb-4">IES, ESE and other engineering service interview experiences.</p>
//                             <Link href="/browse?category=engineering" className="text-orange-600 font-medium hover:text-orange-800">
//                                 View Experiences →
//                             </Link>
//                         </div>

//                         <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//                             <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
//                                 <span className="text-2xl">👮</span>
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-gray-800">Police & Defense</h3>
//                             <p className="text-gray-600 mb-4">Police services, defense forces, and paramilitary interview experiences.</p>
//                             <Link href="/browse?category=defense" className="text-red-600 font-medium hover:text-red-800">
//                                 View Experiences →
//                             </Link>
//                         </div>

//                         <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//                             <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
//                                 <span className="text-2xl">🎓</span>
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-gray-800">Academic & Research</h3>
//                             <p className="text-gray-600 mb-4">University teaching, research positions, and academic interview experiences.</p>
//                             <Link href="/browse?category=academic" className="text-indigo-600 font-medium hover:text-indigo-800">
//                                 View Experiences →
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Stats Section */}
//             <section className="bg-gray-900 py-16 px-4">
//                 <div className="max-w-6xl mx-auto">
//                     <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Platform Statistics</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
//                         <div className="border border-gray-700 rounded-lg p-6 bg-gray-800">
//                             <h3 className="text-4xl font-bold text-blue-400">5K+</h3>
//                             <p className="text-gray-300 mt-2">Interview Experiences</p>
//                         </div>
//                         <div className="border border-gray-700 rounded-lg p-6 bg-gray-800">
//                             <h3 className="text-4xl font-bold text-green-400">50+</h3>
//                             <p className="text-gray-300 mt-2">Exam Categories</p>
//                         </div>
//                         <div className="border border-gray-700 rounded-lg p-6 bg-gray-800">
//                             <h3 className="text-4xl font-bold text-purple-400">25K+</h3>
//                             <p className="text-gray-300 mt-2">Active Users</p>
//                         </div>
//                         <div className="border border-gray-700 rounded-lg p-6 bg-gray-800">
//                             <h3 className="text-4xl font-bold text-orange-400">95%</h3>
//                             <p className="text-gray-300 mt-2">Success Rate</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Features Section */}
//             <section className="py-16 px-4 bg-white">
//                 <div className="max-w-6xl mx-auto">
//                     <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Why Choose InterviewVault?</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         <div className="text-center">
//                             <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <span className="text-3xl">📝</span>
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-gray-800">Detailed Experiences</h3>
//                             <p className="text-gray-600">Get comprehensive interview experiences with specific questions, tips, and preparation strategies.</p>
//                         </div>
//                         <div className="text-center">
//                             <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <span className="text-3xl">🔍</span>
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-gray-800">Easy Search</h3>
//                             <p className="text-gray-600">Filter experiences by exam type, year, location, and specific topics you want to focus on.</p>
//                         </div>
//                         <div className="text-center">
//                             <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                                 <span className="text-3xl">🤝</span>
//                             </div>
//                             <h3 className="text-xl font-semibold mb-3 text-gray-800">Community Support</h3>
//                             <p className="text-gray-600">Connect with fellow aspirants, ask questions, and get guidance from successful candidates.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// app/page.tsx
import AnimatedHome from "./components/AnimatedHome";

export const metadata = {
    title: "InterviewVault - Home",
    description: "Share & explore interview experiences",
};

export default function HomePage() {
    return (
        <main className="bg-[#0d1117] min-h-screen">
            <AnimatedHome />
        </main>
    );
}
