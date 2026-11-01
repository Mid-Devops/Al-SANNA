'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const targets = document.querySelectorAll('.section-heading, .service-card, .application-item, .value-card, .gallery-item, .commitment-card, .org-branch, .market-grid article');
    targets.forEach((target) => target.classList.add('motion-reveal'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label="Al Sanna Tank & Sheds home" onClick={closeMenu}>
          <img src="/images/logo.svg" alt="Al Sanna Tank & Sheds Ind LLC" className="brand-logo" width="230" height="58" />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          <Link href="/" aria-current={pathname === '/' ? 'page' : undefined} onClick={closeMenu}>Home</Link>
          <details className="nav-group">
            <summary>Company</summary>
            <div className="nav-dropdown">
              <Link href="/about" onClick={closeMenu}>About us</Link>
              <Link href="/team" onClick={closeMenu}>Our team</Link>
              <Link href="/facilities" onClick={closeMenu}>Facilities</Link>
              <Link href="/hse" onClick={closeMenu}>Health, safety &amp; environment</Link>
            </div>
          </details>
          <details className="nav-group">
            <summary>Products</summary>
            <div className="nav-dropdown">
              <Link href="/products" onClick={closeMenu}>All products</Link>
              <Link href="/grc" onClick={closeMenu}>GRC / GFRC</Link>
              <Link href="/grp" onClick={closeMenu}>GRP / GFRP</Link>
            </div>
          </details>
          <Link href="/quality" aria-current={pathname === '/quality' ? 'page' : undefined} onClick={closeMenu}>Quality</Link>
          <Link href="/contact" className="mobile-quote" onClick={closeMenu}>Request a Quote <span aria-hidden="true">↗</span></Link>
        </nav>

        <Link href="/contact" className="button button-blue nav-cta">Request a Quote</Link>
      </div>
    </header>
  );
}
