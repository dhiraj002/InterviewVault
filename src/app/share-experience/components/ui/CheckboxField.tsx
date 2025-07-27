import { DivideIcon as LucideIcon } from "lucide-react";

interface CheckboxFieldProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    icon?: typeof LucideIcon;
}

export function CheckboxField({ label, checked, onChange, icon: Icon }: CheckboxFieldProps) {
    return (
        <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500 rounded" />
            <span className="text-gray-300 flex items-center">
                {Icon && <Icon className="w-4 h-4 mr-2" />}
                {label}
            </span>
        </label>
    );
}
