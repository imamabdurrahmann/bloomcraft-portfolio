"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6285173003181";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80", alt: "Money Bouquet Graduation" },
  { src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&q=80", alt: "Floral Bouquet" },
  { src: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&q=80", alt: "Money Bouquet" },
  { src: "https://images.unsplash.com/photo-1487537273382-9ea71699a8bb?w=400&q=80", alt: "Romantic Bouquet" },
  { src: "https://images.unsplash.com/photo-1518882605630-8eb6933f4b9b?w=400&q=80", alt: "Birthday Surprise" },
  { src: "https://images.unsplash.com/photo-1529139374472-7a8c22aa5c4b?w=400&q=80", alt: "Custom Design" },
  { src: "https://images.unsplash.com/photo-1494282484285-a6a7cfe0712d?w=400&q=80", alt: "Flower Stand" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80", alt: "Wedding Bouquet" },
];

export default function GalleryPage() {
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
            Portofolio
          </span>
          <h1 className="section-title mt-2">Galeri Karya</h1>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            Kreasi bunga yang telah menghiasi berbagai momen spesial pelanggan kami
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`relative rounded-2xl overflow-hidden ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              style={{ aspectRatio: i === 0 ? "1" : "1" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              />
            </motion.div>
          ))}
        </div>

        {/* Social CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-secondary mb-4">
            Follow Instagram kami untuk melihat lebih banyak karya!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com/ellys.flo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Instagram size={18} />
              @ellys.flo
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={18} />
              Pesan Sekarang
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}