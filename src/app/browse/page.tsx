// app/browse/page.tsx
import ExperienceCard from "./components/ExperienceCard";
import Pagination from "./components/Pagination";
import FilterSidebar from "./components/FilterSidebar";

export interface Experience {
    id?: string;
    title?: string;
    company: string;
    postedDate?: string;
    summary?: string;
    tags?: string[];
    rounds?: string[]; // you can replace `any` with `Round[]` if you have it typed
    name?: string;
    outcome?: "selected" | "rejected" | "pending";
    currRole?: string;
    difficultyLevel?: string;
    upvote?: number;
}

async function fetchExperiences(searchParams: Record<string, string | string[] | undefined>) {
    const filteredParams = Object.fromEntries(Object.entries(searchParams).filter(([, v]) => typeof v === "string") as [string, string][]);

    const query = new URLSearchParams(filteredParams).toString();
    const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/experiences?${query}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch experiences");
    }

    return res.json();
}

export default async function Browse({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const allParams = await searchParams;
    console.log(allParams);

    const { experiences, pagination } = await fetchExperiences(allParams);

    return (
        <main className="bg-[#0d1117] min-h-screen py-12 px-4 text-gray-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                <FilterSidebar />

                <section>
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-sm text-gray-400">Found {experiences.length} experiences</p>
                    </div>

                    {experiences.length === 0 ? (
                        <div className="text-center text-gray-500 mt-12">
                            <p className="text-lg">No interview experiences found.</p>
                            {/* <Link href="/browse" className="mt-4 inline-block bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">
                                Clear All Filters
                            </Link> */}
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {experiences.map((exp: Experience) => (
                                    <ExperienceCard key={exp.id} {...exp} />
                                ))}
                            </div>

                            <Pagination currentPage={pagination.page} totalPages={pagination.totalPages} />
                        </>
                    )}
                </section>
            </div>
        </main>
    );
}
