import React, { useState } from 'react';
import { TemplateId, FormIzinData, FormLemburData, FormKasbonData } from '../types/letter';
import { exportElementToPdf } from '../utils/exportPdf';

// Template 1: Form Izin
import { initialFormIzinData } from '../templates/form-izin/schema';
import { FormFields as FormIzinFields } from '../templates/form-izin/FormFields';
import { DocumentPreview as FormIzinPreview } from '../templates/form-izin/DocumentPreview';

// Template 2: Form Lembur
import { initialFormLemburData } from '../templates/form-lembur/schema';
import { FormFields as FormLemburFields } from '../templates/form-lembur/FormFields';
import { DocumentPreview as FormLemburPreview } from '../templates/form-lembur/DocumentPreview';

// Template 3: Form Kasbon
import { initialFormKasbonData } from '../templates/form-kasbon/schema';
import { FormFields as FormKasbonFields } from '../templates/form-kasbon/FormFields';
import { DocumentPreview as FormKasbonPreview } from '../templates/form-kasbon/DocumentPreview';

import { 
  ArrowLeft, 
  Printer, 
  Download,
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Eye, 
  Edit3,
  Loader2,
  FileCheck
} from 'lucide-react';
import logoIdn from '../assets/images/logo-idn.png';

interface LetterEditorProps {
  templateId: TemplateId;
  onBack: () => void;
}

