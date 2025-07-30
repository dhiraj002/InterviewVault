// "use client";

// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import Link from "next/link";
// import LogoutButton from "./LogOutBTn";

// type Props = { isLoggedIn: boolean; isAdmin: boolean };

// export default function MobileMenu({ isLoggedIn, isAdmin }: Props) {
//     const [open, setOpen] = useState(false);
//     const toggle = () => setOpen(!open);

//     return (
//         <div className="md:hidden relative">
//             {/* Toggle Button */}
//             <button onClick={toggle} className="text-gray-300 hover:text-blue-400 focus:outline-none">
//                 {open ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>

//             {/* Dropdown Menu */}
//             {open && (
//                 <div className="absolute right-0 mt-2 w-48 bg-[#0d1117] rounded-lg shadow-lg border border-gray-700 z-50 overflow-hidden">
//                     <div className="flex flex-col">
//                         <Link href="/" className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800" onClick={() => setOpen(false)}>
//                             Home
//                         </Link>
//                         <Link href="/browse" className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800" onClick={() => setOpen(false)}>
//                             Browse
//                         </Link>
//                         <Link href="/share-experience" className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800" onClick={() => setOpen(false)}>
//                             Share Experience
//                         </Link>
//                         {isLoggedIn ? (
//                             <>
//                                 <Link href="/dashboard" className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800" onClick={() => setOpen(false)}>
//                                     Dashboard
//                                 </Link>
//                                 <div className="px-4 py-3 text-sm text-white" onClick={() => setOpen(false)}>
//                                     <LogoutButton />
//                                 </div>
//                                 {isAdmin && (
//                                     <Link href="/admin" className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800" onClick={() => setOpen(false)}>
//                                         Admin
//                                     </Link>
//                                 )}
//                             </>
//                         ) : (
//                             <>
//                                 {/* <Link href="/signup" className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800" onClick={() => setOpen(false)}>
//                                     Sign Up
//                                 </Link> */}
//                                 <Link href="/login" className="px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800" onClick={() => setOpen(false)}>
//                                     Log In
//                                 </Link>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogOutBTn";

type Props = { isLoggedIn: boolean; isAdmin: boolean };

export default function MobileMenu({ isLoggedIn, isAdmin }: Props) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const toggle = () => setOpen(!open);

    const linkClass = (href: string) => {
        const isActive = pathname === href || pathname.startsWith(href + "/");
        return `px-4 py-3 text-sm transition-colors duration-200 ${isActive ? "text-blue-500 bg-gray-800 border-l-4 border-blue-500" : "text-gray-300 hover:text-white hover:bg-gray-800"}`;
    };

    return (
        <div className="md:hidden relative">
            {/* Toggle Button */}
            <button onClick={toggle} className="text-gray-300 hover:text-blue-400 focus:outline-none" aria-label={open ? "Close menu" : "Open menu"}>
                {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>

            {/* Dropdown Menu */}
            {open && (
                <div className="absolute right-0 mt-2 w-48 bg-[#0d1117] rounded-lg shadow-lg border border-gray-700 z-50 overflow-hidden">
                    <div className="flex flex-col">
                        <Link href="/" className={linkClass("/")} onClick={() => setOpen(false)}>
                            Home
                        </Link>
                        <Link href="/browse" className={linkClass("/browse")} onClick={() => setOpen(false)}>
                            Browse
                        </Link>
                        <Link href="/share-experience" className={linkClass("/share-experience")} onClick={() => setOpen(false)}>
                            Share Experience
                        </Link>
                        {isLoggedIn ? (
                            <>
                                <Link href="/dashboard" className={linkClass("/dashboard")} onClick={() => setOpen(false)}>
                                    Dashboard
                                </Link>
                                <div className="px-4 py-3 text-sm text-white" onClick={() => setOpen(false)}>
                                    <LogoutButton />
                                </div>
                                {isAdmin && (
                                    <Link href="/admin" className={linkClass("/admin")} onClick={() => setOpen(false)}>
                                        Admin
                                    </Link>
                                )}
                            </>
                        ) : (
                            <>
                                <Link href="/login" className={linkClass("/login")} onClick={() => setOpen(false)}>
                                    Log In
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
