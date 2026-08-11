"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "calc(92vh - 76px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#121212",
        color: "#ffffff",
        padding: "4rem 1.5rem"
      }}
    >
      {/* Hero Background Image with Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1
        }}
      >
        <Image
          src={siteConfig.heroImage}
          alt="The Tulip Touch Café Baroque Interior"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.55
          }}
        />
        {/* Vignette Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at center, rgba(18,18,18,0.2) 0%, rgba(18,18,18,0.85) 100%)"
          }}
        />
      </div>

      {/* Hero Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1.25rem"
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--accent-gold)",
              border: "1px solid rgba(197, 160, 89, 0.4)",
              padding: "0.35rem 1rem",
              borderRadius: "50px",
              backgroundColor: "rgba(18, 18, 18, 0.6)",
              backdropFilter: "blur(4px)"
            }}
          >
            ✦ Vadodara&apos;s Iconic Art Café ✦
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)",
            lineHeight: 1.05,
            fontWeight: 400,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
            color: "#ffffff"
          }}
        >
          The Tulip Touch <br />
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 400,
              color: "#f5f2ec",
              fontFamily: "var(--font-serif)"
            }}
          >
            Café
          </span>
        </motion.h1>

        {/* Subtitle Script */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-script)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)",
            color: "var(--accent-gold)",
            marginBottom: "1.75rem",
            lineHeight: 1.2
          }}
        >
          Where Art Meets Flavour in Black &amp; White Grandeur
        </motion.p>

        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            padding: "0.5rem 1.25rem",
            borderRadius: "4px",
            marginBottom: "2.5rem"
          }}
        >
          <div style={{ display: "flex", gap: "2px", color: "#e6c67a" }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} fill="#e6c67a" stroke="none" />
            ))}
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8125rem",
              color: "#f0f0f0",
              letterSpacing: "0.04em"
            }}
          >
            {siteConfig.rating} · {siteConfig.reviewsCount.toLocaleString()} Google Reviews
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: "flex",
            gap: "1.25rem",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <Link href="/menu" className="btn btn-light">
            Explore Menu
          </Link>
          <Link
            href="/visit"
            className="btn btn-outline"
            style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.6)" }}
          >
            Visit Us
          </Link>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem",
          color: "rgba(255, 255, 255, 0.6)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase"
        }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
