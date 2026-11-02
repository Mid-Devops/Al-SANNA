export function createPageMetadata(title, description) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: ["/images/logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/logo.png"],
    },
  };
}
