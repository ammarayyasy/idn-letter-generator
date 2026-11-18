import html2pdf from 'html2pdf.js';

export async function exportElementToPdf(elementId: string, filename: string): Promise<void> {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element with id "${elementId}" not found`);
  }

  // Cari zoom wrapper (elemen dengan transform scale)
  const zoomWrapper = element.closest('.origin-top') as HTMLElement | null;
  const originalTransform = zoomWrapper ? zoomWrapper.style.transform : '';

  // Cari scroll container
  const scrollContainer = element.closest('.overflow-y-auto') as HTMLElement | null;
  const originalScrollTop = scrollContainer ? scrollContainer.scrollTop : 0;

  // Cari bayangan luar
  const shadowWrapper = element.parentElement as HTMLElement | null;
  const originalShadow = shadowWrapper ? shadowWrapper.style.boxShadow : '';

  // Reset transform, scroll, dan shadow sementara agar screenshot html2canvas 100% presisi A4 tanpa margin aneh
  if (zoomWrapper) {
    zoomWrapper.style.transform = 'none';
  }
  if (scrollContainer) {
    scrollContainer.scrollTop = 0;
  }
  if (shadowWrapper) {
    shadowWrapper.style.boxShadow = 'none';
  }

  // Beri waktu 100ms agar browser melakukan repaint pada skala asli 1:1
  await new Promise((resolve) => setTimeout(resolve, 100));

  const opt = {
    margin: 0,
    filename: filename.endsWith('.pdf') ? filename : `${filename}.pdf`,
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: {
      scale: 2, // Kualitas tajam 2x retina
      useCORS: true,
      logging: false,
      scrollY: 0,
      scrollX: 0,
      backgroundColor: '#ffffff'
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait' as const
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };

  try {
    // Tangkap elemen yang ada di layar langsung (tanpa off-screen -99999px yang menyebabkan blank putih)
    await html2pdf().set(opt).from(element).save();
  } finally {
    // Kembalikan tampilan zoom, scroll, dan shadow ke semula
    if (zoomWrapper) {
      zoomWrapper.style.transform = originalTransform;
    }
    if (scrollContainer) {
      scrollContainer.scrollTop = originalScrollTop;
    }
    if (shadowWrapper) {
      shadowWrapper.style.boxShadow = originalShadow;
    }
  }
}
