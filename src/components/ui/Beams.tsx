"use client"

import { useState, useEffect, Suspense } from "react"
import dynamic from "next/dynamic"

export interface BeamsProps {
  beamWidth?: number
  beamHeight?: number
  beamNumber?: number
  lightColor?: string
  speed?: number
  noiseIntensity?: number
  scale?: number
  rotation?: number
}

// Fallback gradient background
const FallbackBackground = ({ lightColor = "#60a5fa" }: { lightColor?: string }) => (
  <div
    className="w-full h-full absolute inset-0"
    style={{
      background: `
        radial-gradient(ellipse at 20% 30%, ${lightColor}25 0%, transparent 50%),
        radial-gradient(ellipse at 80% 70%, ${lightColor}20 0%, transparent 50%),
        radial-gradient(ellipse at 40% 80%, ${lightColor}15 0%, transparent 60%),
        radial-gradient(ellipse at 60% 20%, ${lightColor}20 0%, transparent 50%),
        linear-gradient(135deg, #020617 0%, #0c1929 25%, #0f172a 50%, #0c1929 75%, #020617 100%)
      `
    }}
  >
    {/* Animated overlay for visual interest */}
    <div
      className="absolute inset-0 opacity-30"
      style={{
        background: `
          linear-gradient(45deg, transparent 40%, ${lightColor}10 50%, transparent 60%),
          linear-gradient(-45deg, transparent 40%, ${lightColor}08 50%, transparent 60%)
        `,
        animation: 'pulse 4s ease-in-out infinite'
      }}
    />
  </div>
)

// Loading state
const LoadingBackground = () => (
  <div className="w-full h-full absolute inset-0 bg-[#020617]" />
)

// Dynamically import the 3D beams component (only on client, no SSR)
const Beams3D = dynamic(
  () => import("./Beams3D").then(mod => mod.Beams3D),
  {
    ssr: false,
    loading: () => <LoadingBackground />
  }
)

export function Beams(props: BeamsProps) {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Check WebGL support
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas')
        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
        if (gl) {
          // Test if we can actually use it
          const testCanvas = document.createElement('canvas')
          testCanvas.width = 1
          testCanvas.height = 1
          const testGl = testCanvas.getContext('webgl')
          if (testGl) {
            return true
          }
        }
        return false
      } catch {
        return false
      }
    }

    setHasWebGL(checkWebGL())
  }, [])

  // Still checking
  if (hasWebGL === null) {
    return <LoadingBackground />
  }

  // WebGL not available or error occurred
  if (!hasWebGL || hasError) {
    return <FallbackBackground lightColor={props.lightColor} />
  }

  return (
    <Suspense fallback={<LoadingBackground />}>
      <div
        className="w-full h-full absolute inset-0"
        onError={() => setHasError(true)}
      >
        <Beams3D {...props} onError={() => setHasError(true)} />
      </div>
    </Suspense>
  )
}

export default Beams
