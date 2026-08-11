"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { X, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Menu", href: "/menu" },
    { label: "Experience & Gallery", href: "/gallery" },
    { label: "Visit & Directions", href: "/visit" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(18, 18, 18, 0.96)",
            backdropFilter: "blur(12px)",
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "2rem 1.5rem"
          }}
        >
          {/* Top Bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link href="/" onClick={onClose} style={{ display: "flex", alignItems: "center" }}>
              <Image
                src={siteConfig.logoImage}
                alt={siteConfig.name}
                width={50}
                height={50}
                style={{ filter: "brightness(0) invert(1)", objectFit: "contain" }}
              />
            </Link>
            <button
              onClick={onClose}
              aria-label="Close menu"
              style={{
                background: "none",
                border: "none",
                color: "#ffffff",
                cursor: "pointer",
                padding: "0.5rem"
              }}
            >
              <X size={28} />
            </button>
          </div>

          {/* Nav Links */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2rem" }}>
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.25rem",
                    color: "#f5f2ec",
                    textDecoration: "none",
                    fontStyle: "italic"
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Footer Info */}
          <div style={{ borderTop: "1px solid #333333", paddingTop: "1.5rem", marginTop: "auto" }}>
            <p style={{ fontFamily: "var(--font-script)", fontSize: "1.8rem", color: "var(--accent-gold)", marginBottom: "0.75rem" }}>
              {siteConfig.tagline}
            </p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "#a0a0a0", marginBottom: "0.5rem" }}>
              {siteConfig.address.area}, {siteConfig.address.city}
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <a
                href={`tel:${siteConfig.phoneClean}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "#ffffff",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  textDecoration: "none",
                  padding: "0.6rem 1rem",
                  border: "1px solid #444444"
                }}
              >
                <Phone size={14} /> Call Café
              </a>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "#121212",
                  backgroundColor: "#ffffff",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  textDecoration: "none",
                  padding: "0.6rem 1rem"
                }}
              >
                <MapPin size={14} /> Directions
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
