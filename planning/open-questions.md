## Open Questions for Designer

### Video Content

Jim's current site has a Video Examples section. Recommended approach for the redesign:

**Primary recommendation:** Integrate relevant video clips into individual case study detail pages as supporting evidence of process or output. This is the most contextually appropriate home for them.

**Secondary option:** Maintain a dedicated Video Examples page linked from the footer only — not from the main nav. This keeps the homepage focused while preserving the content.

**Do not** embed video in the homepage. It adds weight and competes with the case study imagery.

The designer should review each video and assign it to a case study or the archive page before the case study detail pages are built.

### Brand Imagery Assets

The two illustrations (PacMan graphic and floating hand/gear) have been added to `/public/assets/brand/`.

### Profile Photo

The photo has been added to `/public/assets/jimreed_head_512x512.png`.

### Case Study Detail Pages

Individual case study page routes (e.g., `/case-study/agentic-ai-chat`) are TBD. Use placeholder `href="#"` for all case study links until routing is defined in the next planning session. The coding agent should add a `// TODO: link to case study` comment at each occurrence.

### Upcoming New Case Study

A new case study (LinkedIn observability/data platforms work) is planned as a featured case study. It will take the `featured: true` flag in `caseStudies.json` when content is ready. The designer will define position/order at that time.


**Animation:** CSS keyframe float loop — gentle vertical oscillation.

```css
@keyframes float {
  0% { transform: translateY(0px); }
  100% { transform: translateY(-12px); }
}

.illustration-float {
  animation: float 2.8s ease-in-out infinite alternate;
}
```


| Floating hand illustration | Float loop | `translateY(0 → -12px)`, 2.8s ease-in-out, infinite alternate |
