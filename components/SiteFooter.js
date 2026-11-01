import Link from 'next/link';
import { BackToTop, WhatsAppLink } from './Interactions';

const phoneLinks = [
  { label: '06-5104783', href: 'tel:+97165104783' },
  { label: '055 6441028', href: 'tel:+971556441028' },
  { label: '050-5854789', href: 'tel:+971505854789' },
];

export default function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link href="/" className="footer-brand" aria-label="Al Sanna home">
            <img src="/images/logo.svg" alt="Al Sanna Tank & Sheds Ind LLC" width="230" height="58" loading="lazy" />
          </Link>
          <p lang="ar" dir="rtl">شركة السنا لخزانات ومستودعات الصناعات ذ.م.م</p>
          <p>Design, detailing, fabrication and installation in GRC, GRP, GRE and GRG.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <ul className="footer-links">
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/quality">Quality &amp; sustainability</Link></li>
            <li><Link href="/team">Our team</Link></li>
            <li><Link href="/facilities">Facilities</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <address>Sharjah, U.A.E.<br />P.O. Box 48072<br /><a href="mailto:alsannatank@gmail.com">alsannatank@gmail.com</a></address>
          <ul className="footer-links phone-list">
            {phoneLinks.map((phone) => <li key={phone.href}><a href={phone.href}>{phone.label}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 Al Sanna Tank &amp; Sheds Ind LLC. All rights reserved.</span>
          <span className="footer-tagline">Fiber Glass Manufacturing, GRC, GRP, GRE &amp; GRG Division</span>
        </div>
      </div>
      </footer>
      <WhatsAppLink />
      <BackToTop />
    </>
  );
}
