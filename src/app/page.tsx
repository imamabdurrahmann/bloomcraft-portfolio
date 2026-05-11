"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight, Sparkles, Flower2, Gift, Heart, Truck } from "lucide-react";

const WHATSAPP_NUMBER = "6285173003181";

const features = [
  { icon: <Sparkles className="w-8 h-8" />, title: "Premium Quality", desc: "Bahan berkualitas tinggi" },
  { icon: <Flower2 className="w-8 h-8" />, title: "Custom Design", desc: "Bebas request desain" },
  { icon: <Heart className="w-8 h-8" />, title: "Made with Love", desc: "Dibuat dengan hati" },
  { icon: <Gift className="w-8 h-8" />, title: "Gift Packaging", desc: "Packing cantik" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-content"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-border mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-secondary">Toko: Kota Bengkulu, Bengkulu</span>
              </div>

              <h1 className="section-title mb-4">
                Keindahan <span className="gradient-text">Berkembang</span> di Tangan Terampil
              </h1>

              <p className="text-lg text-secondary mb-8 leading-relaxed">
                Buket bunga buatan premium handmade untuk graduation, anniversary, dan momen spesial Anda.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <MessageCircle size={20} />
                  Pesan Sekarang
                </Link>
                <Link href="/catalog" className="btn-primary">
                  Lihat Katalog
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&q=80"
                  alt="Buket Bunga Premium"
                  width={800}
                  height={1000}
                  className="w-full"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-rose-pastel opacity-60 blur-2xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-mint-pastel opacity-60 blur-2xl animate-float-delay-2" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider text-primary uppercase">Kenapa Memilih Kami</span>
            <h2 className="section-title mt-2">Keunggulan Elly&apos;s Florist</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/60 flex items-center justify-center text-primary mx-auto mb-4">
                  {f.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-primary">{f.title}</h3>
                <p className="text-sm text-secondary mt-1">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--muted)] bg-opacity-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-4">Siap Memesan?</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan buket impian Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/catalog" className="btn-primary">
                Lihat Katalog Produk
                <ArrowRight size={18} />
              </Link>
              <Link href="/calculator" className="btn-whatsapp">
                <MessageCircle size={18} />
                Hitung Harga Money Bouquet
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}