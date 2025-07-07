export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-r from-[#0d1117] to-[#161b22] text-gray-200">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Share Your Interview Journey</h1>
                <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-400">Help others succeed by sharing your interview experiences across all industries.</p>
                <a href="/submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow transition">
                    Get Started
                </a>
            </section>

            {/* Stats Section */}
            <section className="bg-[#0d1117] py-12 px-4">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="border border-gray-700 rounded-xl p-6 bg-[#161b22] shadow-md">
                        <h3 className="text-3xl font-bold text-blue-500">2.5K+</h3>
                        <p className="text-gray-400 mt-2">Experiences Shared</p>
                    </div>
                    <div className="border border-gray-700 rounded-xl p-6 bg-[#161b22] shadow-md">
                        <h3 className="text-3xl font-bold text-blue-500">15+</h3>
                        <p className="text-gray-400 mt-2">Industries Covered</p>
                    </div>
                    <div className="border border-gray-700 rounded-xl p-6 bg-[#161b22] shadow-md">
                        <h3 className="text-3xl font-bold text-blue-500">500+</h3>
                        <p className="text-gray-400 mt-2">Companies Featured</p>
                    </div>
                </div>
            </section>

            {/* FeaturedStories/Latest Interviews */}
            <section className="bg-[#0d1117] py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-200 mb-6">Featured Experiences</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-[#161b22] p-4 rounded-xl border border-gray-700 shadow hover:shadow-lg transition">
                            <h3 className="text-lg font-semibold text-blue-400">Software Engineer at Google</h3>
                            <p className="text-gray-400 text-sm mt-2">Detailed interview experience including onsite rounds and system design.</p>
                            <a href="/experience/google-se" className="text-blue-500 text-sm mt-2 inline-block hover:underline">
                                Read More →
                            </a>
                        </div>
                        <div className="bg-[#161b22] p-4 rounded-xl border border-gray-700 shadow hover:shadow-lg transition">
                            <h3 className="text-lg font-semibold text-blue-400">UX Designer at Microsoft</h3>
                            <p className="text-gray-400 text-sm mt-2">Insights on portfolio presentation and whiteboard challenge.</p>
                            <a href="/experience/microsoft-ux" className="text-blue-500 text-sm mt-2 inline-block hover:underline">
                                Read More →
                            </a>
                        </div>
                        <div className="bg-[#161b22] p-4 rounded-xl border border-gray-700 shadow hover:shadow-lg transition">
                            <h3 className="text-lg font-semibold text-blue-400">IIM Ahmedabad MBA Interview</h3>
                            <p className="text-gray-400 text-sm mt-2">Questions from panel and tips to prepare for MBA interviews.</p>
                            <a href="/experience/iim-mba" className="text-blue-500 text-sm mt-2 inline-block hover:underline">
                                Read More →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* how It works */}
            {/* <section className="bg-[#0d1117] py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-200 mb-8">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div>
                            <h3 className="text-lg font-semibold text-blue-400 mb-2">1. Sign Up</h3>
                            <p className="text-gray-400">Create your free account to get started.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-blue-400 mb-2">2. Share Your Story</h3>
                            <p className="text-gray-400">Submit your interview experience with as much detail as you’d like.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-blue-400 mb-2">3. Inspire Others</h3>
                            <p className="text-gray-400">Help candidates prepare and grow their careers.</p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Testimonials */}
            <section className="bg-[#161b22] py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-200 mb-6 text-center">What People Are Saying</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-[#0d1117] p-4 rounded-xl border border-gray-700">
                            <p className="text-gray-400 italic">"InterviewVault helped me prepare for my dream job at a Big Tech company. The experiences were incredibly detailed."</p>
                            <p className="text-gray-500 mt-2 text-sm">— Priya S., Software Engineer</p>
                        </div>
                        <div className="bg-[#0d1117] p-4 rounded-xl border border-gray-700">
                            <p className="text-gray-400 italic">"I used the IIM interview stories to practice, and I got selected. Amazing resource!"</p>
                            <p className="text-gray-500 mt-2 text-sm">— Rohit K., MBA Student</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action (CTA) Banner */}
            {/* <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-12 px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Share Your Experience?</h2>
                <p className="text-blue-100 mb-6">Join our growing community and make an impact.</p>
                <a href="/submit" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                    Submit Your Story
                </a>
            </section> */}
        </>
    );
}
