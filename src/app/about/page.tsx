"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles, Target, Users, Zap, Award, Heart, Globe, CheckCircle, TrendingUp, MessageSquare, Shield, Linkedin, Twitter, Home as HomeIcon, Settings, HelpCircle, Phone } from "lucide-react";
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import { NavBar } from "@/components/ui/NavBar";
import { motion } from "framer-motion";

// Client logos data
const trustedClients = [
    { name: "TechStart", logo: "TechStart" },
    { name: "GrowthCo", logo: "GrowthCo" },
    { name: "ScaleUp", logo: "ScaleUp" },
    { name: "Innovate", logo: "Innovate" },
    { name: "NextGen", logo: "NextGen" },
    { name: "FutureTech", logo: "FutureTech" },
];

// Our Values data
const values = [
    {
        icon: Target,
        title: "Execution",
        description: "We believe in action over words. Our team delivers results through disciplined execution, turning strategies into measurable outcomes that drive your business forward."
    },
    {
        icon: Shield,
        title: "Accountability",
        description: "We own our commitments. Every team member takes responsibility for their work, ensuring transparency in our processes and honesty in our communication with clients."
    },
    {
        icon: TrendingUp,
        title: "Results",
        description: "We are obsessed with outcomes. Every campaign, strategy, and creative decision is measured against its impact on your ROI and business growth."
    },
    {
        icon: Heart,
        title: "Client-First",
        description: "Your success is our success. We build lasting partnerships by putting your needs first, providing dedicated support, and celebrating your wins as our own."
    }
];

