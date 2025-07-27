// import { CheckCircle, Building2, Calendar, Star, Award, BookOpen, Trophy } from "lucide-react";
// import { FormData } from "../../../../types/interview";

// interface ReviewStepProps {
//     formData: FormData;
//     isSubmitting: boolean;
// }

// export function ReviewStep({ formData, isSubmitting }: ReviewStepProps) {
//     const isCompetitiveExam = formData.interviewCategory === "competitive-exam";

//     const difficultyLabels = {
//         "very-easy": "Very Easy",
//         easy: "Easy",
//         medium: "Medium",
//         hard: "Hard",
//         "very-hard": "Very Hard",
//     };

//     const getOutcomeLabels = () => {
//         if (isCompetitiveExam) {
//             return {
//                 selected: "Selected/Qualified",
//                 "not-selected": "Not Selected",
//                 "waiting-list": "Waiting List",
//                 "result-pending": "Result Pending",
//                 withdrew: "Withdrew Application",
//             };
//         } else {
//             return {
//                 offer: "Received Offer",
//                 rejected: "Rejected",
//                 pending: "Still Pending",
//                 withdrew: "Withdrew Application",
//             };
//         }
//     };

//     const outcomeLabels = getOutcomeLabels();

//     if (isSubmitting) {
//         return (
//             <div className="text-center py-12">
//                 <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
//                 <h2 className="text-2xl font-bold text-white mb-2">Submitting Your Experience</h2>
//                 <p className="text-gray-400">Please wait while we process your submission...</p>
//             </div>
//         );
//     }

//     return (
//         <div className="space-y-6">
//             <div className="text-center mb-8">
//                 <h2 className="text-2xl font-bold text-white mb-2">Review Your Experience</h2>
//                 <p className="text-gray-400">Please review your information before submitting</p>
//             </div>

//             <div className="bg-gray-750 rounded-lg p-6 space-y-4">
//                 {isCompetitiveExam ? (
//                     <div className="flex items-center space-x-3">
//                         <BookOpen className="w-5 h-5 text-blue-400" />
//                         <div>
//                             <span className="text-white font-medium">{formData.examName || formData.company}</span>
//                             <span className="text-gray-400 ml-2">- {formData.postAppliedFor || formData.position}</span>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="flex items-center space-x-3">
//                         <Building2 className="w-5 h-5 text-blue-400" />
//                         <div>
//                             <span className="text-white font-medium">{formData.company}</span>
//                             <span className="text-gray-400 ml-2">- {formData.position}</span>
//                         </div>
//                     </div>
//                 )}

//                 <div className="flex items-center space-x-3">
//                     <Calendar className="w-5 h-5 text-green-400" />
//                     <span className="text-gray-300">{formData.interviewDate}</span>
//                 </div>

//                 <div className="flex items-center space-x-3">
//                     <Star className="w-5 h-5 text-yellow-400" />
//                     <div className="flex items-center space-x-1">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                             <Star key={star} className={`w-4 h-4 ${star <= formData.overallRating ? "text-yellow-400 fill-current" : "text-gray-600"}`} />
//                         ))}
//                         <span className="text-gray-300 ml-2">({formData.overallRating}/5)</span>
//                     </div>
//                 </div>

//                 <div className="flex items-center space-x-3">
//                     <Award className="w-5 h-5 text-purple-400" />
//                     <span className="text-gray-300">{outcomeLabels[formData.outcome as keyof typeof outcomeLabels] || "Not specified"}</span>
//                 </div>

