/* ===== PDF export via browser print engine =====
   Previously this script used html2pdf (canvas-rasterize → image-slice into PDF).
   That approach rasterized everything to JPEG, sliced the resulting canvas on
   a fixed pixel grid, and had no real notion of text flow — so glyphs got
   overlapped (letterRendering kerning bugs), pages cut through paragraphs
   mid-line, and aggressive "avoid-split" rules left huge blank gaps at page
   bottoms.

   The browser's own print engine handles pagination natively: text stays
   selectable, links stay native, fonts render via the real font rasterizer,
   and `page-break-*` / `orphans` / `widows` CSS rules are honored properly.
   All the heavy lifting moved into the `@media print` block in style.css.

   This script's only job: prep the page for printing (expand collapsed
   panels, set a sensible filename via document.title) and trigger the print
   dialog. The user picks "Save as PDF" as the destination. */

(function () {
  const downloadBtn = document.getElementById('downloadPdf');
  if (!downloadBtn) return;

  let prePrintTitle = null;
  let preExpandedPanels = [];

  function preparePrint() {
    // Pick a filename — browsers use document.title as the default "Save as PDF"
    // filename, so set it to "<resume-slug>-<lang>" for the duration of the dialog.
    const currentResume = (window.state && window.state.currentResume) || 'resume';
    const currentLang = (window.state && window.state.currentLang) || 'en';
    prePrintTitle = document.title;
    document.title = `${currentResume}-${currentLang}`;

    // Skills page: skill-projects panels start collapsed (hidden attribute).
    // The @media print stylesheet shows them, but we also clear the
    // aria-expanded state so screen readers see the open state if reading
    // the print preview. Track which ones we toggled so we can restore.
    preExpandedPanels = Array.from(document.querySelectorAll('.skill-projects[hidden]'));
    preExpandedPanels.forEach(p => p.removeAttribute('hidden'));
  }

  function restoreAfterPrint() {
    if (prePrintTitle !== null) {
      document.title = prePrintTitle;
      prePrintTitle = null;
    }
    preExpandedPanels.forEach(p => p.setAttribute('hidden', ''));
    preExpandedPanels = [];
  }

  // `afterprint` fires once the print dialog closes, regardless of save/cancel.
  // It's the safe place to restore document state.
  window.addEventListener('afterprint', restoreAfterPrint);

  downloadBtn.addEventListener('click', () => {
    preparePrint();
    // Defer print() one task so the title change + panel expansion are
    // committed to layout before the browser captures the print preview.
    setTimeout(() => { window.print(); }, 0);
  });
})();
