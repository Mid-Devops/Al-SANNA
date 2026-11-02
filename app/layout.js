import "./company.css";
import { createPageMetadata } from "./metadata";

export const metadata = {
  metadataBase: new URL("https://alsanna.example"),
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
    ).openGraph,
    locale: "en_AE",
  },
};

export const viewport = {
  themeColor: "#004AAD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
