import { FormData } from "@/types/interview";

export const dummyFormData: FormData = {
    // Interview Category
    interviewCategory: "corporate",
    examType: "Online Assessment",
    industryType: "technology",
    currentRole: "student",

    // Basic Information
    company: "TechNova Solutions",
    position: "Frontend Developer",
    location: "Bangalore",
    interviewDate: "2025-06-12",
    applicationSource: "on-campus",
    salaryRange: "6-8 LPA",
    examName: "TechNova Aptitude & Coding Test",

    qualificationRequired: "B.Tech in Computer Science",

    // Interview Process
    interviewFormat: "virtual",

    totalDuration: "2 hours",
    interviewTypes: ["technical", "aptitude", "behavioral"],
    examStages: ["MCQ Aptitude", "Coding Round", "System Design"],
    writtenExamDetails: "MCQ on aptitude, logic, data structures, and algorithms.",
    rounds: [
        {
            id: "r1",
            name: "Aptitude & Coding Test",
            type: "Online",
            mode: "Remote",
            difficulty: "Medium",
            duration: 60,
            summary: "Platform-based test with coding problems and aptitude MCQs.",
            questions: ["Write a function to detect cycles in a linked list.", "What is the output of this JavaScript closure example?"],
            feedback: "Good logical reasoning and fast problem-solving.",
            outcome: "Cleared",
        },
        {
            id: "r2",
            name: "Technical Interview",
            type: "One-on-One",
            mode: "Video Call",
            difficulty: "Hard",
            duration: 45,
            summary: "In-depth DSA and frontend-focused questions (React, performance).",
            questions: ["Explain virtual DOM and how React diffing works.", "Optimize a slow React app with thousands of components.", "What’s the time complexity of quicksort in worst case?"],
            feedback: "Strong fundamentals, well-structured answers.",
            outcome: "Cleared",
        },
        {
            id: "r3",
            name: "HR + Managerial Round",
            type: "Behavioral",
            mode: "Video Call",
            difficulty: "Easy",
            duration: 30,
            summary: "Discussion on team fit, past projects, growth plans.",
            questions: ["Describe a time when you had to work under pressure.", "What would you do if deadlines were unrealistic?"],
            feedback: "Good communication and team mindset.",
            outcome: "Cleared",
        },
    ],

    // Experience Details

    difficultyLevel: "Medium to Hard",
    surprisingAspects: "They asked about Vite vs CRA and had deep React focus.",
    studyMaterials: "LeetCode, FrontendMasters, InterviewBit",
    coachingInstitute: "None",

    // Assessment
    overallRating: 4.5,
    wouldRecommend: true,
    additionalNotes: "Great experience, very organized and professional process.",
    outcome: "Selected",
    feedbackReceived: "excellent",
    resultDeclared: "2025-06-18",
    cutoffMarks: "80%",
    rankAchieved: "Top 5%",

    // Contact
    email: "johndoe@example.com",
    name: "John Doe",
    anonymous: false,
    status: "pending",
    //for voting
    upvotes: 0,
};
