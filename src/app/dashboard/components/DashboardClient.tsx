"use client";

// import { useState } from "react";
import { Share2 } from "lucide-react";
import { Interview } from "../../../types/interview";
import { useInterviews } from "../hooks/UseInterview";
import { SearchInput } from "./Search";
import { Filters } from "./Filter";
import { Table } from "./Table";

import { useRouter } from "next/navigation";

// import { EditDialog } from "@/components/dashboard/edit-dialog";

interface Props {
    initialItems: Interview[];
}

export default function DashboardClient({ initialItems }: Props) {
    // inside component
    const router = useRouter();

    const { items, search, setSearch, filter, setFilter, counts, deleteItem } = useInterviews({ initialItems });
    //updateItem

    // const [editItem, setEditItem] = useState<Interview | null>(null);
    // const [showEdit, setShowEdit] = useState(false);

    const handleEdit = (item: Interview) => {
        // setEditItem(item);
        // setShowEdit(true);
        console.log("Edit item:", item);
    };

    // const handleSave = (id: string, updates: Partial<Interview>) => {
    //     updateItem(id, updates);
    //     // setShowEdit(false);
    //     // setEditItem(null);
    // };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                        <p className="text-gray-400">Manage your interview experiences</p>
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

                {/* Edit Dialog */}
                {/* <EditDialog interview={editItem} open={showEdit} onClose={() => setShowEdit(false)} onSave={handleSave} /> */}
            </div>
        </div>
    );
}
