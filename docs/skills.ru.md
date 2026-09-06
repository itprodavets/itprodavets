# Навыки и опыт

Стек организован по тому, как я его использую сегодня — не по самооцениваемому уровню. **«Since YEAR»** — навык в активном использовании; **диапазон лет (например, 2015–2020)** — навык из прошлых проектов, который я больше не практикую регулярно. Кликни любую технологию, чтобы увидеть production-проекты где я её внедрял.

## Облачные платформы и сервисы

Cloud-стек указан с разделением по подтверждённому уровню: AWS и Azure подкреплены production-проектами, Google Cloud — знакомство с экосистемой на уровне архитектуры. Карта сервисов охватывает managed building blocks, которые чаще всего ожидают в cloud-вакансиях США.

- **AWS — production exposure:** PPC Entourage (конкретные managed services не раскрыты). Карта сервисов: EC2, ECS/EKS/ECR, Lambda, API Gateway, S3, RDS/Aurora, DynamoDB, SQS/SNS/EventBridge, VPC, IAM/Secrets Manager, CloudFront/Route 53, CloudWatch, Bedrock/SageMaker, CloudFormation
- **Microsoft Azure — production:** Azure OpenAI в AI Operations Assistant Empire of Bloom. Карта экосистемы: AKS/ACR, Container Apps/App Service, Functions/API Management, Blob Storage, Azure SQL/Cosmos DB, Service Bus/Event Hubs, Key Vault, Entra ID, VNet, Front Door, Azure Monitor/Application Insights, Azure OpenAI/AI Foundry/AI Search, Bicep
- **Google Cloud (GCP) — знакомство на уровне архитектуры:** GKE/Artifact Registry, Cloud Run, Compute Engine, Cloud Functions/API Gateway, Cloud Storage, Cloud SQL/Firestore, Pub/Sub, BigQuery, Vertex AI, VPC, IAM/Secret Manager, Cloud CDN/DNS, Cloud Monitoring
- **Cross-cloud foundation:** Terraform/IaC; подтверждённые production-стеком Docker, Kubernetes, Cloudflare Tunnel/Workers, GitLab CI, GitHub Actions, OpenTelemetry, Prometheus/Grafana; переносимые паттерны IAM, networking, secrets, observability и CI/CD

## Primary

Ежедневно использую, веду архитектурные решения.

- **C#** · since 2009 · Xnata, tea.community, tea.express, Empire of Bloom, KPMG BEPS Automation, KPMG Smart Tax Solution, государственные системы Дом ПК, Web Expenses (ЕМГ), автоматизация Химоил, Blueberry (Remedi, GEMS)
- **.NET (Framework 3.5 → .NET 10)** · since 2009 · Xnata, tea.community, tea.express, Empire of Bloom, KPMG, Дом ПК, ЕМГ, Химоил, Blueberry
- **ASP.NET (WebForms → MVC → Web API → Core → Minimal API)** · since 2013 · Xnata, tea.community, tea.express, KPMG, Дом ПК, ЕМГ, Blueberry
- **TypeScript** · since 2018 · Xnata (admin + storefront UI), tea.community, tea.express, клиентские проекты GZ DKH, KPMG, Blueberry GEMS
- **Микросервисы / DDD / CQRS** · since 2019 · Xnata (41 runtime-проект: 29 backend-сервисов, 3 gateway, 3 UI, 6 workers/tools), tea.community, tea.express, Empire of Bloom, KPMG
- **MediatR / FluentValidation** · since 2023 · Xnata platform services, tea.community, tea.express
- **PostgreSQL** · since 2020 · Xnata, tea.community, tea.express, Empire of Bloom, клиентские проекты GZ DKH, PPC Entourage
- **REST API** · since 2015 · каждая backend-роль начиная с Дом ПК
- **gRPC** · since 2021 · Xnata inter-service, tea.community, tea.express, Empire of Bloom, Container Diagnostics Service
- **RabbitMQ** · since 2020 · Xnata event bus, tea.community, tea.express, Empire of Bloom, Marketing Campaign Manager
- **Entity Framework / EF Core** · since 2016 · Xnata, tea.community, tea.express, KPMG, Дом ПК
- **Docker** · since 2019 · Xnata, tea.community, tea.express, Empire of Bloom, клиентские проекты GZ DKH
- **Next.js (13 → 16)** · since 2022 · Xnata admin + storefront, tea.community, tea.express, AI Operations Assistant
- **React (16 → 19)** · since 2020 · Xnata UI, tea.community, tea.express, AI Operations Assistant, PPC Entourage
- **Liquid / Shopify-style themes-as-code** · since 2025 · Xnata StorefrontService, `dkh-theme` CLI, `xnata-tea`, tea.community, tea.express
- **OpenAPI / Orval / typed API clients** · since 2025 · Xnata Admin Web UI и Storefront Web UI

## Working

Регулярная production-разработка, поставляю фичи end-to-end.

