import { useCallback, useEffect, useRef } from 'react'
import { assetUrl } from '../lib/caseStudies'

// Full-screen image viewer. Flip through `images` (array of { src, alt }) with the
// on-screen arrows, the ← / → keys, or swipe; Esc or a backdrop click closes it.
export default function Lightbox({ images, index, onIndexChange, onClose }) {
  const closeRef = useRef(null)
  const touchStartX = useRef(null)

  const count = images.length
  const atStart = index <= 0
  const atEnd = index >= count - 1

  const goPrev = useCallback(() => {
    onIndexChange((i) => Math.max(0, i - 1))
  }, [onIndexChange])

  const goNext = useCallback(() => {
    onIndexChange((i) => Math.min(count - 1, i + 1))
  }, [onIndexChange, count])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', onKey)

    const opener = document.activeElement
    closeRef.current?.focus()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      if (opener instanceof HTMLElement) opener.focus()
    }
  }, [onClose, goPrev, goNext])

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (delta > 50) goPrev()
    else if (delta < -50) goNext()
    touchStartX.current = null
  }

  const image = images[index]

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt || 'Image viewer'}
      onClick={onClose}
    >
      <button ref={closeRef} type="button" className="lightbox__close" onClick={onClose} aria-label="Close image viewer">
        ×
      </button>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--prev"
        onClick={(e) => { e.stopPropagation(); goPrev() }}
        disabled={atStart}
        aria-label="Previous image"
      >
        ‹
      </button>

      <figure
        className="lightbox__figure"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img className="lightbox__image" src={assetUrl(image.src)} alt={image.alt || ''} />
      </figure>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--next"
        onClick={(e) => { e.stopPropagation(); goNext() }}
        disabled={atEnd}
        aria-label="Next image"
      >
        ›
      </button>

      <p className="lightbox__counter">{index + 1} / {count}</p>
    </div>
  )
}
