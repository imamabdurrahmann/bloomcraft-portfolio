"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Flower2,
  Gift,
  Heart,
  Star,
  Clock,
  MapPin,
  Instagram,
  ChevronRight,
  Sparkles,
  Package,
  Truck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

// WhatsApp number - change this to your actual number
const WHATSAPP_NUMBER = "6281234567890";

function WhatsAppButton() {
  const message = encodeURIComponent(
    "Halo BloomCraft, saya ingin bertanya tentang buket bunga 💐"
  );

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <svg viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span>Pesan via WhatsApp</span>
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        {/* Desktop Nav */}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <ul className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                >
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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-border mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-secondary">
                Local Business • Lebong, Bengkulu
              </span>
            </motion.div>

            <h1 className="section-title mb-4">
              Keindahan <span className="gradient-text">Berkembang</span> di
              Tangan Terampil
            </h1>

            <p className="text-lg text-secondary mb-8 leading-relaxed">
              Kami menciptakan buket bunga buatan premium dengan sentuhan
              personal untuk setiap momen spesial Anda. Setiap helai bunga
              dibuat dengan cinta dan presisi.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo BloomCraft, saya ingin pesan buket bunga 💐")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={20} />
                Pesan Sekarang
              </a>
              <a href="#catalog" className="btn-primary bg-secondary text-primary hover:bg-secondary/80">
                Lihat Katalog
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&q=80"
                alt="Buket Bunga Premium"
                className="rounded-3xl shadow-2xl w-full"
                style={{ aspectRatio: "4/5" }}
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-rose-pastel opacity-60 blur-2xl floating" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-mint-pastel opacity-60 blur-2xl floating floating-delay-2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Catalog() {
  const categories = [
    {
      name: "Buket Custom",
      count: 12,
      image: "https://images.unsplash.com/photo-1529139374472-7a8c22aa5c4b?w=600&q=80",
      description: "Desain sesuai keinginan Anda",
    },
    {
      name: "Bunga Papan",
      count: 8,
      image: "https://images.unsplash.com/photo-1494282484285-a6a7cfe0712d?w=600&q=80",
      description: "Bunga papan untuk berbagai acara",
    },
    {
      name: "Bunga Pernikahan",
      count: 6,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
      description: "Kreasi spesial untuk hari bahagia",
    },
  ];

  return (
    <section id="catalog" className="section bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">
            Koleksi Kami
          </span>
          <h2 className="section-title mt-2">Kategori Produk</h2>
          <p className="section-subtitle mx-auto mt-4">
            Pilihan buket bunga untuk berbagai momen spesial Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ aspectRatio: "4/5" }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-display text-2xl font-bold mb-1">{cat.name}</h3>
                <p className="text-sm opacity-80 mb-2">{cat.description}</p>
                <span className="text-xs font-medium px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                  {cat.count} Desain
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Menggunakan bahan bunga buatan berkualitas tinggi dengan tampilan realistis",
      color: "pastel-rose",
      size: "large",
    },
    {
      icon: <Flower2 className="w-6 h-6" />,
      title: "Custom Design",
      description: "Bebas request desain sesuai tema dan warna favorit",
      color: "pastel-mint",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Made with Love",
      description: "Setiap buket dibuat dengan penuh cinta dan perhatian",
      color: "pastel-lavender",
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Gift Packaging",
      description: "Packing cantik dan elegan untuk hadiah spesial",
      color: "pastel-peach",
      size: "large",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Pengiriman Lokal",
      description: "Gratis ongkir ke seluruh Lebong & Bengkulu",
      color: "pastel-sky",
    },
  ];

  return (
    <section id="features" className="section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">
            Kenapa Memilih Kami
          </span>
          <h2 className="section-title mt-2">Keunggulan BloomCraft</h2>
          <p className="section-subtitle mx-auto mt-4">
            Komitmen kami untuk memberikan yang terbaik untuk setiap pelanggan
          </p>
        </motion.div>

        <div className="bento-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bento-item ${feature.size === "large" ? "bento-large" : ""} ${feature.color}`}
            >
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MoneyBouquetCalculator() {
  const [moneyAmount, setMoneyAmount] = useState(100000);
  const [arrangementFee, setArrangementFee] = useState(35000);
  const [extraAddon, setExtraAddon] = useState(0);

  const minMoney = 10000;
  const maxMoney = 5000000;
  const stepMoney = 10000;

  const presetAmounts = [50000, 100000, 200000, 500000, 1000000];

  const handleMoneyChange = (delta: number) => {
    setMoneyAmount((prev) => Math.max(minMoney, Math.min(maxMoney, prev + delta)));
  };

  const basePrice = arrangementFee + extraAddon;
  const totalPrice = basePrice + moneyAmount;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const sendToWhatsApp = () => {
    const message = encodeURIComponent(
      `Halo BloomCraft! Saya ingin pesan Money Bouquet:\n\n` +
      `📦 Nominal Uang: ${formatCurrency(moneyAmount)}\n` +
      `🎀 Jasa Rangkai: ${formatCurrency(arrangementFee)}\n` +
      `✨ Add-on: ${formatCurrency(extraAddon)}\n` +
      `💰 Total: ${formatCurrency(totalPrice)}\n\n` +
      `Mohon info lebih lanjut ya!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="calculator" className="section bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">
            Kalkulator Harga
          </span>
          <h2 className="section-title mt-2">Money Bouquet</h2>
          <p className="section-subtitle mx-auto mt-4">
            Hitung estimasi harga buket uang sesuai budget Anda
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="price-calc-card"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              {/* Money Amount */}
              <div>
                <label className="block text-sm font-semibold text-secondary mb-3">
                  Nominal Uang
                </label>
                <div className="flex items-center gap-3 mb-3">
                  <button
                    onClick={() => handleMoneyChange(-stepMoney)}
                    className="w-12 h-12 rounded-full bg-white border-2 border-border flex items-center justify-center text-xl font-bold hover:border-primary transition-colors"
                  >
                    -
                  </button>
                  <div className="flex-1 text-center">
                    <input
                      type="number"
                      value={moneyAmount}
                      onChange={(e) =>
                        setMoneyAmount(
                          Math.max(
                            minMoney,
                            Math.min(maxMoney, parseInt(e.target.value) || 0)
                          )
                        )
                      }
                      className="price-calc-input text-center"
                    />
                  </div>
                  <button
                    onClick={() => handleMoneyChange(stepMoney)}
                    className="w-12 h-12 rounded-full bg-white border-2 border-border flex items-center justify-center text-xl font-bold hover:border-primary transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Preset Buttons */}
                <div className="flex flex-wrap gap-2">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setMoneyAmount(amount)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                        moneyAmount === amount
                          ? "bg-primary text-white"
                          : "bg-white text-secondary hover:border-primary border border-border"
                      }`}
                    >
                      {formatCurrency(amount).replace(",00", "")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Arrangement Fee */}
              <div>
                <label className="block text-sm font-semibold text-secondary mb-3">
                  Jasa Rangkai
                </label>
                <div className="flex gap-2">
                  {[25000, 35000, 50000].map((fee) => (
                    <button
                      key={fee}
                      onClick={() => setArrangementFee(fee)}
                      className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                        arrangementFee === fee
                          ? "bg-primary text-white shadow-lg"
                          : "bg-white text-secondary hover:border-primary border border-border"
                      }`}
                    >
                      {formatCurrency(fee).replace(",00", "")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extra Add-ons */}
              <div>
                <label className="block text-sm font-semibold text-secondary mb-3">
                  Add-on Tambahan (Opsional)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: 0, label: "Tanpa Add-on", icon: "—" },
                    { value: 10000, label: "Kartu Ucapan", icon: "💌" },
                    { value: 15000, label: "Bunga Tambahan", icon: "🌸" },
                    { value: 25000, label: "Boneka Teddy", icon: "🧸" },
                  ].map((addon) => (
                    <button
                      key={addon.value}
                      onClick={() => setExtraAddon(addon.value)}
                      className={`p-3 rounded-xl text-left transition-all ${
                        extraAddon === addon.value
                          ? "bg-primary text-white"
                          : "bg-white text-secondary hover:border-primary border border-border"
                      }`}
                    >
                      <span className="text-lg">{addon.icon}</span>
                      <span className="block text-xs mt-1">{addon.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Section */}
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-6 text-center">
                <p className="text-sm font-medium text-secondary mb-2">
                  Estimasi Total
                </p>
                <p className="price-display gradient-text mb-6">
                  {formatCurrency(totalPrice)}
                </p>

                <div className="space-y-3 text-left text-sm mb-6">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-secondary">Nominal Uang</span>
                    <span className="font-semibold">{formatCurrency(moneyAmount)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-secondary">Jasa Rangkai</span>
                    <span className="font-semibold">{formatCurrency(arrangementFee)}</span>
                  </div>
                  {extraAddon > 0 && (
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-secondary">Add-on</span>
                      <span className="font-semibold">{formatCurrency(extraAddon)}</span>
                    </div>
                  )}
                </div>

                <button onClick={sendToWhatsApp} className="btn-whatsapp w-full justify-center">
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

function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80", alt: "Buket Graduation" },
    { src: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&q=80", alt: "Money Bouquet" },
    { src: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=400&q=80", alt: "Buket Floral" },
    { src: "https://images.unsplash.com/photo-1487537273382-9ea71699a8bb?w=400&q=80", alt: "Buket Romance" },
    { src: "https://images.unsplash.com/photo-1518882605630-8eb6933f4b9b?w=400&q=80", alt: "Buket Birthday" },
  ];

  return (
    <section id="gallery" className="section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">
            Portofolio
          </span>
          <h2 className="section-title mt-2">Karya Kami</h2>
          <p className="section-subtitle mx-auto mt-4">
            Kreasi bunga yang telah menghiasi berbagai momen spesial
          </p>
        </motion.div>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="gallery-item"
            >
              <img src={img.src} alt={img.alt} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Lihat Semua di Instagram
            <ChevronRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "Buket graduation-nya cantik banget! Exactly seperti yang saya minta. Terima kasih BloomCraft, bouquet-nya bikin hari spesial saya makin sempurna!",
      author: "Rina Wulandari",
      location: "Curup, Lebong",
    },
    {
      text: "Sudah 3 kali pesan di BloomCraft untuk hadiah ulang tahun keluarga. Kualitasnya konsisten dan pelayanannya ramah. Highly recommended!",
      author: "Ahmad Fauzi",
      location: "Bengkulu Utara",
    },
    {
      text: "Bunga papan dari BloomCraft arrived perfectly! Warnanya tetap segar dan desainnya elegan. Pasti repeat order untuk acara kantor.",
      author: "Dewi Septiani",
      location: "Kota Bengkulu",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="section bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">
            Testimoni
          </span>
          <h2 className="section-title mt-2">Kata Pelanggan Kami</h2>
          <p className="section-subtitle mx-auto mt-4">
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="testimonial-card"
            >
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                "{testimonials[activeIndex].text}"
              </p>
              <p className="font-semibold text-primary">
                {testimonials[activeIndex].author}
              </p>
              <p className="text-sm text-secondary">
                {testimonials[activeIndex].location}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-primary"
                    : "bg-border hover:bg-primary/50"
                }`}
              />
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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80"
              alt="Workshop BloomCraft"
              className="rounded-3xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold tracking-wider text-primary uppercase">
              Tentang Kami
            </span>
            <h2 className="section-title mt-2">
              Diciptakan dengan Cinta dan Presisi
            </h2>
            <p className="text-secondary mt-4 leading-relaxed">
              BloomCraft lahir dari kecintaan terhadap keindahan bunga dan
              dedikasi untuk menghadirkan momen istimewa bagi setiap pelanggan.
            </p>
            <p className="text-secondary mt-4 leading-relaxed">
              Setiap buket yang kami buat menggunakan bahan premium dan
              dikreasikan dengan penuh perhatian terhadap detail. Kami percaya
              bahwa setiap buket memiliki cerita uniknya sendiri.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 rounded-2xl bg-white border border-border">
                <p className="text-3xl font-bold gradient-text">500+</p>
                <p className="text-sm text-secondary mt-1">Buket Terjual</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white border border-border">
                <p className="text-3xl font-bold gradient-text">3+</p>
                <p className="text-sm text-secondary mt-1">Tahun Pengalaman</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white border border-border">
                <p className="text-3xl font-bold gradient-text">100%</p>
                <p className="text-sm text-secondary mt-1">Kepuasan</p>
              </div>
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
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              BloomCraft
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Membuat momen spesial Anda lebih berkesan dengan buket bunga
              buatan premium handmade di Lebong, Bengkulu.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-3.32v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              {["Beranda", "Katalog", "Keunggulan", "Galeri", "Testimoni"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Info Pengiriman</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-rose-pastel" />
                <span>Pengiriman ke seluruh Kabupaten Lebong & Provinsi Bengkulu</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 text-rose-pastel" />
                <span>
                  Senin - Sabtu: 08.00 - 20.00 WIB<br />
                  Minggu: 09.00 - 17.00 WIB
                </span>
              </div>
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
  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Catalog />
      <Features />
      <MoneyBouquetCalculator />
      <About />
      <Gallery />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
