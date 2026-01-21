"use client"

import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"
import { Footer } from "@/components/ui/Footer"
import { NavBar } from "@/components/ui/NavBar"
import {
    Phone,
    Home as HomeIcon,
    LayoutGrid,
    HelpCircle,
    MessageSquare,
    Zap,
    Users,
    Mail,
    MessageCircle,
    PhoneCall,
    Calendar
} from "lucide-react"

const navItems = [
    { name: "Home", url: "/", icon: HomeIcon },
    { name: "Services", url: "/#services", icon: LayoutGrid },
    { name: "How It Works", url: "/#how-it-works", icon: Zap },
    { name: "Why Us", url: "/#why-us", icon: Users },
    { name: "FAQ", url: "/#faq", icon: HelpCircle },
    { name: "Contact", url: "/contact", icon: MessageSquare },
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

export default function ContactPage() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                theme: "dark",
                styles: { branding: { brandColor: "#000000" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

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
                                Choose the method that works best for you. Our team is standing by to help you scale your business with AI-powered marketing.
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

                        {/* Centered Contact Info */}
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-bold text-white tracking-tight">Ways to reach us</h2>
                                <p className="text-slate-400 mt-2">Pick your preferred channel for direct assistance</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                {/* Email Card */}
                                <div className="group p-8 bg-white/[0.03] rounded-3xl border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all flex flex-col items-center text-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                        <Mail className="h-7 w-7 text-blue-400" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold text-white">Email Us</h4>
                                        <p className="text-slate-400 text-xs leading-relaxed mb-2">Typically responds within 24h.</p>
                                        <a href="mailto:hello@getmoreclients.com" className="text-blue-400 font-bold hover:text-blue-300 transition-colors block underline underline-offset-4 decoration-blue-500/30 hover:decoration-blue-500">
                                            hello@getmoreclients.com
                                        </a>
                                    </div>
                                </div>

                                {/* WhatsApp Card */}
                                <div className="group p-8 bg-white/[0.03] rounded-3xl border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.05] transition-all flex flex-col items-center text-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                                        <MessageCircle className="h-7 w-7 text-emerald-400" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold text-white">WhatsApp Us</h4>
                                        <p className="text-slate-400 text-xs leading-relaxed mb-2">Direct message for quick help.</p>
                                        <a
                                            href="https://wa.me/919123456789"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold hover:bg-emerald-500 hover:text-white transition-all inline-block"
                                        >
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>

                                {/* Call Us Card */}
                                <div className="group p-8 bg-white/[0.03] rounded-3xl border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all flex flex-col items-center text-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                                        <PhoneCall className="h-7 w-7 text-cyan-400" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold text-white">Call Us</h4>
                                        <p className="text-slate-400 text-xs leading-relaxed mb-2">Speak directly with our team.</p>
                                        <a
                                            href="tel:+919123456789"
                                            className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold hover:bg-cyan-500 hover:text-white transition-all inline-block"
                                        >
                                            +91 91234 56789
                                        </a>
                                    </div>
                                </div>

                                {/* Book a Session Card */}
                                <div className="group p-8 bg-white/[0.03] rounded-3xl border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all flex flex-col items-center text-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                        <Calendar className="h-7 w-7 text-blue-400" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold text-white">Book a session</h4>
                                        <p className="text-slate-400 text-xs leading-relaxed mb-2">Schedule a free strategy call.</p>
                                        <button
                                            data-cal-namespace=""
                                            data-cal-link="getmoreclients-agency/free-strategy-consultation"
                                            data-cal-config='{"layout":"month_view"}'
                                            className="px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold hover:bg-blue-500 hover:text-white transition-all inline-block"
                                        >
                                            Book a Session
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Office & Map Card - Full Width below */}
                            <div className="group p-8 bg-white/[0.03] rounded-3xl border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                            <HomeIcon className="h-7 w-7 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-1">Our Office</h4>
                                            <p className="text-slate-400 text-sm mb-4">Visit us for a face-to-face consultation.</p>
                                            <div className="space-y-1">
                                                <p className="text-blue-400 font-bold uppercase tracking-wider text-xs">Chembur, India</p>
                                                <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
                                                    701, stellar tower, Sion - Trombay Rd, near Diamond Garden, Chembur, Mumbai, 400071
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative overflow-hidden rounded-2xl border border-white/10 h-[222px] w-full md:w-1/2 shadow-2xl">
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
            </section>

            <Footer />
        </div>
    )
}
