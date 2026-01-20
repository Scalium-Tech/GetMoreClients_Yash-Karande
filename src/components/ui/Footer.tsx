"use client";

import Link from "next/link";
import {
    Mail,
    MapPin,
    Phone,
    Sparkles,
    Facebook,
    Instagram,
    Twitter,
    Dribbble,
    Globe
} from "lucide-react";

const data = {
    socialLinks: {
        facebook: "https://facebook.com/getmoreclients",
        instagram: "https://instagram.com/getmoreclients",
        twitter: "https://twitter.com/getmoreclients",
        dribbble: "https://dribbble.com/getmoreclients",
        website: "https://getmoreclients.com",
    },
    navigation: {
        services: "#services",
        howItWorks: "#how-it-works",
        whyUs: "#why-us",
        testimonials: "#testimonials",
        faq: "#faq",
        contact: "/contact",
    },
    legal: {
        privacy: "/privacy",
        terms: "/terms",
        cookies: "/cookies",
    },
    contact: {
        email: "hello@getmoreclients.com",
        phone: "+91 91234 56789",
        address: "701,stellar tower,Sion - Trombay Rd,near Diamond Garden,opp K-star mall,Chembur, Mumbai, Maharashtra 400071",
    },
    company: {
        name: "GetMoreClients",
        description:
            "AI-powered digital marketing agency delivering end-to-end solutions with clear communication and measurable results.",
    },
};

const socialLinks = [
    { icon: Facebook, label: "Facebook", href: data.socialLinks.facebook },
    { icon: Instagram, label: "Instagram", href: data.socialLinks.instagram },
    { icon: Twitter, label: "Twitter", href: data.socialLinks.twitter },
    { icon: Dribbble, label: "Dribbble", href: data.socialLinks.dribbble },
    { icon: Globe, label: "Website", href: data.socialLinks.website },
];

const companyLinks = [
    { text: "About Us", href: "/about" },
    { text: "Blogs", href: "/blogs" },
    { text: "Careers", href: "/careers" },
];

const legalLinks = [
    { text: "Privacy Policy", href: data.legal.privacy },
    { text: "Terms of Service", href: data.legal.terms },
    { text: "Cookie Policy", href: data.legal.cookies },
];

const contactInfo = [
    { icon: Mail, text: data.contact.email, href: `mailto:${data.contact.email}` },
    { icon: Phone, text: data.contact.phone, href: `tel:${data.contact.phone.replace(/\s/g, "")}` },
    { icon: MapPin, text: data.contact.address, isAddress: true },
];

