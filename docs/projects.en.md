# Projects

<a id="personal-projects"></a>

## Personal Projects

### DKH — Multi-tenant Commerce Platform
- Role: Founder / Tech Lead (solo)
- Description: Multi-tenant SaaS commerce platform — applying Forward Deployed Engineering thinking to my own product. Built as infrastructure that lets domain-expert founders launch e-commerce ventures without redoing the engineering. First venture deployed on DKH — thetea.app. Multi-tenant from day 1 (tenant_id + RLS isolation), AI as action layer (not chat), Telegram-first storefront, a Shopify-style storefront builder (visual editor + `dkh-theme` CLI), cross-platform Avalonia device apps (POS, Warehouse, Inspector) with ESC/POS receipt and ZPL label printing, and China-direct supply chain as a first-class concept. Built by hand from the ground up and still growing — now developed largely through AI-assisted engineering.
- Technologies: C# 14, .NET 10, Next.js 16, React 19, TypeScript 5.9, Avalonia (desktop/Android), GraphQL, gRPC, REST API, RabbitMQ, SignalR, Quartz, MongoDB, PostgreSQL, ClickHouse, Redis, Qdrant, OpenAI, Ollama, ESC/POS, ZPL, Keycloak (JWT), Serilog, OpenTelemetry, Docker, DDD, CQRS, MCP (Model Context Protocol), Telegram


### thetea.app (with ecosystem: thetea-mcp, tea-assistant, ai-docs-hub)
- Role: Founder / IT Partner (co-founded with tea expert — 20+ years in industry: plantations, supply chain, tea travel, China-direct sourcing)
- Description: Multi-tenant SaaS platform for launching branded tea stores in Telegram. First venture built on DKH commerce platform. Co-founder brings domain depth; I bring tech.
  - **Core platform** — Telegram Mini App + admin panel + 20+ microservices and growing, event-driven architecture, gRPC inter-service, REST gateways (BFF). Features: product catalog with structured attributes, cart with stock reservations, orders, reviews, i18n (EN/RU), 6 storefront themes, China-direct supply chain integration.
  - **thetea-mcp** *(open-source companion)* — MCP (Model Context Protocol) server for thetea.app. Enables AI assistants (Claude, ChatGPT, other LLM agents) to browse catalog, search products, manage orders via standardized protocol. Multi-tenant scoped.
  - **tea-assistant** *(open-source companion)* — RAG-powered chatbot trained on curated tea expertise (varieties, brewing, ceremonies, culture, history, travel destinations, food pairings). Integrated with thetea.app for in-app product advice.
  - **ai-docs-hub** *(open-source foundation)* — Open-source platform for AI-powered knowledge bases from technical documentation. Upload PDF / Markdown / Confluence → auto-chunk + embed → query via chat with source citations. Multi-tenant workspaces, RBAC, pluggable LLM backends (OpenAI, Azure OpenAI, Ollama). Powers tea-assistant.
- Technologies: C# 14, .NET 10, EF Core, Dapper, MediatR, FluentValidation, PostgreSQL, Redis, RabbitMQ, gRPC, REST API, Keycloak, JWT, Serilog, OpenTelemetry, Docker, Next.js 16, React 19, TypeScript 5.9, Tailwind CSS, DaisyUI, TanStack Query, Zod, next-intl, Telegram Mini App SDK, DDD, xUnit, GitLab CI/CD, GitHub Actions. Ecosystem: Go, Gin (ai-docs-hub), TypeScript / Node / MCP SDK (thetea-mcp), OpenAI API, LangChain, Ollama, pgvector, Vercel, Shadcn/UI, SSE


---

<a id="kpmg"></a>

## KPMG — Tax compliance platforms (May 2017 – September 2019)

### Smart Tax Solution
- Role: Team Lead
- Duration: March 2018 – September 2019
- Description: Web service for tax process optimization and compliance for tax authorities worldwide. Team Lead — designed architecture, led development, and shipped compliance workflows handling complex international tax requirements.
- Technologies: C#, .NET Core, ASP.NET, Web API, EF Core, LINQ, OData, CQRS, DDD, MS SQL, TypeScript, AngularJS, Angular 8, D3.js, Material Design, DevExpress


### BEPS Automation Tool
- Role: Architect / Team Lead / Senior Developer
- Duration: May 2017 – March 2018
- Description: Tax notification and reporting platform serving tax authorities worldwide for BEPS (Base Erosion and Profit Shifting) compliance. Designed compliance workflows, formalized API contracts, and led migration of legacy systems to modern stack.
- Technologies: C#, .NET Framework, ASP.NET, Web API, EF, LINQ, OData, CQRS, DDD, MS SQL, TypeScript, AngularJS, Angular 2-8, D3.js, Material Design, DevExpress


---

<a id="dom-pk"></a>

## Dom PK LLC — Government information systems (April 2015 – April 2017)