//                 {isCompetitiveExam && formData.rankAchieved && (
//                     <div className="flex items-center space-x-3">
//                         <Trophy className="w-5 h-5 text-gold-400" />
//                         <span className="text-gray-300">Rank: {formData.rankAchieved}</span>
//                     </div>
//                 )}
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="bg-gray-750 rounded-lg p-4">
//                     <h3 className="font-medium text-white mb-2">{isCompetitiveExam ? "Exam/Interview Details" : "Interview Details"}</h3>
//                     <div className="space-y-2 text-sm">
//                         <div className="flex justify-between">
//                             <span className="text-gray-400">Category:</span>
//                             <span className="text-gray-300 capitalize">{formData.interviewCategory?.replace("-", " ")}</span>
//                         </div>
//                         {isCompetitiveExam && formData.examType && (
//                             <div className="flex justify-between">
//                                 <span className="text-gray-400">Exam Type:</span>
//                                 <span className="text-gray-300 uppercase">{formData.examType}</span>
//                             </div>
//                         )}
//                         <div className="flex justify-between">
//                             <span className="text-gray-400">Format:</span>
//                             <span className="text-gray-300 capitalize">{formData.interviewFormat?.replace("-", " ")}</span>
//                         </div>
//                         <div className="flex justify-between">
//                             <span className="text-gray-400">Rounds:</span>
//                             <span className="text-gray-300">{formData.interviewRounds}</span>
//                         </div>
//                         <div className="flex justify-between">
//                             <span className="text-gray-400">Difficulty:</span>
//                             <span className="text-gray-300">{difficultyLabels[formData.difficultyLevel as keyof typeof difficultyLabels] || "Not specified"}</span>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="bg-gray-750 rounded-lg p-4">
//                     <h3 className="font-medium text-white mb-2">Recommendation</h3>
//                     <div className="flex items-center space-x-2">
//                         <CheckCircle className={`w-5 h-5 ${formData.wouldRecommend ? "text-green-400" : "text-gray-600"}`} />
//                         <span className="text-gray-300">{formData.wouldRecommend ? "Would recommend" : "Would not recommend"}</span>
//                     </div>
//                 </div>
//             </div>

//             {formData.additionalNotes && (
//                 <div className="bg-gray-750 rounded-lg p-4">
//                     <h3 className="font-medium text-white mb-2">Additional Notes</h3>
//                     <p className="text-gray-300 text-sm">{formData.additionalNotes}</p>
//                 </div>
//             )}

//             <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
//                 <div className="flex items-center space-x-2 mb-2">
//                     <CheckCircle className="w-5 h-5 text-blue-400" />
//                     <span className="text-blue-300 font-medium">Ready to Submit</span>
//                 </div>
//                 <p className="text-blue-200 text-sm">
//                     Your experience will help other {isCompetitiveExam ? "aspirants prepare for their exams and interviews" : "job seekers prepare for their interviews"}. Thank you for contributing to our community!
//                 </p>
//             </div>
//         </div>
//     );
// }

// NEw************************************************************************

// import { CheckCircle, Building2, Calendar, Star, Award, BookOpen, Trophy } from "lucide-react";
// import { FormData } from "../../../../types/interview";

// interface ReviewStepProps {
//     formData: FormData;
//     isSubmitting: boolean;
// }

// export function ReviewStep({ formData, isSubmitting }: ReviewStepProps) {
//     const isCompetitiveExam = formData.interviewCategory === "competitive-exam";

//     const difficultyLabels = {
//         "very-easy": "Very Easy",
//         easy: "Easy",
//         medium: "Medium",
//         hard: "Hard",
//         "very-hard": "Very Hard",
//     };

//     const getOutcomeLabels = () =>
//         isCompetitiveExam
//             ? {
//                   selected: "Selected/Qualified",
//                   "not-selected": "Not Selected",
//                   "waiting-list": "Waiting List",
//                   "result-pending": "Result Pending",
//                   withdrew: "Withdrew Application",
//               }
//             : {
//                   offer: "Received Offer",
//                   rejected: "Rejected",
//                   pending: "Still Pending",
//                   withdrew: "Withdrew Application",
//               };

//     const outcomeLabels = getOutcomeLabels();

//     if (isSubmitting) {
//         return (
//             <div className="text-center py-16">
//                 <div className="animate-spin h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent mx-auto mb-4" />
//                 <h2 className="text-xl font-semibold text-white">Submitting...</h2>
//                 <p className="text-gray-400 text-sm mt-1">Please wait while we process your submission.</p>
//             </div>
//         );
//     }

//     return (
//         <div className="space-y-8">
//             <header className="text-center">
//                 <h2 className="text-2xl font-bold text-white">Review Your Experience</h2>
//                 <p className="text-sm text-gray-400 mt-1">Please check your information before submission.</p>
//             </header>

//             {/* Top Summary */}
//             <section className="bg-gray-750 rounded-xl p-5 space-y-3">
//                 <div className="flex items-center gap-3">
//                     {isCompetitiveExam ? <BookOpen className="w-5 h-5 text-blue-400" /> : <Building2 className="w-5 h-5 text-blue-400" />}
//                     <div className="text-white">
//                         <p className="font-medium">
//                             {isCompetitiveExam ? formData.examName : formData.company}
//                             <span className="text-gray-400 ml-2">— {isCompetitiveExam ? formData.postAppliedFor : formData.position}</span>
//                         </p>
//                     </div>
//                 </div>

