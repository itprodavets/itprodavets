# Running a 40+ service monorepo with AI-assisted development

> One line: I develop and maintain a 40+ service .NET platform largely through
> AI-assisted engineering — agents, skills, and a persistent task system — and treat
> the *workflow* as a system I build, not a tool I use.

**Provenance:** DKH multi-tenant commerce platform (my own product), solo founder
**Confidentiality:** free to publish (my own product and workflow)

## Context

I'm one person maintaining a platform of 40+ .NET services, gateways, and workers,
plus two web UIs and a cross-platform device app suite. That's not a headcount you do
by typing every line. The only way it works is AI-assisted development — but "use an
AI assistant" is not a strategy. Naive agent use on a real codebase produces
plausible-wrong changes, drifts across sessions, and forgets context the moment it
compacts.

So the actual problem became: how do you make AI-assisted development *reliable* on a
large, real, multi-repo codebase?

## What I built

A workflow-as-a-system around the agents, not just prompts:

- **Codified rules and skills** — the conventions an agent must follow (commit format,
  build gates, "logs first" prod-debugging, security) live as versioned,
  always-loaded rules and on-demand skills, not in my head.
- **A persistent task/issue system** that survives context compaction, so
  multi-session work has state an agent can recover instead of guessing from a
  truncated transcript.
- **Hard gates** — quality and verification steps that run before "done" is allowed,
  because an agent's self-report of success is not evidence.
- **Plans as the unit of work** — decomposed into tracked checklists, so a large
  change doesn't degrade into step-skipping after a context reset.

The throughline: constrain the non-deterministic worker with deterministic structure
around it.

## Hard calls

- **Invest in the harness vs. just ship features.** Time on rules, gates, and
  task-state doesn't ship a feature today. But without it, AI-assisted work on a big
  codebase compounds errors. I chose the harness — it's what makes solo scale
  possible.
- **Trust but verify, enforced.** The most important rule is that "done" requires
  evidence — build green, tests run, output shown — not an agent's assertion. I
  encoded that as a gate rather than a habit.
- **Context is the scarce resource.** Designing *what* an agent loads — a slim
  always-on set, everything else on demand — matters more than the prompt. I budget
  context like memory.

## Specifics

- Scope: 40+ .NET services / gateways / workers, 2 Next.js UIs, an Avalonia device
  suite — maintained solo.
- Stack under management: C# / .NET 10, Next.js 16 / React 19, gRPC / GraphQL,
  PostgreSQL / ClickHouse / Redis / Qdrant, RabbitMQ, Kubernetes.
- Workflow primitives: versioned agent rules, on-demand skills, a compaction-surviving
  task system, mandatory build/verify gates.

## Lesson

AI-assisted engineering at scale is **an engineering problem about the harness, not a
prompting problem.** The leverage is in the deterministic structure you build around a
non-deterministic worker: codified conventions, recoverable state, and gates that
demand evidence before "done." This is the Forward Deployed problem — make an
ambiguous, capable system reliable in a real environment — turned inward on my own
development.

## Post angles

- "AI-assisted development on a 40-service monorepo: the harness is the product"
- "'Done' requires evidence: gating agents against their own optimism"
- "Context is memory: budgeting what an agent loads on a large codebase"
- "What running agents on my own codebase taught me about deploying them for others"

## Raw notes

- Strongest Codex / Devin / Applied-AI signal I have — first-hand, daily, on a real
  codebase. Lead with it for those roles.
- Concrete artifacts I can show: the rules/skills structure, the task system, the
  verify-before-done gate.
