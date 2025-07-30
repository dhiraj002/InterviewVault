"use client";

type Props = { isLoggedIn: boolean; isAdmin: boolean };
import Link from "next/link";
import LogoutButton from "./LogOutBTn";
import { usePathname } from "next/navigation";

// Utility to determine if the current link is active
const getLinkClass = (pathname: string, href: string) => {
    const isActive = pathname === href || pathname.startsWith(href + "/");

    return ["transition-all duration-300 ease-in-out  border-b-2 font-semibold", isActive ? "text-blue-500  border-blue-500" : "text-gray-300 border-transparent hover:text-blue-400 hover:border-blue-400"].join(" ");
};

export default function NavLinks({ isLoggedIn, isAdmin }: Props) {
    const pathname = usePathname();

    return (
        <>
            <Link href="/" className={getLinkClass(pathname, "/")}>
                Home
            </Link>
            <Link href="/browse" className={getLinkClass(pathname, "/browse")}>
                Browse
            </Link>
            <Link href="/share-experience" className={getLinkClass(pathname, "/share-experience")}>
                Share Experience
            </Link>

            {isLoggedIn ? (
                <>
                    <Link href="/dashboard" className={getLinkClass(pathname, "/dashboard")}>
                        Dashboard
                    </Link>

                    {isAdmin && (
                        <Link href="/admin" className={getLinkClass(pathname, "/admin")}>
                            Admin
                        </Link>
                    )}
                    <div className="text-gray-300">
                        <LogoutButton />
                    </div>
                </>
            ) : (
                <>
                    <Link href="/login" className={getLinkClass(pathname, "/login")}>
                        Log In
                    </Link>
                </>
            )}
        </>
    );
}