//                 <div className="flex items-center gap-3 text-gray-300">
//                     <Calendar className="w-5 h-5 text-green-400" />
//                     <span>{formData.interviewDate}</span>
//                 </div>

//                 <div className="flex items-center gap-3 text-gray-300">
//                     <Star className="w-5 h-5 text-yellow-400" />
//                     <div className="flex items-center gap-1">
//                         {[1, 2, 3, 4, 5].map((i) => (
//                             <Star key={i} className={`w-4 h-4 ${i <= formData.overallRating ? "text-yellow-400 fill-current" : "text-gray-600"}`} />
//                         ))}
//                         <span className="ml-2">({formData.overallRating}/5)</span>
//                     </div>
//                 </div>

//                 <div className="flex items-center gap-3 text-gray-300">
//                     <Award className="w-5 h-5 text-purple-400" />
//                     <span>{outcomeLabels[formData.outcome as keyof typeof outcomeLabels] || "Not specified"}</span>
//                 </div>

//                 {isCompetitiveExam && formData.rankAchieved && (
//                     <div className="flex items-center gap-3 text-gray-300">
//                         <Trophy className="w-5 h-5 text-yellow-400" />
//                         <span>Rank: {formData.rankAchieved}</span>
//                     </div>
//                 )}
//             </section>

//             {/* Details */}
//             <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

import { CheckCircle, Building2, Calendar, Star, Award, BookOpen, Trophy, MapPin, DollarSign, Clock, Users, FileText, Target, Lightbulb, MessageSquare, Eye, EyeOff, Briefcase, GraduationCap, Mail } from "lucide-react";
import { FormData } from "../../../../types/interview";

interface ReviewStepProps {
    formData: FormData;
    isSubmitting: boolean;
}

