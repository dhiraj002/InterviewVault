"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

const DEBOUNCE_DELAY = 500;

export default function FilterSidebar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [searchText, setSearchText] = useState("");
    const [industry, setIndustry] = useState("All");
    const [outcome, setOutcome] = useState("all");

    const currentParamsString = searchParams.toString();

    // Helper to update URL params
    const updateParams = useCallback(
        (key: string, value: string, removeIfDefault = false, defaultValue = "") => {
            const params = new URLSearchParams(searchParams.toString());

            if (removeIfDefault && value === defaultValue) {
                params.delete(key);
            } else {
                params.set(key, value);
            }

            params.set("page", "1"); // reset page
            router.push(`/browse?${params.toString()}`);
        },
        [router, searchParams]
    );

    // On mount, sync state with URL
    useEffect(() => {
        setSearchText(searchParams.get("search") || "");
        setIndustry(searchParams.get("industry") || "All");
        setOutcome(searchParams.get("outcome") || "all");
    }, [currentParamsString, searchParams]);

    // Debounced search input handling
    useEffect(() => {
        const timeout = setTimeout(() => {
            updateParams("search", searchText, true, "");
        }, DEBOUNCE_DELAY);

        return () => clearTimeout(timeout);
    }, [searchText, updateParams]);

    useEffect(() => {
        updateParams("industry", industry, true, "All");
    }, [industry, updateParams]);

    useEffect(() => {
        updateParams("outcome", outcome, true, "all");
    }, [outcome, updateParams]);

    const clearFilters = () => {
        router.push("/browse");
    };

    return (
        <aside className="space-y-6">
            <input
                type="text"
                placeholder="Search company, exam, role..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full bg-[#161b22] border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Industry</label>
                    <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="w-full bg-[#161b22] border border-gray-700 rounded-md px-3 py-2 text-sm">
                        <option>All</option>
                        <option value="private">Corporate / Private</option>
                        <option value="competitive">Competitive Exams</option>
                        <option value="government">Government</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Outcome</label>
                    <select value={outcome} onChange={(e) => setOutcome(e.target.value)} className="w-full bg-[#161b22] border border-gray-700 rounded-md px-3 py-2 text-sm">
                        <option value="all">All</option>
                        <option value="selected">Selected</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>
            </div>

            <button onClick={clearFilters} className="w-full bg-red-500 hover:bg-red-700 text-white font-medium py-2 rounded-md transition">
                Clear Filters
            </button>
        </aside>
    );
}
