"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Status from "./Status";
import Actions from "./Action";

interface Experience {
    id: string;
    title: string;
    company: string;
    examName?: string;
    type: string;
    date: string;
    name: string;
    status: "published" | "draft" | "pending";
}

const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

const getTypeLabel = (type: string) => {
    const labels = {
        corporate: "Corporate",
        startup: "Startup",
        exam: "Exam",
    };
    return labels[type as keyof typeof labels] || type;
};

async function updateExperienceStatus(id: string, status: "published" | "hidden" | "pending") {
    try {
        const res = await fetch(`/api/admin/experiences/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status }),
        });

        if (!res.ok) {
            throw new Error(`Failed to update: ${res.status}`);
        }

        const data = await res.json();
        return data; // contains the updated experience
    } catch (error) {
        console.error("Error updating experience:", error);
        return null;
    }
}

export default function ExperiencesTable() {
    const router = useRouter();
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchExperiences() {
            try {
                const res = await fetch("/api/admin/experiences"); // You’ll create this API route
                if (!res.ok) throw new Error("Failed to fetch experiences");
                const data = await res.json();
                console.log("Fetched experiences:", data);
                setExperiences(data.formattedExperiences || []);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        }
        fetchExperiences();
    }, []);

    if (loading) return <p className="text-gray-400">Loading experiences...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    const onDelete = async (id: string) => {
        console.log("Delete experience with ID:", id);

        try {
            const res = await fetch(`/api/share-experience/${id}`, {
                method: "DELETE",
            });

            const result = await res.json();

            if (!res.ok) throw new Error(result.message);
            setExperiences((prev) => prev.filter((item) => item.id !== id));
            toast.success(" Experience deleted successfully!");

            // Optional: Refresh data or route
        } catch (err: unknown) {
            if (err instanceof Error) {
                toast.error(err.message);
            } else {
                toast.error("Something went wrong");
            }
        }
    };

    const onEdit = (item: Experience) => {
        console.log("Edit experience:", item);
        if (item.id) {
            router.push(`/share-experience/${item.id}`);
        }
    };

    const onView = (id: string) => {
        console.log("View experience:", id);
        router.push(`/experience/${id}`);
    };

    const handleApproveExp = async (id: string) => {
        const updated = await updateExperienceStatus(id, "published");
        if (!updated) {
            toast.error("Failed to publissh experience");
            return;
        }

        setExperiences((prev) => prev.map((item) => (item.id === id ? { ...item, status: "published" } : item)));
        toast.success("Experience published successfully!");
    };

    const handleHideExp = async (id: string) => {
        const updated = await updateExperienceStatus(id, "pending");
        if (!updated) {
            toast.error("Failed to hide experience");
            return;
        }
        setExperiences((prev) => prev.map((item) => (item.id === id ? { ...item, status: "pending" } : item)));
        toast.success("Experience hidden successfully!");
    };

    return (
        <div className="bg-gray-800/50 rounded-lg border border-gray-700 ">
            {/* Desktop Table */}
            <div className="hidden md:block ">
                <table className="w-full text-sm text-gray-300">
                    <thead>
                        <tr className="bg-gray-800 border-b border-gray-700">
                            {["Title", "Status", "Name", "Type", "Date", ""].map((heading) => (
                                <th key={heading} scope="col" className="px-4 py-3 text-left font-semibold uppercase tracking-wide">
                                    {heading}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {experiences.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-800/70 transition">
                                <td className="px-4 py-3 text-white font-medium">{item.title}</td>
                                <td className="px-4 py-3">
                                    <Status status={item.status} />
                                </td>
                                <td className="px-4 py-3 text-white">{item.name}</td>
                                <td className="px-4 py-3">{getTypeLabel(item.type)}</td>
                                <td className="px-4 py-3 text-gray-400">{formatDate(item.date)}</td>
                                <td className="px-4 py-3">
                                    <Actions onEdit={() => onEdit(item)} onDelete={() => onDelete(item.id)} onView={() => onView(item.id)} handleApproveExp={() => handleApproveExp(item.id)} handleHideExp={() => handleHideExp(item.id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-700">
                {experiences.map((item) => (
                    <div key={item.id} className="p-4">
                        <div className="flex justify-between items-start">
                            <h3 className="text-white font-semibold">{item.title}</h3>
                            <Actions onEdit={() => onEdit(item)} onDelete={() => onDelete(item.id)} onView={() => onView(item.id)} handleApproveExp={() => handleApproveExp(item.id)} handleHideExp={() => handleHideExp(item.id)} />
                        </div>
                        <div className="mt-2 space-y-1 text-sm">
                            <div className="flex justify-between items-center">
                                <Status status={item.status} />
                                <span className="text-gray-400">{getTypeLabel(item.type)}</span>
                            </div>
                            <div className="text-white">{item.name}</div>
                            <div className="text-gray-500">{formatDate(item.date)}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
