// ==========================================================================
// THE TULIP TOUCH CAFÉ — EXACT FLORA WELLNESS CAFÉ BENCHMARK SCRIPT
// ==========================================================================

let tulipCafeInitialized = false;

function initTulipCafe() {
  if (tulipCafeInitialized) return;
  tulipCafeInitialized = true;

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

      // 2. Hero Master Layer (Large Building Zoom with Gate Fully Visible)
      const seMasterWrap = document.getElementById('seMasterWrap') || seBuildingWrap;
      if (seMasterWrap) {
        const masterScale = 1.0 + e * 0.95;
        const masterY = e * (window.innerHeight * 0.14);
        seMasterWrap.style.transform = `translate3d(0, ${masterY}px, 0) scale(${masterScale})`;
      }

      // 3. Foreground Smooth Edge & Global Fade when zooming in
      const seFgWrap = document.getElementById('seFgWrap');
      const seFg = document.getElementById('seFg');
      const fgTarget = seFgWrap || seFg;
      if (fgTarget) {
        let fgOpacity = 1.0;
        if (p > 0.50) {
          fgOpacity = Math.max(0, 1.0 - (p - 0.50) / 0.40);
        }
        fgTarget.style.opacity = fgOpacity.toFixed(3);

        // Dynamic edge feathering mask during zoom in
        const maskRadiusX = Math.max(45, 92 - p * 35);
        const maskRadiusY = Math.max(35, 85 - p * 30);
        const maskCore = Math.max(15, 50 - p * 35);
        const maskStyle = `radial-gradient(ellipse ${maskRadiusX}% ${maskRadiusY}% at 50% 75%, rgba(0,0,0,1) ${maskCore}%, rgba(0,0,0,0) 100%)`;
        fgTarget.style.webkitMaskImage = maskStyle;
        fgTarget.style.maskImage = maskStyle;
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

  // ==========================================================================
  // Interactive Door Gate Click -> White Curtain Falls from Top to Bottom
  // ==========================================================================
  const doorLoader = document.getElementById('doorLoader');
  const doorHotspot = document.getElementById('seDoorHotspot');

  if (doorHotspot && doorLoader) {
    doorHotspot.addEventListener('click', (e) => {
      e.preventDefault();
      const targetUrl = doorHotspot.getAttribute('href') || 'interior.html';

      sessionStorage.setItem('tulip_door_transition', 'true');

      // Reset loader classes and setup fall from top (-100% -> 0%)
      doorLoader.classList.remove('dismissed', 'pull-up', 'pull-up-enter', 'animating', 'active');
      doorLoader.classList.add('door-falling');

      // Trigger curtain fall from top
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          doorLoader.classList.add('active');
        });
      });

      // Start glowing breathing emblem
      setTimeout(() => {
        doorLoader.classList.add('animating');
      }, 400);

      // Navigate to interior page
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 1800);
    });
  }
}

// BFCache / History Navigation Handler (Chrome Back Button support)
window.addEventListener('pageshow', (event) => {
  const doorLoader = document.getElementById('doorLoader');
  const isBack = event.persisted || sessionStorage.getItem('tulip_home_ready') === 'true';
  if (isBack) {
    document.documentElement.classList.add('tulip-loaded');
    if (doorLoader) {
      doorLoader.classList.remove('active', 'animating', 'pull-up', 'pull-up-enter');
      doorLoader.classList.add('dismissed');
      doorLoader.style.display = 'none';
    }
    document.body.style.overflow = 'auto';
  }
});

window.addEventListener('popstate', () => {
  document.documentElement.classList.add('tulip-loaded');
  const doorLoader = document.getElementById('doorLoader');
  if (doorLoader) {
    doorLoader.classList.remove('active', 'animating', 'pull-up', 'pull-up-enter');
    doorLoader.classList.add('dismissed');
    doorLoader.style.display = 'none';
  }
  document.body.style.overflow = 'auto';
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTulipCafe);
} else {
  initTulipCafe();
}
