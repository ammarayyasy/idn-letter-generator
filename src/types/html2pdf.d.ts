declare module 'html2pdf.js' {
  export interface Html2PdfOptions {
    margin?: number | number[];
    filename?: string;
    image?: { type: 'jpeg' | 'png' | 'webp' | string; quality: number };
    html2canvas?: {
      scale?: number;
      useCORS?: boolean;
      logging?: boolean;
      scrollY?: number;
      scrollX?: number;
      letterRendering?: boolean;
    };
    jsPDF?: {
      unit?: string;
      format?: string | number[];
      orientation?: 'portrait' | 'landscape';
    };
  }

  export interface Html2PdfInstance {
    from(element: HTMLElement | string): Html2PdfInstance;
    set(opt: Html2PdfOptions): Html2PdfInstance;
    save(filename?: string): Promise<void>;
    outputPdf(type?: string): Promise<any>;
  }

  function html2pdf(): Html2PdfInstance;
  function html2pdf(element: HTMLElement, opt?: Html2PdfOptions): Promise<void>;

  export default html2pdf;
}
