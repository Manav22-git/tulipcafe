import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VisitSection from "@/components/VisitSection";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/data/site";

export default function VisitPage() {
  return (
    <main style={{ backgroundColor: "var(--bg-primary)" }}>
      <Header />

      {/* Hero Banner */}
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
              <span>✦ Akota, Vadodara, Gujarat ✦</span>
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
              Visit <span className="font-script" style={{ color: "var(--accent-gold)" }}>The Café</span>
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
              Find us opposite Galleria Mall in Akota, Vadodara. Join us for dine-in, takeaway, or call for reservations &amp; orders.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <VisitSection />

      {/* Quick Info Box */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <AnimatedSection direction="up">
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", marginBottom: "1rem" }}>
              Planning a Gathering or Special Occasion?
            </h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--text-secondary)", marginBottom: "1.75rem", lineHeight: 1.6 }}>
              Whether you are planning a quiet coffee reading session, an intimate birthday celebration, or a social brunch in Vadodara, our black &amp; white baroque space offers the perfect aesthetic backdrop.
            </p>
            <a href={`tel:${siteConfig.phoneClean}`} className="btn btn-primary">
              Call Us at {siteConfig.phone}
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
