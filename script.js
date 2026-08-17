// ==========================================================================
// THE TULIP TOUCH CAFÉ — EXACT FLORA WELLNESS CAFÉ BENCHMARK SCRIPT
// ==========================================================================

function initTulipCafe() {
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

  // 2. Vertical Back To Top Button
  const floraBackToTop = document.getElementById("floraBackToTop");
  if (floraBackToTop) {
    floraBackToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 3. 2.5D Cinematic Multi-Plane Camera Engine
  const seBg = document.getElementById("seBg");
  const seBuildingWrap = document.getElementById("seBuildingWrap");
  const heroTrack = document.getElementById("scrollExpandHero");

  if (heroTrack) {
    const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

    // Responsive smoothstep curve for immediate, silky-smooth multi-plane detachment
    const cameraEase = (p) => {
      return p * p * (3 - 2 * p);
    };

    let targetProgress = 0;
    let currentProgress = 0;
    let isRunning = false;

    const applyProgress = (p) => {
      const e = cameraEase(p);

      // 1. Background Sky (Distant horizon depth)
      if (seBg) {
        const bgScale = 1.0 + e * 0.18;
        const bgY = -e * 18;
        seBg.style.transform = `translate3d(0, ${bgY}px, 0) scale(${bgScale})`;
      }

      // 2. Hero Master Layer (Centered Building + Screen-Fitted Foreground in 100% Lockstep)
      const seMasterWrap = document.getElementById('seMasterWrap') || seBuildingWrap;
      if (seMasterWrap) {
        const masterScale = 1.0 + e * 0.44;
        const masterY = e * (window.innerHeight * 0.165);
        seMasterWrap.style.transform = `translate3d(0, ${masterY}px, 0) scale(${masterScale})`;
      }
    };

    const updateLoop = () => {
      currentProgress += (targetProgress - currentProgress) * 0.2;
      applyProgress(currentProgress);

      if (Math.abs(targetProgress - currentProgress) > 0.0002) {
        requestAnimationFrame(updateLoop);
      } else {
        currentProgress = targetProgress;
        applyProgress(currentProgress);
        isRunning = false;
      }
    };

    const onScroll = () => {
      const rect = heroTrack.getBoundingClientRect();
      const scrollableHeight = heroTrack.clientHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      targetProgress = clamp(-rect.top / scrollableHeight, 0, 1);

      if (!isRunning) {
        isRunning = true;
        requestAnimationFrame(updateLoop);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("load", onScroll, { passive: true });

    onScroll();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTulipCafe);
} else {
  initTulipCafe();
}
