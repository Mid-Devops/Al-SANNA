import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { QualityContent } from "../../components/CompanyPages";
import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata(
  "Quality & Sustainability | Al Sanna",
  "Al Sanna quality, ethical sourcing and sustainability commitments for GRC and GRP manufacturing.",
  "/quality",
);

export default function QualityPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <QualityContent />
      </main>
      <SiteFooter />
    </>
  );
}
