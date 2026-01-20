"use client"

import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"

interface FlipCardProps {
    icon: LucideIcon
    title: string
    shortDescription: string
    fullDescription: string
    learnMoreHref?: string
}

export function FlipCard({
    icon: Icon,
    title,
    shortDescription,
    fullDescription,
    learnMoreHref = "/contact"
}: FlipCardProps) {
    return (
        <div className="group h-[380px] [perspective:1000px] cursor-pointer animate-float">
            <div
                className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-2xl"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front of card */}
                <div
                    className="absolute inset-0 [backface-visibility:hidden] card-border rounded-2xl flex flex-col overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <div className="p-4 flex justify-center relative">
                        <div className="w-full h-40 rounded-xl gradient-border inner-glow overflow-hidden relative flex items-center justify-center bg-slate-900/40">
                            {/* Animated grid background */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="w-full h-full animate-pulse" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                            </div>
                            <div className="relative w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="h-8 w-8 text-blue-400" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div className="p-5 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-3">
                            <span className="inline-block px-3 py-1 glass text-blue-300 rounded-full text-xs font-medium border border-blue-400/30 tracking-wide uppercase">AI-Powered</span>
                            <div className="flex items-center gap-1.5 glass px-2 py-1 rounded-full border border-white/10">
                                <span className="indicator-live"></span>
                                <span className="text-[10px] text-white/50 font-bold uppercase tracking-tighter">Live</span>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors uppercase tracking-tight">{title.split('(')[0]}</h3>
                        <p className="text-white/60 text-xs leading-relaxed line-clamp-3 mb-4">{shortDescription}</p>

                        <div className="mt-auto flex items-center text-blue-400 text-xs font-bold uppercase tracking-widest group-hover:text-blue-300 transition-colors">
                            <span>Hover to Flip</span>
                            <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>

                {/* Back of card */}
                <div
                    className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] card-border rounded-2xl p-6 flex flex-col overflow-hidden"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                            <Icon className="h-5 w-5 text-blue-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white uppercase tracking-tight">{title.split('(')[0]}</h3>
                    </div>

                    <div className="text-white/80 text-xs leading-relaxed flex-grow overflow-y-auto custom-scrollbar pr-3">
                        {fullDescription}
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6" />

                    <a
                        href={learnMoreHref}
                        className="inline-flex items-center justify-center text-blue-400 text-xs font-bold uppercase tracking-widest glass px-4 py-3 rounded-xl border border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-300 transition-all active:scale-95"
                    >
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FlipCard