export function ReviewStep({ formData, isSubmitting }: ReviewStepProps) {
    const isCompetitiveExam = formData.interviewCategory === "competitive-exam";

    const difficultyLabels = {
        "very-easy": "Very Easy",
        easy: "Easy",
        medium: "Medium",
        hard: "Hard",
        "very-hard": "Very Hard",
    };

    const getOutcomeLabels = () =>
        isCompetitiveExam
            ? {
                  selected: "Selected/Qualified",
                  "not-selected": "Not Selected",
                  "waiting-list": "Waiting List",
                  "result-pending": "Result Pending",
                  withdrew: "Withdrew Application",
              }
            : {
                  offer: "Received Offer",
                  rejected: "Rejected",
                  pending: "Still Pending",
                  withdrew: "Withdrew Application",
              };

    const outcomeLabels = getOutcomeLabels();

    const getOutcomeColor = (outcome: string) => {
        switch (outcome) {
            case "offer":
            case "selected":
                return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
            case "rejected":
            case "not-selected":
                return "text-red-400 bg-red-400/10 border-red-400/20";
            case "pending":
            case "result-pending":
                return "text-amber-400 bg-amber-400/10 border-amber-400/20";
            case "waiting-list":
                return "text-blue-400 bg-blue-400/10 border-blue-400/20";
            default:
                return "text-gray-400 bg-gray-400/10 border-gray-400/20";
        }
    };

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "very-easy":
            case "easy":
                return "text-green-400 bg-green-400/10";
            case "medium":
                return "text-yellow-400 bg-yellow-400/10";
            case "hard":
            case "very-hard":
                return "text-red-400 bg-red-400/10";
            default:
                return "text-gray-400 bg-gray-400/10";
        }
    };

    if (isSubmitting) {
        return (
            <div className="min-h-[400px] flex items-center justify-center">
                <div className="text-center space-y-4">
                    <div className="relative">
                        <div className="w-16 h-16 border-4 border-blue-500/20 rounded-full animate-spin mx-auto">
                            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white">Publishing Your Experience</h3>
                        <p className="text-gray-400 text-sm max-w-sm mx-auto">We are processing your submission and making it available to help others in their journey.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-white">Review Your Experience</h2>
                <p className="text-gray-400">Please verify all information before publishing</p>
            </div>

            {/* Main Content Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 border-b border-gray-700/50">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">{isCompetitiveExam ? <BookOpen className="w-6 h-6 text-blue-400" /> : <Building2 className="w-6 h-6 text-blue-400" />}</div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold text-white">{isCompetitiveExam ? formData.examName : formData.company}</h3>
                                <p className="text-gray-300 font-medium">{isCompetitiveExam ? formData.postAppliedFor : formData.position}</p>
                                {formData.location && (
                                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                                        <MapPin className="w-4 h-4" />
                                        <span>{formData.location}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={`px-4 py-2 rounded-full border text-sm font-medium ${getOutcomeColor(formData.outcome)}`}>
                            <div className="flex items-center gap-2">
                                <Award className="w-4 h-4" />
                                {outcomeLabels[formData.outcome as keyof typeof outcomeLabels] || "Not specified"}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30">
                            <div className="flex items-center gap-3">
                                <Calendar className="w-5 h-5 text-emerald-400" />
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide">Interview Date</p>
                                    <p className="text-white font-semibold">{formData.interviewDate}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30">
                            <div className="flex items-center gap-3">
                                <Users className="w-5 h-5 text-purple-400" />
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide">Rounds</p>
                                    <p className="text-white font-semibold">{formData.interviewRounds}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30">
                            <div className="flex items-center gap-3">
                                <Target className={`w-5 h-5 ${getDifficultyColor(formData.difficultyLevel).split(" ")[0]}`} />
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide">Difficulty</p>
                                    <p className="text-white font-semibold">{difficultyLabels[formData.difficultyLevel as keyof typeof difficultyLabels]}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30">
                            <div className="flex items-center gap-3">
                                <Star className="w-5 h-5 text-yellow-400" />
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide">Rating</p>
                                    <div className="flex items-center gap-1">
                                        <span className="text-white font-semibold">{formData.overallRating}</span>
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <Star key={i} className={`w-3 h-3 ${i <= formData.overallRating ? "text-yellow-400 fill-current" : "text-gray-600"}`} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Competitive Exam Info */}
                    {isCompetitiveExam && (formData.rankAchieved || formData.cutoffMarks) && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {formData.rankAchieved && (
                                <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-4 border border-amber-500/20">
                                    <div className="flex items-center gap-3">
                                        <Trophy className="w-5 h-5 text-amber-400" />
                                        <div>
                                            <p className="text-xs text-amber-200 uppercase tracking-wide">Rank Achieved</p>
                                            <p className="text-white font-bold text-lg">{formData.rankAchieved}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {formData.cutoffMarks && (
                                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-4 border border-blue-500/20">
                                    <div className="flex items-center gap-3">
                                        <Target className="w-5 h-5 text-blue-400" />
                                        <div>
                                            <p className="text-xs text-blue-200 uppercase tracking-wide">Cutoff Marks</p>
                                            <p className="text-white font-bold text-lg">{formData.cutoffMarks}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Basic Information Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                                <FileText className="w-5 h-5 text-blue-400" />
                                Basic Information
                            </h4>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                                    <span className="text-gray-400 text-sm">Category</span>
                                    <span className="text-white font-medium capitalize">{formData.interviewCategory?.replace("-", " ")}</span>
                                </div>

                                {isCompetitiveExam && formData.examType && (
                                    <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                                        <span className="text-gray-400 text-sm">Exam Type</span>
                                        <span className="text-white font-medium uppercase">{formData.examType}</span>
                                    </div>
                                )}

                                {!isCompetitiveExam && formData.industryType && (
                                    <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                                        <span className="text-gray-400 text-sm">Industry</span>
                                        <span className="text-white font-medium capitalize">{formData.industryType.replace("-", " ")}</span>
                                    </div>
                                )}

                                <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                                    <span className="text-gray-400 text-sm">Format</span>
                                    <span className="text-white font-medium capitalize">{formData.interviewFormat?.replace("-", " ")}</span>
                                </div>

                                {formData.totalDuration && (
                                    <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                                        <span className="text-gray-400 text-sm flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            Duration
                                        </span>
                                        <span className="text-white font-medium">{formData.totalDuration}</span>
                                    </div>
                                )}

                                {!isCompetitiveExam && formData.salaryRange && (
                                    <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                                        <span className="text-gray-400 text-sm flex items-center gap-1">
                                            <DollarSign className="w-4 h-4" />
                                            Salary Range
                                        </span>
                                        <span className="text-white font-medium">{formData.salaryRange}</span>
                                    </div>
                                )}

                                {formData.applicationSource && (
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-gray-400 text-sm">Source</span>
                                        <span className="text-white font-medium capitalize">{formData.applicationSource.replace("-", " ")}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                                <Lightbulb className="w-5 h-5 text-yellow-400" />
                                Assessment
                            </h4>

                            <div className="space-y-4">
                                <div className="bg-gray-800/30 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-400 text-sm">Would Recommend</span>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className={`w-5 h-5 ${formData.wouldRecommend ? "text-green-400" : "text-gray-600"}`} />
                                            <span className={`font-medium ${formData.wouldRecommend ? "text-green-400" : "text-gray-400"}`}>{formData.wouldRecommend ? "Yes" : "No"}</span>
                                        </div>
                                    </div>
                                </div>

                                {formData.feedbackReceived && (
                                    <div className="bg-gray-800/30 rounded-lg p-4">
                                        <h5 className="text-white font-medium mb-2 flex items-center gap-2">
                                            <MessageSquare className="w-4 h-4 text-blue-400" />
                                            Feedback Received
                                        </h5>
                                        <p className="text-gray-300 text-sm leading-relaxed">{formData.feedbackReceived}</p>
                                    </div>
                                )}

                                <div className="bg-gray-800/30 rounded-lg p-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400 text-sm flex items-center gap-2">
                                            {formData.anonymous ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            Submission Type
                                        </span>
                                        <span className="text-white font-medium">{formData.anonymous ? "Anonymous" : "Public"}</span>
                                    </div>
                                </div>

                                {!formData.anonymous && formData.email && (
                                    <>
                                        <div className="bg-gray-800/30 rounded-lg p-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-400 text-sm flex items-center gap-2">
                                                    <Mail className="w-4 h-4" />
                                                    Contact Email
                                                </span>
                                                <span className="text-white font-medium text-sm">{formData.email}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-400 text-sm flex items-center gap-2">
                                                    <Mail className="w-4 h-4" />
                                                    Name
                                                </span>
                                                <span className="text-white font-medium text-sm">{formData.name}</span>
                                            </div>
                                        </div>

                                        {/* <div className="bg-gray-800/30 rounded-lg p-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-400 text-sm flex items-center gap-2">
                                                    <Mail className="w-4 h-4" />
                                                    Name
                                                </span>
                                                <span className="text-white font-medium text-sm">{formData.name}</span>
                                            </div>
                                        </div> */}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Additional Notes */}
                    {formData.additionalNotes && (
                        <div className="space-y-3">
                            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                                <MessageSquare className="w-5 h-5 text-green-400" />
                                Additional Notes
                            </h4>
                            <div className="bg-gray-800/30 rounded-lg p-4">
                                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{formData.additionalNotes}</p>
                            </div>
                        </div>
                    )}

                    {/* Study Materials for Competitive Exams */}
                    {isCompetitiveExam && (formData.studyMaterials || formData.coachingInstitute) && (
                        <div className="space-y-3">
                            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-purple-400" />
                                Preparation Details
                            </h4>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {formData.studyMaterials && (
                                    <div className="bg-gray-800/30 rounded-lg p-4">
                                        <h5 className="text-white font-medium mb-2">Study Materials</h5>
                                        <p className="text-gray-300 text-sm leading-relaxed">{formData.studyMaterials}</p>
                                    </div>
                                )}
                                {formData.coachingInstitute && (
                                    <div className="bg-gray-800/30 rounded-lg p-4">
                                        <h5 className="text-white font-medium mb-2">Coaching Institute</h5>
                                        <p className="text-gray-300 text-sm leading-relaxed">{formData.coachingInstitute}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Final Submission Notice */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-emerald-300 font-semibold text-lg">Ready to Publish</h4>
                        <p className="text-emerald-200/80 leading-relaxed">
                            Your experience will help other {isCompetitiveExam ? "aspirants" : "job seekers"} prepare for their
                            {isCompetitiveExam ? " exams and interviews" : " interviews"}. Thank you for contributing to our community!
                        </p>
                        <div className="flex items-center gap-2 text-emerald-300 text-sm">
                            <Briefcase className="w-4 h-4" />
                            <span>This will be published to help others in similar roles</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
