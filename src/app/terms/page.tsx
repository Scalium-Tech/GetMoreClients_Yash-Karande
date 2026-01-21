"use client";

import Link from "next/link";
import {
    ArrowLeft,
    Sparkles,
    Shield,
    Lock,
    FileText,
    Home as HomeIcon,
    CheckCircle,
    Settings,
    HelpCircle,
    Phone,
    Scale,
    Gavel,
    CreditCard,
    UserCheck,
    AlertCircle,
    Mail
} from "lucide-react";
import { NavBar } from "@/components/ui/NavBar";
import { StarsBackground } from "@/components/ui/StarsBackground";
import { Footer } from "@/components/ui/Footer";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
    const lastUpdated = "January 21, 2026";

    const sections = [
        {
            icon: Scale,
            title: "1. Acceptance of Terms",
            content: (
                <div className="space-y-4">
                    <p>
                        By accessing or using the services provided by <span className="text-blue-400 font-semibold">GetMoreClients</span>, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.
                    </p>
                    <p>
                        These terms constitute a legally binding agreement between you (the "Client") and GetMoreClients regarding your use of our digital marketing platform and consulting services.
                    </p>
                </div>
            )
        },
        {
            icon: UserCheck,
            title: "2. Services & Engagements",
            content: (
                <div className="space-y-6">
                    <p>
                        GetMoreClients provides AI-powered digital marketing solutions, including SEO, PPC, social media management, and creative design.
                    </p>
                    <ul className="list-disc list-inside text-neutral-400 space-y-2 ml-4">
                        <li>Services are provided as described in individual project proposals or subscription plans.</li>
                        <li>We use proprietary AI models to optimize campaigns and provide data-driven insights.</li>
                        <li>Timelines provided are estimates and may vary based on project complexity and client feedback.</li>
                    </ul>
                </div>
            )
        },
        {
            icon: CreditCard,
            title: "3. Payments & Subscriptions",
            content: (
                <div className="space-y-4">
                    <p>To ensure smooth service delivery, we maintain clear payment terms:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/5">
                            <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                            <span className="text-sm text-neutral-300">Invoices must be cleared within 7 days of issuance.</span>
                        </li>
                        <li className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/5">
                            <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                            <span className="text-sm text-neutral-300">Subscriptions are billed automatically at the start of each period.</span>
                        </li>
                        <li className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/5">
                            <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                            <span className="text-sm text-neutral-300">Late payments may result in a temporary suspension of services.</span>
                        </li>
                        <li className="flex gap-3 items-start p-3 rounded-xl bg-white/5 border border-white/5">
                            <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                            <span className="text-sm text-neutral-300">Detailed refund policies are outlined in specific service agreements.</span>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            icon: Shield,
            title: "4. Intellectual Property",
            content: (
                <div className="space-y-4 text-neutral-400">
                    <p>We respect the value of creativity and ownership:</p>
                    <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                        <p className="flex items-center gap-2 text-white font-semibold mb-2">
                            <Gavel className="h-4 w-4 text-blue-400" />
                            Ownership Rights
                        </p>
                        <p className="text-sm">
                            Upon full payment, all custom-created marketing assets and specific campaign content delivered to the Client become the Client's property. GetMoreClients retains ownership of its proprietary AI algorithms, underlying software, and general methodologies used across all client engagements.
                        </p>
                    </div>
                </div>
            )
        },
        {
            icon: AlertCircle,
            title: "5. Limitation of Liability",
            content: (
                <div className="space-y-4 text-neutral-400">
                    <p>
                        While we strive for excellence, digital marketing results are influenced by numerous external factors. GetMoreClients shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services or reliance on AI-generated insights.
                    </p>
                    <p>
                        The Client acknowledges that platform algorithms (Google, Facebook, etc.) change frequently and are outside of our direct control.
                    </p>
                </div>
            )
        },
        {
            icon: HelpCircle,
            title: "6. Termination",
            content: (
                <div className="space-y-4 text-neutral-400">
                    <p>
                        Either party may terminate the engagement with written notice. Specific notice periods (usually 30 days) are defined in your service contract.
                    </p>
                    <p>
                        Upon termination, the Client remains responsible for payments for services rendered up to the termination date.
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
                            Terms of Service
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

                    {/* Terms Sections */}
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

                    {/* Legal Contact Section */}
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
                            <h3 className="text-3xl font-bold text-white mb-4">Legal Questions?</h3>
                            <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
                                If you have any questions regarding these Terms of Service, please reach out to our legal department.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link
                                    href="mailto:legal@getmoreclients.com"
                                    className="px-8 py-4 rounded-full bg-white text-[#020617] font-bold hover:bg-neutral-200 transition-all shadow-xl shadow-blue-500/10 group flex items-center gap-2"
                                >
                                    Contact Legal
                                    <ArrowLeft className="h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="mailto:legal@getmoreclients.com"
                                    className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                                >
                                    legal@getmoreclients.com
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
