"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles, MapPin, Clock, Briefcase, Heart, Zap, Users, Coffee, Trophy, ArrowRight } from "lucide-react";

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
        description: "Build and optimize our AI-powered marketing algorithms and recommendation systems."
    },
    {
        id: 2,
        title: "Growth Marketing Manager",
        department: "Marketing",
        location: "Remote",
        type: "Full-time",
        description: "Lead our growth initiatives and develop strategies to acquire and retain clients."
    },
    {
        id: 3,
        title: "Product Designer",
        department: "Design",
        location: "Remote",
        type: "Full-time",
        description: "Design intuitive experiences for our AI marketing platform and client dashboards."
    },
    {
        id: 4,
        title: "Content Strategist",
        department: "Marketing",
        location: "Remote",
        type: "Full-time",
        description: "Develop content strategies for our clients and create thought leadership content."
    },
    {
        id: 5,
        title: "Customer Success Manager",
        department: "Operations",
        location: "Remote",
        type: "Full-time",
        description: "Ensure our clients achieve their marketing goals and maximize platform value."
    },
    {
        id: 6,
        title: "Data Analyst",
        department: "Analytics",
        location: "Remote",
        type: "Full-time",
        description: "Analyze marketing data and provide actionable insights to drive client success."
    }
];

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Background Effects */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
                    <div className="absolute right-1/4 top-20 h-80 w-80 rounded-full bg-green-600/15 blur-3xl"></div>
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
                            <span className="text-sm text-blue-300">Join Our Team</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                            Build the Future of Marketing
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                            Join a team of innovators, creators, and problem-solvers who are revolutionizing digital marketing with AI.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="relative py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us</h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            We believe in taking care of our team so they can do their best work
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
                            >
                                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <benefit.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-sm text-neutral-400">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions Section */}
            <section className="relative py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            Find your perfect role and help us shape the future of marketing
                        </p>
                    </div>

                    <div className="space-y-4">
                        {openings.map((job) => (
                            <div
                                key={job.id}
                                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-pointer"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                                    {/* Job Info */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                                            {job.title}
                                        </h3>
                                        <p className="text-sm text-neutral-400 mb-4 lg:mb-0">
                                            {job.description}
                                        </p>
                                    </div>

                                    {/* Meta */}
                                    <div className="flex flex-wrap items-center gap-4">
                                        <span className="inline-flex items-center gap-1 text-sm text-neutral-400">
                                            <Briefcase className="h-4 w-4" />
                                            {job.department}
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-sm text-neutral-400">
                                            <MapPin className="h-4 w-4" />
                                            {job.location}
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-sm text-neutral-400">
                                            <Clock className="h-4 w-4" />
                                            {job.type}
                                        </span>
                                    </div>

                                    {/* Apply Button */}
                                    <div className="lg:ml-4">
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium group-hover:bg-blue-500 group-hover:text-white transition-all">
                                            Apply Now
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-600/20 to-green-600/10 border border-blue-500/20 text-center">
                        <h2 className="text-3xl font-bold mb-4">Don't See Your Perfect Role?</h2>
                        <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                            We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
                        </p>
                        <a
                            href="mailto:careers@getmoreclients.com"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity"
                        >
                            Send Your Resume
                            <Sparkles className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
