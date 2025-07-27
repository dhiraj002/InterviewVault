"use client";

import { useState, useCallback, useEffect } from "react";
import { StepIndicator } from "./StepIndicator";
import { StepContent } from "./StepContent";
import { NavigationButtons } from "./NavigationButtons";
import { ProgressBar } from "./ProgressBar";
import { FormData, Step } from "../../../types/interview";
import { dummyFormData } from "@/lib/dummyFormData";
import PostingPreferenceModal from "./PostingPreferenceModal";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import type { Session } from "next-auth";

const steps: Step[] = [
    { id: 1, title: "Basic Info", subtitle: "Company & Position Details" },
    { id: 2, title: "Interview Process", subtitle: "Format & Structure" },
    { id: 3, title: "Experience Details", subtitle: "Questions & Preparation" },
    { id: 4, title: "Assessment", subtitle: "Rating & Outcome" },
    { id: 5, title: "Review & Submit", subtitle: "Final Review" },
];

interface InterviewStepperProps {
    session: Session | null;
}

export function InterviewStepper({ session }: InterviewStepperProps) {
    const router = useRouter();

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        // Interview Category
        interviewCategory: "",
        examType: "",
        industryType: "",

        // Basic Information
        company: "",
        position: "",
        location: "",
        interviewDate: "",
        applicationSource: "",
        salaryRange: "",
        examName: "",
        postAppliedFor: "",
        qualificationRequired: "",

        // Interview Process
        interviewFormat: "",
        interviewRounds: 1,
        totalDuration: "",
        interviewers: "",
        interviewTypes: [],
        examStages: [],
        writtenExamDetails: "",

        // Experience Details
        technicalQuestions: "",
        behavioralQuestions: "",
        generalKnowledgeQuestions: "",
        subjectSpecificQuestions: "",
        personalityTestDetails: "",
        medicalTestDetails: "",
        difficultyLevel: "",
        preparation: "",
        surprisingAspects: "",
        studyMaterials: "",
        coachingInstitute: "",
        rounds: [],

        // Assessment
        overallRating: 0,
        wouldRecommend: false,
        additionalNotes: "",
        outcome: "",
        feedbackReceived: "",
        resultDeclared: "",
        cutoffMarks: "",
        rankAchieved: "",

        // Contact
        email: "",
        name: "",
        anonymous: true,
        status: "Pending",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // const updateFormData = useCallback(
    //     (field: keyof FormData, value: FormData[typeof field]) => {
    //         setFormData((prev) => ({ ...prev, [field]: value }));
    //         // Clear error when field is updated
    //         if (errors[field]) {
    //             setErrors((prev) => ({ ...prev, [field]: "" }));
    //         }
    //     },
    //     [errors]
    // );

    const updateFormData = useCallback(
        <K extends keyof FormData>(field: K, value: FormData[K]) => {
            setFormData((prev) => ({ ...prev, [field]: value }));
            if (errors[field]) {
                setErrors((prev) => ({ ...prev, [field]: "" }));
            }
        },
        [errors]
    );

    const validateStep = (step: number): boolean => {
        const newErrors: Record<string, string> = {};
        const isCompetitiveExam = formData.interviewCategory === "competitive-exam";
        const isCorporate = formData.interviewCategory === "corporate";

        switch (step) {
            case 1:
                if (!formData.interviewCategory) newErrors.interviewCategory = "Interview category is required";
                if (isCompetitiveExam && !formData.examType) newErrors.examType = "Exam type is required";
                if (isCompetitiveExam) {
                    if (!formData.examName?.trim()) newErrors.examName = "Exam name is required";
                    if (!formData.postAppliedFor?.trim()) newErrors.postAppliedFor = "Post applied for is required";
                } else {
                    if (!formData.company.trim()) newErrors.company = "Company/Organization name is required";
                    if (!formData.position.trim()) newErrors.position = "Position is required";
                    if (!formData.industryType?.trim()) newErrors.industryType = "Industry/Sector is required";
                    if (!formData.applicationSource?.trim()) newErrors.applicationSource = "Application source is required";
                }
                if (!formData.interviewDate) newErrors.interviewDate = "Interview date is required";

                if (newErrors && Object.keys(newErrors).length !== 0) {
                    setErrorMessage(newErrors);
                }

                break;
            case 2:
                if (!formData.interviewFormat) newErrors.interviewFormat = "Interview format is required";
                if (formData.interviewRounds < 1) newErrors.interviewRounds = "At least 1 round is required";
                if (formData?.interviewTypes?.length == 0) newErrors.interviewTypes = "Interview types are required";
                if (newErrors && Object.keys(newErrors).length !== 0) {
                    setErrorMessage(newErrors);
                }
                break;
            case 3:
                if (!formData.difficultyLevel) newErrors.difficultyLevel = "Difficulty level is required";

                if (!isCompetitiveExam && !formData.technicalQuestions && formData?.interviewCategory !== "corporate") newErrors.technicalQuestions = "Technical questions are required";

                if (isCorporate && formData?.rounds?.length === 0) {
                    newErrors.rounds = "At least 1 round is required";
                } else {
                    formData?.rounds?.forEach((round, index) => {
                        if (!round.name?.trim()) newErrors[`round${index + 1}Name`] = `Round ${index + 1} Name is required`;
                        if (!round.type?.trim()) newErrors[`round${index + 1}Type`] = `Round ${index + 1} Type is required`;
                        if (!round.mode?.trim()) newErrors[`round${index + 1}Mode`] = `Round ${index + 1} Mode is required`;
                        if (round?.duration <= 0) newErrors[`round${index + 1}Duration`] = `Round ${index + 1} Duration must be greater than 0`;
                        if (round?.difficulty === "") newErrors[`round${index + 1}Difficulty`] = `Round ${index + 1} Difficulty is required`;
                        if (round?.questions?.length === 0) newErrors[`round${index + 1}Questions`] = `Round ${index + 1} Questions must be provided`;
                        if (round?.questions?.some((q) => !q.trim())) {
                            newErrors[`round${index + 1}Questions`] = `Round ${index + 1} Questions must not be empty`;
                        }
                        if (round?.outcome == "") newErrors[`round${index + 1}Outcome`] = `Round ${index + 1} Select an outcome`;
                    });
                }

                if (newErrors && Object.keys(newErrors).length !== 0) {
                    setErrorMessage(newErrors);
                }
                break;
            case 4:
                if (formData.overallRating === 0) newErrors.overallRating = "Overall rating is required";
                if (!formData.outcome) newErrors.outcome = "Interview outcome is required";

                if (newErrors && Object.keys(newErrors).length !== 0) {
                    setErrorMessage(newErrors);
                }
                break;
        }

        function setErrorMessage(newError: Record<string, string>): void {
            let errorMessage = "Unknown error";
            const keys = Object.keys(newError);

            if (keys.length > 0) {
                const lastKey = keys[keys.length - 1];
                errorMessage = newError[lastKey] || lastKey;
            }

            toast.error(` ${errorMessage} `);
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep(currentStep) && currentStep < steps.length) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const handleSubmit = async () => {
        if (!validateStep(4)) return;

        setIsSubmitting(true);

        // Simulate API call

        try {
            const response = await fetch("/api/share-experience", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result?.message || "Something went wrong");
            }

            toast.success("Experience submitted successfully!");
        } catch {
            toast.error("Failed to submit experience");
        } finally {
            setIsSubmitting(false);
            setShowPrefModal(true);
            setCurrentStep(1);
            setFormData({
                interviewCategory: "",
                examType: "",
                industryType: "",
                company: "",
                position: "",
                location: "",
                interviewDate: "",
                applicationSource: "",
                salaryRange: "",
                examName: "",
                postAppliedFor: "",
                qualificationRequired: "",
                interviewFormat: "",
                interviewRounds: 1,
                totalDuration: "",
                interviewers: "",
                interviewTypes: [],
                examStages: [],
                rounds: [],
                writtenExamDetails: "",
                technicalQuestions: "",
                behavioralQuestions: "",
                generalKnowledgeQuestions: "",
                subjectSpecificQuestions: "",
                personalityTestDetails: "",
                medicalTestDetails: "",
                difficultyLevel: "",
                preparation: "",
                surprisingAspects: "",
                studyMaterials: "",
                coachingInstitute: "",
                overallRating: 0,
                wouldRecommend: false,
                additionalNotes: "",
                outcome: "",
                feedbackReceived: "",
                resultDeclared: "",
                cutoffMarks: "",
                rankAchieved: "",
                email: "",
                anonymous: true,
                name: "",
                status: "Pending",
            });
        }
        // Reset form
    };

    const progress = (currentStep / steps.length) * 100;

    const [showPrefModal, setShowPrefModal] = useState(true);
    const handlePrefSelect = (pref: "name" | "anonymous") => {
        // setFormData((prev) => ({ ...prev, anonymous: pref === "anonymous" }));
        updateFormData("anonymous", pref === "anonymous");
        if (pref === "name") {
            updateFormData("name", session?.user?.name || "");
            updateFormData("email", session?.user?.email || "");
        } else {
            updateFormData("name", "");
            updateFormData("email", "");
        }
        setShowPrefModal(false);
    };
    const handleClose = () => {
        router.push("/browse");
        // setShowPrefModal(false);
    };

    //using dummy data for now
    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            setFormData(dummyFormData);
            console.log("%c🚀 Development Mode Active!", "color: white; background: #4CAF50; font-size: 16px; font-weight: bold; padding: 4px 10px; border-radius: 4px;");
        }
    }, []);

    return (
        <div className="max-w-4xl mx-auto min-h-0">
            <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden flex flex-col max-h-screen">
                <PostingPreferenceModal open={showPrefModal} onClose={() => handleClose()} onSelect={handlePrefSelect} />

                {/* Progress Bar */}
                <ProgressBar progress={progress} />

                {/* Step Indicator */}
                <div className="px-3 sm:px-6 py-4 sm:py-8 border-b border-gray-700 flex-shrink-0">
                    <StepIndicator steps={steps} currentStep={currentStep} />
                </div>

                {/* Step Content */}
                <div className="px-3 sm:px-6 py-4 sm:py-8 flex-1 overflow-y-auto">
                    <StepContent step={currentStep} formData={formData} updateFormData={updateFormData} errors={errors} isSubmitting={isSubmitting} />
                </div>

                {/* Navigation */}
                <div className="px-3 sm:px-6 py-4 sm:py-6 bg-gray-750 border-t border-gray-700 flex-shrink-0">
                    <NavigationButtons currentStep={currentStep} totalSteps={steps.length} onNext={nextStep} onPrev={prevStep} onSubmit={handleSubmit} isSubmitting={isSubmitting} />
                </div>
            </div>
        </div>
    );
}
