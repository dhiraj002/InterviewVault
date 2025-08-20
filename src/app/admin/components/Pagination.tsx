"use client";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, setCurrentPage }: PaginationProps) => {
    if (totalPages <= 1) return null; // hide if not needed

    const generatePages = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);

            if (currentPage > 3) pages.push("start-ellipsis");

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) pages.push(i);

            if (currentPage < totalPages - 3) pages.push("end-ellipsis");

            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className="flex justify-center mt-4 gap-2 flex-wrap text-sm sm:text-base">
            {/* Prev */}
            <button className="px-3 py-1 rounded-md bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition" onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))} disabled={currentPage === 1}>
                Prev
            </button>

            {/* Numbers */}
            {generatePages().map((page) =>
                typeof page === "number" ? (
                    <button key={`page-${page}`} onClick={() => setCurrentPage(page)} className={`px-3 py-1 rounded-md transition ${currentPage === page ? "bg-blue-600 text-white" : "bg-gray-700 text-white hover:bg-gray-600"}`}>
                        {page}
                    </button>
                ) : (
                    <span key={page} className="px-3 py-1 text-gray-400 select-none">
                        ...
                    </span>
                )
            )}

            {/* Next */}
            <button
                className="px-3 py-1 rounded-md bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition"
                onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
