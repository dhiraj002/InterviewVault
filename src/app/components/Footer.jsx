import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0d1117] border-t border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Brand / About */}
                <div>
                    <h2 className="text-xl font-semibold text-blue-500 mb-3">InterviewVault</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">Helping candidates succeed by sharing real interview experiences across industries.</p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {[
                            { label: "Home", href: "/" },
                            { label: "Browse Experiences", href: "/browse" },
                            { label: "Share Experience", href: "/share-experience" },
                            { label: "Dashboard", href: "/dashboard" },
                        ].map(({ label, href }) => (
                            <li key={href}>
                                <Link href={href} className="text-gray-400 hover:text-blue-400 transition-colors duration-200 relative group inline-block">
                                    {label}
                                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact / Social */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Contact</h3>
                    <p className="text-gray-400 text-sm">
                        Have questions or feedback?
                        <br />
                        Email us at:{" "}
                        <div className="flex flex-col space-y-1 mt-1">
                            <Link href="mailto:dhirajdhiman15@gmail.com" className="text-blue-400 hover:underline">
                                dhirajdhiman15@gmail.com
                            </Link>
                            <Link href="mailto:nsnishant5930@gmail.com" className="text-blue-400 hover:underline">
                                nsnishant5930@gmail.com
                            </Link>
                        </div>
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <Link href="https://linkedin.com/in/dhiraj-dhiman02" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                            <FaLinkedin className="w-5 h-5" />
                        </Link>
                        <Link href="https://github.com/dhiraj002" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                            <FaGithub className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-gray-800 pt-4 text-center">
                <p className="text-gray-500 text-xs">© {new Date().getFullYear()} InterviewVault. All rights reserved.</p>
            </div>
            {/* Terms & Privacy Links */}
            <div className="text-xs text-gray-400 space-x-3  text-center mt-4">
                <Link href="/terms&conditions" className="text-blue-400 underline hover:text-blue-300 transition">
                    Terms & Conditions
                </Link>
                <span>|</span>
                <Link href="/privacy-policy" className="text-blue-400 underline hover:text-blue-300 transition">
                    Privacy Policy
                </Link>
            </div>
        </footer>
    );
}
