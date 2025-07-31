"use client";

import { ThumbsUp, MessageCircle, Award, Trophy, Target } from "lucide-react";
import { FormData } from "../../../../types/interview";
import { StarRating } from "../ui/StarRating";
import { SelectField } from "../ui/SelectField";
import { TextAreaField } from "../ui/TextAreaField";
import { CheckboxField } from "../ui/CheckboxField";
import { InputField } from "../ui/InputField";

interface AssessmentStepProps {
    formData: FormData;
    updateFormData: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
    errors: Record<string, string>;
}

const competitiveOutcomeOptions = [
    { value: "selected", label: "Selected/Qualified" },
    { value: "not-selected", label: "Not Selected" },
    { value: "waiting-list", label: "Waiting List" },
    { value: "result-pending", label: "Result Pending" },
    { value: "withdrew", label: "Withdrew Application" },
];

const companyOutcomeOptions = [
    { value: "offer", label: "Received Offer" },
    { value: "rejected", label: "Rejected" },
    { value: "pending", label: "Still Pending" },
    { value: "withdrew", label: "Withdrew Application" },
];

const feedbackOptions = [
    { value: "excellent", label: "Excellent - Detailed feedback" },
    { value: "good", label: "Good - Some feedback provided" },
    { value: "minimal", label: "Minimal - Basic feedback" },
    { value: "none", label: "No feedback provided" },
];

const resultStatusOptions = [
    { value: "declared", label: "Result Declared" },
    { value: "pending", label: "Result Pending" },
    { value: "delayed", label: "Result Delayed" },
    { value: "cancelled", label: "Exam Cancelled" },
];

export function AssessmentStep({ formData, updateFormData, errors }: AssessmentStepProps) {
    const isCompetitiveExam = formData.interviewCategory === "competitive-exam";

    return (
        <div className="space-y-6">
            {/* Title */}
            <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-white mb-1">Overall Assessment</h2>
                <p className="text-gray-400 text-sm max-w-md mx-auto">{isCompetitiveExam ? "Rate your exam/interview experience and share your outcome." : "Rate your experience and share final thoughts."}</p>
            </div>

            {/* Star Rating */}
            <StarRating
                label={isCompetitiveExam ? "Overall Exam/Interview Experience" : "Overall Interview Experience"}
                value={formData.overallRating}
                onChange={(value) => updateFormData("overallRating", value)}
                error={errors.overallRating}
                required
            />

            {/* Outcome and Feedback */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectField
                    label={isCompetitiveExam ? "Exam/Interview Outcome" : "Interview Outcome"}
                    icon={Award}
                    value={formData.outcome}
                    onChange={(value) => updateFormData("outcome", value)}
                    options={isCompetitiveExam ? competitiveOutcomeOptions : companyOutcomeOptions}
                    placeholder="Select outcome"
                    error={errors.outcome}
                    required
                />

                <SelectField label="Feedback Quality" value={formData.feedbackReceived} onChange={(value) => updateFormData("feedbackReceived", value)} options={feedbackOptions} placeholder="Select feedback quality" />
            </div>

            {/* Extra Inputs for Competitive Exam */}
            {isCompetitiveExam && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SelectField
                            label="Result Declaration Status"
                            icon={Trophy}
                            value={formData.resultDeclared || ""}
                            onChange={(value) => updateFormData("resultDeclared", value)}
                            options={resultStatusOptions}
                            placeholder="Select result status"
                        />

                        <InputField label="Cutoff Marks/Score (if known)" icon={Target} value={formData.cutoffMarks || ""} onChange={(value) => updateFormData("cutoffMarks", value)} placeholder="e.g., 120/200, 65%" />
                    </div>

                    <InputField label="Rank/Position Achieved (if applicable)" icon={Trophy} value={formData.rankAchieved || ""} onChange={(value) => updateFormData("rankAchieved", value)} placeholder="e.g., AIR 150, State Rank 25" />
                </>
            )}

            {/* Recommend */}
            <CheckboxField
                label={isCompetitiveExam ? "Would you recommend this exam/career path to others?" : "Would you recommend this company's interview process to others?"}
                checked={formData.wouldRecommend}
                onChange={(value) => updateFormData("wouldRecommend", value)}
                icon={ThumbsUp}
            />

            <TextAreaField
                label="Prepration Tips"
                icon={MessageCircle}
                value={formData?.preprationTips || ""}
                onChange={(value) => updateFormData("preprationTips", value)}
                placeholder={isCompetitiveExam ? "Any preparation tips or strategy that worked well for you?" : "Any insights, mistakes to avoid, or suggestions for future candidates?"}
                rows={4}
                error={errors.preprationTips}
                required
            />

            {/* Additional Notes */}
            <TextAreaField
                label=" General Advice or Additional  Notes"
                icon={MessageCircle}
                value={formData.additionalNotes}
                onChange={(value) => updateFormData("additionalNotes", value)}
                placeholder={isCompetitiveExam ? "Any preparation tips or strategy that worked well for you?" : "Any insights, mistakes to avoid, or suggestions for future candidates?"}
                required
                rows={4}
                error={errors.additionalNotes}
            />
        </div>
    );
}
