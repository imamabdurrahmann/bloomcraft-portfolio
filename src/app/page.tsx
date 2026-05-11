"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  MessageCircle,
  MapPin,
  Instagram,
  ChevronRight,
  ArrowRight,
  Clock,
  Sparkles,
  Flower2,
  Gift,
  Heart,
  Truck,
} from "lucide-react";

const WHATSAPP_NUMBER = "6281234567890";

function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo BloomCraft, saya ingin bertanya tentang buket bunga 💐")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span>Pesan via WhatsApp</span>
    </a>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Beranda" },
    { href: "#catalog", label: "Katalog" },
    { href: "#features", label: "Keunggulan" },
    { href: "#calculator", label: "Kalkulator" },
    { href: "#gallery", label: "Galeri" },
    { href: "#testimonials", label: "Testimoni" },
  ];

  return (
    <header className="header">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
        <a href="#" className="font-display text-2xl font-bold gradient-text">
          BloomCraft
        </a>

        <ul className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex btn-primary text-sm"
        >
          <MessageCircle size={18} />
          Pesan
        </a>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t border-border overflow-hidden">
            <ul className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav-link block" onClick={() => setMobileOpen(false)}>{link.label}</a>
                </li>
              ))}
              <li className="pt-2">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center">
                  <MessageCircle size={18} />
                  Pesan via WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="hero-content">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-border mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-secondary">Local Business • Lebong, Bengkulu</span>
            </motion.div>

            <h1 className="section-title mb-4">
              Keindahan <span className="gradient-text">Berkembang</span> di Tangan Terampil
            </h1>

            <p className="text-lg text-secondary mb-8 leading-relaxed">
              Kami menciptakan buket bunga buatan premium dengan sentukan personal untuk setiap momen spesial Anda.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo BloomCraft, saya ingin pesan buket bunga 💐")}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={20} />
                Pesan Sekarang
              </a>
              <a href="#catalog" className="btn-primary">
                Lihat Katalog
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&q=80" alt="Buket Bunga Premium" width={800} height={1000} className="w-full" priority />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-rose-pastel opacity-60 blur-2xl animate-float" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-mint-pastel opacity-60 blur-2xl animate-float-delay-2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const catalogItems = [
  { name: "Buket Custom", count: 12, image: "https://images.unsplash.com/photo-1529139374472-7a8c22aa5c4b?w=600&q=80", desc: "Desain sesuai keinginan" },
  { name: "Bunga Papan", count: 8, image: "https://images.unsplash.com/photo-1494282484285-a6a7cfe0712d?w=600&q=80", desc: "Untuk berbagai acara" },
  { name: "Bunga Pernikahan", count: 6, image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", desc: "Kreasi spesial" },
];

function Catalog() {
  return (
    <section id="catalog" className="section bg-[var(--muted)] bg-opacity-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">Koleksi Kami</span>
          <h2 className="section-title mt-2">Kategori Produk</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {catalogItems.map((item, i) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative rounded-2xl overflow-hidden cursor-pointer" style={{ aspectRatio: "4/5" }}>
              <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-2xl font-bold mb-1">{item.name}</h3>
                <p className="text-sm opacity-80 mb-2">{item.desc}</p>
                <span className="text-xs font-medium px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">{item.count} Desain</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: <Sparkles className="w-8 h-8" />, title: "Premium Quality", desc: "Bahan berkualitas tinggi dengan tampilan realistis", color: "pastel-rose", large: true },
  { icon: <Flower2 className="w-6 h-6" />, title: "Custom Design", desc: "Bebas request sesuai tema", color: "pastel-mint" },
  { icon: <Heart className="w-6 h-6" />, title: "Made with Love", desc: "Dibuat dengan penuh perhatian", color: "pastel-lavender" },
  { icon: <Gift className="w-6 h-6" />, title: "Gift Packaging", desc: "Packing cantik dan elegan", color: "pastel-peach", large: true },
  { icon: <Truck className="w-6 h-6" />, title: "Pengiriman Lokal", desc: "Gratis ongkir Lebong & Bengkulu", color: "pastel-sky" },
];

function Features() {
  return (
    <section id="features" className="section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">Kenapa Memilih Kami</span>
          <h2 className="section-title mt-2">Keunggulan BloomCraft</h2>
        </motion.div>

        <div className="bento-grid">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`bento-item ${f.color} ${f.large ? "bento-large" : ""}`}>
              <div className="w-14 h-14 rounded-2xl bg-white/60 flex items-center justify-center text-primary mb-4">{f.icon}</div>
              <h3 className="font-display text-xl font-bold text-primary mb-2">{f.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Calculator() {
  const [money, setMoney] = useState(100000);
  const [fee, setFee] = useState(35000);
  const [addon, setAddon] = useState(0);

  const formatCurrency = (n: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n);
  const presets = [50000, 100000, 200000, 500000, 1000000];

  const sendOrder = () => {
    const text = encodeURIComponent(`Halo BloomCraft! Mau pesan Money Bouquet:\n\n📦 Nominal: ${formatCurrency(money)}\n🎀 Jasa Rangkai: ${formatCurrency(fee)}\n✨ Add-on: ${formatCurrency(addon)}\n💰 Total: ${formatCurrency(money + fee + addon)}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section id="calculator" className="section bg-[var(--muted)] bg-opacity-30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">Kalkulator Harga</span>
          <h2 className="section-title mt-2">Money Bouquet</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="price-calc-card">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-secondary mb-3">Nominal Uang</label>
                <div className="flex items-center gap-3 mb-3">
                  <button onClick={() => setMoney(Math.max(10000, money - 10000))} className="w-12 h-12 rounded-full bg-white border-2 border-border flex items-center justify-center text-xl font-bold hover:border-primary transition-colors">-</button>
                  <div className="flex-1 text-center">
                    <input type="number" value={money} onChange={(e) => setMoney(Math.max(10000, Math.min(5000000, parseInt(e.target.value) || 0)))} className="price-calc-input text-center" />
                  </div>
                  <button onClick={() => setMoney(Math.min(5000000, money + 10000))} className="w-12 h-12 rounded-full bg-white border-2 border-border flex items-center justify-center text-xl font-bold hover:border-primary transition-colors">+</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {presets.map((p) => (
                    <button key={p} onClick={() => setMoney(p)} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${money === p ? "bg-primary text-white" : "bg-white text-secondary hover:border-primary border border-border"}`}>
                      {formatCurrency(p).replace(",00", "")}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-secondary mb-3">Jasa Rangkai</label>
                <div className="flex gap-2">
                  {[25000, 35000, 50000].map((f) => (
                    <button key={f} onClick={() => setFee(f)} className={`flex-1 py-3 rounded-xl font-medium transition-all ${fee === f ? "bg-primary text-white shadow-lg" : "bg-white text-secondary hover:border-primary border border-border"}`}>
                      {formatCurrency(f).replace(",00", "")}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-secondary mb-3">Add-on</label>
                <div className="grid grid-cols-2 gap-2">
                  {[{ v: 0, l: "Tanpa", i: "—" }, { v: 10000, l: "Kartu", i: "💌" }, { v: 15000, l: "Bunga", i: "🌸" }, { v: 25000, l: "Teddy", i: "🧸" }].map((a) => (
                    <button key={a.v} onClick={() => setAddon(a.v)} className={`p-3 rounded-xl text-left transition-all ${addon === a.v ? "bg-primary text-white" : "bg-white text-secondary border border-border"}`}>
                      <span className="text-lg">{a.i}</span>
                      <span className="block text-xs mt-1">{a.l}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-6 text-center">
                <p className="text-sm font-medium text-secondary mb-2">Estimasi Total</p>
                <p className="price-display mb-6">{formatCurrency(money + fee + addon)}</p>
                <div className="space-y-3 text-left text-sm mb-6">
                  <div className="flex justify-between py-2 border-b border-border"><span className="text-secondary">Nominal</span><span className="font-semibold">{formatCurrency(money)}</span></div>
                  <div className="flex justify-between py-2 border-b border-border"><span className="text-secondary">Jasa Rangkai</span><span className="font-semibold">{formatCurrency(fee)}</span></div>
                  {addon > 0 && <div className="flex justify-between py-2 border-b border-border"><span className="text-secondary">Add-on</span><span className="font-semibold">{formatCurrency(addon)}</span></div>}
                </div>
                <button onClick={sendOrder} className="btn-whatsapp w-full justify-center">
                  <MessageCircle size={20} />
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80", alt: "Graduation" },
  { src: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&q=80", alt: "Money" },
  { src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400&q=80", alt: "Floral" },
  { src: "https://images.unsplash.com/photo-1487537273382-9ea71699a8bb?w=400&q=80", alt: "Romance" },
  { src: "https://images.unsplash.com/photo-1518882605630-8eb6933f4b9b?w=400&q=80", alt: "Birthday" },
];

function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">Portofolio</span>
          <h2 className="section-title mt-2">Karya Kami</h2>
        </motion.div>

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="gallery-item">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Lihat Semua di Instagram <ChevronRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const testimonials = [
  { text: "Buket graduation-nya cantik banget! Exactly seperti yang saya minta.", name: "Rina Wulandari", loc: "Curup, Lebong" },
  { text: "Sudah 3 kali pesan di BloomCraft. Kualitasnya konsisten dan pelayanannya ramah!", name: "Ahmad Fauzi", loc: "Bengkulu Utara" },
  { text: "Bunga papan arrived perfectly! Warnanya tetap segar dan desainnya elegan.", name: "Dewi Septiani", loc: "Kota Bengkulu" },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActive((a) => (a + 1) % 3), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section bg-[var(--muted)] bg-opacity-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">Testimoni</span>
          <h2 className="section-title mt-2">Kata Pelanggan Kami</h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => <svg key={i} viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>)}
              </div>
              <p className="text-lg mb-6 leading-relaxed">"{testimonials[active].text}"</p>
              <p className="font-semibold text-primary">{testimonials[active].name}</p>
              <p className="text-sm text-secondary">{testimonials[active].loc}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className={`h-3 rounded-full transition-all ${i === active ? "w-8 bg-primary" : "w-3 bg-border hover:bg-primary/50"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80" alt="Workshop" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-semibold tracking-wider text-primary uppercase">Tentang Kami</span>
            <h2 className="section-title mt-2">Diciptakan dengan Cinta</h2>
            <p className="text-secondary mt-4 leading-relaxed">BloomCraft lahir dari kecintaan terhadap keindahan bunga dan dedikasi untuk menghadirkan momen istimewa.</p>
            <p className="text-secondary mt-4 leading-relaxed">Setiap buket dibuat dengan bahan premium dan perhatian terhadap detail.</p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {[{ n: "500+", l: "Buket Terjual" }, { n: "3+", l: "Tahun Pengalaman" }, { n: "100%", l: "Kepuasan" }].map((s) => (
                <div key={s.l} className="text-center p-4 rounded-2xl bg-white border border-border">
                  <p className="text-3xl font-bold gradient-text">{s.n}</p>
                  <p className="text-sm text-secondary mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">BloomCraft</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">Membuat momen spesial Anda lebih berkesan dengan buket bunga buatan premium handmade.</p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-3.32v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              {["Beranda", "Katalog", "Keunggulan", "Galeri", "Testimoni"].map((n) => (
                <li key={n}><a href="#" className="text-white/70 hover:text-white">{n}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Info Pengiriman</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-rose-pastel" /><span>Kabupaten Lebong & Provinsi Bengkulu</span></div>
              <div className="flex items-start gap-2"><Clock size={16} className="mt-0.5 text-rose-pastel" /><span>Senin-Sabtu: 08.00 - 20.00 WIB<br />Minggu: 09.00 - 17.00 WIB</span></div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © 2025 BloomCraft. Dibuat dengan ❤️ di Lebong, Bengkulu
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Catalog />
      <Features />
      <Calculator />
      <About />
      <Gallery />
      <Testimonials />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
