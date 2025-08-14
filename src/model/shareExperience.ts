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
    currentRole: string;

    // Basic Information
    company: string;
    position: string;
    location: string;
    interviewDate: string;
    applicationSource: string;
    salaryRange: string;
    examName?: string;
    qualificationRequired?: string;
    linkedInProfile?: string;

    // Interview Process
    interviewFormat: string;
    totalDuration: string;
    interviewTypes: string[];
    examStages?: string[];
    writtenExamDetails?: string;

    // Experience Details
    difficultyLevel: string;
    surprisingAspects: string;
    studyMaterials?: string;
    coachingInstitute?: string;
    rounds?: InterviewRoundDocument[];

    // Assessment
    overallRating: number;
    wouldRecommend: boolean;
    additionalNotes: string;
    outcome: string;
    feedbackReceived: string;
    resultDeclared?: string;
    cutoffMarks?: string;
    rankAchieved?: string;
    preprationTips?: string;

    // Contact
    email?: string;
    name?: string;
    anonymous: boolean;
    status: "pending" | "published" | "review";
    upvotes?: number;
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
        currentRole: String,

        // Basic Info
        company: String,
        position: String,
        location: String,
        interviewDate: String,
        applicationSource: String,
        salaryRange: String,
        examName: String,
        qualificationRequired: String,

        // Interview Process
        interviewFormat: String,

        totalDuration: String,
        interviewTypes: [String],
        examStages: [String],
        writtenExamDetails: String,
        rounds: [interviewRoundSchema],

        // Experience Details
        difficultyLevel: String,
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
        preprationTips: String,

        // Contact
        email: String,
        name: String,
        linkedInProfile: String,
        anonymous: { type: Boolean, required: true },

        // Status
        status: {
            type: String,
            enum: ["pending", "published", "review"],
            default: "pending",
        },
        upvotes: Number,
    },
    { timestamps: true }
);

// ✅ Better indexes
experienceSchema.index({ interviewCategory: 1, outcome: 1, createdAt: -1 });
experienceSchema.index({ company: 1 });
experienceSchema.index({ position: 1 });
experienceSchema.index({ examName: 1 });

// ✅ Full-text search index (optimized)
experienceSchema.index({
    position: "text",
    company: "text",
    examName: "text",
    currentRole: "text",
    additionalNotes: "text",
    surprisingAspects: "text",
});

export default models.Experience || mongoose.model("Experience", experienceSchema);
