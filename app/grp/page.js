import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { GrpContent } from '../../components/CompanyPages';

export const metadata = {
  title: 'GRP / GFRP Products | Al Sanna',
  description: 'Corrosion-resistant Glass Fiber Reinforced Plastic tanks, sheds and custom industrial products.',
};

export default function GrpPage() {
  return <><SiteHeader /><main><GrpContent /></main><SiteFooter /></>;
}
