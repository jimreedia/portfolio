# Refine case studies: working notes

The single home for the "Refine case study content" backlog item. Diagnostic pass
started 2026-09-09. **No copy has been changed yet.** Everything below is meant to be
worked through in Jim's voice, checked against the jimreed.net / myportfolio originals.

Two starting positions, per the backlog history:
- **Featured 3** (Agentic AI Chat, Genomic Data Platform, AI Recommendations): already
  have good narrative structure and are built from Jim's own writing. They need
  targeted editing, not restructuring. Detailed punch lists below.
- **The 6 listed "more" pages**: restructured this session from a 4-line skeleton into
  the `blocks` format. Structure is good; the prose is Claude's synthesis of thin
  myportfolio text plus production-image detail, so it needs a source reconciliation
  and a voice pass on top of the cross-cutting fixes.
- **The 3 unlisted pages** (Samsung, Banking, Walmart): lowest priority, see the stubs
  at the end.

---

## Cross-cutting (every case study)

1. **The page lead is a category label, not an outcome.** `cs.description` renders as
   the 22px subtitle under the title (`.case-study__lead`). Most are vague ("Leveraging
   AI experiences to create valuable outcomes for customers"). Rewrite each as one
   sharp sentence that names the result. For the featured 3 the sharper line already
   exists in each `blurb` and just needs compressing. Highest-leverage single fix.

2. **The strong writing is hidden (featured 3).** Each featured `blurb` is specific,
   first-person, and outcome-led; the detail page never shows it (homepage card only).
   Decide: lift blurb-quality language into the lead + opening section, or also render
   the blurb on the detail page. (The 6 "more" pages don't have this split; their
   `blurb` and `description` were written together this session.)

3. **No reflection section.** No page has a "what I'd do differently / what I learned"
   close. Add one to each.

4. **Section headings: two tiers, not one formula.** Bare activity labels ("Card
   Sorting," "Storyboards," "Wireframes") tell the reader what was done, not what was
   decided or why it mattered. Fix by tier:
   - **Decision / bet sections** (the 1 or 2 per case study that carry the argument):
     the heading names the decision, and the opening sentence states the call plus what
     was traded away. "Inline, not a separate panel." "Why the donut chart had to go."
     "One measurement method, shipped by three teams." Do not wrap these in the pattern
     below or the strongest material gets buried.
   - **Supporting / craft sections** (everything else): "Activity + concrete goal."
     "Storyboards to Find the Critical Features." "A Mood Board for Emergency Alerting."
     This keeps the artifact visible (a portfolio reader scans for "storyboards /
     research / wireframes"), adds the why, and does not overclaim an outcome that was
     not there. Two cautions: vary the construction so it is not literally "X to Y"
     every heading, and keep the goal concrete ("...to Find the Critical Features" names
     a design output; "...to Align the Team" is still filler).
   - Nothing stays a bare label.

5. **Real outcomes / metrics.** The featured 3 have one real number between them
   (10,000 engineers). The 6 "more" pages mostly have no stated outcome at all (the
   myportfolio sources didn't). Every page needs at least a qualitative result stated
   plainly, and a number wherever one exists (adoption, time saved, what shipped).

6. **Contribution language.** Watch for "I collaborated / I conducted / I helped" where
   it could be "I decided / I argued for / I owned." Sections that open on a generic
   truism ("Storyboards help communicate to stakeholders...", "Prototypes are invaluable
   UX tools...") should open on Jim's decision instead.

7. **Captions are alt text, not rationale.** Section images carry accessibility `alt`
   only, no visible caption. The backlog asks for captions that carry design rationale.
   That needs a small schema/renderer change first (a `caption` on image blocks +
   `<figcaption>` in `CaseStudyPage.jsx`) before the copy has anywhere to go. Flag as a
   build task.

8. **Copy style:** no em-dashes (see backlog). Commas, colons, parentheses, or separate
   sentences.

---

## Featured

### Agentic AI Chat

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
  a side panel over a modal or a full takeover; why plugins + contextual input + inline
  artifacts were the three primitives, and what was deliberately left out.
- **"Branding" is the strongest section already** (custom icon reinforces trust;
  telescope + sparkle). Keep the shape, tighten.
- **Add a reflection:** what did not work, what you would revisit about the panel model
  or the component set.
- **Schema:** this page still uses the legacy `body`/`image` shape; the other two use
  `blocks`. Normalize while editing.

### Genomic Data Platform

Structure: 9 sections, ~6 of them a methods tour (Personas, Card Sorting, User
Interviews, Storyboards, Prototypes, then Enhancing the Experience / User-Centered
Design / Cross-Product Design).

- **Lead:** "Tools for scientists to analyze genomic data..." is a topic. The blurb has
  the story (evidence-based personas + card sorting + field feedback turned into shipped
  visualization features; one cohesive multiomic platform). Compress that.
- **Collapse the methods tour.** Personas / Card Sorting / User Interviews / Storyboards
  / Prototypes is five sections for "I did discovery." Merge into one or two that lead
  with what the research changed: which mental model won, which terminology was adopted,
  which early concept was killed.
- **Cut the generic openers.** "The discovery phase is one of my favorite parts of the
  design process." "Storyboards help communicate to product stakeholders..."
  "Prototypes are invaluable UX tools for communicating..." Textbook definitions, not
  the work. Open each section on a decision or a stake.
- **Weak contribution:** "I created personas based on interviews," "I collaborated with
  UX researchers and conducted," "I conducted several user interviews." The Storyboards
  and Prototypes sections have no "I" at all.
- **The two best sections are buried at the end.** "Enhancing the Experience" (customer
  feedback into a gene-discovery heat map) and "User-Centered Design" (user testing into
  radar charts for variant types) are real "feedback became a shipped feature" stories.
  Pull them forward; name the feature and the result.
- **No metrics anywhere.** "Accelerate biomarker and drug discovery" is the mission, not
  a result. What shipped, adoption, anything measurable?
- **"Cross-Product Design"** (applying the system across proteomics + spatial apps) is a
  genuine principal-scope point, underplayed as a one-liner. Expand: what made the
  shared system hold across three very different data types.
- **Add a reflection.**

### AI Recommendations

Structure: 11 sections, too many; several are one sentence or image-only.

- **Lead:** replace "Using machine learning to create valuable outcomes for customers."
  with the blurb's story (an inline recommendation model that suggests the next
  transforms without breaking the developer's flow; a precision-tracking method Jim got
  cross-functional teams to ship).
- **Cut or merge the thin sections:** "Storyboards" (one sentence), "Branded
  Explorations" (image only), "Animated Behaviors" (one sentence), "Sketches and
  Renderings" (one sentence + two images). Fold the useful pieces into a single "how the
  concept evolved" beat; drop the rest.
- **"Customer Delight" is fluff** for a principal portfolio ("Users think the end
  results are pretty cool" + a casual quote). Cut it, or turn it into a real outcome
  statement.
- **"Inline Recommendations" and "Precision Model" are the whole case study.** Inline
  Recommendations is a real design bet (predictive-text analogy; seamless, not jarring).
  Precision Model is the standout: Jim designed a measurement method and convinced
  cross-functional teams to build it so the model retrains on real choices. Give both
  more room; consider building the page around them.
- **Best contribution language of the three** lives here ("I advocated," "I convinced
  cross-functional teams," "convinced executive leadership..."). Keep that register;
  raise the weaker sections to it.
- **No metrics.** Model precision/accuracy, adoption of the recommendations, anything.
- **"Visual Redesign"** (convinced execs to modernize the UI) is a strong influence
  story stranded at the end as a one-liner. Expand or move.
- **Add a reflection.** The false-positive handling and the retrain loop are natural
  material.

---

## More (listed)

These 6 were restructured this session. Baseline for each: reconcile every claim
against the myportfolio original, bring it into Jim's voice, apply the cross-cutting
fixes (lead line, heading tiers, reflection, outcome). Page-specific notes:

### Operational Insights

Strongest of the 6. Real thesis ("the Monday-morning check is a glance, not an analysis
session") and a real ending (the customer quote about "the right kinds of metrics").
- Needs a metric beyond the quote (adoption, or what the two-tier dashboard measurably
  changed).
- "Reading AI Predictions" and "Observing Customer-Made Solutions" are close to
  decision/craft headings already; leave them, tighten the prose.
- Add a reflection.

### Developer Experience

Good outcome arc already (MVP catalog to Gartner demo to launch to Jim moving into the
PM seat). Headings are in decent shape.
- "A Persona to Design Around" and "Lo-Fi Wireframes and Motion Prototypes" still lean
  process; reframe around a decision (why storyboard around one architect persona; what
  the motion prototypes settled).
- "Driving Developer Adoption" (Jim convinced marketing to fund the video series) is a
  real influence story; give it more weight.
- Numbers: catalog size, adoption, video views if any.
- Add a reflection.

### Machine Learning for Operators

Strong frame ("get model training into the hands of the operations engineers, no data
scientist required") but **no stated outcome anywhere** (myportfolio had none).
- Find out / state whether it shipped, pilot results, adoption.
- "Seeing the Data Before Training" and "A Guided Model-Building Flow" are the design
  substance; "On-Site Contextual Research" and "Monitoring for Data Drift" support.
- Consider leading with the core bet (a guided wizard that hides the data-science
  process) as a decision section.
- Add a reflection.

### Mobile Emergency System

Process-heavy: Rapid Sketches / Screen Flows / Lo-Fi Wireframes / A Mood Board are four
craft sections in a row. No stated outcome.
- Consolidate the four craft sections to two.
- Thesis is "make a genuinely complex system feel simple under stress." Lead with a
  decision that embodies it (the always-present red emergency button; the skeuomorphic
  choice drawn from physical emergency hardware).
- "Emergency Situation Tracking," "Interactive Maps," "One System, Every Screen" are the
  product; keep those.
- Outcome: did it ship across iOS/Android/desktop, any deployment scale.
- Add a reflection.

### Additive Manufacturing

Has an "Outcome" section already but it is weak ("the clear productivity read the
operators had been missing").
- **"Rethinking the Visualization" (donut chart read as print-progress, replaced with a
  number + color after testing) is the decision story.** Promote it; make the heading
  name the decision.
- "Early Concept Sketches," "A Journey Map of Roles," "Personas" are process; collapse.
- Real metric for the Availability Score (facility rollout, what it changed).
- Add a reflection (the donut misfire is natural material).

### Analytics & Big Data

Two product sections (Data Explorer, Orchestration Editor) then three process sections
(journey map, task flows, sketches). No stated outcome, and it reads as partly
conceptual.
- Clarify what shipped vs. what was a concept ("I conceived Data Explorer" needs a
  follow-through).
- Collapse "Mapping the User Journey" / "Task Flows Mapped to the Product" / "Exploring
  Interactions With Sketches" into one process beat.
- "I conceived Data Explorer" is a strong ownership claim; build on it.
- Add a reflection.

---

## Unlisted (lowest priority)

These carry `"listed": false` and are off the site. Only worth touching if one is being
brought back. All three have thin myportfolio source (a few sentences) and no stated
outcomes, so a rehab is close to a rewrite and needs Jim's input on the actual story.

- **Banking Experiences** — the rehab candidate if any. Real scope (Creative Director at
  Traction, 20M+ customers, RITE testing, life-goals IA, student-banking strategy).
  Needs: real outcomes, the life-goals IA decision promoted, source reconciliation.
- **Samsung Interactive TV** — dated (consumer interactive TV, consultant role), only
  two images, most connective prose is invented. See the "drift to review" note in the
  backlog.
- **Walmart.com Content** — dated agency e-commerce work; the Super Bowl "Game Time"
  interactive is the one memorable piece.
