"use client";

import { FilterStatus } from "@/types/interview";

interface FiltersProps {
    active: FilterStatus;
    onChange: (filter: FilterStatus) => void;
    counts: Record<string, number>;
}

const filters = [
    { key: "all" as const, label: "All" },
    { key: "published" as const, label: "Published" },
    { key: "draft" as const, label: "Draft" },
    { key: "pending" as const, label: "Pending" },
    { key: "review" as const, label: "Review" },
];

export function Filters({ active, onChange, counts }: FiltersProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {filters.map(({ key, label }) => (
                <button key={key} onClick={() => onChange(key)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${active === key ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}>
                    {label} ({counts[key] || 0})
                </button>
            ))}
        </div>
    );
}
