"use client";

import { User, Video, Phone, UserCheck, Clock, Users, FileText } from "lucide-react";
import { FormData } from "../../../../types/interview";
import { InputField } from "../ui/InputField";
import { RadioGroup } from "../ui/RadioGroup";
import { CheckboxGroup } from "../ui/CheckboxGroup";
import { TextAreaField } from "../ui/TextAreaField";

interface InterviewProcessStepProps {
    formData: FormData;
    updateFormData: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
    errors: Record<string, string>;
}

export function InterviewProcessStep({ formData, updateFormData, errors }: InterviewProcessStepProps) {
    const isCompetitiveExam = formData.interviewCategory === "competitive-exam";

    const formatOptions = [
        { value: "in-person", label: "In-person / F2F", icon: User },
        { value: "video-call", label: "Video Call / Online", icon: Video },
        { value: "phone-call", label: "Phone Call", icon: Phone },
        { value: "mixed", label: "Mixed", icon: UserCheck },
    ];

    const getInterviewTypeOptions = () =>
        isCompetitiveExam
            ? [
                  { value: "personality-test", label: "Personality Test" },
                  { value: "group-discussion", label: "Group Discussion" },
                  { value: "personal-interview", label: "Personal Interview" },
                  { value: "document-verification", label: "Document Verification" },
                  { value: "medical-test", label: "Medical Test" },
                  { value: "physical-test", label: "Physical Fitness Test" },
                  { value: "skill-test", label: "Skill/Trade Test" },
                  { value: "psychological-test", label: "Psychological Assessment" },
              ]
            : [
                  { value: "technical", label: "Technical/Coding" },
                  { value: "aptitude", label: "Aptitude Test" },
                  { value: "behavioral", label: "Behavioral" },
                  { value: "system-design", label: "System Design" },
                  { value: "case-study", label: "Case Study" },
                  { value: "presentation", label: "Presentation" },
                  { value: "hr-screening", label: "HR Screening" },
                  { value: "culture-fit", label: "Culture Fit" },
                  { value: "panel", label: "Panel Interview" },
                  { value: "group-discussion", label: "Group Discussion" },
              ];

    const examStageOptions = [
        { value: "prelims", label: "Preliminary Exam" },
        { value: "mains", label: "Main Exam" },
        { value: "interview", label: "Interview/Personality Test" },
        { value: "physical", label: "Physical Test" },
        { value: "medical", label: "Medical Test" },
        { value: "document-verification", label: "Document Verification" },
        { value: "training", label: "Training Period" },
    ];

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">{isCompetitiveExam ? "Exam & Interview Process" : "Interview Process"}</h2>
                <p className="text-muted-foreground text-sm max-w-lg mx-auto">{isCompetitiveExam ? "Tell us about the exam stages and interview format" : "Tell us about the interview format and structure"}</p>
            </div>

            {isCompetitiveExam && <CheckboxGroup label="Exam Stages Completed" options={examStageOptions} value={formData.examStages || []} onChange={(value) => updateFormData("examStages", value)} />}

            {isCompetitiveExam && (
                <TextAreaField
                    label="Written Exam Details"
                    icon={FileText}
                    value={formData.writtenExamDetails || ""}
                    onChange={(value) => updateFormData("writtenExamDetails", value)}
                    placeholder="Describe pattern, subjects, difficulty level, etc."
                    rows={3}
                />
            )}

            <RadioGroup label={isCompetitiveExam ? "Test Format" : "Interview Format"} options={formatOptions} value={formData.interviewFormat} onChange={(value) => updateFormData("interviewFormat", value)} error={errors.interviewFormat} required />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Number of Rounds" type="number" value={formData.interviewRounds.toString()} onChange={(value) => updateFormData("interviewRounds", parseInt(value) || 1)} min={1} max={7} error={errors.interviewRounds} required />

                <InputField
                    label="Total Duration"
                    icon={Clock}
                    value={formData.totalDuration}
                    onChange={(value) => updateFormData("totalDuration", value)}
                    placeholder={isCompetitiveExam ? "e.g., 3 hours exam + 30 min interview" : "e.g., 2 hours, 45 minutes"}
                />
            </div>

            <InputField
                label={isCompetitiveExam ? "Examiners" : "Interviewers"}
                icon={Users}
                value={formData.interviewers}
                onChange={(value) => updateFormData("interviewers", value)}
                placeholder={isCompetitiveExam ? "e.g., Chairman, Subject Expert, Psychologist" : "e.g., Engineering Manager, Senior Developer"}
            />

            <CheckboxGroup
                label={isCompetitiveExam ? "Types of Tests/Assessments" : "Types of Interviews"}
                options={getInterviewTypeOptions()}
                value={formData.interviewTypes}
                onChange={(value) => updateFormData("interviewTypes", value)}
                error={errors?.interviewTypes}
                required
            />
        </div>
    );
}
