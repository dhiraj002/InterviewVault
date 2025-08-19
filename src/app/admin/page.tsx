"use client";

import { useState } from "react";
import StatsSection from "./components/StatsSection";
import UsersTable from "./components/UsersTable";
import ExperienceTable from "./components/ExperiencesTable "; // new

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState<"users" | "experience">("experience");

    return (
        <div className="p-6">
            {/* Stats Section stays on top */}
            <StatsSection />

            {/* Tab navigation */}
            <div className="flex gap-4 border-b border-gray-700 mt-6">
                <button onClick={() => setActiveTab("users")} className={`px-4 py-2 text-sm font-medium ${activeTab === "users" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-400 hover:text-gray-200"}`}>
                    Users
                </button>
                <button onClick={() => setActiveTab("experience")} className={`px-4 py-2 text-sm font-medium ${activeTab === "experience" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-400 hover:text-gray-200"}`}>
                    Experiences
                </button>
            </div>

            {/* Tab content */}
            <div className="mt-6">
                {activeTab === "users" && <UsersTable />}
                {activeTab === "experience" && <ExperienceTable />}
            </div>
        </div>
    );
}
