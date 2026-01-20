"use client"

interface ProcessStepProps {
    number: number
    title: string
    description: string
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
    return (
        <div className="relative flex flex-col items-center text-center">
            {/* Step Number */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-lg shadow-blue-500/30">
                {number}
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-white/70 max-w-xs">{description}</p>
        </div>
    )
}

export default ProcessStep
