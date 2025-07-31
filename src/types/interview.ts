export interface FormData {
    // Interview Category
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
    rounds?: InterviewRound[];

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

export interface InterviewRound {
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

export interface Step {
    id: number;
    title: string;
    subtitle: string;
}

export interface Interview {
    id: string;
    title: string;
    company: string;
    status: "published" | "draft" | "pending" | "review";
    type: "corporate" | "startup" | "exam";
    date: string;
}

export type FilterStatus = "all" | Interview["status"];
