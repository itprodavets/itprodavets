---
name: write-post
description: Use when writing or drafting a blog/technical post in Denis's voice — e.g. "write a post about X", "draft a post on the MCP gateway", "/write-post <topic>". Pulls the matching experience-corpus entry, applies the style guide, drafts to the depth bar, and saves to writing/drafts/. If no corpus entry exists for the topic, interviews to capture one first. Do NOT use for résumé/CV edits or live-site content.
---

# Write a deep post in Denis's voice

Turn a topic into a deep, on-voice draft by combining the experience corpus (depth
material) with the style guide (voice + structure).

## Inputs you rely on

- `writing/style-guide.md` — voice, post anatomy, the depth bar. **Read it first,
  every time.**
- `writing/experience/*.md` — the corpus. Each file is structured material for one
  theme.
- `writing/experience/_template.md` — the shape of a corpus entry (for when you need
  to create one).

## Workflow

1. **Read the style guide** (`writing/style-guide.md`). It governs everything below —
   voice, the 7-part anatomy, and the depth bar a draft must clear.

2. **Find the matching corpus entry.** List `writing/experience/` and pick the file(s)
   on the topic before deciding.

3. **If no corpus entry exists — capture one first. Do not draft from nothing.** A
   post with no corpus entry will be shallow, which defeats the purpose. Instead:
   - Interview Denis briefly using the headings in `_template.md`: context, what he
     built, the hard calls, specifics (push for real numbers), the lesson.
   - Write the new `writing/experience/<slug>.md` from his answers.
   - Then continue.

4. **Draft the post** to the style guide's anatomy:
   hook → context → what I built → the hard call → specifics → lesson → close.
   - First person, past tense, outcome-first, no hedging.
   - Pull real specifics from the corpus entry. Invent nothing — if a number is
     missing, ask; don't fabricate.
   - Respect the corpus entry's **Confidentiality** line. For client work, stay at
     public level and keep only transferable lessons.

5. **Self-check against the depth bar** before presenting. The draft must have:
   - ≥1 real tradeoff (a decision with a genuine cost),
   - ≥1 concrete specific (number / scale / measured before-after / named failure),
   - ≥1 transferable insight.
   If any is missing, the corpus entry is probably thin — go back to step 3 for that
   dimension rather than padding.

6. **Save the draft** to `writing/drafts/YYYY-MM-DD-<slug>.md` with frontmatter:
   ```
   ---
   title: <a claim or tension, not a topic>
   date: YYYY-MM-DD
   summary: <one line>
   tags: [<...>]
   lang: en
   status: draft
   ---
   ```
   Use today's date. English by default — see the style guide on language.

7. **Tell Denis** where the draft is and which depth-bar items it leans on, so he can
   edit from there.

## What this skill does not do

- It does not publish to the site (`docs/`) — that's a separate step.
- It does not fabricate specifics — missing material means ask or capture, never
  invent.
- It does not write résumé/CV content.
