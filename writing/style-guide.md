# Post style guide

How I write deep technical posts. The `/write-post` skill applies this; I apply it
when editing. If a draft doesn't match this, it isn't done.

## Who I'm writing for

Two readers at once:

- **The hiring side of Forward Deployed / Applied AI teams** — OpenAI, Anthropic,
  Cognition, Sierra, Databricks, Palantir. They hire for one thing: can you take an
  ambiguous business problem and ship a production system. They read for
  *judgment*, not job history.
- **Engineers who do the same work.** They can smell a post that hand-waves.
  Respect them with specifics.

If a sentence wouldn't earn a nod from a senior engineer who's done this, cut it.

## Voice

- **First person, past tense, what I actually did.** "I built", "I chose", "it
  broke" — not "one might consider".
- **Outcome first.** Lead with the result or the problem, not the setup. The reader
  decides in two sentences whether to keep going.
- **Specific over generic.** "A 40-service .NET monorepo" beats "a large codebase."
  "Cut p99 from 500ms to 60ms" beats "improved performance."
- **No hedging.** Drop "I think", "it seems", "arguably". Commit to the claim or say
  I don't know. (Same rule I hold in code review.)
- **Engineer to engineer.** No marketing voice, no LinkedIn-influencer cadence.
  Plain, dense, confident.
- **Show the judgment, don't relist the résumé.** The résumé already lists what I
  did. A post earns its place by explaining *why* I did it that way and what I'd do
  differently.

## Anatomy of a deep post

Target 800–1500 words.

1. **Hook (2–4 sentences)** — the real problem, stated concretely. Why it was hard
   or non-obvious.
2. **Context** — the constraints. What made this *this* problem and not the textbook
   version.
3. **What I built** — the system, the architecture, the shape of the solution.
4. **The hard call** — the central tradeoff or decision. This is the spine of the
   post: what I weighed, what I rejected, what it cost.
5. **Specifics** — numbers, scale, stack. The proof the story is real.
6. **The lesson** — the one transferable insight a reader takes to their own work.
7. **Close** — short. What I'd do differently, or what's next. No summary paragraph
   that restates the post.

Not every post is this rigid, but every post has a hook, a hard call, specifics,
and a lesson. Drop the rest before you drop those.

## The depth bar (a draft must clear all three)

1. **≥1 real tradeoff** — a decision with a genuine cost, not "I chose the good
   option."
2. **≥1 concrete specific** — a number, a scale, a measured before/after, a named
   failure.
3. **≥1 transferable insight** — something a reader applies elsewhere.

A draft that misses any of these is filler. Don't publish it — send it back for
material (usually that means the corpus entry is thin).

## Do / Don't

**Do**
- Name real systems, real numbers, real failures.
- Explain the decision you *didn't* take.
- Use one strong concrete example over three vague ones.
- Write the title as a claim or a tension, not a topic. "Why I gave our LLM agents
  write access" > "Notes on MCP".

**Don't**
- Tutorialize ("Step 1: install X"). Insight, not a how-to.
- Hedge, qualify, or pad to sound senior. Density reads as senior.
- Restate the résumé.
- Leak client specifics (see below).

## Confidentiality

- **My own projects** (DKH, thetea.app) — write freely; they're already public.
- **Client work** (Empire of Bloom, KPMG, telecom, healthcare) — only what's already
  public (e.g. the résumé already names Empire of Bloom), plus *transferable*
  engineering lessons. No client-confidential numbers, data, internal names, or
  anything that identifies a client's business beyond what they publish themselves.
  When in doubt, abstract the client out and keep the lesson.

## Language

English first — that's where the target roles are. A strong post can get an optional
Russian version later; never block on it.

## Openings — weak vs strong

**Weak:** "In this post I want to talk about how we used RAG in our IoT platform."
(setup, no stakes, generic)

**Strong:** "Our fleet operators were paged at 3am to diagnose containers from
telemetry they couldn't read fast enough. So I put a RAG layer between them and the
logs — and the first version made the problem worse." (concrete problem, stakes, a
tension that pulls you in)
