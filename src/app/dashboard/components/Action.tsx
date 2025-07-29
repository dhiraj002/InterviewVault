"use client";

import { useState } from "react";
import { MoreHorizontal, Edit, Trash2, View } from "lucide-react";

interface ActionsProps {
    onEdit: () => void;
    onDelete: () => void;
}

export function Actions({ onEdit, onDelete }: ActionsProps) {
    const [open, setOpen] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = () => {
        setShowConfirm(false);
        setOpen(false);
        onDelete();
    };

    return (
        <div className="relative ">
            <button onClick={() => setOpen(!open)} className="p-1 text-gray-400 hover:text-white rounded">
                <MoreHorizontal className="h-4 w-4" />
            </button>

            {open && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
                    <div className="absolute right-0 top-6 z-20 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-1 min-w-[120px]">
                        <button
                            onClick={() => {
                                onEdit();
                                setOpen(false);
                            }}
                            className="w-full px-3 py-2 text-left text-sm text-gray-300 hover:bg-gray-700 flex items-center gap-2"
                        >
                            <Edit className="h-4 w-4" />
                            Edit
                        </button>
                        <button onClick={() => setShowConfirm(true)} className="w-full px-3 py-2 text-left text-sm text-red-400 hover:bg-gray-700 flex items-center gap-2">
                            <Trash2 className="h-4 w-4" />
                            Delete
                        </button>
                        <button onClick={() => console.log("willl show exp")} className="w-full px-3 py-2 text-left text-sm text-blue-400 hover:bg-gray-700 flex items-center gap-2">
                            <View className="h-4 w-4" />
                            View Exp
                        </button>
                    </div>
                </>
            )}

            {showConfirm && (
                <div className="fixed inset-0 z-30 bg-black/50 flex items-center justify-center p-4">
                    <div className="bg-gray-800 rounded-lg p-6 max-w-sm w-full">
                        <h3 className="text-white font-medium mb-2">Delete Experience</h3>
                        <p className="text-gray-300 text-sm mb-4">Are you sure? This action cannot be undone.</p>
                        <div className="flex gap-2 justify-end">
                            <button onClick={() => setShowConfirm(false)} className="px-3 py-2 text-sm bg-gray-700 text-white rounded hover:bg-gray-600">
                                Cancel
                            </button>
                            <button onClick={handleDelete} className="px-3 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
