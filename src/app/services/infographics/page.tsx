"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    BarChart3, HomeIcon, Sparkles, Settings, CheckCircle, HelpCircle, Phone,
    ArrowLeft, ArrowRight, Target, Zap, TrendingUp, PieChart,
    Eye, Users, Share2, FileText, Presentation, Megaphone, Brain, Palette, Globe
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { StarsBackground } from "@/components/ui/StarsBackground"
import { ShaderServiceCard } from "@/components/ui/ShaderServiceCard"

export default function InfographicsPage() {
    const navItems = [
        { name: "Home", url: "/#home", icon: HomeIcon },
        { name: "Services", url: "/#services", icon: Sparkles },
        { name: "How It Works", url: "/#how-it-works", icon: Settings },
        { name: "Why Us", url: "/#why-us", icon: CheckCircle },
        { name: "FAQ", url: "/#faq", icon: HelpCircle },
        { name: "Contact", url: "/contact", icon: Phone },
    ]

    const distributionChannels = [
        {
            icon: Share2,
            title: "Social Media",
            description: "Shareable visuals that drive engagement and viral reach",
            color: "#ec4899" // Pink
        },
        {
            icon: FileText,
            title: "Blog Posts",
            description: "Embedded graphics that boost reading time and shares",
            color: "#0ea5e9" // Sky
        },
        {
            icon: BarChart3,
            title: "Reports",
            description: "Data visualizations that make reports compelling",
            color: "#6366f1" // Indigo
        },
        {
            icon: Presentation,
            title: "Presentations",
            description: "Slide-ready visuals that impress and persuade",
            color: "#8b5cf6" // Violet
        }
    ]

    const strengthCards = [
        {
            icon: Brain,
            title: "AI-Powered Data Visualization",
            description: "Our AI analyzes your data to identify the most impactful way to present complex information visually."
        },
        {
            icon: Eye,
            title: "Insight-Driven Design",
            description: "Every element is designed to highlight key insights and guide viewers to important conclusions."
        },
        {
            icon: Sparkles,
            title: "Clarity Over Complexity",
            description: "We simplify complex data into clear, beautiful visuals that anyone can understand instantly."
        }
    ]

    const useCases = [
        { icon: BarChart3, label: "Data Reports", color: "from-pink-500 to-rose-500" },
        { icon: Share2, label: "Social Media", color: "from-rose-500 to-pink-600" },
        { icon: Presentation, label: "Presentations", color: "from-pink-600 to-fuchsia-500" },
        { icon: Megaphone, label: "Marketing", color: "from-fuchsia-500 to-purple-500" }
    ]

    const advantages = [
        {
            icon: PieChart,
            title: "Data Analysis",
            description: "We extract the key insights from your data that matter most to your audience.",
            color: "#0ea5e9"
        },
        {
            icon: Palette,
            title: "Visual Design",
            description: "Custom-crafted visuals that match your brand and captivate your audience.",
            color: "#6366f1"
        },
        {
            icon: TrendingUp,
            title: "Shareability",
            description: "Optimized for social sharing with formats that maximize engagement and reach.",
            color: "#8b5cf6"
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
                        className="inline-flex items-center text-[#F472B6] hover:text-[#F9A8D4] transition-colors mb-12 group text-sm"
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
                                    className="inline-flex p-5 bg-[#EC4899]/10 rounded-3xl border border-[#EC4899]/20 mb-8 relative"
                                >
                                    <BarChart3 className="h-14 w-14 text-[#EC4899]" strokeWidth={1.5} />
                                    <div className="absolute inset-0 rounded-3xl bg-[#F472B6]/20 blur-xl -z-10" />
                                </motion.div>

                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-6 text-[#F8FAFC]"
                                >
                                    Infographics That Turn{" "}
                                    <span className="bg-gradient-to-r from-[#EC4899] to-[#F472B6] bg-clip-text text-transparent">
                                        Data Into Stories
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg text-[#94A3B8] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                                >
                                    AI-optimized visual storytelling that transforms complex information into
                                    clear, beautiful, shareable content your audience will actually read.
                                </motion.p>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                >
                                    <Link
                                        href="/contact"
                                        className="relative z-20 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#EC4899] to-[#DB2777] text-white font-semibold rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#EC4899]/25"
                                    >
                                        Get My Infographic
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                    <button
                                        onClick={() => {
                                            document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="relative z-20 inline-flex items-center justify-center px-8 py-4 bg-white/[0.06] border border-white/[0.12] text-white font-semibold rounded-full hover:bg-white/10 transition-all cursor-pointer"
                                    >
                                        See How It Works
                                    </button>
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
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                                        alt="Data Visualization Dashboard"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
                                </div>
                                {/* Floating stats card */}
                                <div className="absolute -bottom-6 -left-6 p-4 rounded-[16px] bg-white/[0.06] backdrop-blur-xl border border-white/[0.12]">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#EC4899]/20">
                                            <TrendingUp className="h-5 w-5 text-[#F472B6]" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">+650%</div>
                                            <div className="text-xs text-[#94A3B8]">More Shares</div>
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EC4899]/10 border border-[#EC4899]/20 text-[#F472B6] text-sm font-medium mb-4">
                                    <Sparkles className="h-4 w-4" />
                                    What It Is
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-4">
                                    Complex Data, <span className="text-[#F472B6]">Crystal Clear</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed">
                                    AI-optimized visual storytelling that transforms dull data into <span className="text-white font-medium">compelling graphics</span>.
                                    We make information beautiful, digestible, and impossible to ignore.
                                </p>
                            </div>
                            <div className="relative rounded-[16px] overflow-hidden aspect-[16/10]">
                                <Image
                                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                                    alt="Creative Visualization"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </section>

                    {/* ===== WHERE IS YOUR AUDIENCE ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EC4899]/10 border border-[#EC4899]/20 text-[#F472B6] text-sm font-medium mb-4">
                                <Users className="h-4 w-4" />
                                Where Your Visuals Go
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Designed to Be <span className="text-[#F472B6]">Shared Everywhere</span>
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {distributionChannels.map((channel, idx) => (
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

                        {/* Wide distribution image */}
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
                                        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
                                        alt="Abstract Data Art"
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EC4899]/10 border border-[#EC4899]/20 text-[#F472B6] text-sm font-medium mb-4">
                                    <Palette className="h-4 w-4" />
                                    Visual Storytelling
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    Data That <span className="text-[#F472B6]">Speaks For Itself</span>
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Key stats highlighted</span> so the most important numbers pop instantly.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Visual hierarchy</span> that guides viewers through your data story.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Brand-aligned design</span> that reinforces your identity and professionalism.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Share-optimized formats</span> for maximum reach across all platforms.
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EC4899]/10 border border-[#EC4899]/20 text-[#F472B6] text-sm font-medium mb-4">
                                    <Zap className="h-4 w-4" />
                                    Our Strength
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-8">
                                    Powered by <span className="text-[#F472B6]">AI + Design</span>
                                </h2>
                                <div className="space-y-4">
                                    {strengthCards.map((card, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-[#EC4899] to-[#DB2777] h-fit shadow-lg shadow-[#EC4899]/25">
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EC4899]/10 border border-[#EC4899]/20 text-[#F472B6] text-sm font-medium mb-4">
                                    <TrendingUp className="h-4 w-4" />
                                    How We Can Help
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    From Data to <span className="text-[#F472B6]">Engagement</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                                    Transform raw data into <span className="text-white font-medium">visual assets</span> that
                                    capture attention, improve understanding, and drive shares.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-500/20">
                                            <CheckCircle className="h-5 w-5 text-green-400" />
                                        </div>
                                        <span className="text-[#F8FAFC]">Higher Engagement Rates</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-500/20">
                                            <CheckCircle className="h-5 w-5 text-green-400" />
                                        </div>
                                        <span className="text-[#F8FAFC]">Better Information Retention</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-500/20">
                                            <CheckCircle className="h-5 w-5 text-green-400" />
                                        </div>
                                        <span className="text-[#F8FAFC]">Stronger Brand Authority</span>
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

                    {/* ===== USE CASES ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Use Cases We <span className="text-[#F472B6]">Excel At</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {useCases.map((useCase, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group p-6 rounded-[20px] bg-white/[0.06] border border-white/[0.12] hover:border-[#EC4899]/30 transition-all duration-300 text-center"
                                >
                                    <div className={`mb-4 mx-auto p-4 rounded-2xl bg-gradient-to-br ${useCase.color} w-fit group-hover:scale-110 transition-transform shadow-lg`}>
                                        <useCase.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#F8FAFC]">{useCase.label}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* ===== OUR INFOGRAPHIC ADVANTAGE ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EC4899]/10 border border-[#EC4899]/20 text-[#F472B6] text-sm font-medium mb-4">
                                    <Target className="h-4 w-4" />
                                    Our Infographic Advantage
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-8">
                                    How We <span className="text-[#F472B6]">Deliver Impact</span>
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
                                    alt="Creative Team"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== EXPLORE MORE SERVICES ===== */}
                    <section className="mb-24 md:mb-32 relative z-20">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EC4899]/10 border border-[#EC4899]/20 text-[#F472B6] text-sm font-medium mb-4">
                                <Sparkles className="h-4 w-4" />
                                More Services
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Explore Our Other <span className="text-[#F472B6]">Services</span>
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

                            {/* App & Web Design Card */}
                            <ShaderServiceCard
                                icon={Globe}
                                title="App & Web Design"
                                shortDescription="User-centered design that creates intuitive, conversion-focused digital experiences."
                                fullDescription="In today's digital-first world, your website is the face of your business. We combine creativity with AI-assisted user behavior analysis."
                                learnMoreHref="/services/app-web-design"
                                shaderIndex={4}
                            />
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
                            <div className="absolute inset-0 pointer-events-none">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                                    alt="Team Collaboration"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#EC4899]/90 to-[#7C5CE6]/90" />
                            </div>

                            <div className="relative z-10 p-12 md:p-16 text-center">
                                {/* Background glow */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <div className="relative">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        Ready to Make Your Data Impossible to Ignore?
                                    </h2>
                                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                                        Let's turn your complex data into beautiful, shareable visual stories that captivate your audience.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="relative z-20 inline-flex items-center px-10 py-5 bg-white text-[#DB2777] font-bold text-lg rounded-full hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-xl"
                                    >
                                        Get My Infographic
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
