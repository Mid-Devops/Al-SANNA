import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { HomeContent } from '../components/CompanyPages';

export const metadata = {
  title: 'Al Sanna Tank & Sheds Ind LLC | GRC & GRP Solutions',
  description: 'Design, detailing, fabrication and installation of GRC and GRP products across the UAE and beyond.',
};

export default function HomePage() {
  return <><SiteHeader /><main><HomeContent /></main><SiteFooter /></>;
}
