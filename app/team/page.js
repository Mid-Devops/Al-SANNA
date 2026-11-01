import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { TeamContent } from '../../components/CompanyPages';

export const metadata = {
  title: 'Our Team | Al Sanna Tank & Sheds Ind LLC',
  description: 'Meet the production, sales and accounts teams supporting Al Sanna projects.',
};

export default function TeamPage() {
  return <><SiteHeader /><main><TeamContent /></main><SiteFooter /></>;
}
