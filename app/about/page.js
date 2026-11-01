import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { AboutContent } from '../../components/CompanyPages';

export const metadata = {
  title: 'About Us | Al Sanna Tank & Sheds Ind LLC',
  description: 'Learn about Al Sanna, a Sharjah-based GRC and GRP manufacturer founded in 2006.',
};

export default function AboutPage() {
  return <><SiteHeader /><main><AboutContent /></main><SiteFooter /></>;
}
