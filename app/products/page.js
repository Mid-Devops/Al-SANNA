import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { ProductsContent } from "../../components/CompanyPages";
import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata(
  "Products | GRC and GRP Manufacturing",
  "Explore Al Sanna GRC/GFRC architectural products and GRP/GFRP engineering solutions.",
);

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ProductsContent />
      </main>
      <SiteFooter />
    </>
  );
}
