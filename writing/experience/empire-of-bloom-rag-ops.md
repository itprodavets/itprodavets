# RAG over telemetry for IoT fleet diagnostics

> One line: an AI operations assistant that diagnoses smart-container failures by
> retrieving across documentation, maintenance logs, and live telemetry — and drafts
> the incident report.

**Provenance:** Empire of Bloom — smart-container IoT platform (client engagement, GZ
DKH), 2022–present
**Confidentiality:** public-level only (the engagement is named on my résumé /
empireofbloom.com) + transferable lessons. No client-confidential data or numbers.

## Context

A fleet of smart containers emits telemetry — GPS, temperature, humidity, door state
— and accumulates maintenance history and a pile of operations docs. When something
goes wrong, an operator has to correlate all three under time pressure. The knowledge
to diagnose exists; it's just spread across formats no human can join fast enough
during an incident.

The job was to put an assistant between the operator and that mess: ask it what's
wrong with container X, get a grounded answer that cites the telemetry and the
relevant maintenance/doc context, and get a first draft of the incident report.

## What I built

A RAG-based operations assistant: an embedding/retrieval layer over documentation,
maintenance journals, and telemetry, with an orchestration layer that pulls the right
context for a diagnosis and generates incident reports grounded in it.

## Hard calls

- **Grounding vs. fluency.** An ops assistant that sounds confident and is wrong is
  worse than no assistant — it gets trusted at 3am. The whole design biases toward
  *grounded* answers that cite their source over smooth prose.
- **What's retrievable vs. what's computed.** Telemetry isn't prose. Deciding what to
  embed and retrieve vs. what to query/compute and feed in as structured context is
  the core modeling decision — get it wrong and retrieval returns plausible noise.
- **Reports as a first-class output.** The win wasn't Q&A; it was turning a diagnosis
  into a drafted incident report an operator edits, not writes from scratch.

## Specifics

- Stack: C# / .NET, Semantic Kernel, Azure OpenAI, Qdrant (vector store), PostgreSQL,
  gRPC, Redis, RabbitMQ; React / Next.js front.
- Sources joined: operations documentation + maintenance logs + fleet telemetry.
- Sits alongside the broader platform: embedded firmware (FreeRTOS, C/C++), real-time
  fleet telemetry, remote OTA, critical-failure alerting.

## Lesson

In production AI for operations, **retrieval quality and grounding beat model
quality**. The hard, valuable work is deciding what context to retrieve vs. compute,
and refusing to ship an answer that can't point at its evidence. The model is the
easy, swappable part.

## Post angles

- "RAG over telemetry: when your knowledge base isn't prose"
- "The 3am test: why a grounded, less-wrong assistant beats a fluent one"
- "Drafting the incident report is the feature, not the chat"

## Raw notes

- Keep all numbers generic / abstracted — client-confidential.
- Transferable framing: any ops domain with docs + logs + signals.
