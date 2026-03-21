/* ===== PDF Export via html2pdf.js ===== */

function getFilename() {
  const resume = RESUMES[state.currentResume];
  if (!resume) return 'resume.pdf';
  const mdFile = resume[state.currentLang];
  return mdFile.replace('.md', '.pdf');
}

async function downloadPDF() {
  const btn = document.getElementById('downloadPdf');
  const content = document.getElementById('resumeContent');

  if (!content || !content.innerHTML.trim()) return;

  // Disable button during generation
  btn.classList.add('loading');
  const originalHTML = btn.innerHTML;
  const spinnerSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 0.8s linear infinite"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>';
  const loadingText = state.currentLang === 'ru' ? 'Генерация...' : 'Generating...';
  btn.innerHTML = `${spinnerSvg}<span>${loadingText}</span>`;

  try {
    const options = {
      margin: [8, 8, 8, 8],
      filename: getFilename(),
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      },
      pagebreak: {
        mode: ['avoid-all', 'css', 'legacy']
      }
    };

    // Clone content to avoid modifying the displayed version
    const clone = content.cloneNode(true);
    clone.style.maxWidth = '800px';
    clone.style.padding = '0';
    clone.style.fontSize = '8.5pt';
    clone.style.lineHeight = '1.35';

    await html2pdf().set(options).from(clone).save();
  } catch (err) {
    console.error('PDF generation failed:', err);
  } finally {
    btn.innerHTML = originalHTML;
    btn.classList.remove('loading');
  }
}

/* ===== Bind download button ===== */
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('downloadPdf');
  if (btn) {
    btn.addEventListener('click', downloadPDF);
  }
});
