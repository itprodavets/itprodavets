/* ===== PDF export via browser print engine =====
   Uses window.print() + the @media print block in style.css. The browser's
   native print engine paginates the visible DOM into a PDF — no canvas
   rasterization, native text rendering, native links.

   The PDF is the résumé BODY only — Projects and Skills are NOT appended, to
   keep the file recruiter-length. Those sections live on the web; the résumé's
   "Detailed projects → ..." links (SPA hashes like #/projects/ru?anchor=gz-dkh)
   are rewritten to absolute live-site URLs before printing so they stay
   clickable in the PDF, and restored on the `afterprint` event. */

(function () {
  const downloadBtn = document.getElementById('downloadPdf');
  if (!downloadBtn) return;

  let prePrintTitle = null;
  let preExpandedPanels = [];
  let rewrittenLinks = []; // [{ el, original }]

  function getCurrent() {
    const currentResume = (window.state && window.state.currentResume) || 'full-resume';
    const currentLang = (window.state && window.state.currentLang) || 'en';
    return { currentResume, currentLang };
  }

  // Rewrite the résumé's SPA hash links to Projects/Skills (#/projects/...,
  // #/skills/...) into absolute live-site URLs so they open the web page —
  // those sections aren't embedded in the PDF.
  function rewriteSpaLinks(root) {
    root.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;
      if (/^#\/(?:projects|skills)\//.test(href)) {
        rewrittenLinks.push({ el: a, original: href });
        a.setAttribute('href', location.origin + location.pathname + href);
      }
    });
  }

  function restoreLinks() {
    rewrittenLinks.forEach(({ el, original }) => el.setAttribute('href', original));
    rewrittenLinks = [];
  }

  function preparePrint() {
    const { currentResume, currentLang } = getCurrent();

    prePrintTitle = document.title;
    document.title = `${currentResume}-${currentLang}`;

    // Expand collapsed skill panels (matters on the /skills page) so they print.
    preExpandedPanels = Array.from(document.querySelectorAll('.skill-projects[hidden]'));
    preExpandedPanels.forEach(p => p.removeAttribute('hidden'));

    // No Projects/Skills appendix — the résumé PDF is body-only, kept
    // recruiter-length; those sections stay on the web and are linked from it.
    rewriteSpaLinks(document.body);
  }

  function restoreAfterPrint() {
    if (prePrintTitle !== null) {
      document.title = prePrintTitle;
      prePrintTitle = null;
    }
    preExpandedPanels.forEach(p => p.setAttribute('hidden', ''));
    preExpandedPanels = [];
    restoreLinks();
  }

  // afterprint fires once the print dialog closes (save or cancel) — safe
  // place to restore the document.
  window.addEventListener('afterprint', restoreAfterPrint);

  downloadBtn.addEventListener('click', () => {
    try {
      preparePrint();
    } catch (err) {
      console.error('PDF prepare failed:', err);
      restoreAfterPrint();
      return;
    }
    // Defer print() one task so DOM changes are committed to layout first.
    setTimeout(() => { window.print(); }, 0);
  });
})();
