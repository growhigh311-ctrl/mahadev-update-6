import fs from 'fs';
import path from 'path';

export default function sitemap() {
  const baseUrl = 'https://mahadevbookie.site';
  const appDir = path.join(process.cwd(), 'app');
  const routes: string[] = [];

  function walk(dir: string) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        const folderName = file.toLowerCase();
        if (['api', 'admin', '_next', 'private', '404', 'components', 'layout', 'context', 'page-templates', 'assets', 'config', 'lib'].indexOf(folderName) === -1) {
          walk(fullPath);
        }
      } else if (file === 'page.tsx' || file === 'page.jsx') {
        const relPath = path.relative(appDir, dir).replace(/\\/g, '/');
        if (relPath.includes('[') || relPath.includes(']')) {
          continue;
        }
        routes.push(relPath);
      }
    }
  }

  walk(appDir);
  const uniqueRoutes = Array.from(new Set(routes));
  return uniqueRoutes.map((route) => {
    const url = route === '' ? baseUrl : `${baseUrl}/${route}`;
    return {
      url: url,
      lastModified: new Date(),
      changeFrequency: 'daily' ,
      priority: route === '' ? 1.0 : 0.8,
    };
  });
}