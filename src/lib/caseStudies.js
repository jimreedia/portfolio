import caseStudies from '../data/caseStudies.json'

export function getFeatured() {
  return caseStudies.filter((c) => c.featured).slice(0, 3)
}

export function getMore() {
  const featuredIds = new Set(getFeatured().map((c) => c.id))
  return caseStudies.filter((c) => !featuredIds.has(c.id))
}

export function getById(id) {
  return caseStudies.find((c) => c.id === id)
}

// Previous / next case study in list order, wrapping at the ends.
export function getNeighbors(id) {
  const i = caseStudies.findIndex((c) => c.id === id)
  if (i === -1) return { prev: null, next: null }
  const n = caseStudies.length
  return {
    prev: caseStudies[(i - 1 + n) % n],
    next: caseStudies[(i + 1) % n],
  }
}

export function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
