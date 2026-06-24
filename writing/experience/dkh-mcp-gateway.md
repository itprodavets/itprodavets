# DKH MCP gateway — an action layer for LLM agents over a commerce platform

> One line: I built an MCP gateway so LLM agents can *act* on a multi-tenant
> commerce platform — place orders, edit catalog, run operations — not just chat
> about it.

**Provenance:** DKH multi-tenant commerce platform (my own product), 2025–present
**Confidentiality:** free to publish (my own product)

## Context

Most "AI in the product" ships as a chat box bolted onto the UI. That's a demo, not
leverage. The real value in a commerce platform is *doing* things: creating a
product, adjusting stock, pulling a sales report, routing a lead. I wanted agents
that take actions inside the platform with the same authority — and the same
guardrails — as a logged-in operator, across a **multi-tenant** system where every
action must stay inside one tenant's boundary.

The hard part isn't calling an LLM. It's giving a non-deterministic caller
*controlled* access to a real system without it crossing tenants or doing something
irreversible.

## What I built

An MCP (Model Context Protocol) gateway that exposes platform capabilities as typed
tools to LLM agents. It sits in front of the same gRPC/GraphQL service mesh the human
UIs use — so agents pass through the same authorization, the same tenant isolation
(tenant_id + row-level security), the same validation. The gateway is the single
place that maps "tool call" → "authorized platform action," scoped to a tenant and an
identity.

## Hard calls

- **Action layer, not chat.** I deliberately made the primary surface *tools*, not a
  conversation. Chat is the fallback. This shaped everything: tools are typed,
  enumerable, and individually authorized — you can reason about what an agent *can*
  do.
- **Reuse the existing authz path vs. a parallel one for agents.** I routed agents
  through the same gateway authorization as human sessions rather than a separate
  agent path. More constraint up front, but tenant isolation can't be bypassed by the
  AI surface — there's no second door to keep in sync.
- **Where to draw the irreversible-action line.** Some tools act; some only read.
  Deciding which actions an agent may take unattended vs. must propose for approval is
  a product and safety decision, not a technical one.

## Specifics

- Platform: 40+ .NET services / gateways / workers on a shared plugin platform.
- Multi-tenant from day one: tenant_id + RLS isolation.
- Stack: C# / .NET 10, gRPC, GraphQL, MCP, Keycloak (JWT auth), RabbitMQ.
- Agents reach the platform through the same gateways as the human admin/storefront
  UIs — one authorization path, not two.

## Lesson

The interesting engineering in "AI in your product" is not the model — it's the
**authorization and isolation boundary** you put between a non-deterministic caller
and a real system. Make the AI go through the door you already trust. If you find
yourself building a second access path "just for the agent," that's the bug.

## Post angles

- "Why I gave our LLM agents write access — through the same door as humans"
- "AI as an action layer, not a chat box: what changes in the architecture"
- "Multi-tenant isolation when the caller is an LLM"

## Raw notes

- Tie-in: MCP as the standard that made this portable across agents.
- Contrast with the usual "RAG chatbot over your docs" framing.
