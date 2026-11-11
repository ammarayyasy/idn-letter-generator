import React from 'react';
import { FormLemburData } from '../../types/letter';
import { Clock, Briefcase, CheckSquare, Users } from 'lucide-react';
import { SignatureUpload } from '../../components/SignatureUpload';

interface FormFieldsProps {
  data: FormLemburData;
  onChange: (updated: Partial<FormLemburData>) => void;
}

export const FormFields: React.FC<FormFieldsProps> = ({ data, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div className="space-y-5">
      {/* 1. Data Pemohon Lembur */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <Briefcase className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-slate-900 text-sm">Data Pemohon Lembur</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-slate-600 mb-1">Nama Lengkap & Gelar</label>
            <input
              type="text"
              name="namaLengkap"
              value={data.namaLengkap}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Jabatan</label>
            <input
              type="text"
              name="jabatan"
              value={data.jabatan}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Departemen / Unit Kerja</label>
            <input
              type="text"
              name="departemenUnit"
              value={data.departemenUnit}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* 2. Rincian Kebutuhan Lembur */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <Clock className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-slate-900 text-sm">Rincian Kebutuhan Lembur</h3>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Nama Kegiatan Lembur</label>
            <input
              type="text"
              name="kegiatan"
              value={data.kegiatan}
              onChange={handleChange}
              placeholder="Contoh: Student Orientation: Life Proposal Presentation"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Area / Lokasi Lembur</label>
            <input
              type="text"
              name="areaLokasi"
              value={data.areaLokasi}
              onChange={handleChange}
              placeholder="Contoh: Gedung SMK IDN Boarding School Bogor"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Tanggal Lembur</label>
              <input
                type="text"
                name="tanggalLembur"
                value={data.tanggalLembur}
                onChange={handleChange}
                placeholder="Contoh: 8 Agustus 2026"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Jam (Mulai - Selesai)</label>
              <div className="flex items-center gap-1">
                <input
                  type="text"
                  name="jamMulai"
                  value={data.jamMulai}
                  onChange={handleChange}
                  placeholder="07.00"
                  className="w-1/2 px-2 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <span>-</span>
                <input
                  type="text"
                  name="jamSelesai"
                  value={data.jamSelesai}
                  onChange={handleChange}
                  placeholder="15.00"
                  className="w-1/2 px-2 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Total Durasi Jam</label>
              <input
                type="text"
                name="totalJam"
                value={data.totalJam}
                onChange={handleChange}
                placeholder="Contoh: 8 Jam"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Urgensi Pekerjaan</label>
            <textarea
              name="urgensiPekerjaan"
              rows={2}
              value={data.urgensiPekerjaan}
              onChange={handleChange}
              placeholder="Contoh: Mendampingi orang tua siswa presentasi..."
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Jumlah Tenaga Kerja</label>
              <input
                type="text"
                name="jumlahTenagaKerja"
                value={data.jumlahTenagaKerja}
                onChange={handleChange}
                placeholder="Contoh: 1 Orang"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Nama-nama Anggota Lembur</label>
              <input
                type="text"
                name="namaTenagaKerja"
                value={data.namaTenagaKerja}
                onChange={handleChange}
                placeholder="Contoh: Muhammad Ammar Ayyasy"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. Disposisi HRD & Realisasi */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <CheckSquare className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-slate-900 text-sm">Status Persetujuan HRD & Realisasi</h3>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Status Disetujui HRD</label>
          <div className="grid grid-cols-3 gap-2">
            {(['Disetujui', 'Ditangguhkan', 'Ditolak'] as const).map((s) => (
              <label
                key={s}
                className={`flex items-center justify-center gap-1.5 p-2 rounded-lg border text-xs cursor-pointer font-medium ${
                  data.statusHRD === s
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                    : 'border-slate-200 text-slate-600'
                }`}
              >
                <input
                  type="radio"
                  name="statusHRD"
                  value={s}
                  checked={data.statusHRD === s}
                  onChange={handleChange}
                />
                <span>{s}</span>
              </label>
            ))}
          </div>
        </div>

        {data.statusHRD !== 'Disetujui' && (
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">
              {data.statusHRD === 'Ditangguhkan' ? 'Ditangguhkan ke Tanggal' : 'Alasan Penolakan'}
            </label>
            <input
              type="text"
              name="catatanStatusHRD"
              value={data.catatanStatusHRD || ''}
              onChange={handleChange}
              placeholder="Tuliskan tanggal penangguhan atau alasan penolakan..."
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        )}

        <div className="pt-2 border-t border-slate-100 space-y-3">
          <h4 className="text-xs font-bold text-slate-700 uppercase">Rincian Realisasi Lembur</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-600 mb-1">Uraian Realisasi Lembur</label>
              <input
                type="text"
                name="realisasiLembur"
                value={data.realisasiLembur}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Tanggal Realisasi</label>
              <input
                type="text"
                name="realisasiTanggal"
                value={data.realisasiTanggal}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Durasi Jam Realisasi</label>
              <input
                type="text"
                name="realisasiJam"
                value={data.realisasiJam}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Tanda Tangan 3 Pihak */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <Users className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-slate-900 text-sm">Pengesahan & Tanda Tangan (3 Pihak)</h3>
        </div>

        {/* Upload TTD Pemohon */}
        <SignatureUpload
          label="Tanda Tangan Pemohon (Opsional)"
          value={data.ttdPemohonImage}
          onChange={(img) => onChange({ ttdPemohonImage: img })}
        />

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Kota Surat</label>
            <input
              type="text"
              name="kotaSurat"
              value={data.kotaSurat}
              onChange={handleChange}
              placeholder="Jonggol / Pamijahan"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Tanggal Surat</label>
            <input
              type="text"
              name="tanggalSurat"
              value={data.tanggalSurat}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="space-y-3 pt-2">
          {/* Diajukan Oleh */}
          <div className="grid grid-cols-2 gap-3 p-2.5 bg-slate-50 rounded-lg border border-slate-100">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Diajukan Oleh (Jabatan)</label>
              <input
                type="text"
                name="diajukanOlehJabatan"
                value={data.diajukanOlehJabatan}
                onChange={handleChange}
                className="w-full px-2 py-1.5 text-xs border border-slate-300 rounded focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Nama Pemohon</label>
              <input
                type="text"
                name="diajukanOlehNama"
                value={data.diajukanOlehNama}
                onChange={handleChange}
                className="w-full px-2 py-1.5 text-xs border border-slate-300 rounded focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Mengetahui HRD */}
          <div className="grid grid-cols-2 gap-3 p-2.5 bg-slate-50 rounded-lg border border-slate-100">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Mengetahui (HRD)</label>
              <input
                type="text"
                name="mengetahuiHRDJabatan"
                value={data.mengetahuiHRDJabatan}
                onChange={handleChange}
                className="w-full px-2 py-1.5 text-xs border border-slate-300 rounded focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Nama HRD</label>
              <input
                type="text"
                name="mengetahuiHRDNama"
                value={data.mengetahuiHRDNama}
                onChange={handleChange}
                className="w-full px-2 py-1.5 text-xs border border-slate-300 rounded focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Disetujui Direktur */}
          <div className="grid grid-cols-2 gap-3 p-2.5 bg-slate-50 rounded-lg border border-slate-100">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Disetujui (Direktur)</label>
              <input
                type="text"
                name="disetujuiDirekturJabatan"
                value={data.disetujuiDirekturJabatan}
                onChange={handleChange}
                className="w-full px-2 py-1.5 text-xs border border-slate-300 rounded focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Nama Direktur</label>
              <input
                type="text"
                name="disetujuiDirekturNama"
                value={data.disetujuiDirekturNama}
                onChange={handleChange}
                className="w-full px-2 py-1.5 text-xs border border-slate-300 rounded focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
