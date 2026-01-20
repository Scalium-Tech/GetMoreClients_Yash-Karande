"use client"

import type { LucideIcon } from "lucide-react"
import { ArrowRight, X } from "lucide-react"
import { GlowingShadow } from "@/components/ui/GlowingShadow"
import { useState, useCallback, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface ShaderServiceCardProps {
    icon: LucideIcon
    title: string
    shortDescription: string
    fullDescription: string
    learnMoreHref?: string
    shaderIndex?: number
}

const shaderConfigs = [
    {
        proportion: 0.3,
        softness: 0.8,
        distortion: 0.15,
        swirl: 0.6,
        swirlIterations: 8,
        shape: "checks" as const,
        shapeScale: 0.08,
        colors: ["hsl(220, 100%, 50%)", "hsl(200, 100%, 70%)", "hsl(210, 90%, 60%)", "hsl(190, 100%, 80%)"],
    },
    {
        proportion: 0.4,
        softness: 1.2,
        distortion: 0.2,
        swirl: 0.9,
        swirlIterations: 12,
        shape: "stripes" as const,
        shapeScale: 0.12,
        colors: ["hsl(180, 100%, 45%)", "hsl(160, 100%, 75%)", "hsl(170, 90%, 55%)", "hsl(150, 100%, 80%)"],
    },
    {
        proportion: 0.35,
        softness: 0.9,
        distortion: 0.18,
        swirl: 0.7,
        swirlIterations: 10,
        shape: "checks" as const,
        shapeScale: 0.1,
        colors: ["hsl(280, 100%, 55%)", "hsl(300, 100%, 70%)", "hsl(290, 90%, 60%)", "hsl(270, 100%, 80%)"],
    },
    {
        proportion: 0.45,
        softness: 1.1,
        distortion: 0.22,
        swirl: 0.8,
        swirlIterations: 15,
        shape: "stripes" as const,
        shapeScale: 0.09,
        colors: ["hsl(340, 100%, 55%)", "hsl(320, 100%, 70%)", "hsl(330, 90%, 60%)", "hsl(350, 100%, 80%)"],
    },
    {
        proportion: 0.38,
        softness: 0.95,
        distortion: 0.16,
        swirl: 0.85,
        swirlIterations: 11,
        shape: "checks" as const,
        shapeScale: 0.11,
        colors: ["hsl(45, 100%, 50%)", "hsl(35, 100%, 70%)", "hsl(40, 90%, 55%)", "hsl(50, 100%, 75%)"],
    },
    {
        proportion: 0.42,
        softness: 1.0,
        distortion: 0.19,
        swirl: 0.75,
        swirlIterations: 9,
        shape: "stripes" as const,
        shapeScale: 0.13,
        colors: ["hsl(160, 100%, 45%)", "hsl(140, 100%, 70%)", "hsl(150, 90%, 55%)", "hsl(130, 100%, 75%)"],
    },
    {
        proportion: 0.33,
        softness: 0.85,
        distortion: 0.17,
        swirl: 0.65,
        swirlIterations: 9,
        shape: "checks" as const,
        shapeScale: 0.09,
        colors: ["hsl(200, 100%, 55%)", "hsl(220, 100%, 70%)", "hsl(210, 90%, 60%)", "hsl(230, 100%, 80%)"],
    },
    {
        proportion: 0.4,
        softness: 1.0,
        distortion: 0.2,
        swirl: 0.8,
        swirlIterations: 10,
        shape: "edge" as const,
        shapeScale: 0.1,
        colors: ["hsl(260, 100%, 55%)", "hsl(280, 100%, 70%)", "hsl(270, 90%, 60%)", "hsl(250, 100%, 75%)"],
    },
    {
        proportion: 0.37,
        softness: 0.92,
        distortion: 0.18,
        swirl: 0.72,
        swirlIterations: 11,
        shape: "checks" as const,
        shapeScale: 0.1,
        colors: ["hsl(15, 100%, 55%)", "hsl(25, 100%, 70%)", "hsl(20, 90%, 60%)", "hsl(35, 100%, 75%)"],
    },
]

export function ShaderServiceCard({
    icon: Icon,
    title,
    shortDescription,
    fullDescription,
    learnMoreHref,
    shaderIndex = 0
}: ShaderServiceCardProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setMounted(true)
    }, [])

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const toggleModal = useCallback(() => setIsOpen(prev => !prev), [])

    const handleCardClick = useCallback(() => {
        if (learnMoreHref) {
            router.push(learnMoreHref)
        }
    }, [learnMoreHref, router])

    const hueOffset = (shaderIndex * 60) % 360

    return (
        <>
            <div className="group relative h-80">
                {learnMoreHref ? (
                    <div
                        onClick={handleCardClick}
                        className="isolate relative z-[100] block w-full h-full cursor-pointer pointer-events-auto"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
                        style={{ pointerEvents: 'auto' }}
                    >
                        <GlowingShadow hueOffset={hueOffset}>
                            {/* Card Content */}
                            <div
                                className="isolate relative z-[200] w-full h-full p-8 flex flex-col pointer-events-auto cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleCardClick();
                                }}
                                style={{ pointerEvents: 'auto' }}
                            >
                                {/* Icon */}
                                <div className="mb-6">
                                    <Icon className="h-12 w-12 text-white drop-shadow-lg" strokeWidth={1.5} />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {title.split('(')[0].trim()}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-100 text-base leading-relaxed flex-grow font-medium">
                                    {shortDescription}
                                </p>

                                {/* CTA */}
                                <span className="inline-flex items-center text-white text-sm font-bold mt-6 hover:text-gray-200 transition-colors cursor-pointer">
                                    <span>Learn more</span>
                                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </GlowingShadow>
                    </div>
                ) : (
                    <GlowingShadow hueOffset={hueOffset}>
                        {/* Card Content */}
                        <div className="relative z-20 w-full h-full p-8 flex flex-col">
                            {/* Icon */}
                            <div className="mb-6">
                                <Icon className="h-12 w-12 text-white drop-shadow-lg" strokeWidth={1.5} />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {title.split('(')[0].trim()}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-100 text-base leading-relaxed flex-grow font-medium">
                                {shortDescription}
                            </p>

                            {/* CTA */}
                            <button
                                onClick={toggleModal}
                                className="relative z-[100] pointer-events-auto inline-flex items-center text-white text-sm font-bold mt-6 hover:text-gray-200 transition-colors cursor-pointer"
                            >
                                <span>Learn more</span>
                                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </GlowingShadow>
                )}
            </div>


            {/* Modal Overlay - Rendered via Portal */}
            {mounted && createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={toggleModal}
                                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            />

                            {/* Modal Content */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                className="relative w-full max-w-2xl bg-black border border-white/10 rounded-3xl p-8 md:p-12 overflow-y-auto max-h-[90vh] shadow-2xl"
                                style={{
                                    backdropFilter: "blur(20px) saturate(180%)",
                                    background: "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.95) 100%)",
                                }}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={toggleModal}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-[100]"
                                >
                                    <X className="h-6 w-6" />
                                </button>

                                {/* Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-blue-500/10 rounded-2xl">
                                        <Icon className="h-8 w-8 text-blue-400" strokeWidth={1.5} />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                                        {title.split('(')[0].trim()}
                                    </h2>
                                </div>

                                {/* Description */}
                                <div className="space-y-6">
                                    {fullDescription.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx} className="text-gray-200 text-lg leading-relaxed">
                                            {paragraph.startsWith('**') ? (
                                                <>
                                                    <span className="text-blue-400 font-bold">{paragraph.split('**')[1]}</span>
                                                    {paragraph.split('**')[2]}
                                                </>
                                            ) : paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* Footer CTA */}
                                <div className="mt-12 pt-8 border-t border-white/10 flex justify-end">
                                    <button
                                        onClick={toggleModal}
                                        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-full hover:scale-105 transition-transform cursor-pointer"
                                    >
                                        Got it
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    )
}

export default ShaderServiceCard
