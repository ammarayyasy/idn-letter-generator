import React from 'react';
import { FormKasbonData } from '../../types/letter';
import { DollarSign, User, Users, Landmark } from 'lucide-react';
import { SignatureUpload } from '../../components/SignatureUpload';

interface FormFieldsProps {
  data: FormKasbonData;
  onChange: (updated: Partial<FormKasbonData>) => void;
}

export const FormFields: React.FC<FormFieldsProps> = ({ data, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div className="space-y-5">
      {/* 1. Data Pegawai Pemohon Kasbon */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <User className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-slate-900 text-sm">Data Pegawai Pemohon</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-slate-600 mb-1">Nama Yayasan / Lembaga</label>
            <input
              type="text"
              name="yayasan"
              value={data.yayasan}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-slate-600 mb-1">Nama Pegawai & Gelar</label>
            <input
              type="text"
              name="namaPegawai"
              value={data.namaPegawai}
              onChange={handleChange}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Unit Kerja IDN</label>
            <input
              type="text"
              name="unitKerja"
              value={data.unitKerja}
              onChange={handleChange}
              placeholder="Contoh: SMK IDN Boarding School Pamijahan"
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
              placeholder="Contoh: Guru IT RPL"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Penghasilan Bulanan</label>
            <input
              type="text"
              name="penghasilanBulanan"
              value={data.penghasilanBulanan}
              onChange={handleChange}
              placeholder="Contoh: Rp 4.200.000"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Nominal Kasbon yang Diajukan</label>
            <input
              type="text"
              name="nominalKasbon"
              value={data.nominalKasbon}
              onChange={handleChange}
              placeholder="Contoh: Rp 750.000"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 font-semibold text-emerald-700"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-slate-600 mb-1">Untuk Keperluan</label>
            <textarea
              name="untukKeperluan"
              rows={2}
              value={data.untukKeperluan}
              onChange={handleChange}
              placeholder="Jelaskan keperluan pinjaman / kasbon..."
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* 2. Teknis Pembayaran Kasbon */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <DollarSign className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-slate-900 text-sm">Teknis Pembayaran / Pemotongan Gaji</h3>
        </div>

        <div className="space-y-3">
          <label className="block text-xs font-medium text-slate-600 mb-1">Metode Pemotongan</label>
          <div className="grid grid-cols-2 gap-3">
            <label
              className={`flex items-center gap-2 p-3 rounded-lg border text-xs cursor-pointer font-medium ${
                data.metodePembayaran === 'sekaligus'
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                  : 'border-slate-200 text-slate-700'
              }`}
            >
              <input
                type="radio"
                name="metodePembayaran"
                value="sekaligus"
                checked={data.metodePembayaran === 'sekaligus'}
                onChange={handleChange}
              />
              <span>Dipotong Sekaligus</span>
            </label>

            <label
              className={`flex items-center gap-2 p-3 rounded-lg border text-xs cursor-pointer font-medium ${
                data.metodePembayaran === 'cicilan'
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                  : 'border-slate-200 text-slate-700'
              }`}
            >
              <input
                type="radio"
                name="metodePembayaran"
                value="cicilan"
                checked={data.metodePembayaran === 'cicilan'}
                onChange={handleChange}
              />
              <span>Dipotong Cicilan Tiap Bulan</span>
            </label>
          </div>

          {data.metodePembayaran === 'sekaligus' ? (
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Dipotong Sekaligus dari Gaji Bulan</label>
              <input
                type="text"
                name="potongBulanSekaligus"
                value={data.potongBulanSekaligus}
                onChange={handleChange}
                placeholder="Contoh: September 2025"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Mulai Bulan</label>
                <input
                  type="text"
                  name="cicilanMulaiBulan"
                  value={data.cicilanMulaiBulan}
                  onChange={handleChange}
                  placeholder="Contoh: September"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Besar Cicilan / Bulan</label>
                <input
                  type="text"
                  name="cicilanNominalPerBulan"
                  value={data.cicilanNominalPerBulan}
                  onChange={handleChange}
                  placeholder="Contoh: Rp 150.000"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Jangka Waktu (Lama Bulan)</label>
                <input
                  type="text"
                  name="cicilanLamaBulan"
                  value={data.cicilanLamaBulan}
                  onChange={handleChange}
                  placeholder="Contoh: 5 Bulan"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. Info Rekening Bank & WhatsApp */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <Landmark className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-slate-900 text-sm">Rekening Pencairan & Kontak</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Nama Bank</label>
            <input
              type="text"
              name="namaBank"
              value={data.namaBank}
              onChange={handleChange}
              placeholder="Contoh: BSI"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Nomor Rekening</label>
            <input
              type="text"
              name="nomorRekening"
              value={data.nomorRekening}
              onChange={handleChange}
              placeholder="Contoh: 7300243937"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 font-mono"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Atas Nama Rekening</label>
            <input
              type="text"
              name="atasNamaRekening"
              value={data.atasNamaRekening}
              onChange={handleChange}
              placeholder="Contoh: MOHAMMAD AMMAR AYYASY"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Nomor WhatsApp Aktif</label>
            <input
              type="text"
              name="nomorWhatsApp"
              value={data.nomorWhatsApp}
              onChange={handleChange}
              placeholder="Contoh: 081399808859"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 font-mono"
            />
          </div>
        </div>
      </div>

      {/* 4. Persetujuan & Lokasi */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
          <Users className="w-5 h-5 text-indigo-600" />
          <h3 className="font-semibold text-slate-900 text-sm">Persetujuan & Tanda Tangan</h3>
        </div>

        {/* Upload TTD Pemohon */}
        <SignatureUpload
          label="Tanda Tangan Pemohon (Opsional)"
          value={data.ttdPemohonImage}
          onChange={(img) => onChange({ ttdPemohonImage: img })}
        />

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Lokasi Dibuat</label>
            <input
              type="text"
              name="lokasiSurat"
              value={data.lokasiSurat}
              onChange={handleChange}
              placeholder="Pamijahan / Jonggol"
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
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Diketahui Atasan (Nama)</label>
            <input
              type="text"
              name="namaAtasan"
              value={data.namaAtasan}
              onChange={handleChange}
              placeholder="Contoh: Muhammad Ifam Adrian, B.A"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Verifikasi HRD (Nama)</label>
            <input
              type="text"
              name="namaVerifikatorHRD"
              value={data.namaVerifikatorHRD}
              onChange={handleChange}
              placeholder="Contoh: Samba Saputra"
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
