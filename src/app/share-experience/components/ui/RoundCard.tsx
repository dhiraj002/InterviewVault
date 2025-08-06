import { ChevronDown, ChevronUp, Trash2, Clock, Monitor, User, Video } from "lucide-react";
import { InterviewRound } from "../../../../types/interview";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { TextAreaField } from "./TextAreaField";
// import { RichTextEditor } from "./RichTextEditor";

interface RoundCardProps {
    round: InterviewRound;
    roundNumber: number;
    onUpdate: (round: InterviewRound) => void;
    onDelete: () => void;
    isExpanded: boolean;
    onToggleExpand: () => void;
    errors: Record<string, string>;
    interviewCategory: string;
}

export function RoundCard({ round, roundNumber, onUpdate, onDelete, isExpanded, onToggleExpand, errors, interviewCategory }: RoundCardProps) {
    const updateField = <K extends keyof InterviewRound>(field: K, value: InterviewRound[K]) => {
        onUpdate({ ...round, [field]: value });
    };

    const getModeIcon = (mode: string) => {
        switch (mode) {
            case "in-person":
                return <User className="w-4 h-4" />;
            case "video-call":
                return <Video className="w-4 h-4" />;
            case "phone-call":
                return <Monitor className="w-4 h-4" />;
            default:
                return <Monitor className="w-4 h-4" />;
        }
    };

    const isCompetitiveExam = interviewCategory === "competitive-exam";
    const roundTypeOptions = isCompetitiveExam
        ? [
              { value: "preliminary-exam", label: "Preliminary Exam" },
              { value: "main-exam", label: "Main Exam" },
              { value: "personality-test", label: "Personality Test" },
              { value: "written", label: "Written Test" },
              { value: "descriptive", label: "Descriptive Test" },
              { value: "group-discussion", label: "Group Discussion" },
              { value: "personal-interview", label: "Personal Interview" },
              { value: "document-verification", label: "Document Verification" },
              { value: "medical-test", label: "Medical Test" },
              { value: "physical-test", label: "Physical Fitness Test" },
              { value: "skill-test", label: "Skill/Trade Test" },
              { value: "psychological-test", label: "Psychological Assessment" },
              { value: "language-test", label: "Language Proficiency Test" },
              { value: "typing-test", label: "Typing/Stenography Test" },
              { value: "computer-test", label: "Computer Based Test" },
          ]
        : [
              { value: "technical", label: "Technical/Coding Round" },
              { value: "aptitude", label: "Aptitude Test" },
              { value: "behavioral", label: "Behavioral Interview" },
              { value: "system-design", label: "System Design" },
              { value: "case-study", label: "Case Study Round" },
              { value: "presentation", label: "Presentation Round" },
              { value: "hr-screening", label: "HR Screening" },
              { value: "culture-fit", label: "Culture Fit" },
              { value: "panel", label: "Panel Interview" },
              { value: "group-discussion", label: "Group Discussion" },
              { value: "managerial", label: "Managerial Round" },
              { value: "product-round", label: "Product Interview" },
              { value: "bar-raiser", label: "Bar Raiser Round" },
              { value: "assignment", label: "Take-home Assignment" },
              { value: "live-coding", label: "Live Coding Session" },
              { value: "whiteboard", label: "Whiteboard Interview" },
              { value: "portfolio-review", label: "Portfolio/Project Review" },
          ];

    const modeOptions = [
        { value: "in-person", label: "In-Person/F2F" },
        { value: "video-call", label: "Video Call/Online" },
        { value: "phone-call", label: "Phone Call" },
        { value: "remote", label: "Remote" },
    ];

    const difficultyOptions = [
        { value: "easy", label: "Easy" },
        { value: "medium", label: "Medium" },
        { value: "hard", label: "Hard" },
    ];

    const outcomeOptions = [
        { value: "passed", label: "Passed" },
        { value: "failed", label: "Failed" },
        { value: "pending", label: "Pending" },
        { value: "unclear", label: "Unclear" },
    ];

    return (
        <div className="border border-gray-600 rounded-lg bg-gray-750 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700 transition-colors" onClick={onToggleExpand}>
                <div className="flex items-center space-x-3">
                    <button type="button" className="text-gray-400 hover:text-white">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>

                    <div>
                        <h3 className="text-white font-medium">
                            Round {roundNumber}
                            {round.name && <span className="text-orange-400 ml-2">- {round.name}</span>}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                            {round.type && <span className="capitalize">{round.type.replace("-", " ")}</span>}
                            {round.mode && (
                                <span className="flex items-center space-x-1">
                                    {getModeIcon(round.mode)}
                                    <span className="capitalize">{round.mode.replace("-", " ")}</span>
                                </span>
                            )}
                            {round.duration > 0 && (
                                <span className="flex items-center space-x-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{round.duration} mins</span>
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete();
                    }}
                    className="p-2 text-gray-400 hover:text-red-400 hover:bg-gray-600 rounded-lg transition-colors"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

            {/* Expanded Content */}
            {isExpanded && (
                <div className="p-4  space-y-4 border-t border-gray-600">
                    {/* Round Name */}
                    <InputField label="Round Name" value={round.name} onChange={(value) => updateField("name", value)} placeholder="Eg. Technical Round 1" required error={errors[`round${roundNumber}Name`]} />
                    {/* Round Type and Mode */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <SelectField label="Round Type" value={round.type} onChange={(value) => updateField("type", value)} options={roundTypeOptions} placeholder="Select round type" required error={errors[`round${roundNumber}Type`]} />

                        <SelectField label="Mode" value={round.mode} onChange={(value) => updateField("mode", value)} options={modeOptions} placeholder="Select mode" required error={errors[`round${roundNumber}Mode`]} />
                    </div>
                    {/* Difficulty and Duration */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <SelectField
                            label="Difficulty Level"
                            value={round.difficulty}
                            onChange={(value) => updateField("difficulty", value)}
                            options={difficultyOptions}
                            placeholder="Select difficulty"
                            required
                            error={errors[`round${roundNumber}Difficulty`]}
                        />

                        <InputField
                            label="Duration (mins)"
                            type="number"
                            value={round.duration.toString()}
                            onChange={(value) => updateField("duration", parseInt(value) || 0)}
                            placeholder="60"
                            min={1}
                            required
                            error={errors[`round${roundNumber}Duration`]}
                        />

                        {/* Outcome */}
                        <SelectField label="Round Outcome" value={round.outcome} onChange={(value) => updateField("outcome", value)} options={outcomeOptions} placeholder="Select outcome" required error={errors[`round${roundNumber}Outcome`]} />
                    </div>
                    {/* Round Questions */}
                    <TextAreaField
                        label="Questions Asked"
                        value={round.questions.join("\n")}
                        onChange={(value) => updateField("questions", value.split("\n"))}
                        placeholder="List questions asked in this round, one per line"
                        required
                        error={errors[`round${roundNumber}Questions`]}
                    />

                    {/* Round Summary */}
                    <TextAreaField label={`Round ${roundNumber} Summary`} value={round.summary} onChange={(value) => updateField("summary", value)} placeholder="Share round overview, questions asked, your experience..." />
                </div>
            )}
        </div>
    );
}
