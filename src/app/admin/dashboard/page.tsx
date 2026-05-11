"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Upload, Trash2, LogOut, Image as ImageIcon } from "lucide-react";

interface Photo {
  name: string;
  path: string;
  sha?: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("adminLoggedIn");
    if (!loggedIn) {
      router.push("/admin");
      return;
    }
    fetchPhotos();
  }, [router]);

  const fetchPhotos = async () => {
    try {
      const res = await fetch("/api/admin/photos");
      if (res.ok) {
        const data = await res.json();
        setPhotos(data);
      }
    } catch (err) {
      console.error("Error fetching photos:", err);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminLoggedIn");
    router.push("/admin");
  };

  const handleUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    setUploading(true);
    setMessage(null);

    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message || "Upload failed");
        }
      }

      setMessage({ type: "success", text: "Foto berhasil diupload!" });
      fetchPhotos();
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Gagal upload foto" });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (filename: string) => {
    if (!confirm(`Hapus foto "${filename}"?`)) return;

    try {
      const res = await fetch("/api/admin/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename }),
      });

      if (res.ok) {
        setMessage({ type: "success", text: "Foto berhasil dihapus!" });
        fetchPhotos();
      } else {
        const error = await res.json();
        throw new Error(error.message || "Delete failed");
      }
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Gagal hapus foto" });
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleUpload(e.dataTransfer.files);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-pastel/10 to-mint-pastel/10">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-display font-bold gradient-text">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-secondary hover:text-primary transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Upload Section */}
        <div className="glass-card p-6 mb-8">
          <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
            <Upload size={20} />
            Upload Foto Baru
          </h2>

          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-8 text-center transition-colors ${
              dragOver ? "border-primary bg-rose-pastel/10" : "border-border"
            }`}
          >
            <input
              type="file"
              id="file-upload"
              className="hidden"
              multiple
              accept="image/*"
              onChange={(e) => handleUpload(e.target.files)}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-rose-pastel/20 flex items-center justify-center">
                  <Upload size={32} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Drag & drop foto di sini</p>
                  <p className="text-sm text-secondary">atau klik untuk pilih file</p>
                </div>
              </div>
            </label>
          </div>

          {uploading && (
            <div className="mt-4 text-center">
              <div className="inline-block w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <span className="ml-2 text-secondary">Mengupload...</span>
            </div>
          )}

          {message && (
            <div className={`mt-4 p-4 rounded-xl ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
              {message.text}
            </div>
          )}
        </div>

        {/* Photos Grid */}
        <div className="glass-card p-6">
          <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
            <ImageIcon size={20} />
            Foto Galeri ({photos.length})
          </h2>

          {photos.length === 0 ? (
            <div className="text-center py-12 text-secondary">
              <p>Belum ada foto. Upload foto pertama!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {photos.map((photo) => (
                <div key={photo.name} className="relative group">
                  <div className="aspect-square rounded-xl overflow-hidden bg-white border border-border">
                    <Image
                      src={photo.path}
                      alt={photo.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <button
                    onClick={() => handleDelete(photo.name)}
                    className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={16} />
                  </button>
                  <p className="text-xs text-center mt-2 text-secondary truncate">{photo.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-200">
          <p className="text-sm text-amber-800">
            <strong>Catatan:</strong> Foto yang diupload akan langsung muncul di galeri website setelah deployment selesai (~1-2 menit).
          </p>
        </div>
      </main>
    </div>
  );
}