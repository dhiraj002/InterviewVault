type Props = { isLoggedIn: boolean; isAdmin: boolean };
import Link from "next/link";
import LogoutButton from "./LogOutBTn";

export default function NavLinks({ isLoggedIn, isAdmin }: Props) {
    return (
        <>
            <Link href="/" className="text-gray-300 hover:text-blue-400">
                Home
            </Link>
            <Link href="/browse" className="text-gray-300 hover:text-blue-400">
                Browse
            </Link>
            <Link href="/share-experience" className="text-gray-300 hover:text-blue-400">
                Share Experience
            </Link>

            {isLoggedIn ? (
                <>
                    <Link href="/dashboard" className="text-gray-300 hover:text-blue-400">
                        Dashboard
                    </Link>
                    <div className="text-gray-300">
                        <LogoutButton />
                    </div>

                    {isAdmin && (
                        <Link href="/admin" className="text-gray-300 hover:text-blue-400">
                            Admin
                        </Link>
                    )}
                </>
            ) : (
                <>
                    {/* <Link href="/signup" className="text-gray-300 hover:text-blue-400">
                        Sign Up
                    </Link> */}
                    <Link href="/login" className="text-gray-300 hover:text-blue-400">
                        Log In
                    </Link>
                </>
            )}
        </>
    );
}