### Blood Donation Regulatory Data System
- Role: Team Lead
- Duration: May 2016 – April 2017
- Description: Information analysis and regulatory reference data management system for Russian blood donation services (Ministry of Health). Team Lead — designed data architecture, built REST API and analytical dashboards, managed regulatory compliance integration.
- Technologies: C#, .NET Framework, ASP.NET Web API, EF, LINQ, MS SQL, jQuery, Bootstrap, Telerik, DevExpress, TeamCity, SVN, IIS


### National Social & Political Metrics Dashboard
- Role: Full-Stack Developer
- Duration: September 2016 – March 2017
- Description: Analytical system for monitoring social, economic, and political metrics across Russia. Built interactive dashboards with D3.js visualization, systematized metric passports, tracked target indicators for decision support of government officials.
- Technologies: C#, .NET Framework, ASP.NET Web API, Dapper, MS SQL, jQuery, D3.js, SVN, IIS


### Energy Balancing Market Portal
- Role: Full-Stack Developer
- Duration: September 2015 – September 2016
- Description: Portal for energy market participants — operational data display, news feed, request submission interfaces, and market statistics. Integrated CryptoPro digital signatures for regulated document workflows in Russian energy sector (Ministry of Energy).
- Technologies: C#, .NET Framework, ASP.NET Web Forms, EF, MS SQL, jQuery, Telerik, Bootstrap, CryptoPro, SVN, IIS


### Energy Market Planning Automation
- Role: Full-Stack Developer
- Duration: September 2015 – September 2016
- Description: Automation of calculated model preparation for auctions on the balancing market of Russian Energy System (first sync zone). Speeds up operational planning workflow by automating model generation from raw market data.
- Technologies: C#, .NET Framework, ASP.NET Web API, Dapper, MS SQL, AngularJS, jQuery, Bootstrap, CryptoPro, SVN, IIS


### Federal Exam Processing System (ФИС ГИА)
- Role: Full-Stack Developer
- Duration: April 2015 – April 2016
- Description: Federal Information System for processing joint government exam (ЕГЭ) results and university/college attestation. Integration with Ministry of Education infrastructure, web API for exam data ingestion, results processing pipeline, and reporting interfaces.
- Technologies: C#, .NET Framework, ASP.NET Web API, ADO.NET, MS SQL, Transact-SQL, LINQ, JavaScript, jQuery, Knockout JS, Bootstrap, SVN, IIS


### Industry Events Portal (TESLA)
- Role: Full-Stack Developer
- Duration: March 2015 – March 2016
- Description: Web portal for industry events — review, registration, and participation management. Built event catalog, user-facing portal, and admin panel for organizers.
- Technologies: C#, .NET Framework, ASP.NET Web API, EF, LINQ, MS SQL, AutoMapper, Autofac, JavaScript, TypeScript, AngularJS, Angular 2, Material Design, IIS


---

<a id="gz-dkh"></a>

## GZ DKH Innovation Technology — enterprise client engagements (September 2019 – present)

Forward Deployed engineering for enterprise clients across IoT, e-commerce, marketing, and industrial automation — embedded in client teams, shipping production systems end-to-end. Selected work below.

