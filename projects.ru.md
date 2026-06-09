# Проекты

<a id="personal-projects"></a>

## Личные проекты

### DKH — Multi-tenant Commerce Platform
- Роль: Founder / Tech Lead (solo)
- Описание: Мультитенантная SaaS commerce-платформа — applying Forward Deployed Engineering thinking к собственному продукту. Build как infrastructure что позволяет domain-expert founders запускать e-commerce ventures без переписывания engineering каждый раз. Первый venture, запущенный на DKH — thetea.app. Multi-tenant с дня 1 (tenant_id + RLS isolation), AI as action layer (не chat), Telegram-first storefront, China-direct supply chain как first-class concept.
- Технологии: C# 14, .NET 10, Next.js 16, React 19, TypeScript 5.9, PostgreSQL, Redis, RabbitMQ, gRPC, REST API, Keycloak (JWT), Serilog, OpenTelemetry, Docker, DDD, CQRS, MCP (Model Context Protocol)


### thetea.app (с экосистемой: thetea-mcp, tea-assistant, ai-docs-hub)
- Роль: Founder / IT Partner (co-founded с tea-экспертом — 20+ лет в индустрии: плантации, supply chain, tea travel, China-direct sourcing)
- Описание: Мультитенантная SaaS-платформа для запуска брендированных чайных магазинов в Telegram. Первый venture построен на DKH commerce платформе. Co-founder приносит domain depth, я приношу tech.
  - **Основная платформа** — Telegram Mini App + админ-панель + 20+ микросервисов и растёт, событийная архитектура, gRPC между сервисами, REST-шлюзы (BFF). Возможности: каталог с структурированными атрибутами, корзина с резервированием, заказы, отзывы, i18n (EN/RU), 6 тем оформления, интеграция с China-direct supply chain.
  - **thetea-mcp** *(open-source companion)* — MCP-сервер (Model Context Protocol) для thetea.app. Позволяет AI-ассистентам (Claude, ChatGPT, другие LLM-агенты) просматривать каталог, искать товары, управлять заказами через стандартизированный протокол. Multi-tenant scoped.
  - **tea-assistant** *(open-source companion)* — RAG чат-бот, обученный на курированной базе знаний о чае (сорта, заваривание, церемонии, культура, история, путешествия, сочетания с едой). Интегрирован с thetea.app для in-app консультаций.
  - **ai-docs-hub** *(open-source foundation)* — Open-source платформа для AI-powered баз знаний из технической документации. Загрузка PDF / Markdown / Confluence → автоматическое разбиение + векторизация → запросы через чат с указанием источников. Multi-tenant workspaces, RBAC, подключаемые LLM-бэкенды (OpenAI, Azure OpenAI, Ollama). Powers tea-assistant.
- Технологии: C# 14, .NET 10, EF Core, Dapper, MediatR, FluentValidation, PostgreSQL, Redis, RabbitMQ, gRPC, REST API, Keycloak, JWT, Serilog, OpenTelemetry, Docker, Next.js 16, React 19, TypeScript 5.9, Tailwind CSS, DaisyUI, TanStack Query, Zod, next-intl, Telegram Mini App SDK, DDD, xUnit, GitLab CI/CD, GitHub Actions. Ecosystem: Go, Gin (ai-docs-hub), TypeScript / Node / MCP SDK (thetea-mcp), OpenAI API, LangChain, Ollama, pgvector, Vercel, Shadcn/UI, SSE


### Empire of Bloom — Smart Container Platform
- Роль: Co-founder / IT Partner (co-founded с IoT-партнёром)
- Описание: Smart container product. Я в IT partner роли — embedded firmware + backend + AI operations layer. Co-founder приносит domain expertise по smart container hardware + business side. Центральный блок управления координирует все внутренние устройства в умных контейнерах. Real-time fleet telemetry tracking (GPS, температура, влажность, состояние дверей). AI Operations Assistant для диагностики + генерации отчётов об инцидентах. Remote OTA-обновления и алертинг при критических сбоях. Same partnership pattern как thetea.app — domain expert + IT partner combination, не solo founder.
- URL: https://www.empireofbloom.com/
- Технологии: C, C++, FreeRTOS (firmware), .NET 8/9/10, EF Core, C#, Go, gRPC, REST API, SignalR, RabbitMQ, MQTT, Modbus, Mosquitto, PostgreSQL, TimescaleDB, Redis, Semantic Kernel, Azure OpenAI, Qdrant, pgvector, RAG, Docker, Kubernetes, Prometheus, Grafana, TypeScript, Vue 3, Pinia, React, Next.js, Leaflet.js


