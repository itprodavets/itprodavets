/* ===== Resume Registry ===== */
const RESUMES = {
  'full-resume': {
    en: 'resume.en.md',
    ru: 'resume.ru.md',
    label: { en: 'Full Resume', ru: 'Полное резюме' },
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'
  },
  'fwd-ai-engineer': {
    en: 'resume-fwd-ai-engineer.md',
    ru: 'resume-fwd-ai-engineer.ru.md',
    label: { en: 'Forward Deployed AI Engineer', ru: 'Forward Deployed AI Engineer' },
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'
  },
  'tech-lead': {
    en: 'resume-tech-lead.md',
    ru: 'resume-tech-lead.ru.md',
    label: { en: 'Tech Lead', ru: 'Tech Lead' },
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>'
  },
  'projects': {
    en: 'projects.en.md',
    ru: 'projects.ru.md',
    label: { en: 'Projects', ru: 'Проекты' },
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>'
  },
  'skills': {
    en: 'skills.en.md',
    ru: 'skills.ru.md',
    label: { en: 'Skills', ru: 'Навыки' },
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>'
  }
};

/* ===== i18n ===== */
const I18N = {
  en: {
    download: 'Download PDF',
    viewSource: 'View source',
    loadError: 'Failed to load resume',
    loadErrorHint: 'Please check your connection and try again',
    summary: 'Professional Summary',
    expertise: 'Technical Expertise'
  },
  ru: {
    download: 'Скачать PDF',
    viewSource: 'Исходник',
    loadError: 'Не удалось загрузить резюме',
    loadErrorHint: 'Проверьте подключение и попробуйте снова',
    summary: 'О себе',
    expertise: 'Технические навыки'
  }
};

/* ===== State =====
   Exposed on window so pdf-export.js can pick the right filename
   (`<resume-slug>-<lang>.pdf`) for the browser's "Save as PDF" dialog. */
const state = {
  currentResume: 'full-resume',
  currentLang: 'en',
  cache: {},
  sidebarOpen: false,
  pendingAnchor: null
};
window.state = state;

/* ===== Render API for PDF export =====
   pdf-export.js appends the Projects and Skills sections to job-resume PDFs
   so the printed file is self-contained. It calls renderSection(key, lang)
   to get a fully-rendered, enhanceContent-processed HTMLElement, then
   appends it to the DOM right before window.print().

   We strip the auto-generated "resume-header" div from the appended content
   because the parent resume already has its own H1+contact block — a second
   one would read as a doubled header. */
window.renderSection = async function (resumeKey, lang) {
  const resume = RESUMES[resumeKey];
  if (!resume) return null;
  const filename = resume[lang];
  const markdown = await fetchMarkdown(filename);
  const html = marked.parse(markdown);

  const container = document.createElement('div');
  container.innerHTML = html;

  const header = container.querySelector('.resume-header');
  if (header) header.remove();
  const hr = container.querySelector('hr.header-separator');
  if (hr) hr.remove();

  // enhanceContent reads state.currentResume to decide how to wrap content
  // (project cards on projects page, skill chips on skills page). Swap it in
  // temporarily so the appendix gets rendered with the right enhancements.
  const prevResume = state.currentResume;
  state.currentResume = resumeKey;
  try {
    enhanceContent(container);
  } finally {
    state.currentResume = prevResume;
  }
  return container;
};

/* ===== Constants ===== */
const IS_LOCAL = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const RAW_BASE = IS_LOCAL
  ? location.pathname.replace(/\/docs\/?$/, '/').replace(/\/docs\/[^/]*$/, '/')
  : 'https://cdn.jsdelivr.net/gh/itprodavets/itprodavets@main/';
const GITHUB_BASE = 'https://github.com/itprodavets/itprodavets/blob/main/';
/* Cache-bust markdown the same way as JS/CSS — bump on every content change so
   jsDelivr + browsers refetch instead of serving a stale @main copy. Keep in
   sync with the ?v= query on the script/style tags in index.html. */
const ASSET_VERSION = '24';

