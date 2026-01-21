"use client";

import Link from "next/link";
import {
    ArrowLeft,
    Sparkles,
    MapPin,
    Clock,
    Briefcase,
    Heart,
    Zap,
    Users,
    Coffee,
    Trophy,
    ArrowRight,
    Home as HomeIcon,
    Settings,
    CheckCircle,
    HelpCircle,
    Phone,
    X,
    Check,
    Calendar
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { NavBar } from "@/components/ui/NavBar";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { Footer } from "@/components/ui/Footer";
import { GlowingEffect } from "@/components/ui/GlowingEffect";

const benefits = [
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance and wellness programs" },
    { icon: Zap, title: "Remote First", description: "Work from anywhere in the world" },
    { icon: Users, title: "Team Events", description: "Regular virtual and in-person team gatherings" },
    { icon: Coffee, title: "Learning Budget", description: "Annual budget for courses and conferences" },
    { icon: Trophy, title: "Growth Path", description: "Clear career progression and mentorship" },
    { icon: Clock, title: "Flexible Hours", description: "Work when you're most productive" }
];

const openings = [
    {
        id: 1,
        title: "Senior AI/ML Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        description: "Build and optimize our AI-powered marketing algorithms and recommendation systems.",
        responsibilities: [
            "Architect and implement scalable machine learning models for marketing automation.",
            "Optimize recommendation engines to drive client ROI and engagement.",
            "Collaborate with product teams to integrate AI features into our core platform.",
            "Mentor junior engineers and champion best practices in ML engineering."
        ],
        requirements: [
            "5+ years of experience in AI/ML engineering or related fields.",
            "Proficiency in Python, PyTorch, or TensorFlow.",
            "Experience with distributed systems and cloud infrastructure (AWS/GCP).",
            "Strong understanding of NLP and Predictive Analytics."
        ]
    },
    {
        id: 2,
        title: "Growth Marketing Manager",
        department: "Marketing",
        location: "Remote",
        type: "Full-time",
        description: "Lead our growth initiatives and develop strategies to acquire and retain clients.",
        responsibilities: [
            "Design and execute multi-channel growth experiments across SEO, PPC, and Social.",
            "Analyze marketing data to identify new opportunities for scaling client acquisition.",
            "Manage client relationships and ensure long-term value delivery.",
            "Stay ahead of industry trends and incorporate AI tools into marketing workflows."
        ],
        requirements: [
            "4+ years of experience in performance or growth marketing.",
            "Proven track record of scaling digital products or services.",
            "Deep expertise in Google Ads, Meta Ads, and SEO strategies.",
            "Analytical mindset with proficiency in GA4 and marketing automation tools."
        ]
    },
    {
        id: 3,
        title: "Product Designer",
        department: "Design",
        location: "Remote",
        type: "Full-time",
        description: "Design intuitive experiences for our AI marketing platform and client dashboards.",
        responsibilities: [
            "Create high-fidelity designs and prototypes for our client-facing dashboard.",
            "Conduct user research and translate insights into meaningful design improvements.",
            "Develop and maintain a comprehensive design system for across all products.",
            "Work closely with developers to ensure pixel-perfect implementation."
        ],
        requirements: [
            "3+ years of experience in UX/UI or Product Design.",
            "Strong portfolio demonstrating expertise in SaaS or dashboard design.",
            "Proficiency in Figma, Adobe Creative Suite, and prototyping tools.",
            "Excellent understanding of visual hierarchy, typography, and color theory."
        ]
    },
    {
        id: 4,
        title: "Content Strategist",
        department: "Marketing",
        location: "Remote",
        type: "Full-time",
        description: "Develop content strategies for our clients and create thought leadership content.",
        responsibilities: [
            "Create comprehensive content maps for diverse client industries.",
            "Write high-quality SEO-optimized articles, whitepapers, and social copy.",
            "Leverage AI tools to enhance content production speed and quality.",
            "Measure content performance and iterate on strategies based on data."
        ],
        requirements: [
            "3+ years of experience in content strategy or copywriting.",
            "Ability to write across multiple niches and maintain brand voice.",
            "Strong understanding of SEO principles and keyword research.",
            "Experience with AI content tools (Copy.ai, Jasper, or similar)."
        ]
    },
    {
        id: 5,
        title: "Customer Success Manager",
        department: "Operations",
        location: "Remote",
        type: "Full-time",
        description: "Ensure our clients achieve their marketing goals and maximize platform value.",
        responsibilities: [
            "Onboard new clients and guide them through our marketing framework.",
            "Monitor client progress and proactively offer strategic recommendations.",
            "Handle renewals and identify opportunities for service expansion.",
            "Act as the voice of the customer to inform our product roadmap."
        ],
        requirements: [
            "3+ years in Customer Success, Account Management, or Sales.",
            "Exceptional communication and relationship-building skills.",
            "Strong problem-solving ability in a fast-paced environment.",
            "Knowledge of digital marketing basics is a big plus."
        ]
    },
    {
        id: 6,
        title: "Data Analyst",
        department: "Analytics",
        location: "Remote",
        type: "Full-time",
        description: "Analyze marketing data and provide actionable insights to drive client success.",
        responsibilities: [
            "Build automated dashboards to track key marketing metrics.",
            "Perform deep-dive analysis on campaign performance and attribution.",
            "Translate complex data sets into clear, actionable reports for clients.",
            "Identify anomalies and trends to optimize marketing spend."
        ],
        requirements: [
            "2+ years of experience in data analysis or business intelligence.",
            "Advanced skills in SQL, Excel, and data visualization tools (Tableau/Looker).",
            "Familiarity with marketing APIs and data integration.",
            "Strong attention to detail and ability to tell stories with data."
        ]
    }
];

export default function CareersPage() {
    const [selectedJob, setSelectedJob] = useState<typeof openings[0] | null>(null);

    return (
        <main className="min-h-screen text-white bg-[#020617]">
            <NavBar
                items={[
                    { name: "Home", url: "/", icon: HomeIcon },
                    { name: "Services", url: "/#services", icon: Sparkles },
                    { name: "How It Works", url: "/#how-it-works", icon: Settings },
                    { name: "Why Us", url: "/#why-us", icon: CheckCircle },
                    { name: "FAQ", url: "/#faq", icon: HelpCircle },
                    { name: "Contact", url: "/contact", icon: Phone },
                    {
                        name: "Book a session",
                        url: "#",
                        icon: Calendar,
                        dataAttributes: {
                            "data-cal-namespace": "",
                            "data-cal-link": "getmoreclients-agency/free-strategy-consultation",
                            "data-cal-config": '{"layout":"month_view"}'
                        }
                    },
                ]}
            />

            <StarsBackground speed={60} factor={0.02} starColor="#ffffff">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="relative z-10 mx-auto max-w-6xl px-6">
                        {/* Back Link */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-12 group"
                            >
                                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                                Back to Home
                            </Link>
                        </motion.div>

                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 mb-6"
                            >
                                <Sparkles className="h-4 w-4 text-blue-400" />
                                <span className="text-sm text-blue-300">Join Our Team</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent tracking-tighter"
                            >
                                Build the Future of Marketing
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed"
                            >
                                Join a team of innovators, creators, and problem-solvers who are revolutionizing digital marketing with AI.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="relative py-24 scroll-mt-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
                                Why Work <span className="text-blue-400">With Us</span>
                            </h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                                We believe in taking care of our team so they can do their best work
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative rounded-3xl p-[2px] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, #22d3ee, #a78bfa, #ec4899, #f97316, #22d3ee)',
                                        backgroundSize: '300% 300%',
                                        animation: 'borderGradientShift 6s ease-in-out infinite',
                                    }}
                                >
                                    <div className="relative z-10 h-full bg-[#020617] rounded-[22px] p-8 transition-all duration-300">
                                        <GlowingEffect
                                            spread={40}
                                            glow={true}
                                            disabled={false}
                                            proximity={64}
                                            inactiveZone={0.01}
                                        />

                                        <div className="relative z-10">
                                            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                                                <benefit.icon className="h-7 w-7 text-blue-400 group-hover:animate-pulse" strokeWidth={1.5} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors uppercase tracking-tight">{benefit.title}</h3>
                                            <p className="text-gray-100 text-base leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">{benefit.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Open Positions Section */}
                <section className="relative py-24 bg-white/[0.02] border-y border-white/5">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4 tracking-tight">Open Positions</h2>
                            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                                Find your perfect role and help us shape the future of marketing
                            </p>
                        </div>

                        <div className="space-y-6">
                            {openings.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative cursor-pointer"
                                    onClick={() => setSelectedJob(job)}
                                >
                                    <div className="absolute inset-0 bg-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-xl transition-all duration-300 group-hover:bg-white/[0.05] group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]" />

                                    <div className="relative p-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 transition-transform duration-300 group-hover:scale-[1.01]">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors tracking-tight">
                                                {job.title}
                                            </h3>
                                            <p className="text-neutral-400 leading-relaxed font-medium">
                                                {job.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center gap-6">
                                            <div className="flex flex-wrap items-center gap-4">
                                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300">
                                                    <Briefcase className="h-4 w-4 text-blue-400" />
                                                    {job.department}
                                                </span>
                                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300">
                                                    <MapPin className="h-4 w-4 text-cyan-400" />
                                                    {job.location}
                                                </span>
                                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300">
                                                    <Clock className="h-4 w-4 text-purple-400" />
                                                    {job.type}
                                                </span>
                                            </div>

                                            <button
                                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-500/20 group-hover:bg-cyan-400 group-hover:text-black transition-all"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedJob(job);
                                                }}
                                            >
                                                Apply Now
                                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Modal Backdrop and Content */}
                <AnimatePresence>
                    {selectedJob && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedJob(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden bg-[#0a0f1e] border border-white/10 rounded-[32px] shadow-2xl flex flex-col"
                            >
                                {/* Modal Header */}
                                <div className="p-8 pb-4 border-b border-white/5 relative">
                                    <button
                                        onClick={() => setSelectedJob(null)}
                                        className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>

                                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 mb-4">
                                        <Briefcase className="h-3.5 w-3.5 text-blue-400" />
                                        <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">{selectedJob.department}</span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                                        {selectedJob.title}
                                    </h2>

                                    <div className="flex flex-wrap gap-4">
                                        <span className="text-sm font-medium text-neutral-400 flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-cyan-400" /> {selectedJob.location}
                                        </span>
                                        <span className="text-sm font-medium text-neutral-400 flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-purple-400" /> {selectedJob.type}
                                        </span>
                                    </div>
                                </div>

                                {/* Modal Body - Scrollable */}
                                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                                    <div className="space-y-8">
                                        <section>
                                            <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                                                <span className="w-6 h-[2px] bg-blue-500" /> About the Role
                                            </h3>
                                            <p className="text-neutral-400 leading-relaxed font-medium text-lg">
                                                {selectedJob.description}
                                            </p>
                                        </section>

                                        <section>
                                            <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                                                <span className="w-6 h-[2px] bg-cyan-400" /> Key Responsibilities
                                            </h3>
                                            <ul className="space-y-3">
                                                {selectedJob.responsibilities.map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-neutral-300 font-medium">
                                                        <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>

                                        <section>
                                            <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider flex items-center gap-2">
                                                <span className="w-6 h-[2px] bg-purple-400" /> Requirements
                                            </h3>
                                            <ul className="grid sm:grid-cols-1 gap-3">
                                                {selectedJob.requirements.map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-neutral-300 font-medium p-3 rounded-xl bg-white/5 border border-white/10">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>
                                    </div>
                                </div>

                                {/* Modal Footer */}
                                <div className="p-8 border-t border-white/5 bg-white/[0.02]">
                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                        <div className="text-center sm:text-left">
                                            <p className="text-white font-bold mb-1">Intrigued by this role?</p>
                                            <p className="text-neutral-400 text-sm">Send your resume and portfolio our way.</p>
                                        </div>
                                        <a
                                            href={`mailto:careers@getmoreclients.com?subject=Application for ${selectedJob.title}`}
                                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-500 text-white font-bold hover:bg-cyan-400 hover:text-black transition-all shadow-xl shadow-blue-500/20"
                                        >
                                            Apply for this Position
                                            <ArrowRight className="h-5 w-5" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* Final CTA Section */}
                <section className="relative py-32">
                    <div className="mx-auto max-w-4xl px-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-16 rounded-[40px] bg-gradient-to-br from-blue-600/20 to-cyan-500/10 border border-blue-500/20 text-center backdrop-blur-xl relative overflow-hidden group"
                        >
                            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors" />

                            <h2 className="text-4xl font-bold mb-6 tracking-tight">Don't See Your Role?</h2>
                            <p className="text-neutral-400 mb-10 text-lg max-w-xl mx-auto font-medium">
                                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
                            </p>
                            <a
                                href="mailto:careers@getmoreclients.com"
                                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-black hover:bg-neutral-200 transition-all shadow-xl shadow-white/5 group"
                            >
                                Send Your Resume
                                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                </section>
            </StarsBackground>

            <Footer />

            <style jsx global>{`
                @keyframes borderGradientShift {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </main>
    );
}
