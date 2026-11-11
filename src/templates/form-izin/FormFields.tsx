import React from 'react';
import { FormIzinData } from '../../types/letter';
import { User, Calendar, ShieldCheck, UserCheck } from 'lucide-react';
import { SignatureUpload } from '../../components/SignatureUpload';

interface FormFieldsProps {
  data: FormIzinData;
  onChange: (updated: Partial<FormIzinData>) => void;
}

export const FormFields: React.FC<FormFieldsProps> = ({ data, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      onChange({ [name]: checked });
    } else {
      onChange({ [name]: value });
    }
  };

  const units = ['Manajemen', 'Asrama', 'SMP', 'SMK', 'General Affair', 'Pondok Tahfidz', 'Lainnya'];
  const reasons = ['Sakit', 'Datang Terlambat', 'Pulang Cepat', 'WFH', 'Lainnya'] as const;

  return (
    <div className="space-y-5">
      {/* 1. Data Diri Pegawai */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <User className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-slate-900 text-sm">Data Pegawai IDN</h3>
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
            <label className="block text-xs font-medium text-slate-600 mb-1">NIP (Nomor Induk Pegawai)</label>
            <input
              type="text"
              name="nip"
              value={data.nip}
              onChange={handleChange}
              placeholder="Isi '-' jika belum ada"
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
              placeholder="Contoh: Guru, Musyrif, Staff"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-slate-600 mb-1">Mata Pelajaran / Bidang Tugas</label>
            <input
              type="text"
              name="mapel"
              value={data.mapel}
              onChange={handleChange}
              placeholder="Contoh: RPL, DMM, TKJ, Tahfidz, Bahasa Arab"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-slate-600 mb-1">Unit Kerja IDN</label>
            <select
              name="unitKerja"
              value={data.unitKerja}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              {units.map((u) => (
                <option key={u} value={u}>{u}</option>
              ))}
            </select>
          </div>

          {data.unitKerja === 'Lainnya' && (
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-600 mb-1">Sebutkan Unit Kerja Lainnya</label>
              <input
                type="text"
                name="unitKerjaLainnya"
                value={data.unitKerjaLainnya || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}
        </div>
      </div>

      {/* 2. Detail Izin & Alasan */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <Calendar className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-slate-900 text-sm">Rincian Waktu & Alasan Izin</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Lama Izin</label>
            <input
              type="text"
              name="lamaIzin"
              value={data.lamaIzin}
              onChange={handleChange}
              placeholder="Contoh: 1 hari"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Mulai Tanggal</label>
            <input
              type="text"
              name="mulaiIzin"
              value={data.mulaiIzin}
              onChange={handleChange}
              placeholder="Contoh: 22 Oktober 2026"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Masuk Kembali Tgl</label>
            <input
              type="text"
              name="masukKembaliTgl"
              value={data.masukKembaliTgl}
              onChange={handleChange}
              placeholder="Contoh: 23 Oktober 2026"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Jenis / Alasan Izin</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {reasons.map((r) => (
              <label
                key={r}
                className={`flex items-center gap-2 p-2 rounded-lg border text-xs cursor-pointer transition-all ${
                  data.alasanIzin === r
                    ? 'border-indigo-600 bg-indigo-50/60 font-semibold text-indigo-900'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="alasanIzin"
                  value={r}
                  checked={data.alasanIzin === r}
                  onChange={handleChange}
                  className="text-indigo-600 focus:ring-indigo-500"
                />
                <span>{r}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Keterangan Izin Secara Detail</label>
          <textarea
            name="keteranganIzin"
            rows={3}
            value={data.keteranganIzin}
            onChange={handleChange}
            placeholder="Tuliskan keterangan detail keperluan izin..."
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Status Izin (Ketentuan HRD)</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              'Tidak Memotong Tunjangan Kehadiran',
              'Memotong Tunjangan Kehadiran'
            ].map((status) => (
              <label
                key={status}
                className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs cursor-pointer ${
                  data.statusIzinHRD === status
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-semibold'
                    : 'border-slate-200 text-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="statusIzinHRD"
                  value={status}
                  checked={data.statusIzinHRD === status}
                  onChange={handleChange}
                />
                <span>{status}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Pengganti Tugas Selama Izin */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-indigo-600" />
            <h3 className="font-semibold text-slate-900 text-sm">Pengganti Tugas (Badal)</h3>
          </div>
          <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-600">
            <input
              type="checkbox"
              name="adaPengganti"
              checked={data.adaPengganti}
              onChange={handleChange}
              className="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4"
            />
            <span>Ada Pengganti Tugas</span>
          </label>
        </div>

        {data.adaPengganti && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-600 mb-1">Nama Pengganti</label>
              <input
                type="text"
                name="penggantiNama"
                value={data.penggantiNama}
                onChange={handleChange}
                placeholder="Contoh: Mr Sanusi & Mr Aldy"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Jabatan Pengganti</label>
              <input
                type="text"
                name="penggantiJabatan"
                value={data.penggantiJabatan}
                onChange={handleChange}
                placeholder="Contoh: Guru"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Unit Kerja Pengganti</label>
              <input
                type="text"
                name="penggantiUnitKerja"
                value={data.penggantiUnitKerja}
                onChange={handleChange}
                placeholder="Contoh: SMK IDN"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        )}
      </div>

      {/* 4. Persetujuan Atasan Langsung & TTD */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <ShieldCheck className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-slate-900 text-sm">Pengesahan & Tanda Tangan</h3>
        </div>

        {/* Upload TTD Pemohon */}
        <SignatureUpload
          label="Tanda Tangan Pemohon (Opsional)"
          value={data.ttdPemohonImage}
          onChange={(img) => onChange({ ttdPemohonImage: img })}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Nama Atasan Langsung</label>
            <input
              type="text"
              name="namaAtasan"
              value={data.namaAtasan}
              onChange={handleChange}
              placeholder="Contoh: Beny Fitriyanto, S.S."
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Jabatan Atasan</label>
            <input
              type="text"
              name="jabatanAtasan"
              value={data.jabatanAtasan}
              onChange={handleChange}
              placeholder="Contoh: Kepala Sekolah SMK IDN"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Tanggal Diajukan Pemohon</label>
            <input
              type="text"
              name="tanggalPengajuan"
              value={data.tanggalPengajuan}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Tanggal Persetujuan Atasan</label>
            <input
              type="text"
              name="tanggalPersetujuanAtasan"
              value={data.tanggalPersetujuanAtasan}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
