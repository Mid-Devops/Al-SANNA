import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { GrcContent } from "../../components/CompanyPages";
import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata(
  "GRC / GFRC Products | Al Sanna",
  "Architectural Glass Fiber Reinforced Concrete facades, decorations, planters and custom GRC products.",
);

export default function GrcPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <GrcContent />
      </main>
      <SiteFooter />
    </>
  );
}
