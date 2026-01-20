"use client"


import { ContactForm } from "@/components/ui/ContactForm"
import { Footer } from "@/components/ui/Footer"
import { GlowingEffect } from "@/components/ui/GlowingEffect"
import { NavBar } from "@/components/ui/NavBar"
import {
    Phone,
    Home as HomeIcon,
    LayoutGrid,
    HelpCircle,
    MessageSquare,
    Zap,
    Users,
    Mail
} from "lucide-react"
import Link from "next/link"

const navItems = [
    { name: "Home", url: "/", icon: HomeIcon },
    { name: "Services", url: "/#services", icon: LayoutGrid },
    { name: "How It Works", url: "/#how-it-works", icon: Zap },
    { name: "Why Us", url: "/#why-us", icon: Users },
    { name: "FAQ", url: "/#faq", icon: HelpCircle },
    { name: "Contact", url: "/contact", icon: MessageSquare },
]

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30">
            <NavBar items={navItems} />

            <section className="relative overflow-hidden pt-32 pb-24">
                <div className="py-20 relative">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -mr-48 -mt-48" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -ml-48 -mb-48" />

                    <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
                        <div className="text-center mb-16 lg:mb-24">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-8">
                                <Zap className="w-3 h-3" />
                                <span>Get Started</span>
                            </div>
                            <h1 className="text-5xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
                                Ready to <span className="text-blue-500">Grow</span> <br />
                                Your Business?
                            </h1>
                            <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
                                Tell us about your goals and our AI-powered team will craft a custom strategy to help you dominate your market.
                            </p>

                            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 max-w-4xl mx-auto">
                                {[
                                    "Free initial consultation",
                                    "No-obligation performance audit",
                                    "Expert-led strategy session",
                                    "Custom AI marketing roadmap"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                                            <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-slate-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                            {/* Left: Contact Form */}
                            <div className="relative group w-full">
                                <div className="relative bg-[#0f172a]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl overflow-hidden">
                                    <div className="mb-8 relative z-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                                                <MessageSquare className="h-5 w-5 text-blue-400" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white tracking-tight">Send us a message</h3>
                                        </div>
                                    </div>
                                    <ContactForm />
                                </div>
                                <GlowingEffect
                                    className="z-20"
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                />
                            </div>

                            {/* Right: Other Ways to Reach Us */}
                            <div className="space-y-8 lg:pt-4">
                                <h2 className="text-3xl font-bold text-white tracking-tight px-2">Other ways to reach us</h2>

                                <div className="space-y-4">
                                    {/* Email Card */}
                                    <div className="group p-6 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex-shrink-0 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                            <Mail className="h-6 w-6 text-blue-400" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-lg font-bold text-white">Email Us</h4>
                                            <p className="text-slate-400 text-sm">Our team typically responds within 24 hours.</p>
                                            <a href="mailto:hello@getmoreclients.com" className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors block pt-1">hello@getmoreclients.com</a>
                                        </div>
                                    </div>

                                    {/* Live Chat Card */}
                                    <div className="group p-6 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex-shrink-0 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                                            <MessageSquare className="h-6 w-6 text-cyan-400" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-lg font-bold text-white">Live Chat</h4>
                                            <p className="text-slate-400 text-sm">Available Monday to Friday, 9am to 6pm IST.</p>
                                            <button className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors block pt-1 focus:outline-none">Start a conversation</button>
                                        </div>
                                    </div>

                                    {/* Office & Map Card */}
                                    <div className="group p-6 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all space-y-6">
                                        <div className="flex items-start gap-5">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex-shrink-0 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                                <HomeIcon className="h-6 w-6 text-blue-400" />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="text-lg font-bold text-white">Office</h4>
                                                <p className="text-slate-400 text-sm">Visit us at our Chembur office.</p>
                                                <p className="text-blue-400 text-sm font-medium pt-1">Chembur, India</p>
                                                <p className="text-slate-500 text-xs mt-1 leading-relaxed">701, stellar tower, Sion - Trombay Rd, near Diamond Garden, Chembur, Mumbai, Maharashtra 400071</p>
                                            </div>
                                        </div>

                                        <div className="relative overflow-hidden rounded-xl border border-white/5 h-[200px] w-full mt-4">
                                            <iframe
                                                src="https://maps.google.com/maps?q=701,stellar%20tower,Sion%20-%20Trombay%20Rd,near%20Diamond%20Garden,opp%20K-star%20mall,Chembur,%20Mumbai,%20Maharashtra%20400071&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) opacity(0.8)' }}
                                                allowFullScreen={true}
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                className="relative z-10"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </div>
    )
}
