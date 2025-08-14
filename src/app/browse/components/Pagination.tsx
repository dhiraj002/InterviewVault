"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isNavigating, setIsNavigating] = useState(false);

    // Reset loading state when URL params change
    // useEffect(() => {
    //     setIsNavigating(false);
    // }, [searchParams]);

    const handlePageChange = useCallback(
        (page: number) => {
            if (page < 1 || page > totalPages || page === currentPage) return;
            setIsNavigating(true);

            const params = new URLSearchParams(searchParams.toString());
            params.set("page", page.toString());
            router.push(`/browse?${params.toString()}`, { scroll: false });
            setIsNavigating(false);
        },
        [currentPage, totalPages, router, searchParams]
    );

    const pages = useMemo<(number | "...")[]>(() => {
        if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);

        if (currentPage <= 3) return [1, 2, 3, 4, "...", totalPages];
        if (currentPage >= totalPages - 2) return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];

        return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
    }, [currentPage, totalPages]);
    if (totalPages <= 1) return null;
    return (
        <nav className="flex items-center justify-center mt-6 gap-2" aria-label="Pagination Navigation">
            {/* Prev */}
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1 || isNavigating}
                className={`px-3 py-2 rounded border text-sm flex items-center gap-1 transition
          ${currentPage === 1 || isNavigating ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}
        `}
                aria-label="Previous Page"
            >
                <ChevronLeft className="w-4 h-4" />
                Prev
            </button>

            {/* Page Numbers */}
            {pages.map((page, idx) =>
                page === "..." ? (
                    <span key={`dots-${idx}`} className="px-2 text-gray-400 select-none">
                        ...
                    </span>
                ) : (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        disabled={isNavigating}
                        className={`px-3 py-2 rounded border text-sm flex items-center gap-1 transition-colors duration-400 ease-in-out
                        
                             ${page === currentPage ? "bg-white text-black font-semibold" : ""}`}
                        aria-current={page === currentPage ? "page" : undefined}
                    >
                        {page}
                    </button>
                )
            )}

            {/* Next */}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || isNavigating}
                className={`px-3 py-2 rounded border text-sm flex items-center gap-1 transition
          ${currentPage === totalPages || isNavigating ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}
        `}
                aria-label="Next Page"
            >
                Next
                <ChevronRight className="w-4 h-4" />
            </button>
        </nav>
    );
}