/* ===== DOM Helpers ===== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ===== Markdown fetching with cache ===== */
async function fetchMarkdown(filename) {
  if (state.cache[filename]) return state.cache[filename];
  const response = await fetch(RAW_BASE + filename + '?v=' + ASSET_VERSION);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const text = await response.text();
  state.cache[filename] = text;
  return text;
}

/* ===== Map internal .md links to SPA hash ===== */
function mapMdFileToHash(href) {
  // Split off anchor before file lookup
  const hashIdx = href.indexOf('#');
  const anchor = hashIdx >= 0 ? href.substring(hashIdx + 1) : '';
  const path = hashIdx >= 0 ? href.substring(0, hashIdx) : href;
  const file = path.replace(/^\//, '').replace(/^\.\//, '');

  for (const [key, resume] of Object.entries(RESUMES)) {
    for (const [lang, filename] of Object.entries(resume)) {
      if (lang !== 'label' && lang !== 'icon' && filename === file) {
        return anchor ? `#/${key}/${lang}?anchor=${anchor}` : `#/${key}/${lang}`;
      }
    }
  }
  return null;
}

/* ===== Escape HTML ===== */
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ===== Years meta formatter =====
   Skill bullets in skills.md use a `since YYYY` token instead of hard-coded
   "X лет" / "X yr" so the years auto-update each calendar year — no manual
   bumps required. This helper expands a `since YYYY` token into the correct
   localized phrase for display, with proper Russian plural handling.

   Existing legacy markdown that still hard-codes "X лет" / "X yr" / "current"
   passes through unchanged. */
function formatYearsMeta(meta, lang) {
  const m = meta.match(/^since\s+(\d{4})$/i);
  if (!m) return meta;
  const startYear = parseInt(m[1], 10);
  const years = Math.max(1, new Date().getFullYear() - startYear);
  if (lang === 'ru') {
    const mod10 = years % 10;
    const mod100 = years % 100;
    let suffix;
    if (mod10 === 1 && mod100 !== 11) suffix = 'год';
    else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) suffix = 'года';
    else suffix = 'лет';
    return `${years} ${suffix}`;
  }
  return `${years} yr`;
}

