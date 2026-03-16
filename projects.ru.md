# Projects

## Личный проект

### thetea.app
- Роль: Основатель / Full-Stack архитектор
- Описание: Мультитенантная SaaS-платформа для запуска и управления брендированными чайными магазинами в Telegram. Система включает Telegram Mini App для покупателей, админ-панель для управления магазинами, 9+ микросервисов с событийно-ориентированной архитектурой, gRPC-коммуникацию между сервисами и REST-шлюзы (BFF). Реализованы каталог товаров, корзина с резервированием остатков, оформление заказов, система отзывов, мультиязычность (EN/RU), 6 встроенных тем оформления и интеграция с Telegram Bot API.
- Технологии: C# 14, .NET 10, Entity Framework Core, Dapper, MediatR (CQRS), FluentValidation, PostgreSQL, Redis, RabbitMQ (Outbox Pattern), gRPC, REST API, Keycloak (OIDC/OAuth2), JWT, Serilog, OpenTelemetry, Docker, Docker Compose, Next.js 16, React 19, TypeScript 5.9, Tailwind CSS, DaisyUI, TanStack Query, Zod, next-intl, Telegram Mini App SDK, Feature-Sliced Design, Domain-Driven Design, xUnit, FluentAssertions, GitLab CI/CD, GitHub Actions
- Ссылка: [thetea.app](https://thetea.app)

### ai-docs-hub
- Роль: Основатель / Full-Stack разработчик
- Описание: Open-source платформа для создания AI-powered баз знаний из технической документации. Позволяет командам загружать документы (PDF, Markdown, экспорт из Confluence), автоматически разбивать и векторизовать их, а затем задавать вопросы через чат-интерфейс с указанием источников. Поддерживает мультитенантные рабочие пространства, ролевой доступ и подключаемые LLM-бэкенды (OpenAI, Azure OpenAI, локальные модели через Ollama).
- Технологии: Go (Golang), Gin, PostgreSQL, pgvector, Redis, OpenAI API, LangChain (Go), Ollama, Docker, Docker Compose, TypeScript, Next.js 15, React 19, Tailwind CSS, Shadcn/UI, TanStack Query, SSE (Server-Sent Events), GitHub Actions

---

## GZ DKH Innovation Technology (Март 2022 – по настоящее время)

### Empire Of Bloom 
 - Роль: Главный разработчик программного обеспечения 
 - Описание: Центральный блок управления, отвечающий за координацию и управление работой всех внутренних устройств внутри контейнера.
 - Технологии: C, C++, C#, FreeRTOS, .NET Core, EF Core (Entity Framework Core), MQTTnet, CQRS (Command Query Responsibility Segregation), Domain Driven Design, PostgreSQL, Modbus, MQTT, Mosquitto (MQTT Broker), RabbitMQ (Message Broker), SignalR, JavaScript, TypeScript, Vue 3 (JavaScript Framework), Pinia (State Management for Vue)

### eCommerce
- Роль: Ведущий разработчик
- Описание: Руководил разработкой многогранного решения для электронной коммерции, оптимизированного для развертывания на нескольких платформах с целью повышения проникновения на рынок и стимулирования роста продаж.
- Технологии: C#, .NET 8, EF Core, CQRS, Domain-Driven Design, PostgreSQL, RabbitMQ, TypeScript, NextJS 14, React

### Fleet Tracking Platform
- Роль: Ведущий разработчик
- Описание: Платформа отслеживания и управления парком умных контейнеров в реальном времени. Система агрегирует телеметрию с устройств (GPS, температура, влажность, состояние дверей), визуализирует маршруты и формирует аналитические отчёты для логистических операторов.
- Технологии: Go (Golang), PostgreSQL, TimescaleDB, MQTT, RabbitMQ, gRPC, Docker, Kubernetes, TypeScript, Vue 3, Pinia, Leaflet.js

### Container Diagnostics Service
- Роль: Ведущий разработчик
- Описание: Микросервис удалённой диагностики умных контейнеров. Обеспечивает сбор логов с устройств, анализ состояния прошивки, удалённое обновление firmware (OTA) и оповещение инженеров о критических сбоях через систему алертов.
- Технологии: C#, .NET 9, gRPC, SignalR, PostgreSQL, Redis, RabbitMQ, Docker, Prometheus, Grafana

### AI Operations Assistant
- Роль: Ведущий разработчик
- Описание: Внутренний AI-ассистент для операций с парком контейнеров. Использует RAG-архитектуру поверх технической документации, журналов обслуживания и данных телеметрии, помогая инженерам быстро диагностировать проблемы, находить нужные процедуры и генерировать отчёты об инцидентах. Интегрирован с Azure OpenAI для LLM-инференса, Qdrant для векторного поиска и существующими микросервисами через gRPC.
- Технологии: C#, .NET 9, Semantic Kernel, Azure OpenAI (GPT-4o), Qdrant, pgvector, PostgreSQL, gRPC, REST API, Redis, RabbitMQ, Docker, TypeScript, React, Next.js

---

## GZ DKH Innovation Technology (Secondment · Huawei) (Сентябрь 2019 – Март 2022)

### Marketing Campaign Manager
- Роль: Ведущий C# / Backend разработчик
- Продолжительность: 2021/01 - 2022/03
- Описание: Платформа управления маркетинговыми кампаниями для продвижения продуктов Huawei на различных рынках. Система позволяла планировать, запускать и анализировать рекламные кампании, управлять бюджетами, сегментировать целевую аудиторию и отслеживать конверсию в реальном времени.
- Технологии: C#, .NET Core, EF Core, CQRS, Domain-Driven Design, PostgreSQL, RabbitMQ, SignalR, TypeScript, Vue 3, Pinia, Chart.js

### Dealer Portal
- Роль: Ведущий C# / Backend разработчик
- Продолжительность: 2020/03 - 2021/06
- Описание: Портал для дилеров и партнёров Huawei, обеспечивающий управление заказами, отслеживание поставок, доступ к маркетинговым материалам и программам лояльности. Включал интеграцию с внутренними ERP-системами и автоматизацию документооборота.
- Технологии: C#, .NET Core, EF Core, PostgreSQL, RabbitMQ, MQTT (MQTTnet), TypeScript, Vue 3, Vite, Pinia

### Production Line Monitor
- Роль: Ведущий C# / Backend разработчик
- Продолжительность: 2019/09 - 2020/06
- Описание: Система мониторинга производственных линий в реальном времени. Собирала данные с IoT-датчиков, визуализировала ключевые метрики производства (OEE, время простоя, выход продукции) и формировала отчёты для руководства производственных площадок.
- Технологии: C#, .NET Core, SignalR, MQTT (MQTTnet), PostgreSQL, Go (Golang), TypeScript, Vue 3, D3.js, Docker

---

## KPMG (Май 2017 – Сентябрь 2019)

### BEPS Automation Tool
- Роль: Full-Stack разработчик
- Продолжительность: 2017/05 - 2018/03
- Описание: BEPS Automation Tool используется для получения налоговых уведомлений, подготовки налоговых отчетов для налоговых органов по всему миру. В этом проекте я выступал в роли архитектора, руководителя команды и старшего разработчика веб-приложения.
- Технологии: C#, .NET Framework, ASP.NET, EF (Entity Framework), LINQ, OData, CQRS (Command Query Responsibility Segregation), Domain Driven Design, MS SQL, JavaScript, TypeScript, Angular.JS, Angular 8, HTML5, D3.js, Material Design, DevExpress, Git, Internet Information Services (IIS), PowerShell

### Smart Tax Solution
- Руководитель группы
- Продолжительность: 2018/03 - 2019/09
- Описание: Smart Tax Solution - это веб-сервис, предназначенный для оптимизации налоговых процессов и обеспечения соответствия требованиям.
- Технологии: C#, .NET Core, ASP.NET, EF Core (Entity Framework Core), LINQ, OData, CQRS (Command Query Responsibility Segregation), Domain Driven Design, MS SQL, JavaScript, TypeScript, Angular.JS, Angular 8, HTML5, D3.js, Material Design, DevExpress, Git, Internet Information Services (IIS), PowerShell

---

## ООО «Дом ПК» (Апрель 2015 – Апрель 2017)

### Information and analytic system
- Роль: Team Lead
- Продолжительность: 2016/05 - 2018/03
- Описание: Программное обеспечение для анализа информации, обмена и ведения нормативно-справочной информации Объединенной информационной базы данных.Используется для соблюдения основных принципов донорства крови, в том числе: безопасность донорской крови, добровольность сдачи крови, охрана здоровья доноров, социальная поддержка и защита прав доноров, поощрение и поддержка донорства крови.
- Технологии: C#, ASP.NET Web API, .Net Framework, AutoMapper, Autofac, EF (Entity Framework), LINQ, MSSQL, Transact-SQL,JavaScript, JQuery, Bootstrap, HTML, HTML5, Telerik, DevExpress, Tortoise SVN, Team City, Internet Information Services (IIS), PowerShell, Unit Testing.

### Monitoring of social and political situation in Russia
- Роль: Full-Stack Developer
- Продолжительность: 2016/09 - 2017/03
- Описание: Информационно-аналитическая система, предназначенная для мониторинга различных показателей социальной, экономической и политической ситуации в России, используемая для поддержки принятия решений российскими чиновниками. Система позволяет:
    - Систематизировать данные в виде единого метрического паспорта.
    - Контролировать достижение целевых показателей и критических значений индикаторов.
- Технологии: C#, ASP.NET Web API, .Net Framework, Dapper, MSSQL, Transact-SQL, LINQ, AutoMapper, Autofac, JavaScript, JQuery, D3js, HTML, HTML5, CSS, CSS 3, Tortoise SVN, Internet Information Services (IIS), PowerShell, Unit Testing.

### Balancing market portal
- Роль: Full-Stack Developer
- Продолжительность: 2015/09 - 2016/09
- Описание: Портал балансирующего рынка предназначен для оповещения участников рынка об оперативных данных, документах и новостях, предоставления им интерфейсов для формирования заявок, предоставления статистики энергетических рынков.
- Технологии: C#, .Net Framework, ASP.NET Web Forms, EF (Entity Framework), MSSQL, Transact-SQL, LINQ, AutoMapper, Autofac, JavaScript, JQuery, Telerik, Bootstrap, HTML, HTML5, CSS, CSS 3, Tortoise SVN, Internet Information Services (IIS), PowerShell, Unit Testing, CryptoPro CSP, CryptoPro .Net.

### System to prepare data for operational planning
- Роль: Full-Stack Developer
- Продолжительность: 2015/09 - 2016/09
- Описание: Система предназначена для автоматизации и ускорения подготовки актуальных расчетных моделей, используемых в торгах на балансирующем рынке первой зоны синхронизации Энергосистемы России.
- Технологии: C#, .Net Framework, ASP.NET Web API, Dapper, MSSQL, Transact-SQL, LINQ, AutoMapper, JavaScript, Angular.JS, JQuery, Bootstrap, HTML, HTML5, CSS, CSS 3, Tortoise SVN, Internet Information Services (IIS), PowerShell, Unit Testing, CryptoPro CSP, CryptoPro .Net.

### РОН ФИС ГИА 2015 ОВСУП
- Роль: Full-Stack Developer
- Продолжительность: 2015/04 - 2016/04
- Описание: Федеральная информационная система обработки результатов единого государственного экзамена и аттестации в колледжах и университетах.
- Технологии: C#, .Net Framework, ASP.NET Web API, ADO.NET, MSSQL, Transact-SQL, LINQ, JavaScript, JQuery, Knockout JS, Bootstrap, HTML, HTML5, CSS, CSS 3, Tortoise SVN, Internet Information Services (IIS), PowerShell, Unit Testing

---

## Европейская медиагруппа (ЕМГ) (Июль 2013 – Апрель 2015)

### Web Expenses
Роль: Full-Stack Developer
Продолжительность: 2013/08 - 2015/09
Описание: Система бюджетного планирования, используемая для распределения бюджета по проектам, задачам и заявкам сотрудников компании.
Технологии: C#, .Net Framework, ASP.NET Web Forms, ADO.NET, MSSQL, Transact-SQL, LINQ, JavaScript, JQuery, Bootstrap, HTML, HTML5, CSS, CSS 3, TFS, Internet Information Services (IIS)

### ITpedia
Роль: Developer
Продолжительность: 2014/05 - 2014/09
Описание: ITpedia используется для интеллектуального поиска решений, основанного на предоставленной базе знаний и определении ситуации пользователя.
Технологии: C#, .Net Framework, WinForms, Telerik, ADO.NET, MSSQL, Transact-SQL, SQL, TFS

### HelpDesk
Роль: Developer
Продолжительность: 2013/07 - 2014/07
Описание: Служба технической поддержки и система обслуживания запросов для внутренних нужд.
Технологии: C#, .Net Framework, WinForms, Telerik, ADO.NET, MSSQL, Transact-SQL, SQL, TFS.

---
