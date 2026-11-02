import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { TeamContent } from "../../components/CompanyPages";
import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata(
  "Our Team | Al Sanna Tank & Sheds Ind LLC",
  "Meet the production, sales and accounts teams supporting Al Sanna projects.",
);

export default function TeamPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <TeamContent />
      </main>
      <SiteFooter />
    </>
  );
}
