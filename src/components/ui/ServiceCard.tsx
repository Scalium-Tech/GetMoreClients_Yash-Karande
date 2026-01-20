"use client"

import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
    icon: LucideIcon
    title: string
    description: string
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
    return (
        <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />

            <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:from-blue-500/30 group-hover:to-blue-600/30 group-hover:border-blue-500/30 transition-all duration-300">
                    <Icon className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors">{title}</h3>
                <p className="text-white/60 leading-relaxed text-sm group-hover:text-white/70 transition-colors">{description}</p>
            </div>
        </div>
    )
}

export default ServiceCard
