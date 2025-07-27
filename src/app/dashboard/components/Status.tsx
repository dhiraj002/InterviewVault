interface StatusProps {
    status: "published" | "draft" | "pending" | "review";
}

const statusConfig = {
    published: "bg-green-100 text-green-800",
    draft: "bg-gray-100 text-gray-800",
    pending: "bg-yellow-100 text-yellow-800",
    review: "bg-blue-100 text-blue-800",
};

const statusLabels = {
    published: "Published",
    draft: "Draft",
    pending: "Pending",
    review: "Review",
};

export function Status({ status }: StatusProps) {
    return <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig[status]}`}>{statusLabels[status]}</span>;
}
