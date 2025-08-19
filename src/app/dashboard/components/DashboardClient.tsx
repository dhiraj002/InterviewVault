"use client";

// import { useState } from "react";
import { Share2 } from "lucide-react";
import { Interview } from "../../../types/interview";
import { useInterviews } from "../hooks/UseInterview";
import { SearchInput } from "./Search";
import { Filters } from "./Filter";
import { Table } from "./Table";

import { useRouter } from "next/navigation";

interface Props {
    initialItems: Interview[];
}

export default function DashboardClient({ initialItems }: Props) {
    // inside component
    const router = useRouter();

    const { items, search, setSearch, filter, setFilter, counts, deleteItem } = useInterviews({ initialItems });

    const handleEdit = (item: Interview) => {
        if (item.id) {
            router.push(`/share-experience/${item.id}`);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                        <p className="text-gray-400">Manage your interview experiences</p>

                        <p className="border-l-4 border-blue-500 pl-3 text-gray-300 text-sm mt-3 mb-3">🚀 Once submitted, your experience will be reviewed by our admin team and published shortly.</p>
                    </div>
                    <button onClick={() => router.push("/share-experience")} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 w-fit">
                        <Share2 className="h-4 w-4" />
                        Share Experience
                    </button>
                </div>

                {/* Search */}
                <div className="mb-6">
                    <SearchInput value={search} onChange={setSearch} />
                </div>

                {/* Filters */}
                <div className="mb-6">
                    <Filters active={filter} onChange={setFilter} counts={counts} />
                </div>

                {/* Results Count */}
                <div className="mb-4">
                    <p className="text-gray-400 text-sm">
                        Showing {items.length} of {counts.all} experiences
                    </p>
                </div>

                {/* Table */}
                <Table items={items} onEdit={handleEdit} onDelete={deleteItem} searchQuery={search} />
            </div>
        </div>
    );
}
