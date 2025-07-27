import { Check } from "lucide-react";
import { Step } from "../../../types/interview";

interface StepIndicatorProps {
    steps: Step[];
    currentStep: number;
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
    return (
        <div className="flex items-center justify-between overflow-x-auto pb-2">
            {steps.map((step, index) => (
                <div key={step.id} className="flex items-center flex-shrink-0">
                    <div className="flex flex-col items-center">
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                                step.id < currentStep ? "bg-green-500 text-white" : step.id === currentStep ? "bg-blue-500 text-white ring-4 ring-blue-500/20" : "bg-gray-700 text-gray-400 border border-gray-600"
                            }`}
                        >
                            {step.id < currentStep ? <Check className="w-5 h-5" /> : <span className="text-sm font-medium">{step.id}</span>}
                        </div>
                        <div className="mt-3 text-center min-w-0">
                            <div className={`text-sm font-medium ${step.id <= currentStep ? "text-white" : "text-gray-400"}`}>{step.title}</div>
                            <div className="text-xs text-gray-500 mt-1 hidden sm:block">{step.subtitle}</div>
                        </div>
                    </div>
                    {index < steps.length - 1 && <div className={`w-12 sm:w-20 h-0.5 mx-2 sm:mx-4 transition-all duration-300 flex-shrink-0 ${step.id < currentStep ? "bg-green-500" : "bg-gray-700"}`} />}
                </div>
            ))}
        </div>
    );
}
