# Shipping a real venture on my own platform as a Telegram Mini App

> One line: thetea.app — a branded tea storefront as a Telegram Mini App, the first
> live venture on the DKH platform, built with a domain-expert co-founder.

**Provenance:** thetea.app (my own venture; co-founder is a tea-industry expert, 20+
years), founder / IT partner
**Confidentiality:** free to publish (my own venture)

## Context

A platform with no venture on it is a hypothesis. thetea.app is the proof: a real
storefront, real catalog, real orders — built to validate that DKH lets a
domain-expert founder launch e-commerce without re-doing the engineering each time.
The co-founder brings 20+ years of tea expertise (plantations, supply chains,
China-direct sourcing); I bring the platform and ship the product on it.

The interesting constraint: the storefront is a **Telegram Mini App**, not a classic
web shop. Telegram-first changes the surface — auth, navigation, payments, the whole
UX runs inside Telegram.

## What I built

A branded storefront on DKH as a Telegram Mini App: product catalog with structured
attributes, cart with stock reservation, orders, reviews, i18n (EN/RU), themeable
design, and China-direct procurement as a first-class concept rather than a bolt-on.

## Hard calls

- **Dogfooding vs. building for "users in general."** Running my own platform as its
  first customer is the fastest way to find what's actually missing. It also means
  every platform gap blocks a real storefront — useful pressure, but pressure.
- **Telegram-first as a constraint, not a port.** Treating the Mini App as the primary
  surface (auth, payments, navigation inside Telegram) rather than shoehorning a web
  shop into a webview.
- **Domain expertise lives with the co-founder; the platform encodes it.**
  China-direct supply chain as a first-class concept came from his 20 years, not from
  a generic e-commerce template.

## Specifics

- Stack: C# / .NET 10, EF Core, PostgreSQL, Redis, RabbitMQ, gRPC, Keycloak / JWT;
  Next.js 16 / React 19, Tailwind, Telegram Mini App SDK; i18n EN/RU.
- Surface: Telegram Mini App storefront — catalog, cart with stock reservation,
  orders, reviews, themes.
- Role split: domain-expert co-founder (tea, supply chain) + me (platform, product,
  delivery).

## Lesson

The fastest way to validate a platform is to **be its first hard customer.** A real
venture with a real domain-expert partner surfaces the missing 20% that no amount of
"building for users in general" reveals. And pairing a non-technical domain expert
with a forward-deployed engineer — they own the *what*, I own the *how it ships* — is
a repeatable model, not a one-off.

## Post angles

- "I built the platform, then became its first hard customer"
- "Telegram-first commerce: when the Mini App is the product, not a port"
- "Domain expert + forward-deployed engineer: a venture-building pattern"

## Raw notes

- Good companion piece to the DKH platform posts — the 'why' behind the platform.
