"use client";

import React from "react";

interface Props {
    preprationTips: string;
    generalAdvice: string;
}

export default function OverallExperience({ preprationTips, generalAdvice }: Props) {
    return (
        <section className="w-full bg-[#0d1117] text-white rounded-xl border border-gray-800 shadow-lg p-5 md:p-8 space-y-6 mt-6">
            <h2 className="text-2xl md:text-2xl font-semibold">Overall Experience</h2>
            {/* Preparation Tips */}
            <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Preparation Tips</h3>
                {/* <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
                    <li>
                        Focused deeply on Google-tagged problems, especially on <span className="text-white font-medium">Strings, Graphs, and Heap</span>
                    </li>
                    <li>
                        Practiced mock interviews to get better at thinking + coding under <span className="text-white font-medium">60-minute constraints</span>
                    </li>
                    <li>Consistency matters more than intensity. Solving one high-quality problem daily helped far more than last-minute cramming.</li>
                </ul> */}
                <div className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">{preprationTips}</div>
            </div>
            {/* General Advice */}
            <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">General advice</h3>
                <div className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">{generalAdvice}</div>
            </div>
        </section>
    );
}
