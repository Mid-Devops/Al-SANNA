"use strict";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* --------------------------------------------------------------------------
   1. Shared Header & Navigation
   -------------------------------------------------------------------------- */
function renderHeader() {
  const mount = document.querySelector("[data-site-header]");
  if (!mount) return;

  mount.innerHTML = `
    <div class="scroll-progress-bar" id="scrollProgress" aria-hidden="true"></div>
    <header class="site-header">
      <div class="container nav-wrap">
        <a href="index.html" class="brand" aria-label="Al Sanna Tank &amp; Sheds home">
          <img src="images/logo.png" alt="Al Sanna Tank &amp; Sheds Ind LLC logo" class="brand-logo" width="246" height="249" />
        </a>
        <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="main-nav" aria-label="Main navigation">
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="products.html">Products</a>
          <a href="product-details.html">Product Details</a>
          <a href="contact.html">Contact</a>
        </nav>
        <a href="contact.html" class="btn btn--primary nav-cta">
          <span>Request a Quote</span>
          <span class="btn-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </header>`;

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  mount.querySelectorAll(".main-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

/* --------------------------------------------------------------------------
   2. Shared Footer & Floating WhatsApp Widget
   -------------------------------------------------------------------------- */
function renderFooter() {
  const mount = document.querySelector("[data-site-footer]");
  if (!mount) return;

  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a href="index.html" class="brand footer-brand" aria-label="Al Sanna home">
            <img src="images/logo.png" alt="Al Sanna Tank &amp; Sheds Ind LLC logo" class="brand-logo footer-logo" width="246" height="249" loading="lazy" />
          </a>
          <p>Durable, precision-engineered fiberglass, GRC and GRP composite manufacturing solutions for industrial, commercial, and infrastructure applications across the UAE and GCC.</p>
          <div class="footer-social-icons">
            <a href="https://wa.me/971556441028" class="social-icon-btn" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
            <a href="tel:+971556441028" class="social-icon-btn" aria-label="Call Al Sanna">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
            <a href="mailto:alsannatank@gmail.com" class="social-icon-btn" aria-label="Email Al Sanna">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul class="footer-list">
            <li><a href="about.html">About Al Sanna</a></li>
            <li><a href="products.html">Products Catalogue</a></li>
            <li><a href="product-details.html">Technical Specs</a></li>
            <li><a href="contact.html">Request a Quote</a></li>
            <li><a href="privacy.html">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact Details</h3>
          <ul class="footer-list">
            <li>Sharjah, UAE (P.O. Box 48072)</li>
            <li><a href="tel:+97165104783">Tel: 06-5104783</a></li>
            <li><a href="tel:+971556441028">Mob: 055-6441028</a></li>
            <li><a href="tel:+971505854789">Direct: 050-5854789</a></li>
            <li><a href="mailto:alsannatank@gmail.com">alsannatank@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h3>Immediate Assistance</h3>
          <p>Speak with our lead engineers today to review your project drawings or specifications.</p>
          <a href="https://wa.me/971556441028?text=Hello%20Al%20Sanna%2C%20I%20would%20like%20to%20enquire%20about%20your%20products" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp" style="margin-top: 10px;">
            <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
      <div class="container footer-bottom">
        <p lang="ar" dir="rtl" style="margin-bottom: 6px;">شركة السنا لخزانات ومستودعات الصناعات ذ.م.م</p>
        <p>© <span id="year"></span> Al Sanna Tank &amp; Sheds Ind LLC. All rights reserved.</p>
      </div>
    </footer>

    <!-- Floating Actions Stack -->
    <div class="floating-actions-stack">
      <a href="tel:0556441028" class="floating-call-btn" aria-label="Call Al Sanna now">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <span>Call Now</span>
      </a>

      <div class="whatsapp-floating-wrap">
        <div class="whatsapp-tooltip">Chat with us on WhatsApp</div>
        <div class="whatsapp-welcome-bubble" id="whatsappBubble" role="dialog" aria-label="WhatsApp enquiry prompt">
          <div class="welcome-bubble-header">
            <strong>Al Sanna Engineering</strong>
            <button type="button" class="welcome-bubble-close" id="closeBubbleBtn" aria-label="Dismiss message">×</button>
          </div>
          <p>👋 Hello! Looking for custom fiberglass, GRC panels, or storage tanks? We are online to assist.</p>
          <a href="https://wa.me/971556441028?text=Hello%20Al%20Sanna%2C%20I%20would%20like%20to%20enquire%20about%20your%20products" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp" style="width: 100%; font-size: 0.85rem; padding: 0.6rem;">
            <span>Start WhatsApp Chat</span>
          </a>
        </div>
        <a class="whatsapp-btn" href="https://wa.me/971556441028?text=Hello%20Al%20Sanna%2C%20I%20would%20like%20to%20enquire%20about%20your%20products" target="_blank" rel="noopener noreferrer" aria-label="Chat with Al Sanna on WhatsApp">
          <span class="whatsapp-pulse-ring"></span>
          <span class="whatsapp-pulse-ring whatsapp-pulse-ring--delay"></span>
          <svg viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
        </a>
      </div>

      <div class="back-to-top-wrap">
        <svg class="progress-ring-svg" viewBox="0 0 48 48">
          <circle class="progress-ring-circle" cx="24" cy="24" r="22"></circle>
        </svg>
        <button class="back-to-top" id="backToTopBtn" type="button" aria-label="Scroll back to top">↑</button>
      </div>
    </div>`;

  const year = mount.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
}

/* --------------------------------------------------------------------------
   3. Page Loader
   -------------------------------------------------------------------------- */
function initializePageLoader() {
  let loader = document.getElementById("pageLoader");
  if (!loader) {
    loader = document.createElement("div");
    loader.id = "pageLoader";
    loader.className = "page-loader";
    loader.innerHTML = `
      <div class="loader-content">
        <div class="loader-ring"></div>
        <img src="images/logo.png" alt="Al Sanna Logo" class="loader-logo" width="60" height="60" />
        <div class="loader-text">Al Sanna</div>
      </div>`;
    document.body.prepend(loader);
  }

  const hideLoader = () => {
    if (loader) {
      loader.classList.add("is-hidden");
      setTimeout(() => loader.remove(), 600);
    }
  };

  if (document.readyState === "complete") {
    setTimeout(hideLoader, 200);
  } else {
    window.addEventListener("load", () => setTimeout(hideLoader, 250));
    setTimeout(hideLoader, 900); // Safety fallback timeout
  }
}

/* --------------------------------------------------------------------------
   4. Mobile Navigation & Header Scroll
   -------------------------------------------------------------------------- */
function initializeNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("main-nav--open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("main-nav--open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (
      !nav.contains(event.target) &&
      !toggle.contains(event.target) &&
      nav.classList.contains("main-nav--open")
    ) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("main-nav--open")) {
      closeMenu();
      toggle.focus();
    }
  });
}

function initializeHeaderScroll() {
  const header = document.querySelector(".site-header");
  const progressBar = document.getElementById("scrollProgress");
  const backToTopBtn = document.getElementById("backToTopBtn");
  const progressCircle = document.querySelector(".progress-ring-circle");

  const onScroll = () => {
    const scrollY = window.scrollY;
    if (header) {
      header.classList.toggle("site-header--scrolled", scrollY > 40);
    }

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;

    if (progressBar) {
      progressBar.style.width = `${progress * 100}%`;
    }

    if (progressCircle) {
      const circumference = 2 * Math.PI * 22; // ~138.2
      progressCircle.style.strokeDashoffset = String(circumference - progress * circumference);
    }

    if (backToTopBtn) {
      const isVisible = scrollY > 280;
      backToTopBtn.classList.toggle("back-to-top--visible", isVisible);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  }
}

/* --------------------------------------------------------------------------
   5. Interactive 3D Hero Scene with Three.js (and CSS Fallback)
   -------------------------------------------------------------------------- */
function initializeHero3D() {
  const stage = document.querySelector(".hero-3d-stage");
  if (!stage) return;

  const canvas = document.getElementById("hero3dCanvas");
  const fallback = document.querySelector(".hero-3d-css-fallback");

  // Check if WebGL and Three.js are available and window width >= 768px
  const hasWebGL = (() => {
    try {
      const testCanvas = document.createElement("canvas");
      return !!(
        window.WebGLRenderingContext &&
        (testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl"))
      );
    } catch {
      return false;
    }
  })();

  const canUseThree =
    typeof window.THREE !== "undefined" &&
    hasWebGL &&
    window.innerWidth >= 768 &&
    !prefersReducedMotion;

  if (!canUseThree || !canvas) {
    if (canvas) canvas.style.display = "none";
    if (fallback) fallback.style.display = "flex";
    return;
  }

  // Activate WebGL Three.js Scene
  if (fallback) fallback.style.display = "none";
  canvas.style.display = "block";

  const THREE = window.THREE;
  let scene, camera, renderer, mainGroup, shardsGroup;
  let isVisible = true;
  let mouseX = 0;
  let mouseY = 0;
  let targetRotationX = 0;
  let targetRotationY = 0;

  try {
    scene = new THREE.Scene();
    const width = stage.clientWidth || 480;
    const height = stage.clientHeight || 440;

    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00c2ff, 1.4);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x7b5cff, 1.2);
    dirLight2.position.set(-5, -3, 3);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x00d4b4, 1, 10);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Central Glossy Triangle / Tetrahedron Sculpture
    const geom1 = new THREE.TetrahedronGeometry(1.9, 0);
    const mat1 = new THREE.MeshStandardMaterial({
      color: 0x004aad,
      roughness: 0.18,
      metalness: 0.82,
      wireframe: false,
    });
    const centerMesh = new THREE.Mesh(geom1, mat1);
    mainGroup.add(centerMesh);

    // Outer Translucent Wireframe Cage
    const wireGeom = new THREE.TetrahedronGeometry(2.15, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00c2ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeom, wireMat);
    mainGroup.add(wireMesh);

    // Floating Geometric Shards
    shardsGroup = new THREE.Group();
    scene.add(shardsGroup);

    const shardColors = [0x00c2ff, 0x7b5cff, 0x00d4b4, 0xff8a3d, 0xff5c8a];
    const shards = [];

    for (let i = 0; i < 18; i++) {
      const shardGeom = new THREE.TetrahedronGeometry(0.25 + Math.random() * 0.28, 0);
      const shardMat = new THREE.MeshStandardMaterial({
        color: shardColors[i % shardColors.length],
        roughness: 0.2,
        metalness: 0.6,
        transparent: true,
        opacity: 0.85,
      });
      const shardMesh = new THREE.Mesh(shardGeom, shardMat);

      const angle = Math.random() * Math.PI * 2;
      const radius = 2.8 + Math.random() * 1.8;
      shardMesh.position.x = Math.cos(angle) * radius;
      shardMesh.position.y = (Math.random() - 0.5) * 3.5;
      shardMesh.position.z = Math.sin(angle) * radius * 0.8;

      shardMesh.rotation.x = Math.random() * Math.PI;
      shardMesh.rotation.y = Math.random() * Math.PI;

      shards.push({
        mesh: shardMesh,
        speedX: (Math.random() - 0.5) * 0.02,
        speedY: (Math.random() - 0.5) * 0.02,
        rotSpeed: (Math.random() - 0.5) * 0.03,
      });
      shardsGroup.add(shardMesh);
    }

    // Mouse listener for smooth interactive rotation
    window.addEventListener(
      "mousemove",
      (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        targetRotationY = x * 1.4;
        targetRotationX = y * 1.2;
      },
      { passive: true },
    );

    // Resize listener
    window.addEventListener(
      "resize",
      () => {
        if (!stage || !renderer || !camera) return;
        const w = stage.clientWidth;
        const h = stage.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      },
      { passive: true },
    );

    // IntersectionObserver to pause loop when off-screen
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(stage);

    // Render loop
    let lastTime = performance.now();
    const animate = (time) => {
      requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = (time - lastTime) * 0.001;
      lastTime = time;

      // Smooth damping rotation toward target
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.06 + delta * 0.4;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.06;
      wireMesh.rotation.y -= delta * 0.2;
      wireMesh.rotation.x += delta * 0.15;

      // Animate floating shards
      shards.forEach((s) => {
        s.mesh.rotation.x += s.rotSpeed;
        s.mesh.rotation.y += s.rotSpeed;
      });
      shardsGroup.rotation.y += delta * 0.15;

      renderer.render(scene, camera);
    };

    requestAnimationFrame(animate);
  } catch (err) {
    console.warn("Three.js setup encountered an issue, activating CSS fallback:", err);
    if (canvas) canvas.style.display = "none";
    if (fallback) fallback.style.display = "flex";
  }
}

/* --------------------------------------------------------------------------
   6. 3D Tilt Effect on Hover (Vanilla JS)
   -------------------------------------------------------------------------- */
function initialize3DTilt() {
  if (prefersReducedMotion || window.innerWidth < 768) return;

  const tiltCards = document.querySelectorAll(
    ".tilt-card, .service-card, .app-card, .feature, .stat-item, .glass-metric-card",
  );

  tiltCards.forEach((card) => {
    let bounds;

    const onMouseEnter = () => {
      bounds = card.getBoundingClientRect();
      card.style.transition = "transform 0.15s ease-out, box-shadow 0.25s ease";
    };

    const onMouseMove = (e) => {
      if (!bounds) bounds = card.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const xPct = mouseX / bounds.width - 0.5;
      const yPct = mouseY / bounds.height - 0.5;

      const rotX = -yPct * 12; // tilt angle
      const rotY = xPct * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const onMouseLeave = () => {
      card.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease";
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    };

    card.addEventListener("mouseenter", onMouseEnter);
    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);
  });
}

/* --------------------------------------------------------------------------
   7. Typing Effect for Hero Subtitle
   -------------------------------------------------------------------------- */
function initializeTypingEffect() {
  const el = document.getElementById("typingText");
  if (!el || prefersReducedMotion) return;

  const words = [
    "Fiberglass Manufacturing Experts",
    "Engineered GRC & GRP Composites",
    "Precision Fabrication & Installation",
    "High-Performance Industrial Tanks & Sheds",
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 90;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      el.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      delay = 45;
    } else {
      el.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      delay = 95;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      delay = 2000; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* --------------------------------------------------------------------------
   8. 3D Flip Cards & Coverflow Carousel
   -------------------------------------------------------------------------- */
function initializeFlipCards() {
  const flipCards = document.querySelectorAll(".flip-card");

  flipCards.forEach((card) => {
    const triggerButtons = card.querySelectorAll(".flip-trigger-btn");
    triggerButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        card.classList.toggle("is-flipped");
      });
    });

    // Mobile tap support
    if (window.innerWidth < 768) {
      card.addEventListener("click", (e) => {
        if (!e.target.closest("a") && !e.target.closest("button")) {
          card.classList.toggle("is-flipped");
        }
      });
    }
  });
}

function initializeCoverflowCarousel() {
  const viewport = document.querySelector(".coverflow-viewport");
  if (!viewport) return;

  const items = Array.from(viewport.querySelectorAll(".coverflow-item"));
  const prevBtn = document.querySelector(".coverflow-btn--prev");
  const nextBtn = document.querySelector(".coverflow-btn--next");
  const dotsContainer = document.querySelector(".coverflow-dots");

  if (!items.length) return;

  let currentIndex = 0;

  // Build dots
  if (dotsContainer) {
    dotsContainer.innerHTML = items
      .map(
        (_, i) =>
          `<button class="coverflow-dot ${i === 0 ? "active" : ""}" type="button" aria-label="Go to slide ${i + 1}"></button>`,
      )
      .join("");
  }

  const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll(".coverflow-dot")) : [];

  function updateCoverflow() {
    const isMobile = window.innerWidth < 768;
    const xSpacing = isMobile ? 120 : 180;
    const zSpacing = isMobile ? 80 : 120;
    const rotDeg = 36;

    items.forEach((item, index) => {
      const offset = index - currentIndex;
      const absOffset = Math.abs(offset);

      if (offset === 0) {
        // Active Center Card
        item.style.transform = "translateX(0px) translateZ(80px) rotateY(0deg) scale(1.05)";
        item.style.opacity = "1";
        item.style.zIndex = "20";
        item.style.filter = "none";
        item.style.pointerEvents = "auto";
      } else {
        const dir = offset > 0 ? 1 : -1;
        const xPos = dir * (xSpacing + (absOffset - 1) * 70);
        const zPos = -absOffset * zSpacing;
        const yRot = -dir * rotDeg;

        item.style.transform = `translateX(${xPos}px) translateZ(${zPos}px) rotateY(${yRot}deg) scale(0.88)`;
        item.style.opacity = absOffset > 2 ? "0" : String(Math.max(0.3, 1 - absOffset * 0.35));
        item.style.zIndex = String(10 - absOffset);
        item.style.filter = "blur(0.5px)";
        item.style.pointerEvents = absOffset === 1 ? "auto" : "none";
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = (index + items.length) % items.length;
    updateCoverflow();
  }

  if (prevBtn) prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => goToSlide(i));
  });

  items.forEach((item, i) => {
    item.addEventListener("click", () => {
      if (i !== currentIndex) goToSlide(i);
    });
  });

  // Keyboard navigation
  viewport.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") goToSlide(currentIndex - 1);
    if (e.key === "ArrowRight") goToSlide(currentIndex + 1);
  });

  // Touch Swipe
  let startX = 0;
  viewport.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
    },
    { passive: true },
  );

  viewport.addEventListener(
    "touchend",
    (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 45) goToSlide(currentIndex + 1);
      if (endX - startX > 45) goToSlide(currentIndex - 1);
    },
    { passive: true },
  );

  updateCoverflow();
  window.addEventListener("resize", updateCoverflow, { passive: true });
}

/* --------------------------------------------------------------------------
   9. Button Ripple Animation
   -------------------------------------------------------------------------- */
function initializeRippleEffect() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn");
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "btn-ripple";

    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}

/* --------------------------------------------------------------------------
   10. WhatsApp Welcome Bubble (5s Delayed Auto-Popup)
   -------------------------------------------------------------------------- */
function initializeWhatsAppWidget() {
  const bubble = document.getElementById("whatsappBubble");
  const closeBtn = document.getElementById("closeBubbleBtn");
  if (!bubble) return;

  const isDismissed = sessionStorage.getItem("alsanna_whatsapp_dismissed") === "true";

  if (!isDismissed) {
    setTimeout(() => {
      bubble.classList.add("is-active");
    }, 5000);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      bubble.classList.remove("is-active");
      sessionStorage.setItem("alsanna_whatsapp_dismissed", "true");
    });
  }
}

/* --------------------------------------------------------------------------
   11. Numeric Stat Counters Animation
   -------------------------------------------------------------------------- */
function animateStatCounters() {
  const counters = Array.from(
    document.querySelectorAll(".stat-item strong, .metric-item strong"),
  ).flatMap((element) => {
    const match = element.textContent.trim().match(/^(\d+)(.*)$/);
    return match ? [{ element, target: Number(match[1]), suffix: match[2] }] : [];
  });

  counters.forEach(({ element, target, suffix }) => {
    const duration = 1400;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      element.textContent = `${Math.round(target * easedProgress)}${suffix}`;
      if (progress < 1) requestAnimationFrame(updateCounter);
    }

    requestAnimationFrame(updateCounter);
  });
}

/* --------------------------------------------------------------------------
   12. Scroll Reveal & Intersection Observer
   -------------------------------------------------------------------------- */
function initializeRevealAnimations() {
  const targets = document.querySelectorAll(
    ".reveal, .reveal-scale, .reveal-flip, .step-card, .org-node",
  );

  if (!targets.length) return;

  const checkVisibility = () => {
    const triggerBottom = window.innerHeight * 1.1;
    targets.forEach((target) => {
      if (target.classList.contains("reveal--visible")) return;
      const rect = target.getBoundingClientRect();
      if (rect.top <= triggerBottom) {
        target.classList.add("reveal--visible");
        if (target.matches(".stats-grid") || target.querySelector(".stat-item")) {
          animateStatCounters();
        }
      }
    });
  };

  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    targets.forEach((target) => target.classList.add("reveal--visible"));
    animateStatCounters();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal--visible");

        if (entry.target.matches(".stats-grid") || entry.target.querySelector(".stat-item")) {
          animateStatCounters();
        }

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.05, rootMargin: "0px 0px 100px 0px" },
  );

  targets.forEach((target) => observer.observe(target));

  window.addEventListener("scroll", checkVisibility, { passive: true });
  checkVisibility();
}

/* --------------------------------------------------------------------------
   13. Contact Form Submission & Product Query Preselection
   -------------------------------------------------------------------------- */
function initializeProductInterest() {
  const form = document.querySelector("#contactForm");
  const interest = form?.elements.namedItem("interest");
  const product = new URLSearchParams(window.location.search).get("product");
  if (!product || !(interest instanceof HTMLSelectElement)) return;

  const optionExists = Array.from(interest.options).some((option) => option.value === product);
  if (!optionExists) interest.add(new Option(product, product));
  interest.value = product;
}

function initializeContactForm() {
  const form = document.querySelector("#contactForm");
  if (!form) return;

  const button = form.querySelector('button[type="submit"]');
  const status = form.querySelector(".form-status");
  if (!button || !status) return;
  const startedAt = performance.now();
  let submitting = false;

  form.addEventListener(
    "invalid",
    () => {
      status.textContent = "Please complete each required field and check the highlighted value.";
    },
    true,
  );

  form.addEventListener("input", () => {
    status.textContent = "";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (submitting) return;
    if (!form.reportValidity()) {
      status.textContent = "Please correct the highlighted fields before sending your enquiry.";
      return;
    }

    const data = new FormData(form);
    const clean = (name) =>
      String(data.get(name) || "")
        .normalize("NFC")
        .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
        .trim();

    submitting = true;
    button.disabled = true;
    button.textContent = "Sending enquiry…";
    status.textContent = "Sending your enquiry securely…";

    fetch("/api/contact/csrf", { credentials: "same-origin", cache: "no-store" })
      .then((csrfResponse) => {
        if (!csrfResponse.ok) throw new Error("Could not start a secure enquiry session.");
        return csrfResponse.json();
      })
      .then(({ csrfToken }) =>
        fetch("/api/contact", {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken,
          },
          body: JSON.stringify({
            name: clean("name"),
            email: clean("email"),
            phone: clean("phone"),
            company: clean("company"),
            interest: clean("interest"),
            message: clean("message"),
            website: clean("website"),
            elapsedMs: performance.now() - startedAt,
          }),
        }),
      )
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Your enquiry could not be sent.");
        status.textContent =
          "Thank you! Your enquiry has been received. Our engineering team will contact you shortly.";
        form.reset();
      })
      .catch((error) => {
        status.textContent =
          error instanceof Error ? error.message : "Your enquiry could not be sent.";
      })
      .finally(() => {
        submitting = false;
        button.disabled = false;
        button.textContent = "Send Enquiry";
      });
  });
}

/* --------------------------------------------------------------------------
   14. Lightbox Modal for Product Imagery
   -------------------------------------------------------------------------- */
function initializeLightbox() {
  let modal = document.getElementById("lightboxModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "lightboxModal";
    modal.className = "lightbox-modal";
    modal.innerHTML = `
      <div class="lightbox-container" role="dialog" aria-modal="true" aria-label="Product preview">
        <div class="lightbox-header">
          <h3 style="margin: 0; font-size: 1.1rem; color: var(--blue-dark);" id="lightboxTitle">Product Preview</h3>
          <button type="button" class="lightbox-close-btn" id="lightboxClose" aria-label="Close modal">×</button>
        </div>
        <div class="lightbox-body">
          <img id="lightboxImg" src="" alt="Enlarged view" />
          <p id="lightboxDesc" style="margin: 0; color: var(--muted); font-size: 0.95rem;"></p>
        </div>
      </div>`;
    document.body.appendChild(modal);
  }

  const closeBtn = document.getElementById("lightboxClose");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxDesc = document.getElementById("lightboxDesc");

  const closeModal = () => modal.classList.remove("is-active");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-active")) closeModal();
  });

  // Attach click triggers to product images or detail buttons
  document.querySelectorAll("[data-lightbox]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const src =
        el.getAttribute("data-lightbox-src") ||
        el.getAttribute("src") ||
        "images/industrial-concepts.svg";
      const title = el.getAttribute("data-lightbox-title") || "Al Sanna Product Spec";
      const desc =
        el.getAttribute("data-lightbox-desc") ||
        "Precision manufacturing for industrial and commercial solutions.";

      if (lightboxImg) lightboxImg.src = src;
      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxDesc) lightboxDesc.textContent = desc;

      modal.classList.add("is-active");
    });
  });
}

/* --------------------------------------------------------------------------
   15. Initialization Lifecycle
   -------------------------------------------------------------------------- */
initializePageLoader();
renderHeader();
renderFooter();
initializeNavigation();
initializeHeaderScroll();
initializeHero3D();
initialize3DTilt();
initializeTypingEffect();
initializeFlipCards();
initializeCoverflowCarousel();
initializeRippleEffect();
initializeWhatsAppWidget();
initializeRevealAnimations();
initializeProductInterest();
initializeContactForm();
initializeLightbox();
