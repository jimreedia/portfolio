# Refine featured case studies: diagnostic notes

Diagnostic pass (2026-09-09) on the 3 featured pages against the "senior/principal
standard" described in the "Refine case study content" backlog item. **No copy was
changed.** Each list below is meant to be worked through in Jim's voice, checked
against the jimreed.net / myportfolio originals.

Context: the featured 3 already have good narrative structure and are based on Jim's
own writing, so they do NOT need the ground-up restructuring the 9 non-featured pages
got. They need targeted editing. See the backlog item for the session-by-session
history.

The cross-cutting points below (weak lead line, section-heading tiers, reflection
section, captions) apply to all 12 case studies, not just the featured 3.

---

## Cross-cutting (all 3)

1. **The page lead is a category label, not an outcome.** `cs.description` renders
   as the 22px subtitle under the title (`.case-study__lead`). All three are vague:
   - Agentic AI Chat: "Leveraging AI experiences to create valuable outcomes for customers."
   - Genomic Data Platform: "Tools for scientists to analyze genomic data for pharmaceutical and clinical needs."
   - AI Recommendations: "Using machine learning to create valuable outcomes for customers."
   Rewrite each as one sharp sentence that names the result. The sharper version
   already exists in each `blurb` and just needs compressing. Highest-leverage single fix.

2. **The strong writing is hidden.** Each `blurb` is specific, first-person, and
   outcome-led; the detail page never shows it (homepage card only). Decide: lift
   blurb-quality language into the lead + opening section, or also render the blurb
   on the detail page.

3. **No reflection section.** None of the three has a "what I'd do differently / what
   I learned" close. Add one to each.

