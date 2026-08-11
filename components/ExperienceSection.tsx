"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import AnimatedSection from "./AnimatedSection";

export default function ExperienceSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#121212",
        color: "#ffffff"
      }}
    >
      {/* Background Image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <Image
          src="/images/interior2.png"
          alt="The Tulip Touch Café Baroque Interior Alcoves"
          fill
          style={{
            objectFit: "cover",
            opacity: 0.45
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(18,18,18,0.7) 0%, rgba(18,18,18,0.85) 100%)"
          }}
        />
      </div>

      {/* Quote & Philosophy Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "850px",
          paddingTop: "6rem",
          paddingBottom: "6rem"
        }}
      >
        <AnimatedSection direction="up">
          <div
            className="font-script"
            style={{
              fontSize: "4rem",
              color: "var(--accent-gold)",
              lineHeight: 0.5,
              marginBottom: "1rem"
            }}
          >
            &ldquo;
          </div>

          <blockquote
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem, 3vw, 2.35rem)",
              fontStyle: "italic",
              lineHeight: 1.4,
              color: "#f5f2ec",
              marginBottom: "2rem"
            }}
          >
            Every visit to The Tulip Touch Café is a journey through art and flavour — a place where extraordinary black &amp; white design meets handcrafted coffee perfection.
          </blockquote>

          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent-gold)",
              marginBottom: "2.5rem"
            }}
          >
            — The Tulip Touch Experience · Vadodara
          </div>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/gallery" className="btn btn-light">
              View Gallery
            </Link>
            <a
              href={siteConfig.swiggyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.6)" }}
            >
              Order Online
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
