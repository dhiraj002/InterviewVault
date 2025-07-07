"use client";

import { useState } from "react";
import { Search, Filter, Calendar, MapPin, User, Star } from "lucide-react";
import Link from "next/link";

const mockExperiences = [
    {
        id: 1,
        title: "UPSC CSE 2023 Interview Experience - IAS Officer Selection",
        author: "Rahul Sharma",
        examType: "UPSC Civil Services",
        year: 2023,
        location: "New Delhi",
        rating: 4.8,
        summary: "Detailed experience of UPSC CSE 2023 interview including board questions, personality test, and preparation tips.",
        tags: ["UPSC", "Civil Services", "Personality Test", "Board Interview"],
        readTime: "8 min read",
        date: "2024-01-15"
    },
    {
        id: 2,
        title: "SSB Interview Experience - Army Technical Entry Scheme",
        author: "Priya Patel",
        examType: "SSB Interview",
        year: 2023,
        location: "Bhopal",
        rating: 4.6,
        summary: "Complete SSB interview experience including psychological tests, group tasks, and personal interview.",
        tags: ["SSB", "Army", "Technical Entry", "Group Tasks"],
        readTime: "12 min read",
        date: "2024-01-10"
    },
    {
        id: 3,
        title: "SBI PO Interview Experience - Final Round Selection",
        author: "Amit Kumar",
        examType: "Banking & Finance",
        year: 2023,
        location: "Mumbai",
        rating: 4.4,
        summary: "SBI PO interview experience with detailed questions, GD topics, and preparation strategy.",
        tags: ["SBI", "Banking", "PO", "Group Discussion"],
        readTime: "6 min read",
        date: "2024-01-08"
    },
    {
        id: 4,
        title: "IES Interview Experience - Electrical Engineering Services",
        author: "Deepak Verma",
        examType: "Engineering Services",
        year: 2023,
        location: "Delhi",
        rating: 4.7,
        summary: "IES interview experience for electrical engineering with technical questions and interview tips.",
        tags: ["IES", "Engineering", "Electrical", "Technical"],
        readTime: "10 min read",
        date: "2024-01-05"
    },
    {
        id: 5,
        title: "UPSC CSE 2022 Interview - Optional Subject Strategy",
        author: "Meera Singh",
        examType: "UPSC Civil Services",
        year: 2022,
        location: "New Delhi",
        rating: 4.9,
        summary: "UPSC interview experience focusing on optional subject preparation and board interaction.",
        tags: ["UPSC", "Optional Subject", "Strategy", "Preparation"],
        readTime: "9 min read",
        date: "2024-01-03"
    },
    {
        id: 6,
        title: "SSB Interview - Air Force Flying Branch",
        author: "Vikram Singh",
        examType: "SSB Interview",
        year: 2023,
        location: "Varanasi",
        rating: 4.5,
        summary: "Air Force SSB interview experience including pilot aptitude test and medical examination.",
        tags: ["Air Force", "Flying", "Pilot", "Aptitude Test"],
        readTime: "15 min read",
        date: "2024-01-01"
    }
];

const examCategories = [
    "All Categories",
    "UPSC Civil Services",
    "SSB Interview", 
    "Banking & Finance",
    "Engineering Services",
    "Police & Defense",
    "Academic & Research"
];

export default function BrowsePage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [selectedYear, setSelectedYear] = useState("All Years");

    const filteredExperiences = mockExperiences.filter(experience => {
        const matchesSearch = experience.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            experience.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            experience.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesCategory = selectedCategory === "All Categories" || experience.examType === selectedCategory;
        const matchesYear = selectedYear === "All Years" || experience.year.toString() === selectedYear;
        
        return matchesSearch && matchesCategory && matchesYear;
    });

    const years = ["All Years", ...Array.from(new Set(mockExperiences.map(exp => exp.year.toString())))].sort((a, b) => b.localeCompare(a));

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Browse Interview Experiences
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Discover real interview experiences from successful candidates across various competitive exams
                    </p>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search experiences, topics, or keywords..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                            >
                                {examCategories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        {/* Year Filter */}
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                            >
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {filteredExperiences.length} Experience{filteredExperiences.length !== 1 ? 's' : ''} Found
                    </h2>
                    <div className="text-sm text-gray-500">
                        Showing {filteredExperiences.length} of {mockExperiences.length} experiences
                    </div>
                </div>

                {/* Experience Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredExperiences.map(experience => (
                        <div key={experience.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                                        {experience.examType}
                                    </span>
                                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                                        {experience.year}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Star className="text-yellow-400" size={16} fill="currentColor" />
                                    <span className="text-sm font-medium text-gray-700">{experience.rating}</span>
                                </div>
                            </div>

                            <Link href={`/experience/${experience.id}`}>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 cursor-pointer">
                                    {experience.title}
                                </h3>
                            </Link>

                            <p className="text-gray-600 mb-4 line-clamp-3">
                                {experience.summary}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {experience.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                        {tag}
                                    </span>
                                ))}
                                {experience.tags.length > 3 && (
                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                        +{experience.tags.length - 3} more
                                    </span>
                                )}
                            </div>

                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <User size={16} />
                                        <span>{experience.author}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={16} />
                                        <span>{experience.location}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span>{experience.readTime}</span>
                                    <span>{new Date(experience.date).toLocaleDateString()}</span>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <Link href={`/experience/${experience.id}`} className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-center">
                                    Read Full Experience
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredExperiences.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                            <Search size={64} className="mx-auto" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No experiences found</h3>
                        <p className="text-gray-500">Try adjusting your search criteria or browse all experiences</p>
                    </div>
                )}
            </div>
        </div>
    );
}
