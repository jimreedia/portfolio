// "jr." monogram — a crisp vector redraw of the favicon from jimreed.net.
// Kept in sync with public/favicon.svg.
export default function JrMark({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      width="30"
      height="30"
      role="img"
      aria-label="Jim Reed"
    >
      <rect width="32" height="32" fill="#212121" />
      <g transform="translate(1 0)">
        <g
          fill="none"
          stroke="#fff"
          strokeWidth="2.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10.7 7.4V24.6Q10.7 29 6.2 28.7" />
          <path d="M17.4 25V10.3Q17.4 7.4 20.7 7.4" />
        </g>
        <circle cx="10.7" cy="3.5" r="1.85" fill="#fff" />
        <circle cx="24" cy="24.7" r="1.78" fill="#fff" />
      </g>
    </svg>
  )
}
