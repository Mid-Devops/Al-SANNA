"use strict";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Render the shared site header and mark the current page.
function renderHeader() {
  const mount = document.querySelector("[data-site-header]");
  if (!mount) return;

  mount.innerHTML = `
    <header class="site-header">
      <div class="container nav-wrap">
        <a href="index.html" class="brand" aria-label="Al Sanna Tank & Sheds home">
          <img src="images/logo.png" alt="Al Sanna Tank & Sheds Ind LLC logo" class="brand-logo" width="246" height="249" />
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
        <a href="contact.html" class="btn btn--primary nav-cta">Request a Quote</a>
      </div>
    </header>`;

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  mount.querySelectorAll(".main-nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

// Render the shared footer and floating actions.
function renderFooter() {
  const mount = document.querySelector("[data-site-footer]");
  if (!mount) return;

  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a href="index.html" class="brand footer-brand" aria-label="Al Sanna home">
            <img src="images/logo.png" alt="Al Sanna Tank & Sheds Ind LLC logo" class="brand-logo footer-logo" width="246" height="249" loading="lazy" />
          </a>
          <p>Reliable fiberglass manufacturing solutions for industrial, commercial, and infrastructure needs.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul class="footer-list">
            <li><a href="about.html">About</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="product-details.html">Product Details</a></li>
            <li><a href="privacy.html">Privacy policy</a></li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul class="footer-list">
            <li>Sharjah, UAE</li>
            <li>P.O. Box 48072</li>
            <li><a href="tel:+97165104783">06-5104783</a></li>
            <li><a href="tel:+971556441028">0556441028</a></li>
            <li><a href="tel:+971505854789">050-5854789</a></li>
            <li><a href="mailto:alsannatank@gmail.com">alsannatank@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="contact.html" class="btn btn--primary">Request a Quote</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <p lang="ar" dir="rtl">شركة السنا لخزانات ومستودعات الصناعات ذ.م.م</p>
        <p>© <span id="year"></span> Al Sanna Tank &amp; Sheds Ind LLC. All rights reserved.</p>
      </div>
    </footer>
    <a class="whatsapp-link" href="https://wa.me/971556441028" target="_blank" rel="noopener noreferrer" aria-label="Chat with Al Sanna on WhatsApp">WhatsApp</a>
    <button class="back-to-top" type="button" aria-label="Back to top">↑</button>`;

  const year = mount.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
}

// Manage the mobile navigation and its keyboard behavior.
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

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("main-nav--open")) {
      closeMenu();
      toggle.focus();
    }
  });
}

// Preselect a product when the contact page receives a product query.
function initializeProductInterest() {
  const form = document.querySelector("#contactForm");
  const interest = form?.elements.namedItem("interest");
  const product = new URLSearchParams(window.location.search).get("product");
  if (!product || !(interest instanceof HTMLSelectElement)) return;

  const optionExists = Array.from(interest.options).some((option) => option.value === product);
  if (!optionExists) interest.add(new Option(product, product));
  interest.value = product;
}

// Animate the numeric statistics once their section is visible.
function animateStatCounters() {
  const counters = Array.from(document.querySelectorAll(".stat-item strong")).flatMap((element) => {
    const match = element.textContent.trim().match(/^(\d+)(.*)$/);
    return match ? [{ element, target: Number(match[1]), suffix: match[2] }] : [];
  });

  counters.forEach(({ element, target, suffix }) => {
    const duration = 1200;
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

// Shrink the navigation after the page scrolls.
function initializeHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle("site-header--scrolled", window.scrollY > 50);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

// Reveal the back-to-top control and respect reduced-motion preferences.
function initializeBackToTop() {
  const buttons = document.querySelectorAll(".back-to-top");
  if (!buttons.length) return;

  const updateVisibility = () => {
    const visible = window.scrollY > 300;
    buttons.forEach((button) => {
      button.classList.toggle("back-to-top--visible", visible);
      button.setAttribute("aria-hidden", String(!visible));
      button.tabIndex = visible ? 0 : -1;
    });
  };

  updateVisibility();
  window.addEventListener("scroll", updateVisibility, { passive: true });
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  });
}

// Reveal sections as they enter the viewport.
function initializeRevealAnimations() {
  const targets = document.querySelectorAll(".reveal, .section");
  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    targets.forEach((target) => {
      target.classList.add(
        target.classList.contains("section") ? "section--visible" : "reveal--visible",
      );
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add(
          entry.target.classList.contains("section") ? "section--visible" : "reveal--visible",
        );
        if (entry.target.matches(".stats-grid")) animateStatCounters();
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18 },
  );

  targets.forEach((target) => observer.observe(target));
}

// Validate the contact form and prepare an email draft.
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
        status.textContent = "Thank you. Your enquiry has been sent to our team.";
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

renderHeader();
renderFooter();
initializeNavigation();
initializeProductInterest();
initializeHeaderScroll();
initializeBackToTop();
initializeRevealAnimations();
initializeContactForm();
