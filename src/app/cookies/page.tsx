"use client";

import Link from "next/link";
import {
    ArrowLeft,
    Sparkles,
    Shield,
    FileText,
    Home as HomeIcon,
    CheckCircle,
    Settings,
    HelpCircle,
    Phone,
    Cookie,
    PieChart,
    MousePointer2,
    ShieldCheck,
    Mail
} from "lucide-react";
import { NavBar } from "@/components/ui/NavBar";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { Footer } from "@/components/ui/Footer";
import { motion } from "framer-motion";

export default function CookiePolicyPage() {
    const lastUpdated = "January 21, 2026";

    const sections = [
        {
            icon: Cookie,
            title: "1. What are Cookies?",
            content: (
                <div className="space-y-4">
                    <p>
                        Cookies are small text files that are stored on your device when you visit a website. They help us provide a better, more personalized experience by remembering your preferences and understanding how you use our platform.
                    </p>
                    <p>
                        At <span className="text-blue-400 font-semibold">GetMoreClients</span>, we use cookies to optimize our AI-driven marketing tools and ensure our website remains fast, secure, and user-friendly.
                    </p>
                </div>
            )
        },
        {
            icon: ShieldCheck,
            title: "2. Essential Cookies",
            content: (
                <div className="space-y-4">
                    <p>
                        These cookies are strictly necessary for the website to function correctly. They enable core features such as security, network management, and accessibility.
                    </p>
                    <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                        <p className="text-sm italic text-neutral-400">
                            Note: You cannot disable these cookies through our site, as they are required for basic operations. However, you can block them via your browser settings.
                        </p>
                    </div>
                </div>
            )
        },
        {
            icon: PieChart,
            title: "3. Analytics & Performance",
            content: (
                <div className="space-y-4">
                    <p>We use these cookies to understand how visitors interact with our website. This data helps us improve our content and user interface:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/5">
                            <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                            <span className="text-sm text-neutral-300">Tracking page views and time spent on site.</span>
                        </li>
                        <li className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/5">
                            <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                            <span className="text-sm text-neutral-300">Identifying referral sources and search terms.</span>
                        </li>
                        <li className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/5">
                            <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                            <span className="text-sm text-neutral-300">Monitoring site performance and error logs.</span>
                        </li>
                        <li className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/5">
                            <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                            <span className="text-sm text-neutral-300">Improving AI model suggestions based on aggregate data.</span>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            icon: MousePointer2,
            title: "4. Marketing & Targeted Ads",
            content: (
                <div className="space-y-4 text-neutral-400">
                    <p> These cookies allow us to deliver more relevant advertisements to you based on your interests. They may be set through our site by our advertising partners.</p>
                    <p>
                        They also help us measure the effectiveness of our marketing campaigns and ensure you don't see the same ad too many times.
                    </p>
                </div>
            )
        },
        {
            icon: Settings,
            title: "5. Managing Your Preferences",
            content: (
                <div className="space-y-4 text-neutral-400">
                    <p>
                        You have the right to decide whether to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.
                    </p>
                    <p>
                        To learn more about how to manage and delete cookies, visit <a href="https://allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">allaboutcookies.org</a>.
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
                            Cookie Policy
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

                    {/* Cookie Sections */}
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

                    {/* Cookie Contact Section */}
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
                            <h3 className="text-3xl font-bold text-white mb-4">Privacy Concerns?</h3>
                            <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
                                If you have further questions about our use of cookies or other tracking technologies, please contact us.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link
                                    href="mailto:privacy@getmoreclients.com"
                                    className="px-8 py-4 rounded-full bg-white text-[#020617] font-bold hover:bg-neutral-200 transition-all shadow-xl shadow-blue-500/10 group flex items-center gap-2"
                                >
                                    Email Support
                                    <ArrowLeft className="h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="mailto:privacy@getmoreclients.com"
                                    className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                                >
                                    privacy@getmoreclients.com
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
