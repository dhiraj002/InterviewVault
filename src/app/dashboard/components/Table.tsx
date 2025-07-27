// "use client";
// import { Interview } from "@/types/interview";
// import { Status } from "./Status";
// import { Actions } from "./Action";
// import { EmptyState } from "./EmptyState";

// interface TableProps {
//     items: Interview[];
//     onEdit: (item: Interview) => void;
//     onDelete: (id: string) => void;
//     searchQuery: string;
// }

// export function Table({ items, onEdit, onDelete, searchQuery }: TableProps) {
//     if (items.length === 0) {
//         return <EmptyState type="search" query={searchQuery} />;
//     }

//     const formatDate = (date: string) => {
//         return new Date(date).toLocaleDateString("en-US", {
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//         });
//     };

//     const getTypeLabel = (type: string) => {
//         const labels = { corporate: "Corporate", startup: "Startup", exam: "Exam" };
//         return labels[type as keyof typeof labels] || type;
//     };

//     return (
//         <div className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
//             {/* Desktop Table */}
//             <div className="hidden md:block overflow-x-auto">
//                 <table className="w-full">
//                     <thead>
//                         <tr className="border-b border-gray-700 bg-gray-800">
//                             <th className="text-left p-4 text-sm font-medium text-gray-300 uppercase">Title</th>
//                             <th className="text-left p-4 text-sm font-medium text-gray-300 uppercase">Status</th>
//                             <th className="text-left p-4 text-sm font-medium text-gray-300 uppercase">Company</th>
//                             <th className="text-left p-4 text-sm font-medium text-gray-300 uppercase">Type</th>
//                             <th className="text-left p-4 text-sm font-medium text-gray-300 uppercase">Date</th>
//                             <th className="w-12"></th>
//                         </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-700">
//                         {items.map((item) => (
//                             <tr key={item.id} className="hover:bg-gray-800/50">
//                                 <td className="p-4">
//                                     <div className="font-medium text-white">{item.title}</div>
//                                 </td>
//                                 <td className="p-4">
//                                     <Status status={item.status} />
//                                 </td>
//                                 <td className="p-4 text-white">{item.company}</td>
//                                 <td className="p-4 text-gray-300">{getTypeLabel(item.type)}</td>
//                                 <td className="p-4 text-gray-300">{formatDate(item.date)}</td>
//                                 <td className="p-4">
//                                     <Actions onEdit={() => onEdit(item)} onDelete={() => onDelete(item.id)} />
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Mobile Cards */}
//             <div className="md:hidden divide-y divide-gray-700">
//                 {items.map((item) => (
//                     <div key={item.id} className="p-4">
//                         <div className="flex justify-between items-start mb-2">
//                             <h3 className="font-medium text-white">{item.title}</h3>
//                             <Actions onEdit={() => onEdit(item)} onDelete={() => onDelete(item.id)} />
//                         </div>
//                         <div className="space-y-2 text-sm">
//                             <div className="flex justify-between">
//                                 <Status status={item.status} />
//                                 <span className="text-gray-300">{getTypeLabel(item.type)}</span>
//                             </div>
//                             <div className="text-white">{item.company}</div>
//                             <div className="text-gray-400">{formatDate(item.date)}</div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

"use client";

import { Interview } from "@/types/interview";
import { Status } from "./Status";
import { Actions } from "./Action";
import { EmptyState } from "./EmptyState";

interface TableProps {
    items: Interview[];
    onEdit: (item: Interview) => void;
    onDelete: (id: string) => void;
    searchQuery: string;
}

export function Table({ items, onEdit, onDelete, searchQuery }: TableProps) {
    if (items.length === 0) {
        return <EmptyState type="search" query={searchQuery} />;
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

    return (
        <div className="bg-gray-800/50 rounded-lg border border-gray-700 ">
            {/* Desktop Table */}
            <div className="hidden md:block ">
                <table className="w-full text-sm text-gray-300">
                    <thead>
                        <tr className="bg-gray-800 border-b border-gray-700">
                            {["Title", "Status", "Company", "Type", "Date", ""].map((heading) => (
                                <th key={heading} scope="col" className="px-4 py-3 text-left font-semibold uppercase tracking-wide">
                                    {heading}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {items.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-800/70 transition">
                                <td className="px-4 py-3 text-white font-medium">{item.title}</td>
                                <td className="px-4 py-3">
                                    <Status status={item.status} />
                                </td>
                                <td className="px-4 py-3 text-white">{item.company}</td>
                                <td className="px-4 py-3">{getTypeLabel(item.type)}</td>
                                <td className="px-4 py-3 text-gray-400">{formatDate(item.date)}</td>
                                <td className="px-4 py-3">
                                    <Actions onEdit={() => onEdit(item)} onDelete={() => onDelete(item.id)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-700">
                {items.map((item) => (
                    <div key={item.id} className="p-4">
                        <div className="flex justify-between items-start">
                            <h3 className="text-white font-semibold">{item.title}</h3>
                            <Actions onEdit={() => onEdit(item)} onDelete={() => onDelete(item.id)} />
                        </div>
                        <div className="mt-2 space-y-1 text-sm">
                            <div className="flex justify-between items-center">
                                <Status status={item.status} />
                                <span className="text-gray-400">{getTypeLabel(item.type)}</span>
                            </div>
                            <div className="text-white">{item.company}</div>
                            <div className="text-gray-500">{formatDate(item.date)}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
