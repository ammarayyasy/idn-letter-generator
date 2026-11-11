import React from 'react';
import { FormIzinData } from '../../types/letter';
import logoIdn from '../../assets/images/logo-idn.png';

interface DocumentPreviewProps {
  data: FormIzinData;
}

export const DocumentPreview: React.FC<DocumentPreviewProps> = ({ data }) => {
  const units = ['Manajemen', 'Asrama', 'SMP', 'SMK', 'General Affair', 'Pondok Tahfidz', 'Lainnya'];
  const reasons = ['Sakit', 'Datang Terlambat', 'Pulang Cepat', 'WFH', 'Lainnya'];

  return (
    <div className="a4-sheet text-black text-[10.5pt] leading-normal font-sans">
      {/* HEADER / KOP IDN */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-slate-900">
        <div className="flex items-center gap-3">
          <img 
            src={logoIdn} 
            alt="Logo IDN" 
            className="w-14 h-14 object-contain" 
          />
          <div>
            <h1 className="text-sm font-bold tracking-tight uppercase text-slate-950">
              FORM PERMOHONAN IZIN MENINGGALKAN PEKERJAAN
            </h1>
            <p className="text-xs font-semibold text-slate-700 tracking-wide">
              IDN BOARDING SCHOOL
            </p>
          </div>
        </div>
        <div className="text-right text-[9pt] text-slate-500 font-medium">
          Doc: Form Izin Pegawai IDN
        </div>
      </div>

      {/* TABEL DATA PEMOHON */}
      <table className="w-full border-collapse border border-black mb-3 text-[10pt]">
        <tbody>
          <tr className="border-b border-black">
            <td className="w-36 p-1.5 font-medium border-r border-black">Nama Lengkap</td>
            <td className="w-4 text-center border-r border-black">:</td>
            <td className="p-1.5 font-bold uppercase">{data.namaLengkap || '-'}</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1.5 font-medium border-r border-black">NIP</td>
            <td className="text-center border-r border-black">:</td>
            <td className="p-1.5">{data.nip || '-'}</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1.5 font-medium border-r border-black">Jabatan</td>
            <td className="text-center border-r border-black">:</td>
            <td className="p-1.5">{data.jabatan || '-'}</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1.5 font-medium border-r border-black">Mapel</td>
            <td className="text-center border-r border-black">:</td>
            <td className="p-1.5">{data.mapel || '-'}</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1.5 font-medium border-r border-black align-top">Unit Kerja (&#10003;)</td>
            <td className="text-center border-r border-black align-top">:</td>
            <td className="p-1.5">
              <div className="grid grid-cols-3 gap-x-2 gap-y-1">
                {units.map((u) => {
                  const isChecked = data.unitKerja === u;
                  return (
                    <span key={u} className="inline-flex items-center gap-1.5 text-[9.5pt]">
                      <span className={`inline-block w-3.5 h-3.5 border border-black text-center leading-3 text-[8pt] font-bold ${
                        isChecked ? 'bg-black text-white' : 'bg-white'
                      }`}>
                        {isChecked ? '✓' : ''}
                      </span>
                      <span>
                        {u === 'Lainnya' && data.unitKerjaLainnya ? `Lainnya: ${data.unitKerjaLainnya}` : u}
                      </span>
                    </span>
                  );
                })}
              </div>
            </td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1.5 font-medium border-r border-black">Lama Izin</td>
            <td className="text-center border-r border-black">:</td>
            <td className="p-1.5 font-semibold">{data.lamaIzin || '-'}</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1.5 font-medium border-r border-black">Mulai Izin</td>
            <td className="text-center border-r border-black">:</td>
            <td className="p-1.5">{data.mulaiIzin || '-'}</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1.5 font-medium border-r border-black">Masuk Kembali Tgl</td>
            <td className="text-center border-r border-black">:</td>
            <td className="p-1.5">{data.masukKembaliTgl || '-'}</td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1.5 font-medium border-r border-black align-top">Alasan Izin (&#10003;)</td>
            <td className="text-center border-r border-black align-top">:</td>
            <td className="p-1.5">
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {reasons.map((r) => {
                  const isChecked = data.alasanIzin === r;
                  return (
                    <span key={r} className="inline-flex items-center gap-1.5 text-[9.5pt]">
                      <span className={`inline-block w-3.5 h-3.5 border border-black text-center leading-3 text-[8pt] font-bold ${
                        isChecked ? 'bg-black text-white' : 'bg-white'
                      }`}>
                        {isChecked ? '✓' : ''}
                      </span>
                      <span>{r}</span>
                    </span>
                  );
                })}
              </div>
            </td>
          </tr>
          <tr className="border-b border-black">
            <td className="p-1.5 font-medium border-r border-black align-top">Keterangan Izin</td>
            <td className="text-center border-r border-black align-top">:</td>
            <td className="p-1.5 italic text-slate-800">{data.keteranganIzin || '-'}</td>
          </tr>
          <tr>
            <td className="p-1.5 font-medium border-r border-black align-top text-xs">
              Status Izin (&#10003;)<br />
              <span className="italic font-normal">(Diisi HRD)</span>
            </td>
            <td className="text-center border-r border-black align-top">:</td>
            <td className="p-1.5">
              <div className="flex flex-col gap-1 text-[9.5pt]">
                <span className="inline-flex items-center gap-2">
                  <span className={`inline-block w-3.5 h-3.5 border border-black text-center leading-3 text-[8pt] font-bold ${
                    data.statusIzinHRD === 'Memotong Tunjangan Kehadiran' ? 'bg-black text-white' : 'bg-white'
                  }`}>
                    {data.statusIzinHRD === 'Memotong Tunjangan Kehadiran' ? '✓' : ''}
                  </span>
                  <span>Memotong Tunjangan Kehadiran</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className={`inline-block w-3.5 h-3.5 border border-black text-center leading-3 text-[8pt] font-bold ${
                    data.statusIzinHRD === 'Tidak Memotong Tunjangan Kehadiran' ? 'bg-black text-white' : 'bg-white'
                  }`}>
                    {data.statusIzinHRD === 'Tidak Memotong Tunjangan Kehadiran' ? '✓' : ''}
                  </span>
                  <span>Tidak Memotong Tunjangan Kehadiran</span>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* TABEL PENGGANTI SELAMA IZIN */}
      {data.adaPengganti && (
        <table className="w-full border-collapse border border-black mb-3 text-[10pt]">
          <thead>
            <tr className="bg-slate-100 border-b border-black text-left">
              <th colSpan={3} className="p-1.5 font-semibold text-xs uppercase tracking-wide">
                PENGGANTI SELAMA IZIN <span className="font-normal lowercase text-[9pt] italic">(jika tugas digantikan orang lain)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-black">
              <td className="w-36 p-1.5 font-medium border-r border-black">Nama Pengganti</td>
              <td className="w-4 text-center border-r border-black">:</td>
              <td className="p-1.5 font-semibold">{data.penggantiNama || '-'}</td>
            </tr>
            <tr className="border-b border-black">
              <td className="p-1.5 font-medium border-r border-black">Jabatan</td>
              <td className="text-center border-r border-black">:</td>
              <td className="p-1.5">{data.penggantiJabatan || '-'}</td>
            </tr>
            <tr>
              <td className="p-1.5 font-medium border-r border-black">Unit Kerja</td>
              <td className="text-center border-r border-black">:</td>
              <td className="p-1.5">{data.penggantiUnitKerja || '-'}</td>
            </tr>
          </tbody>
        </table>
      )}

      {/* TABEL TANDA TANGAN (YANG MENGAJUKAN & ATASAN) */}
      <table className="w-full border-collapse border border-black mb-3 text-[9.5pt]">
        <thead>
          <tr className="border-b border-black bg-slate-50 text-center font-bold">
            <th className="w-1/2 p-1.5 border-r border-black">Yang Mengajukan</th>
            <th className="w-1/2 p-1.5">Atasan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2.5 border-r border-black align-top">
              <div className="flex flex-col justify-between min-h-[145px]">
                {/* Area TTD Pemohon */}
                <div className="flex items-center justify-center min-h-[75px] my-1">
                  {data.ttdPemohonImage ? (
                    <img
                      src={data.ttdPemohonImage}
                      alt="Tanda Tangan Pemohon"
                      className="max-h-16 max-w-[150px] object-contain"
                    />
                  ) : (
                    <div className="h-16 w-full flex items-center justify-center text-[8.5pt] text-slate-300 italic select-none">
                      ( Space Tanda Tangan Basah Pemohon )
                    </div>
                  )}
                </div>

                <div className="border-t border-dotted border-slate-300 pt-1.5">
                  <p><span className="font-semibold">Nama</span> &nbsp;&nbsp;&nbsp;&nbsp;: <strong className="uppercase">{data.namaLengkap}</strong></p>
                  <p><span className="font-semibold">Jabatan</span> &nbsp;: {data.jabatan} {data.mapel ? `(${data.mapel})` : ''}</p>
                  <p className="text-[8.5pt] text-slate-600">Tanggal : {data.tanggalPengajuan}</p>
                </div>
              </div>
            </td>
            <td className="p-2.5 align-top">
              <div className="flex flex-col justify-between min-h-[145px]">
                {/* Area TTD Atasan (Space Kosong untuk TTD Basah) */}
                <div className="flex items-center justify-center min-h-[75px] my-1">
                  <div className="h-16 w-full flex items-center justify-center text-[8.5pt] text-slate-300 italic select-none">
                    ( Space Tanda Tangan Basah Atasan )
                  </div>
                </div>

                <div className="border-t border-dotted border-slate-300 pt-1.5">
                  <p><span className="font-semibold">Nama</span> &nbsp;&nbsp;&nbsp;&nbsp;: <strong className="uppercase">{data.namaAtasan || '................................'}</strong></p>
                  <p><span className="font-semibold">Jabatan</span> &nbsp;: {data.jabatanAtasan || '................................'}</p>
                  <p className="text-[8.5pt] text-slate-600">Tanggal : {data.tanggalPersetujuanAtasan}</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* CATATAN RESMI IDN BOARDING SCHOOL */}
      <div className="border border-black p-2 text-[7.5pt] leading-tight text-slate-800">
        <p className="font-bold uppercase mb-1">Catatan Regulasi IDN Boarding School:</p>
        <ol className="list-decimal pl-3 space-y-0.5">
          <li>Pegawai yang akan mengajukan izin meninggalkan pekerjaan diwajibkan mengisi "Form Permohonan Izin Meninggalkan Pekerjaan" (sesuai format lampiran 1).</li>
          <li>Permohonan pengajuan izin yang dapat direncanakan selambat-lambatnya 1 (satu) minggu sebelum izin dilaksanakan, kecuali musibah/sakit/mendesak pada hari H.</li>
          <li>Izin sakit ≥ 3 hari kerja wajib menyertakan surat keterangan dokter.</li>
          <li>Izin datang terlambat atau pulang cepat disampaikan pada hari yang sama.</li>
          <li>Form izin yang telah disetujui atasan disampaikan ke HRD untuk diarsipkan.</li>
          <li>Kolom pengganti selama izin diisi jika tugas digantikan oleh orang lain.</li>
          <li>Untuk Wakasek/Koordinator/Guru/TU, atasan langsung adalah Kepala Sekolah dan atasan berikutnya Direktur Pendidikan.</li>
          <li>Untuk Musyrif/Koordinator Sakan, atasan langsung Kepala Asrama dan atasan berikutnya Direktur Pendidikan.</li>
          <li>Untuk Staf General Affair (Teknisi, OB, Satpam), atasan langsung Direktur GA dan atasan berikutnya Ketua Yayasan.</li>
          <li>Untuk Kepala Sekolah/Kepala Asrama/Manajer, atasan langsung adalah Direktur Pendidikan.</li>
          <li>Setiap unit kerja wajib mendokumentasikan arsip Form Pengajuan Izin karyawan.</li>
        </ol>
      </div>
    </div>
  );
};

