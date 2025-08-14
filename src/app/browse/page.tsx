// app/browse/page.tsx
"use client";

import FilterSidebar from "./components/FilterSidebar";
import ExperiencesList from "./components/ExperiencesList";
import { Suspense } from "react";
// export interface Experience {
//     id?: string;
//     title?: string;
//     company: string;
//     postedDate?: string;
//     summary?: string;
//     tags?: string[];
//     rounds?: string[]; // you can replace `any` with `Round[]` if you have it typed
//     name?: string;
//     outcome?: "selected" | "rejected" | "pending";
//     currRole?: string;
//     difficultyLevel?: string;
//     // upvote?: number;
// }

export default function Browse() {
    return (
        <Suspense>
            <main className="bg-[#0d1117] min-h-screen py-12 px-4 text-gray-200">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                    <FilterSidebar />

                    <section>
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
                        <ExperiencesList />
                    </section>
                </div>
            </main>
        </Suspense>
    );
}
