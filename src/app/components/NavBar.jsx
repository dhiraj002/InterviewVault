"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="bg-[#0d1117] border-b border-gray-800 px-4 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Brand */}
                <Link href="/" className="text-blue-500 font-bold text-xl">
                    InterviewVault
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-300 hover:text-blue-400 transition">
                        Home
                    </Link>
                    <Link href="/browse" className="text-gray-300 hover:text-blue-400 transition">
                        Browse
                    </Link>
                    <Link href="/share-experience" className="text-gray-300 hover:text-blue-400 transition">
                        Share Experience
                    </Link>
                    <Link href="/signup" className="text-gray-300 hover:text-blue-400 transition">
                        Sign Up
                    </Link>

                    <Link href="/login" className="text-gray-300 hover:text-blue-400 transition">
                        Log In
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden text-gray-300 hover:text-blue-400 focus:outline-none">
                    {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 space-y-2">
                    <Link href="/" onClick={closeMenu} className="block text-gray-300 hover:text-blue-400 px-2 py-2">
                        Home
                    </Link>
                    <Link href="/browse" onClick={closeMenu} className="block text-gray-300 hover:text-blue-400 px-2 py-2">
                        Browse
                    </Link>
                    <Link href="/share-experience" onClick={closeMenu} className="block text-gray-300 hover:text-blue-400 px-2 py-2">
                        Share Experience
                    </Link>

                    <Link href="/signup" onClick={closeMenu} className="block text-gray-300 hover:text-blue-400 px-2 py-2">
                        Sign Up
                    </Link>

                    <Link href="/login" onClick={closeMenu} className="block text-gray-300 hover:text-blue-400 px-2 py-2">
                        Log In
                    </Link>
                </div>
            )}
        </nav>
    );
}
