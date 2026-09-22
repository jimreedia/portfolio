import { useEffect, useRef, useState } from 'react'

// Extracted straight from the original vector artwork, brand/hand gear/hand_gear.ai
// (a PDF-compatible Illustrator file, read with PyMuPDF's get_drawings()), replacing
// an earlier OpenCV raster trace of a lower-res PNG — real cubic-bezier curves instead
// of a polygon approximation, so the outline reads smoother at any size. Gear and hand
// are separate paths/viewBoxes so the gear alone can hide and burst.
const GEAR_VIEWBOX = '0 0 35.8610 35.8620'
const GEAR_D =
  'M17.93 23.23 C15.00 23.23 12.63 20.86 12.63 17.93 C12.63 15.01 15.00 12.64 17.93 12.64 C20.85 12.64 23.22 15.01 23.22 17.93 C23.22 20.86 20.85 23.23 17.93 23.23 Z M32.38 19.09 L35.86 16.00 L35.55 14.11 L31.28 12.28 L28.97 8.53 L29.24 3.89 L27.69 2.77 L23.37 4.49 L19.09 3.48 L16.00 0.00 L14.11 0.31 L12.28 4.58 L8.53 6.89 L3.89 6.62 L2.77 8.17 L4.49 12.49 L3.47 16.77 L0.00 19.86 L0.30 21.75 L4.58 23.59 L6.89 27.33 L6.62 31.97 L8.17 33.09 L12.49 31.37 L16.77 32.38 L19.86 35.86 L21.75 35.56 L23.58 31.28 L27.33 28.97 L31.97 29.25 L33.09 27.69 L31.37 23.38 L32.38 19.09 Z'

const HAND_VIEWBOX = '0 0 53.9120 89.9080'
const HAND_D =
  'M22.64 88.03 C17.51 86.66 13.70 83.84 11.29 79.65 C11.14 79.34 8.38 73.57 7.38 69.02 C6.80 66.42 5.40 63.27 4.16 60.49 C3.30 58.57 2.56 56.92 2.21 55.69 C1.69 53.91 2.20 51.88 2.74 49.73 C3.21 47.90 3.68 46.01 3.57 44.16 C3.46 42.40 3.44 40.48 3.43 38.70 C3.40 36.35 3.38 34.14 3.15 33.28 C2.73 31.72 0.77 28.05 0.41 27.58 C0.00 27.07 0.03 26.36 0.50 25.66 C1.29 24.46 3.74 22.93 6.85 24.28 C9.80 25.56 12.89 29.80 14.35 34.06 C16.14 27.51 19.55 15.08 20.64 11.66 C22.06 7.23 25.56 0.00 29.70 1.00 L29.70 1.00 C32.89 1.85 34.14 4.76 33.10 8.63 C32.49 10.93 30.23 19.95 28.69 26.63 C29.21 25.94 29.80 25.34 30.49 24.91 C31.59 24.23 32.78 24.06 34.03 24.39 C38.36 25.62 40.24 28.95 39.36 33.64 C40.83 33.93 43.25 34.73 44.48 36.91 C45.44 38.60 45.75 40.54 45.85 41.67 C46.99 41.84 48.43 42.54 49.40 43.59 C51.19 45.53 53.91 53.67 52.52 61.69 C51.40 68.09 46.56 74.12 43.96 77.37 C43.31 78.17 42.82 78.77 42.61 79.13 C41.76 80.57 40.50 84.39 39.96 86.01 L39.76 86.59 C39.13 88.47 29.66 89.91 22.64 88.03 Z M2.22 26.69 C3.01 27.92 4.66 31.19 5.09 32.76 C5.39 33.86 5.40 35.98 5.43 38.68 C5.45 40.42 5.47 42.32 5.57 44.03 C5.70 46.20 5.16 48.33 4.69 50.22 C4.22 52.10 3.77 53.87 4.14 55.13 C4.46 56.22 5.20 57.90 5.99 59.68 C7.27 62.54 8.72 65.79 9.34 68.58 C10.30 72.91 13.04 78.66 13.07 78.72 C15.16 82.37 18.57 84.87 23.16 86.09 C29.80 87.87 36.64 86.37 37.95 85.69 L38.05 85.38 C38.66 83.55 39.92 79.73 40.89 78.11 C41.14 77.67 41.67 77.02 42.39 76.11 C44.88 73.01 49.52 67.23 50.54 61.34 C51.83 53.93 49.26 46.40 47.93 44.95 C47.37 44.35 46.71 43.94 45.96 43.74 C45.39 43.59 44.98 43.62 44.98 43.62 L43.90 43.70 L43.89 42.61 C43.89 42.58 43.89 39.94 42.74 37.89 C41.49 35.68 38.11 35.48 38.09 35.48 L36.85 35.41 L37.17 34.22 C37.95 31.32 37.95 27.59 33.57 26.35 L33.56 26.35 C32.81 26.15 32.17 26.24 31.55 26.62 C29.47 27.89 28.23 32.00 27.92 33.47 C27.71 34.14 27.23 35.67 26.06 35.35 L25.52 35.21 L25.24 34.51 C24.74 32.92 31.10 8.35 31.16 8.11 C31.60 6.49 31.93 3.67 29.33 2.97 C27.11 2.44 24.11 7.39 22.55 12.27 C21.10 16.83 15.24 38.44 15.18 38.66 L13.42 45.15 L13.21 38.43 C13.05 33.62 9.05 27.42 6.05 26.12 C4.00 25.25 2.60 26.21 2.22 26.69 Z'

