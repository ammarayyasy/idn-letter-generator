import React, { useRef } from 'react';
import { Upload, X, Check, Image as ImageIcon } from 'lucide-react';

interface SignatureUploadProps {
  value?: string;
  onChange: (dataUrl?: string) => void;
  label?: string;
}

export const SignatureUpload: React.FC<SignatureUploadProps> = ({
  value,
  onChange,
  label = "Tanda Tangan Pemohon (Opsional)"
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Ukuran file gambar maksimal 2MB!");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        onChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    onChange(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-xs font-medium text-slate-700">
        {label}
      </label>

      {value ? (
        <div className="flex items-center gap-3 p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl">
          <div className="w-20 h-14 bg-white rounded-lg border border-emerald-200 flex items-center justify-center p-1 overflow-hidden shrink-0">
            <img src={value} alt="Preview TTD" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 text-xs font-semibold text-emerald-800">
              <Check className="w-3.5 h-3.5" />
              <span>Gambar TTD Terpasang</span>
            </div>
            <p className="text-[11px] text-slate-500 truncate">
              Otomatis tampil di kolom tanda tangan pemohon.
            </p>
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
            title="Hapus Gambar TTD"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg, image/jpg, image/webp"
            onChange={handleFileChange}
            className="hidden"
            id="signature-upload-input"
          />
          <label
            htmlFor="signature-upload-input"
            className="flex items-center justify-center gap-2 px-3 py-2.5 border border-dashed border-slate-300 rounded-xl bg-slate-50 hover:bg-indigo-50/40 hover:border-indigo-300 text-slate-600 hover:text-indigo-600 cursor-pointer transition-all text-xs font-medium"
          >
            <Upload className="w-4 h-4" />
            <span>Upload File Gambar TTD (PNG / JPG)</span>
          </label>
          <p className="text-[10.5px] text-slate-400 mt-1 flex items-center gap-1">
            <ImageIcon className="w-3 h-3" />
            Disarankan format PNG transparan. Jika kosong, akan disediakan space untuk tanda tangan basah.
          </p>
        </div>
      )}
    </div>
  );
};

