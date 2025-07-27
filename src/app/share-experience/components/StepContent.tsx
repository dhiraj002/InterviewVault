import { BasicInfoStep } from "./steps/BasicInfoStep";
import { InterviewProcessStep } from "./steps/InterviewProcessStep";
import { ExperienceDetailsStep } from "./steps/ExperienceDetailsStep";
import { AssessmentStep } from "./steps/AssessmentStep";
import { ReviewStep } from "./steps/ReviewStep";
import { FormData } from "../../../types/interview";

interface StepContentProps {
    step: number;
    formData: FormData;
    updateFormData: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
    errors: Record<string, string>;
    isSubmitting: boolean;
}

export function StepContent({ step, formData, updateFormData, errors, isSubmitting }: StepContentProps) {
    const commonProps = { formData, updateFormData, errors };

    switch (step) {
        case 1:
            return <BasicInfoStep {...commonProps} />;
        case 2:
            return <InterviewProcessStep {...commonProps} />;
        case 3:
            return <ExperienceDetailsStep {...commonProps} />;
        case 4:
            return <AssessmentStep {...commonProps} />;
        case 5:
            return <ReviewStep formData={formData} isSubmitting={isSubmitting} />;
        default:
            return <BasicInfoStep {...commonProps} />;
    }
}
