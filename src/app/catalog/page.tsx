"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6285173003181";

const categories = [
  {
    name: "Buket Graduation",
    description: "Buket wisuda dengan desain elegan dan personnal",
    image: "/images/graduation.png",
  },
  {
    name: "Money Bouquet",
    description: "Buket uang dengan berbagai nominal dan desain menarik",
    image: "/images/Money2.png",
  },
  {
    name: "Buket Custom",
    description: "Desain sesuai keinginan dan tema acara Anda",
    image: "/images/bungakustom.png",
  },
  {
    name: "Papan Bunga",
    description: "Bunga papan untuk pernikahan, duka cita, dan congratulation",
    image: "/images/papanbunga.png",
  },
  {
    name: "Buket Pernikahan",
    description: "Buket pengantin dan dekorasi pernikahan",
    image: "/images/Wedding1.png",
  },
  {
    name: "Hand Bouquet",
    description: "Buket tangan untuk hadiah sehari-hari",
    image: "/images/bouquet-1.jpg",
  },
];

export default function CatalogPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase block">
            Koleksi Kami
          </span>
          <h1 className="section-title mt-2">Katalog Produk</h1>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            Pilihan buket bunga buatan untuk berbagai momen spesial Anda
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a
              href="https://lynk.id/ellys"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.46 9H4.54a.54.54 0 0 0-.54.54v9.08a2.16 2.16 0 0 0 2.16 2.16h12.7a2.16 2.16 0 0 0 2.16-2.16V9.54a.54.54 0 0 0-.54-.54m-4.6 12.28h-7.46a.6.6 0 0 1-.6-.6v-4.24a.6.6 0 0 1 .6-.6h7.46a.6.6 0 0 1 .6.6v4.24a.6.6 0 0 1-.6.6m-7.46-11.42a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72m6.72 0a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72"/>
              </svg>
              Katalog Lengkap
            </a>
            <a
              href="https://instagram.com/ellys.flo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849c0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item, i) => (
            <div
              key={item.name}
              className="glass-card overflow-hidden group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-secondary mb-4">{item.description}</p>
                <Link
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Halo, saya tertarik dengan ${item.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2 inline-flex items-center gap-2"
                >
                  <MessageCircle size={16} />
                  Hubungi via WhatsApp
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-secondary mb-4">
            Tidak menemukan yang Anda cari? Kami menerima custom order!
          </p>
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo, saya ingin custom order buket")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={18} />
            Hubungi untuk Custom Order
          </Link>
        </div>
      </div>
    </div>
  );
}
