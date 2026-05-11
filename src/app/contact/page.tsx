"use client";

import { useState } from "react";
import { MessageCircle, Mail, User, Send, MapPin, Clock, Instagram } from "lucide-react";

const WHATSAPP_NUMBER = "6285173003181";

export default function ContactPage() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo Elly's Florist!\n\nNama: ${form.nama}\nEmail: ${form.email}\n\nPesan:\n${form.pesan}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">
            Hubungi Kami
          </span>
          <h1 className="section-title mt-2">Ada Pertanyaan?</h1>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami kapan saja
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-display text-xl font-bold text-primary">Metode Kontak</h3>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-4 p-4 hover:border-[var(--primary)] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm text-secondary">0851-7300-3181</p>
              </div>
            </a>

            <a
              href="https://instagram.com/ellys.flo"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-4 p-4 hover:border-[var(--primary)] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <p className="font-semibold">Instagram</p>
                <p className="text-sm text-secondary">@ellys.flo</p>
              </div>
            </a>

            <a
              href="https://lynk.id/ellys"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-4 p-4 hover:border-[var(--primary)] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
                  <path d="M19.46 9H4.54a.54.54 0 0 0-.54.54v9.08a2.16 2.16 0 0 0 2.16 2.16h12.7a2.16 2.16 0 0 0 2.16-2.16V9.54a.54.54 0 0 0-.54-.54m-4.6 12.28h-7.46a.6.6 0 0 1-.6-.6v-4.24a.6.6 0 0 1 .6-.6h7.46a.6.6 0 0 1 .6.6v4.24a.6.6 0 0 1-.6.6m-7.46-11.42a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72m6.72 0a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold">Katalog Lengkap</p>
                <p className="text-sm text-secondary">lynk.id/ellys</p>
              </div>
            </a>

            <div className="glass-card p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold">Lokasi</p>
                  <p className="text-sm text-secondary">Kota Bengkulu</p>
                  <p className="text-sm text-secondary">Provinsi Bengkulu</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-semibold">Jam Operasional</p>
                  <p className="text-sm text-secondary">Store 1: 08.00 - 21.00</p>
                  <p className="text-sm text-secondary">Store 2: 08.00 - 17.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card p-8">
              <h3 className="font-display text-xl font-bold mb-6">Kirim Pesan</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nama
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nama}
                    onChange={(e) => setForm({ ...form, nama: e.target.value })}
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="nama@email.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Pesan
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.pesan}
                    onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-whatsapp w-full justify-center">
                  {submitted ? (
                    "Terkirim! ✓"
                  ) : (
                    <>
                      <Send size={18} />
                      Kirim via WhatsApp
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-center text-secondary mt-4">
                Pesan Anda akan dikirim langsung ke WhatsApp kami
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}