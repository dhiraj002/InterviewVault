"use client";
import { useState } from "react";
import { X, UserCheck, Shield } from "lucide-react";

export default function PostingPreferenceModal({ open, onClose, onSelect }: { open: boolean; onClose: () => void; onSelect: (option: "name" | "anonymous") => void }) {
    const [selected, setSelected] = useState<"name" | "anonymous">("name");

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-[6px] bg-black/40">
            <div className="relative bg-gray-900 rounded-2xl p-6 max-w-md w-full shadow-2xl">
                {/* Close Button */}
                <button onClick={onClose} className="absolute right-4 top-3 p-1 rounded-full bg-gray-800 hover:bg-gray-700 transition z-10 cursor-pointer" aria-label="Close">
                    <X className="h-5 w-5 text-gray-400" />
                </button>

                <h2 className="text-center text-2xl font-bold text-white mb-6 mt-3">Choose Your Posting Preference</h2>
                <div className="space-y-4">
                    {/* With Name */}
                    <button
                        type="button"
                        className={`w-full text-left p-5 rounded-lg border transition flex flex-col gap-2
              ${selected === "name" ? "bg-gray-800 border-blue-500" : "bg-gray-800 border-gray-700 hover:border-gray-500"}`}
                        onClick={() => setSelected("name")}
                    >
                        <span className="flex items-center gap-2 text-white font-semibold text-lg">
                            <UserCheck className="h-6 w-6 text-blue-400" />
                            Post with your name
                        </span>
                        <span className="text-gray-400 text-sm">Build your professional presence and help others connect with you</span>
                        <ul className="text-gray-400 text-sm ml-7 list-disc">
                            <li>Your name and profile will be visible</li>
                            <li>LinkedIn profile can be linked</li>
                            <li>Direct networking opportunities</li>
                        </ul>
                    </button>
                    {/* Anonymous */}
                    <button
                        type="button"
                        className={`w-full text-left p-5 rounded-lg border transition flex flex-col gap-2
              ${selected === "anonymous" ? "bg-gray-800 border-blue-500" : "bg-gray-800 border-gray-700 hover:border-gray-500"}`}
                        onClick={() => setSelected("anonymous")}
                    >
                        <span className="flex items-center gap-2 text-white font-semibold text-lg">
                            <Shield className="h-6 w-6 text-blue-400" />
                            Post anonymously
                        </span>
                        <span className="text-gray-400 text-sm">Share your experience freely while maintaining your privacy.</span>
                        <ul className="text-gray-400 text-sm ml-7 list-disc">
                            <li>Your identity remains private</li>
                            <li>Experience shared without personal details</li>
                            <li>Full privacy protection</li>
                        </ul>
                    </button>
                </div>
                <div className="flex justify-between items-center mt-8">
                    <button onClick={onClose} className="border border-blue-500 text-blue-400 font-semibold rounded-md px-6 py-2 hover:bg-gray-800 transition cursor-pointer">
                        Cancel
                    </button>
                    <button onClick={() => onSelect(selected)} className="bg-blue-500 text-white font-semibold rounded-md px-6 py-2 hover:bg-blue-600 transition cursor-pointer">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
