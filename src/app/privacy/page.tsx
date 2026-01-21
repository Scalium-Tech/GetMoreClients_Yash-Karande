"use client";

import Link from "next/link";
import {
    ArrowLeft,
    Sparkles,
    Shield,
    Lock,
    Eye,
    FileText,
    Home as HomeIcon,
    CheckCircle,
    Settings,
    HelpCircle,
    Phone,
    Info,
    Database,
    Share2,
    Mail
} from "lucide-react";
import { NavBar } from "@/components/ui/NavBar";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { Footer } from "@/components/ui/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
    const lastUpdated = "January 21, 2026";

    const sections = [
        {
            icon: Info,
            title: "1. Introduction",
            content: (
                <div className="space-y-4">
                    <p>
                        At <span className="text-blue-400 font-semibold">GetMoreClients</span>, user trust is the foundation of our partnership. We believe that transparency is essential to building lasting relationships with our clients—from ambitious startups to global enterprises.
                    </p>
                    <p>
                        This Privacy Policy outlines our commitment to **security** and **transparency**. We've designed this document to be clear and human-readable, explaining exactly how we handle your data to provide you with the best AI-powered marketing experience while keeping your information safe.
                    </p>
                </div>
            )
        },
        {
            icon: Database,
            title: "2. Information We Collect",
            content: (
                <div className="space-y-6">
                    <div>
                        <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            Information You Provide
                        </h3>
                        <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
                            <li>Contact details (Name, email, phone number)</li>
                            <li>Business information (Company name, website URL)</li>
                            <li>Marketing requirements and growth goals</li>
                            <li>Communication preferences</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            Automatically Collected Data
                        </h3>
                        <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
                            <li>IP address and device information</li>
                            <li>Browser type and operating system</li>
                            <li>Usage patterns and page interactions</li>
                            <li>Referral sources and search terms</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            icon: Settings,
            title: "3. How We Use Your Information",
            content: (
                <div className="space-y-4">
                    <p>We use your data to enhance your experience and deliver superior marketing results:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/5">
                            <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                            <span className="text-sm text-neutral-300">Better service delivery and tailored marketing strategies.</span>
                        </li>
                        <li className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/5">
                            <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                            <span className="text-sm text-neutral-300">Personalized user dashboard and experience.</span>
                        </li>
                        <li className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/5">
                            <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                            <span className="text-sm text-neutral-300">Secure communication and timely project updates.</span>
                        </li>
                        <li className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/5">
                            <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                            <span className="text-sm text-neutral-300">Anonymized data analysis for AI model optimization.</span>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            icon: Lock,
            title: "4. Data Sharing & Security",
            content: (
                <div className="space-y-4 text-neutral-400">
                    <p> Your privacy is not for sale. We maintain a <span className="text-white font-bold">strict no-selling policy</span> regarding your personal data.</p>
                    <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                        <p className="flex items-center gap-2 text-white font-semibold mb-2">
                            <Shield className="h-4 w-4 text-blue-400" />
                            Trusted Infrastructure
                        </p>
                        <p className="text-sm">
                            We only utilize industry-leading, trusted tools to manage our operations. For instance, your data is securely stored using **Supabase** (PostgreSQL) and scheduling is handled through **Cal.com**. We implement enterprise-grade encryption and regular security audits to ensure your data remains protected.
                        </p>
                    </div>
                </div>
            )
        },
        {
            icon: Shield,
            title: "5. Your Rights",
            content: (
                <div className="space-y-4">
                    <p>You maintain full control over your personal information. You have the right to:</p>
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            "Access your personal data",
                            "Request data correction",
                            "Request data deletion",
                            "Opt-out of marketing",
                            "Data portability",
                            "Object to processing"
                        ].map((right) => (
                            <div key={right} className="flex items-center gap-2 text-sm text-neutral-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                {right}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-neutral-500 italic mt-4">
                        To exercise any of these rights, please contact our privacy team using the information below.
                    </p>
                </div>
            )
        },
        {
            icon: Sparkles,
            title: "6. Cookies & Tracking",
            content: (
                <div className="space-y-4 text-neutral-400">
                    <p>
                        We use cookies to understand how you interact with our platform and to remember your preferences. This isn't about tracking you—it's about making our website work better for you.
                    </p>
                    <p>
                        You can control cookie settings through your browser at any time. Disabling cookies may affect the functionality of certain parts of our website.
                    </p>
                </div>
            )
        }
    ];

    return (
        <main className="min-h-screen text-white bg-[#020617]">
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

            <StarsBackground speed={60} factor={0.02} starColor="#ffffff">
                <div className="relative z-10 mx-auto max-w-[900px] px-6 pt-32 pb-24">
                    {/* Header Section */}
                    <div className="mb-16 text-center md:text-left">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 group"
                        >
                            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">Back to Home</span>
                        </Link>

                        <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent tracking-tighter">
                            Privacy Policy
                        </h1>
                        <div className="flex items-center justify-center md:justify-start gap-4 text-neutral-500 font-medium">
                            <span className="flex items-center gap-2">
                                <FileText className="h-4 w-4" />
                                Last Updated: {lastUpdated}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-neutral-700 hidden md:block" />
                            <span className="hidden md:block">GetMoreClients Legal</span>
                        </div>
                    </div>

                    {/* Policy Sections */}
                    <div className="space-y-10">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-white/[0.02] border border-white/10 rounded-[24px] backdrop-blur-xl transition-all duration-300 group-hover:bg-white/[0.05] group-hover:border-white/20" />

                                <div className="relative p-8 md:p-10 flex flex-col md:flex-row gap-8">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                                            <section.icon className="h-7 w-7 text-blue-400 group-hover:animate-pulse" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                            {section.title}
                                        </h2>
                                        <div className="text-neutral-400 leading-[1.8] text-lg font-medium">
                                            {section.content}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact & Questions Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-20 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 border border-blue-500/30 rounded-[32px] backdrop-blur-2xl" />

                        <div className="relative p-10 md:p-14 text-center">
                            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-8 ring-8 ring-blue-500/10">
                                <Mail className="h-8 w-8 text-blue-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">We're here to help</h3>
                            <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
                                If you have any questions or concerns regarding this Privacy Policy or our data practices, our team is ready to assist you.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link
                                    href="mailto:hello@getmoreclients.com"
                                    className="px-8 py-4 rounded-full bg-white text-[#020617] font-bold hover:bg-neutral-200 transition-all shadow-xl shadow-blue-500/10 group flex items-center gap-2"
                                >
                                    Email Support
                                    <ArrowLeft className="h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="mailto:hello@getmoreclients.com"
                                    className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                                >
                                    hello@getmoreclients.com
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </StarsBackground>

            <Footer />
        </main>
    );
}
