"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setOpen(false);
  const isCompanyPage = ["/about", "/team", "/facilities", "/hse"].includes(pathname);
  const isProductsPage = ["/products", "/grc", "/grp"].includes(pathname);

  useEffect(() => {
    const targets = document.querySelectorAll(
      ".section-heading, .service-card, .application-item, .value-card, .gallery-item, .commitment-card, .org-branch, .market-grid article",
    );
    targets.forEach((target) => target.classList.add("motion-reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("motion-reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
        document.querySelector(".nav-toggle")?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link
          href="/"
          className="brand"
          aria-label="Al Sanna Tank & Sheds home"
          onClick={closeMenu}
        >
          <img
            src="/images/logo.png"
            alt="Al Sanna Tank & Sheds Ind LLC logo"
            className="brand-logo"
            width="246"
            height="249"
          />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${open ? "main-nav--open" : ""}`} aria-label="Main navigation">
          <Link
            href="/"
            className={pathname === "/" ? "active" : undefined}
            aria-current={pathname === "/" ? "page" : undefined}
            onClick={closeMenu}
          >
            Home
          </Link>
          <details className={`nav-group ${isCompanyPage ? "active" : ""}`}>
            <summary className={isCompanyPage ? "active" : undefined}>Company</summary>
            <div className="nav-dropdown">
              <Link
                href="/about"
                className={pathname === "/about" ? "active" : undefined}
                aria-current={pathname === "/about" ? "page" : undefined}
                onClick={closeMenu}
              >
                About us
              </Link>
              <Link
                href="/team"
                className={pathname === "/team" ? "active" : undefined}
                aria-current={pathname === "/team" ? "page" : undefined}
                onClick={closeMenu}
              >
                Our team
              </Link>
              <Link
                href="/facilities"
                className={pathname === "/facilities" ? "active" : undefined}
                aria-current={pathname === "/facilities" ? "page" : undefined}
                onClick={closeMenu}
              >
                Facilities
              </Link>
              <Link
                href="/hse"
                className={pathname === "/hse" ? "active" : undefined}
                aria-current={pathname === "/hse" ? "page" : undefined}
                onClick={closeMenu}
              >
                Health, safety &amp; environment
              </Link>
            </div>
          </details>
          <details className={`nav-group ${isProductsPage ? "active" : ""}`}>
            <summary className={isProductsPage ? "active" : undefined}>Products</summary>
            <div className="nav-dropdown">
              <Link
                href="/products"
                className={pathname === "/products" ? "active" : undefined}
                aria-current={pathname === "/products" ? "page" : undefined}
                onClick={closeMenu}
              >
                All products
              </Link>
              <Link
                href="/grc"
                className={pathname === "/grc" ? "active" : undefined}
                aria-current={pathname === "/grc" ? "page" : undefined}
                onClick={closeMenu}
              >
                GRC / GFRC
              </Link>
              <Link
                href="/grp"
                className={pathname === "/grp" ? "active" : undefined}
                aria-current={pathname === "/grp" ? "page" : undefined}
                onClick={closeMenu}
              >
                GRP / GFRP
              </Link>
            </div>
          </details>
          <Link
            href="/quality"
            className={pathname === "/quality" ? "active" : undefined}
            aria-current={pathname === "/quality" ? "page" : undefined}
            onClick={closeMenu}
          >
            Quality
          </Link>
          <Link
            href="/contact"
            className={`mobile-quote ${pathname === "/contact" ? "active" : ""}`}
            aria-current={pathname === "/contact" ? "page" : undefined}
            onClick={closeMenu}
          >
            Request a Quote <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        <Link
          href="/contact"
          className={`button button--blue nav-cta ${pathname === "/contact" ? "active" : ""}`}
          aria-current={pathname === "/contact" ? "page" : undefined}
        >
          Request a Quote
        </Link>
      </div>
    </header>
  );
}
