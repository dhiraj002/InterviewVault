import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-700 py-6">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-400 text-sm">© {new Date().getFullYear()} InterviewVault. All rights reserved.</p>
                <div className="flex space-x-4">
                    <Link href="/" className="text-gray-400 hover:text-green-400 text-sm">
                        Home
                    </Link>
                    <Link href="/browse" className="text-gray-400 hover:text-green-400 text-sm">
                        Browse
                    </Link>
                    <Link href="/submit" className="text-gray-400 hover:text-green-400 text-sm">
                        Submit
                    </Link>
                    <Link href="/about" className="text-gray-400 hover:text-green-400 text-sm">
                        About
                    </Link>
                </div>
            </div>
        </footer>
    );
}
