"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import AnimatedSection from "./AnimatedSection";

export default function BrandIntro() {
  return (
    <section
      style={{
        backgroundColor: "var(--bg-primary)",
        borderBottom: "1px solid var(--border-color)"
      }}
      className="section-padding"
    >
      <div className="container">
        {/* Asymmetric 2-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(3rem, 6vw, 6rem)",
            alignItems: "center"
          }}
        >
          {/* Left Column — Editorial Photos Composition */}
          <AnimatedSection direction="right" duration={0.6}>
            <div style={{ position: "relative" }}>
              {/* Primary Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "440px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
                }}
              >
                <Image
                  src="/images/outdoor.png"
                  alt="The Tulip Touch Café Exterior Patio"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Overlapping Accent Image */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-2.5rem",
                  right: "-1.5rem",
                  width: "55%",
                  height: "260px",
                  border: "6px solid var(--bg-primary)",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
                  display: "none" // Managed by media query below or styled inline
                }}
                className="brand-intro-accent-img"
              >
                <Image
                  src="/images/interior2.png"
                  alt="Tulip Touch Luxury Booth Interior"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Rating Stamp Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  left: "1.5rem",
                  backgroundColor: "var(--bg-dark)",
                  color: "var(--text-light)",
                  padding: "1rem 1.25rem",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.2)"
                }}
              >
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 700, lineHeight: 1 }}>
                  4.5★
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.2rem" }}>
                  Google Rated
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column — Editorial Story */}
          <AnimatedSection direction="left" duration={0.6} delay={0.2}>
            <div>
              <div className="eyebrow">
                <span>✦ Our Story &amp; Identity</span>
              </div>

              <h2 className="section-title">
                Where Every Corner <br />
                <em>Tells an Artistic Story</em>
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: "1.8rem",
                  color: "var(--accent-gold)",
                  marginBottom: "1.25rem",
                  lineHeight: 1.2
                }}
              >
                An immersive black &amp; white baroque sanctuary in Vadodara
              </p>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem"
                }}
              >
                Nestled opposite Galleria Mall in Akota, {siteConfig.name} is more than a café — it is an immersive living art gallery. Step into our baroque-inspired world where hand-drawn monochromatic wall illustrations, ornate ceiling artwork, and chevron floors transport you to a timeless era of sophistication.
              </p>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "2rem"
                }}
              >
                We serve meticulously crafted artisan coffees, signature pasta creations, craft sandwiches, and decadent bakery desserts — prepared with the same devotion to artistry that defines our physical space.
              </p>

              {/* Stats Bar */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid var(--border-color)",
                  marginBottom: "2rem"
                }}
              >
                <div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 700 }}>
                    2,043+
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Happy Guests
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 700 }}>
                    {siteConfig.priceRange.split(" ")[0]}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Per Person
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 700 }}>
                    100%
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Art Café Vibe
                  </div>
                </div>
              </div>

              <Link href="/menu" className="btn btn-primary">
                Explore Full Menu →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 640px) {
          .brand-intro-accent-img {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
