"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchProps {
    value: string;
    onChange: (value: string) => void;
    delay?: number; // Optional debounce delay
}

export function SearchInput({ value, onChange, delay = 300 }: SearchProps) {
    const [internalValue, setInternalValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            onChange(internalValue);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [internalValue, delay, onChange]);

    return (
        <div className="relative w-full max-w-md">
            <label htmlFor="search" className="sr-only">
                Search Experiences
            </label>
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
                id="search"
                type="text"
                value={internalValue}
                onChange={(e) => setInternalValue(e.target.value)}
                placeholder="Search interviews..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                autoComplete="off"
            />
        </div>
    );
}
