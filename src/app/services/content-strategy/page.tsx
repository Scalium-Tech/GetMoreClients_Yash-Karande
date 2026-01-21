"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    FileText, HomeIcon, Sparkles, Settings, CheckCircle, HelpCircle, Phone,
    ArrowLeft, ArrowRight, Target, BarChart3, Zap, TrendingUp, PenTool,
    Eye, Users, Mail, Video, MessageSquare, Brain, Calendar
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { StarsBackground } from "@/components/ui/StarsBackground"
import { ShaderServiceCard } from "@/components/ui/ShaderServiceCard"

export default function ContentStrategyPage() {
    const navItems = [
        { name: "Home", url: "/#home", icon: HomeIcon },
        { name: "Services", url: "/#services", icon: Sparkles },
        { name: "How It Works", url: "/#how-it-works", icon: Settings },
        { name: "Why Us", url: "/#why-us", icon: CheckCircle },
        { name: "FAQ", url: "/#faq", icon: HelpCircle },
        { name: "Contact", url: "/contact", icon: Phone },
    ]

    const audienceChannels = [
        {
            icon: FileText,
            title: "Blogs & Articles",
            description: "Long-form content that builds SEO authority and trust",
            color: "#8b5cf6" // Violet
        },
        {
            icon: MessageSquare,
            title: "Social Media",
            description: "Engaging posts that spark conversations and shares",
            color: "#ec4899" // Pink
        },
        {
            icon: Video,
            title: "Video Content",
            description: "Visual storytelling that connects and converts",
            color: "#f59e0b" // Amber
        },
        {
            icon: Mail,
            title: "Email & Newsletters",
            description: "Nurturing sequences that build lasting relationships",
            color: "#3b82f6" // Blue
        }
    ]

    const strengthCards = [
        {
            icon: Brain,
            title: "Predictive Content Intelligence",
            description: "AI analyzes trends to recommend topics that will perform best before you create them."
        },
        {
            icon: Eye,
            title: "Trend & Competitor Analysis",
            description: "Stay ahead by understanding what's working in your industry and what gaps exist."
        },
        {
            icon: Users,
            title: "Audience Behavior Modeling",
            description: "Deep insights into how your audience consumes content across platforms."
        }
    ]

    const contentTypes = [
        { icon: FileText, title: "Blog Posts", description: "Long-form SEO content", color: "#f59e0b" },
        { icon: Zap, title: "Social Content", description: "Engaging platform posts", color: "#3b82f6" },
        { icon: Video, title: "Video Scripts", description: "Visual storytelling", color: "#ec4899" },
        { icon: Mail, title: "Email Sequences", description: "Nurturing campaigns", color: "#8b5cf6" }
    ]

    const advantages = [
        {
            icon: Target,
            title: "Topic Research",
            description: "AI-powered discovery of high-value topics your audience is actively searching for.",
            color: "#8b5cf6"
        },
        {
            icon: Calendar,
            title: "Content Calendar",
            description: "Strategic planning that aligns content with business goals, seasons, and trends.",
            color: "#a855f7"
        },
        {
            icon: BarChart3,
            title: "Performance Analysis",
            description: "Data-driven optimization based on what's actually driving results.",
            color: "#7c3aed"
        }
    ]

    return (
        <div className="relative min-h-screen w-full bg-[#020617] text-white font-['Plus_Jakarta_Sans',sans-serif]">
            <NavBar items={navItems} />

            <StarsBackground speed={60} factor={0.02} starColor="#ffffff" className="pt-32 pb-24">
                <div className="max-w-[1200px] mx-auto px-6 relative z-10">

                    {/* Back Link */}
                    <Link
                        href="/#services"
                        className="inline-flex items-center text-[#FBBF24] hover:text-[#FCD34D] transition-colors mb-12 group text-sm"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>

                    {/* ===== HERO SECTION ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                            <div className="flex-1 text-center lg:text-left">
                                {/* Floating Icon */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="inline-flex p-5 bg-[#F59E0B]/10 rounded-3xl border border-[#F59E0B]/20 mb-8 relative"
                                >
                                    <FileText className="h-14 w-14 text-[#F59E0B]" strokeWidth={1.5} />
                                    <div className="absolute inset-0 rounded-3xl bg-[#FBBF24]/20 blur-xl -z-10" />
                                </motion.div>

                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-6 text-[#F8FAFC]"
                                >
                                    Content Strategy That Builds{" "}
                                    <span className="bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] bg-clip-text text-transparent">
                                        Authority & Growth
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg text-[#94A3B8] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                                >
                                    AI-driven content planning that reaches the right audience at the right time.
                                    Transform your content from random posts into a strategic growth engine.
                                </motion.p>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                >
                                    <Link
                                        href="/contact"
                                        className="relative z-20 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white font-semibold rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#F59E0B]/25"
                                    >
                                        Get My Content Strategy
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                    <Link
                                        href="#how-it-works"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-white/[0.06] border border-white/[0.12] text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                                    >
                                        See How It Works
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Hero Image */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex-1 relative"
                            >
                                <div className="relative rounded-[20px] overflow-hidden border border-white/[0.12] aspect-[4/3]">
                                    <Image
                                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
                                        alt="Content Strategy Team"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
                                </div>
                                {/* Floating stats card */}
                                <div className="absolute -bottom-6 -left-6 p-4 rounded-[16px] bg-white/[0.06] backdrop-blur-xl border border-white/[0.12]">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#F59E0B]/20">
                                            <TrendingUp className="h-5 w-5 text-[#FBBF24]" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">+420%</div>
                                            <div className="text-xs text-[#94A3B8]">Organic Traffic</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== WHAT IT IS - Story Card ===== */}
                    <section className="mb-24 md:mb-32">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-12 rounded-[20px] bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] grid md:grid-cols-[1fr,1.2fr] gap-8 items-center"
                        >
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#FBBF24] text-sm font-medium mb-4">
                                    <Sparkles className="h-4 w-4" />
                                    What It Is
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-4">
                                    Strategic Content, <span className="text-[#FBBF24]">Not Random Posts</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed">
                                    AI-driven planning that identifies trending topics, optimal formats, and platform-specific preferences.
                                    We create content strategies that <span className="text-white font-medium">resonate with your audience</span> and drive measurable results.
                                </p>
                            </div>
                            <div className="relative rounded-[16px] overflow-hidden aspect-[16/10]">
                                <Image
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                                    alt="Data Analytics Dashboard"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </section>

                    {/* ===== WHERE IS YOUR AUDIENCE ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#FBBF24] text-sm font-medium mb-4">
                                <Users className="h-4 w-4" />
                                Where Is Your Audience
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                We Meet Them <span className="text-[#FBBF24]">Everywhere</span>
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {audienceChannels.map((channel, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative rounded-3xl p-[2px] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                    style={{
                                        background: `linear-gradient(135deg, ${channel.color}, ${channel.color}44, ${channel.color}88, ${channel.color})`,
                                        backgroundSize: '300% 300%',
                                        animation: 'borderGradientShift 6s ease-in-out infinite',
                                    }}
                                >
                                    <div className="relative z-10 h-full bg-[#020617] rounded-[22px] p-8 group-hover:bg-[#020617]/90 transition-colors text-center">
                                        <div className="relative mb-6">
                                            <channel.icon
                                                className="h-12 w-12 text-white drop-shadow-lg mx-auto"
                                                style={{ filter: `drop-shadow(0 0 10px ${channel.color}88)` }}
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{channel.title}</h3>
                                        <p className="text-gray-100 text-base leading-relaxed font-medium">{channel.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Wide audience image */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[20px] overflow-hidden border border-white/[0.12] aspect-[21/9]"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
                                alt="Team Collaboration"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent" />
                        </motion.div>
                    </section>

                    {/* ===== HOW WILL YOU COMMUNICATE ===== */}
                    <section id="how-it-works" className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Image Side */}
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="rounded-[20px] overflow-hidden border border-white/[0.12] aspect-[4/3]">
                                    <Image
                                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                                        alt="Team Strategy Meeting"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {/* Overlay smaller image */}
                                <div className="absolute -bottom-6 -right-6 w-48 h-32 rounded-[16px] overflow-hidden border-4 border-[#020617] shadow-xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&q=80"
                                        alt="Content Creation"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Content Side */}
                            <motion.div
                                initial={{ x: 30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#FBBF24] text-sm font-medium mb-4">
                                    <PenTool className="h-4 w-4" />
                                    How Will You Communicate
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    Content That <span className="text-[#FBBF24]">Works Together</span>
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Blog posts for SEO</span> that build long-term organic authority.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Social content for engagement</span> that keeps your brand top-of-mind.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Videos for connection</span> that humanize your brand and build trust.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Email for nurturing</span> that converts readers into customers.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== OUR STRENGTH ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#FBBF24] text-sm font-medium mb-4">
                                    <Zap className="h-4 w-4" />
                                    Our Strength
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-8">
                                    Powered by <span className="text-[#FBBF24]">AI Intelligence</span>
                                </h2>
                                <div className="space-y-4">
                                    {strengthCards.map((card, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] h-fit shadow-lg shadow-[#F59E0B]/25">
                                                <card.icon className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-[#F8FAFC] mb-1">{card.title}</h3>
                                                <p className="text-[#94A3B8] leading-relaxed text-sm">{card.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ x: 30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="relative rounded-[20px] overflow-hidden border border-white/[0.12] aspect-[4/3]"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
                                    alt="AI Technology"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#020617]/40" />
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== CONTENT WE CREATE ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Content We <span className="text-[#FBBF24]">Create</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            {contentTypes.map((content, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative rounded-[20px] p-[2px] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                    style={{
                                        background: `linear-gradient(135deg, ${content.color}, ${content.color}44, ${content.color}88, ${content.color})`,
                                        backgroundSize: '300% 300%',
                                        animation: 'borderGradientShift 8s ease-in-out infinite',
                                    }}
                                >
                                    <div className="relative z-10 h-full bg-[#020617] rounded-[18px] p-6 group-hover:bg-[#020617]/90 transition-colors text-center flex flex-col items-center">
                                        <div
                                            className="mb-4 p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform"
                                            style={{ backgroundColor: `${content.color}22` }}
                                        >
                                            <content.icon className="h-7 w-7 text-white" style={{ filter: `drop-shadow(0 0 8px ${content.color})` }} />
                                        </div>
                                        <h3 className="text-base font-semibold text-[#F8FAFC] mb-1">{content.title}</h3>
                                        <p className="text-xs text-gray-100 font-medium">{content.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Background image */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[20px] overflow-hidden border border-white/[0.12] aspect-[21/9]"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80"
                                alt="Content Creation Workspace"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/50 to-transparent" />
                        </motion.div>
                    </section>

                    {/* ===== HOW WE CAN HELP ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#FBBF24] text-sm font-medium mb-4">
                                    <TrendingUp className="h-4 w-4" />
                                    How We Can Help
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    From Posts to <span className="text-[#FBBF24]">Business Asset</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                                    Transform your content from random posts into a <span className="text-white font-medium">strategic asset</span> that
                                    builds authority, drives organic traffic, and converts readers into customers.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-500/20">
                                            <CheckCircle className="h-5 w-5 text-green-400" />
                                        </div>
                                        <span className="text-[#F8FAFC]">Random Posts → Strategic Authority</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-500/20">
                                            <CheckCircle className="h-5 w-5 text-green-400" />
                                        </div>
                                        <span className="text-[#F8FAFC]">Traffic → Qualified Conversions</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-500/20">
                                            <CheckCircle className="h-5 w-5 text-green-400" />
                                        </div>
                                        <span className="text-[#F8FAFC]">Followers → Revenue Growth</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ x: 30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="relative rounded-[20px] overflow-hidden border border-white/[0.12] aspect-[4/3]"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&q=80"
                                    alt="Business Growth"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== OUR CONTENT ADVANTAGE ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#FBBF24] text-sm font-medium mb-4">
                                    <Settings className="h-4 w-4" />
                                    Our Content Advantage
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-8">
                                    How We <span className="text-[#FBBF24]">Deliver Results</span>
                                </h2>
                                <div className="flex flex-col gap-4 mb-8">
                                    {advantages.map((card, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ x: -20, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="group relative rounded-[20px] p-[2px] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                            style={{
                                                background: `linear-gradient(135deg, ${card.color}, ${card.color}44, ${card.color}88, ${card.color})`,
                                                backgroundSize: '300% 300%',
                                                animation: 'borderGradientShift 6s ease-in-out infinite',
                                            }}
                                        >
                                            <div className="relative z-10 h-full bg-[#020617] rounded-[18px] p-6 group-hover:bg-[#020617]/90 transition-colors flex items-center gap-6">
                                                <div
                                                    className="shrink-0 p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform shadow-lg"
                                                    style={{
                                                        background: `linear-gradient(to bottom right, ${card.color}, ${card.color}dd)`,
                                                        boxShadow: `0 10px 20px -5px ${card.color}44`
                                                    }}
                                                >
                                                    <card.icon className="h-7 w-7 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold text-[#F8FAFC] mb-1">{card.title}</h3>
                                                    <p className="text-[#94A3B8] leading-relaxed text-sm">{card.description}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ x: 30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="relative rounded-[20px] overflow-hidden border border-white/[0.12] aspect-[4/3]"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                                    alt="Marketing Team"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== EXPLORE MORE SERVICES ===== */}
                    <section className="mb-24 md:mb-32 relative z-20">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#FBBF24] text-sm font-medium mb-4">
                                <Sparkles className="h-4 w-4" />
                                More Services
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Explore Our Other <span className="text-[#FBBF24]">Services</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">

                            {/* PPC Card */}
                            <ShaderServiceCard
                                icon={Target}
                                title="PPC Advertising"
                                shortDescription="AI-powered campaigns that maximize every dollar and turn clicks into customers."
                                fullDescription="Pay-per-click marketing is a powerful paid advertising model used to build brand awareness, promote offerings, and gain instant visibility with AI-based bidding strategies."
                                learnMoreHref="/services/ppc"
                                shaderIndex={2}
                            />

                            {/* Brand Assets Card */}
                            <ShaderServiceCard
                                icon={Eye}
                                title="Brand Assets"
                                shortDescription="AI-driven visual identity that creates memorable, consistent brand experiences."
                                fullDescription="Brand perception is shaped by visuals. We use AI-powered design consistency tools and brand intelligence to create cohesive, memorable brand assets."
                                learnMoreHref="/services/brand-assets"
                                shaderIndex={3}
                            />
                        </div>

                        {/* More Services Button */}
                        <div className="text-center mt-10 relative z-[150]">
                            <Link
                                href="/#services"
                                className="relative z-[200] inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-[#FBBF24]/30 transition-all group cursor-pointer"
                            >
                                View All Services
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </section>
                    {/* ===== STRONG CONVERSION CTA ===== */}
                    <section className="mb-16">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[20px] overflow-hidden"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
                                    alt="Strategy Session"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B]/90 to-[#D97706]/90" />
                            </div>

                            <div className="relative z-10 p-12 md:p-16 text-center">
                                {/* Background glow */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <div className="relative">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        Ready to Build Your Content Authority?
                                    </h2>
                                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                                        Let's create a strategic content engine that turns readers into loyal customers with our AI-powered planning.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="isolate relative z-[100] pointer-events-auto inline-flex items-center px-10 py-5 bg-white text-[#D97706] font-bold text-lg rounded-full hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-xl"
                                    >
                                        Get Started Now
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </section>

                </div >
            </StarsBackground >

            <Footer />

            <style jsx global>{`
                @keyframes borderGradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </div >
    )
}
