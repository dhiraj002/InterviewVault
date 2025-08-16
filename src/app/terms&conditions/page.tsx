"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
    return (
        <main className="bg-[#0d1117] min-h-screen text-gray-200 px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Terms & Conditions
                    <p className="text-sm text-gray-400 mb-8 mt-8">Last updated: August 16, 2025</p>
                </motion.h1>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
                        <p className="text-gray-300">By accessing and using InterviewVault, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our platform.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">2. User Responsibilities</h2>
                        <p className="text-gray-300">You agree to use InterviewVault responsibly. Do not share false information, copyrighted content without permission, or attempt to disrupt the service.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">3. Content Ownership</h2>
                        <p className="text-gray-300">The interview experiences you submit remain your intellectual property. By submitting, you grant InterviewVault a non-exclusive license to display and share your content on the platform.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
                        <p className="text-gray-300">InterviewVault is provided on an &quot;as-is&quot; basis. We make no guarantees about accuracy, completeness, or availability of the platform. Use it at your own risk.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">5. Contact</h2>
                        <p className="text-gray-300">
                            For any questions about these Terms, you can reach out at{" "}
                            <a href="mailto:dhirajdhiman15@gmail.com" className="text-blue-400 underline">
                                dhirajdhiman15@gmail.com
                            </a>
                            .
                        </p>
                    </section>
                </motion.div>
            </div>
        </main>
    );
}
