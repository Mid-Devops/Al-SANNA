import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { QualityContent } from '../../components/CompanyPages';

export const metadata = {
  title: 'Quality & Sustainability | Al Sanna',
  description: 'Al Sanna quality, ethical sourcing and sustainability commitments for GRC and GRP manufacturing.',
};

export default function QualityPage() {
  return <><SiteHeader /><main><QualityContent /></main><SiteFooter /></>;
}
