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

    // Clone content and inject compact styles for PDF rendering
    const clone = content.cloneNode(true);
    clone.style.maxWidth = '800px';
    clone.style.padding = '0';
    clone.style.fontSize = '8.5pt';
    clone.style.lineHeight = '1.3';

    // Inject a <style> block so all child elements render compactly
    const style = document.createElement('style');
    style.textContent = `
      h1, .resume-name { font-size: 16pt !important; margin-bottom: 1px !important; }
      .resume-role { font-size: 9pt !important; margin-bottom: 3px !important; }
      .resume-contact { font-size: 7.5pt !important; }
      hr.header-separator { margin: 6px 0 3px 0 !important; }
      h2 { font-size: 10pt !important; margin-top: 10px !important; margin-bottom: 4px !important; padding-bottom: 2px !important; }
      h3, .job-header { font-size: 9pt !important; margin-top: 8px !important; margin-bottom: 2px !important; }
      .job-title { font-size: 9pt !important; }
      .job-dates { font-size: 8pt !important; }
      p { font-size: 8.5pt !important; margin-bottom: 3px !important; line-height: 1.3 !important; }
      ul, ol { margin-bottom: 3px !important; padding-left: 14px !important; }
      li { font-size: 8.5pt !important; margin-bottom: 1px !important; line-height: 1.3 !important; }
      hr { margin: 8px 0 !important; }
      strong { font-size: inherit !important; }
    `;
    clone.prepend(style);

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
