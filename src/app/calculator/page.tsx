"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Calculator } from "lucide-react";

const WHATSAPP_NUMBER = "6285173003181";

export default function CalculatorPage() {
  const [money, setMoney] = useState(100000);
  const [fee, setFee] = useState(35000);
  const [addon, setAddon] = useState(0);

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(n);

  const presets = [50000, 100000, 200000, 500000, 1000000];

  const sendOrder = () => {
    const text = encodeURIComponent(
      `Halo Elly's Florist! Mau pesan Money Bouquet:\n\n📦 Nominal: ${formatCurrency(money)}\n🎀 Jasa Rangkai: ${formatCurrency(fee)}\n✨ Add-on: ${formatCurrency(addon)}\n💰 Total: ${formatCurrency(money + fee + addon)}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-wider text-primary uppercase">
            Tools
          </span>
          <h1 className="section-title mt-2">Kalkulator Money Bouquet</h1>
          <p className="text-secondary mt-4 max-w-2xl mx-auto">
            Hitung estimasi harga buket uang sesuai budget Anda
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="price-calc-card"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              {/* Nominal */}
              <div>
                <label className="block text-sm font-semibold text-secondary mb-3">
                  Nominal Uang
                </label>
                <div className="flex items-center gap-3 mb-3">
                  <button
                    onClick={() => setMoney(Math.max(10000, money - 10000))}
                    className="w-12 h-12 rounded-full bg-white border-2 border-border flex items-center justify-center text-xl font-bold hover:border-primary transition-colors"
                  >
                    -
                  </button>
                  <div className="flex-1 text-center">
                    <input
                      type="number"
                      value={money}
                      onChange={(e) => setMoney(Math.max(10000, Math.min(5000000, parseInt(e.target.value) || 0)))}
                      className="price-calc-input text-center"
                    />
                  </div>
                  <button
                    onClick={() => setMoney(Math.min(5000000, money + 10000))}
                    className="w-12 h-12 rounded-full bg-white border-2 border-border flex items-center justify-center text-xl font-bold hover:border-primary transition-colors"
                  >
                    +
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {presets.map((p) => (
                    <button
                      key={p}
                      onClick={() => setMoney(p)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                        money === p
                          ? "bg-primary text-white"
                          : "bg-white text-secondary hover:border-primary border border-border"
                      }`}
                    >
                      {formatCurrency(p).replace(",00", "")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Jasa Rangkai */}
              <div>
                <label className="block text-sm font-semibold text-secondary mb-3">
                  Jasa Rangkai
                </label>
                <div className="flex gap-2">
                  {[25000, 35000, 50000].map((f) => (
                    <button
                      key={f}
                      onClick={() => setFee(f)}
                      className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                        fee === f
                          ? "bg-primary text-white shadow-lg"
                          : "bg-white text-secondary hover:border-primary border border-border"
                      }`}
                    >
                      {formatCurrency(f).replace(",00", "")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-sm font-semibold text-secondary mb-3">
                  Add-on Tambahan
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { v: 0, l: "Tanpa", i: "—" },
                    { v: 10000, l: "Kartu Ucapan", i: "💌" },
                    { v: 15000, l: "Bunga Tambahan", i: "🌸" },
                    { v: 25000, l: "Boneka Teddy", i: "🧸" },
                  ].map((a) => (
                    <button
                      key={a.v}
                      onClick={() => setAddon(a.v)}
                      className={`p-3 rounded-xl text-left transition-all ${
                        addon === a.v
                          ? "bg-primary text-white"
                          : "bg-white text-secondary border border-border"
                      }`}
                    >
                      <span className="text-lg">{a.i}</span>
                      <span className="block text-xs mt-1">{a.l}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Section */}
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  <p className="text-sm font-medium text-secondary">Estimasi Total</p>
                </div>
                <p className="price-display mb-6">{formatCurrency(money + fee + addon)}</p>

                <div className="space-y-3 text-left text-sm mb-6">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-secondary">Nominal Uang</span>
                    <span className="font-semibold">{formatCurrency(money)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-secondary">Jasa Rangkai</span>
                    <span className="font-semibold">{formatCurrency(fee)}</span>
                  </div>
                  {addon > 0 && (
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-secondary">Add-on</span>
                      <span className="font-semibold">{formatCurrency(addon)}</span>
                    </div>
                  )}
                </div>

                <button onClick={sendOrder} className="btn-whatsapp w-full justify-center">
                  <MessageCircle size={20} />
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-secondary">
            Harga di atas adalah estimasi. Harga final bisa berbeda tergantung kompleksitas desain.
          </p>
        </motion.div>
      </div>
    </div>
  );
}