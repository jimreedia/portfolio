import caseStudies from '../data/caseStudies.json'

// Entries with `listed: false` are unlisted: their /case-study/<id> page still
// works via a direct link, but they're kept out of the homepage grid and the
// prev/next rotation.
const listed = caseStudies.filter((c) => c.listed !== false)

export function getFeatured() {
  return listed.filter((c) => c.featured).slice(0, 3)
}

export function getMore() {
  const featuredIds = new Set(getFeatured().map((c) => c.id))
  return listed.filter((c) => !featuredIds.has(c.id))
}

export function getById(id) {
  return caseStudies.find((c) => c.id === id)
}

// Previous / next case study in listed order, wrapping at the ends. An unlisted
// page has no neighbors (it isn't part of the rotation).
export function getNeighbors(id) {
  const i = listed.findIndex((c) => c.id === id)
  if (i === -1) return { prev: null, next: null }
  const n = listed.length
  return {
    prev: listed[(i - 1 + n) % n],
    next: listed[(i + 1) % n],
  }
}

export function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
