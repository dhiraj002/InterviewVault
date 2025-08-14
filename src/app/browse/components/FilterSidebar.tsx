"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const DEFAULT_FILTERS = {
    searchText: "",
    industry: "All",
    outcome: "all",
};

export default function FilterSidebar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [filters, setFilters] = useState(DEFAULT_FILTERS);
    const mountedRef = useRef(false);
    const debounceRef = useRef<number | null>(null);

    // Initialize from URL only once
    useEffect(() => {
        const init = {
            searchText: searchParams.get("search") || "",
            industry: searchParams.get("industry") || "All",
            outcome: searchParams.get("outcome") || "all",
        };
        setFilters(init);
        mountedRef.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const applyFiltersToUrl = useCallback(
        (nextFilters: typeof DEFAULT_FILTERS) => {
            const params = new URLSearchParams(searchParams.toString());

            // Apply filters
            if (nextFilters.searchText) params.set("search", nextFilters.searchText);
            else params.delete("search");

            if (nextFilters.industry && nextFilters.industry !== "All") params.set("industry", nextFilters.industry);
            else params.delete("industry");

            if (nextFilters.outcome && nextFilters.outcome !== "all") params.set("outcome", nextFilters.outcome);
            else params.delete("outcome");

            // If any filter actually changed → reset to page 1
            const oldFilters = {
                searchText: searchParams.get("search") || "",
                industry: searchParams.get("industry") || "All",
                outcome: searchParams.get("outcome") || "all",
            };

            const filterChanged = oldFilters.searchText !== nextFilters.searchText || oldFilters.industry !== nextFilters.industry || oldFilters.outcome !== nextFilters.outcome;

            if (filterChanged) {
                params.set("page", "1");
            }

            router.replace(`/browse?${params.toString()}`, { scroll: false });
        },
        [searchParams, router]
    );

    // Debounce search
    useEffect(() => {
        if (!mountedRef.current) return;
        if (debounceRef.current) clearTimeout(debounceRef.current);

        debounceRef.current = window.setTimeout(() => {
            applyFiltersToUrl(filters);
        }, 350);

        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, [filters.searchText, applyFiltersToUrl, filters]);

    // Immediate apply for industry/outcome
    useEffect(() => {
        if (!mountedRef.current) return;
        applyFiltersToUrl(filters);
    }, [filters.industry, filters.outcome, applyFiltersToUrl, filters]);

    const handleChange = (key: keyof typeof DEFAULT_FILTERS, value: string) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const clearFilters = () => {
        const isAlreadyDefault = filters.searchText === DEFAULT_FILTERS.searchText && filters.industry === DEFAULT_FILTERS.industry && filters.outcome === DEFAULT_FILTERS.outcome;

        if (isAlreadyDefault) return; // ✅ prevent unnecessary reset

        setFilters(DEFAULT_FILTERS);
        applyFiltersToUrl(DEFAULT_FILTERS);

        // setFilters(DEFAULT_FILTERS);
        // applyFiltersToUrl(DEFAULT_FILTERS);
    };

    return (
        <aside className="space-y-6">
            <input
                aria-label="Search experiences"
                placeholder="Search company, exam, role..."
                value={filters.searchText}
                onChange={(e) => handleChange("searchText", e.target.value)}
                className="w-full bg-[#161b22] border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Industry</label>
                    <select value={filters.industry} onChange={(e) => handleChange("industry", e.target.value)} className="w-full bg-[#161b22] border border-gray-700 rounded-md px-3 py-2 text-sm">
                        <option>All</option>
                        <option value="private">Corporate / Private</option>
                        <option value="competitive">Competitive Exams</option>
                        <option value="government">Government</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Outcome</label>
                    <select value={filters.outcome} onChange={(e) => handleChange("outcome", e.target.value)} className="w-full bg-[#161b22] border border-gray-700 rounded-md px-3 py-2 text-sm">
                        <option value="all">All</option>
                        <option value="selected">Selected</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>
            </div>

            <button onClick={clearFilters} className="w-full bg-red-500 hover:bg-red-700 text-white font-medium py-2 rounded-md transition-colors duration-200">
                Clear Filters
            </button>
        </aside>
    );
}