### Empire of Bloom — Smart Container Platform (2022 – present)
**Empire of Bloom** ([empireofbloom.com](https://www.empireofbloom.com/)) — smart-container IoT platform delivered for a global cloud / IoT platform partner: embedded firmware (FreeRTOS, C/C++) coordinating in-container devices, backend services, real-time fleet telemetry (GPS, temperature, humidity, door), remote OTA updates, critical-failure alerting, and a production AI operations layer — plus multi-platform commerce. Deliverables:
- **eCommerce** — Multi-platform eCommerce solution with a marketing & lead-generation module (the marketing department's layer): captures, scores, and routes prospects from web and marketing traffic. Stack: C#, .NET 8, EF Core, CQRS, DDD, PostgreSQL, RabbitMQ, TypeScript, Next.js 14, React.
- **Fleet Tracking Platform** — Real-time fleet telemetry, route visualization, analytical reports. Stack: Go, PostgreSQL, TimescaleDB, MQTT, RabbitMQ, gRPC, Docker, Kubernetes, TypeScript, Vue 3, Leaflet.js.
- **Container Diagnostics Service** — Remote diagnostics microservice for smart containers + OTA updates + critical failure alerting. Stack: C#, .NET 9, gRPC, SignalR, PostgreSQL, Redis, RabbitMQ, Docker, Prometheus, Grafana.
- **AI Operations Assistant** — AI assistant for container fleet operations. RAG over technical docs, maintenance logs, and telemetry for diagnostics + incident report generation. Stack: C#, .NET 9, Semantic Kernel, Azure OpenAI, Qdrant, pgvector, PostgreSQL, gRPC, REST API, Redis, RabbitMQ, Docker, TypeScript, React, Next.js.


### Client engagement 2019 – 2022 (global telecom / electronics multinational)
Three rotating deliveries over 2.5 years:
- **Marketing Campaign Manager** (2021-2022) — Campaign planning, audience segmentation, real-time conversion tracking. Stack: C#, .NET Core, EF Core, CQRS, DDD, PostgreSQL, RabbitMQ, SignalR, TypeScript, Vue 3, Chart.js.
- **Dealer Portal** (2020-2021) — Order management, shipment tracking, marketing materials, ERP integration. Stack: C#, .NET Core, EF Core, PostgreSQL, RabbitMQ, MQTT, TypeScript, Vue 3, Vite.
- **Production Line Monitor** (2019-2020) — Real-time IoT line monitoring, OEE / downtime / yield. Stack: C#, .NET Core, SignalR, MQTT, PostgreSQL, Go, TypeScript, Vue 3, D3.js, Docker.


---

<a id="blueberry"></a>

## Blueberry Consultants Ltd — enterprise SaaS contract (December 2019 – February 2020)

Short-term contract (UK software consultancy) alongside primary employment — full-stack contribution to two enterprise platforms.

### Remedi — Healthcare / Care Homes Management Platform
- Role: Full-Stack Engineer (Contract)
- Description: CRM platform for medicine ordering and Care Homes management. Developed backend functionality and API integrations, contributed to architecture and system improvements.
- Technologies: AngularJS, Angular, .NET Core, ASP.NET Core, MySQL, REST API, Web API

### GEMS — HR / Recruitment CRM Platform
- Role: Full-Stack Engineer (Contract)
- Description: High-performance recruitment CRM used by hundreds of companies and thousands of users daily. Built frontend and backend features and high-performance business logic, created an internal library for flexible Kendo UI ↔ database interaction, developed CV/resume parsing tools (DOC/DOCX processing, PDF viewing and conversion), and implemented GDPR functionality plus integrations with third-party databases, Web APIs, and address/postcode search services.
- Technologies: AngularJS, TypeScript, .NET, ASP.NET, MS SQL Server, Kendo UI, REST API, Web API, DOC/DOCX processing, PDF processing, GDPR

---

<a id="ppc-entourage"></a>

## PPC Entourage — Amazon advertising optimization (September 2021 – December 2021)

Short-term contract alongside primary employment — performance-focused engineering on a SaaS platform for Amazon PPC optimization.

### PPC Entourage — Amazon Ads & Seller API Platform
- Role: Software Engineer (Contract)
- Duration: September 2021 – December 2021
- Description: Amazon advertising optimization platform for Amazon sellers — automated campaign and bid management, ACoS reduction, custom analytics, and FBA reimbursement recovery, so sellers can scale ads without living in spreadsheets. Runs against Amazon's Advertising and Seller APIs, pulling ad-performance data at scale and pushing automated optimizations back. My focus was performance: profiled and optimized the product to run leaner — reducing infrastructure cost — and improved interface responsiveness so the app felt noticeably faster for customers.
- Technologies: React, Node.js, PostgreSQL, AWS

---

<a id="emg"></a>

## European Media Group (EMG) — internal automation for media holding (July 2013 – April 2015)

### Corporate Budget Planning System (Web Expenses)
- Role: Full-Stack Developer
- Duration: August 2013 – April 2015
- Description: Budget planning system for distributing company budget across projects, tasks, and employee requests. First web project in career — moved from WinForms/desktop to ASP.NET Web Forms.
- Technologies: C#, .NET Framework, ASP.NET Web Forms, ADO.NET, MS SQL, Transact-SQL, LINQ, JavaScript, jQuery, Bootstrap, TFS, IIS


### Knowledge Base Search Platform (ITpedia)
- Role: Developer
- Duration: May 2014 – September 2014
- Description: Knowledge base search system — smart solution lookup based on a curated knowledge base and user's situation definition. Helped internal users find solutions faster.
- Technologies: C#, .NET Framework, WinForms, Telerik, ADO.NET, MS SQL, Transact-SQL, TFS


### Internal Support & Request Platform (HelpDesk + AddInn)
- Role: Developer
- Duration: July 2013 – July 2014
- Description: Internal helpdesk and request-serving system. Ticket management, request workflows, integration with internal directories.
- Technologies: C#, .NET Framework, WinForms, Telerik, ADO.NET, MS SQL, Transact-SQL, TFS


---

<a id="himoil"></a>

## Himoil LLC — business process automation (November 2008 – February 2013)

### Business Process Automation System (ХиМ)
- Role: Developer
- Duration: January 2010 – February 2013
- Description: Business process automation system. Designed and developed internal tooling on C#/.NET Framework/WinForms with MSSQL via ADO.NET. Reduced task completion time and improved customer service quality for the company.
- Technologies: C#, .NET Framework, WinForms, ADO.NET, MS SQL, Transact-SQL


---

<a id="earlier-roles"></a>

## Earlier roles

- **DEPO Computers** (March 2013 – June 2013) — Engineer. Optimized stored procedures and T-SQL queries for OLAP cube statistics processing. Stack: Transact-SQL, MS SQL.
