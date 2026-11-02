import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { ContactContent } from "../../components/CompanyPages";
import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata(
  "Contact | Al Sanna Tank & Sheds Ind LLC",
  "Contact Al Sanna in Sharjah, UAE for GRC, GRP, tank and shed project enquiries.",
);

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ContactContent />
      </main>
      <SiteFooter />
    </>
  );
}
