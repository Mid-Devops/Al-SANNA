import './company.css';

export const metadata = {
  title: 'Al Sanna Tank & Sheds Ind LLC',
  description: 'GRC, GRP, GRE and GRG design, detailing, fabrication and installation in Sharjah, UAE.',
  openGraph: {
    title: 'Al Sanna Tank & Sheds Ind LLC',
    description: 'Fiber Glass Manufacturing, GRC, GRP, GRE & GRG Division',
    locale: 'en_AE',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
