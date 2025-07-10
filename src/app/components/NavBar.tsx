import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { isUserLoggedIn } from "../../lib/auth";
import Link from "next/link";

export default async function NavBar() {
    const isLoggedIn = await isUserLoggedIn();

    return (
        <nav className="bg-[#0d1117] border-b border-gray-800 px-4 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-blue-500 font-bold text-xl">
                    InterviewVault
                </Link>
                <div className="hidden md:flex space-x-6">
                    <NavLinks isLoggedIn={isLoggedIn} />
                </div>
                <MobileMenu isLoggedIn={isLoggedIn} />
            </div>
        </nav>
    );
}
