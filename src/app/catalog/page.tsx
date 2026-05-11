"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6285173003181";

const categories = [
  {
    name: "Buket Graduation",
    description: "Buket wisuda dengan desain elegan dan personnalisé",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&q=80",
    price: "Mulai Rp 75.000"
  },
  {
    name: "Money Bouquet",
    description: "Buket uang dengan berbagai nominal dan desain menarik",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80",
    price: "Mulai Rp 100.000"
  },
  {
    name: "Buket Custom",
    description: "Desain sesuai keinginan dan tema acara Anda",
    image: "https://images.unsplash.com/photo-1529139374472-7a8c22aa5c4b?w=800&q=80",
    price: "Mulai Rp 50.000"
  },
  {
    name: "Bunga Papan",
    description: "Bunga papan untuk pernikahan, duka cita, dan congratulation",
    image: "https://images.unsplash.com/photo-1494282484285-a6a7cfe0712d?w=800&q=80",
    price: "Mulai Rp 125.000"
  },
  {
    name: "Buket Pernikahan",
    description: "Buket pengantin dan dekorasi pernikahan",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    price: "Mulai Rp 150.000"
  },
  {
    name: "Hand Bouquet",
    description: "Buket tangan untuk hadiah sehari-hari",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&q=80",
    price: "Mulai Rp 35.000"
  },
];

export default function CatalogPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">
            Koleksi Kami
          </span>
          <h1 className="section-title mt-2">Katalog Produk</h1>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            Pilihan buket bunga buatan untuk berbagai momen spesial Anda
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
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
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">{item.price}</span>
                  <Link
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Halo, saya tertarik dengan ${item.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2"
                  >
                    <MessageCircle size={16} />
                    Pesan
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
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
        </motion.div>
      </div>
    </div>
  );
}