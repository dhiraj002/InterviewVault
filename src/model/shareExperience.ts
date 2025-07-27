import mongoose, { Schema, Document, models } from "mongoose";

interface InterviewRoundDocument extends Document {
    id: string;
    name: string;
    type: string;
    mode: string;
    difficulty: string;
    duration: number;
    summary: string;
    questions: string[];
    feedback: string;
    outcome: string;
}

export interface ExperienceDocument extends Document {
    user: mongoose.Types.ObjectId;
    interviewCategory: string;
    examType?: string;
    industryType?: string;

    company: string;
    position: string;
    location: string;
    interviewDate: string;
    applicationSource: string;
    salaryRange: string;
    examName?: string;
    postAppliedFor?: string;
    qualificationRequired?: string;

    interviewFormat: string;
    interviewRounds: number;
    totalDuration: string;
    interviewers: string;
    interviewTypes: string[];
    examStages?: string[];
    writtenExamDetails?: string;
    rounds?: InterviewRoundDocument[];

    technicalQuestions: string;
    behavioralQuestions: string;
    generalKnowledgeQuestions?: string;
    subjectSpecificQuestions?: string;
    personalityTestDetails?: string;
    medicalTestDetails?: string;
    difficultyLevel: string;
    preparation: string;
    surprisingAspects: string;
    studyMaterials?: string;
    coachingInstitute?: string;

    overallRating: number;
    wouldRecommend: boolean;
    additionalNotes: string;
    outcome: string;
    feedbackReceived: string;
    resultDeclared?: string;
    cutoffMarks?: string;
    rankAchieved?: string;

    email?: string;
    name?: string;
    anonymous: boolean;
    status: "Pending" | "Published" | "Review";
}

const interviewRoundSchema = new Schema<InterviewRoundDocument>({
    id: { type: String, required: true },
    name: String,
    type: String,
    mode: String,
    difficulty: String,
    duration: Number,
    summary: String,
    questions: [String],
    feedback: String,
    outcome: String,
});

const experienceSchema = new Schema<ExperienceDocument>(
    {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },

        // Interview Category
        interviewCategory: { type: String, required: true },
        examType: String,
        industryType: String,

        // Basic Info
        company: String,
        position: String,
        location: String,
        interviewDate: String,
        applicationSource: String,
        salaryRange: String,
        examName: String,
        postAppliedFor: String,
        qualificationRequired: String,

        // Interview Process
        interviewFormat: String,
        interviewRounds: Number,
        totalDuration: String,
        interviewers: String,
        interviewTypes: [String],
        examStages: [String],
        writtenExamDetails: String,
        rounds: [interviewRoundSchema],

        // Experience Details
        technicalQuestions: String,
        behavioralQuestions: String,
        generalKnowledgeQuestions: String,
        subjectSpecificQuestions: String,
        personalityTestDetails: String,
        medicalTestDetails: String,
        difficultyLevel: String,
        preparation: String,
        surprisingAspects: String,
        studyMaterials: String,
        coachingInstitute: String,

        // Assessment
        overallRating: Number,
        wouldRecommend: Boolean,
        additionalNotes: String,
        outcome: String,
        feedbackReceived: String,
        resultDeclared: String,
        cutoffMarks: String,
        rankAchieved: String,

        // Contact
        email: String,
        name: String,
        anonymous: { type: Boolean, required: true },

        // Status
        status: {
            type: String,
            enum: ["Pending", "Published", "Review"],
            default: "Pending",
        },
    },
    { timestamps: true }
);

export default models.Experience || mongoose.model("Experience", experienceSchema);
