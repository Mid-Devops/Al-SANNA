import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { FacilitiesContent } from '../../components/CompanyPages';

export const metadata = {
  title: 'Facilities & Equipment | Al Sanna',
  description: 'Machinery and workshop tools supporting Al Sanna GRC and GRP manufacturing.',
};

export default function FacilitiesPage() {
  return <><SiteHeader /><main><FacilitiesContent /></main><SiteFooter /></>;
}
