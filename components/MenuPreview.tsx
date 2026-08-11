"use client";

import { useState } from "react";
import Link from "next/link";
import { menuCategories } from "@/data/menu";
import AnimatedSection from "./AnimatedSection";

export default function MenuPreview() {
  const [activeTab, setActiveTab] = useState(menuCategories[0].id);

  const currentCategory = menuCategories.find((cat) => cat.id === activeTab) || menuCategories[0];

  return (
    <section
      style={{
        backgroundColor: "var(--bg-primary)",
        borderBottom: "1px solid var(--border-color)"
      }}
      className="section-padding"
    >
      <div className="container">
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center" style={{ marginBottom: "3rem" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span>✦ Thoughtfully Crafted Selections ✦</span>
          </div>
          <h2 className="section-title">
            Explore Our <em className="font-script" style={{ fontSize: "1.2em", color: "var(--accent-gold)" }}>Curated Menu</em>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Real artisan ingredients, prepared fresh to order. Select a category below to browse items and prices.
          </p>
        </AnimatedSection>

        {/* Category Navigation Tabs */}
        <AnimatedSection direction="up" delay={0.15}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
              marginBottom: "3.5rem"
            }}
          >
            {menuCategories.map((cat) => {
              const isActive = cat.id === activeTab;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0.65rem 1.4rem",
                    backgroundColor: isActive ? "var(--bg-dark)" : "transparent",
                    color: isActive ? "var(--text-light)" : "var(--text-primary)",
                    border: isActive ? "1px solid var(--bg-dark)" : "1px solid var(--border-color)",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  {cat.title.split(" ")[0]} {cat.title.split(" ")[1]}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Menu Content Box — Matching Flora Reference Layout */}
        <AnimatedSection direction="up" delay={0.25}>
          <div
            style={{
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
              padding: "clamp(2rem, 5vw, 4rem)",
              maxWidth: "1100px",
              margin: "0 auto"
            }}
          >
            {/* Category Header in Curvy Script Font */}
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h3
                className="font-script"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  color: "var(--text-primary)",
                  lineHeight: 1.1,
                  marginBottom: "0.5rem"
                }}
              >
                {currentCategory.title}
              </h3>
              {currentCategory.subtitle && (
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    maxWidth: "550px",
                    margin: "0 auto"
                  }}
                >
                  {currentCategory.subtitle}
                </p>
              )}
            </div>

            {/* Menu Items Grid — Matching Flora Reference Monospaced Layout */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                columnGap: "3.5rem",
                rowGap: "2rem"
              }}
            >
              {currentCategory.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    borderBottom: "1px dashed var(--border-color)",
                    paddingBottom: "1rem"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "1rem",
                      marginBottom: "0.35rem"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.95rem",
                          fontWeight: 500,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          color: "var(--text-primary)"
                        }}
                      >
                        {item.name}
                      </span>
                      {item.isBestseller && (
                        <span
                          style={{
                            fontFamily: "var(--font-script)",
                            fontSize: "1.1rem",
                            color: "var(--accent-gold)"
                          }}
                        >
                          (Popular)
                        </span>
                      )}
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.95rem",
                        fontWeight: 600,
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
                        fontSize: "0.825rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.5
                      }}
                    >
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <Link href="/menu" className="btn btn-primary btn-script">
                View Complete Menu with All Prices &rarr;
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
