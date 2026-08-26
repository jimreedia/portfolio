import { useState } from 'react'
import { assetUrl } from '../lib/caseStudies'

const SWIPE_THRESHOLD = 50

export default function Carousel({ images, title }) {
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [touchStartX, setTouchStartX] = useState(null)

  const count = images.length
  const slides = [...images, images[0]]

  const goNext = () => {
    setAnimate(true)
    setIndex((i) => i + 1)
  }

  const handleTransitionEnd = () => {
    if (index === count) {
      setAnimate(false)
      setIndex(0)
    }
  }

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX)
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return
    const delta = e.changedTouches[0].clientX - touchStartX
    if (Math.abs(delta) > SWIPE_THRESHOLD) goNext()
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
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: animate ? 'transform 300ms ease' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((src, i) => (
            <div className="carousel__slide" key={i}>
              <img
                className="carousel__slide-image"
                src={assetUrl(src)}
                alt={`${title} screenshot ${(i % count) + 1} of ${count}`}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="carousel__arrow carousel__arrow--next"
          onClick={goNext}
          aria-label={`Next image for ${title}`}
        >
          ›
        </button>
      </div>

      <div className="carousel__dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`carousel__dot ${i === index % count ? 'carousel__dot--active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
