"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    Play, HomeIcon, Sparkles, Settings, CheckCircle, HelpCircle, Phone,
    ArrowLeft, ArrowRight, Target, Zap, TrendingUp, Film, BarChart3,
    Eye, Monitor, Smartphone, Video, Clapperboard, Wand2,
    Globe, Layers, Palette
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { StarsBackground } from "@/components/ui/StarsBackground"
import { ShaderServiceCard } from "@/components/ui/ShaderServiceCard"

export default function AnimationsPage() {
    const navItems = [
        { name: "Home", url: "/#home", icon: HomeIcon },
        { name: "Services", url: "/#services", icon: Sparkles },
        { name: "How It Works", url: "/#how-it-works", icon: Settings },
        { name: "Why Us", url: "/#why-us", icon: CheckCircle },
        { name: "FAQ", url: "/#faq", icon: HelpCircle },
        { name: "Contact", url: "/contact", icon: Phone },
    ]

    const platformCards = [
        {
            icon: Globe,
            title: "Websites & Landing Pages",
            description: "Micro-animations that guide attention and increase conversions",
            color: "#06b6d4" // Cyan
        },
        {
            icon: Smartphone,
            title: "Social Media Ads",
            description: "Scroll-stopping motion content that drives engagement",
            color: "#ec4899" // Pink
        },
        {
            icon: Film,
            title: "Explainer Videos",
            description: "Complex ideas simplified through visual storytelling",
            color: "#f97316" // Orange
        },
        {
            icon: Monitor,
            title: "Product Demos",
            description: "Showcase features with compelling animated walkthroughs",
            color: "#8b5cf6" // Violet
        }
    ]

    const strengthCards = [
        {
            icon: Clapperboard,
            title: "Story-Driven Motion Design",
            description: "Every animation tells a story that connects with your audience emotionally and drives action."
        },
        {
            icon: Palette,
            title: "Brand-Consistent Animation Systems",
            description: "Motion libraries that match your brand identity and can be reused across all touchpoints."
        },
        {
            icon: Layers,
            title: "Platform-Optimized Motion",
            description: "Animations formatted and optimized for every platform—web, social, mobile, and beyond."
        }
    ]

    const animationServices = [
        { icon: Film, title: "Explainer Videos", description: "Story-driven content", color: "#f97316" },
        { icon: Play, title: "Motion Graphics", description: "Dynamic visuals", color: "#3b82f6" },
        { icon: Smartphone, title: "UI Animations", description: "Interface motion", color: "#06b6d4" },
        { icon: Video, title: "Social Media Animations", description: "Platform-ready content", color: "#ec4899" },
        { icon: Wand2, title: "Brand Motion Systems", description: "Scalable animation libraries", color: "#8b5cf6" }
    ]

    const advantageCards = [
        {
            icon: Clapperboard,
            title: "Storyboarding & Concepting",
            description: "We plan every frame before production to ensure your message lands perfectly.",
            color: "#f59e0b" // Amber
        },
        {
            icon: Wand2,
            title: "High-Quality Motion Design",
            description: "Premium animations crafted with attention to timing, flow, and visual impact.",
            color: "#d946ef" // Fuchsia
        },
        {
            icon: TrendingUp,
            title: "Conversion-Focused Animation",
            description: "Every motion element designed to guide viewers toward action.",
            color: "#10b981" // Emerald
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
                        className="inline-flex items-center text-[#FB7185] hover:text-[#FDA4AF] transition-colors mb-12 group text-sm"
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
                                    className="inline-flex p-5 bg-[#F97316]/10 rounded-3xl border border-[#F97316]/20 mb-8 relative"
                                >
                                    <Play className="h-14 w-14 text-[#F97316]" strokeWidth={1.5} />
                                    <div className="absolute inset-0 rounded-3xl bg-[#FB7185]/20 blur-xl -z-10" />
                                </motion.div>

                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-6 text-[#F8FAFC]"
                                >
                                    Animations That Bring Your{" "}
                                    <span className="bg-gradient-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">
                                        Brand to Life
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg text-[#94A3B8] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                                >
                                    Motion graphics designed to explain faster, engage deeper, and convert better.
                                </motion.p>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                >
                                    <Link
                                        href="/contact"
                                        className="relative z-20 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white font-semibold rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#F97316]/25"
                                    >
                                        Create My Animation
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                    <button
                                        onClick={() => {
                                            document.getElementById('animation-process')?.scrollIntoView({ behavior: 'smooth' });
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
                                        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80"
                                        alt="Motion Graphics Creation"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
                                </div>
                                {/* Floating stats card */}
                                <div className="absolute -bottom-6 -left-6 p-4 rounded-[16px] bg-white/[0.06] backdrop-blur-xl border border-white/[0.12]">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#F97316]/20">
                                            <TrendingUp className="h-5 w-5 text-[#FB7185]" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">+280%</div>
                                            <div className="text-xs text-[#94A3B8]">Engagement</div>
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#FB7185] text-sm font-medium mb-4">
                                    <Sparkles className="h-4 w-4" />
                                    Motion With Purpose
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-4">
                                    What Animations{" "}
                                    <span className="text-[#FB7185]">Really Do</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed">
                                    Motion graphics <span className="text-white font-medium">simplify complex ideas</span>,
                                    guide attention to what matters, and increase information retention by up to 95%.
                                    We create animations that don't just look good—they drive results.
                                </p>
                            </div>
                            <div className="relative rounded-[16px] overflow-hidden aspect-[16/10]">
                                <Image
                                    src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80"
                                    alt="Creative Motion Planning"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </section>

                    {/* ===== WHERE ANIMATIONS WORK BEST ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#FB7185] text-sm font-medium mb-4">
                                <Monitor className="h-4 w-4" />
                                Where Motion Shines
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Where Animations <span className="text-[#FB7185]">Work Best</span>
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
                                alt="Digital Content Consumption"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent" />
                        </motion.div>
                    </section>

                    {/* ===== HOW WE CREATE MOTION ===== */}
                    <section id="animation-process" className="mb-24 md:mb-32">
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
                                        src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&q=80"
                                        alt="Animation Workflow"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {/* Overlay smaller image */}
                                <div className="absolute -bottom-6 -right-6 w-48 h-32 rounded-[16px] overflow-hidden border-4 border-[#020617] shadow-xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=400&q=80"
                                        alt="Creative Process"
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#FB7185] text-sm font-medium mb-4">
                                    <Clapperboard className="h-4 w-4" />
                                    Our Process
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    How We Create <span className="text-[#FB7185]">Motion</span>
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Storyboarding</span> — We plan every scene before a single frame is animated.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Visual Style & Motion Language</span> — Defining the look and feel that matches your brand.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Animation & Timing</span> — Bringing concepts to life with professional execution.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Platform Optimization</span> — Delivered in formats optimized for every channel.
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#FB7185] text-sm font-medium mb-4">
                                    <Zap className="h-4 w-4" />
                                    Motion Intelligence
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-8">
                                    Our <span className="text-[#FB7185]">Strength</span>
                                </h2>
                                <div className="space-y-4">
                                    {strengthCards.map((card, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-[#F97316] to-[#EA580C] h-fit shadow-lg shadow-[#F97316]/25">
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
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                                    alt="Abstract Motion"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#020617]/40" />
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== HOW ANIMATIONS HELP YOUR BUSINESS ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#FB7185] text-sm font-medium mb-4">
                                    <TrendingUp className="h-4 w-4" />
                                    Business Outcomes
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    From Static to <span className="text-[#FB7185]">Engaging</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                                    Animation isn't decoration—it's a <span className="text-white font-medium">conversion multiplier</span> that transforms how people experience your brand.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#F97316]/20">
                                            <ArrowRight className="h-5 w-5 text-[#FB7185]" />
                                        </div>
                                        <span className="text-[#F8FAFC]">From <span className="text-[#94A3B8]">static</span> → <span className="text-[#EC4899] font-semibold">engaging</span></span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#F97316]/20">
                                            <ArrowRight className="h-5 w-5 text-[#FB7185]" />
                                        </div>
                                        <span className="text-[#F8FAFC]">From <span className="text-[#94A3B8]">confusion</span> → <span className="text-[#EC4899] font-semibold">clarity</span></span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#F97316]/20">
                                            <ArrowRight className="h-5 w-5 text-[#FB7185]" />
                                        </div>
                                        <span className="text-[#F8FAFC]">From <span className="text-[#94A3B8]">views</span> → <span className="text-[#EC4899] font-semibold">conversions</span></span>
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
                                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                                    alt="Growth and Engagement"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== ANIMATION SERVICES WE OFFER ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Animation Services We <span className="text-[#FB7185]">Offer</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                            {animationServices.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative rounded-[20px] p-[2px] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                    style={{
                                        background: `linear-gradient(135deg, ${service.color}, ${service.color}44, ${service.color}88, ${service.color})`,
                                        backgroundSize: '300% 300%',
                                        animation: 'borderGradientShift 8s ease-in-out infinite',
                                    }}
                                >
                                    <div className="relative z-10 h-full bg-[#020617] rounded-[18px] p-6 group-hover:bg-[#020617]/90 transition-colors text-center flex flex-col items-center">
                                        <div
                                            className="mb-4 p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform"
                                            style={{ backgroundColor: `${service.color}22` }}
                                        >
                                            <service.icon className="h-7 w-7 text-white" style={{ filter: `drop-shadow(0 0 8px ${service.color})` }} />
                                        </div>
                                        <h3 className="text-base font-semibold text-[#F8FAFC] mb-1">{service.title}</h3>
                                        <p className="text-xs text-gray-100 font-medium">{service.description}</p>
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
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80"
                                alt="Creative Digital Studio"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/50 to-transparent" />
                        </motion.div>
                    </section>

                    {/* ===== OUR ANIMATION ADVANTAGE ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#FB7185] text-sm font-medium mb-4">
                                <Target className="h-4 w-4" />
                                Our Animation Advantage
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Why We <span className="text-[#FB7185]">Stand Out</span>
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
                                alt="Team Ideation"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent" />
                        </motion.div>
                    </section>

                    {/* ===== EXPLORE MORE SERVICES ===== */}
                    <section className="mb-24 md:mb-32 relative z-20">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#FB923C] text-sm font-medium mb-4">
                                <Sparkles className="h-4 w-4" />
                                More Services
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Explore Our Other <span className="text-[#FB923C]">Services</span>
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

                            {/* Infographics Card */}
                            <ShaderServiceCard
                                icon={BarChart3}
                                title="Infographics"
                                shortDescription="Visually engaging content using AI-supported data structuring and visual optimization."
                                fullDescription="Transform complex data into stunning visual stories that engage and inform. Our infographics are strategically designed to communicate your brand message."
                                learnMoreHref="/services/infographics"
                                shaderIndex={5}
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

                    {/* ===== CONVERSION CTA ===== */}
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
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
                                    alt="Confident Creative Moment"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/90 to-[#EC4899]/90" />
                            </div>

                            <div className="relative z-10 p-12 md:p-16 text-center">
                                {/* Background glow */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <div className="relative">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        Ready to Animate Your Message?
                                    </h2>
                                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                                        Let's create motion content that captures attention, tells your story, and drives action.
                                    </p>
                                    <Link
                                        href="/contact?service=animations"
                                        className="relative z-20 inline-flex items-center px-10 py-5 bg-white text-[#EA580C] font-bold text-lg rounded-full hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-xl"
                                    >
                                        Start My Animation Project
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
