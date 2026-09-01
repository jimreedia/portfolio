// Recreation of the placeholder graphic `public/assets/brand/pacman.png` as
// layered, animatable SVG. Composition mirrors the placeholder 1:1 on a
// 666 x 435 canvas (18px pixel grid, 12 x 12 per ghost).
//
// Three primary layers, each a top-level <g>, ready for scroll-linked animation:
//   1. .pacman__layer--text   caption + leader line + PRODUCT / USER labels
//                             (fades out on scroll)
//   2. .pacman__layer--red    red ghost (exits left on scroll)
//   3. .pacman__layer--orange orange ghost, chasing; its pupils scan left/right
//
// This step lays everything out in the static starting position only. The
// interactive animation comes next.

const GHOST_TOP = 128
const RED_X = 30
const ORANGE_X = 389

// Pupil x-offset inside a 54px (3-cell) eye: 0 = looking left, 18 = centre,
// 36 = looking right.
const LOOK = { left: 0, center: 18, right: 36 }

function Ghost({ x, color, look }) {
  const off = LOOK[look]
  return (
    <g transform={`translate(${x} ${GHOST_TOP})`} shapeRendering="crispEdges">
      {/* body — stepped dome, full torso, four blocky feet. Rows overlap by 1px
          so no anti-aliased hairline seam shows between them. */}
      <g fill={color}>
        <rect x="54" y="0" width="108" height="19" />
        <rect x="18" y="18" width="180" height="19" />
        <rect x="18" y="36" width="180" height="19" />
        <rect x="0" y="54" width="216" height="145" />
        <rect x="0" y="197" width="36" height="19" />
        <rect x="54" y="197" width="36" height="19" />
        <rect x="108" y="197" width="36" height="19" />
        <rect x="162" y="197" width="36" height="19" />
      </g>

      {/* eye whites — two 3x3-cell blocks */}
      <rect x="36" y="54" width="54" height="54" fill="#fff" />
      <rect x="126" y="54" width="54" height="54" fill="#fff" />

      {/* pupils — one cell each, slide horizontally within the eye */}
      <g className="pacman__pupils" fill="#0D0D12">
        <rect className="pacman__pupil pacman__pupil--l" x={36 + off} y="72" width="18" height="18" />
        <rect className="pacman__pupil pacman__pupil--r" x={126 + off} y="72" width="18" height="18" />
      </g>
    </g>
  )
}

export default function PacmanScene() {
  return (
    <svg
      className="pacman-scene brand-imagery__illustration"
      viewBox="0 0 666 435"
      role="img"
      aria-label="Two pixel-art PacMan ghosts labelled PRODUCT and USER, with a caption reading &quot;I love you, man.&quot;"
    >
      {/* Layer 2: red ghost (PRODUCT) — looking right, toward the chase */}
      <g className="pacman__layer pacman__layer--red">
        <Ghost x={RED_X} color="#FF0000" look="right" />
      </g>

      {/* Layer 3: orange ghost (USER) — looking left, chasing */}
      <g className="pacman__layer pacman__layer--orange">
        <Ghost x={ORANGE_X} color="#FF7F00" look="left" />
      </g>

      {/* Layer 1: text — caption, leader line, and the two labels */}
      <g className="pacman__layer pacman__layer--text">
        <text className="pacman__caption" x="298" y="34">I LOVE YOU, MAN.</text>
        <line className="pacman__leader" x1="416" y1="56" x2="473" y2="111" />
        <text className="pacman__label" x="138" y="398" textAnchor="middle">PRODUCT</text>
        <text className="pacman__label" x="497" y="398" textAnchor="middle">USER</text>
      </g>
    </svg>
  )
}
