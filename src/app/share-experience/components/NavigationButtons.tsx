import { ChevronLeft, ChevronRight, Send, Loader2 } from "lucide-react";

interface NavigationButtonsProps {
    currentStep: number;
    totalSteps: number;
    onNext: () => void;
    onPrev: () => void;
    onSubmit: () => void;
    isSubmitting: boolean;
}

export function NavigationButtons({ currentStep, totalSteps, onNext, onPrev, onSubmit, isSubmitting }: NavigationButtonsProps) {
    return (
        <div className="flex justify-between items-center gap-4">
            <button
                onClick={onPrev}
                disabled={currentStep === 1}
                className={`flex items-center px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                    currentStep === 1 ? "bg-gray-700 text-gray-500 cursor-not-allowed" : "bg-gray-700 text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-500"
                }`}
            >
                <ChevronLeft className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">Prev</span>
            </button>

            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 flex-shrink-0">
                <span>
                    Step {currentStep} of {totalSteps}
                </span>
            </div>

            {currentStep < totalSteps ? (
                <button onClick={onNext} className="flex items-center px-4 sm:px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm sm:text-base">
                    <span className="hidden sm:inline">Next</span>
                    <span className="sm:hidden">Next</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                </button>
            ) : (
                <button
                    onClick={onSubmit}
                    disabled={isSubmitting}
                    className={`flex items-center px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                        isSubmitting ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500"
                    }`}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            <span className="hidden sm:inline">Submitting...</span>
                            <span className="sm:hidden">Submit...</span>
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4 mr-2" />
                            <span className="hidden sm:inline">Submit Experience</span>
                            <span className="sm:hidden">Submit</span>
                        </>
                    )}
                </button>
            )}
        </div>
    );
}
