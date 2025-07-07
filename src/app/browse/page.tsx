export default function Browse() {
    return (
        <main className="bg-[#0d1117] min-h-screen py-12 px-4 text-gray-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                {/* Sidebar Filters */}
                <aside className="space-y-6">
                    <div>
                        <input type="text" placeholder="Search company, role..." className="w-full bg-[#161b22] border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
                            <select className="w-full bg-[#161b22] border border-gray-700 rounded-md px-3 py-2 text-sm">
                                <option>All</option>
                                <option>Engineering</option>
                                <option>Design</option>
                                <option>Management</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Experience Level</label>
                            <select className="w-full bg-[#161b22] border border-gray-700 rounded-md px-3 py-2 text-sm">
                                <option>All</option>
                                <option>Entry Level</option>
                                <option>Mid Level</option>
                                <option>Senior</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Outcome</label>
                            <select className="w-full bg-[#161b22] border border-gray-700 rounded-md px-3 py-2 text-sm">
                                <option>All</option>
                                <option>Selected</option>
                                <option>Rejected</option>
                            </select>
                        </div>
                    </div>

                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md transition">Apply Filters</button>
                </aside>

                {/* Content */}
                <section>
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-sm text-gray-400">Found 145 experiences</p>
                        <select className="bg-[#161b22] border border-gray-700 rounded-md px-3 py-2 text-sm">
                            <option>Sort by: Most Recent</option>
                            <option>Sort by: Most Helpful</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="bg-[#161b22] border border-gray-700 rounded-lg p-5 hover:border-blue-500 transition">
                                <h3 className="font-semibold text-lg mb-1">Software Engineer - Google</h3>
                                <p className="text-sm text-gray-400 mb-2">3 rounds • 2 days ago</p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span className="bg-gray-700 text-xs px-2 py-1 rounded">JavaScript</span>
                                    <span className="bg-gray-700 text-xs px-2 py-1 rounded">System Design</span>
                                </div>
                                <p className="text-sm mb-4">The interview focused on data structures and system design.</p>
                                <div className="flex justify-between items-center text-xs text-gray-400">
                                    <span>👍 24 helpful</span>
                                    <a href="#" className="text-blue-400 hover:underline">
                                        Read More →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
