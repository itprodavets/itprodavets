/* ===== Resume Registry ===== */
const RESUMES = {
  'full-resume': {
    en: 'resume.en.md',
    ru: 'resume.ru.md',
    label: { en: 'Full Resume', ru: 'Полное резюме' },
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>'
  },
  'csharp-backend': {
    en: 'resume-csharp-backend.md',
    ru: 'resume-csharp-backend.ru.md',
    label: { en: 'Senior C# Backend', ru: 'Senior C# Backend' },
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
  },
  'lead-csharp-backend': {
    en: 'resume-lead-csharp-backend.md',
    ru: 'resume-lead-csharp-backend.ru.md',
    label: { en: 'Lead C# Backend', ru: 'Lead C# Backend' },
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  },
  'go-backend': {
    en: 'resume-go-backend.md',
    ru: 'resume-go-backend.ru.md',
    label: { en: 'Senior Go Backend', ru: 'Senior Go Backend' },
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>'
  },
  'projects': {
    en: 'projects.en.md',
    ru: 'projects.ru.md',
    label: { en: 'Projects', ru: 'Проекты' },
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>'
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

/* ===== State ===== */
const state = {
  currentResume: 'full-resume',
  currentLang: 'en',
  cache: {},
  sidebarOpen: false
};

/* ===== Constants ===== */
const RAW_BASE = 'https://raw.githubusercontent.com/itprodavets/itprodavets/main/';
const GITHUB_BASE = 'https://github.com/itprodavets/itprodavets/blob/main/';

/* ===== DOM Helpers ===== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ===== Markdown fetching with cache ===== */
async function fetchMarkdown(filename) {
  if (state.cache[filename]) return state.cache[filename];
  const response = await fetch(RAW_BASE + filename);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const text = await response.text();
  state.cache[filename] = text;
  return text;
}

/* ===== Map internal .md links to SPA hash ===== */
function mapMdFileToHash(href) {
  const file = href.replace(/^\//, '').replace(/^\.\//, '');
  for (const [key, resume] of Object.entries(RESUMES)) {
    for (const [lang, filename] of Object.entries(resume)) {
      if (lang !== 'label' && lang !== 'icon' && filename === file) {
        return `#/${key}/${lang}`;
      }
    }
  }
  return null;
}

/* ===== Escape HTML ===== */
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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
      html += `<div class="resume-contact">GitHub: <a href="https://github.com/itprodavets" target="_blank">github.com/itprodavets</a> · LinkedIn: <a href="https://linkedin.com/in/itprodavets" target="_blank">/in/itprodavets</a> · Telegram: <a href="https://t.me/itprodavets" target="_blank">@itprodavets</a></div>`;
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

    if (hrefStr.endsWith('.md')) {
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
    // Skip standalone link lines (like "[GitHub](...) · [LinkedIn](...)")
    if (item.tagName === 'P' && item.querySelectorAll('a').length >= 2 && item.textContent.includes('·')) {
      contactLine = item;
      continue;
    }
    if (item.tagName === 'P') {
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

    content.classList.remove('hidden');

    // Update GitHub link
    $('#githubLink').href = GITHUB_BASE + filename;

    window.scrollTo({ top: 0 });
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
  if (parts.length >= 2 && (parts[1] === 'en' || parts[1] === 'ru')) {
    state.currentLang = parts[1];
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
