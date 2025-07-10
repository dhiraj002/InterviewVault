import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0d1117] border-t border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand / About */}
                <div>
                    <h2 className="text-xl font-semibold text-blue-500 mb-2">InterviewVault</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">Helping candidates succeed by sharing real interview experiences across industries.</p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="text-gray-400 hover:text-blue-400 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/browse" className="text-gray-400 hover:text-blue-400 transition">
                                Browse Experiences
                            </Link>
                        </li>
                        <li>
                            <Link href="/share-experience" className="text-gray-400 hover:text-blue-400 transition">
                                Share Experience
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-gray-400 hover:text-blue-400 transition">
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact / Social */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Contact</h3>
                    <p className="text-gray-400 text-sm">
                        Have questions or feedback?
                        <br />
                        Email us at{" "}
                        <a href="mailto:support@interviewvault.com" className="text-blue-400 hover:underline">
                            support@interviewvault.com
                        </a>
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                            <FaTwitter className="w-5 h-5" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                            <FaLinkedin className="w-5 h-5" />
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                            <FaGithub className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 border-t border-gray-800 pt-4 text-center">
                <p className="text-gray-500 text-xs">© {new Date().getFullYear()} InterviewVault. All rights reserved.</p>
            </div>
        </footer>
    );
}
