import React, { useState } from 'react';
import { LetterTemplateInfo, TemplateId } from '../types/letter';
import { 
  FileText, 
  Clock, 
  DollarSign, 
  Search, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Building,
  GraduationCap
} from 'lucide-react';
import logoIdn from '../assets/images/logo-idn.png';

interface DashboardProps {
  onSelectTemplate: (templateId: TemplateId) => void;
}

export const TEMPLATES_CATALOG: LetterTemplateInfo[] = [
  {
    id: 'form-izin',
    title: 'Form Permohonan Izin Meninggalkan Pekerjaan',
    category: 'Kepegawaian',
    description: 'Format resmi IDN Boarding School untuk izin sakit, datang terlambat, pulang cepat, WFH, dan penugasan badal pengganti.',
    badge: 'Template IDN Resmi',
    isAvailable: true,
    docFormat: '.doc'
  },
  {
    id: 'form-lembur',
    title: 'Formulir Pengajuan Lembur Karyawan & Guru',
    category: 'Operasional',
    description: 'Pengajuan kebutuhan lembur sekolah/unit IDN dengan urgensi, jam pelaksanaan, disposisi HRD, dan realisasi kerja.',
    badge: 'Template IDN Resmi',
    isAvailable: true,
    docFormat: '.docx'
  },
  {
    id: 'form-kasbon',
    title: 'Formulir Pengajuan Pinjaman Pegawai (Kasbon)',
    category: 'Keuangan',
    description: 'Pengajuan kasbon pegawai Yayasan IDN dengan pilihan skema pemotongan sekaligus atau cicilan gaji, serta verifikasi rekening BSI.',
    badge: 'Template IDN Resmi',
    isAvailable: true,
    docFormat: '.docx'
  }
];

export const Dashboard: React.FC<DashboardProps> = ({ onSelectTemplate }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Kepegawaian', 'Operasional', 'Keuangan'];

  const filteredTemplates = TEMPLATES_CATALOG.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
                          item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTemplateIcon = (id: TemplateId) => {
    switch (id) {
      case 'form-izin':
        return <FileText className="w-6 h-6 text-emerald-600" />;
      case 'form-lembur':
        return <Clock className="w-6 h-6 text-amber-600" />;
      case 'form-kasbon':
        return <DollarSign className="w-6 h-6 text-indigo-600" />;
      default:
        return <FileText className="w-6 h-6 text-slate-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 pb-16 font-sans">
      {/* Top Banner / Hero with IDN Theme */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                Sistem Internal IDN Boarding School
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Generator Dokumen & Surat Internal
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Platform resmi pembuatan formulir izin, lembur, dan kasbon pegawai IDN Boarding School dengan *live preview* A4 instan dan siap cetak ke PDF.
              </p>
            </div>

            {/* IDN Logo in Hero */}
            <div className="shrink-0 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 shadow-xl flex items-center justify-center">
              <img 
                src={logoIdn} 
                alt="Logo IDN Boarding School" 
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain filter drop-shadow" 
              />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-5 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Standar Format Resmi Yayasan & Sekolah IDN</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Live Preview Kertas A4 Otomatis</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Ekspor PDF Tajam (Vektor Siap Cetak)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Search & Category Filter */}
        <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/60 p-4 border border-slate-200 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari formulir IDN..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Catalog of Active IDN Templates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => {
            return (
              <div
                key={template.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-indigo-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-indigo-50 transition-colors">
                      {getTemplateIcon(template.id)}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold border border-slate-200">
                        {template.docFormat}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Aktif
                      </span>
                    </div>
                  </div>

                  <div className="text-[11px] font-bold text-indigo-600 tracking-wider uppercase mb-1.5">
                    {template.category}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 leading-snug">
                    {template.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {template.description}
                  </p>
                </div>

                <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 rounded-b-2xl">
                  <button
                    onClick={() => onSelectTemplate(template.id)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl font-medium text-xs sm:text-sm transition-colors shadow-sm"
                  >
                    <span>Buka Form & Buat Surat</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info IDN Units */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-700">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Unit Kerja IDN Boarding School
                </h4>
                <p className="text-xs text-slate-600">
                  SMK IDN Bogor • SMP IDN Bogor • IDN Pamijahan • Pondok Tahfidz • Asrama & Manajemen
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Building className="w-4 h-4" />
              <span>Internal Document System v1.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
