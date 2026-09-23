import { useState } from 'react'
import { Link } from 'react-router-dom'
import { assetUrl } from '../lib/caseStudies'
import { saveHomeScrollPosition } from '../lib/homeScroll'

const SWIPE_THRESHOLD = 50

export default function Carousel({ images, title, url }) {
  const count = images.length
  const slides = count > 1 ? [images[count - 1], ...images, images[0]] : images

  const [index, setIndex] = useState(count > 1 ? 1 : 0)
  const [animate, setAnimate] = useState(true)
  const [touchStartX, setTouchStartX] = useState(null)

  const realIndex = count > 1 ? ((index - 1) % count + count) % count : 0

  const goNext = () => {
    setAnimate(true)
    setIndex((i) => i + 1)
  }

  const goPrev = () => {
    setAnimate(true)
    setIndex((i) => i - 1)
  }

  const goTo = (i) => {
    setAnimate(true)
    setIndex(i + 1)
  }

  const handleTransitionEnd = () => {
    if (index === slides.length - 1) {
      setAnimate(false)
      setIndex(1)
    } else if (index === 0) {
      setAnimate(false)
      setIndex(count)
    }
  }

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX)
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return
    const delta = e.changedTouches[0].clientX - touchStartX
    if (delta < -SWIPE_THRESHOLD) goNext()
    else if (delta > SWIPE_THRESHOLD) goPrev()
    setTouchStartX(null)
  }

  return (
    <div className="carousel">
      <Link
        to={url}
        state={{ fromHome: true }}
        className="carousel__frame"
        aria-label={`View case study: ${title}`}
        onClick={saveHomeScrollPosition}
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
        <span className="carousel__overlay">
          <span className="carousel__cta">View Case Study →</span>
        </span>
      </Link>

      {count > 1 && (
        <div className="carousel__controls">
          <button
            type="button"
            className="carousel__arrow carousel__arrow--prev"
            onClick={goPrev}
            aria-label={`Previous image for ${title}`}
          >
            ‹
          </button>

          <div className="carousel__dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`carousel__dot ${i === realIndex ? 'carousel__dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1} of ${count}`}
                aria-current={i === realIndex}
              />
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
      )}
    </div>
  )
}
