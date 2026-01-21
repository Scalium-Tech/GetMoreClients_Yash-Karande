"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    Palette, HomeIcon, Sparkles, Settings, CheckCircle, HelpCircle, Phone,
    ArrowLeft, ArrowRight, Layers, Eye, PenTool, Wand2, Image as ImageIcon,
    Target, Zap, Users, BookOpen
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { StarsBackground } from "@/components/ui/StarsBackground"
import { ShaderServiceCard } from "@/components/ui/ShaderServiceCard"

export default function BrandAssetsPage() {
    const navItems = [
        { name: "Home", url: "/#home", icon: HomeIcon },
        { name: "Services", url: "/#services", icon: Sparkles },
        { name: "How It Works", url: "/#how-it-works", icon: Settings },
        { name: "Why Us", url: "/#why-us", icon: CheckCircle },
        { name: "FAQ", url: "/#faq", icon: HelpCircle },
        { name: "Contact", url: "/contact", icon: Phone },
    ]

    const assetTypes = [
        { icon: Palette, label: "Logo Design", color: "#8b5cf6" },
        { icon: Layers, label: "Brand Guidelines", color: "#a855f7" },
        { icon: ImageIcon, label: "Marketing Assets", color: "#d946ef" },
        { icon: PenTool, label: "Social Templates", color: "#ec4899" }
    ]

    const brandingAdvantage = [
        {
            title: "Brand Discovery",
            description: "Understanding your values, audience, and competitive landscape.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
            color: "#8b5cf6"
        },
        {
            title: "Visual Identity",
            description: "Creating distinctive visual elements that capture your brand essence.",
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
            color: "#a855f7"
        },
        {
            title: "Asset System",
            description: "Scalable templates and guidelines for consistent brand application.",
            image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80",
            color: "#d946ef"
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
                        className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors mb-12 group text-sm"
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
                                    className="inline-flex p-5 bg-violet-500/10 rounded-3xl border border-violet-500/20 mb-8 relative"
                                >
                                    <Palette className="h-14 w-14 text-violet-400" strokeWidth={1.5} />
                                    <div className="absolute inset-0 rounded-3xl bg-violet-400/20 blur-xl -z-10" />
                                </motion.div>

                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-6 text-[#F8FAFC]"
                                >
                                    Brand{" "}
                                    <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                                        Assets
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg text-[#94A3B8] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                                >
                                    AI-Driven Visual Identity that creates memorable, consistent brand experiences.
                                </motion.p>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                >
                                    <Link
                                        href="/contact"
                                        className="relative z-20 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-violet-500/25"
                                    >
                                        Get My Brand Assets
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                    <Link
                                        href="#what-it-is"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-white/[0.06] border border-white/[0.12] text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                                    >
                                        Learn More
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
                                        src="https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80"
                                        alt="Brand Identity Design Workspace"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Purple to navy gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/65 via-violet-900/50 to-[#0F172A]/65" />
                                    {/* Subtle vignette */}
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.4)_100%)]" />
                                </div>
                                {/* Floating Brand Consistency card */}
                                <div className="absolute -bottom-6 -left-6 p-4 rounded-[16px] bg-white/[0.06] backdrop-blur-xl border border-white/[0.12]">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-violet-500/20">
                                            <Target className="h-5 w-5 text-violet-400" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">100%</div>
                                            <div className="text-xs text-[#94A3B8]">Brand Consistency</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== SECTION 1: WHAT IT IS ===== */}
                    <section id="what-it-is" className="mb-24 md:mb-32">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-12 rounded-[20px] bg-white/[0.06] backdrop-blur-sm border border-white/[0.12] grid md:grid-cols-[1fr,1.2fr] gap-8 items-center relative overflow-hidden"
                        >
                            {/* Subtle glow */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
                                    <Sparkles className="h-4 w-4" />
                                    What It Is
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-4">
                                    AI-Driven <span className="text-violet-400">Visual Identity</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed">
                                    AI-driven visual identity creation that ensures brand consistency across all touchpoints.
                                    We create <span className="text-white font-medium">memorable brand assets</span> that resonate
                                    with your audience and stand out in competitive markets.
                                </p>
                            </div>
                            <div className="relative rounded-[16px] overflow-hidden aspect-[16/10]">
                                <Image
                                    src="https://images.unsplash.com/photo-1561070791-36c11767b26a?w=800&q=80"
                                    alt="Brand Design Detail"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </section>

                    {/* ===== SECTION 2: WHERE IS YOUR AUDIENCE ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="relative rounded-[20px] overflow-hidden border border-white/[0.12] aspect-[4/3]"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80"
                                    alt="Multi-channel Brand Presence"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/40 to-transparent" />
                            </motion.div>

                            <motion.div
                                initial={{ x: 30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
                                    <Eye className="h-4 w-4" />
                                    Where Is Your Audience
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    Brand <span className="text-violet-400">Everywhere</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                                    Your audience experiences your brand everywhere — <span className="text-white font-medium">websites,
                                        social media, packaging, print materials</span>, and beyond. We ensure your brand looks
                                    professional and consistent across all channels.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {["Websites", "Social Media", "Packaging", "Print"].map((channel, idx) => (
                                        <span key={idx} className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium">
                                            {channel}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== SECTION 3: HOW WILL YOU COMMUNICATE ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
                                    <PenTool className="h-4 w-4" />
                                    How Will You Communicate
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    Cohesive <span className="text-violet-400">Visual Identity</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                                    Through a cohesive visual identity including <span className="text-white font-medium">logos,
                                        color palettes, typography, icons, and brand guidelines</span> that tell your story
                                    consistently across every platform.
                                </p>
                                <div className="space-y-3">
                                    {["Logos & Marks", "Color Palettes", "Typography Systems", "Icon Libraries", "Brand Guidelines"].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="p-1.5 rounded-lg bg-violet-500/20">
                                                <CheckCircle className="h-4 w-4 text-violet-400" />
                                            </div>
                                            <span className="text-[#F8FAFC]">{item}</span>
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
                                    src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800&q=80"
                                    alt="Typography and Color System"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-[#020617]/40 to-transparent" />
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== SECTION 4: OUR STRENGTH ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="relative rounded-[20px] overflow-hidden border border-white/[0.12] aspect-[4/3]"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                                    alt="Strategy and Analysis"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/40 to-transparent" />
                            </motion.div>

                            <motion.div
                                initial={{ x: 30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
                                    <Wand2 className="h-4 w-4" />
                                    Our Strength
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    AI-Powered <span className="text-violet-400">Brand Intelligence</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed">
                                    We analyze <span className="text-white font-medium">successful brands in your industry</span> to
                                    create assets that are both visually distinctive and proven to resonate with your target audience.
                                </p>
                                <div className="mt-6 p-4 rounded-[16px] bg-white/[0.04] border border-white/[0.08]">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600">
                                            <Zap className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-white">AI Analysis</div>
                                            <div className="text-xs text-[#94A3B8]">Industry trends + competitor insights</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== SECTION 5: HOW WE CAN HELP ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
                                    <Users className="h-4 w-4" />
                                    How We Can Help
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    Drive <span className="text-violet-400">Long-Term Loyalty</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                                    We build complete brand identity systems that make you <span className="text-white font-medium">instantly
                                        recognizable</span>, build trust with customers, and create emotional connections that drive long-term loyalty.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-violet-500/20">
                                            <CheckCircle className="h-5 w-5 text-violet-400" />
                                        </div>
                                        <span className="text-[#F8FAFC]">Instant Brand Recognition</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-violet-500/20">
                                            <CheckCircle className="h-5 w-5 text-violet-400" />
                                        </div>
                                        <span className="text-[#F8FAFC]">Customer Trust Building</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-violet-500/20">
                                            <CheckCircle className="h-5 w-5 text-violet-400" />
                                        </div>
                                        <span className="text-[#F8FAFC]">Emotional Connection</span>
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
                                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                                    alt="Brand Confidence and Team Creativity"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== SECTION 6: WHAT WE CREATE ===== */}
                    <section className="mb-24 md:mb-32 relative">
                        {/* Background Visual */}
                        <div className="absolute inset-0 rounded-[32px] overflow-hidden -z-10">
                            <Image
                                src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&q=80"
                                alt="Abstract Brand Shapes"
                                fill
                                className="object-cover opacity-20"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-[#020617]" />
                        </div>

                        <div className="text-center mb-12 pt-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
                                <BookOpen className="h-4 w-4" />
                                What We Create
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Complete Brand <span className="text-violet-400">Asset System</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-8">
                            {assetTypes.map((type, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative rounded-[20px] p-[2px] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                    style={{
                                        background: `linear-gradient(135deg, ${type.color}, ${type.color}44, ${type.color}88, ${type.color})`,
                                        backgroundSize: '300% 300%',
                                        animation: 'borderGradientShift 8s ease-in-out infinite',
                                    }}
                                >
                                    <div className="relative z-10 h-full bg-[#020617] rounded-[18px] p-6 group-hover:bg-[#020617]/90 transition-colors text-center flex flex-col items-center">
                                        <div
                                            className="mb-4 mx-auto p-4 rounded-2xl w-fit group-hover:scale-110 transition-transform shadow-lg shadow-violet-500/25"
                                            style={{ background: `linear-gradient(to bottom right, ${type.color}, ${type.color}dd)` }}
                                        >
                                            <type.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-base font-semibold text-[#F8FAFC]">{type.label}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* ===== SECTION 7: OUR BRANDING ADVANTAGE ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Our Branding <span className="text-violet-400">Advantage</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {brandingAdvantage.map((card, idx) => (
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
                                    <div className="relative z-10 h-full bg-[#020617] rounded-[18px] overflow-hidden group-hover:bg-[#020617]/90 transition-colors">
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent" />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">{card.title}</h3>
                                            <p className="text-[#94A3B8] leading-relaxed text-sm">{card.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* ===== EXPLORE MORE SERVICES ===== */}
                    <section className="mb-16 relative z-20">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
                                <Sparkles className="h-4 w-4" />
                                More Services
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Explore Our Other <span className="text-violet-400">Services</span>
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

                            {/* Animations Card */}
                            <ShaderServiceCard
                                icon={Zap}
                                title="Animations"
                                shortDescription="Motion graphics that bring your brand to life and engage your audience effectively."
                                fullDescription="We bring your brand to life through interactive and engaging animations. Our animation process is enhanced with AI-assisted scripting and visual flow optimization."
                                learnMoreHref="/services/animations"
                                shaderIndex={7}
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
                                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80"
                                    alt="Brand Design"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/90 to-purple-700/90" />
                            </div>

                            <div className="relative z-10 p-12 md:p-16 text-center">
                                {/* Background glow */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <div className="relative">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                        Ready to build an Iconic Brand?
                                    </h2>
                                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                                        Let's create distinctive, AI-powered brand assets that make you instantly recognizable and build lasting trust.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="isolate relative z-[100] pointer-events-auto inline-flex items-center px-10 py-5 bg-white text-violet-600 font-bold text-lg rounded-full hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-xl"
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
