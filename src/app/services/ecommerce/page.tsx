"use client"

import React from "react"
import { motion } from "framer-motion"
import {
    ShoppingBag, HomeIcon, Sparkles, Settings, CheckCircle, HelpCircle, Phone,
    ArrowLeft, ArrowRight, Target, BarChart3, Zap, TrendingUp,
    Eye, Store, Camera, FileText, ShoppingCart, Palette, Brain, Package
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NavBar } from "@/components/ui/NavBar"
import { Footer } from "@/components/ui/Footer"
import { StarsBackground } from "@/components/ui/StarsBackground"
import { ShaderServiceCard } from "@/components/ui/ShaderServiceCard"

export default function EcommercePage() {
    const navItems = [
        { name: "Home", url: "/#home", icon: HomeIcon },
        { name: "Services", url: "/#services", icon: Sparkles },
        { name: "How It Works", url: "/#how-it-works", icon: Settings },
        { name: "Why Us", url: "/#why-us", icon: CheckCircle },
        { name: "FAQ", url: "/#faq", icon: HelpCircle },
        { name: "Contact", url: "/contact", icon: Phone },
    ]

    const platforms = [
        {
            icon: Store,
            title: "Amazon",
            description: "Optimized A+ Content and listings that dominate search",
            color: "#f59e0b" // Amber
        },
        {
            icon: ShoppingCart,
            title: "Shopify",
            description: "High-converting product pages and brand stores",
            color: "#10b981" // Emerald
        },
        {
            icon: Package,
            title: "WooCommerce",
            description: "Custom assets for WordPress e-commerce success",
            color: "#8b5cf6" // Violet
        },
        {
            icon: ShoppingBag,
            title: "Etsy",
            description: "Unique visuals that stand out in handmade markets",
            color: "#ec4899" // Pink
        }
    ]

    const strengthCards = [
        {
            icon: Palette,
            title: "Conversion-Focused Visual Design",
            description: "Every image, graphic, and layout is designed with one goal: getting customers to click 'Add to Cart'."
        },
        {
            icon: Store,
            title: "Marketplace-Specific Optimization",
            description: "We know what works on Amazon vs. Shopify vs. Etsy—and customize assets for each platform."
        },
        {
            icon: Brain,
            title: "AI-Driven Performance Analysis",
            description: "Continuous optimization based on real conversion data and buyer behavior patterns."
        }
    ]

    const marketplacePlatforms = [
        { icon: Store, label: "Amazon", color: "#f59e0b" },
        { icon: ShoppingCart, label: "Shopify", color: "#10b981" },
        { icon: Package, label: "WooCommerce", color: "#8b5cf6" },
        { icon: ShoppingBag, label: "Etsy", color: "#ec4899" }
    ]

    const advantages = [
        {
            icon: Camera,
            title: "Product Photography",
            description: "Professional-grade imagery that showcases products at their absolute best.",
            color: "#f59e0b"
        },
        {
            icon: FileText,
            title: "A+ Content & Listings",
            description: "Compelling copy and enhanced brand content that builds trust and drives sales.",
            color: "#10b981"
        },
        {
            icon: TrendingUp,
            title: "Conversion Optimization",
            description: "Data-driven improvements that systematically increase your conversion rates.",
            color: "#fbbf24"
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
                        className="inline-flex items-center text-[#34D399] hover:text-[#6EE7B7] transition-colors mb-12 group text-sm"
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
                                    <ShoppingBag className="h-14 w-14 text-[#22C55E]" strokeWidth={1.5} />
                                    <div className="absolute inset-0 rounded-3xl bg-[#34D399]/20 blur-xl -z-10" />
                                </motion.div>

                                <motion.h1
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-6 text-[#F8FAFC]"
                                >
                                    E-Commerce Assets That Turn{" "}
                                    <span className="bg-gradient-to-r from-[#22C55E] to-[#34D399] bg-clip-text text-transparent">
                                        Browsers Into Buyers
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg text-[#94A3B8] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                                >
                                    AI-optimized digital assets designed to increase clicks, build buyer confidence,
                                    and drive more conversions across every major marketplace.
                                </motion.p>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                >
                                    <Link
                                        href="/contact"
                                        className="relative z-20 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white font-semibold rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#22C55E]/25"
                                    >
                                        Optimize My Store
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
                                        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                                        alt="E-Commerce Shopping"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />
                                </div>
                                {/* Floating stats card */}
                                <div className="absolute -bottom-6 -left-6 p-4 rounded-[16px] bg-white/[0.06] backdrop-blur-xl border border-white/[0.12]">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-[#22C55E]/20">
                                            <TrendingUp className="h-5 w-5 text-[#34D399]" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">+185%</div>
                                            <div className="text-xs text-[#94A3B8]">Conversion Rate</div>
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#34D399] text-sm font-medium mb-4">
                                    <Sparkles className="h-4 w-4" />
                                    What It Is
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-4">
                                    Assets That <span className="text-[#34D399]">Sell Products</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed">
                                    Optimized product visuals, A+ content, and conversion-focused assets that
                                    <span className="text-white font-medium"> highlight benefits, answer questions instantly</span>,
                                    and build the confidence customers need to buy.
                                </p>
                            </div>
                            <div className="relative rounded-[16px] overflow-hidden aspect-[16/10]">
                                <Image
                                    src="https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
                                    alt="E-Commerce Dashboard"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </section>

                    {/* ===== WHERE IS YOUR AUDIENCE ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#34D399] text-sm font-medium mb-4">
                                <Store className="h-4 w-4" />
                                Where Your Customers Shop
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Optimized for <span className="text-[#34D399]">Every Marketplace</span>
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

                        {/* Wide product image */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[20px] overflow-hidden border border-white/[0.12] aspect-[21/9]"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80"
                                alt="Product Photography"
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
                                        src="https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80"
                                        alt="Product Lifestyle"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {/* Overlay smaller image */}
                                <div className="absolute -bottom-6 -right-6 w-48 h-32 rounded-[16px] overflow-hidden border-4 border-[#020617] shadow-xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400&q=80"
                                        alt="E-Commerce Packaging"
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#34D399] text-sm font-medium mb-4">
                                    <Eye className="h-4 w-4" />
                                    Trust + Detail
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    Visuals That <span className="text-[#34D399]">Close Sales</span>
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">High-quality product imagery</span> that shows every angle and detail customers need.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">A+ enhanced content</span> that tells your brand story and builds trust.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Buyer psychology optimization</span> with layouts designed to reduce hesitation.
                                    </p>
                                    <p className="text-[#94A3B8] leading-relaxed">
                                        <span className="text-white font-medium">Mobile-optimized assets</span> that look perfect on any device.
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#34D399] text-sm font-medium mb-4">
                                    <Zap className="h-4 w-4" />
                                    Our Strength
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-8">
                                    Conversion <span className="text-[#34D399]">Intelligence</span>
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
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                                    alt="Analytics Dashboard"
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#34D399] text-sm font-medium mb-4">
                                    <TrendingUp className="h-4 w-4" />
                                    How We Can Help
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-6">
                                    Drive Real <span className="text-[#34D399]">Business Results</span>
                                </h2>
                                <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                                    Transform your product listings into <span className="text-white font-medium">revenue-generating machines</span> with
                                    assets that build confidence and drive action.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-500/20">
                                            <CheckCircle className="h-5 w-5 text-green-400" />
                                        </div>
                                        <span className="text-[#F8FAFC]">Higher Add-to-Cart Rates</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-500/20">
                                            <CheckCircle className="h-5 w-5 text-green-400" />
                                        </div>
                                        <span className="text-[#F8FAFC]">Lower Return Rates</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-500/20">
                                            <CheckCircle className="h-5 w-5 text-green-400" />
                                        </div>
                                        <span className="text-[#F8FAFC]">Increased Average Order Value</span>
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
                                    alt="Retail Success"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== PLATFORMS WE SUPPORT ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Platforms We <span className="text-[#34D399]">Support</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            {marketplacePlatforms.map((platform, idx) => (
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

                    {/* ===== OUR E-COMMERCE ADVANTAGE ===== */}
                    <section className="mb-24 md:mb-32">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#34D399] text-sm font-medium mb-4">
                                    <Target className="h-4 w-4" />
                                    Our E-Commerce Advantage
                                </div>
                                <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC] mb-8">
                                    How We <span className="text-[#34D399]">Deliver Sales</span>
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
                                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                                    alt="E-Commerce Success"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== EXPLORE MORE SERVICES ===== */}
                    <section className="mb-24 md:mb-32 relative z-20">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#34D399] text-sm font-medium mb-4">
                                <Sparkles className="h-4 w-4" />
                                More Services
                            </div>
                            <h2 className="text-2xl md:text-[36px] md:leading-[44px] font-semibold text-[#F8FAFC]">
                                Explore Our Other <span className="text-[#34D399]">Services</span>
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
                                className="relative z-[200] inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer"
                            >
                                View All Services
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
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
