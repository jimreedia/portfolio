import caseStudies from '../data/caseStudies.json'

export function getFeatured() {
  return caseStudies.filter((c) => c.featured).slice(0, 3)
}

export function getMore() {
  const featuredIds = new Set(getFeatured().map((c) => c.id))
  return caseStudies.filter((c) => !featuredIds.has(c.id))
}

export function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
