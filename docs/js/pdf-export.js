/* ===== PDF export via browser print engine =====
   Uses window.print() + the @media print block in style.css. The browser's
   native print engine paginates the visible DOM into a PDF — no canvas
   rasterization, native text rendering, native links.

   For *job-resume* views (full-resume / fwd-ai-engineer / csharp-backend /
   lead-csharp-backend / go-backend) we also append the full Projects + Skills
   sections at the
   end of the printed document so the resulting PDF is self-contained — a
   recruiter who opens the file offline still sees every project detail and
   the skill matrix.

   Internal "Подробнее → ..." links in the resume use SPA-style hashes
   (`#/projects/ru?anchor=gz-dkh`). Before printing we rewrite those to
   plain anchors (`#gz-dkh`) so clicks inside the PDF jump to the matching
   `<a id="gz-dkh">` marker in the appended Projects section. Originals
   are restored on the `afterprint` event. */

(function () {
  const downloadBtn = document.getElementById('downloadPdf');
  if (!downloadBtn) return;

  const JOB_RESUMES = ['full-resume', 'fwd-ai-engineer', 'csharp-backend', 'lead-csharp-backend', 'go-backend'];

  let prePrintTitle = null;
  let preExpandedPanels = [];
  let appendixEl = null;
  let rewrittenLinks = []; // [{ el, original }]

  function getCurrent() {
    const currentResume = (window.state && window.state.currentResume) || 'full-resume';
    const currentLang = (window.state && window.state.currentLang) || 'en';
    return { currentResume, currentLang };
  }

  // Walk every <a href> in the resume + appendix, rewrite SPA hash links
  // (#/projects/<lang>?anchor=<id>, #/skills/<lang>?anchor=<id>) to plain
  // (#<id>) anchors so they work as in-PDF jumps.
  function rewriteSpaLinks(root) {
    root.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;
      // #/<key>/<lang>?anchor=<id>
      const anchored = href.match(/^#\/(?:projects|skills)\/[a-z]+\?anchor=([^&]+)$/);
      if (anchored) {
        rewrittenLinks.push({ el: a, original: href });
        a.setAttribute('href', '#' + decodeURIComponent(anchored[1]));
        return;
      }
      // #/<key>/<lang> — link to whole section, jump to its appendix anchor
      const sectionLink = href.match(/^#\/(projects|skills)\/[a-z]+$/);
      if (sectionLink) {
        rewrittenLinks.push({ el: a, original: href });
        a.setAttribute('href', '#pdf-appendix-' + sectionLink[1]);
        return;
      }
    });
  }

  function restoreLinks() {
    rewrittenLinks.forEach(({ el, original }) => el.setAttribute('href', original));
    rewrittenLinks = [];
  }

  async function buildAppendix(currentLang) {
    if (typeof window.renderSection !== 'function') return null;

    const appendix = document.createElement('div');
    appendix.id = 'pdf-appendix';

    const labels = currentLang === 'ru'
      ? { projects: 'Проекты — детали', skills: 'Навыки — детали' }
      : { projects: 'Projects — details', skills: 'Skills — details' };

    // Projects
    const projects = await window.renderSection('projects', currentLang);
    if (projects) {
      const section = document.createElement('section');
      section.className = 'pdf-appendix-section';
      // Anchor target for in-PDF "jump to projects" links
      const anchor = document.createElement('a');
      anchor.id = 'pdf-appendix-projects';
      section.appendChild(anchor);
      const h2 = document.createElement('h2');
      h2.textContent = labels.projects;
      section.appendChild(h2);
      while (projects.firstChild) section.appendChild(projects.firstChild);
      appendix.appendChild(section);
    }

    // Skills
    const skills = await window.renderSection('skills', currentLang);
    if (skills) {
      const section = document.createElement('section');
      section.className = 'pdf-appendix-section';
      const anchor = document.createElement('a');
      anchor.id = 'pdf-appendix-skills';
      section.appendChild(anchor);
      const h2 = document.createElement('h2');
      h2.textContent = labels.skills;
      section.appendChild(h2);
      while (skills.firstChild) section.appendChild(skills.firstChild);
      appendix.appendChild(section);
    }

    return appendix;
  }

  async function preparePrint() {
    const { currentResume, currentLang } = getCurrent();

    prePrintTitle = document.title;
    document.title = `${currentResume}-${currentLang}`;

    // Skills page: skill-projects panels start collapsed (hidden attribute).
    // The @media print stylesheet shows them, but clear the attribute now so
    // the print preview captures them visible (some engines snapshot DOM
    // state for print rather than re-running CSS).
    preExpandedPanels = Array.from(document.querySelectorAll('.skill-projects[hidden]'));
    preExpandedPanels.forEach(p => p.removeAttribute('hidden'));

    // Append Projects + Skills only for job-resume views — on /projects and
    // /skills the relevant content is already the primary view.
    if (JOB_RESUMES.includes(currentResume)) {
      const main = document.getElementById('resumeContent');
      if (main) {
        appendixEl = await buildAppendix(currentLang);
        if (appendixEl) {
          main.appendChild(appendixEl);
          // Expand any newly-appended skill-projects panels too
          appendixEl.querySelectorAll('.skill-projects[hidden]').forEach(p => {
            preExpandedPanels.push(p);
            p.removeAttribute('hidden');
          });
        }
      }
    }

    // Rewrite SPA hash links to plain in-PDF anchors (covers both the main
    // resume content and the freshly-appended appendix).
    rewriteSpaLinks(document.body);
  }

  function restoreAfterPrint() {
    if (prePrintTitle !== null) {
      document.title = prePrintTitle;
      prePrintTitle = null;
    }
    preExpandedPanels.forEach(p => p.setAttribute('hidden', ''));
    preExpandedPanels = [];
    if (appendixEl && appendixEl.parentNode) {
      appendixEl.parentNode.removeChild(appendixEl);
      appendixEl = null;
    }
    restoreLinks();
  }

  // afterprint fires once the print dialog closes (save or cancel) — safe
  // place to restore the document.
  window.addEventListener('afterprint', restoreAfterPrint);

  downloadBtn.addEventListener('click', async () => {
    try {
      await preparePrint();
    } catch (err) {
      console.error('PDF prepare failed:', err);
      restoreAfterPrint();
      return;
    }
    // Defer print() one task so the appended DOM is committed to layout
    // before the browser captures the print preview.
    setTimeout(() => { window.print(); }, 0);
  });
})();
