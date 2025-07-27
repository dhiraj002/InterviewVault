"use client";

import { useState, useMemo } from "react";
import { Interview, FilterStatus } from "@/types/interview";
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

    const deleteItem = (id: string) => {
        setData((prev) => prev.filter((item) => item.id !== id));
    };

    const updateItem = (id: string, updates: Partial<Interview>) => {
        setData((prev) => prev.map((item) => (item.id === id ? { ...item, ...updates } : item)));
    };

    return {
        items: filtered,
        search,
        setSearch,
        filter,
        setFilter,
        counts,
        deleteItem,
        updateItem,
    };
}
