"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages, GalleryImage } from "@/data/gallery";
import Lightbox from "./Lightbox";
import AnimatedSection from "./AnimatedSection";
import { Maximize2 } from "lucide-react";

interface GalleryGridProps {
  limit?: number;
  showFilters?: boolean;
}

export default function GalleryGrid({ limit, showFilters = false }: GalleryGridProps) {
  const [filter, setFilter] = useState<string>("all");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredImages = galleryImages.filter(
    (img) => filter === "all" || img.category === filter
  );

  const displayImages = limit ? filteredImages.slice(0, limit) : filteredImages;

  const currentActiveImage = activeImageIndex !== null ? displayImages[activeImageIndex] : null;

  const handlePrev = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + displayImages.length) % displayImages.length);
    }
  };

  const handleNext = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % displayImages.length);
    }
  };

  return (
    <div>
      {/* Category Filter Buttons (Only on Gallery Page) */}
      {showFilters && (
        <AnimatedSection direction="up" className="text-center" style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            {["all", "interior", "food", "exterior", "ambience"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.5rem 1.25rem",
                  backgroundColor: filter === cat ? "var(--bg-dark)" : "transparent",
                  color: filter === cat ? "#ffffff" : "var(--text-primary)",
                  border: filter === cat ? "1px solid var(--bg-dark)" : "1px solid var(--border-color)",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>
      )}

      {/* Editorial Masonry-Inspired Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem"
        }}
      >
        {displayImages.map((img, idx) => (
          <AnimatedSection key={img.id} direction="up" delay={idx * 0.1}>
            <div
              onClick={() => setActiveImageIndex(idx)}
              style={{
                position: "relative",
                height: img.tall ? "440px" : "320px",
                width: "100%",
                overflow: "hidden",
                cursor: "pointer",
                border: "1px solid var(--border-color)",
                backgroundColor: "var(--bg-secondary)"
              }}
              className="gallery-card"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
                className="gallery-card-img"
              />

              {/* Hover Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(18, 18, 18, 0.75)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1.5rem",
                  color: "#ffffff"
                }}
                className="gallery-card-overlay"
              >
                <div style={{ alignSelf: "flex-end", marginBottom: "auto" }}>
                  <Maximize2 size={20} color="var(--accent-gold)" />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--accent-gold)"
                  }}
                >
                  {img.category}
                </span>
                <h4
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    marginTop: "0.2rem"
                  }}
                >
                  {img.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "#d0d0d0",
                    marginTop: "0.25rem"
                  }}
                >
                  {img.caption}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        image={currentActiveImage}
        onClose={() => setActiveImageIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <style jsx global>{`
        .gallery-card:hover .gallery-card-overlay {
          opacity: 1 !important;
        }
        .gallery-card:hover .gallery-card-img {
          transform: scale(1.06) !important;
        }
      `}</style>
    </div>
  );
}
