"use client"

import { Star, Quote } from "lucide-react"

interface TestimonialCardProps {
    quote: string
    name: string
    role: string
    company: string
}

export function TestimonialCard({
    quote,
    name,
    role,
    company
}: TestimonialCardProps) {
    return (
        <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.08] hover:border-blue-500/30 hover:-translate-y-1">
            {/* Quote Icon Background */}
            <div className="absolute top-6 right-8 text-blue-500/10 group-hover:text-blue-500/20 transition-colors">
                <Quote className="h-16 w-16" />
            </div>

            <div className="relative flex flex-col h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-blue-500 text-blue-500" />
                    ))}
                </div>

                {/* Quote */}
                <blockquote className="text-white/80 text-lg leading-relaxed mb-8 flex-grow">
                    "{quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg border border-blue-500/30">
                        {name.charAt(0)}
                    </div>
                    <div>
                        <h4 className="text-white font-semibold">{name}</h4>
                        <p className="text-white/50 text-sm">
                            {role}, {company}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
