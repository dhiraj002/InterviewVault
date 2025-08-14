"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import ExperienceCard from "./ExperienceCard";
import Pagination from "./Pagination";
import { Suspense } from "react";

export interface Experience {
    id?: string;
    title?: string;
    company: string;
    postedDate?: string;
    summary?: string;
    tags?: string[];
    rounds?: string[];
    name?: string;
    outcome?: "selected" | "rejected" | "pending";
    currRole?: string;
    difficultyLevel?: string;
}

// Pagination interface
interface Pagination {
    page: number;
    totalPages: number;
    total: number;
}

export default function ExperiencesList() {
    const searchParams = useSearchParams();
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [pagination, setPagination] = useState<Pagination | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

    const cacheRef = useRef<Map<string, { experiences: Experience[]; pagination: Pagination }>>(new Map());
    const debounceTimer = useRef<NodeJS.Timeout | null>(null);

    const fetchData = async (paramsString: string) => {
        setLoading(true);
        setError(null);

        if (cacheRef.current.has(paramsString)) {
            const cached = cacheRef.current.get(paramsString)!;
            setExperiences(cached.experiences);
            setPagination(cached.pagination);
            setLoading(false);
            setHasLoadedOnce(true);
            return;
        }

        try {
            const res = await fetch(`/api/experiences?${paramsString}`, { cache: "no-store" });
            if (!res.ok) throw new Error("Failed to fetch experiences");

            const data = await res.json();

            setExperiences(data.experiences);
            setPagination(data.pagination);

            // Cache it
            cacheRef.current.set(paramsString, {
                experiences: data.experiences,
                pagination: data.pagination,
            });
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message || "Something went wrong");
            } else {
                setError("Something went wrong");
            }
        } finally {
            setLoading(false);
            setHasLoadedOnce(true);
        }
    };

    useEffect(() => {
        const paramsString = searchParams.toString();

        if (debounceTimer.current) clearTimeout(debounceTimer.current);

        debounceTimer.current = setTimeout(() => {
            fetchData(paramsString);
        }, 300);

        return () => {
            if (debounceTimer.current) clearTimeout(debounceTimer.current);
        };
    }, [searchParams]);

    if (!hasLoadedOnce && loading) {
        // 🔹 Initial skeleton for first load
        return (
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="h-40 bg-gray-800 animate-pulse rounded-md" />
                    ))}
                </div>
            </section>
        );
    }

    if (error) {
        return <div className="text-red-500 text-center p-6">{error} — Please try again later.</div>;
    }

    return (
        <section>
            <Suspense>
                <div className="flex justify-between items-center mb-6">
                    <p className="text-sm text-gray-400">Found {experiences.length} experiences</p>
                </div>

                {experiences.length === 0 ? (
                    <p className="text-gray-400 text-center">No results found</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {experiences.map((exp: Experience) => (
                            <div key={exp.id || `${exp.company}-${exp.title}`} className={hasLoadedOnce && loading ? "animate-pulse" : ""}>
                                <ExperienceCard {...exp} />
                            </div>
                        ))}
                    </div>
                )}

                {pagination && <Pagination currentPage={pagination.page} totalPages={pagination.totalPages} />}
            </Suspense>
        </section>
    );
}
