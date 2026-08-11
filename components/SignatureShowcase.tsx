"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";

export default function SignatureShowcase() {
  const showcaseItems = [
    {
      title: "Signature Pesto Basil Pasta",
      category: "Artisan Pasta",
      price: "₹340",
      description: "Rich homemade basil pesto with toasted pine nuts, virgin olive oil, parmesan & grilled garlic crostini.",
      image: "/images/food/food3.png",
      tag: "Chef's Recommendation"
    },
    {
      title: "Pistachio Crepe Rolls",
      category: "Signature Dessert",
      price: "₹260",
      description: "Handcrafted delicate crepes filled with pistachio praline cream, topped with chopped nuts & sweet glaze.",
      image: "/images/food/food1.png",
      tag: "Must Try"
    },
    {
      title: "Chef's Special Shakshuka",
      category: "Brunch Favorite",
      price: "₹320",
      description: "Richly spiced tomato and olive ragu infused with aromatic Mediterranean herbs, served with sourdough baguette.",
      image: "/images/food/food2.png",
      tag: "House Special"
    }
  ];

  return (
    <section
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderBottom: "1px solid var(--border-color)"
      }}
      className="section-padding"
    >
      <div className="container">
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center" style={{ marginBottom: "3.5rem" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span>✦ Handcrafted Culinary Art ✦</span>
          </div>
          <h2 className="section-title">
            Signature Dish <em className="font-script" style={{ fontSize: "1.2em", color: "var(--accent-gold)" }}>Showcase</em>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Every plate at The Tulip Touch Café is prepared with culinary precision and presented with artistic elegance.
          </p>
        </AnimatedSection>

        {/* 3-Column Editorial Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem"
          }}
        >
          {showcaseItems.map((item, idx) => (
            <AnimatedSection key={item.title} direction="up" delay={idx * 0.15}>
              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                className="showcase-card"
              >
                {/* Image Wrapper */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "280px",
                    overflow: "hidden"
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s ease"
                    }}
                    className="showcase-img"
                  />
                  {/* Tag */}
                  <span
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      backgroundColor: "var(--bg-dark)",
                      color: "#ffffff",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "0.35rem 0.75rem"
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginBottom: "0.5rem"
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--text-muted)"
                      }}
                    >
                      {item.category}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: "var(--text-primary)"
                      }}
                    >
                      {item.price}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.35rem",
                      fontWeight: 600,
                      marginBottom: "0.75rem",
                      lineHeight: 1.2
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                      flexGrow: 1
                    }}
                  >
                    {item.description}
                  </p>

                  <Link
                    href="/menu"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      fontWeight: 600
                    }}
                  >
                    View In Menu <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .showcase-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.08);
        }
        .showcase-card:hover .showcase-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
