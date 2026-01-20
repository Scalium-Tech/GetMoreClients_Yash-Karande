"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Plus, Minus, HelpCircle } from "lucide-react"
import { GlowingEffect } from "./GlowingEffect"

interface FAQItemProps {
    question: string
    answer: string
    defaultOpen?: boolean
    index?: number
}

export function FAQItem({ question, answer, defaultOpen = false, index = 0 }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
        <motion.div
            className={`group relative rounded-2xl mb-4 transition-all duration-300 ${isOpen
                ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/30 shadow-lg shadow-blue-500/5'
                : 'bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
                }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            {/* Glowing Effect */}
            <GlowingEffect
                className="z-20"
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
            />

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-full p-6 flex items-center gap-4 text-left transition-colors z-10"
            >
                {/* Question number/icon */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen
                    ? 'bg-blue-500/20 border border-blue-500/40'
                    : 'bg-white/5 border border-white/10 group-hover:bg-white/10'
                    }`}>
                    {isOpen ? (
                        <Minus className="h-5 w-5 text-blue-400" />
                    ) : (
                        <Plus className="h-5 w-5 text-white/60 group-hover:text-white" />
                    )}
                </div>

                <span className={`flex-1 text-lg font-semibold transition-colors ${isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'
                    }`}>
                    {question}
                </span>

                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex-shrink-0 transition-colors ${isOpen ? 'text-blue-400' : 'text-white/40 group-hover:text-white/60'
                        }`}
                >
                    <ChevronDown className="h-5 w-5" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 pt-0">
                            <div className="pl-14">
                                <motion.p
                                    className="text-white/70 leading-relaxed"
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1, duration: 0.3 }}
                                >
                                    {answer}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default FAQItem