export const LetterEditor: React.FC<LetterEditorProps> = ({ templateId, onBack }) => {
  // Independent States for the 3 templates
  const [izinData, setIzinData] = useState<FormIzinData>(initialFormIzinData);
  const [lemburData, setLemburData] = useState<FormLemburData>(initialFormLemburData);
  const [kasbonData, setKasbonData] = useState<FormKasbonData>(initialFormKasbonData);

  const [zoom, setZoom] = useState<number>(85); // 85% default zoom for comfortable fit
  const [activeMobileTab, setActiveMobileTab] = useState<'form' | 'preview'>('form');
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const getTemplateMeta = () => {
    switch (templateId) {
      case 'form-izin':
        return {
          title: 'Form Izin Meninggalkan Pekerjaan',
          badge: 'Template .doc IDN',
          slug: 'Form-Izin-IDN',
          applicantName: izinData.namaLengkap
        };
      case 'form-lembur':
        return {
          title: 'Formulir Pengajuan Lembur',
          badge: 'Template .docx IDN',
          slug: 'Form-Lembur-IDN',
          applicantName: lemburData.namaLengkap
        };
      case 'form-kasbon':
        return {
          title: 'Formulir Pengajuan Pinjaman Pegawai (Kasbon)',
          badge: 'Template .docx IDN',
          slug: 'Form-Kasbon-IDN',
          applicantName: kasbonData.namaPegawai
        };
    }
  };

  const meta = getTemplateMeta();

  const handleReset = () => {
    if (window.confirm('Kembalikan data form ke data template awal?')) {
      if (templateId === 'form-izin') setIzinData(initialFormIzinData);
      if (templateId === 'form-lembur') setLemburData(initialFormLemburData);
      if (templateId === 'form-kasbon') setKasbonData(initialFormKasbonData);
    }
  };

  // Direct PDF Download via html2pdf.js (Container only)
  const handleDownloadPDF = async () => {
    setIsExporting(true);
    try {
      const cleanName = meta.applicantName.replace(/[^a-zA-Z0-9]/g, '_').slice(0, 20);
      const filename = `${meta.slug}_${cleanName || 'dokumen'}.pdf`;
      await exportElementToPdf('letter-printable-container', filename);
    } catch (error) {
      console.error('Gagal mengekspor PDF:', error);
      alert('Terjadi kesalahan saat mengunduh PDF. Anda dapat menggunakan tombol Cetak sebagai alternatif.');
    } finally {
      setIsExporting(false);
    }
  };

  // Direct Printer / Print Dialog
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Top Navbar Toolbar */}
      <header className="no-print bg-white border-b border-slate-200 sticky top-0 z-40 px-4 sm:px-6 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2 rounded-lg hover:bg-slate-100 text-slate-700 transition-colors flex items-center gap-1.5 text-xs sm:text-sm font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Dashboard</span>
            </button>
            <div className="h-5 w-px bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <img src={logoIdn} alt="IDN" className="w-7 h-7 object-contain hidden sm:block" />
              <div>
                <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                  {meta.title}
                </h2>
                <p className="text-[11px] text-slate-500 hidden sm:block">
                  IDN Boarding School • Split-Screen Live Preview & PDF Downloader
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls (Screen only) */}
            <div className="hidden lg:flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200 text-slate-600 text-xs">
              <button
                onClick={() => setZoom((prev) => Math.max(50, prev - 10))}
                className="p-1 hover:bg-white rounded transition-colors"
                title="Perkecil"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="px-2 font-mono font-medium">{zoom}%</span>
              <button
                onClick={() => setZoom((prev) => Math.min(130, prev + 10))}
                className="p-1 hover:bg-white rounded transition-colors"
                title="Perbesar"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors"
              title="Reset Form"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden md:inline">Reset</span>
            </button>

            {/* Print Button (Secondary) */}
            <button
              onClick={handlePrint}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all border border-slate-300"
              title="Cetak langsung ke mesin printer"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Cetak</span>
            </button>

            {/* Direct PDF Download Button (Primary - html2pdf.js) */}
            <button
              onClick={handleDownloadPDF}
              disabled={isExporting}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-sm shadow-indigo-200"
              title="Download dokumen container ini sebagai file PDF langsung"
            >
              {isExporting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Memproses PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Switcher */}
        <div className="flex md:hidden mt-3 border-t border-slate-100 pt-2 gap-2">
          <button
            onClick={() => setActiveMobileTab('form')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 ${
              activeMobileTab === 'form'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Form Input</span>
          </button>
          <button
            onClick={() => setActiveMobileTab('preview')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 ${
              activeMobileTab === 'preview'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Live Hasil Surat</span>
          </button>
        </div>
      </header>

      {/* Main Split Screen Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Column: Form Editor */}
        <div
          className={`no-print md:col-span-5 lg:col-span-5 h-[calc(100vh-120px)] overflow-y-auto pr-1 pb-16 custom-scrollbar ${
            activeMobileTab === 'form' ? 'block' : 'hidden md:block'
          }`}
        >
          <div className="mb-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-indigo-600" />
              <span>Formulir Pengisian Data</span>
            </h3>
            <p className="text-[11px] text-slate-500">
              Isi data di bawah. Hasil dokumen di sebelah kanan ter-update langsung.
            </p>
          </div>

          {templateId === 'form-izin' && (
            <FormIzinFields
              data={izinData}
              onChange={(updated) => setIzinData((prev) => ({ ...prev, ...updated }))}
            />
          )}

          {templateId === 'form-lembur' && (
            <FormLemburFields
              data={lemburData}
              onChange={(updated) => setLemburData((prev) => ({ ...prev, ...updated }))}
            />
          )}

          {templateId === 'form-kasbon' && (
            <FormKasbonFields
              data={kasbonData}
              onChange={(updated) => setKasbonData((prev) => ({ ...prev, ...updated }))}
            />
          )}
        </div>

        {/* Right Column: Dedicated Document Container (with Dark PDF Canvas Background & Inner Scroll) */}
        <div
          className={`print-only-container md:col-span-7 lg:col-span-7 h-[calc(100vh-120px)] flex flex-col rounded-2xl overflow-hidden border border-slate-300 shadow-md ${
            activeMobileTab === 'preview' ? 'flex' : 'hidden md:flex'
          }`}
        >
          {/* Container Header */}
          <div className="no-print bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between border-b border-slate-800 text-xs shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold tracking-wide text-slate-200">
                Container Dokumen A4 (IDN Boarding School)
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Zoom display inside container header */}
              <div className="hidden sm:flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-slate-300">
                <button
                  onClick={() => setZoom((prev) => Math.max(50, prev - 10))}
                  className="p-1 hover:bg-slate-700 rounded transition-colors"
                  title="Perkecil"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="px-2 font-mono text-[11px] font-medium">{zoom}%</span>
                <button
                  onClick={() => setZoom((prev) => Math.min(130, prev + 10))}
                  className="p-1 hover:bg-slate-700 rounded transition-colors"
                  title="Perbesar"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>

              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-medium border border-emerald-500/30">
                Live Auto-update
              </span>
            </div>
          </div>

          {/* Dark Scrollable Canvas Workspace (PDF Viewer Canvas style) */}
          <div className="flex-1 bg-slate-800/95 overflow-y-auto overflow-x-hidden p-4 sm:p-8 flex justify-center custom-scrollbar">
            {/* Scalable Container for A4 Sheet */}
            <div
              className="origin-top transition-transform duration-150 ease-out"
              style={{
                transform: `scale(${zoom / 100})`,
                transformOrigin: 'top center'
              }}
            >
              {/* Printable Target Container captured by html2pdf */}
              <div id="letter-printable-container" className="shadow-2xl ring-1 ring-black/20 rounded-sm">
                {templateId === 'form-izin' && <FormIzinPreview data={izinData} />}
                {templateId === 'form-lembur' && <FormLemburPreview data={lemburData} />}
                {templateId === 'form-kasbon' && <FormKasbonPreview data={kasbonData} />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
