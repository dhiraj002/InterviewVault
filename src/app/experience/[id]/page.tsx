"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, User, MapPin, Calendar, Star, ThumbsUp, MessageCircle, Share2, Bookmark } from "lucide-react";

// Mock data - in real app this would come from API
const mockExperience = {
    id: 1,
    title: "UPSC CSE 2023 Interview Experience - IAS Officer Selection",
    author: "Rahul Sharma",
    examType: "UPSC Civil Services",
    year: 2023,
    location: "New Delhi",
    rating: 4.8,
    summary: "Detailed experience of UPSC CSE 2023 interview including board questions, personality test, and preparation tips.",
    tags: ["UPSC", "Civil Services", "Personality Test", "Board Interview", "IAS", "Preparation"],
    readTime: "8 min read",
    date: "2024-01-15",
    outcome: "Selected",
    detailedExperience: `
        <h3>Interview Date and Venue</h3>
        <p>My UPSC CSE 2023 interview was scheduled on 15th March 2023 at the UPSC headquarters in New Delhi. I reached the venue 30 minutes before the scheduled time as advised.</p>
        
        <h3>Document Verification</h3>
        <p>The process started with document verification where I had to submit all my original documents including educational certificates, caste certificate, and other required documents. The staff was very helpful and guided me through the process.</p>
        
        <h3>Waiting Period</h3>
        <p>After document verification, I was taken to a waiting room where other candidates were also present. The atmosphere was quite tense but I tried to stay calm and focused. I used this time to mentally prepare myself and review my DAF (Detailed Application Form).</p>
        
        <h3>The Interview Board</h3>
        <p>My interview was conducted by a board of 5 members chaired by Dr. Rajesh Kumar. The board members were very professional and created a comfortable environment for the interview.</p>
        
        <h3>Key Questions Asked</h3>
        <ul>
            <li><strong>Personal Questions:</strong> Tell us about your family background and why you chose civil services?</li>
            <li><strong>Optional Subject:</strong> Since I had chosen Geography as my optional, they asked about recent geographical developments and their implications.</li>
            <li><strong>Current Affairs:</strong> Questions about recent government policies, international relations, and economic developments.</li>
            <li><strong>Hometown:</strong> Detailed questions about my hometown's culture, economy, and development issues.</li>
        </ul>
        
        <h3>My Responses and Strategy</h3>
        <p>I maintained honesty throughout the interview and admitted when I didn't know something. I tried to connect my answers with real-life examples and showed genuine interest in public service.</p>
        
        <h3>Interview Duration</h3>
        <p>The interview lasted for about 25 minutes, which is quite standard for UPSC interviews.</p>
    `,
    preparationTips: `
        <h3>Preparation Strategy</h3>
        <ul>
            <li><strong>DAF Preparation:</strong> Thoroughly prepare your Detailed Application Form. Every detail mentioned can be questioned.</li>
            <li><strong>Current Affairs:</strong> Stay updated with national and international news for at least 6 months before the interview.</li>
            <li><strong>Optional Subject:</strong> Have in-depth knowledge of your optional subject and its contemporary relevance.</li>
            <li><strong>Mock Interviews:</strong> Practice with mock interviews to build confidence and improve communication skills.</li>
            <li><strong>Personality Development:</strong> Work on your personality, body language, and communication skills.</li>
        </ul>
    `,
    advice: `
        <h3>Advice for Future Aspirants</h3>
        <ul>
            <li>Be honest and authentic in your responses</li>
            <li>Don't try to bluff or give incorrect information</li>
            <li>Stay calm and composed throughout the interview</li>
            <li>Connect your answers with real-life examples</li>
            <li>Show genuine interest in public service</li>
            <li>Practice speaking clearly and confidently</li>
        </ul>
    `,
    helpfulCount: 124,
    commentCount: 23
};

export default function ExperienceDetailPage({ params }: { params: { id: string } }) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="flex items-center gap-4 mb-4">
                        <Link href="/browse" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                            <ArrowLeft size={20} />
                            Back to Browse
                        </Link>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        {mockExperience.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                            <User size={16} />
                            <span>{mockExperience.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{mockExperience.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{new Date(mockExperience.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Star size={16} className="text-yellow-400" fill="currentColor" />
                            <span>{mockExperience.rating}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Summary */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Summary</h2>
                            <p className="text-gray-700 leading-relaxed">{mockExperience.summary}</p>
                        </div>

                        {/* Tags */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Tags</h2>
                            <div className="flex flex-wrap gap-2">
                                {mockExperience.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Detailed Experience */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Detailed Experience</h2>
                            <div 
                                className="prose prose-gray max-w-none"
                                dangerouslySetInnerHTML={{ __html: mockExperience.detailedExperience }}
                            />
                        </div>

                        {/* Preparation Tips */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Preparation Tips</h2>
                            <div 
                                className="prose prose-gray max-w-none"
                                dangerouslySetInnerHTML={{ __html: mockExperience.preparationTips }}
                            />
                        </div>

                        {/* Advice */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Advice for Aspirants</h2>
                            <div 
                                className="prose prose-gray max-w-none"
                                dangerouslySetInnerHTML={{ __html: mockExperience.advice }}
                            />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Quick Info */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Info</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Exam Type:</span>
                                    <span className="font-medium">{mockExperience.examType}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Year:</span>
                                    <span className="font-medium">{mockExperience.year}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Outcome:</span>
                                    <span className={`font-medium ${mockExperience.outcome === 'Selected' ? 'text-green-600' : 'text-red-600'}`}>
                                        {mockExperience.outcome}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Read Time:</span>
                                    <span className="font-medium">{mockExperience.readTime}</span>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Actions</h3>
                            <div className="space-y-3">
                                <button 
                                    onClick={() => setIsLiked(!isLiked)}
                                    className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg border transition-colors duration-200 ${
                                        isLiked 
                                            ? 'bg-blue-50 border-blue-200 text-blue-700' 
                                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    <ThumbsUp size={16} />
                                    {isLiked ? 'Liked' : 'Helpful'} ({mockExperience.helpfulCount})
                                </button>
                                <button className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                                    <MessageCircle size={16} />
                                    Comment ({mockExperience.commentCount})
                                </button>
                                <button className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                                    <Share2 size={16} />
                                    Share
                                </button>
                                <button 
                                    onClick={() => setIsBookmarked(!isBookmarked)}
                                    className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg border transition-colors duration-200 ${
                                        isBookmarked 
                                            ? 'bg-yellow-50 border-yellow-200 text-yellow-700' 
                                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    <Bookmark size={16} />
                                    {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                                </button>
                            </div>
                        </div>

                        {/* Author Info */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">About the Author</h3>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <User size={24} className="text-blue-600" />
                                </div>
                                <h4 className="font-medium text-gray-800">{mockExperience.author}</h4>
                                <p className="text-sm text-gray-600 mt-1">UPSC CSE 2023 Selected Candidate</p>
                                <button className="mt-3 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 