---

<a id="kpmg"></a>

## KPMG — налоговые compliance-платформы (Май 2017 – Сентябрь 2019)

### Smart Tax Solution
- Роль: Team Lead
- Продолжительность: Март 2018 – Сентябрь 2019
- Описание: Веб-сервис оптимизации налоговых процессов и compliance для налоговых органов по всему миру. Team Lead — спроектировал архитектуру, руководил разработкой, доставил compliance-workflows для сложных международных tax requirements.
- Технологии: C#, .NET Core, ASP.NET, Web API, EF Core, LINQ, OData, CQRS, DDD, MS SQL, TypeScript, AngularJS, Angular 8, D3.js, Material Design, DevExpress


### BEPS Automation Tool
- Роль: Архитектор / Team Lead / Senior Developer
- Продолжительность: Май 2017 – Март 2018
- Описание: Платформа налоговых уведомлений и отчётности для налоговых органов по всему миру для BEPS (Base Erosion and Profit Shifting) compliance. Спроектировал compliance-workflows, формализовал API-контракты, провёл миграцию legacy-систем на современный стек.
- Технологии: C#, .NET Framework, ASP.NET, Web API, EF, LINQ, OData, CQRS, DDD, MS SQL, TypeScript, AngularJS, Angular 2-8, D3.js, Material Design, DevExpress


---

<a id="dom-pk"></a>

## ООО «Дом ПК» — государственные информационные системы (Апрель 2015 – Апрель 2017)

### Система нормативно-справочных данных для службы донорства крови
- Роль: Team Lead
- Продолжительность: Май 2016 – Апрель 2017
- Описание: Система анализа информации и ведения нормативно-справочной информации для российских служб донорства крови (Минздрав). Team Lead — спроектировал data-архитектуру, построил REST API и аналитические дашборды, управлял интеграцией compliance с регулятором.
- Технологии: C#, .NET Framework, ASP.NET Web API, EF, LINQ, MS SQL, jQuery, Bootstrap, Telerik, DevExpress, TeamCity, SVN, IIS


### Дашборд национальных социально-политических показателей
- Роль: Full-Stack Developer
- Продолжительность: Сентябрь 2016 – Март 2017
- Описание: Аналитическая система мониторинга социальных, экономических и политических показателей по России. Построил интерактивные дашборды с D3.js-визуализацией, систематизировал метрики, отслеживал целевые индикаторы для decision support государственных чиновников.
- Технологии: C#, .NET Framework, ASP.NET Web API, Dapper, MS SQL, jQuery, D3.js, SVN, IIS


### Портал балансирующего рынка энергетики
- Роль: Full-Stack Developer
- Продолжительность: Сентябрь 2015 – Сентябрь 2016
- Описание: Портал для участников энергетического рынка — отображение операционных данных, новостей, интерфейсы submission заявок, статистика рынка. Интегрировал электронную подпись CryptoPro для регулируемых document workflows в Российском энергетическом секторе (Минэнерго).
- Технологии: C#, .NET Framework, ASP.NET Web Forms, EF, MS SQL, jQuery, Telerik, Bootstrap, CryptoPro, SVN, IIS


### Автоматизация планирования энергетического рынка
- Роль: Full-Stack Developer
- Продолжительность: Сентябрь 2015 – Сентябрь 2016
- Описание: Автоматизация подготовки расчётных моделей для торгов на балансирующем рынке Единой Энергосистемы России (первая синхронная зона). Ускоряет workflow оперативного планирования через автоматизацию генерации моделей из сырых рыночных данных.
- Технологии: C#, .NET Framework, ASP.NET Web API, Dapper, MS SQL, AngularJS, jQuery, Bootstrap, CryptoPro, SVN, IIS


