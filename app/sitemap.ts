import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: 'https://www.bandhannova.in', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
        { url: 'https://www.bandhannova.in/products', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ];
}
