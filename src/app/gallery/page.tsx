"use client";

import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6285173003181";

const galleryImages = [
  { src: "/images/graduation.png", alt: "Bouquet Graduation" },
  { src: "/images/Money2.png", alt: "Money Bouquet" },
  { src: "/images/bungakustom.png", alt: "Bouquet Custom" },
  { src: "/images/papanbunga.png", alt: "Papan Bunga" },
  { src: "/images/Wedding1.png", alt: "Wedding Bouquet" },
  { src: "/images/bouquet-1.jpg", alt: "Hand Bouquet" },
  { src: "/images/bouquet-3.jpg", alt: "Bouquet Floral" },
  { src: "/images/bouquet-4.jpg", alt: "Bouquet Pink" },
  { src: "/images/bouquet-5.jpg", alt: "Bouquet Gold" },
  { src: "/images/bouquet-6.jpg", alt: "Bouquet Elegant" },
  { src: "/images/kustom2.png", alt: "Custom Bouquet 2" },
  { src: "/images/money1.png", alt: "Money Bouquet 2" },
  { src: "/images/papan2.png", alt: "Papan Bunga 2" },
  { src: "/images/Screenshot_20260511_160748_Instagram.png", alt: "Instagram Post 1" },
  { src: "/images/Screenshot_20260511_191949_Instagram.png", alt: "Instagram Post 2" },
  { src: "/images/Screenshot_20260511_192007_Instagram.png", alt: "Instagram Post 3" },
  { src: "/images/Screenshot_20260511_192114_Instagram.png", alt: "Instagram Post 4" },
  { src: "/images/Screenshot_20260511_192129_Instagram.png", alt: "Instagram Post 5" },
  { src: "/images/Screenshot_20260511_192145_Instagram.png", alt: "Instagram Post 6" },
  { src: "/images/Screenshot_20260511_192218_Instagram.png", alt: "Instagram Post 7" },
  { src: "/images/Screenshot_20260511_192232_Instagram.png", alt: "Instagram Post 8" },
  { src: "/images/Screenshot_20260511_192303_Instagram.png", alt: "Instagram Post 9" },
  { src: "/images/Screenshot_20260511_192321_Instagram.png", alt: "Instagram Post 10" },
  { src: "/images/Screenshot_20260511_192349_Instagram.png", alt: "Instagram Post 11" },
  { src: "/images/Screenshot_20260511_192427_Instagram.png", alt: "Instagram Post 12" },
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

        {/* Gallery Grid - Fixed to remove black bars */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-1">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden bg-gradient-to-br from-rose-pastel/20 to-mint-pastel/20 ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover scale-[1.08] hover:scale-[1.13] transition-transform duration-300"
                sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                style={
                  i === 0 ? { objectPosition: "92% center" } :
                  i === 11 ? { objectPosition: "10% center" } : {}
                }
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
