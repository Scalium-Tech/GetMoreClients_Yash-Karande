"use client"

import type { LucideIcon } from "lucide-react"
import { GlowingShadow } from "@/components/ui/GlowingShadow"

interface ProcessCardProps {
    icon: LucideIcon
    stepNumber: number
    title: string
    description: string
    features: string[]
    isLast?: boolean
}

export function ProcessCard({ icon: Icon, stepNumber, title, description, features }: ProcessCardProps) {
    // Calculate unique hue offset based on step number (spread across color wheel)
    const hueOffset = ((stepNumber - 1) * 120) % 360 // 120 degrees apart for 3 steps

    return (
        <div className="group relative">
            {/* Mobile Step Number */}
            <div className="md:hidden flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
                    {stepNumber}
                </div>
                <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
            </div>

            {/* Card with GlowingShadow */}
            <GlowingShadow hueOffset={hueOffset}>
                <div className="w-full h-full p-8 flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                        <Icon className="h-12 w-12 text-white drop-shadow-lg" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>

                    {/* Description */}
                    <p className="text-gray-100 text-base leading-relaxed mb-6 font-medium">{description}</p>

                    {/* Features List */}
                    <ul className="space-y-3">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                                <span className="text-gray-100 text-sm font-medium">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </GlowingShadow>
        </div>
    )
}

export default ProcessCard
