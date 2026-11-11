import React from 'react';
import { FormLemburData } from '../../types/letter';
import logoIdn from '../../assets/images/logo-idn.png';

interface DocumentPreviewProps {
  data: FormLemburData;
}

export const DocumentPreview: React.FC<DocumentPreviewProps> = ({ data }) => {
  return (
    <div className="a4-sheet text-black text-[10.5pt] leading-relaxed font-sans">
      {/* HEADER KOP IDN */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-slate-900">
        <div className="flex items-center gap-3">
          <img 
            src={logoIdn} 
            alt="Logo IDN" 
            className="w-14 h-14 object-contain" 
          />
          <div>
            <h1 className="text-base font-bold tracking-tight uppercase text-slate-950">
              FORMULIR PENGAJUAN LEMBUR
            </h1>
            <p className="text-xs font-semibold text-slate-700 tracking-wide">
              IDN BOARDING SCHOOL
            </p>
          </div>
        </div>
        <div className="text-right text-[9pt] text-slate-500 font-medium">
          Doc: Form Lembur IDN
        </div>
      </div>

      {/* DATA PEMOHON */}
      <div className="mb-4 bg-slate-50/50 p-2.5 rounded border border-slate-300">
        <table className="w-full text-[10pt]">
          <tbody>
            <tr>
              <td className="w-36 py-0.5 font-medium">Nama Lengkap</td>
              <td className="w-4 py-0.5">:</td>
              <td className="py-0.5 font-bold uppercase">{data.namaLengkap || '-'}</td>
            </tr>
            <tr>
              <td className="py-0.5 font-medium">Jabatan</td>
              <td className="py-0.5">:</td>
              <td className="py-0.5">{data.jabatan || '-'}</td>
            </tr>
            <tr>
              <td className="py-0.5 font-medium">Departemen / Unit</td>
              <td className="py-0.5">:</td>
              <td className="py-0.5">{data.departemenUnit || '-'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* RINCIAN KEBUTUHAN LEMBUR */}
      <p className="text-sm font-semibold mb-2">
        Dengan ini mengajukan kebutuhan lembur dengan rincian sebagai berikut:
      </p>

      <table className="w-full border-collapse border border-black mb-4 text-[10pt]">
        <tbody>
          <tr className="border-b border-black">
            <td className="w-44 p-1.5 font-medium border-r border-black">Kegiatan</td>
            <td className="w-4 text-center border-r border-black">:</td>
            <td className="p-1.5 font-semibold">{data.kegiatan || '-'}</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1.5 font-medium border-r border-black">Area / Lokasi</td>
            <td className="text-center border-r border-black">:</td>
            <td className="p-1.5">{data.areaLokasi || '-'}</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1.5 font-medium border-r border-black">Tanggal Lembur</td>
            <td className="text-center border-r border-black">:</td>
            <td className="p-1.5">{data.tanggalLembur || '-'}</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1.5 font-medium border-r border-black">Jam Pelaksanaan</td>
            <td className="text-center border-r border-black">:</td>
            <td className="p-1.5">
              {data.jamMulai} &ndash; {data.jamSelesai} &nbsp; 
              <span className="font-semibold">(Total: {data.totalJam || '-'})</span>
            </td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1.5 font-medium border-r border-black">Urgensi Pekerjaan</td>
            <td className="text-center border-r border-black">:</td>
            <td className="p-1.5 italic">{data.urgensiPekerjaan || '-'}</td>
          </tr>
          <tr>
            <td className="p-1.5 font-medium border-r border-black align-top">Jumlah Tenaga Kerja</td>
            <td className="text-center border-r border-black align-top">:</td>
            <td className="p-1.5">
              <span>{data.jumlahTenagaKerja || '-'}</span>
              {data.namaTenagaKerja && (
                <div className="mt-1 text-[9.5pt]">
                  (a.n. <span className="font-semibold">{data.namaTenagaKerja}</span>, ttd: _______________)
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>

      {/* DISPOSISI / PERSETUJUAN HRD */}
      <div className="border border-black p-2.5 mb-4 text-[9.5pt]">
        <div className="flex items-start gap-4">
          <div className="w-36 font-bold">
            Disetujui / Ditolak<br />
            <span className="text-[8.5pt] font-normal italic">(Diisi HRD)</span>
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <span className={`inline-block w-4 h-4 border border-black text-center text-xs leading-3 font-bold ${
                data.statusHRD === 'Disetujui' ? 'bg-black text-white' : 'bg-white'
              }`}>
                {data.statusHRD === 'Disetujui' ? '✓' : ''}
              </span>
              <span>Disetujui</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`inline-block w-4 h-4 border border-black text-center text-xs leading-3 font-bold ${
                data.statusHRD === 'Ditangguhkan' ? 'bg-black text-white' : 'bg-white'
              }`}>
                {data.statusHRD === 'Ditangguhkan' ? '✓' : ''}
              </span>
              <span>Ditangguhkan menjadi tanggal: {data.statusHRD === 'Ditangguhkan' ? data.catatanStatusHRD : '....................'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`inline-block w-4 h-4 border border-black text-center text-xs leading-3 font-bold ${
                data.statusHRD === 'Ditolak' ? 'bg-black text-white' : 'bg-white'
              }`}>
                {data.statusHRD === 'Ditolak' ? '✓' : ''}
              </span>
              <span>Ditolak dengan alasan: {data.statusHRD === 'Ditolak' ? data.catatanStatusHRD : '....................'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* REALISASI LEMBUR */}
      <table className="w-full border-collapse border border-black mb-6 text-[10pt]">
        <thead>
          <tr className="bg-slate-100 border-b border-black">
            <th colSpan={3} className="p-1.5 text-left font-semibold text-xs uppercase tracking-wide">
              Realisasi Lembur
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-black">
            <td className="w-44 p-1.5 font-medium border-r border-black">Uraian Realisasi</td>
            <td className="w-4 text-center border-r border-black">:</td>
            <td className="p-1.5">{data.realisasiLembur || '-'}</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1.5 font-medium border-r border-black">Tanggal Realisasi</td>
            <td className="text-center border-r border-black">:</td>
            <td className="p-1.5">{data.realisasiTanggal || '-'}</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1.5 font-medium border-r border-black">Durasi / Jam Realisasi</td>
            <td className="text-center border-r border-black">:</td>
            <td className="p-1.5">{data.realisasiJam || '-'}</td>
          </tr>
          <tr>
            <td className="p-1.5 font-medium border-r border-black">Jumlah Tenaga Kerja</td>
            <td className="text-center border-r border-black">:</td>
            <td className="p-1.5">{data.realisasiJumlahTenagaKerja || '-'}</td>
          </tr>
        </tbody>
      </table>

      {/* LOKASI DAN TANGGAL SURAT */}
      <div className="text-right mb-2 text-[10pt] font-medium">
        {data.kotaSurat}, {data.tanggalSurat}
      </div>

      {/* TANDA TANGAN 3 KOLOM */}
      <table className="w-full border-collapse border border-black text-[9.5pt]">
        <thead>
          <tr className="border-b border-black bg-slate-50 text-center font-bold">
            <th className="w-1/3 p-1.5 border-r border-black">Diajukan Oleh,</th>
            <th className="w-1/3 p-1.5 border-r border-black">Mengetahui Oleh,</th>
            <th className="w-1/3 p-1.5">Disetujui Oleh,</th>
          </tr>
          <tr className="border-b border-black text-center text-xs text-slate-700">
            <td className="p-1 border-r border-black">{data.diajukanOlehJabatan}</td>
            <td className="p-1 border-r border-black">{data.mengetahuiHRDJabatan}</td>
            <td className="p-1">{data.disetujuiDirekturJabatan}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* 1. Diajukan Oleh (Pemohon) */}
            <td className="p-2 border-r border-black align-bottom">
              <div className="flex flex-col justify-between min-h-[100px]">
                <div className="flex items-center justify-center min-h-[65px] my-1">
                  {data.ttdPemohonImage ? (
                    <img
                      src={data.ttdPemohonImage}
                      alt="Tanda Tangan Pemohon"
                      className="max-h-16 max-w-[130px] object-contain"
                    />
                  ) : (
                    <div className="h-16 w-full flex items-center justify-center text-[8pt] text-slate-300 italic select-none">
                      ( Space TTD Pemohon )
                    </div>
                  )}
                </div>
                <p className="font-bold underline uppercase text-center">{data.diajukanOlehNama || '.............................'}</p>
              </div>
            </td>

            {/* 2. Mengetahui HRD (Space TTD Basah) */}
            <td className="p-2 border-r border-black align-bottom">
              <div className="flex flex-col justify-between min-h-[100px]">
                <div className="flex items-center justify-center min-h-[65px] my-1">
                  <div className="h-16 w-full flex items-center justify-center text-[8pt] text-slate-300 italic select-none">
                    ( Space TTD HRD )
                  </div>
                </div>
                <p className="font-bold underline uppercase text-center">{data.mengetahuiHRDNama || '.............................'}</p>
              </div>
            </td>

            {/* 3. Disetujui Direktur (Space TTD Basah) */}
            <td className="p-2 align-bottom">
              <div className="flex flex-col justify-between min-h-[100px]">
                <div className="flex items-center justify-center min-h-[65px] my-1">
                  <div className="h-16 w-full flex items-center justify-center text-[8pt] text-slate-300 italic select-none">
                    ( Space TTD Direktur )
                  </div>
                </div>
                <p className="font-bold underline uppercase text-center">{data.disetujuiDirekturNama || '.............................'}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

