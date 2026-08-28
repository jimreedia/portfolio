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

// Previous / next case study, wrapping at the ends. Scoped to featured case
// studies for now, since the More Case Studies section is hidden.
export function getNeighbors(id) {
  const list = getFeatured()
  const i = list.findIndex((c) => c.id === id)
  if (i === -1) return { prev: null, next: null }
  const n = list.length
  return {
    prev: list[(i - 1 + n) % n],
    next: list[(i + 1) % n],
  }
}

export function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