### Федеральная информационная система ГИА (ФИС ГИА)
- Роль: Full-Stack Developer
- Продолжительность: Апрель 2015 – Апрель 2016
- Описание: Федеральная информационная система обработки результатов ЕГЭ и аттестации для вузов и колледжей. Интеграция с инфраструктурой Минобрнауки, web API для приёма экзаменационных данных, пайплайн обработки результатов и интерфейсы отчётности.
- Технологии: C#, .NET Framework, ASP.NET Web API, ADO.NET, MS SQL, Transact-SQL, LINQ, JavaScript, jQuery, Knockout JS, Bootstrap, SVN, IIS


### Портал отраслевых мероприятий (TESLA)
- Роль: Full-Stack Developer
- Продолжительность: Март 2015 – Март 2016
- Описание: Веб-портал для отраслевых мероприятий — обзор, регистрация и управление участием. Построил каталог событий, пользовательский портал и админ-панель для организаторов.
- Технологии: C#, .NET Framework, ASP.NET Web API, EF, LINQ, MS SQL, AutoMapper, Autofac, JavaScript, TypeScript, AngularJS, Angular 2, Material Design, IIS


---

<a id="gz-dkh"></a>

## GZ DKH Innovation Technology — secondment engagements (Сентябрь 2019 – настоящее время)

Subcontract Forward Deployed работа via GZ DKH Innovation Technology на enterprise client projects. Specific project details под NDA — high-level overview ниже.

### Client engagement 2022 – настоящее время (global cloud / IoT platform partner)
Beyond Empire of Bloom (выше в Личных проектах), engagement покрывает smart container IoT и production AI:
- **eCommerce** — Мультиплатформенное решение для e-commerce. Стек: C#, .NET 8, EF Core, CQRS, DDD, PostgreSQL, RabbitMQ, TypeScript, Next.js 14, React.
- **Fleet Tracking Platform** — Real-time fleet telemetry, визуализация маршрутов, аналитические отчёты. Стек: Go, PostgreSQL, TimescaleDB, MQTT, RabbitMQ, gRPC, Docker, Kubernetes, TypeScript, Vue 3, Leaflet.js.
- **Container Diagnostics Service** — Микросервис удалённой диагностики контейнеров + OTA-обновления + алертинг при критических сбоях. Стек: C#, .NET 9, gRPC, SignalR, PostgreSQL, Redis, RabbitMQ, Docker, Prometheus, Grafana.
- **AI Operations Assistant** — AI-ассистент для операций с парком контейнеров. RAG поверх документации, журналов обслуживания и телеметрии для диагностики + генерации отчётов об инцидентах. Стек: C#, .NET 9, Semantic Kernel, Azure OpenAI, Qdrant, pgvector, PostgreSQL, gRPC, REST API, Redis, RabbitMQ, Docker, TypeScript, React, Next.js.


### Client engagement 2019 – 2022 (global telecom / electronics multinational)
Три ротационные delivery за 2.5 года:
- **Marketing Campaign Manager** (2021-2022) — Платформа планирования кампаний, сегментация аудитории, real-time отслеживание конверсии. Стек: C#, .NET Core, EF Core, CQRS, DDD, PostgreSQL, RabbitMQ, SignalR, TypeScript, Vue 3, Chart.js.
- **Dealer Portal** (2020-2021) — Управление заказами, отслеживание поставок, маркетинговые материалы, интеграция с ERP. Стек: C#, .NET Core, EF Core, PostgreSQL, RabbitMQ, MQTT, TypeScript, Vue 3, Vite.
- **Production Line Monitor** (2019-2020) — Real-time мониторинг производственных линий, OEE / простои / выход продукции. Стек: C#, .NET Core, SignalR, MQTT, PostgreSQL, Go, TypeScript, Vue 3, D3.js, Docker.


---

<a id="blueberry"></a>

