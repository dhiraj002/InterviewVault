// import { LucideIcon } from "lucide-react";
// import { ChevronDown } from "lucide-react"; // Custom dropdown arrow

// interface SelectOption {
//     value: string;
//     label: string;
// }

// interface SelectFieldProps {
//     label: string;
//     value: string;
//     onChange: (value: string) => void;
//     options: SelectOption[];
//     placeholder?: string;
//     icon?: LucideIcon;
//     error?: string;
//     required?: boolean;
// }

// export function SelectField({ label, value, onChange, options, placeholder, icon: Icon, error, required }: SelectFieldProps) {
//     return (
//         <div className="relative">
//             <label className="flex items-center gap-1 text-sm font-medium text-white mb-2">
//                 {Icon && <Icon className="w-4 h-4" />}
//                 {label}
//                 {required && <span className="text-red-400 ml-1">*</span>}
//             </label>

//             <div className="relative">
//                 <select
//                     value={value}
//                     onChange={(e) => onChange(e.target.value)}
//                     className={`w-full appearance-none px-4 py-3 pr-10 bg-gray-700 text-white border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200
//                         ${error ? "border-red-500" : "border-gray-600"}
//                         ${!value && placeholder ? "text-gray-400" : ""}
//                     `}
//                 >
//                     {placeholder && <option value="">{placeholder}</option>}
//                     {options.map((option) => (
//                         <option key={option.value} value={option.value}>
//                             {option.label}
//                         </option>
//                     ))}
//                 </select>

//                 {/* Custom Dropdown Icon */}
//                 <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4" />
//             </div>

//             {error && <p className="mt-1 text-sm text-red-400 error">{error}</p>}
//         </div>
//     );
// }

import { useId } from "react";
import { LucideIcon } from "lucide-react";
import { ChevronDown } from "lucide-react"; // Custom dropdown arrow

interface SelectOption {
    value: string;
    label: string;
}

interface SelectFieldProps {
    id?: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
    icon?: LucideIcon;
    error?: string;
    required?: boolean;
}

export function SelectField({ id: propId, label, value, onChange, options, placeholder, icon: Icon, error, required }: SelectFieldProps) {
    const autoId = useId();
    const id = propId || `select-${autoId}`;
    const errorId = `${id}-error`;

    return (
        <div className="relative">
            <label htmlFor={id} className="flex items-center gap-1 text-sm font-medium text-white mb-2">
                {Icon && <Icon className="w-4 h-4" />}
                {label}
                {required && <span className="text-red-400 ml-1">*</span>}
            </label>

            <div className="relative">
                <select
                    id={id}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    aria-invalid={error ? "true" : undefined}
                    aria-describedby={error ? errorId : undefined}
                    required={required}
                    className={`w-full appearance-none px-4 py-3 pr-10 bg-gray-700 text-white border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200
            ${error ? "border-red-500" : "border-gray-600"} 
            ${!value && placeholder ? "text-gray-400" : ""}`}
                >
                    {placeholder && <option value="">{placeholder}</option>}
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                {/* Custom Dropdown Icon */}
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4" />
            </div>

            {error && (
                <p id={errorId} className="mt-1 text-sm text-red-400 error" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}
