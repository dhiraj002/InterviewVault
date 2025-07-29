// import { DivideIcon as LucideIcon } from "lucide-react";

// interface InputFieldProps {
//     label: string;
//     type?: string;
//     value?: string;
//     placeholder?: string;
//     icon?: typeof LucideIcon;
//     error?: string;
//     required?: boolean;
//     min?: number;
//     max?: number;
// }

// export function InputFieldFixed({ label, type = "text", value, placeholder, icon: Icon, error, required, min, max }: InputFieldProps) {
//     return (
//         <div>
//             <label className="block text-sm font-medium text-gray-300 mb-2">
//                 {Icon && <Icon className="inline w-4 h-4 mr-1" />}
//                 {label}
//                 {required && <span className="text-red-400 ml-1">*</span>}
//             </label>
//             <input
//                 type={type}
//                 value={value}
//                 placeholder={placeholder}
//                 min={min}
//                 max={max}
//                 disabled
//                 readOnly
//                 className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 ${error ? "border-red-500" : "border-gray-600"}`}
//             />
//             {error && <p className="mt-1 text-sm text-red-400 error">{error}</p>}
//         </div>
//     );
// }

import { useId } from "react";
import { DivideIcon as LucideIcon } from "lucide-react";

interface InputFieldProps {
    id?: string;
    label: string;
    type?: string;
    value?: string;
    placeholder?: string;
    icon?: typeof LucideIcon;
    error?: string;
    required?: boolean;
    min?: number;
    max?: number;
}

export function InputFieldFixed({ id: propId, label, type = "text", value, placeholder, icon: Icon, error, required, min, max }: InputFieldProps) {
    const generatedId = useId();
    const inputId = propId || `input-fixed-${generatedId}`;
    const errorId = `${inputId}-error`;

    return (
        <div>
            <label htmlFor={inputId} className="block text-sm font-medium text-gray-300 mb-2">
                {Icon && <Icon className="inline w-4 h-4 mr-1" />}
                {label}
                {required && <span className="text-red-400 ml-1">*</span>}
            </label>
            <input
                id={inputId}
                type={type}
                value={value}
                placeholder={placeholder}
                min={min}
                max={max}
                readOnly
                aria-invalid={error ? "true" : undefined}
                aria-describedby={error ? errorId : undefined}
                className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 ${error ? "border-red-500" : "border-gray-600"}`}
            />
            {error && (
                <p id={errorId} className="mt-1 text-sm text-red-400 error" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}
