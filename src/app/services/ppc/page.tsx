"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    MousePointerClick, HomeIcon, Sparkles, Settings, CheckCircle, HelpCircle, Phone,
    ArrowLeft, ArrowRight, Target, BarChart3, Zap, TrendingUp, DollarSign, Users,
    Search, Globe, MonitorPlay, Layout, LineChart, PieChart, Brain, Layers,
    MessageSquare, Eye, Sparkle, Calendar
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { StarsBackground } from "@/components/ui/StarsBackground"
import { ShaderServiceCard } from "@/components/ui/ShaderServiceCard"

export default function PPCPage() {
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
            icon: Search,
            title: "Google Search",
            description: "Capture high-intent buyers actively searching for your solutions",
            color: "#7C5CE6"
        },
        {
            icon: Users,
            title: "Meta Ads",
            description: "Reach and retarget decision-makers on Instagram & Facebook",
            color: "#4F46E5"
        },
        {
            icon: MonitorPlay,
            title: "YouTube",
            description: "Build trust and demand through powerful video storytelling",
            color: "#7C5CE6"
        },
        {
            icon: Globe,
            title: "Display Networks",
            description: "Stay visible across the web with strategic banner placement",
            color: "#4F46E5"
        }
    ]

    const strengthCards = [
        {
            icon: Brain,
            title: "AI Bid Optimization",
            description: "Our algorithms adjust bids in real time to maximize conversions while controlling costs."
        },
        {
            icon: LineChart,
            title: "Real-Time Data Analysis",
            description: "We monitor performance continuously, not monthly — spotting opportunities and risks instantly."
        },
        {
            icon: Target,
            title: "High-Intent Click Capture",
            description: "We prioritize quality over volume, focusing spend on users most likely to convert."
        }
    ]

    const outcomes = [
        { before: "Wasted Ad Spend", after: "Profitable Campaigns", icon: DollarSign },
        { before: "Random Clicks", after: "Qualified Leads", icon: Users },
        { before: "Unpredictable Results", after: "Scalable Growth", icon: TrendingUp }
    ]

    const mastersPlatforms = [
        { name: "Google Ads", icon: Search, color: "#7C5CE6", description: "Search, Shopping & Display mastery" },
        { name: "Meta Ads", icon: Users, color: "#4F46E5", description: "Facebook & Instagram precision" },
        { name: "LinkedIn Ads", icon: Layers, color: "#7C5CE6", description: "B2B decision-maker targeting" },
        { name: "Microsoft Ads", icon: Globe, color: "#4F46E5", description: "High-value intent capture" }
    ]

    const advantageFeatures = [
        {
            icon: Zap,
            title: "Smart Bidding",
            description: "Automated decisions guided by performance data.",
            color: "#7C5CE6"
        },
        {
            icon: Users,
            title: "Audience Targeting",
            description: "Segmented, intent-based audiences.",
            color: "#4F46E5"
        },
        {
            icon: PieChart,
            title: "Conversion Tracking",
            description: "End-to-end visibility from click to revenue.",
            color: "#7C5CE6"
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
                        className="inline-flex items-center text-[#A78BFA] hover:text-[#C4B5FD] transition-colors mb-12 group text-sm"
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
                                    className="inline-flex p-5 bg-[#7C5CE6]/10 rounded-3xl border border-[#7C5CE6]/20 mb-8 relative"
                                >
                                    <MousePointerClick className="h-14 w-14 text-[#7C5CE6]" strokeWidth={1.5} />
                                    <div className="absolute inset-0 rounded-3xl bg-[#A78BFA]/20 blur-xl -z-10" />
                                </motion.div>

                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-6 text-[#F8FAFC]"
                                >
                                    PPC Advertising That Turns{" "}
                                    <span className="bg-gradient-to-r from-[#7C5CE6] to-[#4F46E5] bg-clip-text text-transparent">
                                        Clicks Into Customers
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg text-[#94A3B8] mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                                >
                                    AI-powered pay-per-click campaigns designed to maximize ROI, eliminate wasted spend, and scale revenue predictably.
                                </motion.p>

                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.25 }}
                                    className="text-base text-[#94A3B8]/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                                >
                                    We don’t chase clicks. We engineer paid advertising systems that attract high-intent buyers and convert them into real customers.
                                </motion.p>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                >
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#7C5CE6] to-[#4F46E5] text-white font-semibold rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#7C5CE6]/25"
                                    >
                                        Get Free PPC Audit
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
                                        src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80"
                                        alt="PPC Analytics Hero"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
                                </div>
                                {/* Floating stats card */}
                                <div className="absolute -bottom-6 -left-6 p-4 rounded-[16px] bg-white/[0.06] backdrop-blur-xl border border-white/[0.12]">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#7C5CE6]/20">
                                            <TrendingUp className="h-5 w-5 text-[#A78BFA]" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">+280%</div>
                                            <div className="text-xs text-[#94A3B8]">Revenue Scale</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== WHAT PPC IS - Story Card (Expanded) ===== */}
                    <section className="mb-24 md:mb-32">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-12 rounded-[24px] bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] grid lg:grid-cols-[1fr,1.2fr] gap-12 items-center overflow-hidden"
                        >
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C5CE6]/10 border border-[#7C5CE6]/20 text-[#A78BFA] text-sm font-medium mb-6">
                                    <Sparkles className="h-4 w-4" />
                                    What PPC Really Is
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    Strategic Spending, <span className="text-[#A78BFA]">Measured Growth</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                                    Pay-per-click advertising is not about spending more — it’s about spending smarter.
                                    At GetMoreClients, PPC is a data-driven growth channel where every click, impression, and conversion is measured, optimized, and aligned with your business goals.
                                </p>
                                <p className="text-[#94A3B8] text-lg leading-relaxed">
                                    Our AI-powered systems continuously analyze performance to ensure your ads reach the right people at the right moment.
                                </p>
                            </div>
                            <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] border border-white/[0.08]">
                                <Image
                                    src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80"
                                    alt="Data Visualization"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </section>

                    {/* ===== WHERE YOUR AUDIENCE IS - Visual Journey ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C5CE6]/10 border border-[#7C5CE6]/20 text-[#A78BFA] text-sm font-medium mb-4">
                                <Globe className="h-4 w-4" />
                                Visual Journey
                            </div>
                            <h2 className="text-2xl md:text-[42px] md:leading-[52px] font-bold text-[#F8FAFC] mb-6">
                                Be Found <span className="text-[#A78BFA]">Everywhere They Look</span>
                            </h2>
                            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
                                Your customers don’t live on one platform — and neither should your ads. We orchestrate cross-platform journeys that convert.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[24px] overflow-hidden border border-white/[0.12] aspect-[21/9]"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
                                alt="Audience Digital Journey"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
                        </motion.div>
                    </section>

                    {/* ===== HOW WE COMMUNICATE - Creative Execution ===== */}
                    <section id="how-it-works" className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ x: -40, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <div className="space-y-4 relative">
                                    <div className="relative rounded-[24px] overflow-hidden border border-white/[0.12] aspect-[16/10] shadow-2xl">
                                        <Image
                                            src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80"
                                            alt="Creative Ad Design"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-8 -right-8 w-2/3 rounded-[24px] overflow-hidden border border-white/[0.12] aspect-[4/3] shadow-2xl hidden md:block z-20">
                                        <Image
                                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                                            alt="Conversion Optimization"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ x: 40, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C5CE6]/10 border border-[#7C5CE6]/20 text-[#A78BFA] text-sm font-medium mb-6">
                                    <Layout className="h-4 w-4" />
                                    Creative Execution
                                </div>
                                <h2 className="text-3xl md:text-[42px] md:leading-[52px] font-bold text-[#F8FAFC] mb-8">
                                    Ads That Feel <span className="text-[#A78BFA]">Relevant, Not Intrusive</span>
                                </h2>

                                <div className="space-y-6 mb-10">
                                    {[
                                        "Clear messaging aligned with search intent",
                                        "Scroll-stopping visuals and ad formats",
                                        "Conversion-optimized landing pages",
                                        "Continuous creative testing and refinement"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="p-1 rounded-full bg-[#7C5CE6]/20 border border-[#7C5CE6]/30 group-hover:bg-[#7C5CE6] transition-colors">
                                                <CheckCircle className="h-4 w-4 text-[#A78BFA] group-hover:text-white" />
                                            </div>
                                            <span className="text-lg text-[#94A3B8] group-hover:text-white transition-colors">{text}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-[#94A3B8] text-lg leading-relaxed">
                                    We design ads that feel relevant, not intrusive — and landing experiences that turn interest into action.
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== OUR STRENGTH - Authority Section ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C5CE6]/10 border border-[#7C5CE6]/20 text-[#A78BFA] text-sm font-medium mb-6">
                                    <Zap className="h-4 w-4" />
                                    Our Strength
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-8">
                                    Systems, Data, <span className="text-[#A78BFA]">and Intelligence</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg mb-10 leading-relaxed">
                                    What makes our PPC campaigns perform consistently isn’t guesswork — it’s systems, data, and intelligence working in perfect harmony.
                                </p>
                                <div className="space-y-4">
                                    {strengthCards.map((card, idx) => (
                                        <div key={idx} className="flex items-start gap-4 flex-col sm:flex-row">
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-[#7C5CE6] to-[#4F46E5] h-fit shrink-0 shadow-lg shadow-[#7C5CE6]/25">
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
                                className="relative rounded-[20px] overflow-hidden border border-white/[0.12] aspect-[4/3] shadow-2xl"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                                    alt="Team Working with Data"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#020617]/40" />
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== HOW WE HELP - Outcome-Focused Narrative ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="order-2 lg:order-1 relative rounded-[24px] overflow-hidden border border-white/[0.12] aspect-[4/3] shadow-2xl"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80"
                                    alt="Outcome Success"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/40 to-transparent" />
                            </motion.div>

                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="order-1 lg:order-2"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C5CE6]/10 border border-[#7C5CE6]/20 text-[#A78BFA] text-sm font-medium mb-6">
                                    <TrendingUp className="h-4 w-4" />
                                    Outcome Focused
                                </div>
                                <h2 className="text-3xl md:text-[42px] md:leading-[52px] font-bold text-[#F8FAFC] mb-10">
                                    Scalable Growth, <span className="text-[#A78BFA]">No More Wasted Spend</span>
                                </h2>

                                <div className="space-y-8 mb-10">
                                    {outcomes.map((outcome, i) => (
                                        <div key={i} className="flex items-center gap-6 group">
                                            <div className="relative">
                                                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-[#EF4444] group-hover:scale-110 transition-transform">
                                                    <outcome.icon className="h-6 w-6" />
                                                </div>
                                                <div className="absolute -bottom-1 -right-1 text-xs font-bold bg-red-500 text-white rounded-full px-1.5 line-through decoration-white/50">OLD</div>
                                            </div>
                                            <ArrowRight className="h-5 w-5 text-[#94A3B8]" />
                                            <div className="relative">
                                                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-[#10B981] group-hover:scale-110 transition-transform">
                                                    <outcome.icon className="h-6 w-6" />
                                                </div>
                                                <div className="absolute -bottom-1 -right-1 text-xs font-bold bg-green-500 text-white rounded-full px-1.5 shadow-lg shadow-green-500/40">NEW</div>
                                            </div>
                                            <span className="text-xl font-bold text-white group-hover:text-[#A78BFA] transition-colors">{outcome.after}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                                        <div className="text-2xl font-bold text-[#A78BFA]">Lower CPA</div>
                                        <div className="text-xs text-[#94A3B8]">Cost Per Acquisition</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                                        <div className="text-2xl font-bold text-[#A78BFA]">Higher ROAS</div>
                                        <div className="text-xs text-[#94A3B8]">Return On Ad Spend</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== PLATFORMS WE MASTER - Expanded ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                Platforms We <span className="text-[#A78BFA]">Master</span>
                            </h2>
                            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
                                We don’t “test” platforms on your budget — we master them. Every penny is allocated based on deep expertise and historical performance data.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 relative z-10">
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
                                        <h3 className="text-base font-semibold text-[#F8FAFC] mb-1">{platform.name}</h3>
                                        <p className="text-xs text-gray-100 font-medium">{platform.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[24px] overflow-hidden border border-white/[0.12] aspect-[21/9] shadow-2xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
                                alt="Mastery and Execution"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/20 to-transparent" />
                        </motion.div>
                    </section>

                    {/* ===== OUR PPC ADVANTAGE - Deeper Value ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C5CE6]/10 border border-[#7C5CE6]/20 text-[#A78BFA] text-sm font-medium mb-6">
                                    <Target className="h-4 w-4" />
                                    Our PPC Advantage
                                </div>
                                <h2 className="text-3xl md:text-[42px] md:leading-[52px] font-bold text-[#F8FAFC] mb-8">
                                    Precision, Accountability, <span className="text-[#A78BFA]">and Intelligence</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg mb-10 leading-relaxed">
                                    Every campaign is built on a foundation of intelligence, precision, and accountability. We don't just send reports; we drive results that impact your bottom line.
                                </p>
                                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                                    {advantageFeatures.map((card, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ y: 30, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="group relative rounded-[20px] p-[2px] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                            style={{
                                                background: `linear-gradient(135deg, ${card.color}, ${card.color}44, ${card.color}88, ${card.color})`,
                                                backgroundSize: '300% 300%',
                                                animation: 'borderGradientShift 6s ease-in-out infinite',
                                            }}
                                        >
                                            <div className="relative z-10 h-full bg-[#020617] rounded-[18px] p-8 group-hover:bg-[#020617]/90 transition-colors">
                                                <div
                                                    className="mb-6 p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform shadow-lg"
                                                    style={{
                                                        background: `linear-gradient(to bottom right, ${card.color}, ${card.color}dd)`,
                                                        boxShadow: `0 10px 20px -5px ${card.color}44`
                                                    }}
                                                >
                                                    <card.icon className="h-7 w-7 text-white" />
                                                </div>
                                                <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">{card.title}</h3>
                                                <p className="text-[#94A3B8] leading-relaxed">{card.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ x: 30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="relative rounded-[24px] overflow-hidden border border-white/[0.12] aspect-[5/6] shadow-2xl"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                                    alt="Advantage Display"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/20 to-transparent" />
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== EXPLORE MORE SERVICES ===== */}
                    <section className="mb-24 md:mb-32 relative z-20">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7C5CE6]/10 border border-[#7C5CE6]/20 text-[#A78BFA] text-sm font-medium mb-4">
                                <Sparkles className="h-4 w-4" />
                                More Services
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Explore Our Other <span className="text-[#A78BFA]">Services</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* SEO Card */}
                            <ShaderServiceCard
                                icon={Target}
                                title="Search Engine Optimization"
                                shortDescription="AI-powered SEO strategies to boost your organic visibility and drive sustainable traffic."
                                fullDescription="The next evolution of organic search. We combine technical expertise with Natural Language Processing (NLP) to understand exactly what your customers are asking."
                                learnMoreHref="/services/seo"
                                shaderIndex={1}
                            />

                            {/* Content Strategy Card */}
                            <ShaderServiceCard
                                icon={Users}
                                title="Content Strategy"
                                shortDescription="AI-driven content planning that builds authority and drives consistent growth."
                                fullDescription="Content strategy involves the planning, creation, distribution, and management of content across platforms. Our AI-powered content strategy focuses on relevance."
                                learnMoreHref="/services/content-strategy"
                                shaderIndex={4}
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
                            className="relative p-12 md:p-16 rounded-[24px] overflow-hidden shadow-2xl"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                                    alt="Revenue Success"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#7C5CE6]/90 to-[#4F46E5]/90" />
                            </div>

                            {/* Background glow and decorative elements */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10 text-center">
                                <h2 className="text-3xl md:text-[42px] md:leading-[52px] font-bold text-white mb-6">
                                    Turn Your Ad Spend Into Revenue
                                </h2>
                                <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
                                    Let’s uncover missed opportunities, fix inefficiencies, and build a PPC system designed to grow with your business.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center px-10 py-5 bg-white text-[#4F46E5] font-bold text-lg rounded-full hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#4F46E5]/40"
                                >
                                    Book Free PPC Strategy Call
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
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
