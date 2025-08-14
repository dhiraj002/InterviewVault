// "use client";

// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import LogoutButton from "./LogOutBTn";

// type Props = { isLoggedIn: boolean; isAdmin: boolean };

// export default function MobileMenu({ isLoggedIn, isAdmin }: Props) {
//     const [open, setOpen] = useState(false);
//     const pathname = usePathname();
//     const toggle = () => setOpen(!open);

//     const linkClass = (href: string) => {
//         const isActive = pathname === href || pathname.startsWith(href + "/");
//         return `px-4 py-3 text-sm transition-colors duration-200 ${isActive ? "text-blue-500 bg-gray-800 border-l-4 border-blue-500" : "text-gray-300 hover:text-white hover:bg-gray-800"}`;
//     };

//     return (
//         <div className="md:hidden relative">
//             {/* Toggle Button */}
//             <button onClick={toggle} className="text-gray-300 hover:text-blue-400 focus:outline-none" aria-label={open ? "Close menu" : "Open menu"}>
//                 {open ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>

//             {/* Dropdown Menu */}
//             {open && (
//                 <div className="absolute right-0 mt-2 w-48 bg-[#0d1117] rounded-lg shadow-lg border border-gray-700 z-50 overflow-hidden">
//                     <div className="flex flex-col">
//                         <Link href="/" className={linkClass("/")} onClick={() => setOpen(false)}>
//                             Home
//                         </Link>
//                         <Link href="/browse" className={linkClass("/browse")} onClick={() => setOpen(false)}>
//                             Browse
//                         </Link>
//                         <Link href="/share-experience" className={linkClass("/share-experience")} onClick={() => setOpen(false)}>
//                             Share Experience
//                         </Link>
//                         {isLoggedIn ? (
//                             <>
//                                 <Link href="/dashboard" className={linkClass("/dashboard")} onClick={() => setOpen(false)}>
//                                     Dashboard
//                                 </Link>
//                                 <div className="px-4 py-3 text-sm text-white" onClick={() => setOpen(false)}>
//                                     <LogoutButton />
//                                 </div>
//                                 {isAdmin && (
//                                     <Link href="/admin" className={linkClass("/admin")} onClick={() => setOpen(false)}>
//                                         Admin
//                                     </Link>
//                                 )}
//                             </>
//                         ) : (
//                             <>
//                                 <Link href="/login" className={linkClass("/login")} onClick={() => setOpen(false)}>
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
        return `block px-6 py-4 text-lg transition-colors duration-200 ${isActive ? "text-blue-500 bg-gray-800" : "text-gray-300 hover:text-white hover:bg-gray-800"}`;
    };

    return (
        <div className="md:hidden">
            {/* Menu Toggle Button (Visible when menu is closed) */}
            {!open && (
                <button onClick={toggle} className="text-gray-300 hover:text-blue-400 focus:outline-none z-50 relative" aria-label="Open menu">
                    <FiMenu size={24} />
                </button>
            )}

            {/* Dark Overlay */}
            <div className={`fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={toggle}></div>

            {/* Sliding Full-Page Menu */}
            <div className={`fixed top-0 right-0 h-full w-full bg-[#0d1117] z-50 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}>
                {/* Close Button */}
                <button onClick={toggle} className="absolute top-5 right-5 text-gray-300 hover:text-white focus:outline-none" aria-label="Close menu">
                    <FiX size={28} />
                </button>

                {/* Menu Links */}
                <div className="flex flex-col mt-16">
                    <Link href="/" className={linkClass("/")} onClick={toggle}>
                        Home
                    </Link>
                    <Link href="/browse" className={linkClass("/browse")} onClick={toggle}>
                        Browse
                    </Link>
                    <Link href="/share-experience" className={linkClass("/share-experience")} onClick={toggle}>
                        Share Experience
                    </Link>
                    {isLoggedIn ? (
                        <>
                            <Link href="/dashboard" className={linkClass("/dashboard")} onClick={toggle}>
                                Dashboard
                            </Link>
                            <div className="px-6 py-4 text-lg text-white" onClick={toggle}>
                                <LogoutButton />
                            </div>
                            {isAdmin && (
                                <Link href="/admin" className={linkClass("/admin")} onClick={toggle}>
                                    Admin
                                </Link>
                            )}
                        </>
                    ) : (
                        <Link href="/login" className={linkClass("/login")} onClick={toggle}>
                            Log In
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
