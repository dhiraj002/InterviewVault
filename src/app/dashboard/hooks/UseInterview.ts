"use client";

import { useState, useMemo } from "react";
import { Interview, FilterStatus } from "@/types/interview";
import { toast } from "react-hot-toast";
// import { interviews as initialData } from "../data/data";

export function useInterviews({ initialItems }: { initialItems: Interview[] }) {
    const [data, setData] = useState<Interview[]>(initialItems);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<FilterStatus>("all");

    const filtered = useMemo(() => {
        let result = data;

        if (search) {
            const query = search.toLowerCase();
            result = result.filter((item) => item.title.toLowerCase().includes(query) || item.company.toLowerCase().includes(query));
        }

        if (filter !== "all") {
            result = result.filter((item) => item.status === filter);
        }

        return result;
    }, [data, search, filter]);

    const counts = useMemo(() => {
        const base = { all: data.length, published: 0, draft: 0, pending: 0, review: 0 };
        return data.reduce((acc, item) => {
            acc[item.status]++;
            return acc;
        }, base);
    }, [data]);

    const deleteItem = async (id: string) => {
        //

        try {
            const res = await fetch(`/api/share-experience/${id}`, {
                method: "DELETE",
            });

            const result = await res.json();

            if (!res.ok) throw new Error(result.message);
            setData((prev) => prev.filter((item) => item.id !== id));
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

    return {
        items: filtered,
        search,
        setSearch,
        filter,
        setFilter,
        counts,
        deleteItem,
    };
}
