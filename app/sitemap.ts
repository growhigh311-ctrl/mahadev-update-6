import { MetadataRoute } from 'next';
import { blogPosts } from '../lib/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://themahadevbook.info';

  const routes = [
    '',
    '/about',
    '/blog',
    '/mahadev-betting-app',
    '/mahadev-book-id',
    '/faq',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
