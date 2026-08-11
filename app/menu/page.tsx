"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { menuCategories } from "@/data/menu";
import { siteConfig } from "@/data/site";
import { Phone, ExternalLink } from "lucide-react";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categoriesToDisplay = selectedCategory === "all"
    ? menuCategories
    : menuCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <main style={{ backgroundColor: "var(--bg-primary)" }}>
      <Header />

      {/* Hero Header Banner */}
      <section
        style={{
          backgroundColor: "var(--bg-dark)",
          color: "#ffffff",
          paddingTop: "5rem",
          paddingBottom: "4rem",
          textAlign: "center",
          borderBottom: "1px solid var(--border-dark)"
        }}
      >
        <div className="container">
          <AnimatedSection direction="up">
            <div className="eyebrow" style={{ justifyContent: "center", color: "var(--accent-gold)" }}>
              <span>✦ Real HTML / Text Menu ✦</span>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
                fontWeight: 400,
                color: "#ffffff",
                marginBottom: "1rem"
              }}
            >
              The Art Café <span className="font-script" style={{ color: "var(--accent-gold)" }}>Menu</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.95rem",
                color: "var(--text-light-muted)",
                maxWidth: "650px",
                margin: "0 auto 2rem auto"
              }}
            >
              Handcrafted coffee, gourmet pastas, artisan sandwiches &amp; decadent desserts. Prepared fresh to order at {siteConfig.name}.
            </p>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href={`tel:${siteConfig.phoneClean}`} className="btn btn-light">
                <Phone size={14} style={{ marginRight: "0.4rem" }} /> Call Café to Order
              </a>
              <a href={siteConfig.swiggyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.4)" }}>
                Order on Swiggy <ExternalLink size={14} style={{ marginLeft: "0.4rem" }} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Sticky Selector Bar */}
      <div
        style={{
          position: "sticky",
          top: "76px",
          zIndex: 40,
          backgroundColor: "rgba(248, 245, 240, 0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--border-color)",
          padding: "0.85rem 0"
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap" }}>
          <button
            onClick={() => setSelectedCategory("all")}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.45rem 1rem",
              backgroundColor: selectedCategory === "all" ? "var(--bg-dark)" : "transparent",
              color: selectedCategory === "all" ? "#ffffff" : "var(--text-primary)",
              border: selectedCategory === "all" ? "1px solid var(--bg-dark)" : "1px solid var(--border-color)",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            All Items
          </button>
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.45rem 1rem",
                backgroundColor: selectedCategory === cat.id ? "var(--bg-dark)" : "transparent",
                color: selectedCategory === cat.id ? "#ffffff" : "var(--text-primary)",
                border: selectedCategory === cat.id ? "1px solid var(--bg-dark)" : "1px solid var(--border-color)",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              {cat.title.split(" ")[0]} {cat.title.split(" ")[1]}
            </button>
          ))}
        </div>
      </div>

      {/* Full Text Menu Section */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: "1100px" }}>
          {categoriesToDisplay.map((cat, idx) => (
            <AnimatedSection key={cat.id} direction="up" delay={idx * 0.1} style={{ marginBottom: "5rem" }}>
              {/* Curvy Script Category Heading — High priority requirement! */}
              <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                <h2
                  className="font-script"
                  style={{
                    fontSize: "clamp(2.75rem, 5vw, 4rem)",
                    color: "var(--text-primary)",
                    lineHeight: 1.1,
                    marginBottom: "0.5rem"
                  }}
                >
                  {cat.title}
                </h2>
                {cat.subtitle && (
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                      maxWidth: "600px",
                      margin: "0 auto"
                    }}
                  >
                    {cat.subtitle}
                  </p>
                )}
                <div style={{ width: "60px", height: "1px", backgroundColor: "var(--accent-gold)", margin: "1rem auto 0 auto" }} />
              </div>

              {/* Items Monospaced Two-Column List */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                  columnGap: "4rem",
                  rowGap: "2.25rem"
                }}
              >
                {cat.items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      borderBottom: "1px dashed var(--border-color)",
                      paddingBottom: "1.25rem"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: "1rem",
                        marginBottom: "0.4rem"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "1rem",
                            fontWeight: 600,
                            letterSpacing: "0.03em",
                            textTransform: "uppercase",
                            color: "var(--text-primary)"
                          }}
                        >
                          {item.name}
                        </span>
                        {item.isBestseller && (
                          <span
                            className="font-script"
                            style={{
                              fontSize: "1.2rem",
                              color: "var(--accent-gold)"
                            }}
                          >
                            (Special)
                          </span>
                        )}
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          color: "var(--text-primary)"
                        }}
                      >
                        {item.price}
                      </span>
                    </div>

                    {item.description && (
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.6
                        }}
                      >
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
