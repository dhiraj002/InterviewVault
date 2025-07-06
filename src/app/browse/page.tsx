"use client";
import { useState, Dispatch, SetStateAction } from "react";
import { X, Filter } from "lucide-react";

type FiltersState = {
    search: string;
    category: string;
    level: string;
    outcome: string;
};

type SidebarProps = {
    filters: FiltersState;
    setFilters: Dispatch<SetStateAction<FiltersState>>;
};

export default function BrowsePage() {
    const [filters, setFilters] = useState<FiltersState>({
        search: "",
        category: "All",
        level: "All",
        outcome: "All",
    });

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <main className="pt-16 bg-gray-900 min-h-screen text-gray-200">
            {/* Mobile Filter Button */}
            <div className="md:hidden px-4 py-4">
                <button onClick={() => setSidebarOpen(true)} className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-4 py-2 rounded-md">
                    <Filter className="w-4 h-4" />
                    <span>Filters</span>
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
                {/* Desktop Sidebar */}
                <aside className="hidden md:block space-y-6">
                    <Sidebar filters={filters} setFilters={setFilters} />
                </aside>

                {/* Mobile Sidebar */}
                {sidebarOpen && (
                    <>
                        {/* Overlay */}
                        <div className="fixed inset-0 bg-black bg-opacity-60 z-40" onClick={() => setSidebarOpen(false)}></div>

                        {/* Sidebar Panel */}
                        <aside className="fixed top-0 left-0 bottom-0 w-64 bg-gray-900 border-r border-gray-700 p-6 z-50 space-y-6 overflow-y-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">Filters</h2>
                                <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-gray-200">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <Sidebar filters={filters} setFilters={setFilters} />
                        </aside>
                    </>
                )}

                {/* Results */}
                <section className="space-y-6">
                    <div className="flex justify-between items-center border border-gray-700 p-4 rounded-md bg-gray-800">
                        <p className="text-sm">Found 145 experiences</p>
                        <select className="bg-gray-700 text-gray-200 px-3 py-2 rounded-md text-sm">
                            <option>Sort by: Most Recent</option>
                            <option>Most Helpful</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="border border-gray-700 rounded-lg bg-gray-800 p-6 space-y-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-semibold">{i % 2 === 0 ? "Software Engineer - Google" : "Product Manager - Microsoft"}</h2>
                                    <span className={`text-xs font-semibold ${i % 2 === 0 ? "text-green-400" : "text-red-400"}`}>{i % 2 === 0 ? "✔ Selected" : "✗ Rejected"}</span>
                                </div>
                                <p className="text-gray-400 text-sm">{i % 2 === 0 ? "3 rounds • 2 days ago" : "4 rounds • 1 week ago"}</p>
                                <div className="flex flex-wrap gap-2">
                                    {i % 2 === 0 ? (
                                        <>
                                            <span className="bg-gray-700 px-2 py-1 rounded text-xs">JavaScript</span>
                                            <span className="bg-gray-700 px-2 py-1 rounded text-xs">System Design</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="bg-gray-700 px-2 py-1 rounded text-xs">Product Strategy</span>
                                            <span className="bg-gray-700 px-2 py-1 rounded text-xs">Case Study</span>
                                        </>
                                    )}
                                </div>
                                <p className="text-gray-300 text-sm">{i % 2 === 0 ? "The interview focused on data structures and system design." : "The case study round was challenging but insightful."}</p>
                                <div className="flex justify-between items-center text-sm text-gray-400">
                                    <div className="flex items-center gap-4">
                                        <span>👍 {i % 2 === 0 ? "24 helpful" : "18 helpful"}</span>
                                        <span>💬 {i % 2 === 0 ? "5 comments" : "12 comments"}</span>
                                    </div>
                                    <a href="#" className="text-green-400 hover:underline font-medium">
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

/**
 * Sidebar component
 */
function Sidebar({ filters, setFilters }: SidebarProps) {
    return (
        <>
            <div>
                <label className="block text-sm font-medium mb-1">Search</label>
                <input
                    type="text"
                    placeholder="Company, role, skills..."
                    value={filters.search}
                    onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                    className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select value={filters.category} onChange={(e) => setFilters({ ...filters, category: e.target.value })} className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700">
                    <option>All</option>
                    <option>Engineering</option>
                    <option>Design</option>
                    <option>Finance</option>
                    <option>Government</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Experience Level</label>
                <select value={filters.level} onChange={(e) => setFilters({ ...filters, level: e.target.value })} className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700">
                    <option>All</option>
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Interview Outcome</label>
                <select value={filters.outcome} onChange={(e) => setFilters({ ...filters, outcome: e.target.value })} className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700">
                    <option>All</option>
                    <option>Selected</option>
                    <option>Rejected</option>
                    <option>Pending</option>
                </select>
            </div>

            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition mt-2" onClick={() => alert("Filters applied!")}>
                Apply Filters
            </button>
        </>
    );
}
