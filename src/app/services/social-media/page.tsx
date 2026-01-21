"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    Share2, Home as HomeIcon, Sparkles, Settings, CheckCircle, HelpCircle, Phone,
    ArrowLeft, ArrowRight, Target, BarChart3, Zap, TrendingUp, Users,
    MessageSquare, Brain, Eye, Linkedin, Instagram, Youtube, Twitter, Calendar
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { StarsBackground } from "@/components/ui/StarsBackground"
import { ShaderServiceCard } from "@/components/ui/ShaderServiceCard"

export default function SocialMediaPage() {
    const navItems = [
        { name: "Home", url: "/#home", icon: HomeIcon },
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
    ]

    const platformCards = [
        {
            icon: Linkedin,
            title: "LinkedIn",
            description: "B2B decision-makers and professionals actively seeking solutions",
            color: "#0A66C2"
        },
        {
            icon: Instagram,
            title: "Instagram & TikTok",
            description: "Visual buyers discovering brands through engaging content",
            color: "#E4405F"
        },
        {
            icon: Twitter,
            title: "X / Twitter",
            description: "Real-time conversations and trending topics engagement",
            color: "#1DA1F2"
        }
    ]

    const strengthCards = [
        {
            icon: Brain,
            title: "Predictive Trend Analysis",
            description: "Our AI identifies trending topics and audio tracks before they peak, so you ride the wave—not chase it."
        },
        {
            icon: Sparkles,
            title: "AI Content Optimization",
            description: "Every post is optimized for engagement patterns, posting times, and platform-specific algorithms."
        },
        {
            icon: MessageSquare,
            title: "Always-On Engagement",
            description: "Automated, personalized community engagement keeps your audience connected 24/7."
        }
    ]

    const processCards = [
        {
            icon: Users,
            title: "Audience Research",
            description: "We use AI to map your customer's digital footprint, behavior, and preferences across platforms.",
            color: "#ec4899"
        },
        {
            icon: Zap,
            title: "AI Content Creation",
            description: "High-quality, trend-aligned content generated and optimized by our AI-powered creative suite.",
            color: "#a855f7"
        },
        {
            icon: BarChart3,
            title: "Performance Tracking",
            description: "Real-time analytics and predictive adjustments for maximum ROI on every campaign.",
            color: "#06b6d4"
        }
    ]

    const mastersPlatforms = [
        { icon: Linkedin, label: "LinkedIn", color: "#0A66C2" },
        { icon: Instagram, label: "Instagram", color: "#E4405F" },
        { icon: Youtube, label: "Shorts", color: "#FF0000" },
        { icon: Twitter, label: "X / Twitter", color: "#1DA1F2" }
    ]

    return (
        <div className="relative min-h-screen w-full bg-[#020617] text-white font-['Plus_Jakarta_Sans',sans-serif]">
            <NavBar items={navItems} />

            <StarsBackground speed={60} factor={0.02} starColor="#ffffff" className="pt-32 pb-24">
                <div className="max-w-[1200px] mx-auto px-6 relative z-10">

                    {/* Back Link */}
                    <Link
                        href="/#services"
                        className="inline-flex items-center text-[#60A5FA] hover:text-[#93C5FD] transition-colors mb-12 group text-sm"
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
                                    className="inline-flex p-5 bg-[#3B82F6]/10 rounded-3xl border border-[#3B82F6]/20 mb-8 relative"
                                >
                                    <Share2 className="h-14 w-14 text-[#3B82F6]" strokeWidth={1.5} />
                                    <div className="absolute inset-0 rounded-3xl bg-[#60A5FA]/20 blur-xl -z-10" />
                                </motion.div>

                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-6 text-[#F8FAFC]"
                                >
                                    Social Media That Drives{" "}
                                    <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">
                                        Real Growth
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg text-[#94A3B8] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                                >
                                    AI-powered social media strategy engineered for engagement, leads, and virality.
                                    We transform your channels into a lead-generation engine.
                                </motion.p>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                >
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white font-semibold rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#3B82F6]/25"
                                    >
                                        Get Free Social Audit
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                    <Link
                                        href="#process"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-white/[0.06] border border-white/[0.12] text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                                    >
                                        See Our Process
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
                                        src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80"
                                        alt="Social Media Marketing"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
                                </div>
                                {/* Floating engagement card */}
                                <div className="absolute -bottom-6 -left-6 p-4 rounded-[16px] bg-white/[0.06] backdrop-blur-xl border border-white/[0.12]">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#3B82F6]/20">
                                            <TrendingUp className="h-5 w-5 text-[#60A5FA]" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">+580%</div>
                                            <div className="text-xs text-[#94A3B8]">Engagement Growth</div>
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#60A5FA] text-sm font-medium mb-4">
                                    <Sparkles className="h-4 w-4" />
                                    What It Is
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-4">
                                    Data-First <span className="text-[#60A5FA]">Social Growth</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed">
                                    We move beyond "posting and hoping." Our AI algorithms analyze engagement patterns,
                                    optimal posting times, and content performance. It's not just management—it's <span className="text-white font-medium">engineered virality</span>.
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
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#60A5FA] text-sm font-medium mb-4">
                                <Users className="h-4 w-4" />
                                Where Is Your Audience
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                We Find Them <span className="text-[#60A5FA]">Everywhere</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            {platformCards.map((platform, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative rounded-3xl p-[2px] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                    style={{
                                        background: `linear-gradient(135deg, ${platform.color}, ${platform.color}44, ${platform.color}88, ${platform.color})`,
                                        backgroundSize: '300% 300%',
                                        animation: 'borderGradientShift 6s ease-in-out infinite',
                                    }}
                                >
                                    <div className="relative z-10 h-full bg-[#020617] rounded-[22px] p-8 group-hover:bg-[#020617]/90 transition-colors text-center">
                                        <div className="relative mb-6">
                                            <platform.icon
                                                className="h-12 w-12 text-white drop-shadow-lg mx-auto"
                                                style={{ filter: `drop-shadow(0 0 10px ${platform.color}88)` }}
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{platform.title}</h3>
                                        <p className="text-gray-100 text-base leading-relaxed font-medium">{platform.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Wide platform image */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[20px] overflow-hidden border border-white/[0.12] aspect-[21/9]"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80"
                                alt="Social Media Platforms"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent" />
                        </motion.div>
                    </section>

                    {/* ===== HOW WILL YOU COMMUNICATE ===== */}
                    <section className="mb-24 md:mb-32">
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
                                        alt="Social Media Content"
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#60A5FA] text-sm font-medium mb-4">
                                    <MessageSquare className="h-4 w-4" />
                                    How Will You Communicate
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    Content That <span className="text-[#60A5FA]">Converts</span>
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">High-value carousel posts</span> that educate and engage your audience.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">AI-edited short-form videos</span> (Reels/Shorts) optimized for maximum reach.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Automated community engagement</span> keeping conversations going 24/7.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Strategic story sequences</span> that build connection and trust.
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#60A5FA] text-sm font-medium mb-4">
                                    <Zap className="h-4 w-4" />
                                    Our Strength
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-8">
                                    Powered by <span className="text-[#60A5FA]">AI Intelligence</span>
                                </h2>
                                <div className="space-y-4">
                                    {strengthCards.map((card, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] h-fit shadow-lg shadow-[#3B82F6]/25">
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

                    {/* ===== HOW WE CAN HELP ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#60A5FA] text-sm font-medium mb-4">
                                    <TrendingUp className="h-4 w-4" />
                                    How We Can Help
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    From Posting to <span className="text-[#60A5FA]">Lead Generation</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                                    We transform your social channels from a broadcast tool into a <span className="text-white font-medium">revenue-generating engine</span>.
                                    Increase your follower count with high-intent users who are actually interested in buying.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-500/20">
                                            <CheckCircle className="h-5 w-5 text-green-400" />
                                        </div>
                                        <span className="text-[#F8FAFC]">Likes → Qualified Leads</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-500/20">
                                            <CheckCircle className="h-5 w-5 text-green-400" />
                                        </div>
                                        <span className="text-[#F8FAFC]">Followers → Paying Customers</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-500/20">
                                            <CheckCircle className="h-5 w-5 text-green-400" />
                                        </div>
                                        <span className="text-[#F8FAFC]">Engagement → Revenue</span>
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

                    {/* ===== PLATFORMS WE MASTER ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Platforms We <span className="text-[#60A5FA]">Master</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            {mastersPlatforms.map((platform, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative rounded-[20px] p-[2px] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                    style={{
                                        background: `linear-gradient(135deg, ${platform.color}, ${platform.color}44, ${platform.color}88, ${platform.color})`,
                                        backgroundSize: '300% 300%',
                                        animation: 'borderGradientShift 8s ease-in-out infinite',
                                    }}
                                >
                                    <div className="relative z-10 h-full bg-[#020617] rounded-[18px] p-6 group-hover:bg-[#020617]/90 transition-colors text-center flex flex-col items-center">
                                        <div
                                            className="mb-4 p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform"
                                            style={{ backgroundColor: `${platform.color}22` }}
                                        >
                                            <platform.icon className="h-7 w-7 text-white" style={{ filter: `drop-shadow(0 0 8px ${platform.color})` }} />
                                        </div>
                                        <h3 className="text-base font-semibold text-[#F8FAFC] mb-1">{platform.label}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* ===== OUR CORE PROCESS ===== */}
                    <section id="process" className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#60A5FA] text-sm font-medium mb-4">
                                    <Settings className="h-4 w-4" />
                                    Our Core Process
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-8">
                                    How We <span className="text-[#60A5FA]">Deliver Results</span>
                                </h2>
                                <div className="flex flex-col gap-4 mb-8">
                                    {processCards.map((card, idx) => (
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
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#60A5FA] text-sm font-medium mb-4">
                                <Sparkles className="h-4 w-4" />
                                More Services
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Explore Our Other <span className="text-[#60A5FA]">Services</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Animations Card */}
                            <ShaderServiceCard
                                icon={Zap}
                                title="Animations"
                                shortDescription="Motion graphics that bring your brand to life and engage your audience effectively."
                                fullDescription="We bring your brand to life through interactive and engaging animations. Our animation process is enhanced with AI-assisted scripting and visual flow optimization."
                                learnMoreHref="/services/animations"
                                shaderIndex={7}
                            />

                            {/* PPC Card */}
                            <ShaderServiceCard
                                icon={Target}
                                title="PPC Advertising"
                                shortDescription="AI-powered campaigns that maximize every dollar and turn clicks into customers."
                                fullDescription="Pay-per-click marketing is a powerful paid advertising model used to build brand awareness, promote offerings, and gain instant visibility with AI-based bidding."
                                learnMoreHref="/services/ppc"
                                shaderIndex={2}
                            />
                        </div>

                        {/* More Services Button */}
                        <div className="text-center mt-10 relative z-[150]">
                            <Link
                                href="/#services"
                                className="relative z-[200] inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer"
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
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                                    alt="Team Collaboration"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/90 to-[#2563EB]/90" />
                            </div>

                            <div className="relative z-10 p-12 md:p-16 text-center">
                                {/* Background glow */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <div className="relative">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        Ready to Scale Your Social Presence?
                                    </h2>
                                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                                        Let's build your lead-generation engine together with our data-first, AI-powered approach.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="isolate relative z-[100] pointer-events-auto inline-flex items-center px-10 py-5 bg-white text-[#2563EB] font-bold text-lg rounded-full hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-xl"
                                        style={{ pointerEvents: 'auto' }}
                                    >
                                        Get Started Now
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </section>

                </div>
            </StarsBackground>

            <Footer />

            <style jsx global>{`
                @keyframes borderGradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </div>
    )
}
