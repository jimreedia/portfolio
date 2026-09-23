const KEY = 'homeScrollY'

// Captured on click, not on scroll: a click is the one moment we know "this
// is the position to come back to," and sessionStorage survives the
// navigation to the case study page (Link `state` doesn't need to carry it).
export function saveHomeScrollPosition() {
  sessionStorage.setItem(KEY, String(window.scrollY))
}

export function readHomeScrollPosition() {
  const value = sessionStorage.getItem(KEY)
  return value === null ? null : Number(value)
}
