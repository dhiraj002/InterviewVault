import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { getUserInterviews } from "./data/data";
import DashboardClient from "./components/DashboardClient";
export const metadata = {
    title: "Dashboard | InterviewVault",
    description: "Easily manage your submitted interview experiences. Search, filter, edit, or delete your entries — all in one place.",
    keywords: ["interview dashboard", "InterviewVault", "manage interviews", "edit interview experience", "interview submissions", "job interview tracker"],
};
export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session || !session?.user || !session?.user?.id) {
        return <div className="text-white p-8">Unauthorized</div>;
    }

    const userId = session.user.id;
    const items = await getUserInterviews(userId);

    return <DashboardClient initialItems={items} />;
}
