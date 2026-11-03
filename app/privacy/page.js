import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata(
  "Privacy Policy | Al Sanna Tank & Sheds Ind LLC",
  "Learn how Al Sanna handles contact enquiries and basic website data.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Website information</p>
            <h1>Privacy policy</h1>
            <p>Last updated: 3 November 2026</p>
          </div>
        </section>
        <section className="section">
          <article className="container privacy-copy">
            <h2>Information you provide</h2>
            <p>
              If you submit a project enquiry, we use the name, company, email, phone number,
              product interest and message you provide to respond to that enquiry. Contact
              submissions are sent to our configured HTTPS form service. If that service has not
              been configured, the form will tell you and provide our public contact email.
            </p>
            <h2>Cookies and site analytics</h2>
            <p>
              This website does not currently use analytics or advertising cookies. The contact
              security flow uses a short-lived, essential security cookie when an enquiry is
              submitted.
            </p>
            <h2>Retention and requests</h2>
            <p>
              Enquiry information is retained only as needed to respond and maintain business
              records. Contact us at{" "}
              <a href="mailto:alsannatank@gmail.com">alsannatank@gmail.com</a> to ask about
              information you submitted.
            </p>
            <h2>Contact</h2>
            <p>Al Sanna Tank &amp; Sheds Ind LLC, Sharjah, United Arab Emirates, P.O. Box 48072.</p>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