- **Avalonia (desktop / Android)** · since 2025 · Xnata Apps Suite — POS, Warehouse, Inspector
- **Tailwind CSS (3 → 4) / DaisyUI (5)** · since 2023 · Xnata UI, tea.community, tea.express
- **TanStack Query / React Hook Form / Zod** · since 2024 · Xnata Admin Web UI и Storefront Web UI
- **Lexical rich text / Monaco Editor** · since 2025 · Xnata storefront editor and notification/template tooling
- **Playwright / Vitest / Jest** · since 2023 · Xnata UI test stack, tea.community, tea.express, itprodavets site
- **Go (1.18 → 1.24)** · since 2022 · Empire of Bloom Fleet Tracking Platform
- **Redis** · since 2021 · Xnata sessions + кэширование, tea.community, tea.express
- **MongoDB (3 → 7)** · since 2022 · Xnata, клиентские проекты GZ DKH
- **ClickHouse** · since 2023 · Xnata analytics worker, аналитика GZ DKH
- **Kubernetes** · since 2021 · Xnata, tea.community, tea.express, Empire of Bloom, Fleet Tracking
- **Keycloak (OIDC / OAuth2)** · since 2022 · Xnata, tea.community, tea.express
- **JWT** · since 2018 · Xnata, tea.community, tea.express, KPMG, далее везде где auth
- **SignalR** · since 2020 · Xnata, tea.community, tea.express, Empire of Bloom, Container Diagnostics Service
- **MQTT** · since 2021 · Empire of Bloom, Fleet Tracking, Production Line Monitor, Dealer Portal
- **TimescaleDB** · since 2022 · телеметрия Empire of Bloom, Fleet Tracking
- **Prometheus / Grafana** · since 2021 · Xnata, tea.community, tea.express, Empire of Bloom, Container Diagnostics
- **OpenAI / Azure OpenAI** · since 2023 · Xnata, AI Operations Assistant Empire of Bloom
- **Ollama** · since 2025 · Xnata EmbeddingWorker local/primary embedding path
- **RAG (Retrieval-Augmented Generation)** · since 2023 · Xnata, AI ops Empire of Bloom
- **Semantic Kernel** · since 2024 · AI Operations Assistant Empire of Bloom
- **Qdrant** · since 2024 · Xnata, AI ops Empire of Bloom
- **MCP (Model Context Protocol)** · since 2025 · Xnata MCP-гейтвей
- **S3 / MinIO-compatible storage** · since 2025 · Xnata MediaService and storefront assets
- **Testcontainers** · since 2025 · Xnata integration testing
- **Telegram.Bot / MTProto / Telegram Mini App SDK** · since 2025 · Xnata Telegram services, storefront mini-app shell, tea.community, tea.express
- **ESC/POS / ZPL printing** · since 2025 · Xnata Apps Suite and PrintAgent
- **GitLab CI** · since 2021 · Xnata, tea.community, tea.express, клиентские проекты GZ DKH
- **GitHub Actions** · since 2022 · Xnata (зеркало), сайты itprodavets
- **Serilog** · since 2020 · Xnata, tea.community, tea.express, KPMG
- **OpenTelemetry** · since 2023 · Xnata, tea.community, tea.express

## Familiar

Эпизодически или в прошлых проектах — могу быстро вернуться.

- **Python (3)** · since 2023 · AI-инструменты, скрипты автоматизации
- **C / C++ (11 / 17)** · since 2020 · прошивка Empire of Bloom
- **FreeRTOS** · since 2022 · embedded прошивка Empire of Bloom
- **Modbus** · since 2022 · Empire of Bloom, Production Line Monitor
- **Mosquitto (MQTT broker)** · since 2022 · IoT backbone Empire of Bloom
- **Dapper** · since 2016 · Xnata, tea.express, Дом ПК (Дашборд метрик, Автоматизация энергорынка)
- **Vue 3** · 2021–2022 · GZ DKH Marketing Campaign Manager, Fleet Tracking, Dealer Portal, Production Line Monitor
- **Angular (2 → 8)** · 2015–2020 · Дом ПК TESLA, KPMG Smart Tax Solution, KPMG BEPS Automation, Blueberry Remedi
- **AngularJS (1)** · 2015–2020 · Дом ПК Портал балансирующего рынка, KPMG BEPS (ранние версии), Blueberry (GEMS, Remedi)
- **D3.js** · 2016–2022 · Дом ПК Дашборд метрик, KPMG Smart Tax, KPMG BEPS, Production Line Monitor
- **MS SQL (2008 → 2019)** · 2009–2020 · KPMG, Дом ПК, ЕМГ, Химоил, DEPO, Blueberry GEMS
- **Node.js (14 → 18)** · 2021 · PPC Entourage
- **OData** · 2017–2019 · KPMG BEPS Automation, KPMG Smart Tax Solution

## Legacy

Глубокий исторический опыт — в прошлых проектах, сейчас активно не использую.

- **ASP.NET WebForms** · 2013–2017 · KPMG (ранние), Дом ПК (Энергорынок), ЕМГ (Web Expenses)
- **WinForms** · 2009–2015 · автоматизация Химоил, ЕМГ (ITpedia, HelpDesk + AddInn)
- **jQuery** · 2013–2017 · Дом ПК (несколько порталов), ЕМГ
- **Telerik / DevExpress** · 2013–2017 · Дом ПК (Донорство, Энергорынок), ЕМГ (ITpedia, HelpDesk)
- **CryptoPro CSP** · 2015–2016 · Дом ПК Портал балансирующего рынка
- **Knockout JS** · 2015–2016 · Дом ПК ФИС ГИА
- **AutoMapper / Autofac** · 2015–2016 · Дом ПК TESLA
- **Bootstrap (3 / 4)** · 2013–2017 · Дом ПК, ЕМГ, веб-отчёты Химоил
- **Raw ADO.NET** · 2009–2015 · Химоил (основной доступ к данным), ЕМГ
- **T-SQL stored procedures / OLAP** · 2009–2017 · DEPO Computers, отчёты Дом ПК, Химоил
- **TFS / SVN** · 2013–2017 · Химоил, ЕМГ, ранний Дом ПК (до Git)
