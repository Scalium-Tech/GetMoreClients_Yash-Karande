"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Calendar, Clock, ArrowRight, Search, TrendingUp, Share2, BarChart3, FileText, Target, Mail } from "lucide-react";

// Blog card image component with unique gradients and icons per category
const BlogCardImage = ({ category }: { category: string }) => {
    const categoryStyles: Record<string, { gradient: string; icon: React.ReactNode; pattern: string }> = {
        "SEO": {
            gradient: "from-blue-600 via-blue-500 to-cyan-400",
            icon: <Search className="h-16 w-16" />,
            pattern: "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(34, 211, 238, 0.3) 0%, transparent 50%)"
        },
        "Social Media": {
            gradient: "from-purple-600 via-pink-500 to-rose-400",
            icon: <Share2 className="h-16 w-16" />,
            pattern: "radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(244, 114, 182, 0.3) 0%, transparent 50%)"
        },
        "Analytics": {
            gradient: "from-teal-600 via-emerald-500 to-green-400",
            icon: <BarChart3 className="h-16 w-16" />,
            pattern: "radial-gradient(circle at 25% 75%, rgba(20, 184, 166, 0.4) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(52, 211, 153, 0.3) 0%, transparent 50%)"
        },
        "Content": {
            gradient: "from-amber-600 via-orange-500 to-yellow-400",
            icon: <FileText className="h-16 w-16" />,
            pattern: "radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)"
        },
        "Strategy": {
            gradient: "from-indigo-600 via-violet-500 to-purple-400",
            icon: <Target className="h-16 w-16" />,
            pattern: "radial-gradient(circle at 30% 70%, rgba(99, 102, 241, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)"
        },
        "Email": {
            gradient: "from-rose-600 via-red-500 to-pink-400",
            icon: <Mail className="h-16 w-16" />,
            pattern: "radial-gradient(circle at 25% 75%, rgba(225, 29, 72, 0.4) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(244, 63, 94, 0.3) 0%, transparent 50%)"
        }
    };

    const style = categoryStyles[category] || categoryStyles["SEO"];

    return (
        <div
            className={`aspect-video bg-gradient-to-br ${style.gradient} relative overflow-hidden`}
            style={{ backgroundImage: style.pattern }}
        >
            {/* Animated mesh pattern */}
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id={`grid-${category}`} width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${category})`} />
                </svg>
            </div>

            {/* Floating particles effect */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
            <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse delay-150" />
            <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/35 rounded-full animate-pulse delay-300" />
            <div className="absolute bottom-10 left-16 w-2 h-2 bg-white/25 rounded-full animate-pulse delay-500" />

            {/* Icon container with glow */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                    {/* Glow effect behind icon */}
                    <div className="absolute inset-0 blur-2xl bg-white/20 scale-150" />
                    <div className="relative text-white/90 drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        {style.icon}
                    </div>
                </div>
            </div>

            {/* Shimmer overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
    );
};

const blogPosts = [
    {
        id: 1,
        title: "10 AI-Powered SEO Strategies for 2026",
        slug: "10-ai-powered-seo-strategies-for-2026",
        excerpt: "Discover how artificial intelligence is revolutionizing search engine optimization and learn the strategies that will keep you ahead of the competition.",
        category: "SEO",
        date: "Jan 15, 2026",
        readTime: "8 min read"
    },
    {
        id: 2,
        title: "The Future of Social Media Marketing",
        slug: "the-future-of-social-media-marketing",
        excerpt: "Explore emerging trends in social media marketing and how AI is changing the way brands connect with their audiences.",
        category: "Social Media",
        date: "Jan 12, 2026",
        readTime: "6 min read"
    },
    {
        id: 3,
        title: "How to Measure Marketing ROI with AI Analytics",
        slug: "how-to-measure-marketing-roi-with-ai-analytics",
        excerpt: "Learn how to leverage AI-powered analytics tools to accurately measure and improve your marketing return on investment.",
        category: "Analytics",
        date: "Jan 10, 2026",
        readTime: "10 min read"
    },
    {
        id: 4,
        title: "Content Marketing Automation: A Complete Guide",
        slug: "content-marketing-automation-a-complete-guide",
        excerpt: "Everything you need to know about automating your content marketing workflow while maintaining quality and authenticity.",
        category: "Content",
        date: "Jan 8, 2026",
        readTime: "12 min read"
    },
    {
        id: 5,
        title: "Building a Data-Driven Marketing Strategy",
        slug: "building-a-data-driven-marketing-strategy",
        excerpt: "Step-by-step guide to creating a marketing strategy that leverages data and AI for maximum impact.",
        category: "Strategy",
        date: "Jan 5, 2026",
        readTime: "9 min read"
    },
    {
        id: 6,
        title: "Email Marketing in the Age of AI",
        slug: "email-marketing-in-the-age-of-ai",
        excerpt: "How AI is transforming email marketing with personalization, predictive analytics, and smart automation.",
        category: "Email",
        date: "Jan 3, 2026",
        readTime: "7 min read"
    }
];

const categories = ["All", "SEO", "Social Media", "Analytics", "Content", "Strategy", "Email"];

export default function BlogsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Filter blog posts based on selected category and search query
    const filteredPosts = blogPosts.filter((post) => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Background Effects */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
                    <div className="absolute right-1/4 top-20 h-80 w-80 rounded-full bg-purple-600/15 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
                    {/* Back Link */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-12 group"
                    >
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 mb-6">
                            <Sparkles className="h-4 w-4 text-blue-400" />
                            <span className="text-sm text-blue-300">Our Blog</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                            Insights & Resources
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                            Stay ahead of the curve with our latest articles on AI-powered marketing, industry trends, and actionable strategies.
                        </p>
                    </div>
                </div>
            </section>

            {/* Search and Categories */}
            <section className="relative py-8">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full md:w-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full md:w-80 pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                            />
                        </div>

                        {/* Categories */}
                        <div className="flex flex-wrap gap-2 justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm transition-all ${selectedCategory === category
                                        ? "bg-blue-500 text-white"
                                        : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="relative py-12">
                <div className="mx-auto max-w-6xl px-6">
                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-neutral-400 text-lg">No articles found matching your criteria.</p>
                            <button
                                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                                className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                Clear filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blogs/${post.slug}`}
                                    className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-pointer"
                                >
                                    <article>
                                        {/* Dynamic Image based on category */}
                                        <BlogCardImage category={post.category} />

                                        <div className="p-6">
                                            {/* Category & Meta */}
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium">
                                                    {post.category}
                                                </span>
                                                <div className="flex items-center gap-2 text-xs text-neutral-500">
                                                    <Calendar className="h-3 w-3" />
                                                    {post.date}
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                                                {post.title}
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="text-sm text-neutral-400 mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            {/* Footer */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1 text-xs text-neutral-500">
                                                    <Clock className="h-3 w-3" />
                                                    {post.readTime}
                                                </div>
                                                <span className="inline-flex items-center gap-1 text-sm text-blue-400 group-hover:gap-2 transition-all">
                                                    Read More
                                                    <ArrowRight className="h-4 w-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
