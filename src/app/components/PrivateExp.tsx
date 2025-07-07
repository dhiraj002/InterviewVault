"use client";

// import { useState } from "react";

export default function PrivateExperienceForm() {
    return (
        <form className="space-y-10 mb-10">
            {/* Basic Info */}
            <Section title="Basic Information">
                <FormInput label="Job Title/Position" required placeholder="e.g., Software Engineer, Product Manager" />
                <FormInput label="Company Name" required placeholder="e.g., Google, Microsoft" />
                <FormSelect label="Category" required options={["Software", "Marketing", "Design", "HR"]} />
                <FormSelect label="Experience Level" required options={["Intern", "Fresher", "Junior", "Mid", "Senior"]} />
                <FormSelect label="Interview Outcome" required options={["Selected", "Rejected", "On Hold"]} />
                <FormInput label="Interview Date" required type="date" />
                <FormInput label="LinkedIn Profile" placeholder="e.g., https://linkedin.com/in/yourname" />
            </Section>

            {/* Interview Process */}
            <Section title="Interview Process">
                <FormSelect label="Number of Rounds" required options={["1", "2", "3", "4+"]} />
                <FormTextArea label="Interview Process Overview" required placeholder="Describe the overall interview process, timeline, and structure..." />
            </Section>

            {/* Detailed Experience */}
            <Section title="Detailed Experience">
                <FormTextArea label="Questions Asked" required placeholder="List the key questions asked during the interview..." />
                <FormInput label="Technical Skills Evaluated" placeholder="e.g., JavaScript, React, System Design" />
                <FormTextArea label="Tips & Advice" placeholder="Share your tips and advice for future candidates..." />
            </Section>

            {/* Additional Info */}
            <Section title="Additional Information">
                <FormSelect label="Interview Difficulty (1-5)" required options={["1", "2", "3", "4", "5"]} />
                <FormSelect label="Overall Rating (1-5)" required options={["1", "2", "3", "4", "5"]} />
                <FormCheckbox label="Post Anonymously" />
            </Section>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold">
                    Publish Experience
                </button>
                <button type="button" className="border border-gray-600 hover:border-gray-400 text-gray-300 px-6 py-3 rounded-md">
                    Save as Draft
                </button>
            </div>
        </form>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
        </div>
    );
}

function FormInput({ label, required, placeholder, type = "text" }: any) {
    return (
        <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input type={type} required={required} placeholder={placeholder} className="bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2" />
        </div>
    );
}

function FormSelect({ label, required, options }: any) {
    return (
        <div className="flex flex-col">
            <label className="text-sm text-gray-300 mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <select required={required} className="bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2">
                <option value="">Select {label}</option>
                {options.map((opt: string) => (
                    <option key={opt}>{opt}</option>
                ))}
            </select>
        </div>
    );
}

function FormTextArea({ label, required, placeholder }: any) {
    return (
        <div className="flex flex-col md:col-span-2">
            <label className="text-sm text-gray-300 mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <textarea rows={4} required={required} placeholder={placeholder} className="bg-gray-800 border border-gray-600 text-white rounded-md px-3 py-2"></textarea>
        </div>
    );
}

function FormCheckbox({ label }: any) {
    return (
        <label className="flex items-center gap-2 text-sm text-gray-300">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-green-500" />
            {label}
        </label>
    );
}
