"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    Search, HomeIcon, Sparkles, Settings, CheckCircle, HelpCircle, Phone,
    ArrowLeft, ArrowRight, Target, BarChart3, Zap, TrendingUp, Globe,
    FileSearch, Code, Layers, MapPin, Link2, Brain, LineChart, DollarSign,
    Eye, Users, Cpu
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { StarsBackground } from "@/components/ui/StarsBackground"
import { ShaderServiceCard } from "@/components/ui/ShaderServiceCard"

export default function SEOPage() {
    const navItems = [
        { name: "Home", url: "/#home", icon: HomeIcon },
        { name: "Services", url: "/#services", icon: Sparkles },
        { name: "How It Works", url: "/#how-it-works", icon: Settings },
        { name: "Why Us", url: "/#why-us", icon: CheckCircle },
        { name: "FAQ", url: "/#faq", icon: HelpCircle },
        { name: "Contact", url: "/contact", icon: Phone },
    ]

    const searchChannels = [
        { icon: Globe, label: "Google Search", description: "Organic search visibility", color: "#10b981" }, // Emerald
        { icon: MapPin, label: "Local Search", description: "Google Maps & local packs", color: "#06b6d4" }, // Cyan
        { icon: Target, label: "Industry Keywords", description: "Niche-specific queries", color: "#3b82f6" }, // Blue
        { icon: Zap, label: "High-Intent Queries", description: "Ready-to-buy searches", color: "#f59e0b" } // Amber
    ]

    const optimisationAreas = [
        { title: "On-Page Optimisation", description: "Meta tags, headings, content structure, and internal linking optimised for search intent." },
        { title: "Technical SEO", description: "Site speed, mobile responsiveness, crawlability, and Core Web Vitals improvements." },
        { title: "Content Optimisation", description: "Keyword-rich, valuable content that answers user queries and establishes authority." },
        { title: "Authority Building", description: "Strategic backlink acquisition and brand mentions that boost domain authority." }
    ]

    const strengthCards = [
        {
            icon: Brain,
            title: "AI-Driven Keyword Intelligence",
            description: "Our AI identifies high-value keyword opportunities your competitors are missing."
        },
        {
            icon: FileSearch,
            title: "Technical SEO Audits",
            description: "Deep analysis of your site's technical health with actionable recommendations."
        },
        {
            icon: LineChart,
            title: "Continuous Ranking Optimisation",
            description: "Ongoing adjustments based on algorithm updates and performance data."
        }
    ]

    const seoAreas = [
        { icon: Code, title: "Technical SEO", description: "Site architecture & performance", color: "#3b82f6" },
        { icon: FileSearch, title: "On-Page SEO", description: "Content & meta optimisation", color: "#10b981" },
        { icon: Layers, title: "Content SEO", description: "Strategic content creation", color: "#06b6d4" },
        { icon: MapPin, title: "Local SEO", description: "Local search dominance", color: "#8b5cf6" },
        { icon: Link2, title: "Authority & Backlinks", description: "Domain authority building", color: "#ec4899" }
    ]

    const advantageCards = [
        {
            icon: Eye,
            title: "Search Intent Mapping",
            description: "Understanding exactly what your customers are searching for and why.",
            color: "#10b981"
        },
        {
            icon: Users,
            title: "Competitive Analysis",
            description: "Deep insights into competitor strategies and ranking opportunities.",
            color: "#06b6d4"
        },
        {
            icon: DollarSign,
            title: "ROI-Focused Optimisation",
            description: "Every action tied to measurable business outcomes and revenue.",
            color: "#3b82f6"
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
                        className="inline-flex items-center text-[#4ADE80] hover:text-[#86EFAC] transition-colors mb-12 group text-sm"
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
                                    className="inline-flex p-5 bg-[#22C55E]/10 rounded-3xl border border-[#22C55E]/20 mb-8 relative"
                                >
                                    <Search className="h-14 w-14 text-[#22C55E]" strokeWidth={1.5} />
                                    <div className="absolute inset-0 rounded-3xl bg-[#4ADE80]/20 blur-xl -z-10" />
                                </motion.div>

                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-6 text-[#F8FAFC]"
                                >
                                    SEO That Builds Authority &{" "}
                                    <span className="bg-gradient-to-r from-[#22C55E] to-[#4ADE80] bg-clip-text text-transparent">
                                        Drives Long-Term Growth
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg text-[#94A3B8] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                                >
                                    AI-powered search optimisation engineered for visibility, trust, and sustainable revenue.
                                </motion.p>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                >
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white font-semibold rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#22C55E]/25"
                                    >
                                        Get Free SEO Audit
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
                                        src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80"
                                        alt="SEO Strategy and Analysis"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
                                </div>
                                {/* Floating ranking card */}
                                <div className="absolute -bottom-6 -left-6 p-4 rounded-[16px] bg-white/[0.06] backdrop-blur-xl border border-white/[0.12]">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#22C55E]/20">
                                            <TrendingUp className="h-5 w-5 text-[#4ADE80]" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">#1</div>
                                            <div className="text-xs text-[#94A3B8]">Ranking Position</div>
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#4ADE80] text-sm font-medium mb-4">
                                    <Sparkles className="h-4 w-4" />
                                    What SEO Really Is
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-4">
                                    Beyond Keywords —{" "}
                                    <span className="text-[#4ADE80]">Building Authority</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed">
                                    SEO isn't just about rankings—it's about <span className="text-white font-medium">becoming the trusted answer</span> to your customers' questions.
                                    We combine technical excellence, strategic content, and authority building to create sustainable organic growth that compounds over time.
                                </p>
                            </div>
                            <div className="relative rounded-[16px] overflow-hidden aspect-[16/10]">
                                <Image
                                    src="/services/seo-lightbulbs.png"
                                    alt="What SEO Really Is - Building Authority"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </section>

                    {/* ===== WHERE YOUR CUSTOMERS ARE SEARCHING ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#4ADE80] text-sm font-medium mb-4">
                                <Globe className="h-4 w-4" />
                                Where Your Customers Search
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Be Found <span className="text-[#4ADE80]">Everywhere They Look</span>
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {searchChannels.map((channel, idx) => (
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
                                        <h3 className="text-2xl font-bold text-white mb-4">{channel.label}</h3>
                                        <p className="text-gray-100 text-base leading-relaxed font-medium">{channel.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Wide search image */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[20px] overflow-hidden border border-white/[0.12] aspect-[21/9]"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&q=80"
                                alt="Search Behavior and Discovery"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent" />
                        </motion.div>
                    </section>

                    {/* ===== HOW WE OPTIMISE ===== */}
                    <section id="process" className="mb-24 md:mb-32">
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
                                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                                        alt="SEO Planning and Execution"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {/* Overlay smaller image */}
                                <div className="absolute -bottom-6 -right-6 w-48 h-32 rounded-[16px] overflow-hidden border-4 border-[#020617] shadow-xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
                                        alt="SEO Analytics"
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#4ADE80] text-sm font-medium mb-4">
                                    <Settings className="h-4 w-4" />
                                    How We Optimise
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    Execution Without <span className="text-[#4ADE80]">Jargon</span>
                                </h2>
                                <div className="space-y-4">
                                    {optimisationAreas.map((area, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-[#22C55E]/20 mt-0.5">
                                                <CheckCircle className="h-4 w-4 text-[#4ADE80]" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-medium mb-1">{area.title}</h4>
                                                <p className="text-[#94A3B8] text-sm leading-relaxed">{area.description}</p>
                                            </div>
                                        </div>
                                    ))}
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#4ADE80] text-sm font-medium mb-4">
                                    <Cpu className="h-4 w-4" />
                                    Our Strength
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-8">
                                    AI + Data <span className="text-[#4ADE80]">Advantage</span>
                                </h2>
                                <div className="space-y-4">
                                    {strengthCards.map((card, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-[#22C55E] to-[#16A34A] h-fit shadow-lg shadow-[#22C55E]/25">
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
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                                    alt="Data and Intelligence"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#020617]/40" />
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== HOW SEO HELPS YOUR BUSINESS ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#4ADE80] text-sm font-medium mb-4">
                                    <TrendingUp className="h-4 w-4" />
                                    How SEO Helps Your Business
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    From Visibility to <span className="text-[#4ADE80]">Revenue</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                                    SEO isn't just about traffic—it's about <span className="text-white font-medium">qualified leads</span> that convert into paying customers.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#22C55E]/20">
                                            <ArrowRight className="h-5 w-5 text-[#4ADE80]" />
                                        </div>
                                        <span className="text-[#F8FAFC]">From <span className="text-[#94A3B8]">low visibility</span> → <span className="text-[#4ADE80] font-semibold">top rankings</span></span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#22C55E]/20">
                                            <ArrowRight className="h-5 w-5 text-[#4ADE80]" />
                                        </div>
                                        <span className="text-[#F8FAFC]">From <span className="text-[#94A3B8]">traffic</span> → <span className="text-[#4ADE80] font-semibold">qualified leads</span></span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#22C55E]/20">
                                            <ArrowRight className="h-5 w-5 text-[#4ADE80]" />
                                        </div>
                                        <span className="text-[#F8FAFC]">From <span className="text-[#94A3B8]">clicks</span> → <span className="text-[#4ADE80] font-semibold">revenue</span></span>
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
                                    alt="Growth and Success"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== SEO AREAS WE COVER ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                SEO Areas We <span className="text-[#4ADE80]">Cover</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                            {seoAreas.map((area, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative rounded-[20px] p-[2px] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                    style={{
                                        background: `linear-gradient(135deg, ${area.color}, ${area.color}44, ${area.color}88, ${area.color})`,
                                        backgroundSize: '300% 300%',
                                        animation: 'borderGradientShift 8s ease-in-out infinite',
                                    }}
                                >
                                    <div className="relative z-10 h-full bg-[#020617] rounded-[18px] p-6 group-hover:bg-[#020617]/90 transition-colors text-center flex flex-col items-center">
                                        <div
                                            className="mb-4 p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform"
                                            style={{ backgroundColor: `${area.color}22` }}
                                        >
                                            <area.icon className="h-7 w-7 text-white" style={{ filter: `drop-shadow(0 0 8px ${area.color})` }} />
                                        </div>
                                        <h3 className="text-base font-semibold text-[#F8FAFC] mb-1">{area.title}</h3>
                                        <p className="text-xs text-gray-100 font-medium">{area.description}</p>
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
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
                                alt="Tech Workspace"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/50 to-transparent" />
                        </motion.div>
                    </section>

                    {/* ===== OUR SEO ADVANTAGE ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#4ADE80] text-sm font-medium mb-4">
                                <Target className="h-4 w-4" />
                                Our SEO Advantage
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Why We <span className="text-[#4ADE80]">Outperform</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            {advantageCards.map((card, idx) => (
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
                                        <h3 className="text-xl font-semibold text-[#F8FAFC] mb-3">{card.title}</h3>
                                        <p className="text-[#94A3B8] leading-relaxed">{card.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Supporting image */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[20px] overflow-hidden border border-white/[0.12] aspect-[21/9]"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
                                alt="Strategy Discussion"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent" />
                        </motion.div>
                    </section>

                    {/* ===== EXPLORE MORE SERVICES ===== */}
                    <section className="mb-24 md:mb-32 relative z-20">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#4ADE80] text-sm font-medium mb-4">
                                <Sparkles className="h-4 w-4" />
                                More Services
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Explore Our Other <span className="text-[#4ADE80]">Services</span>
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

                            {/* Social Media Card */}
                            <ShaderServiceCard
                                icon={Users}
                                title="Social Media"
                                shortDescription="AI-powered social strategies that grow your audience and drive meaningful engagement."
                                fullDescription="A data-first approach to social growth. We move beyond posting and hoping by utilizing AI algorithms to analyze engagement patterns."
                                learnMoreHref="/services/social-media"
                                shaderIndex={0}
                            />
                        </div>
                    </section>

                    {/* ===== CONVERSION CTA ===== */}
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
                                    alt="Confidence and Clarity"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#22C55E]/90 to-[#3B82F6]/90" />
                            </div>

                            <div className="relative z-10 p-12 md:p-16 text-center">
                                {/* Background glow */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <div className="relative">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        Ready to Own Your Search Results?
                                    </h2>
                                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                                        Get a comprehensive SEO audit and discover how we can drive sustainable organic growth for your business.
                                    </p>
                                    <Link
                                        href="/contact?service=seo"
                                        className="relative z-20 inline-flex items-center px-10 py-5 bg-white text-[#16A34A] font-bold text-lg rounded-full hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-xl"
                                    >
                                        Get My Free SEO Audit
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
