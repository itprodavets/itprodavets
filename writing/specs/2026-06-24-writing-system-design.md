# Writing system — design

**Date:** 2026-06-24
**Status:** approved, building
**Repo:** itprodavets/itprodavets

## Goal

Make future posts **deeper** and **easier to write**, in a consistent voice.

Today the repo holds my experience as a résumé (`docs/`). A résumé *lists* what I
did. A deep post *shows the judgment* behind it — and that is what Forward
Deployed / Applied AI hiring (OpenAI, Anthropic, Cognition, Sierra, Databricks)
actually reads for. The gap: turning lived experience into deep posts is slow, and
the result drifts in tone. This system closes that gap.

## The problem with "just write posts"

- **Depth is lost.** The specifics that make a post good — the real tradeoff, the
  number, the thing that broke — live in my head and evaporate. Posts come out
  shallow ("X is great, here's a tutorial").
- **Voice drifts.** Each post reinvents tone and structure.
- **Cold start every time.** Every post begins from a blank page.

## The system — three layers

1. **Experience corpus** (`writing/experience/*.md`) — the depth material.
   Structured notes per theme: context, what I built, the hard calls, real
   numbers, the transferable lesson, candidate post angles. Captured once, reused
   by every post on that theme. This is what makes posts *deep*.

2. **Style guide** (`writing/style-guide.md`) — the voice. Who I write for, my
   tone, the anatomy of a deep post, and a hard "depth bar" a draft must clear.
   This is what makes posts *consistent and non-shallow*.

3. **`/write-post` skill** (`writing/skills/write-post/SKILL.md`) — the engine.
   Given a topic, it pulls the matching corpus entry, applies the style guide,
   drafts to the structure, and self-checks against the depth bar. If no corpus
   entry exists, it interviews me to capture one first. This is what makes posts
   *easy*.

The layers compose: corpus (depth) + style guide (voice) → consumed by the skill
(ease).

## Repo layout

```
writing/
  style-guide.md          voice + post anatomy + depth bar
  experience/             the corpus
    _template.md          forcing template for new entries
    <theme>.md            one file per theme, seeded with real material
  drafts/                 skill output lands here (YYYY-MM-DD-slug.md)
  posts/                  finished posts after my edit
  skills/write-post/      the /write-post skill (tracked source of truth)
  specs/                  this design doc
.claude/skills -> ../writing/skills   (gitignored discovery symlink — see Setup)
```

Everything lives **outside `docs/`**, so GitHub Pages does not publish it — this is
authoring infrastructure and raw material, not the live site.

## Setup (skill discovery)

`.claude/` is gitignored in this repo (IDE/tool cache), so the skill cannot be
committed there. Its tracked home is `writing/skills/`. Claude Code discovers
skills from `.claude/skills/`, so a symlink bridges the two. Recreate it after a
fresh clone:

```bash
ln -s ../writing/skills .claude/skills
```

Without the symlink the skill still works via an explicit `Read` of its `SKILL.md`;
it just won't appear in the Skill picker.

## Corpus entry shape

Each entry forces depth by structure (full template in `_template.md`):

- **Context** — the real, ambiguous problem (FDE framing)
- **What I built** — the system and its architecture
- **Hard calls** — the tradeoffs, the non-obvious decisions, what broke
- **Specifics** — numbers, scale, stack (the proof)
- **Lesson** — the transferable insight
- **Post angles** — 1–3 headlines this could become
- **Confidentiality** — what is safe to publish

## Seeded corpus (first entries)

- `dkh-mcp-gateway.md` — giving LLM agents an *action* layer over a commerce platform
- `empire-of-bloom-rag-ops.md` — RAG over telemetry + maintenance logs for IoT fleet diagnostics
- `ai-assisted-40-service-dev.md` — running a 40+ service .NET monorepo with AI-assisted development
- `thetea-telegram-miniapp.md` — a real venture shipped on my own platform as a Telegram Mini App

## Out of scope (YAGNI for now)

- **Publishing posts to the site** — wiring `posts/*.md` into the `docs/` SPA as a
  blog section is a separate, later step.
- **Bilingual posts** — posts are English-first (target audience); Russian is
  optional per post.
- **CI / automation** — the skill is invoked manually.

## How I'll use it

1. `/write-post <topic>` → draft in `writing/drafts/`.
2. Edit the draft into my final voice.
3. Move it to `writing/posts/` when done.
4. (Later) publish selected posts to the site.
