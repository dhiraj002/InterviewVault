// // components/ExperienceHeader.tsx

import { BadgeCheck, Building2, CalendarDays, Layers, User2, Trophy } from "lucide-react";
import { formatDistanceToNow, parse } from "date-fns";
import { Star } from "lucide-react";
interface ExperienceHeaderProps {
    data: {
        title?: string;
        position?: string;
        category: string;
        date: string;
        difficultyLevel: string;
        mode: string;
        salary?: string;
        result: string;
        tags?: string[];
        applicationSource: string;
        name: string;
        email: string;
        overallRating: number;
    };
}

function capitalizeFirst(str: string) {
    // return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    if (!str.trim()) return "";

    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

export function formatPostedAgo(dateString: string): string {
    const parsedDate = parse(dateString, "EEE MMM dd yyyy", new Date());
    const distance = formatDistanceToNow(parsedDate, { addSuffix: true });
    return `Posted ${distance.replace("about ", "")}`;
}

export default function ExperienceHeader({ data }: ExperienceHeaderProps) {
    // export default function ExperienceHeader() {
    return (
        <section className="space-y-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-bold text-white">{data.title} </h1>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <CalendarDays className="w-4 h-4" />
                    {/* <span>{format(data.date)}</span> */}
                    <span>{formatPostedAgo(data.date)}</span>
                </div>
            </div>
            <h6 className="font-bold text-white">{capitalizeFirst(data.name)}</h6>
            <h6 className="font-bold text-white">{capitalizeFirst(data?.email)}</h6>

            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                    <User2 className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">Category:</span>
                    <span className="text-white">{capitalizeFirst(data?.category)}</span>
                    {/* <span className="text-white">Private</span> */}
                </div>

                <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">Difficulty:</span>
                    <span className="text-white">{capitalizeFirst(data.difficultyLevel)}</span>
                    {/* <span className="text-white">Hard</span> */}
                </div>

                <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">Mode:</span>
                    <span className="text-white">{capitalizeFirst(data.mode)}</span>
                </div>

                <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">Application Soure:</span>
                    <span className="text-white">{capitalizeFirst(data.applicationSource)}</span>
                </div>

                {data?.salary && (
                    <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">Salary:</span>
                        <span className="text-white">{data.salary}</span>
                    </div>
                )}

                <div className="flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400">Result:</span>
                    <span className={`font-semibold ${data.result === "Selected" ? "text-green-400" : data.result == "Rejected" ? "text-red-400" : "text-yellow-400"}`}>{capitalizeFirst(data.result)}</span>
                </div>

                <div className="flex items-center">
                    <span className="text-gray-400 mr-1">Overall Rating:</span>
                    <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <Star key={rating} className={`w-5 h-5 transition-colors ${rating <= data.overallRating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
