import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { FacilitiesContent } from "../../components/CompanyPages";
import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata(
  "Facilities & Equipment | Al Sanna",
  "Machinery and workshop tools supporting Al Sanna GRC and GRP manufacturing.",
  "/facilities",
);

export default function FacilitiesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <FacilitiesContent />
      </main>
      <SiteFooter />
    </>
  );
}
