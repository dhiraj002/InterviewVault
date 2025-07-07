"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="bg-gray-900 text-white fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-semibold text-blue-600">
                            InterviewVault
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/browse" className="hover:text-blue-600">
                            Browse
                        </Link>
                        <Link href="/share-experience" className="hover:text-blue-600">
                            Share Experience
                        </Link>
                        {/* <Link href="/submit" className="hover:text-blue-600">
                            About
                        </Link> */}
                        <Link href="/Signin" className="hover:text-blue-600">
                            Sign In
                        </Link>
                        <Link href="/signup" className="hover:text-blue-600">
                            Sign Up
                        </Link>
                    </div>

                    {/* Hamburger Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white-800 hover:text-blue-600 focus:outline-none">
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-900 text-white  shadow-md">
                    <div className="flex flex-col px-4 pb-4 space-y-2">
                        <Link href="/browse" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
                            Browse
                        </Link>
                        <Link href="/share-experience" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
                            Share Experience
                        </Link>
                        {/* <Link href="/submit" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
                            About
                        </Link> */}
                        <Link href="/Signin" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
                            Sign In
                        </Link>
                        <Link href="/signup" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
                            Sign Up
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
