// import { DivideIcon as LucideIcon } from "lucide-react";

// interface TextAreaFieldProps {
//     label: string;
//     value: string;
//     onChange: (value: string) => void;
//     placeholder?: string;
//     icon?: typeof LucideIcon;
//     rows?: number;
//     error?: string;
//     required?: boolean;
// }

// export function TextAreaField({ label, value, onChange, placeholder, icon: Icon, rows = 3, error, required }: TextAreaFieldProps) {
//     return (
//         <div>
//             <label className="block text-sm font-medium text-gray-300 mb-2">
//                 {Icon && <Icon className="inline w-4 h-4 mr-1" />}
//                 {label}
//                 {required && <span className="text-red-400 ml-1">*</span>}
//             </label>
//             <textarea
//                 value={value}
//                 onChange={(e) => onChange(e.target.value)}
//                 placeholder={placeholder}
//                 rows={rows}
//                 className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 resize-none ${
//                     error ? "border-red-500" : "border-gray-600"
//                 }`}
//             />
//             {error && <p className="mt-1 text-sm text-red-400 error">{error}</p>}
//         </div>
//     );
// }

import { useId } from "react";
import { DivideIcon as LucideIcon } from "lucide-react";

interface TextAreaFieldProps {
    id?: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    icon?: typeof LucideIcon;
    rows?: number;
    error?: string;
    required?: boolean;
}

export function TextAreaField({ id: propId, label, value, onChange, placeholder, icon: Icon, rows = 3, error, required }: TextAreaFieldProps) {
    const generatedId = useId();
    const textareaId = propId || `textarea-${generatedId}`;
    const errorId = `${textareaId}-error`;

    return (
        <div>
            <label htmlFor={textareaId} className="block text-sm font-medium text-gray-300 mb-2">
                {Icon && <Icon className="inline w-4 h-4 mr-1" />}
                {label}
                {required && <span className="text-red-400 ml-1">*</span>}
            </label>
            <textarea
                id={textareaId}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                rows={rows}
                required={required}
                aria-invalid={error ? "true" : undefined}
                aria-describedby={error ? errorId : undefined}
                className={`w-full px-4 py-3 bg-gray-700 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 resize-none ${
                    error ? "border-red-500" : "border-gray-600"
                }`}
            />
            {error && (
                <p id={errorId} className="mt-1 text-sm text-red-400 error" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}
