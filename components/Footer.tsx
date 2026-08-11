"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-dark)",
        color: "var(--text-light)",
        borderTop: "1px solid var(--border-dark)",
        paddingTop: "5rem",
        paddingBottom: "2.5rem"
      }}
    >
      <div className="container">
        {/* Top Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem"
          }}
        >
          {/* Column 1: Brand Info */}
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem", textDecoration: "none" }}>
              <Image
                src={siteConfig.logoImage}
                alt={siteConfig.name}
                width={48}
                height={48}
                style={{ filter: "brightness(0) invert(1)", objectFit: "contain" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.35rem",
                  fontWeight: 600,
                  color: "#ffffff"
                }}
              >
                The Tulip Touch
              </span>
            </Link>

            <p
              style={{
                fontFamily: "var(--font-script)",
                fontSize: "1.6rem",
                color: "var(--accent-gold)",
                marginBottom: "0.75rem",
                lineHeight: 1.2
              }}
            >
              {siteConfig.tagline}
            </p>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                color: "var(--text-light-muted)",
                lineHeight: 1.6,
                maxWidth: "300px"
              }}
            >
              Vadodara&apos;s premier art café experience. Serving handcrafted coffee, signature pasta, and artisanal desserts in an enchanting black &amp; white baroque space.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent-gold)",
                marginBottom: "1.25rem"
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li>
                <Link href="/" style={{ color: "var(--text-light-muted)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "0.85rem", transition: "color 0.2s" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" style={{ color: "var(--text-light-muted)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "0.85rem", transition: "color 0.2s" }}>
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" style={{ color: "var(--text-light-muted)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "0.85rem", transition: "color 0.2s" }}>
                  Gallery &amp; Experience
                </Link>
              </li>
              <li>
                <Link href="/visit" style={{ color: "var(--text-light-muted)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "0.85rem", transition: "color 0.2s" }}>
                  Visit &amp; Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Info */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent-gold)",
                marginBottom: "1.25rem"
              }}
            >
              Hours &amp; Days
            </h4>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-light-muted)", marginBottom: "0.4rem" }}>
              Tue – Sun: <strong style={{ color: "#ffffff" }}>11:00 AM – 11:00 PM</strong>
            </p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-light-muted)", marginBottom: "1.25rem" }}>
              Monday: <span style={{ fontStyle: "italic" }}>Closed</span>
            </p>

            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent-gold)",
                marginBottom: "0.75rem"
              }}
            >
              Online Delivery
            </h4>
            <a
              href={siteConfig.swiggyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "#ffffff",
                textDecoration: "underline",
                textUnderlineOffset: "3px"
              }}
            >
              Order via Swiggy →
            </a>
          </div>

          {/* Column 4: Location & Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent-gold)",
                marginBottom: "1.25rem"
              }}
            >
              Location &amp; Phone
            </h4>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--text-light-muted)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
              Opposite Galleria Mall, Prafull Society, Tarangan Society, Akota, Vadodara 390007
            </p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.95rem", color: "#ffffff", fontWeight: 600 }}>
              <a href={`tel:${siteConfig.phoneClean}`} style={{ color: "inherit", textDecoration: "none" }}>
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Strip */}
        <div
          style={{
            borderTop: "1px solid var(--border-dark)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem"
          }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-light-muted)" }}>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Vadodara, Gujarat.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              background: "none",
              border: "1px solid var(--border-dark)",
              color: "var(--text-light)",
              padding: "0.5rem 1rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem"
            }}
          >
            Back To Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
