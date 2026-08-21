import { useState } from 'react'

const SWIPE_THRESHOLD = 50

export default function Carousel({ images, title, overlayText = 'View Case Study →' }) {
  const [index, setIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)

  const count = images.length
  const atStart = index === 0
  const atEnd = index === count - 1

  const goPrev = () => setIndex((i) => Math.max(0, i - 1))
  const goNext = () => setIndex((i) => Math.min(count - 1, i + 1))

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX)
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return
    const delta = e.changedTouches[0].clientX - touchStartX
    if (delta > SWIPE_THRESHOLD) goPrev()
    else if (delta < -SWIPE_THRESHOLD) goNext()
    setTouchStartX(null)
  }

  return (
    <div className="carousel">
      <div
        className="carousel__frame"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((_, i) => (
            <div className="carousel__slide" key={i}>
              <div className="carousel__slide-tile">{`Image ${i + 1} of ${count}`}</div>
            </div>
          ))}
        </div>

        <div className="carousel__overlay">{overlayText}</div>

        <button
          type="button"
          className="carousel__arrow carousel__arrow--prev"
          onClick={goPrev}
          disabled={atStart}
          aria-label={`Previous image for ${title}`}
        >
          ‹
        </button>
        <button
          type="button"
          className="carousel__arrow carousel__arrow--next"
          onClick={goNext}
          disabled={atEnd}
          aria-label={`Next image for ${title}`}
        >
          ›
        </button>
      </div>

      <div className="carousel__dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`carousel__dot ${i === index ? 'carousel__dot--active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
