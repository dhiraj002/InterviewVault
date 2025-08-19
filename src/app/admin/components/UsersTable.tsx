"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
}

const ITEMS_PER_PAGE = 5;
const ROW_HEIGHT = 56; // Approximate row height in pixels (for table rows or card)
const VISIBLE_ROWS = 5;
const MIN_HEIGHT = ROW_HEIGHT * VISIBLE_ROWS;

export default function UsersTable() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [deleteUserId, setDeleteUserId] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("/api/admin/users");
                if (!res.ok) throw new Error("Failed to fetch users");
                const data = await res.json();
                setUsers(data.users || []);
            } catch (err) {
                setError((err as Error).message || "An error occurred");
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const handleDelete = async () => {
        if (!deleteUserId) return;

        try {
            const res = await fetch(`/api/admin/users/${deleteUserId}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Failed to delete user");

            setUsers((prev) => prev.filter((u) => u._id !== deleteUserId));
            toast.success("User deleted successfully");

            // Adjust page if deleting last item on page
            const lastPage = Math.ceil((users.length - 1) / ITEMS_PER_PAGE);
            if (currentPage > lastPage) setCurrentPage(lastPage);
        } catch (err) {
            toast.error("Error deleting user: " + (err as Error).message);
        } finally {
            setDeleteUserId(null);
        }
    };

    // if (loading) return <div className="text-gray-400 text-center py-6">Loading users...</div>;
    // if (error) return <div className="text-red-500 text-center py-6">Error: {error}</div>;
    // if (users.length === 0) return <div className="text-gray-400 text-center py-6">No users found</div>;

    if (loading) {
        return (
            <div className="text-gray-400 text-center flex items-center justify-center" style={{ minHeight: `${MIN_HEIGHT}px` }}>
                Loading users...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-500 text-center flex items-center justify-center" style={{ minHeight: `${MIN_HEIGHT}px` }}>
                Error: {error}
            </div>
        );
    }

    if (users.length === 0) {
        return (
            <div className="text-gray-400 text-center flex items-center justify-center" style={{ minHeight: `${MIN_HEIGHT}px` }}>
                No users found
            </div>
        );
    }

    // Pagination logic
    const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);
    const paginatedUsers = users.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const Pagination = () => (
        <div className="flex justify-center mt-4 gap-2 flex-wrap">
            <button className="px-3 py-1   cursor-pointer rounded-md bg-gray-700 hover:bg-gray-600 text-white" onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
                Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
                <button key={i + 1} onClick={() => setCurrentPage(i + 1)} className={`px-3 py-1 rounded-md ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-700 text-white  cursor-pointer hover:bg-gray-600"}`}>
                    {i + 1}
                </button>
            ))}
            <button className="px-3 py-1 rounded-md  cursor-pointer bg-gray-700 hover:bg-gray-600 text-white" onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );

    return (
        <>
            <Toaster position="top-right" />

            {/* Desktop Table */}
            <div className="hidden md:block bg-gray-800/50 rounded-lg border border-gray-700">
                <table className="w-full text-sm text-gray-300">
                    <thead>
                        <tr className="bg-gray-800 border-b border-gray-700">
                            <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide">Name</th>
                            <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide">Email</th>
                            <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {paginatedUsers.map((user) => (
                            <tr key={user._id} className="hover:bg-gray-800/70 transition">
                                <td className="px-4 py-3 text-white font-medium">
                                    {user.firstName} {user.lastName}
                                </td>
                                <td className="px-4 py-3 text-gray-300">{user.email}</td>
                                <td className="px-4 py-3">
                                    <button onClick={() => setDeleteUserId(user._id)} className="px-3 py-1 text-xs font-semibold rounded-md bg-red-600 hover:bg-red-700 text-white transition">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination />
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-700">
                {paginatedUsers.map((user) => (
                    <div key={user._id} className="p-4 bg-gray-800/50 rounded-lg mb-2">
                        <h3 className="text-white font-semibold">
                            {user.firstName} {user.lastName}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">{user.email}</p>
                        <button onClick={() => setDeleteUserId(user._id)} className="mt-3 w-full px-3 py-2 text-sm font-semibold rounded-md bg-red-600 hover:bg-red-700 text-white transition">
                            Delete User
                        </button>
                    </div>
                ))}
                <Pagination />
            </div>

            {/* Delete Confirmation Modal */}
            {deleteUserId && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-gray-900 rounded-lg p-6 w-80 text-center">
                        <h2 className="text-white font-semibold text-lg">Confirm Delete</h2>
                        <p className="text-gray-400 mt-2">Are you sure you want to delete this user?</p>
                        <div className="mt-4 flex justify-center gap-4">
                            <button onClick={() => setDeleteUserId(null)} className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white">
                                Cancel
                            </button>
                            <button onClick={handleDelete} className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
