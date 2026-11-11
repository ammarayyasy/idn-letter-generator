export type TemplateId = 'form-izin' | 'form-lembur' | 'form-kasbon';

export interface LetterTemplateInfo {
  id: TemplateId;
  title: string;
  category: 'Kepegawaian' | 'Operasional' | 'Keuangan';
  description: string;
  badge: string;
  isAvailable: boolean;
  docFormat: '.doc' | '.docx';
}

// 1. Data Form Izin Pegawai
export interface FormIzinData {
  namaLengkap: string;
  nip: string;
  jabatan: string;
  mapel: string;
  unitKerja: string; // Manajemen | Asrama | SMP | SMK | General Affair | Pondok Tahfidz | Lainnya
  unitKerjaLainnya?: string;
  
  lamaIzin: string; // e.g. "1 hari"
  mulaiIzin: string; // e.g. "22 Oktober 2026"
  masukKembaliTgl: string; // e.g. "23 Oktober 2026"
  
  alasanIzin: 'Sakit' | 'Datang Terlambat' | 'Pulang Cepat' | 'WFH' | 'Lainnya';
  keteranganIzin: string; // e.g. "Membantu saudara dari Surabaya..."
  
  statusIzinHRD: 'Memotong Tunjangan Kehadiran' | 'Tidak Memotong Tunjangan Kehadiran';
  
  adaPengganti: boolean;
  penggantiNama: string;
  penggantiJabatan: string;
  penggantiUnitKerja: string;
  
  // TTD
  tanggalPengajuan: string;
  namaAtasan: string;
  jabatanAtasan: string;
  tanggalPersetujuanAtasan: string;
  ttdPemohonImage?: string; // Base64 data URL gambar tanda tangan pemohon
}

// 2. Data Form Lembur
export interface FormLemburData {
  namaLengkap: string;
  jabatan: string;
  departemenUnit: string;
  
  // Rincian Kebutuhan Lembur
  kegiatan: string;
  areaLokasi: string;
  tanggalLembur: string;
  jamMulai: string;
  jamSelesai: string;
  totalJam: string;
  urgensiPekerjaan: string;
  jumlahTenagaKerja: string;
  namaTenagaKerja: string; // Daftar nama anggota lembur
  
  // Status HRD
  statusHRD: 'Disetujui' | 'Ditangguhkan' | 'Ditolak';
  catatanStatusHRD?: string;
  
  // Realisasi Lembur
  realisasiLembur: string;
  realisasiTanggal: string;
  realisasiJam: string;
  realisasiJumlahTenagaKerja: string;
  
  // TTD
  kotaSurat: string; // e.g. "Jonggol"
  tanggalSurat: string; // e.g. "14 Agustus 2026"
  diajukanOlehJabatan: string;
  diajukanOlehNama: string;
  mengetahuiHRDJabatan: string;
  mengetahuiHRDNama: string;
  disetujuiDirekturJabatan: string;
  disetujuiDirekturNama: string;
  ttdPemohonImage?: string; // Base64 data URL gambar tanda tangan pemohon
}

// 3. Data Form Kasbon / Pinjaman Pegawai
export interface FormKasbonData {
  yayasan: string; // Yayasan IDN
  namaPegawai: string;
  unitKerja: string;
  jabatan: string;
  penghasilanBulanan: string;
  nominalKasbon: string;
  untukKeperluan: string;
  
  // Teknis Pembayaran
  metodePembayaran: 'sekaligus' | 'cicilan';
  potongBulanSekaligus: string;
  cicilanMulaiBulan: string;
  cicilanNominalPerBulan: string;
  cicilanLamaBulan: string;
  
  // Rekening & Kontak
  namaBank: string; // BSI
  nomorRekening: string;
  atasNamaRekening: string;
  nomorWhatsApp: string;
  
  // TTD
  lokasiSurat: string; // e.g. "Pamijahan" atau "Jonggol"
  tanggalSurat: string;
  namaAtasan: string;
  namaVerifikatorHRD: string;
  ttdPemohonImage?: string; // Base64 data URL gambar tanda tangan pemohon
}
