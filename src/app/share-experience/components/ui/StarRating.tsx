import { Star } from "lucide-react";

interface StarRatingProps {
    label: string;
    value: number;
    onChange: (rating: number) => void;
    error?: string;
    required?: boolean;
}

export function StarRating({ label, value, onChange, error, required }: StarRatingProps) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
                {label}
                {required && <span className="text-red-400 ml-1">*</span>}
            </label>
            <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                    <button key={rating} type="button" onClick={() => onChange(rating)} className={`p-2 rounded-full transition-colors ${value >= rating ? "text-yellow-400 hover:text-yellow-300" : "text-gray-600 hover:text-gray-500"}`}>
                        <Star className="w-8 h-8 fill-current" />
                    </button>
                ))}
                <span className="ml-4 text-gray-300">{value > 0 ? `${value}/5` : "Select rating"}</span>
            </div>
            {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
        </div>
    );
}