4. **Section headings: two tiers, not one formula.** Bare activity labels ("Card
   Sorting," "User Interviews," "Storyboards," "Sketches and Renderings," "Animated
   Behaviors") tell the reader what was done, not what was decided or why it mattered.
   Fix them by tier:
   - **Decision / bet sections** (the 1 or 2 per case study that carry the argument):
     the heading names the decision, and the opening sentence states the call plus what
     was traded away. "Inline, not a separate panel." "Why the donut chart had to go."
     "One measurement method, shipped by three teams." Do not wrap these in the pattern
     below or the strongest material gets buried.
   - **Supporting / craft sections** (everything else): "Activity + concrete goal."
     "Storyboards to Find the Critical Features." "A Mood Board for Emergency Alerting."
     "Screen Flows for the Detailed Actions." This keeps the artifact visible (a
     portfolio reader scans for "storyboards / research / wireframes"), adds the why,
     and does not overclaim an outcome that was not there. Two cautions: vary the
     construction so it is not literally "X to Y" every heading, and keep the goal
     concrete ("...to Find the Critical Features" names a design output; "...to Align
     the Team" is still filler).
   - Nothing stays a bare label.

5. **Captions are alt text, not rationale.** Section images carry accessibility `alt`
   only, no visible caption. The backlog asks for captions that carry design rationale.
   That needs a small schema/renderer change first (a `caption` on image blocks +
   `<figcaption>` in `CaseStudyPage.jsx`) before the copy has anywhere to go. Flag as a
   build task.

---

## Agentic AI Chat

Structure: 6 sections, the tightest of the three; order is off.

- **Lead:** replace "Leveraging AI experiences to create valuable outcomes for
  customers." with the outcome (an agent 10,000+ engineers use to triage incidents
  faster).
- **Move "User Needs" up.** It is section 4, after AI in Context / UI Principles /
  Elements and Interactions. The SRE persona and the mid-incident context should frame
  the work, not arrive two-thirds through.
- **Metric inconsistency:** body says "10,000 employees," blurb says "10,000+ LinkedIn
  engineers." Pick one. State the time-savings as a number if there is one ("a major
  decrease in the time it takes developers to find root causes" is vague).
- **"UI Principles" and "Elements and Interactions" read as process reports** ("I
  conducted an audit," "I spec'd critical elements"). Reframe around the decisions: why
  a side panel over a modal or a full takeover; why plugins + contextual input +
  inline artifacts were the three primitives, and what was deliberately left out.
- **"Branding" is the strongest section already** (custom icon reinforces trust;
  telescope + sparkle). Keep the shape, tighten.
- **Add a reflection:** what did not work, what you would revisit about the panel model
  or the component set.
- **Schema:** this page still uses the legacy `body`/`image` shape; the other two use
  `blocks`. Normalize while editing.

---

## Genomic Data Platform

Structure: 9 sections, ~6 of them a methods tour (Personas, Card Sorting, User
Interviews, Storyboards, Prototypes, then Enhancing the Experience / User-Centered
Design / Cross-Product Design).

- **Lead:** "Tools for scientists to analyze genomic data..." is a topic. The blurb
  has the story (evidence-based personas + card sorting + field feedback turned into
  shipped visualization features; one cohesive multiomic platform). Compress that.
- **Collapse the methods tour.** Personas / Card Sorting / User Interviews / Storyboards
  / Prototypes is five sections for "I did discovery." Merge into one or two that lead
  with what the research changed: which mental model won, which terminology was
  adopted, which early concept was killed.
- **Cut the generic openers.** "The discovery phase is one of my favorite parts of the
  design process." "Storyboards help communicate to product stakeholders..."
  "Prototypes are invaluable UX tools for communicating..." These are textbook
  definitions, not the work. Open each section on a decision or a stake.
- **Weak contribution:** "I created personas based on interviews," "I collaborated with
  UX researchers and conducted," "I conducted several user interviews." The Storyboards
  and Prototypes sections have no "I" at all. Where was Jim the one who decided?
- **The two best sections are buried at the end.** "Enhancing the Experience" (customer
  feedback into a gene-discovery heat map) and "User-Centered Design" (user testing
  into radar charts for variant types) are real "feedback became a shipped feature"
  stories. Pull them forward; name the feature and the result.
- **No metrics anywhere.** "Accelerate biomarker and drug discovery" is the mission,
  not a result. What shipped, adoption, anything measurable?
- **"Cross-Product Design"** (applying the system across proteomics + spatial apps) is
  a genuine principal-scope point, underplayed as a one-liner. Expand: what made the
  shared system hold across three very different data types.
- **Add a reflection.**

---

## AI Recommendations

Structure: 11 sections, too many; several are one sentence or image-only.

- **Lead:** replace "Using machine learning to create valuable outcomes for customers."
  with the blurb's story (an inline recommendation model that suggests the next
  transforms without breaking the developer's flow; a precision-tracking method Jim
  got cross-functional teams to ship).
- **Cut or merge the thin sections:** "Storyboards" (one sentence), "Branded
  Explorations" (image only), "Animated Behaviors" (one sentence), "Sketches and
  Renderings" (one sentence + two images). This is an artifact gallery. Fold the
  useful pieces into a single "how the concept evolved" beat; drop the rest.
- **"Customer Delight" is fluff** for a principal portfolio ("Users think the end
  results are pretty cool" + a casual quote). Cut it, or turn it into a real outcome
  statement.
- **"Inline Recommendations" and "Precision Model" are the whole case study.** Inline
  Recommendations is a real design bet (predictive-text analogy; seamless, not
  jarring). Precision Model is the standout: Jim designed a measurement method and
  convinced cross-functional teams to build it so the model retrains on real choices.
  That is principal-level influence. Give both more room; consider building the page
  around them.
- **Best contribution language of the three** lives here ("I advocated," "I convinced
  cross-functional teams," "convinced executive leadership that modernizing the UI was
  a sound business goal"). Keep that register; raise the weaker sections to it.
- **No metrics.** Model precision/accuracy, adoption of the recommendations, anything.
- **"Visual Redesign"** (convinced execs to modernize the UI) is a strong influence
  story stranded at the end as a one-liner. Expand or move.
- **Add a reflection.** The false-positive handling and the retrain loop are natural
  material.
