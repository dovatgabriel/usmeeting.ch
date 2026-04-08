import { getGalleryYears } from "@/lib/gallery";
import { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://usmeeting.ch";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const years = await getGalleryYears();

  const galleryEntries = years.map((y) => ({
    url: `${BASE}/gallery/${y.year}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE}/story`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...galleryEntries,
  ];
}
