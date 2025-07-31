// interface CheckboxOption {
//     value: string;
//     label: string;
// }

// interface CheckboxGroupProps {
//     label: string;
//     options: CheckboxOption[];
//     value: string[];
//     error?: string;
//     required?: boolean;
//     onChange: (value: string[]) => void;
// }

// export function CheckboxGroup({ label, options, value, onChange, error, required }: CheckboxGroupProps) {
//     const handleChange = (optionValue: string, checked: boolean) => {
//         if (checked) {
//             onChange([...value, optionValue]);
//         } else {
//             onChange(value.filter((v) => v !== optionValue));
//         }
//     };

//     return (
//         <div>
//             <label className="block text-sm font-medium text-gray-300 mb-3">
//                 {label}
//                 {required && <span className="text-red-500 ml-1">*</span>}
//             </label>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {options.map((option) => (
//                     <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
//                         <input type="checkbox" checked={value.includes(option.value)} onChange={(e) => handleChange(option.value, e.target.checked)} className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500 rounded" />
//                         <span className="text-gray-300">{option.label}</span>
//                     </label>
//                 ))}
//             </div>
//             {error && <p className="mt-2 text-sm text-red-400 error">{error}</p>}
//         </div>
//     );
// }

import { useId } from "react";

interface CheckboxOption {
    value: string;
    label: string;
}

interface CheckboxGroupProps {
    label: string;
    options: CheckboxOption[];
    value: string[];
    error?: string;
    required?: boolean;
    onChange: (value: string[]) => void;
}

export function CheckboxGroup({ label, options, value, onChange, error, required }: CheckboxGroupProps) {
    const groupId = useId();
    const errorId = `${groupId}-error`;

    const handleChange = (optionValue: string, checked: boolean) => {
        if (checked) {
            onChange([...value, optionValue]);
        } else {
            onChange(value.filter((v) => v !== optionValue));
        }
    };

    return (
        <div role="group" aria-labelledby={`${groupId}-label`} aria-describedby={error ? errorId : undefined}>
            <label id={`${groupId}-label`} className="block text-sm font-medium text-gray-300 mb-3">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {options.map((option, idx) => {
                    const checkboxId = `${groupId}-option-${idx}`;
                    return (
                        <label key={option.value} htmlFor={checkboxId} className="flex items-center space-x-3 cursor-pointer select-none">
                            <input
                                id={checkboxId}
                                type="checkbox"
                                checked={value.includes(option.value)}
                                onChange={(e) => handleChange(option.value, e.target.checked)}
                                className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500 rounded"
                                aria-invalid={error ? "true" : undefined}
                                aria-describedby={error ? errorId : undefined}
                            />
                            <span className="text-gray-300">{option.label}</span>
                        </label>
                    );
                })}
            </div>
            {error && (
                <p id={errorId} className="mt-2 text-sm text-red-400 error" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}
