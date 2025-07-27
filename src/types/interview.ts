export interface FormData {
    // Interview Category
    interviewCategory: string;
    examType?: string;
    industryType?: string;

    // Basic Information
    company: string;
    position: string;
    location: string;
    interviewDate: string;
    applicationSource: string;
    salaryRange: string;
    examName?: string;
    postAppliedFor?: string;
    qualificationRequired?: string;

    // Interview Process
    interviewFormat: string;
    interviewRounds: number;
    totalDuration: string;
    interviewers: string;
    interviewTypes: string[];
    examStages?: string[];
    writtenExamDetails?: string;
    rounds?: InterviewRound[];

    // Experience Details
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

    // Assessment
    overallRating: number;
    wouldRecommend: boolean;
    additionalNotes: string;
    outcome: string;
    feedbackReceived: string;
    resultDeclared?: string;
    cutoffMarks?: string;
    rankAchieved?: string;

    // Contact
    email?: string;
    name?: string;
    anonymous: boolean;
    status: "Pending" | "Published" | "Review";
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
