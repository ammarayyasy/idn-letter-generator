import React from 'react';
import { FormKasbonData } from '../../types/letter';
import logoIdn from '../../assets/images/logo-idn.png';

interface DocumentPreviewProps {
  data: FormKasbonData;
}

export const DocumentPreview: React.FC<DocumentPreviewProps> = ({ data }) => {
  return (
    <div className="a4-sheet text-black text-[11pt] leading-relaxed font-sans">
      {/* HEADER KOP YAYASAN IDN */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-slate-900">
        <div className="flex items-center gap-3">
          <img 
            src={logoIdn} 
            alt="Logo IDN" 
            className="w-14 h-14 object-contain" 
          />
          <div>
            <h1 className="text-lg font-bold tracking-tight uppercase text-slate-950">
              Formulir Pengajuan Pinjaman Pegawai
            </h1>
            <p className="text-sm font-bold text-slate-700 tracking-wide uppercase">
              {data.yayasan || 'Yayasan IDN'}
            </p>
          </div>
        </div>
        <div className="text-right text-[9pt] text-slate-500 font-medium">
          Doc: Form Kasbon Pegawai
        </div>
      </div>

      {/* TABEL DATA PINJAMAN */}
      <table className="w-full border-collapse border border-black mb-6 text-[10.5pt]">
        <tbody>
          <tr className="border-b border-black">
            <td className="w-52 p-2.5 font-medium border-r border-black">Nama Pegawai</td>
            <td className="w-4 text-center border-r border-black">:</td>
            <td className="p-2.5 font-bold uppercase">{data.namaPegawai || '-'}</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-2.5 font-medium border-r border-black">Unit Kerja</td>
            <td className="text-center border-r border-black">:</td>
            <td className="p-2.5">{data.unitKerja || '-'}</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-2.5 font-medium border-r border-black">Jabatan</td>
            <td className="text-center border-r border-black">:</td>
            <td className="p-2.5">{data.jabatan || '-'}</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-2.5 font-medium border-r border-black">Penghasilan Bulanan</td>
            <td className="text-center border-r border-black">:</td>
            <td className="p-2.5 font-semibold">{data.penghasilanBulanan || '-'}</td>
          </tr>
          <tr className="border-b border-black bg-slate-50/70">
            <td className="p-2.5 font-bold border-r border-black">Nominal Kasbon</td>
            <td className="text-center border-r border-black">:</td>
            <td className="p-2.5 font-bold text-base">{data.nominalKasbon || '-'}</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-2.5 font-medium border-r border-black align-top">Untuk Keperluan</td>
            <td className="text-center border-r border-black align-top">:</td>
            <td className="p-2.5 italic">{data.untukKeperluan || '-'}</td>
          </tr>
          <tr>
            <td className="p-2.5 font-medium border-r border-black align-top">Teknis Pembayaran</td>
            <td className="text-center border-r border-black align-top">:</td>
            <td className="p-2.5">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className={`inline-block w-4 h-4 border border-black text-center text-xs leading-3 font-bold mt-0.5 ${
                    data.metodePembayaran === 'sekaligus' ? 'bg-black text-white' : 'bg-white'
                  }`}>
                    {data.metodePembayaran === 'sekaligus' ? '✓' : ''}
                  </span>
                  <span>
                    Dipotong sekaligus dari gaji Bulan{' '}
                    <strong className="underline">
                      {data.metodePembayaran === 'sekaligus' ? data.potongBulanSekaligus || '........' : '........'}
                    </strong>
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <span className={`inline-block w-4 h-4 border border-black text-center text-xs leading-3 font-bold mt-0.5 ${
                    data.metodePembayaran === 'cicilan' ? 'bg-black text-white' : 'bg-white'
                  }`}>
                    {data.metodePembayaran === 'cicilan' ? '✓' : ''}
                  </span>
                  <div>
                    <span>Cicilan, dipotong gaji mulai Bulan </span>
                    <strong className="underline">
                      {data.metodePembayaran === 'cicilan' ? data.cicilanMulaiBulan || '........' : '........'}
                    </strong>
                    <span>, Sebesar </span>
                    <strong className="underline">
                      {data.metodePembayaran === 'cicilan' ? data.cicilanNominalPerBulan || '........' : '........'}
                    </strong>
                    {data.cicilanLamaBulan && (
                      <span> ({data.cicilanLamaBulan})</span>
                    )}
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* INFORMASI REKENING & KONTAK PEMOHON */}
      <div className="border border-black p-3 mb-8 bg-slate-50/50 text-[10pt] rounded">
        <p className="font-semibold text-xs uppercase tracking-wide text-slate-700 mb-1">
          Informasi Pencairan & Kontak Pemohon:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <span className="font-medium">No. Rekening {data.namaBank}:</span>{' '}
            <span className="font-bold font-mono">{data.nomorRekening || '-'}</span>
            <div className="text-xs text-slate-600">a.n. {data.atasNamaRekening || '-'}</div>
          </div>
          <div>
            <span className="font-medium">No. WhatsApp:</span>{' '}
            <span className="font-bold font-mono">{data.nomorWhatsApp || '-'}</span>
          </div>
        </div>
      </div>

      {/* LOKASI DAN TANGGAL */}
      <div className="text-right mb-3 text-[10.5pt] font-medium">
        {data.lokasiSurat}, {data.tanggalSurat}
      </div>

      {/* TANDA TANGAN 3 PIHAK */}
      <table className="w-full border-collapse border border-black text-[10pt]">
        <thead>
          <tr className="border-b border-black bg-slate-50 text-center font-bold">
            <th className="w-1/3 p-2 border-r border-black">Pemohon,</th>
            <th className="w-1/3 p-2 border-r border-black">Diketahui Atasan,</th>
            <th className="w-1/3 p-2">Verifikasi HRD</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* 1. Pemohon (Dengan TTD Gambar jika ada) */}
            <td className="p-2 border-r border-black align-bottom">
              <div className="flex flex-col justify-between min-h-[110px]">
                <div className="flex items-center justify-center min-h-[70px] my-1">
                  {data.ttdPemohonImage ? (
                    <img
                      src={data.ttdPemohonImage}
                      alt="Tanda Tangan Pemohon"
                      className="max-h-16 max-w-[140px] object-contain"
                    />
                  ) : (
                    <div className="h-16 w-full flex items-center justify-center text-[8pt] text-slate-300 italic select-none">
                      ( Space TTD Pemohon )
                    </div>
                  )}
                </div>
                <p className="font-bold underline uppercase text-center">{data.namaPegawai || '.............................'}</p>
              </div>
            </td>

            {/* 2. Diketahui Atasan (Space Kosong TTD Basah) */}
            <td className="p-2 border-r border-black align-bottom">
              <div className="flex flex-col justify-between min-h-[110px]">
                <div className="flex items-center justify-center min-h-[70px] my-1">
                  <div className="h-16 w-full flex items-center justify-center text-[8pt] text-slate-300 italic select-none">
                    ( Space TTD Atasan )
                  </div>
                </div>
                <p className="font-bold underline uppercase text-center">{data.namaAtasan || '.............................'}</p>
              </div>
            </td>

            {/* 3. Verifikasi HRD (Space Kosong TTD Basah) */}
            <td className="p-2 align-bottom">
              <div className="flex flex-col justify-between min-h-[110px]">
                <div className="flex items-center justify-center min-h-[70px] my-1">
                  <div className="h-16 w-full flex items-center justify-center text-[8pt] text-slate-300 italic select-none">
                    ( Space TTD HRD )
                  </div>
                </div>
                <p className="font-bold underline uppercase text-center">{data.namaVerifikatorHRD || '.............................'}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