// Team members data
const teamMembers = [
    {
        name: "Marcus Chen",
        role: "Founder & Growth Strategist",
        focus: "Strategy, business growth, client success",
        description: "Leads overall growth strategy, aligns AI-driven insights with business goals, and ensures every service delivers measurable ROI.",
        services: ["Social Media", "SEO", "PPC", "Content Strategy"],
        image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&q=80",
        linkedin: "#",
        twitter: "#"
    },
    {
        name: "Emily Rodriguez",
        role: "Head of Social Media & Content Strategy",
        focus: "Social growth, audience engagement, content planning",
        description: "Builds AI-powered social strategies, plans content calendars, and ensures consistent messaging across platforms.",
        services: ["Social Media", "Content Strategy"],
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
        linkedin: "#",
        twitter: "#"
    },
    {
        name: "David Park",
        role: "SEO & Performance Marketing Specialist",
        focus: "Traffic growth, visibility, paid performance",
        description: "Optimizes websites for search engines, manages PPC campaigns, and ensures every click is tracked, optimized, and profitable.",
        services: ["SEO", "PPC"],
        image: "https://images.unsplash.com/photo-1614289371518-722f2615943d?w=400&q=80",
        linkedin: "#",
        twitter: "#"
    },
    {
        name: "James Wilson",
        role: "UI/UX Designer & Web Experience Lead",
        focus: "User experience, interfaces, conversion design",
        description: "Designs intuitive websites and apps that are fast, user-friendly, and built to convert visitors into customers.",
        services: ["App & Web Design"],
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80",
        linkedin: "#",
        twitter: "#"
    },
    {
        name: "Michael Brooks",
        role: "Visual Designer & Infographics Specialist",
        focus: "Visual clarity, storytelling, brand visuals",
        description: "Turns complex ideas into clean infographics, visual stories, and marketing assets that are easy to understand and share.",
        services: ["Infographics"],
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
        linkedin: "#",
        twitter: "#"
    },
    {
        name: "Alex Thompson",
        role: "E-Commerce Assets & Conversion Specialist",
        focus: "Product presentation, marketplace optimization",
        description: "Creates product imagery, optimized listings, and e-commerce assets that increase trust, clicks, and conversions.",
        services: ["E-Commerce Assets"],
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&q=80",
        linkedin: "#",
        twitter: "#"
    },
    {
        name: "Sophia Laurent",
        role: "Motion Designer & Brand Assets Lead",
        focus: "Brand identity, motion, visual consistency",
        description: "Builds brand identities, animations, and motion graphics that make brands memorable and consistent across every platform.",
        services: ["Animations", "Brand Assets"],
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
        linkedin: "#",
        twitter: "#"
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
            {/* NavBar */}
            <NavBar
                items={[
                    { name: "Home", url: "/", icon: HomeIcon },
                    { name: "Services", url: "/#services", icon: Sparkles },
                    { name: "How It Works", url: "/#how-it-works", icon: Settings },
                    { name: "Why Us", url: "/#why-us", icon: CheckCircle },
                    { name: "FAQ", url: "/#faq", icon: HelpCircle },
                    { name: "Contact", url: "/contact", icon: Phone },
                ]}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-24">
                {/* Background Effects */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
                    <div className="absolute right-1/4 top-20 h-80 w-80 rounded-full bg-cyan-600/15 blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
                    {/* Back Link */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 group"
                    >
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 mb-6">
                            <Sparkles className="h-4 w-4 text-blue-400" />
                            <span className="text-sm text-blue-300">About Us</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                            We Help Grow Your Business<br />
                            <span className="text-blue-400">with AI-Powered Marketing</span>
                        </h1>

                        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                            From startups to enterprises, we deliver measurable results through intelligent, data-driven digital marketing strategies.
                        </p>
                    </div>

                    {/* Hero Image - Team Photo */}
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[16/7]">
                        <img
                            src="/team-hero.jpg"
                            alt="GetMoreClients Team"
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20" />
                        {/* Decorative elements */}
                        <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400/40 rounded-full animate-pulse" />
                        <div className="absolute bottom-8 left-8 w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse delay-300" />
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="relative py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                                Our Story
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                We Are an Agency That<br />
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Delivers Results</span>
                            </h2>
                            <div className="space-y-4 text-neutral-400 leading-relaxed">
                                <p>
                                    GetMoreClients was founded with a simple mission: to help businesses grow through intelligent, AI-powered digital marketing that actually works. We saw too many agencies making empty promises and delivering confusing reports with no real impact.
                                </p>
                                <p>
                                    That's why we built GetMoreClients differently. We combine cutting-edge AI technology with human expertise to create marketing strategies that are not just creative, but measurably effective. Every campaign we run is designed with one goal in mind—growing your business.
                                </p>
                                <p>
                                    Our team consists of seasoned marketers, data scientists, and creative strategists who share a common passion: seeing our clients succeed. We believe in transparent communication, honest reporting, and partnerships built on trust.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            {/* Story Image - Team Unity */}
                            <div className="aspect-square rounded-3xl border border-white/10 overflow-hidden">
                                <img
                                    src="/our-story.png"
                                    alt="Team Unity"
                                    className="w-full h-full object-cover"
                                />
                                {/* Decorative gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                            </div>
                            {/* Stats overlay */}
                            <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">500+</div>
                                <div className="text-sm text-neutral-400">Clients Worldwide</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By Section */}
            <section className="relative py-16 border-y border-white/5">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center mb-10">
                        <p className="text-neutral-400">
                            Trusted by <span className="text-white font-semibold">500+</span> companies since <span className="text-blue-400 font-semibold">2020</span>
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {trustedClients.map((client, index) => (
                            <div
                                key={index}
                                className="text-neutral-500 hover:text-white transition-colors font-semibold text-lg tracking-wide"
                            >
                                {client.logo}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="relative py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                            Our Values
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            The Fundamental Principles<br />
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Guiding Our Agency</span>
                        </h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">
                            These core values define who we are and how we work with every client.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
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
                                <div className="relative z-10 h-full bg-[#020617] rounded-[22px] p-8 group-hover:bg-[#020617]/90 transition-colors flex gap-6">
                                    <div className="flex-shrink-0 relative">
                                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:scale-110 transition-transform relative z-10 shadow-lg">
                                            <value.icon className="h-10 w-10 text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" strokeWidth={1.5} />
                                        </div>
                                        {/* Floating glow behind icon */}
                                        <div className="absolute inset-0 bg-blue-500/20 blur-2xl -z-10 rounded-full group-hover:bg-blue-500/30 transition-colors" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{value.title}</h3>
                                        <p className="text-gray-100 text-base leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">{value.description}</p>
                                    </div>
                                </div>

                                {/* Radial Background Highlight */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="relative py-20 border-t border-white/5">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                                Our Approach
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                AI-Driven Strategy.<br />
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Human-Led Execution.</span>
                            </h2>
                            <p className="text-neutral-400 leading-relaxed mb-8">
                                We use AI to analyze data, uncover opportunities, and optimize performance—while experienced marketers guide strategy, creativity, and execution.
                            </p>

                            {/* Process Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Card 1: Blue */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="group relative rounded-2xl p-[2px] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, #3b82f6, #60a5fa, #3b82f6)',
                                        backgroundSize: '300% 300%',
                                        animation: 'borderGradientShift 6s ease-in-out infinite',
                                    }}
                                >
                                    <div className="relative z-10 h-full bg-[#020617] rounded-[14px] p-5 group-hover:bg-[#020617]/90 transition-colors">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mb-3 border border-blue-500/30 group-hover:scale-110 transition-transform">
                                            <span className="text-blue-400 font-bold">1</span>
                                        </div>
                                        <h4 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">Research & Analysis</h4>
                                        <p className="text-neutral-400 text-sm leading-relaxed">Deep dive into your market, competitors, and audience behavior using AI-powered analytics.</p>
                                    </div>
                                </motion.div>

                                {/* Card 2: Cyan */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="group relative rounded-2xl p-[2px] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, #22d3ee, #06b6d4, #22d3ee)',
                                        backgroundSize: '300% 300%',
                                        animation: 'borderGradientShift 6s ease-in-out infinite',
                                    }}
                                >
                                    <div className="relative z-10 h-full bg-[#020617] rounded-[14px] p-5 group-hover:bg-[#020617]/90 transition-colors">
                                        <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-3 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                                            <span className="text-cyan-400 font-bold">2</span>
                                        </div>
                                        <h4 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors">Strategy & Execution</h4>
                                        <p className="text-neutral-400 text-sm leading-relaxed">Build tailored campaigns with clear goals, timelines, and measurable KPIs.</p>
                                    </div>
                                </motion.div>

                                {/* Card 3: Purple */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="group relative rounded-2xl p-[2px] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, #a78bfa, #8b5cf6, #a78bfa)',
                                        backgroundSize: '300% 300%',
                                        animation: 'borderGradientShift 6s ease-in-out infinite',
                                    }}
                                >
                                    <div className="relative z-10 h-full bg-[#020617] rounded-[14px] p-5 group-hover:bg-[#020617]/90 transition-colors">
                                        <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mb-3 border border-purple-500/30 group-hover:scale-110 transition-transform">
                                            <span className="text-purple-400 font-bold">3</span>
                                        </div>
                                        <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">Optimization & Scaling</h4>
                                        <p className="text-neutral-400 text-sm leading-relaxed">Fine-tune performance with real-time data and scale what works best.</p>
                                    </div>
                                </motion.div>

                                {/* Card 4: Green */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="group relative rounded-2xl p-[2px] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, #4ade80, #10b981, #4ade80)',
                                        backgroundSize: '300% 300%',
                                        animation: 'borderGradientShift 6s ease-in-out infinite',
                                    }}
                                >
                                    <div className="relative z-10 h-full bg-[#020617] rounded-[14px] p-5 group-hover:bg-[#020617]/90 transition-colors">
                                        <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center mb-3 border border-green-500/30 group-hover:scale-110 transition-transform">
                                            <span className="text-green-400 font-bold">4</span>
                                        </div>
                                        <h4 className="text-white font-semibold mb-2 group-hover:text-green-300 transition-colors">Continuous Improvement</h4>
                                        <p className="text-neutral-400 text-sm leading-relaxed">Ongoing refinement through A/B testing and performance monitoring.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-3xl border border-white/10 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                                    alt="Data Analysis and Strategy"
                                    className="w-full h-full object-cover"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20" />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 bg-slate-900/90 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                                    <Zap className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-white font-semibold">AI-Powered</div>
                                    <div className="text-xs text-neutral-400">Data-Driven Results</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="relative py-20 border-t border-white/5">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                            Meet Our Team — GetMoreClients
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Meet the Team Behind<br />
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Your Growth</span>
                        </h2>
                        <p className="text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                            We're a team of strategists, analysts, designers, and creatives who work together to turn ideas into measurable business growth. Every role at GETMORECLIENTS exists for one reason — to help our clients win.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="group relative bg-black/50 border border-white/10 rounded-3xl p-6 hover:bg-black/40 transition-all duration-300"
                            >
                                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />

                                <div className="relative z-10">
                                    {/* Header with Photo and Basic Info */}
                                    <div className="flex items-start gap-4 mb-4">
                                        {/* Member Photo */}
                                        <div className="relative flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600/30 to-purple-600/20 border border-white/10 group-hover:border-blue-500/50 transition-all">
                                            {member.image ? (
                                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <Users className="h-8 w-8 text-blue-400/40" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                                            <p className="text-blue-400 text-sm font-medium mb-2">{member.role}</p>
                                            <p className="text-neutral-500 text-xs">{member.focus}</p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                                        {member.description}
                                    </p>

                                    {/* Services Owned */}
                                    <div className="mb-4">
                                        <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Services Owned</p>
                                        <div className="flex flex-wrap gap-2">
                                            {member.services.map((service, idx) => (
                                                <span
                                                    key={idx}
                                                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300"
                                                >
                                                    {service}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex gap-2 pt-4 border-t border-white/5">
                                        <a href={member.linkedin} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                            <Linkedin className="h-4 w-4 text-neutral-400 hover:text-white transition-colors" />
                                        </a>
                                        <a href={member.twitter} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                            <Twitter className="h-4 w-4 text-neutral-400 hover:text-white transition-colors" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="isolate relative z-50 text-center mt-12">
                        <Link
                            href="/careers"
                            className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-all"
                        >
                            Join Our Team
                            <ArrowLeft className="h-4 w-4 rotate-180" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20">
                <div className="isolate relative z-50 mx-auto max-w-4xl px-6">
                    <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/20 text-center">
                        <Award className="h-12 w-12 text-blue-400 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
                        <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                            Join hundreds of businesses that have transformed their marketing with GetMoreClients.
                        </p>
                        <Link
                            href="/contact"
                            className="pointer-events-auto inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity"
                        >
                            Get Started Today
                            <Sparkles className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <style jsx global>{`
                @keyframes borderGradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </main>
    );
}
