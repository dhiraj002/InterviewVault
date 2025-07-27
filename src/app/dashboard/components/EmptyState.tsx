// import { FileText, Plus, Filter } from "lucide-react";
// import Link from "next/link";

// interface EmptyStateProps {
//     hasFilters: boolean;
//     onClearFilters: () => void;
// }

// export function EmptyState({ hasFilters, onClearFilters }: EmptyStateProps) {
//     if (hasFilters) {
//         return (
//             <div className="text-center py-12 bg-gray-800 rounded-xl border border-gray-700">
//                 <Filter className="w-16 h-16 text-gray-600 mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold text-white mb-2">No matching experiences</h3>
//                 <p className="text-gray-400 mb-6">No interview experiences match your current filters.</p>
//                 <button onClick={onClearFilters} className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
//                     Clear Filters
//                 </button>
//             </div>
//         );
//     }

//     return (
//         <div className="text-center py-16 bg-gray-800 rounded-xl border border-gray-700">
//             <FileText className="w-20 h-20 text-gray-600 mx-auto mb-6" />
//             <h3 className="text-2xl font-semibold text-white mb-2">No interview experiences yet</h3>
//             <p className="text-gray-400 mb-8 max-w-md mx-auto">Start building your interview experience collection by sharing your first interview story. Help others learn from your journey!</p>
//             <Link href="/" className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
//                 <Plus className="w-5 h-5" />
//                 <span>Add Your First Experience</span>
//             </Link>
//         </div>
//     );
// }

import { SearchX, FileX } from "lucide-react";

interface EmptyStateProps {
    type: "search" | "no-data";
    query?: string;
}

export function EmptyState({ type, query }: EmptyStateProps) {
    if (type === "search") {
        return (
            <div className="text-center py-12">
                <SearchX className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">No results found</h3>
                <p className="text-gray-400">{query ? `No experiences found for "${query}"` : "Try adjusting your search"}</p>
            </div>
        );
    }

    return (
        <div className="text-center py-12">
            <FileX className="h-12 w-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">No experiences yet</h3>
            <p className="text-gray-400 mb-6">Get started by sharing your first experience</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">Share Experience</button>
        </div>
    );
}
