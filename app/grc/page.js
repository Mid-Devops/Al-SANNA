import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { GrcContent } from '../../components/CompanyPages';

export const metadata = {
  title: 'GRC / GFRC Products | Al Sanna',
  description: 'Architectural Glass Fiber Reinforced Concrete facades, decorations, planters and custom GRC products.',
};

export default function GrcPage() {
  return <><SiteHeader /><main><GrcContent /></main><SiteFooter /></>;
}
