// import ExperienceCard from "./components/ExperienceCard";
// import FilterSidebar from "./components/FilterSidebar";
// import { getAllExperiences } from "./actions/getExperiences";

export default async function Browse() {
    // const { data: experiences, error } = await getAllExperiences();
    // console.log(experiences);

    // if (error) {
    //     return (
    //         <main className="bg-[#0d1117] min-h-screen flex items-center justify-center px-4 text-red-400">
    //             <div className="text-center">
    //                 <h2 className="text-2xl font-semibold mb-2">Failed to load experiences</h2>
    //                 <p className="text-sm text-gray-500">{error}</p>
    //             </div>
    //         </main>
    //     );
    // }

    return (
        <main className="bg-[#0d1117] min-h-screen py-12 px-4 text-gray-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                {/* Sidebar Filters */}
                {/* <FilterSidebar /> */}

                {/* Main Content */}
                {/* <section>
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-sm text-gray-400">Found {experiences.length} experiences</p>
                        <select className="bg-[#161b22] border border-gray-700 rounded-md px-3 py-2 text-sm">
                            <option>Sort by: Most Recent</option>
                            <option>Sort by: Most Helpful</option>
                        </select>
                    </div>

                    {experiences.length === 0 ? (
                        <div className="text-center text-gray-500 mt-12">
                            <p className="text-lg">No interview experiences found.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {experiences.map((exp: any) => (
                                <ExperienceCard
                                    key={exp._id}
                                    title={exp.postAppliedFor || exp.position}
                                    subtitle={`${exp.rounds?.length || 0} rounds • ${new Date(exp.interviewDate).toLocaleDateString()}`}
                                    tags={[...(exp.interviewTypes || []), ...(exp.examStages || []), ...(exp.subjectSpecificQuestions ? exp.subjectSpecificQuestions.split(",").map((tag: string) => tag.trim()) : [])]}
                                    summary={exp.surprisingAspects || exp.preparation || exp.technicalQuestions?.split("\n")?.[0] || "No summary provided."}
                                    helpfulCount={exp.upvotes || 0}
                                />
                            ))}
                        </div>
                    )}
                </section> */}
            </div>
        </main>
    );
}
