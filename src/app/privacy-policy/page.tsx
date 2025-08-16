"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
    return (
        <main className="bg-[#0d1117] min-h-screen text-gray-200 px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Privacy Policy
                    <p className="text-sm text-gray-400 mb-8 mt-8">Last updated: August 16, 2025</p>
                </motion.h1>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
                        <p className="text-gray-300">We collect basic information you provide (such as name, email, and interview experience details). We may also collect usage data to improve the platform.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
                        <p className="text-gray-300">Your data is used to display interview experiences, improve features, and ensure a safe and reliable service. We do not sell your information to third parties.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
                        <p className="text-gray-300">We take reasonable steps to protect your data but cannot guarantee absolute security. By using InterviewVault, you accept this risk.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">4. Third-Party Services</h2>
                        <p className="text-gray-300">We may use third-party tools (e.g., Google Authentication) to provide services. These services have their own privacy policies which you should review.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">5. Contact</h2>
                        <p className="text-gray-300">
                            For privacy-related concerns, contact us at{" "}
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
