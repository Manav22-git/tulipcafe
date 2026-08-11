"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import MobileMenu from "./MobileMenu";
import { Menu as MenuIcon, Phone } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar — matching reference */}
      <div
        style={{
          backgroundColor: "#181818",
          color: "#f5f2ec",
          fontSize: "0.75rem",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "0.4rem 1rem",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          zIndex: 51,
          position: "relative"
        }}
      >
        <span>✦ Vadodara&apos;s Premier Art Café ✦</span>
        <span style={{ display: "none" }}>•</span>
        <span className="announcement-hide-mobile">Hours: {siteConfig.hours}</span>
        <span className="announcement-hide-mobile">•</span>
        <a
          href={`tel:${siteConfig.phoneClean}`}
          style={{ color: "#f5f2ec", textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          Call {siteConfig.phone}
        </a>
      </div>

      {/* Main Sticky Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled ? "rgba(248, 245, 240, 0.95)" : "rgba(248, 245, 240, 0.75)",
          backdropFilter: "blur(10px)",
          borderBottom: scrolled ? "1px solid var(--border-color)" : "1px solid transparent",
          transition: "all 0.3s ease"
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "76px"
          }}
        >
          {/* Brand Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
            <Image
              src={siteConfig.logoImage}
              alt={siteConfig.name}
              width={46}
              height={46}
              style={{ objectFit: "contain" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  lineHeight: 1.1
                }}
              >
                The Tulip Touch
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)"
                }}
              >
                Art Café · Vadodara
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem"
            }}
            className="desktop-nav"
          >
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                textDecoration: "none",
                transition: "color 0.2s"
              }}
            >
              Home
            </Link>
            <Link
              href="/menu"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                textDecoration: "none",
                transition: "color 0.2s"
              }}
            >
              Menu
            </Link>
            <Link
              href="/gallery"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                textDecoration: "none",
                transition: "color 0.2s"
              }}
            >
              Gallery & Experience
            </Link>
            <Link
              href="/visit"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-primary)",
                textDecoration: "none",
                transition: "color 0.2s"
              }}
            >
              Visit Us
            </Link>
          </nav>

          {/* Right Action */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="btn btn-outline desktop-cta"
              style={{ padding: "0.6rem 1.25rem", fontSize: "0.75rem" }}
            >
              <Phone size={13} style={{ marginRight: "0.4rem" }} /> +91 91061 83731
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="mobile-hamburger"
              aria-label="Open mobile menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                color: "var(--text-primary)"
              }}
            >
              <MenuIcon size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <style jsx global>{`
        @media (max-width: 900px) {
          .desktop-nav, .desktop-cta, .announcement-hide-mobile {
            display: none !important;
          }
          .mobile-hamburger {
            display: block !important;
          }
        }
        @media (min-width: 901px) {
          .mobile-hamburger {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
