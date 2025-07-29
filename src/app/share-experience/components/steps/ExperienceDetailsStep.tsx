"use client";

import { useState } from "react";
import { MessageSquare, Code, Lightbulb, BookOpen, Globe, User, Dumbbell, Plus, Users } from "lucide-react";
import { FormData, InterviewRound } from "../../../../types/interview";
import { TextAreaField } from "../ui/TextAreaField";
import { SelectField } from "../ui/SelectField";
import { InputField } from "../ui/InputField";
import { RoundCard } from "../ui/RoundCard";

interface ExperienceDetailsStepProps {
    formData: FormData;
    updateFormData: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
    errors: Record<string, string>;
}

export function ExperienceDetailsStep({ formData, updateFormData, errors }: ExperienceDetailsStepProps) {
    const { interviewCategory, rounds = [] } = formData;

    const isCompetitiveExam = interviewCategory === "competitive-exam";
    const isGovernment = interviewCategory === "government";
    const isCorporate = interviewCategory === "corporate";

    // const [expandedRounds, setExpandedRounds] = useState<Set<string>>(new Set());
    const [expandedRoundId, setExpandedRoundId] = useState<string | null>(null);

    const addRound = () => {
        const newRound: InterviewRound = {
            id: `round-${Date.now()}`,
            name: "",
            type: "",
            mode: "",
            difficulty: "",
            duration: 0,
            summary: "",
            questions: [],
            feedback: "",
            outcome: "",
        };

        updateFormData("rounds", [...rounds, newRound]);
        // setExpandedRounds((prev) => new Set(prev).add(newRound.id));
        setExpandedRoundId(newRound.id);
    };

    const updateRound = (index: number, updatedRound: InterviewRound) => {
        const updatedRounds = [...rounds];
        updatedRounds[index] = updatedRound;
        updateFormData("rounds", updatedRounds);
    };

    const deleteRound = (index: number) => {
        const updatedRounds = rounds.filter((_, i) => i !== index);
        updateFormData("rounds", updatedRounds);
    };

    const toggleRoundExpansion = (roundId: string) => {
        // setExpandedRoundId((prev) => {
        //     const newSet = new Set(prev);
        //     if (newSet.has(roundId)) {
        //         newSet.delete(roundId);
        //     } else {
        //         newSet.add(roundId);
        //     }
        //     return newSet;
        // });
        setExpandedRoundId((prev) => (prev === roundId ? null : roundId));
    };

    if (isCorporate) {
        return (
            <div className="space-y-6">
                {/* Round Selection + List */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-semibold text-white">Interview Rounds</h3>
                            <p className="text-gray-400 text-sm mt-1">Add details for each interview round</p>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2 text-sm text-gray-400">
                                <Users className="w-4 h-4" />
                                <span>Number of Rounds:</span>
                            </div>

                            <select
                                value={rounds.length}
                                onChange={(e) => {
                                    const newCount = parseInt(e.target.value);
                                    const currentCount = rounds.length;
                                    if (newCount > currentCount) {
                                        const newRounds = [...rounds];
                                        for (let i = currentCount; i < newCount; i++) {
                                            newRounds.push({
                                                id: `round-${Date.now()}-${i}`,
                                                name: "",
                                                type: "",
                                                mode: "",
                                                difficulty: "",
                                                duration: 0,
                                                summary: "",
                                                questions: [],
                                                feedback: "",
                                                outcome: "",
                                            });
                                        }
                                        updateFormData("rounds", newRounds);
                                    } else {
                                        updateFormData("rounds", rounds.slice(0, newCount));
                                    }
                                }}
                                className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[80px]"
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                    <option key={num} value={num}>
                                        {num}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {rounds.map((round, index) => (
                            <RoundCard
                                key={round.id}
                                round={round}
                                roundNumber={index + 1}
                                onUpdate={(updated) => updateRound(index, updated)}
                                onDelete={() => deleteRound(index)}
                                // isExpanded={expandedRounds.has(round.id)}
                                isExpanded={expandedRoundId === round.id}
                                onToggleExpand={() => toggleRoundExpansion(round.id)}
                                errors={errors}
                            />
                        ))}

                        {rounds.length === 0 && (
                            <div className="text-center py-12 border-2 border-dashed border-gray-600 rounded-lg">
                                <Users className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-gray-400 mb-2">No rounds added yet</h3>
                                <p className="text-gray-500 mb-4">Add your first interview round to get started</p>
                                <button type="button" onClick={addRound} className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                    <Plus className="w-4 h-4" />
                                    <span>Add First Round</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <hr
                    style={{
                        border: "none", // Remove default border
                        height: "2px", // Thickness of the line
                        backgroundColor: "gray", // Color of the line
                        margin: "20px 0", // Vertical space before and after
                    }}
                />

                {/* Additional Corporate Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SelectField
                        label="Overall Difficulty Level"
                        value={formData.difficultyLevel}
                        onChange={(val) => updateFormData("difficultyLevel", val)}
                        options={[
                            { value: "very-easy", label: "Very Easy" },
                            { value: "easy", label: "Easy" },
                            { value: "medium", label: "Medium" },
                            { value: "hard", label: "Hard" },
                            { value: "very-hard", label: "Very Hard" },
                        ]}
                        placeholder="Select difficulty"
                        error={errors.difficultyLevel}
                        required
                    />
                    <InputField label="Total Preparation Time" value={formData.preparation} onChange={(val) => updateFormData("preparation", val)} placeholder="e.g., 2 weeks, 1 month" />
                </div>

                <TextAreaField
                    label="Most Surprising or Unexpected Aspects"
                    icon={Lightbulb}
                    value={formData.surprisingAspects}
                    onChange={(val) => updateFormData("surprisingAspects", val)}
                    placeholder="What surprised you about the interview process?"
                    rows={3}
                />
            </div>
        );
    }

    // Non-corporate (govt / competitive) layout
    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Experience Details</h2>
                <p className="text-gray-400">{isCompetitiveExam ? "Share the questions asked and your preparation strategy" : "Share the questions asked and your preparation"}</p>
            </div>

            {!isCompetitiveExam && (
                <TextAreaField label="Technical Questions Asked" icon={Code} value={formData.technicalQuestions} onChange={(val) => updateFormData("technicalQuestions", val)} placeholder="Describe technical questions or challenges..." rows={4} />
            )}

            <TextAreaField
                label={isCompetitiveExam ? "Personal Interview Questions" : "Behavioral Questions Asked"}
                icon={MessageSquare}
                value={formData.behavioralQuestions}
                onChange={(val) => updateFormData("behavioralQuestions", val)}
                placeholder="Describe behavioral/personal questions asked..."
                rows={4}
            />

            {(isCompetitiveExam || isGovernment) && (
                <TextAreaField
                    label="General Knowledge/Current Affairs Questions"
                    icon={Globe}
                    value={formData.generalKnowledgeQuestions || ""}
                    onChange={(val) => updateFormData("generalKnowledgeQuestions", val)}
                    placeholder="GK, current affairs, events..."
                    rows={3}
                />
            )}

            {isCompetitiveExam && (
                <>
                    <TextAreaField
                        label="Subject-Specific Questions"
                        icon={BookOpen}
                        value={formData.subjectSpecificQuestions || ""}
                        onChange={(val) => updateFormData("subjectSpecificQuestions", val)}
                        placeholder="Optional/specialization questions..."
                        rows={3}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextAreaField
                            label="Personality Test Details"
                            icon={User}
                            value={formData.personalityTestDetails || ""}
                            onChange={(val) => updateFormData("personalityTestDetails", val)}
                            placeholder="Describe personality assessments..."
                            rows={3}
                        />
                        <TextAreaField
                            label="Medical/Physical Test Details"
                            icon={Dumbbell}
                            value={formData.medicalTestDetails || ""}
                            onChange={(val) => updateFormData("medicalTestDetails", val)}
                            placeholder="Describe physical fitness or medical tests..."
                            rows={3}
                        />
                    </div>
                </>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectField
                    label="Difficulty Level"
                    value={formData.difficultyLevel}
                    onChange={(val) => updateFormData("difficultyLevel", val)}
                    options={[
                        { value: "very-easy", label: "Very Easy" },
                        { value: "easy", label: "Easy" },
                        { value: "medium", label: "Medium" },
                        { value: "hard", label: "Hard" },
                        { value: "very-hard", label: "Very Hard" },
                    ]}
                    placeholder="Select difficulty"
                    error={errors.difficultyLevel}
                    required
                />
                <InputField label="Preparation Time" value={formData.preparation} onChange={(val) => updateFormData("preparation", val)} placeholder="e.g., 6 months, 1 year" />
            </div>

            {isCompetitiveExam && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Study Materials Used" icon={BookOpen} value={formData.studyMaterials || ""} onChange={(val) => updateFormData("studyMaterials", val)} placeholder="e.g., NCERT, Online resources" />
                    <InputField label="Coaching Institute (if any)" value={formData.coachingInstitute || ""} onChange={(val) => updateFormData("coachingInstitute", val)} placeholder="e.g., Vajiram, Self-study" />
                </div>
            )}

            <TextAreaField label="Most Surprising or Unexpected Aspects" icon={Lightbulb} value={formData.surprisingAspects} onChange={(val) => updateFormData("surprisingAspects", val)} placeholder="What surprised you about the process?" rows={3} />
        </div>
    );
}
