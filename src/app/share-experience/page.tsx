"use client";

import { useState } from "react";
import PrivateExperienceForm from "../components/PrivateExp";

export default function ShareExperiencePage() {
    const [activeTab, setActiveTab] = useState<"private" | "govt">("private");

    return (
        <main className="min-h-screen bg-[#0d1117] text-gray-200 px-4 py-4">
            <div className="max-w-4xl mx-auto">
                {/* Tabs */}
                <div className="flex space-x-2 mb-6 border-b border-gray-700">
                    <button onClick={() => setActiveTab("private")} className={`px-4 py-2 font-medium ${activeTab === "private" ? "border-b-2 border-blue-500 text-blue-400" : "text-gray-400 hover:text-gray-200"}`}>
                        Private
                    </button>
                    <button onClick={() => setActiveTab("govt")} className={`px-4 py-2 font-medium ${activeTab === "govt" ? "border-b-2 border-blue-500 text-blue-400" : "text-gray-400 hover:text-gray-200"}`}>
                        Govt
                    </button>
                </div>

                {/* Content */}
                {activeTab === "private" && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Share Private Sector Interview</h2>
                        <p className="text-gray-400 mb-4">Fill in details about your experience interviewing at private companies.</p>
                        {/* You can put your form here */}
                        <PrivateExperienceForm />
                    </div>
                )}
                {activeTab === "govt" && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Share Government Job Interview</h2>
                        <p className="text-gray-400 mb-4">Fill in details about your experience interviewing for government positions.</p>
                        {/* You can put your form here */}
                    </div>
                )}
            </div>
        </main>
    );
}
