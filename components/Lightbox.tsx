"use client";

import { useEffect } from "react";
import Image from "next/image";
import { GalleryImage } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  image: GalleryImage | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ image, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    if (image) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [image, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            backgroundColor: "rgba(12, 12, 12, 0.95)",
            backdropFilter: "blur(10px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem"
          }}
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "none",
              border: "none",
              color: "#ffffff",
              cursor: "pointer",
              padding: "0.5rem",
              zIndex: 205
            }}
          >
            <X size={32} />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous Image"
            style={{
              position: "absolute",
              left: "1.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#ffffff",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 205
            }}
          >
            <ChevronLeft size={24} />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next Image"
            style={{
              position: "absolute",
              right: "1.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#ffffff",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 205
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Container */}
          <div
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "75vh",
              width: "800px",
              height: "550px"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Caption */}
          <div
            style={{
              marginTop: "1.5rem",
              textAlign: "center",
              color: "#ffffff",
              maxWidth: "600px"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "#ffffff" }}>
              {image.title}
            </h4>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "#a0a0a0", marginTop: "0.25rem" }}>
              {image.caption}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
