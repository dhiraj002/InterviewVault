import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/authOptions";
import Link from "next/link";

export default async function NavBar() {
    const session = await getServerSession(authOptions);
    const isLoggedIn = !!session?.user;
    const isAdmin = session?.user?.isAdmin || false;

    return (
        <nav className="bg-[#0d1117] border-b border-gray-800 px-4 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-blue-500 font-bold text-xl">
                    InterviewVault
                </Link>
                <div className="hidden md:flex space-x-6">
                    <NavLinks isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
                </div>
                <MobileMenu isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
            </div>
        </nav>
    );
}
