"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./experience.module.css";

import bgImg from "./hero3d/hero-bg.png";
import buildingImg from "./hero3d/hero-building.png";
import foregroundImg from "./hero3d/hero-foreground.png";
import emblemImg from "./hero3d/hero-emblem.png";

function clamp(v: number, a: number, b: number) {
  return Math.max(a, Math.min(b, v));
}

export default function ExperiencePage() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const buildingRef = useRef<HTMLDivElement>(null);
  const emblemRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);
  const whiteOverlayRef = useRef<HTMLDivElement>(null);
  const finalLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;

      const rect = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - window.innerHeight;
      const scrolled = clamp(-rect.top, 0, total);
      const p = total > 0 ? scrolled / total : 0; // 0.0 -> 1.0

      // Viewport responsive base scale for 1400x933 camera canvas
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const baseFit = Math.max(vw / 1400, vh / 933);

      // Camera scale & offset trajectory over 5 scroll phases
      let cameraScale = 1.0;
      let cameraX = 0;
      let cameraY = 0;

      if (p <= 0.2) {
        // Phase 1: Opening (0% -> 20%)
        cameraScale = 1.0;
        cameraX = 0;
        cameraY = 0;
      } else if (p <= 0.45) {
        // Phase 2: Approach (20% -> 45%)
        const t = (p - 0.2) / 0.25;
        const e = t * t * (3 - 2 * t);
        cameraScale = 1.0 + e * 0.35;
        cameraX = 0;
        cameraY = e * -12;
      } else if (p <= 0.70) {
        // Phase 3: Entering (45% -> 70%)
        const t = (p - 0.45) / 0.25;
        const e = t * t * (3 - 2 * t);
        cameraScale = 1.35 + e * 0.85;
        cameraX = e * -10;
        cameraY = -12 + e * -28;
      } else if (p <= 0.88) {
        // Phase 4: Target Red Feature (70% -> 88%)
        const t = (p - 0.70) / 0.18;
        const e = t * t * (3 - 2 * t);
        cameraScale = 2.2 + e * 0.9;
        cameraX = -10 + e * -12;
        cameraY = -40 + e * -25;
      } else {
        // Phase 5: Freeze (88% -> 100%)
        cameraScale = 3.1;
        cameraX = -22;
        cameraY = -65;
      }

      // Parallax relative depth scales
      const bgParallax = p > 0.2 ? (p - 0.2) * 0.10 : 0;
      const buildParallax = p > 0.2 ? (p - 0.2) * 0.20 : 0;
      const fgParallax = p > 0.2 ? (p - 0.2) * 0.45 : 0;

      // Emblem float & fade
      const emblemY = -p * 60;
      const emblemOpacity = clamp(1 - (p - 0.25) / 0.3, 0, 1);

      // Intro Copy & Scroll Indicator fade
      if (copyRef.current) {
        copyRef.current.style.opacity = `${clamp(1 - p / 0.18, 0, 1)}`;
        copyRef.current.style.transform = `translate(-50%, -50%) translate3d(0, ${-clamp(p / 0.18, 0, 1) * 30}px, 0)`;
      }

      if (cueRef.current) {
        cueRef.current.style.opacity = `${clamp(1 - p / 0.12, 0, 1)}`;
      }

      // Apply Camera Transform
      if (cameraRef.current) {
        const finalScale = baseFit * cameraScale;
        cameraRef.current.style.transform = `translate(-50%, -50%) translate3d(${cameraX}px, ${cameraY}px, 0) scale(${finalScale})`;
      }

      // Apply Layer Parallax inside Camera
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(${1 + bgParallax})`;
      }
      if (buildingRef.current) {
        buildingRef.current.style.transform = `scale(${1 + buildParallax})`;
      }
      if (fgRef.current) {
        fgRef.current.style.transform = `scale(${1 + fgParallax})`;
      }
      if (emblemRef.current) {
        emblemRef.current.style.transform = `translate(-50%, 0) translate3d(0, ${emblemY}px, 0) scale(${1 + buildParallax})`;
        emblemRef.current.style.opacity = `${emblemOpacity}`;
      }

      // Phase 5: White Fade Screen & Final Logo Reveal (88% -> 100%)
      if (p >= 0.86) {
        const fadeP = clamp((p - 0.86) / 0.14, 0, 1);
        if (whiteOverlayRef.current) {
          whiteOverlayRef.current.style.opacity = `${fadeP}`;
        }
        if (finalLogoRef.current) {
          const logoP = clamp((fadeP - 0.3) / 0.7, 0, 1);
          finalLogoRef.current.style.opacity = `${logoP}`;
          finalLogoRef.current.style.transform = `translate(-50%, -50%) scale(${0.85 + logoP * 0.15})`;
        }
      } else {
        if (whiteOverlayRef.current) whiteOverlayRef.current.style.opacity = "0";
        if (finalLogoRef.current) finalLogoRef.current.style.opacity = "0";
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <main>
      <div ref={wrapRef} className={styles.experience}>
        <div className={styles.sticky}>
          <div className={styles.scene}>

            {/* SINGLE CAMERA CONTAINER (1400x933 CANVAS) */}
            <div ref={cameraRef} className={styles.camera}>
              {/* BACK: HERO BG (Sky - z-index: 1) */}
              <div ref={bgRef} className={styles.bg}>
                <Image
                  src={bgImg}
                  alt="Sky Backdrop"
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              {/* MIDDLE: HERO BUILDING (z-index: 20) */}
              <div ref={buildingRef} className={styles.building}>
                <Image
                  src={buildingImg}
                  alt="The Tulip Touch Café Building"
                  fill
                  priority
                />
              </div>

              {/* FLOATING: HERO EMBLEM (z-index: 30) */}
              <div ref={emblemRef} className={styles.emblem}>
                <Image src={emblemImg} alt="The Tulip Touch Café Emblem" />
              </div>

              {/* FRONT: HERO FOREGROUND (z-index: 40) */}
              <div ref={fgRef} className={styles.foreground}>
                <Image
                  src={foregroundImg}
                  alt="Café Courtyard Seating"
                  fill
                  priority
                />
              </div>
            </div>

            {/* Monochrome Vignette (z-index: 80) */}
            <div className={styles.vignette} />

            {/* Minimal Opening Copy (z-index: 100) */}
            <div ref={copyRef} className={styles.copy}>
              <div className={styles.eyebrow}>VADODARA</div>
              <h1 className={styles.title}>THE TULIP TOUCH CAFÉ</h1>
              <p className={styles.sub}>SCROLL TO ENTER</p>
            </div>

            {/* Scroll Indicator (z-index: 100) */}
            <div ref={cueRef} className={styles.scrollCue}>
              <span>SCROLL</span>
              <span className="line" />
            </div>

            {/* Phase 5: White Fade Screen (z-index: 200) */}
            <div ref={whiteOverlayRef} className={styles.whiteOverlay} />

            {/* Phase 5: Final Logo Reveal (z-index: 300) */}
            <div ref={finalLogoRef} className={styles.finalLogo}>
              <Image
                src={emblemImg}
                alt="The Tulip Touch Café Logo"
                className={styles.finalLogoImg}
              />
              <div className={styles.finalLogoText}>THE TULIP TOUCH CAFÉ</div>
              <div className={styles.finalLogoSub}>VADODARA</div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
