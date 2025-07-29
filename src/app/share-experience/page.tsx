import { InterviewStepper } from "./components/InterviewStepper";
import Head from "next/head";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/authOptions";

export default async function Home() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <p className="text-white">You must be logged in to view this page.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 overflow-x-hidden">
            <Head>
                <title>Interview Experience Tracker</title>
                <meta name="description" content="Record and track your job interview experiences" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto px-4 py-4 sm:py-8">
                <div className="text-center mb-4 sm:mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Interview & Exam Experience Tracker</h1>
                    <p className="text-gray-400 text-lg">Share your interview and exam experiences to help others in their career journey</p>
                </div>

                <InterviewStepper session={session} />
            </main>
        </div>
    );
}
