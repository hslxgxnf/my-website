import type { MetadataRoute } from "next";
import path from "path";
import fs from "fs";

interface UrlInfo {
  url: string;
  lastModified: string;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return getStaticUrls(path.join(process.cwd(), "app"));
}

function getStaticUrls(dir: string, baseDir = dir): UrlInfo[] {
  let urlInfos: UrlInfo[] = [];

  if (!fs.existsSync(dir)) {
    return urlInfos;
  }

  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      if (item.name.startsWith("[") || item.name.startsWith("_")) {
        continue;
      }

      urlInfos = urlInfos.concat(getStaticUrls(fullPath, baseDir));
    } else if (item.isFile() && item.name === "page.tsx") {
      const relativePath = path.relative(baseDir, dir);
      const normalizedPath = relativePath.replaceAll("\\", "/");
      let cleanUrl = normalizedPath
        .split("/")
        .filter((segment) => !/^\([^)]+\)$/.test(segment))
        .join("/");
      cleanUrl = cleanUrl === "" ? "" : `/${cleanUrl}`;
      const url = escapeXml(`${process.env.NEXT_PUBLIC_SITE_URL}${cleanUrl}`);

      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const match = fileContent.match(/lastUpdated=["']([^"']+)["']/);
      const fileStats = fs.statSync(fullPath);
      const lastModified =
        match && match[1]
          ? match[1]
          : fileStats.mtime.toISOString().split("T")[0];

      urlInfos.push({
        url,
        lastModified,
      });
    }
  }

  return urlInfos;
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
