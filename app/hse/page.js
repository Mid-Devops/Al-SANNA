import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { HseContent } from "../../components/CompanyPages";
import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata(
  "Health, Safety & Environment | Al Sanna",
  "Al Sanna health, safety and environmental commitments for office and project work.",
);

export default function HsePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HseContent />
      </main>
      <SiteFooter />
    </>
  );
}
