// "use client";

// import { useRouter, useSearchParams } from "next/navigation";

// interface Props {
//     currentPage: number;
//     totalPages: number;
// }

// export default function Pagination({ currentPage, totalPages }: Props) {
//     const router = useRouter();
//     const params = useSearchParams();

//     const handlePageChange = (page: number) => {
//         const q = new URLSearchParams(params.toString());
//         q.set("page", page.toString());
//         router.push(`/browse?${q.toString()}`);
//     };

//     return (
//         <div className="flex justify-center mt-8 gap-2 text-sm">
//             {Array.from({ length: totalPages }, (_, i) => (
//                 <button key={i} onClick={() => handlePageChange(i + 1)} className={`px-4 py-2 rounded-md border ${currentPage === i + 1 ? "bg-white text-black font-semibold" : "bg-gray-800 text-gray-400 hover:bg-gray-700"}`}>
//                     {i + 1}
//                 </button>
//             ))}
//         </div>
//     );
// }

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();

    if (totalPages <= 1) return null;

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", page.toString());
        router.push(`/browse?${params.toString()}`);
    };

    const generatePageNumbers = () => {
        const pages: (number | "...")[] = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }

        return pages;
    };

    const pages = generatePageNumbers();

    return (
        <div className="flex items-center justify-center mt-6 gap-2">
            {/* Prev */}
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded border text-sm flex items-center gap-1
          ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}
        `}
            >
                <ChevronLeft className="w-4 h-4" />
                Prev
            </button>

            {/* Page Numbers */}
            {pages.map((page, index) =>
                page === "..." ? (
                    <span key={index} className="px-2 text-gray-400">
                        ...
                    </span>
                ) : (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-2 rounded text-sm border
              ${page === currentPage ? "bg-white text-black font-semibold" : "hover:bg-gray-800"}
            `}
                    >
                        {page}
                    </button>
                )
            )}

            {/* Next */}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded border text-sm flex items-center gap-1
          ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}
        `}
            >
                Next
                <ChevronRight className="w-4 h-4" />
            </button>
        </div>
    );
}
