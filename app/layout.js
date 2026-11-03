import "./company.css";
import { headers } from "next/headers";
import { createPageMetadata } from "./metadata";

export const metadata = {
  metadataBase: new URL("https://alsannauae.com"),
  ...createPageMetadata(
    "Al Sanna Tank & Sheds Ind LLC",
    "GRC, GRP, GRE and GRG design, detailing, fabrication and installation in Sharjah, UAE.",
  ),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    ...createPageMetadata(
      "Al Sanna Tank & Sheds Ind LLC",
      "GRC, GRP, GRE and GRG design, detailing, fabrication and installation in Sharjah, UAE.",
      "/",
    ).openGraph,
    locale: "en_AE",
  },
};

export const viewport = {
  themeColor: "#004AAD",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://alsannauae.com/#organization",
      name: "Al Sanna Tank & Sheds Ind LLC",
      alternateName: "شركة السنا لخزانات ومستودعات الصناعات ذ.م.م",
      url: "https://alsannauae.com/",
      logo: "https://alsannauae.com/images/logo.png",
      email: "alsannatank@gmail.com",
      telephone: ["+97165104783", "+971556441028", "+971505854789"],
      address: {
        "@type": "PostalAddress",
        postOfficeBoxNumber: "48072",
        addressLocality: "Sharjah",
        addressCountry: "AE",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://alsannauae.com/#localbusiness",
      name: "Al Sanna Tank & Sheds Ind LLC",
      url: "https://alsannauae.com/",
      parentOrganization: { "@id": "https://alsannauae.com/#organization" },
      telephone: ["+97165104783", "+971556441028", "+971505854789"],
      address: {
        "@type": "PostalAddress",
        postOfficeBoxNumber: "48072",
        addressLocality: "Sharjah",
        addressCountry: "AE",
      },
    },
  ],
};

export default async function RootLayout({ children }) {
  const nonce = (await headers()).get("x-nonce");
  const jsonLd = JSON.stringify(structuredData).replace(/</g, "\\u003c");

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          nonce={nonce ?? undefined}
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </body>
    </html>
  );
}
