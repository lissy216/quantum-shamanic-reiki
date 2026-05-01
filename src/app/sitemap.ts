import type { MetadataRoute } from "next";

const SITE = "https://quantumshamanicreiki.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/levels`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/training`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE}/sessions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
