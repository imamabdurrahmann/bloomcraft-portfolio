"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const WHATSAPP_NUMBER = "6285173003181";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/catalog", label: "Katalog" },
  { href: "/gallery", label: "Galeri" },
  { href: "/calculator", label: "Kalkulator" },
  { href: "/about", label: "Tentang" },
  { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16">
        <Link href="/" className="font-display text-2xl font-bold gradient-text">
          Elly&apos;s Florist
        </Link>

        <ul className="hidden md:flex gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex btn-primary text-sm"
        >
          <MessageCircle size={18} />
          Pesan
        </Link>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <ul className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="nav-link block"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center"
                >
                  <MessageCircle size={18} />
                  Pesan via WhatsApp
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}