const BURST_MS = 900
const REGROW_MS = 1500
const GROWTH_STEP = 0.15
const MAX_GROWTH_LEVEL = 6

const CONFETTI_COLORS = [
  'var(--color-accent)',
  'var(--color-accent-on-light)',
  'var(--color-text-bright-on-dark)',
  'var(--color-frame)',
  'var(--color-surface-light)',
  'var(--color-surface-mid)',
]

// Hand-authored (not Math.random()) so the burst looks varied but is the
// same, testable animation every time.
const CONFETTI_PIECES = [
  { tx: -52, ty: -18, rot: -120, delay: 0, shape: 'rect' },
  { tx: -38, ty: -46, rot: 60, delay: 30, shape: 'circle' },
  { tx: -10, ty: -58, rot: -200, delay: 10, shape: 'triangle' },
  { tx: 18, ty: -54, rot: 140, delay: 50, shape: 'rect' },
  { tx: 44, ty: -34, rot: -80, delay: 20, shape: 'circle' },
  { tx: 56, ty: -6, rot: 220, delay: 60, shape: 'triangle' },
  { tx: 50, ty: 24, rot: -160, delay: 15, shape: 'rect' },
  { tx: 28, ty: 48, rot: 100, delay: 45, shape: 'circle' },
  { tx: -6, ty: 56, rot: -240, delay: 5, shape: 'triangle' },
  { tx: -34, ty: 46, rot: 180, delay: 55, shape: 'rect' },
  { tx: -54, ty: 20, rot: -60, delay: 25, shape: 'circle' },
  { tx: -60, ty: -8, rot: 260, delay: 40, shape: 'triangle' },
  { tx: -20, ty: -36, rot: -150, delay: 35, shape: 'rect' },
  { tx: 10, ty: -20, rot: 90, delay: 65, shape: 'circle' },
  { tx: 34, ty: 4, rot: -300, delay: 8, shape: 'triangle' },
  { tx: 0, ty: 36, rot: 200, delay: 48, shape: 'rect' },
]

export default function HandGearMark() {
  const [state, setState] = useState('idle') // 'idle' | 'bursting' | 'hidden'
  const [growthLevel, setGrowthLevel] = useState(0)
  const timers = useRef([])

  useEffect(() => {
    return () => timers.current.forEach(clearTimeout)
  }, [])

  const handleClick = () => {
    if (state !== 'idle') return
    setState('bursting')
    timers.current.push(setTimeout(() => setState('hidden'), BURST_MS))
    timers.current.push(
      setTimeout(() => {
        setState('idle')
        setGrowthLevel((level) => Math.min(level + 1, MAX_GROWTH_LEVEL))
      }, BURST_MS + REGROW_MS)
    )
  }

  return (
    <div className="brand-imagery__mark">
      <svg className="brand-imagery__hand" viewBox={HAND_VIEWBOX} aria-hidden="true">
        <path d={HAND_D} fillRule="evenodd" />
      </svg>

      <button
        type="button"
        className={`brand-imagery__gear-btn brand-imagery__gear-btn--${state}`}
        style={{ '--growth-scale': 1 + growthLevel * GROWTH_STEP }}
        onClick={handleClick}
        aria-label="Play confetti animation"
      >
        <svg className="brand-imagery__gear" viewBox={GEAR_VIEWBOX} aria-hidden="true">
          <path d={GEAR_D} fillRule="evenodd" />
        </svg>
        <span className="brand-imagery__confetti" aria-hidden="true">
          {CONFETTI_PIECES.map((piece, i) => (
            <span
              key={i}
              className={`brand-imagery__confetti-piece brand-imagery__confetti-piece--${piece.shape}`}
              style={{
                '--tx': `${piece.tx}px`,
                '--ty': `${piece.ty}px`,
                '--rot': `${piece.rot}deg`,
                '--delay': `${piece.delay}ms`,
                '--piece-color': CONFETTI_COLORS[i % CONFETTI_COLORS.length],
              }}
            />
          ))}
        </span>
      </button>
    </div>
  )
}
