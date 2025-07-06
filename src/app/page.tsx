export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Share Your Interview Journey</h1>
                <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-300">Help others succeed by sharing your interview experiences across all industries.</p>
                <a href="/submit" className="bg-green-500 px-6 py-3 rounded-md font-medium hover:bg-green-600 transition">
                    Get Started
                </a>
            </section>

            {/* Stats Section */}
            <section className="bg-gray-900 py-12 px-4">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="border border-gray-700 rounded-lg p-6 bg-gray-800">
                        <h3 className="text-3xl font-bold text-green-400">2.5K+</h3>
                        <p className="text-gray-300 mt-2">Experiences Shared</p>
                    </div>
                    <div className="border border-gray-700 rounded-lg p-6 bg-gray-800">
                        <h3 className="text-3xl font-bold text-green-400">15+</h3>
                        <p className="text-gray-300 mt-2">Industries Covered</p>
                    </div>
                    <div className="border border-gray-700 rounded-lg p-6 bg-gray-800">
                        <h3 className="text-3xl font-bold text-green-400">500+</h3>
                        <p className="text-gray-300 mt-2">Companies Featured</p>
                    </div>
                </div>
            </section>
        </>
    );
}
