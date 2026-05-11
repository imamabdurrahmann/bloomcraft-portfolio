"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "6285173003181";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase block">
            Tentang Kami
          </span>
          <h1 className="section-title mt-2">Cerita Elly&apos;s Florist</h1>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/logo.png"
                alt="Elly's Florist Workshop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div>
            <h2 className="section-title mb-4">Diciptakan dengan Cinta</h2>
            <p className="text-secondary leading-relaxed mb-4">
              Elly&apos;s Florist lahir dari kecintaan terhadap keindahan bunga dan dedikasi untuk menghadirkan momen istimewa bagi setiap pelanggan.
            </p>
            <p className="text-secondary leading-relaxed mb-6">
              Setiap buket yang kami buat menggunakan bahan premium dan dikreasikan dengan penuh perhatian terhadap detail. Kami percaya bahwa setiap buket memiliki cerita uniknya sendiri.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { n: "500+", l: "Buket Terjual" },
                { n: "3+", l: "Tahun Pengalaman" },
                { n: "100%", l: "Kepuasan" },
              ].map((s) => (
                <div key={s.l} className="text-center p-4 rounded-2xl bg-white border border-border">
                  <p className="text-3xl font-bold gradient-text">{s.n}</p>
                  <p className="text-sm text-secondary mt-1">{s.l}</p>
                </div>
              ))}
            </div>

            <Link href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={18} />
              Hubungi Kami
            </Link>
          </div>
        </div>

        {/* Store Info */}
        <div className="mt-16">
          <h2 className="text-center section-title mb-8">Lokasi Toko</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-pastel/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">Store 1</h3>
                  <p className="text-secondary">Unib Belakang, Depan Lapas Perempuan</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-primary">
                    <Clock size={16} />
                    08.00 - 21.00 WIB
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-mint-pastel/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">Store 2</h3>
                  <p className="text-secondary">Poltekes Jl. Seruni, Depan Indomaret</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-primary">
                    <Clock size={16} />
                    08.00 - 17.00 WIB
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/catalog" className="btn-primary">
            Lihat Katalog Produk
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}