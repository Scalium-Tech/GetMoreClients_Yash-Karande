"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Beam {
    path: string;
    gradientConfig: {
        initial: any;
        animate: any;
        transition: any;
    };
    connectionPoints?: { cx: number; cy: number; r: number }[];
}

interface PulseBeamsProps {
    beams: Beam[];
    gradientColors: {
        start: string;
        middle: string;
        end: string;
    };
    children?: React.ReactNode;
    className?: string;
}

export const PulseBeams = ({
    beams,
    gradientColors,
    children,
    className,
}: PulseBeamsProps) => {
    return (
        <div className={cn("relative flex items-center justify-center w-full h-full overflow-hidden", className)}>
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 860 435"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {beams.map((_, index) => (
                        <linearGradient
                            key={`gradient-${index}`}
                            id={`gradient-${index}`}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor={gradientColors.start} stopOpacity="0" />
                            <stop offset="0.5" stopColor={gradientColors.middle} />
                            <stop offset="1" stopColor={gradientColors.end} stopOpacity="0" />
                        </linearGradient>
                    ))}
                </defs>
                {beams.map((beam, index) => (
                    <React.Fragment key={`beam-group-${index}`}>
                        <path
                            d={beam.path}
                            stroke="white"
                            strokeOpacity="0.05"
                            strokeWidth="1"
                        />
                        <motion.path
                            d={beam.path}
                            stroke={`url(#gradient-${index})`}
                            strokeWidth="2"
                            strokeLinecap="round"
                            initial={beam.gradientConfig.initial}
                            animate={beam.gradientConfig.animate}
                            transition={beam.gradientConfig.transition}
                        />
                        {beam.connectionPoints?.map((point, pIndex) => (
                            <circle
                                key={`point-${index}-${pIndex}`}
                                cx={point.cx}
                                cy={point.cy}
                                r={point.r}
                                fill="white"
                                fillOpacity="0.1"
                                stroke="white"
                                strokeOpacity="0.2"
                            />
                        ))}
                    </React.Fragment>
                ))}
            </svg>
            <div className="relative z-10">{children}</div>
        </div>
    );
};
