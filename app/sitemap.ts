import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";

interface RouteInfo {
  route: string;
  lastModified: Date;
}

function getStaticRoutes(dir: string, baseDir = dir): RouteInfo[] {
  let routes: RouteInfo[] = [];

  if (!fs.existsSync(dir)) {
    return routes;
  }

  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      if (item.name.startsWith("[") || item.name.startsWith("_")) {
        continue;
      }

      routes = routes.concat(getStaticRoutes(fullPath, baseDir));
    } else if (item.isFile() && /^page\.(tsx|jsx|js|ts)$/.test(item.name)) {
      const relativePath = path.relative(baseDir, dir);

      const normalizedPath = relativePath.replaceAll("\\", "/");

      const cleanRoute = normalizedPath
        .split("/")
        .filter((segment) => !/^\([^)]+\)$/.test(segment))
        .join("/");

      const route = cleanRoute === "" ? "" : `/${cleanRoute}`;

      const fileStats = fs.statSync(fullPath);

      routes.push({
        route,
        lastModified: fileStats.mtime,
      });
    }
  }

  return routes;
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (char) => {
    switch (char) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return char;
    }
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDirectory = path.join(process.cwd(), "app");

  const routeInfos = getStaticRoutes(appDirectory);

  return routeInfos.map(({ route, lastModified }) => {
    return {
      url: escapeXml(`${process.env.NEXT_PUBLIC_SITE_URL}${route}`),
      lastModified: lastModified,
    };
  });
}