/* ===== Configure marked.js with custom renderers ===== */
function setupMarked() {
  const renderer = new marked.Renderer();

  /*
   * H1: "Denis Kharchenko — Senior C# Backend Developer"
   * → Name block with subtitle and separator
   */
  renderer.heading = function (data) {
    const text = typeof data === 'object' ? data.text : data;
    const depth = typeof data === 'object' ? data.depth : arguments[1];

    if (depth === 1) {
      const separators = [' — ', ' — ', ' - '];
      let name = text;
      let subtitle = '';

      for (const sep of separators) {
        const idx = text.indexOf(sep);
        if (idx > 0) {
          name = text.substring(0, idx);
          subtitle = text.substring(idx + sep.length);
          break;
        }
      }

      let html = '<div class="resume-header">';
      html += `<h1 class="resume-name">${escapeHtml(name)}</h1>`;
      if (subtitle) {
        html += `<div class="resume-role">${escapeHtml(subtitle)}</div>`;
      }
      html += `<div class="resume-contact"><a href="mailto:itprodavets@gmail.com">itprodavets@gmail.com</a> · <a href="https://www.linkedin.com/in/itprodavets/" target="_blank" rel="noopener noreferrer">LinkedIn</a> · <a href="https://t.me/itprodavets" target="_blank" rel="noopener noreferrer">Telegram</a> · <a href="https://www.reddit.com/user/itprodavets/" target="_blank" rel="noopener noreferrer">Reddit</a></div>`;
      html += '</div>';
      html += '<hr class="header-separator">';
      return html;
    }

    if (depth === 2) {
      return `<h2>${text}</h2>`;
    }

    /*
     * H3: "Lead Developer — Company | Mar 2022 – Present"
     * → Job title left, dates right
     */
    if (depth === 3) {
      const pipeIdx = text.lastIndexOf(' | ');
      if (pipeIdx > 0) {
        const titlePart = text.substring(0, pipeIdx);
        const datesPart = text.substring(pipeIdx + 3);
        return `<div class="job-header"><div class="job-title">${titlePart}</div><div class="job-dates">${escapeHtml(datesPart)}</div></div>`;
      }
      return `<h3>${text}</h3>`;
    }

    return `<h${depth}>${text}</h${depth}>`;
  };

  /* Links: internal .md -> SPA hash, external -> new tab */
  renderer.link = function (data) {
    const href = typeof data === 'object' ? data.href : data;
    const text = typeof data === 'object' ? data.text : arguments[2];
    const title = typeof data === 'object' ? data.title : arguments[1];
    const hrefStr = href || '';

    if (/\.md(#|$)/.test(hrefStr)) {
      const mapped = mapMdFileToHash(hrefStr);
      if (mapped) {
        return `<a href="${mapped}">${text || ''}</a>`;
      }
    }

    if (hrefStr.startsWith('http')) {
      return `<a href="${hrefStr}" target="_blank" rel="noopener noreferrer"${title ? ` title="${title}"` : ''}>${text || ''}</a>`;
    }

    return `<a href="${hrefStr}"${title ? ` title="${title}"` : ''}>${text || ''}</a>`;
  };

  marked.setOptions({
    renderer: renderer,
    breaks: false,
    gfm: true
  });
}

/* ===== Post-processing: add section headers ===== */
function postProcessResume(container) {
  // Projects and Skills pages have no intro/tech-list, skip post-processing
  if (state.currentResume === 'projects' || state.currentResume === 'skills') return;

  const strings = I18N[state.currentLang];
  const headerBlock = container.querySelector('.resume-header');
  if (!headerBlock) return;

  const separator = headerBlock.nextElementSibling; // <hr>
  if (!separator) return;

  // Collect elements between the separator and the first <h2>
  const introElements = [];
  let el = separator.nextElementSibling;
  while (el && el.tagName !== 'H2') {
    introElements.push(el);
    el = el.nextElementSibling;
  }

  if (introElements.length === 0) return;

  // Find first paragraph(s) and first <ul> before first H2
  const paragraphs = [];
  let techList = null;
  let contactLine = null;

  for (const item of introElements) {
    if (item.tagName === 'P') {
      const links = item.querySelectorAll('a');
      const text = item.textContent.trim();
      // Skip empty / anchor-only paragraphs (e.g. <p><a id="..."></a></p>)
      if (text === '') continue;

      // Skip standalone contact lines:
      //   legacy: "[GitHub](...) · [LinkedIn](...) · ..."
      //   current: "[email@example.com](mailto:email@example.com)"
      const isLegacyContact = links.length >= 2 && text.includes('·');
      const isMailtoOnly = links.length === 1 && links[0].getAttribute('href')?.startsWith('mailto:');
      if (isLegacyContact || isMailtoOnly) {
        contactLine = item;
        continue;
      }
      paragraphs.push(item);
    }
    if (item.tagName === 'UL' && !techList) {
      techList = item;
    }
  }

  // Insert "PROFESSIONAL SUMMARY" h2 before first paragraph
  if (paragraphs.length > 0) {
    const summaryH2 = document.createElement('h2');
    summaryH2.textContent = strings.summary;
    paragraphs[0].before(summaryH2);
  }

  // Insert "TECHNICAL EXPERTISE" h2 before the tech list
  if (techList) {
    const expertiseH2 = document.createElement('h2');
    expertiseH2.textContent = strings.expertise;
    techList.before(expertiseH2);
  }

  // Hide the standalone contact link line (already shown in header)
  if (contactLine) {
    contactLine.style.display = 'none';
  }
}

/* ===== Post-processing: enhance projects + "detailed projects" links ===== */
const META_LABELS = {
  'role': true, 'роль': true,
  'duration': true, 'продолжительность': true,
  'description': true, 'описание': true,
  'technologies': true, 'технологии': true, 'стек': true,
  'url': true
};

function enhanceContent(container) {
  // 1. Wrap each H3 + following UL into .project-card on projects page
  if (state.currentResume === 'projects') {
    const h3s = Array.from(container.querySelectorAll('h3'));
    for (const h3 of h3s) {
      const ul = h3.nextElementSibling;
      if (!ul || ul.tagName !== 'UL') continue;

      const card = document.createElement('div');
      card.className = 'project-card';
      h3.before(card);
      card.appendChild(h3);
      card.appendChild(ul);

      // Transform "Role: value", "Technologies: a, b, c" into labelled rows + chips
      for (const li of Array.from(ul.children)) {
        if (li.tagName !== 'LI') continue;
        const raw = li.textContent;
        const colonIdx = raw.indexOf(':');
        if (colonIdx < 1) continue;
        const labelText = raw.slice(0, colonIdx).trim();
        const valueText = raw.slice(colonIdx + 1).trim();
        const labelKey = labelText.toLowerCase();
        if (!META_LABELS[labelKey]) continue;

        const isTech = /^technologies$|^технологии$|^стек$/i.test(labelText);
        const isRole = /^role$|^роль$/i.test(labelText);
        const isDuration = /^duration$|^продолжительность$/i.test(labelText);

        li.classList.add('meta-row');
        if (isRole) li.classList.add('role');
        if (isDuration) li.classList.add('duration');

        // Build innerHTML: label + value (preserving any links/strong inside)
        // Original HTML may contain links — strip the leading "Label: " text but keep tail markup
        const originalHTML = li.innerHTML;
        const labelEnd = originalHTML.indexOf(':');
        const tailHTML = labelEnd >= 0 ? originalHTML.slice(labelEnd + 1).replace(/^\s+/, '') : '';

        let valueHTML;
        if (isTech) {
          const chips = valueText.split(',').map(t => t.trim()).filter(Boolean);
          valueHTML = `<ul class="tech-chips">${chips.map(c =>
            `<li class="tech-chip">${escapeHtml(c)}</li>`
          ).join('')}</ul>`;
        } else {
          valueHTML = `<div class="meta-value">${tailHTML}</div>`;
        }
        li.innerHTML = `<span class="meta-label">${labelText}</span>${valueHTML}`;
      }
    }
  }

  // 2. Style "*Detailed projects → ...*" lines as accent blocks
  // These come from markdown emphasis (P > EM > ...) right after job header
  const ems = Array.from(container.querySelectorAll('p > em:only-child'));
  for (const em of ems) {
    const links = em.querySelectorAll('a[href^="#/projects/"]');
    if (links.length === 0) continue;
    const p = em.parentElement;
    p.classList.add('detailed-projects');
    // Unwrap the em — its content goes straight into the paragraph
    while (em.firstChild) p.insertBefore(em.firstChild, em);
    em.remove();
  }

  // 3. Skills page — render "Name · meta · projects" bullets as tier-based chips
  if (state.currentResume === 'skills') {
    const TIER_CLASSES = {
      'primary': 'tier-primary',
      'working': 'tier-working',
      'familiar': 'tier-familiar',
      'legacy': 'tier-legacy'
    };

    // Walk H2s — each H2 starts a tier. Following content until next H2 belongs to it.
    const h2s = Array.from(container.querySelectorAll('h2'));
    for (const h2 of h2s) {
      const tierKey = h2.textContent.trim().toLowerCase();
      const tierClass = TIER_CLASSES[tierKey];
      if (!tierClass) continue;
      h2.classList.add('tier-heading', tierClass);

      // Find the UL following this H2 (intro <p> may sit between H2 and UL)
      let next = h2.nextElementSibling;
      while (next && next.tagName !== 'UL' && next.tagName !== 'H2') next = next.nextElementSibling;
      if (!next || next.tagName !== 'UL') continue;

      const ul = next;
      ul.classList.add('skill-grid', tierClass);

      for (const li of Array.from(ul.children)) {
        if (li.tagName !== 'LI') continue;
        // Format: "<strong>Name</strong> · <years token> · <projects, comma separated>"
        // The years token may be one of:
        //   "since YYYY" — single source of truth, auto-computed below so the
        //      page doesn't go stale when a new year rolls over
        //   "X yr" / "X лет" / "X год" — literal hard-coded value (legacy)
        //   "current" — open-ended (rendered as-is)
        const parts = li.textContent.split('·').map(s => s.trim());
        if (parts.length < 2) continue;

        const name = parts[0].trim();
        let meta = parts.length >= 3 ? parts[1] : '';
        meta = formatYearsMeta(meta, state.currentLang);
        const projectsText = parts.slice(meta ? 2 : 1).join(' · ');
        const projects = projectsText.split(',').map(s => s.trim()).filter(Boolean);

        const chipId = 'skill-' + name.toLowerCase().replace(/[^a-z0-9а-я]+/gi, '-').replace(/^-|-$/g, '');
        li.className = `skill-chip-row ${tierClass}`;
        li.innerHTML =
          `<button class="skill-chip" type="button" aria-expanded="false" data-chip="${chipId}">` +
            `<span class="skill-chip-name">${escapeHtml(name)}</span>` +
            (meta ? `<span class="skill-chip-meta">${escapeHtml(meta)}</span>` : '') +
            `<svg class="skill-chip-caret" width="10" height="10" viewBox="0 0 10 10"><path d="M2 3 L5 7 L8 3" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>` +
          `</button>` +
          `<div class="skill-projects" id="${chipId}" hidden>` +
            `<div class="skill-projects-label">Production projects</div>` +
            `<ul class="skill-projects-list">` +
              projects.map(p => `<li>${escapeHtml(p)}</li>`).join('') +
            `</ul>` +
          `</div>`;
      }
    }

    // Wire up click → toggle visibility
    container.addEventListener('click', (e) => {
      const btn = e.target.closest('.skill-chip');
      if (!btn) return;
      const id = btn.getAttribute('data-chip');
      const panel = container.querySelector('#' + CSS.escape(id));
      if (!panel) return;
      const open = !panel.hasAttribute('hidden');
      // Close all other panels first
      container.querySelectorAll('.skill-projects:not([hidden])').forEach(p => {
        if (p !== panel) {
          p.setAttribute('hidden', '');
          const otherBtn = container.querySelector(`[data-chip="${p.id}"]`);
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });
      if (open) {
        panel.setAttribute('hidden', '');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        panel.removeAttribute('hidden');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  }
}

/* ===== Render navigation ===== */
function renderNav() {
  const navList = $('#navList');
  navList.innerHTML = '';

  for (const [key, resume] of Object.entries(RESUMES)) {
    const li = document.createElement('li');
    li.className = 'nav-item';

    const a = document.createElement('a');
    a.href = `#/${key}/${state.currentLang}`;
    a.className = key === state.currentResume ? 'active' : '';
    a.innerHTML = `<span class="nav-icon">${resume.icon}</span>${resume.label[state.currentLang]}`;

    a.addEventListener('click', (e) => {
      e.preventDefault();
      state.currentResume = key;
      updateURL();
      renderNav();
      renderResume();
      closeSidebar();
    });

    li.appendChild(a);
    navList.appendChild(li);
  }
}

/* ===== Render resume ===== */
async function renderResume() {
  const resume = RESUMES[state.currentResume];
  if (!resume) return;

  const filename = resume[state.currentLang];
  const content = $('#resumeContent');
  const loading = $('#loading');

  content.classList.add('hidden');
  loading.classList.add('active');

  try {
    const markdown = await fetchMarkdown(filename);
    const html = marked.parse(markdown);
    content.innerHTML = html;

    // Post-process: add section headers like in the PDF template
    postProcessResume(content);

    // Enhance: project cards, tech chips, detailed-projects link styling
    enhanceContent(content);

    content.classList.remove('hidden');

    // Update GitHub link
    $('#githubLink').href = GITHUB_BASE + filename;

    // Scroll to anchor if pending, otherwise scroll to top
    if (state.pendingAnchor) {
      const target = document.getElementById(state.pendingAnchor);
      if (target) {
        // <a id="..."></a> markers have height 0 — scroll to the next real
        // element (usually the H2 right after) for visible results.
        let scrollTarget = target;
        if (target.tagName === 'A' && target.offsetHeight === 0) {
          let next = target.nextElementSibling || target.parentElement?.nextElementSibling;
          while (next && next.offsetHeight === 0) next = next.nextElementSibling;
          if (next) scrollTarget = next;
        }
        setTimeout(() => scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      } else {
        window.scrollTo({ top: 0 });
      }
      state.pendingAnchor = null;
    } else {
      window.scrollTo({ top: 0 });
    }
  } catch (err) {
    const strings = I18N[state.currentLang];
    content.innerHTML = `
      <div class="error">
        <div class="error-icon">:(</div>
        <div class="error-text">${strings.loadError}</div>
        <div class="error-hint">${strings.loadErrorHint}</div>
      </div>
    `;
    content.classList.remove('hidden');
  } finally {
    loading.classList.remove('active');
  }
}

/* ===== Update i18n strings ===== */
function updateI18n() {
  const strings = I18N[state.currentLang];
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[key]) el.textContent = strings[key];
  });
}

/* ===== URL hash routing ===== */
function updateURL() {
  const hash = `#/${state.currentResume}/${state.currentLang}`;
  if (window.location.hash !== hash) {
    history.pushState(null, '', hash);
  }
}

function parseURL() {
  const hash = window.location.hash.replace('#/', '');
  if (!hash) return;
  const parts = hash.split('/');
  if (parts.length >= 1 && RESUMES[parts[0]]) {
    state.currentResume = parts[0];
  }
  if (parts.length >= 2) {
    const langPart = parts[1];
    const qIdx = langPart.indexOf('?');
    const lang = qIdx >= 0 ? langPart.substring(0, qIdx) : langPart;
    if (lang === 'en' || lang === 'ru') {
      state.currentLang = lang;
    }
    if (qIdx >= 0) {
      const query = langPart.substring(qIdx + 1);
      const match = query.match(/anchor=([^&]+)/);
      state.pendingAnchor = match ? decodeURIComponent(match[1]) : null;
    } else {
      state.pendingAnchor = null;
    }
  }
}

/* ===== Language toggle ===== */
function setupLangToggle() {
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang === state.currentLang) return;

      state.currentLang = lang;
      $$('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      updateURL();
      updateI18n();
      renderNav();
      renderResume();
    });
  });
}

