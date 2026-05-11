"use client";

import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6285173003181";

const galleryImages = [
  { src: "/images/bouquet-1.jpg", alt: "Bouquet 1" },
  { src: "/images/bouquet-2.jpg", alt: "Bouquet 2" },
  { src: "/images/bouquet-3.jpg", alt: "Bouquet 3" },
  { src: "/images/bouquet-4.jpg", alt: "Bouquet 4" },
  { src: "/images/bouquet-5.jpg", alt: "Bouquet 5" },
  { src: "/images/bouquet-6.jpg", alt: "Bouquet 6" },
];

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase block">
            Portofolio
          </span>
          <h1 className="section-title mt-2">Galeri Karya</h1>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            Kreasi bunga yang telah menghiasi berbagai momen spesial pelanggan kami
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl bg-gray-100 ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
              style={{ position: "relative" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 33vw"}
              />
            </div>
          ))}
        </div>

        {/* Social CTA */}
        <div className="text-center mt-12">
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
        </div>
      </div>
    </div>
  );
}