## Blueberry Consultants Ltd — enterprise SaaS-контракт (Декабрь 2019 – Февраль 2020)

Краткосрочный контракт-подработка (британская софтверная консалтинговая компания) параллельно основной занятости — full-stack вклад в две enterprise-платформы.

### Remedi — Healthcare / Care Homes Management Platform
- Роль: Full-Stack Engineer (Contract)
- Описание: CRM-платформа для заказа медикаментов и управления домами престарелого ухода. Разрабатывал бэкенд-функциональность и API-интеграции, участвовал в улучшении архитектуры системы.
- Технологии: AngularJS, Angular, .NET Core, ASP.NET Core, MySQL, REST API, Web API

### GEMS — HR / Recruitment CRM Platform
- Роль: Full-Stack Engineer (Contract)
- Описание: Высоконагруженная recruitment CRM, используемая сотнями компаний и тысячами пользователей ежедневно. Реализовывал фичи на фронтенде и бэкенде и высокопроизводительную бизнес-логику, создал внутреннюю библиотеку для гибкого взаимодействия Kendo UI с БД, разработал инструменты парсинга CV/резюме (обработка DOC/DOCX, просмотр и конвертация PDF), реализовал GDPR-функциональность и интеграции со сторонними БД, Web API и сервисами поиска адресов/почтовых индексов.
- Технологии: AngularJS, TypeScript, .NET, ASP.NET, MS SQL Server, Kendo UI, REST API, Web API, обработка DOC/DOCX, PDF, GDPR

---

<a id="emg"></a>

## Европейская медиагруппа (ЕМГ) — внутренняя автоматизация медиа-холдинга (Июль 2013 – Апрель 2015)

### Корпоративная система бюджетного планирования (Web Expenses)
- Роль: Full-Stack Developer
- Продолжительность: Август 2013 – Сентябрь 2015
- Описание: Система бюджетного планирования для распределения бюджета компании по проектам, задачам и заявкам сотрудников. Первый веб-проект в карьере — переход от WinForms/desktop на ASP.NET Web Forms.
- Технологии: C#, .NET Framework, ASP.NET Web Forms, ADO.NET, MS SQL, Transact-SQL, LINQ, JavaScript, jQuery, Bootstrap, TFS, IIS


### Платформа поиска по базе знаний (ITpedia)
- Роль: Developer
- Продолжительность: Май 2014 – Сентябрь 2014
- Описание: Система поиска по базе знаний — умный поиск решений на основе курированной базы знаний и описания пользовательской ситуации. Помогает внутренним пользователям быстрее находить решения.
- Технологии: C#, .NET Framework, WinForms, Telerik, ADO.NET, MS SQL, Transact-SQL, TFS


### Внутренняя система техподдержки и запросов (HelpDesk + AddInn)
- Роль: Developer
- Продолжительность: Июль 2013 – Июль 2014
- Описание: Внутренняя система техподдержки и обслуживания запросов. Управление заявками, workflow обработки, интеграция с внутренними директориями.
- Технологии: C#, .NET Framework, WinForms, Telerik, ADO.NET, MS SQL, Transact-SQL, TFS


---

<a id="himoil"></a>

## ООО «Химоил» — автоматизация бизнес-процессов (Ноябрь 2008 – Февраль 2013)

### Система автоматизации бизнес-процессов (ХиМ)
- Роль: Developer
- Продолжительность: Январь 2010 – Февраль 2013
- Описание: Система автоматизации бизнес-процессов. Проектирование и разработка внутреннего tooling на C#/.NET Framework/WinForms с MSSQL через ADO.NET. Сократила время выполнения задач и улучшила качество customer service в компании.
- Технологии: C#, .NET Framework, WinForms, ADO.NET, MS SQL, Transact-SQL


---

<a id="earlier-roles"></a>

## Ранние роли

- **DEPO Computers** (Март 2013 – Июнь 2013) — Инженер. Оптимизация хранимых процедур и T-SQL-запросов для обработки статистики в OLAP-кубах. Стек: Transact-SQL, MS SQL.
