import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { ProductsContent } from '../../components/CompanyPages';

export const metadata = {
  title: 'Products | GRC and GRP Manufacturing',
  description: 'Explore Al Sanna GRC/GFRC architectural products and GRP/GFRP engineering solutions.',
};

export default function ProductsPage() {
  return <><SiteHeader /><main><ProductsContent /></main><SiteFooter /></>;
}