export function Footer() {
    return (
        <footer className="relative z-50 -mt-16 w-full overflow-hidden pt-16 pb-8">
            {/* Decorative Glow Circles */}
            <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
                <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
                <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-cyan-600/20 blur-3xl"></div>
            </div>

            {/* Glass Container */}
            <div
                className="relative z-20 mx-auto flex max-w-[98%] flex-col items-center gap-8 rounded-2xl px-6 pt-16 pb-16 md:flex-row md:items-start md:justify-between md:gap-12"
                style={{
                    backdropFilter: "blur(12px) saturate(180%)",
                    background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(30,0,0,0.1) 60%, rgba(10,20,40,0.3) 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                }}
            >
                {/* Brand Section */}
                <div className="flex flex-col items-center md:items-start">
                    <Link href="/" className="mb-4 flex items-center gap-2 group">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 text-2xl font-extrabold text-white shadow-md group-hover:scale-110 transition-transform">
                            <Sparkles className="h-5 w-5" />
                        </span>
                        <span className="bg-gradient-to-br from-blue-200 to-cyan-400 bg-clip-text text-xl font-semibold tracking-tight text-transparent">
                            GetMoreClients
                        </span>
                    </Link>
                    <p className="text-neutral-400 mb-6 max-w-xs text-center text-sm md:text-left leading-relaxed">
                        {data.company.description}
                    </p>
                    <div className="mt-2 flex gap-4 text-blue-400">
                        {socialLinks.map(({ icon: Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="hover:text-white transition-all hover:scale-110"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Navigation Columns */}
                <nav className="relative z-30 pointer-events-auto flex w-full flex-col gap-12 text-center md:w-auto md:flex-row md:justify-start md:text-left md:gap-16 md:ml-auto md:mr-16">
                    {/* Navigation */}
                    <div>
                        <div className="mb-3 text-xs font-semibold tracking-widest text-blue-400 uppercase">
                            Navigation
                        </div>
                        <div className="flex flex-col space-y-2">
                            <a
                                href="#services"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                            >
                                Services
                            </a>
                            <a
                                href="#how-it-works"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                            >
                                How It Works
                            </a>
                            <a
                                href="#why-us"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("why-us")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                            >
                                Why Us
                            </a>
                            <a
                                href="#testimonials"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                            >
                                Testimonials
                            </a>
                            <a
                                href="#faq"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                            >
                                FAQ
                            </a>
                            <Link
                                href="/contact"
                                className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="relative z-30">
                        <div className="mb-3 text-xs font-semibold tracking-widest text-blue-400 uppercase">
                            Company
                        </div>
                        <ul className="space-y-2">
                            {companyLinks.map((link) => (
                                <li key={link.text}>
                                    <Link href={link.href} className="relative z-30 text-white/80 hover:text-white transition-colors text-sm inline-block">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <div className="mb-3 text-xs font-semibold tracking-widest text-blue-400 uppercase">
                            Legal
                        </div>
                        <ul className="space-y-2">
                            {legalLinks.map((link) => (
                                <li key={link.text}>
                                    <Link href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <div className="mb-3 text-xs font-semibold tracking-widest text-blue-400 uppercase">
                            Contact Us
                        </div>
                        <ul className="space-y-2">
                            {contactInfo.map((item) => (
                                <li key={item.text}>
                                    {item.isAddress ? (
                                        <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-white/80">
                                            <item.icon className="h-4 w-4 text-blue-400" />
                                            <span>{item.text}</span>
                                        </div>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="flex items-center justify-center md:justify-start gap-2 text-sm text-white/80 hover:text-white transition-colors"
                                        >
                                            <item.icon className="h-4 w-4 text-blue-400" />
                                            <span>{item.text}</span>
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Glow Effect Styles */}
            <style jsx>{`
                .footer-glow-text {
                    position: relative;
                }
                .footer-glow-text::before {
                    content: attr(data-text);
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(90deg, #00cfff, #a600ff, #ff006e, #ff8800);
                    filter: blur(25px) brightness(0.8);
                    opacity: 0.5;
                    border-radius: 100px;
                    z-index: -1;
                    pointer-events: none;
                    background-size: 200% 200%;
                    animation: footerGradientShift 12s ease-in-out infinite;
                }
                
                .footer-glow-text::after {
                    content: attr(data-text);
                    position: absolute;
                    inset: 0;
                    font-size: inherit;
                    font-weight: inherit;
                    font-family: inherit;
                    letter-spacing: inherit;
                    background: linear-gradient(90deg, #00cfff, #a600ff, #ff006e, #ff8800);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    mix-blend-mode: color-burn;
                    filter: blur(3px) brightness(1.3);
                    z-index: 0;
                    pointer-events: none;
                    background-size: 200% 200%;
                    animation: footerGradientShift 12s ease-in-out infinite;
                }
                
                @keyframes footerGradientShift {
                    0%   { background-position: 0% 50%; }
                    50%  { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>

            {/* Brand Signature Banner - Premium Full-Width Section */}
            <div
                className="brand-banner relative mt-12 w-full flex items-center justify-center overflow-hidden pointer-events-none select-none"
                style={{
                    minHeight: '420px',
                    height: 'clamp(260px, 40vh, 520px)',
                    padding: 'clamp(64px, 8vw, 96px) 24px',
                }}
            >
                {/* Animated Gradient Border */}
                <div
                    className="absolute inset-0 rounded-[24px] mx-4 md:mx-8"
                    style={{
                        background: 'linear-gradient(135deg, #06b6d4, #3b82f6, #60a5fa, #06b6d4)',
                        backgroundSize: '300% 300%',
                        animation: 'borderGradientShift 8s ease-in-out infinite',
                        padding: '1.5px', // Slightly thicker for colors to pop
                    }}
                >
                    {/* Inner Container */}
                    <div
                        className="absolute inset-[3px] rounded-[21px]"
                        style={{
                            background: 'linear-gradient(180deg, rgba(2, 6, 23, 0.98) 0%, rgba(15, 23, 42, 0.95) 50%, rgba(2, 6, 23, 0.98) 100%)',
                        }}
                    />
                </div>

                {/* Animated Grain Texture Overlay */}
                <div
                    className="absolute inset-0 rounded-[24px] mx-4 md:mx-8 opacity-[0.03] mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                        animation: 'grainShift 0.5s steps(10) infinite',
                    }}
                />

                {/* Radial Glow Behind Text */}
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        background: 'radial-gradient(ellipse 60% 40% at center, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.08) 30%, transparent 70%)',
                    }}
                />

                {/* Soft Ambient Glow Pulse */}
                <div
                    className="absolute inset-0 flex items-center justify-center opacity-50"
                    style={{
                        background: 'radial-gradient(ellipse 50% 35% at center, rgba(6, 182, 212, 0.1) 0%, transparent 60%)',
                        animation: 'ambientPulse 4s ease-in-out infinite',
                    }}
                />

                {/* Border Glow Effect */}
                <div
                    className="absolute inset-0 rounded-[24px] mx-4 md:mx-8"
                    style={{
                        boxShadow: '0 0 60px rgba(6, 182, 212, 0.2), 0 0 120px rgba(59, 130, 246, 0.15), 0 0 180px rgba(6, 182, 212, 0.1), inset 0 0 60px rgba(6, 182, 212, 0.05)',
                    }}
                />

                {/* Layer 2: Outer Glow Layer (Behind) */}
                <h1
                    className="brand-text-glow absolute z-0 font-black uppercase text-center leading-none pointer-events-none select-none"
                    style={{
                        fontSize: 'clamp(48px, 10vw, 140px)',
                        fontWeight: 900,
                        letterSpacing: '-0.02em',
                        color: 'transparent',
                        background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #60a5fa, #06b6d4)',
                        WebkitBackgroundClip: 'text',
                        filter: 'blur(35px) drop-shadow(0 0 40px rgba(59, 130, 246, 0.5))',
                        opacity: 0.6,
                        animation: 'glowPulse 4s ease-in-out infinite alternate',
                    }}
                >
                    GETMORECLIENTS
                </h1>

                {/* Layer 1: Clean Gradient Text (Top) */}
                <h1
                    className="relative z-10 font-black uppercase text-center leading-none pointer-events-none select-none"
                    style={{
                        fontSize: 'clamp(48px, 10vw, 140px)',
                        fontWeight: 900,
                        letterSpacing: '-0.02em',
                        WebkitTextFillColor: 'transparent', // No color inside
                        WebkitTextStroke: '1px rgba(34, 211, 238, 0.5)', // Cyan-blue outline
                        filter: 'none',
                        textShadow: 'none',
                    }}
                >
                    GETMORECLIENTS
                </h1>
            </div>

            {/* Additional Brand Banner Animations */}
            <style jsx>{`
                @keyframes borderGradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                @keyframes grainShift {
                    0%, 100% { transform: translate(0, 0); }
                    10% { transform: translate(-2%, -2%); }
                    20% { transform: translate(2%, 2%); }
                    30% { transform: translate(-1%, 1%); }
                    40% { transform: translate(1%, -1%); }
                    50% { transform: translate(-2%, 2%); }
                    60% { transform: translate(2%, -2%); }
                    70% { transform: translate(-1%, -1%); }
                    80% { transform: translate(1%, 1%); }
                    90% { transform: translate(-2%, -2%); }
                }
                
                @keyframes ambientPulse {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(1.02); }
                }
                
                .brand-banner {
                    animation: fadeInScale 0.8s ease-out forwards;
                }
                
                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.98);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                .brand-text-glow {
                    animation: glowPulse 4s ease-in-out infinite alternate;
                }
                
                @keyframes glowPulse {
                    0% {
                        filter: blur(35px) drop-shadow(0 0 40px rgba(59, 130, 246, 0.4));
                        opacity: 0.4;
                        transform: scale(0.98);
                    }
                    100% {
                        filter: blur(45px) drop-shadow(0 0 70px rgba(6, 182, 212, 0.6));
                        opacity: 0.7;
                        transform: scale(1.02);
                    }
                }
            `}</style>

            {/* Bottom Copyright Bar - Absolute Bottom */}
            <div className="relative z-10 mt-4 py-4">
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
                    {/* Copyright */}
                    <p className="text-xs text-neutral-500">
                        &copy; 2026 {data.company.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
