// import { LucideIcon } from "lucide-react";

// interface RadioOption {
//     value: string;
//     label: string;
//     icon?: LucideIcon;
// }

// interface RadioGroupProps {
//     label: string;
//     options: RadioOption[];
//     value: string;
//     onChange: (value: string) => void;
//     error?: string;
//     required?: boolean;
// }

// export function RadioGroup({ label, options, value, onChange, error, required }: RadioGroupProps) {
//     return (
//         <div>
//             <label className="block text-sm font-semibold text-white mb-2">
//                 {label}
//                 {required && <span className="text-red-500 ml-1">*</span>}
//             </label>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {options.map((option) => {
//                     const isSelected = value === option.value;
//                     return (
//                         <label
//                             key={option.value}
//                             className={`flex items-center p-4 rounded-2xl border-2 transition-all cursor-pointer gap-4
//                 ${isSelected ? "border-blue-500 bg-blue-950 text-white" : "border-gray-700 hover:border-blue-500 hover:bg-blue-900 text-gray-300"}`}
//                         >
//                             <input type="radio" name={label} value={option.value} checked={isSelected} onChange={(e) => onChange(e.target.value)} className="hidden" />
//                             {option.icon && <option.icon className="w-5 h-5 flex-shrink-0" />}
//                             <span className="text-sm sm:text-base font-medium">{option.label}</span>
//                         </label>
//                     );
//                 })}
//             </div>

//             {error && <p className="mt-2 text-sm text-red-400 error">{error}</p>}
//         </div>
//     );
// }

import { useId } from "react";
import { LucideIcon } from "lucide-react";

interface RadioOption {
    value: string;
    label: string;
    icon?: LucideIcon;
}

interface RadioGroupProps {
    label: string;
    options: RadioOption[];
    value: string;
    onChange: (value: string) => void;
    error?: string;
    required?: boolean;
}

export function RadioGroup({ label, options, value, onChange, error, required }: RadioGroupProps) {
    const groupId = useId();
    const errorId = `${groupId}-error`;

    return (
        <div role="radiogroup" aria-labelledby={`${groupId}-label`} aria-invalid={error ? "true" : undefined} aria-describedby={error ? errorId : undefined}>
            <p id={`${groupId}-label`} className="block text-sm font-semibold text-white mb-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {options.map((option) => {
                    const isSelected = value === option.value;
                    const inputId = `${groupId}-${option.value}`;

                    return (
                        <div key={option.value}>
                            <input
                                id={inputId}
                                type="radio"
                                name={`${groupId}-radio`}
                                value={option.value}
                                checked={isSelected}
                                onChange={(e) => onChange(e.target.value)}
                                className="sr-only" // visually hidden but accessible
                                aria-checked={isSelected}
                                aria-required={required || undefined}
                            />
                            <label
                                htmlFor={inputId}
                                className={`flex items-center p-4 rounded-2xl border-2 transition-all cursor-pointer gap-4 select-none
                  ${isSelected ? "border-blue-500 bg-blue-950 text-white" : "border-gray-700 hover:border-blue-500 hover:bg-blue-900 text-gray-300"}`}
                            >
                                {option.icon && <option.icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />}
                                <span className="text-sm sm:text-base font-medium">{option.label}</span>
                            </label>
                        </div>
                    );
                })}
            </div>

            {error && (
                <p id={errorId} role="alert" className="mt-2 text-sm text-red-400 error">
                    {error}
                </p>
            )}
        </div>
    );
}
