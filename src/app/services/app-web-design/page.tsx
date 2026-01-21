"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    Palette, HomeIcon, Sparkles, Settings, CheckCircle, HelpCircle, Phone,
    ArrowLeft, ArrowRight, Target, Zap, TrendingUp, Layout,
    Eye, Users, Smartphone, Monitor, Layers, Globe, PenTool, Compass,
    MousePointer, Code, Figma, Calendar
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { StarsBackground } from "@/components/ui/StarsBackground"
import { ShaderServiceCard } from "@/components/ui/ShaderServiceCard"

export default function AppWebDesignPage() {
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

    const platforms = [
        {
            icon: Globe,
            title: "Websites",
            description: "Stunning marketing sites that capture attention and convert visitors",
            color: "#6366f1" // Indigo
        },
        {
            icon: Monitor,
            title: "Web Apps",
            description: "Complex web applications with intuitive interfaces users love",
            color: "#06b6d4" // Cyan
        },
        {
            icon: Smartphone,
            title: "Mobile Apps",
            description: "Native iOS and Android experiences designed for engagement",
            color: "#3b82f6" // Blue
        },
        {
            icon: Layers,
            title: "SaaS Dashboards",
            description: "Data-rich interfaces that simplify complex workflows",
            color: "#8b5cf6" // Violet
        }
    ]

    const strengthCards = [
        {
            icon: Eye,
            title: "User-Centered UX Research",
            description: "Deep understanding of your users' needs, behaviors, and pain points to inform every design decision."
        },
        {
            icon: Layers,
            title: "Scalable UI Design Systems",
            description: "Consistent, reusable component libraries that grow with your product and accelerate development."
        },
        {
            icon: Target,
            title: "Conversion-Optimized Interfaces",
            description: "Every interaction designed to guide users toward meaningful actions and business outcomes."
        }
    ]

    const designServices = [
        { icon: Globe, title: "Website Design", description: "Marketing & landing pages", color: "#6366f1" },
        { icon: Smartphone, title: "Mobile App UI", description: "iOS & Android interfaces", color: "#3b82f6" },
        { icon: Compass, title: "UX Research", description: "User insights & testing", color: "#06b6d4" },
        { icon: Layers, title: "Design Systems", description: "Component libraries", color: "#8b5cf6" },
        { icon: MousePointer, title: "Conversion Optimization", description: "CRO & A/B testing", color: "#ec4899" }
    ]

    const advantageCards = [
        {
            icon: Compass,
            title: "User Journey Mapping",
            description: "We map every touchpoint to ensure a seamless experience from first visit to conversion.",
            color: "#6366f1"
        },
        {
            icon: Figma,
            title: "Rapid Prototyping",
            description: "Interactive prototypes that let you experience the design before development begins.",
            color: "#06b6d4"
        },
        {
            icon: TrendingUp,
            title: "Performance-Driven Design",
            description: "Design decisions backed by data, analytics, and real user feedback.",
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
                        className="inline-flex items-center text-[#818CF8] hover:text-[#A5B4FC] transition-colors mb-12 group text-sm"
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
                                    className="inline-flex p-5 bg-[#6366F1]/10 rounded-3xl border border-[#6366F1]/20 mb-8 relative"
                                >
                                    <Palette className="h-14 w-14 text-[#6366F1]" strokeWidth={1.5} />
                                    <div className="absolute inset-0 rounded-3xl bg-[#818CF8]/20 blur-xl -z-10" />
                                </motion.div>

                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-6 text-[#F8FAFC]"
                                >
                                    Design Experiences Users{" "}
                                    <span className="bg-gradient-to-r from-[#6366F1] to-[#22D3EE] bg-clip-text text-transparent">
                                        Love to Use
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg text-[#94A3B8] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                                >
                                    Conversion-focused UX/UI design for web and mobile apps, built for growth and user delight.
                                </motion.p>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                >
                                    <Link
                                        href="/contact"
                                        className="relative z-20 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#4F46E5] text-white font-semibold rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#6366F1]/25"
                                    >
                                        Design My Product
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                    <button
                                        onClick={() => {
                                            document.getElementById('design-process')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="relative z-20 inline-flex items-center justify-center px-8 py-4 bg-white/[0.06] border border-white/[0.12] text-white font-semibold rounded-full hover:bg-white/10 transition-all cursor-pointer"
                                    >
                                        See Our Process
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
                                        src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80"
                                        alt="Modern UI Design"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
                                </div>
                                {/* Floating stats card */}
                                <div className="absolute -bottom-6 -left-6 p-4 rounded-[16px] bg-white/[0.06] backdrop-blur-xl border border-white/[0.12]">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#6366F1]/20">
                                            <TrendingUp className="h-5 w-5 text-[#818CF8]" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">+340%</div>
                                            <div className="text-xs text-[#94A3B8]">Conversion Lift</div>
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#818CF8] text-sm font-medium mb-4">
                                    <Sparkles className="h-4 w-4" />
                                    What It Is
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-4">
                                    What App & Web Design{" "}
                                    <span className="text-[#818CF8]">Really Means</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed">
                                    It's not just about making things look pretty—it's about <span className="text-white font-medium">understanding your users</span>,
                                    designing intuitive flows, and creating interfaces that drive real business results.
                                    From UX research to UI systems, we craft conversion-driven experiences.
                                </p>
                            </div>
                            <div className="relative rounded-[16px] overflow-hidden aspect-[16/10]">
                                <Image
                                    src="https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80"
                                    alt="Design Thinking"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </section>

                    {/* ===== WHERE USERS INTERACT ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#818CF8] text-sm font-medium mb-4">
                                <Monitor className="h-4 w-4" />
                                Platforms & Devices
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Where Users <span className="text-[#818CF8]">Interact</span>
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {platforms.map((platform, idx) => (
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
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
                                alt="Multi-device Experience"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent" />
                        </motion.div>
                    </section>

                    {/* ===== HOW WE DESIGN ===== */}
                    <section id="design-process" className="mb-24 md:mb-32">
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
                                        alt="UX Design Process"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {/* Overlay smaller image */}
                                <div className="absolute -bottom-6 -right-6 w-48 h-32 rounded-[16px] overflow-hidden border-4 border-[#020617] shadow-xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1581276879432-15a19d654956?w=400&q=80"
                                        alt="Designer at Work"
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#818CF8] text-sm font-medium mb-4">
                                    <PenTool className="h-4 w-4" />
                                    UX → UI → Conversion
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    How We <span className="text-[#818CF8]">Design</span>
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">User Research</span> — We start by understanding who your users are and what they need.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Wireframes & Flows</span> — Map the perfect user journey before any visual design.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Visual Systems</span> — Create cohesive, scalable design systems.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Conversion Optimization</span> — Every element designed to drive action.
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#818CF8] text-sm font-medium mb-4">
                                    <Zap className="h-4 w-4" />
                                    Design Intelligence
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-8">
                                    Our <span className="text-[#818CF8]">Strength</span>
                                </h2>
                                <div className="space-y-4">
                                    {strengthCards.map((card, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#4F46E5] h-fit shadow-lg shadow-[#6366F1]/25">
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
                                    src="https://images.unsplash.com/photo-507238691740-187a5b1d37b8?w=800&q=80"
                                    alt="Design Systems"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#020617]/40" />
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== HOW DESIGN HELPS YOUR BUSINESS ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#818CF8] text-sm font-medium mb-4">
                                    <TrendingUp className="h-4 w-4" />
                                    Business Outcomes
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    From Confusion to <span className="text-[#818CF8]">Clarity</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                                    Great design isn't decoration—it's a <span className="text-white font-medium">growth engine</span> that transforms how users interact with your product.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#6366F1]/20">
                                            <ArrowRight className="h-5 w-5 text-[#818CF8]" />
                                        </div>
                                        <span className="text-[#F8FAFC]">From <span className="text-[#94A3B8]">confusion</span> → <span className="text-[#22D3EE] font-semibold">clarity</span></span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#6366F1]/20">
                                            <ArrowRight className="h-5 w-5 text-[#818CF8]" />
                                        </div>
                                        <span className="text-[#F8FAFC]">From <span className="text-[#94A3B8]">visits</span> → <span className="text-[#22D3EE] font-semibold">engagement</span></span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#6366F1]/20">
                                            <ArrowRight className="h-5 w-5 text-[#818CF8]" />
                                        </div>
                                        <span className="text-[#F8FAFC]">From <span className="text-[#94A3B8]">users</span> → <span className="text-[#22D3EE] font-semibold">customers</span></span>
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
                                    src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80"
                                    alt="Growth and Success"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== DESIGN SERVICES WE OFFER ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Design Services We <span className="text-[#818CF8]">Offer</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                            {designServices.map((service, idx) => (
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
                                alt="Creative Tech Workspace"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/50 to-transparent" />
                        </motion.div>
                    </section>

                    {/* ===== OUR DESIGN ADVANTAGE ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#818CF8] text-sm font-medium mb-4">
                                <Target className="h-4 w-4" />
                                Our Design Advantage
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Why We <span className="text-[#818CF8]">Stand Out</span>
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
                                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1200&q=80"
                                alt="Collaboration and Ideation"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent" />
                        </motion.div>
                    </section>

                    {/* ===== EXPLORE MORE SERVICES ===== */}
                    <section className="mb-24 md:mb-32 relative z-20">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 text-[#818CF8] text-sm font-medium mb-4">
                                <Sparkles className="h-4 w-4" />
                                More Services
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Explore Our Other <span className="text-[#818CF8]">Services</span>
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
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                                    alt="Confidence and Clarity"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/90 to-[#22D3EE]/90" />
                            </div>

                            <div className="relative z-10 p-12 md:p-16 text-center">
                                {/* Background glow */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <div className="relative">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        Ready to Design an Experience That Converts?
                                    </h2>
                                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                                        Let's create a digital experience your users will love and your business will benefit from.
                                    </p>
                                    <Link
                                        href="/contact?service=app-web-design"
                                        className="relative z-20 inline-flex items-center px-10 py-5 bg-white text-[#4F46E5] font-bold text-lg rounded-full hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-xl"
                                    >
                                        Start My Design Project
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
