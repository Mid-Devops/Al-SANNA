import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { HseContent } from '../../components/CompanyPages';

export const metadata = {
  title: 'Health, Safety & Environment | Al Sanna',
  description: 'Al Sanna health, safety and environmental commitments for office and project work.',
};

export default function HsePage() {
  return <><SiteHeader /><main><HseContent /></main><SiteFooter /></>;
}
