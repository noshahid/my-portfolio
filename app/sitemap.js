import { siteConfig } from './metadata';

export default function sitemap() {
  const baseUrl = siteConfig.url;
  
  // Add all your main routes here
  const routes = [
    '',
    '/about',
    '/portfolio',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
} 