"use client";

import Link from "next/link";
import { MapPin, Clock, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Elly&apos;s Florist
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Buket bunga buatan premium handmade di Kota Bengkulu. Membuat momen spesial Anda lebih berkesan.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/ellys.flo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://lynk.id/ellys"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.46 9H4.54a.54.54 0 0 0-.54.54v9.08a2.16 2.16 0 0 0 2.16 2.16h12.7a2.16 2.16 0 0 0 2.16-2.16V9.54a.54.54 0 0 0-.54-.54m-4.6 12.28h-7.46a.6.6 0 0 1-.6-.6v-4.24a.6.6 0 0 1 .6-.6h7.46a.6.6 0 0 1 .6.6v4.24a.6.6 0 0 1-.6.6m-7.46-11.42a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72m6.72 0a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              {["/", "/catalog", "/gallery", "/about", "/contact"].map((href, i) => {
                const labels = ["Beranda", "Katalog", "Galeri", "Tentang", "Kontak"];
                return (
                  <li key={href}>
                    <Link href={href} className="text-white/70 hover:text-white">
                      {labels[i]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Info Toko</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-rose-pastel" />
                <span>
                  <strong>Store 1:</strong> Unib Belakang, Depan Lapas Perempuan (08.00 - 21.00)
                  <br />
                  <strong>Store 2:</strong> Poltekes Jl. Seruni, Depan Indomaret (08.00 - 17.00)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 text-rose-pastel" />
                <span>Kota Bengkulu, Provinsi Bengkulu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © 2025 Elly&apos;s Florist
        </div>
      </div>
    </footer>
  );
}