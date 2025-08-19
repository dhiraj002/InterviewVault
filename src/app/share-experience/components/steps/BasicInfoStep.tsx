"use client";

import { Building2, MapPin, Calendar, DollarSign, BookOpen, Award, GraduationCap, User, Mail } from "lucide-react";

import { FormData } from "../../../../types/interview";
import { InputField } from "../ui/InputField";
import { SelectField } from "../ui/SelectField";
import { RadioGroup } from "../ui/RadioGroup";
import { InputFieldFixed } from "../ui/InputFieldFixed";

interface BasicInfoStepProps {
    formData: FormData;
    updateFormData: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
    errors: Record<string, string>;
}

export function BasicInfoStep({ formData, updateFormData, errors }: BasicInfoStepProps) {
    const isCompetitiveExam = formData.interviewCategory?.toLowerCase() === "competitive-exam";
    const isCorporate = formData.interviewCategory?.toLowerCase() === "corporate";
    const isGovernment = formData.interviewCategory?.toLowerCase() === "government";

    const categoryOptions = [
        { value: "corporate", label: "Corporate/Private Sector", icon: Building2 },
        { value: "government", label: "Government/Public Sector", icon: Award },
        { value: "competitive-exam", label: "Competitive Exams", icon: BookOpen },
    ];

    const examTypes = [
        { value: "upsc", label: "UPSC (Civil Services)" },
        { value: "ssc", label: "SSC (Staff Selection Commission)" },
        { value: "banking", label: "Banking (IBPS, SBI, RBI)" },
        { value: "railway", label: "Railway Recruitment" },
        { value: "defense", label: "Defense (Army, Navy, Air Force)" },
        { value: "police", label: "Police Services" },
        { value: "teaching", label: "Teaching (NET, SET, TET)" },
        { value: "psu", label: "Public Sector Units (PSU)" },
        { value: "state-services", label: "State Civil Services" },
        { value: "judicial", label: "Judicial Services" },
        { value: "other-govt", label: "Other Government Exams" },
    ];

    const industryTypes = [
        { value: "technology", label: "Technology/IT" },
        { value: "finance", label: "Finance/Banking" },
        { value: "support", label: "Support" },
        { value: "healthcare", label: "Healthcare/Medical" },
        { value: "hospitality", label: "Hospitality/Hotel Industry" },
        { value: "manufacturing", label: "Manufacturing" },
        { value: "consulting", label: "Consulting" },
        { value: "retail", label: "Retail/E-commerce" },
        { value: "education", label: "Education/Training" },
        { value: "media", label: "Media/Entertainment" },
        { value: "automotive", label: "Automotive" },
        { value: "real-estate", label: "Real Estate" },
        { value: "logistics", label: "Logistics/Supply Chain" },
        { value: "other", label: "Other Industry" },
    ];

    const sourceOptions = [
        {
            value: "job-board",
            label: isCompetitiveExam ? "Government Website" : "Job Board (LinkedIn, Indeed, etc.)",
        },
        { value: "on-campus", label: "On Campus" },
        {
            value: "company-website",
            label: isCompetitiveExam ? "Notification/Advertisement" : "Company Website",
        },
        { value: "referral", label: "Employee Referral" },
        {
            value: "recruiter",
            label: isCompetitiveExam ? "Coaching Institute" : "Recruiter Contact",
        },
        { value: "networking", label: "Networking Event" },
        { value: "newspaper", label: "Newspaper/Media" },
        { value: "other", label: "Other" },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white">Interview Information</h2>
                <p className="text-gray-400 text-sm">Tell us about your interview experience</p>
            </div>

            {!formData?.anonymous ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Your Name" value={formData.name ?? ""} icon={User} required onChange={(value) => updateFormData("name", value)} />

                    <InputFieldFixed label="Your Email" value={formData.email ?? ""} icon={Mail} required type="email" />
                    <InputField label="Linkedin Profile" value={formData.linkedInProfile ?? ""} onChange={(value) => updateFormData("linkedInProfile", value)} placeholder=" https://www.linkedin.com/in/" />
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    <InputFieldFixed label="Anonymous Nickname" value={"Anonymous"} icon={User} required />
                </div>
            )}

            {/* Interview Category */}
            <RadioGroup label="Interview Category" options={categoryOptions} value={formData?.interviewCategory?.toLocaleLowerCase?.()} onChange={(value) => updateFormData("interviewCategory", value)} error={errors.interviewCategory} required />

            {/* Conditional Fields */}
            {isCompetitiveExam && (
                <SelectField label="Exam Type" icon={BookOpen} value={formData.examType || ""} onChange={(value) => updateFormData("examType", value)} options={examTypes} placeholder="Select exam type" error={errors.examType} required />
            )}

            {(isCorporate || isGovernment) && (
                <SelectField
                    label="Industry/Sector"
                    value={formData.industryType?.toLocaleLowerCase() || ""}
                    onChange={(value) => updateFormData("industryType", value)}
                    options={industryTypes}
                    placeholder="Select industry"
                    error={errors.industryType}
                    required
                />
            )}

            {/* Main Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {isCompetitiveExam ? (
                    <InputField label="Exam Name" icon={BookOpen} value={formData.examName || ""} onChange={(value) => updateFormData("examName", value)} placeholder="e.g., UPSC CSE 2024, SSC CGL 2024" error={errors.examName} required />
                ) : (
                    <InputField
                        label={isGovernment ? "Department/Organization" : "Company Name"}
                        icon={Building2}
                        value={formData.company}
                        onChange={(value) => updateFormData("company", value)}
                        placeholder={isGovernment ? "Enter department/organization" : "Enter company name"}
                        error={errors.company}
                        required
                    />
                )}

                {/* {isCompetitiveExam ? (
                    <InputField label="Post Applied For" value={formData.postAppliedFor || ""} onChange={(value) => updateFormData("postAppliedFor", value)} placeholder="e.g., IAS, Clerk, Officer" error={errors.postAppliedFor} required />
                ) : ( */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
                <InputField
                    label={isCompetitiveExam ? "Position Applied For" : "Post Applied For"}
                    placeholder={isCompetitiveExam ? "e.g. IAS, Clerk, Officer" : "e.g. FrontEnd, Backend, FullStack Developer"}
                    value={formData.position}
                    onChange={(value) => updateFormData("position", value)}
                    error={errors.position}
                    required
                />
                {/* </div> */}
                {/* )} */}
            </div>

            <InputField label="Current Role" value={formData.currentRole} onChange={(value) => updateFormData("currentRole", value)} placeholder="Your current role" error={errors.currentRole} required />

            {/* Qualification */}
            {isCompetitiveExam && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField
                        label="Qualification Required"
                        icon={GraduationCap}
                        value={formData.qualificationRequired || ""}
                        onChange={(value) => updateFormData("qualificationRequired", value)}
                        placeholder="e.g., Graduate, Post Graduate, 12th Pass"
                        required
                        error={errors.qualificationRequired}
                    />

                    <InputField label="Location" icon={MapPin} value={formData.location} onChange={(value) => updateFormData("location", value)} placeholder={isCompetitiveExam ? "Exam center location" : "City, State or Remote"} />
                </div>
            )}

            {/* Location & Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                    label={isCompetitiveExam ? "Interview/Exam Date" : "Interview Date"}
                    icon={Calendar}
                    type="date"
                    value={formData.interviewDate}
                    onChange={(value) => updateFormData("interviewDate", value)}
                    error={errors.interviewDate}
                    required
                />
            </div>

            {/* Source & Salary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectField
                    required
                    error={errors.applicationSource}
                    label={isCompetitiveExam ? "How did you learn about this exam?" : "How did you find this opportunity?"}
                    value={formData.applicationSource}
                    onChange={(value) => updateFormData("applicationSource", value)}
                    options={sourceOptions}
                    placeholder="Select source"
                />

                {!isCompetitiveExam && <InputField label="Salary Range (Optional)" icon={DollarSign} value={formData.salaryRange} onChange={(value) => updateFormData("salaryRange", value)} placeholder="e.g., ₹5L - ₹12L, $80k - $120k" />}
            </div>
        </div>
    );
}