function syncLangButtons() {
  $$('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === state.currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/* ===== Mobile sidebar ===== */
function setupSidebar() {
  const toggle = $('#menuToggle');
  const overlay = $('#sidebarOverlay');
  toggle.addEventListener('click', () => {
    state.sidebarOpen ? closeSidebar() : openSidebar();
  });
  overlay.addEventListener('click', closeSidebar);
}

function openSidebar() {
  state.sidebarOpen = true;
  $('#sidebar').classList.add('open');
  $('#sidebarOverlay').classList.add('active');
  $('#menuToggle').classList.add('active');
}

function closeSidebar() {
  state.sidebarOpen = false;
  $('#sidebar').classList.remove('open');
  $('#sidebarOverlay').classList.remove('active');
  $('#menuToggle').classList.remove('active');
}

/* ===== Keyboard ===== */
function setupKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.sidebarOpen) closeSidebar();
  });
}

/* ===== Hash change ===== */
function setupHashChange() {
  window.addEventListener('popstate', () => {
    parseURL();
    syncLangButtons();
    updateI18n();
    renderNav();
    renderResume();
  });
}

/* ===== Initialize ===== */
document.addEventListener('DOMContentLoaded', () => {
  setupMarked();
  parseURL();
  syncLangButtons();
  updateI18n();
  setupLangToggle();
  setupSidebar();
  setupKeyboard();
  setupHashChange();
  renderNav();
  renderResume();
});
