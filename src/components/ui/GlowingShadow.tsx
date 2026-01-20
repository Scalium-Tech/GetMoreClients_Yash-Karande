"use client"

import { type ReactNode, useId, useMemo } from "react"

interface GlowingShadowProps {
    children: ReactNode
    className?: string
    hueOffset?: number // Starting hue offset (0-360) for different card colors
}

export function GlowingShadow({ children, className = "", hueOffset = 0 }: GlowingShadowProps) {
    // Generate unique ID for this instance (remove colons for CSS compatibility)
    const rawId = useId()
    const uniqueId = useMemo(() => rawId.replace(/:/g, '').replace(/r/g, 'g'), [rawId])

    return (
        <div className={`glow-wrapper isolate w-full h-full pointer-events-auto ${className}`}>
            <style>{`
                .glow-container-${uniqueId} {
                    --card-color: hsl(260deg 100% 3%);
                    --text-color: hsl(260deg 10% 55%);
                    --card-radius: 1.5rem;
                    --border-width: 3px;
                    --bg-size: 1;
                    --hue: 0;
                    --hue-offset: ${hueOffset};
                    --hue-speed: 1;
                    --rotate: 0;
                    --animation-speed: 4s;
                    --interaction-speed: 0.55s;
                    --glow-scale: 1.5;
                    --scale-factor: 1;
                    --glow-blur: 6;
                    --glow-opacity: 1;
                    --glow-radius: 100;
                    --glow-rotate-unit: 1deg;
                    width: 100%;
                    height: 100%;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    z-index: 2;
                    border-radius: var(--card-radius);
                    cursor: pointer;
                }

                .glow-container-${uniqueId}:before,
                .glow-container-${uniqueId}:after {
                    content: "";
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: var(--card-radius);
                    pointer-events: none;
                }

                .glow-content-${uniqueId} {
                    position: relative;
                    z-index: 10;
                    width: 100%;
                    height: 100%;
                    background: var(--card-color);
                    border-radius: var(--card-radius);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    pointer-events: auto;
                    transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
                }

                .glow-content-${uniqueId}:before {
                    content: "";
                    display: block;
                    position: absolute;
                    width: calc(100% + var(--border-width));
                    height: calc(100% + var(--border-width));
                    border-radius: var(--card-radius);
                    box-shadow: 0 0 20px black;
                    mix-blend-mode: color-burn;
                    z-index: -1;
                    background: hsl(0deg 0% 16%) radial-gradient(
                        30% 30% at calc(var(--bg-x, 0) * 1%) calc(var(--bg-y, 0) * 1%),
                        hsl(calc((var(--hue) + var(--hue-offset)) * var(--hue-speed) * 1deg) 100% 90%) calc(0% * var(--bg-size)),
                        hsl(calc((var(--hue) + var(--hue-offset)) * var(--hue-speed) * 1deg) 100% 80%) calc(20% * var(--bg-size)),
                        hsl(calc((var(--hue) + var(--hue-offset)) * var(--hue-speed) * 1deg) 100% 60%) calc(40% * var(--bg-size)),
                        transparent 100%
                    );
                    pointer-events: none;
                    animation: hue-animation-${uniqueId} var(--animation-speed) linear infinite,
                               rotate-bg-${uniqueId} var(--animation-speed) linear infinite;
                    transition: --bg-size var(--interaction-speed) ease;
                }

                .glow-${uniqueId} {
                    --glow-translate-y: 0;
                    display: block;
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    animation: rotate-${uniqueId} var(--animation-speed) linear infinite;
                    transform: rotateZ(calc(var(--rotate) * var(--glow-rotate-unit)));
                    transform-origin: center;
                    border-radius: calc(var(--glow-radius) * 10vw);
                    pointer-events: none;
                }

                .glow-${uniqueId}:after {
                    content: "";
                    display: block;
                    z-index: -2;
                    filter: blur(calc(var(--glow-blur) * 10px));
                    width: 130%;
                    height: 130%;
                    left: -15%;
                    top: -15%;
                    background: hsl(calc((var(--hue) + var(--hue-offset)) * var(--hue-speed) * 1deg) 100% 60%);
                    position: relative;
                    border-radius: calc(var(--glow-radius) * 10vw);
                    animation: hue-animation-${uniqueId} var(--animation-speed) linear infinite;
                    transform: scaleY(calc(var(--glow-scale) * var(--scale-factor) / 1.1))
                               scaleX(calc(var(--glow-scale) * var(--scale-factor) * 1.2))
                               translateY(calc(var(--glow-translate-y) * 1%));
                    opacity: var(--glow-opacity);
                }

                .glow-container-${uniqueId}:hover .glow-content-${uniqueId} {
                    mix-blend-mode: darken;
                    --text-color: white;
                    box-shadow: 
                        0 0 calc(var(--white-shadow, 0) * 1vw) calc(var(--white-shadow, 0) * 0.15vw) rgb(255 255 255 / 20%),
                        0 0 30px 5px hsl(calc((var(--hue) + var(--hue-offset)) * var(--hue-speed) * 1deg) 100% 50% / 0.3),
                        0 0 60px 10px hsl(calc((var(--hue) + var(--hue-offset)) * var(--hue-speed) * 1deg) 100% 60% / 0.2),
                        inset 0 0 30px 0 hsl(calc((var(--hue) + var(--hue-offset)) * var(--hue-speed) * 1deg) 100% 70% / 0.15);
                    animation: shadow-pulse-${uniqueId} calc(var(--animation-speed) * 2) linear infinite;
                    transform: translateY(-2px) scale(1.01);
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                    filter: brightness(1.05);
                }

                .glow-container-${uniqueId}:hover .glow-content-${uniqueId}:before {
                    --bg-size: 15;
                    animation-play-state: paused;
                    transition: --bg-size var(--interaction-speed) ease;
                }

                .glow-container-${uniqueId}:hover .glow-${uniqueId} {
                    --glow-blur: 1.5;
                    --glow-opacity: 0.6;
                    --glow-scale: 2.5;
                    --glow-radius: 0;
                    --rotate: 900;
                    --glow-rotate-unit: 0;
                    --scale-factor: 1.25;
                    animation-play-state: paused;
                }

                .glow-container-${uniqueId}:hover .glow-${uniqueId}:after {
                    --glow-translate-y: 0;
                    animation-play-state: paused;
                    transition: --glow-translate-y 0s ease, --glow-blur 0.05s ease,
                                --glow-opacity 0.05s ease, --glow-scale 0.05s ease,
                                --glow-radius 0.05s ease;
                }

                @keyframes shadow-pulse-${uniqueId} {
                    0%, 24%, 46%, 73%, 96% { --white-shadow: 0.5; }
                    12%, 28%, 41%, 63%, 75%, 82%, 98% { --white-shadow: 2.5; }
                    6%, 32%, 57% { --white-shadow: 1.3; }
                    18%, 52%, 88% { --white-shadow: 3.5; }
                }

                @keyframes rotate-bg-${uniqueId} {
                    0% { --bg-x: 0; --bg-y: 0; }
                    25% { --bg-x: 100; --bg-y: 0; }
                    50% { --bg-x: 100; --bg-y: 100; }
                    75% { --bg-x: 0; --bg-y: 100; }
                    100% { --bg-x: 0; --bg-y: 0; }
                }

                @keyframes rotate-${uniqueId} {
                    from { --rotate: -70; --glow-translate-y: -65; }
                    25% { --glow-translate-y: -65; }
                    50% { --glow-translate-y: -65; }
                    60%, 75% { --glow-translate-y: -65; }
                    85% { --glow-translate-y: -65; }
                    to { --rotate: calc(360 - 70); --glow-translate-y: -65; }
                }

                @keyframes hue-animation-${uniqueId} {
                    0% { --hue: 0; }
                    100% { --hue: 360; }
                }
            `}</style>

            <div className={`glow-container-${uniqueId} pointer-events-auto`}>
                <span className={`glow-${uniqueId}`}></span>
                <div className={`glow-content-${uniqueId}`}>{children}</div>
            </div>
        </div>
    )
}

export default GlowingShadow
