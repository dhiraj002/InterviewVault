import { InterviewStepper } from "../components/InterviewStepper";
import Head from "next/head";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions";
import connectDB from "../../../lib/dbConnect";
import Experience from "../../../model/shareExperience";

export default async function Home({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const session = await getServerSession(authOptions);
    if (!session) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <p className="text-white">You must be logged in to view this page.</p>
            </div>
        );
    }

    await connectDB();

    let experienceData = null;
    try {
        experienceData = await Experience.findById(id).lean();
        experienceData = experienceData ? JSON.parse(JSON.stringify(experienceData)) : null;
    } catch (error) {
        console.error("Failed to fetch experience:", error);
    }
    if (!experienceData) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <p className="text-white">Experience not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 overflow-x-hidden">
            <Head>
                <title>Interview Experience Tracker</title>
                <meta name="description" content="Record and track your job interview experiences" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main className="container mx-auto px-4 py-4 sm:py-8">
                <div className="text-center mb-4 sm:mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Interview & Exam Experience Tracker</h1>
                    <p className="text-gray-400 text-lg">Edit your interview and exam experiences... </p>
                </div>

                <InterviewStepper session={session} initialExperience={experienceData} isEdit={true} expId={id} />
            </main>
        </div>
    );
}
