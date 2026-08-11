// ==========================================================================
// THE TULIP TOUCH CAFÉ — EXACT FLORA WELLNESS CAFÉ BENCHMARK SCRIPT
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Drawer Toggle
  const hamburger = document.getElementById("hamburger");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerClose = document.getElementById("drawerClose");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (hamburger && mobileDrawer) {
    hamburger.addEventListener("click", () => {
      mobileDrawer.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (drawerClose && mobileDrawer) {
    drawerClose.addEventListener("click", () => {
      mobileDrawer.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileDrawer) {
        mobileDrawer.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });



  // 3. Vertical Back To Top Button (Flora Benchmark)
  const floraBackToTop = document.getElementById("floraBackToTop");
  if (floraBackToTop) {
    floraBackToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 4. ScrollExpand Opening Animation (React Bits Component Integration)
  const seFrame = document.getElementById("seFrame");
  const seMedia = document.getElementById("seMedia");
  const seTitle = document.getElementById("seTitle");
  const seHint = document.getElementById("seHint");

  if (seFrame && seMedia) {
    const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
    const smoothstep = (edge0, edge1, x) => {
      const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
      return t * t * (3 - 2 * t);
    };

    const startWidth = 42;
    const startHeight = 58;
    const startRadius = 24;
    const endRadius = 0;
    const mediaZoom = 1.35;

    let target = 0;
    let current = 0;

    const applyProgress = (p) => {
      const e = smoothstep(0, 1, p);
      const w = startWidth + (100 - startWidth) * e;
      const h = startHeight + (100 - startHeight) * e;
      const ix = Math.max(0, (100 - w) / 2);
      const iy = Math.max(0, (100 - h) / 2);
      const r = startRadius + (endRadius - startRadius) * e;

      seFrame.style.clipPath = `inset(${iy}% ${ix}% ${iy}% ${ix}% round ${r}px)`;
      seMedia.style.transform = `scale(${mediaZoom + (1 - mediaZoom) * e})`;

      if (seTitle) {
        const out = smoothstep(0.2, 0.85, p);
        seTitle.style.opacity = `${1 - out}`;
        seTitle.style.transform = `translate3d(0, ${-32 * out}px, 0) scale(${1 + 0.06 * out})`;
      }

      if (seHint) {
        const gone = smoothstep(0, 0.15, p);
        seHint.style.opacity = `${1 - gone}`;
        seHint.style.transform = `translate3d(0, ${10 * gone}px, 0)`;
      }
    };

    const heroTrack = document.getElementById("scrollExpandHero");
    const onScroll = () => {
      if (!heroTrack) return;
      const rect = heroTrack.getBoundingClientRect();
      const scrollableHeight = heroTrack.clientHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      target = clamp(-rect.top / scrollableHeight, 0, 1);

      const tick = () => {
        current += (target - current) * 0.18;
        applyProgress(current);
        if (Math.abs(target - current) >= 0.0005) {
          requestAnimationFrame(tick);
        }
      };
      tick();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    applyProgress(0);
  }
});
