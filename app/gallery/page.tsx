import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/data/site";

export default function GalleryPage() {
  return (
    <main style={{ backgroundColor: "var(--bg-primary)" }}>
      <Header />

      {/* Banner */}
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
              <span>✦ Monochromatic Art &amp; Architecture ✦</span>
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
              The Experience <span className="font-script" style={{ color: "var(--accent-gold)" }}>Gallery</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.95rem",
                color: "var(--text-light-muted)",
                maxWidth: "600px",
                margin: "0 auto"
              }}
            >
              Explore the baroque interior architecture, hand-painted murals, and culinary creations of {siteConfig.name}. Click any image to view in full screen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="section-padding">
        <div className="container">
          <GalleryGrid showFilters={true} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
