"use client";

import { siteConfig } from "@/data/site";
import AnimatedSection from "./AnimatedSection";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export default function VisitSection() {
  return (
    <section
      style={{
        backgroundColor: "var(--bg-primary)",
        borderBottom: "1px solid var(--border-color)"
      }}
      className="section-padding"
      id="visit"
    >
      <div className="container">
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center" style={{ marginBottom: "3.5rem" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span>✦ Plan Your Visit ✦</span>
          </div>
          <h2 className="section-title">
            Come Experience <em className="font-script" style={{ fontSize: "1.2em", color: "var(--accent-gold)" }}>The Tulip Touch</em>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Located in the vibrant Akota neighborhood of Vadodara, opposite Galleria Mall.
          </p>
        </AnimatedSection>

        {/* 2-Column Info & Map Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "stretch"
          }}
        >
          {/* Left Column — Info Cards */}
          <AnimatedSection direction="right" duration={0.6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                height: "100%"
              }}
            >
              {/* Address Card */}
              <div
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  padding: "1.75rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div
                    style={{
                      backgroundColor: "var(--bg-dark)",
                      color: "#ffffff",
                      padding: "0.6rem",
                      borderRadius: "2px"
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.35rem" }}>
                      Café Location
                    </h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {siteConfig.address.full}
                    </p>
                    <a
                      href={siteConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--text-primary)",
                        marginTop: "0.75rem",
                        fontWeight: 600
                      }}
                    >
                      Get Directions on Google Maps <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  padding: "1.75rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div
                    style={{
                      backgroundColor: "var(--bg-dark)",
                      color: "#ffffff",
                      padding: "0.6rem",
                      borderRadius: "2px"
                    }}
                  >
                    <Clock size={22} />
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.35rem" }}>
                      Opening Hours
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                        paddingBottom: "0.35rem",
                        borderBottom: "1px dashed var(--border-color)"
                      }}
                    >
                      <span>Tuesday – Sunday</span>
                      <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>{siteConfig.hours}</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                        paddingTop: "0.35rem"
                      }}
                    >
                      <span>Monday</span>
                      <span style={{ fontStyle: "italic" }}>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact & Orders Card */}
              <div
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  padding: "1.75rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div
                    style={{
                      backgroundColor: "var(--bg-dark)",
                      color: "#ffffff",
                      padding: "0.6rem",
                      borderRadius: "2px"
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.35rem" }}>
                      Contact &amp; Delivery
                    </h3>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: 600, marginBottom: "0.75rem" }}>
                      <a href={`tel:${siteConfig.phoneClean}`} style={{ color: "inherit", textDecoration: "none" }}>
                        {siteConfig.phone}
                      </a>
                    </p>
                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                      <a href={`tel:${siteConfig.phoneClean}`} className="btn btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.75rem" }}>
                        Call Café
                      </a>
                      <a href={siteConfig.swiggyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: "0.5rem 1rem", fontSize: "0.75rem" }}>
                        Swiggy Order
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column — Google Map iFrame */}
          <AnimatedSection direction="left" duration={0.6} delay={0.2}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: "400px",
                border: "1px solid var(--border-color)",
                overflow: "hidden"
              }}
            >
              <iframe
                title="The Tulip Touch Café Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.7!2d73.1701!3d22.2998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5f7d6b71ca9%3A0x0!2sThe+Tulip+Touch+Cafe%2C+Akota%2C+Vadodara!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
