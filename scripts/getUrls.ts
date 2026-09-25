import path from "path";
import fs from "fs";

export default function getUrls(): string[] {
  const targetFilePath = path.join(process.cwd(), "app", "sitemap.xml");
  const sitemapText = fs.readFileSync(targetFilePath, "utf8").trim();
  const sitemapUrls = sitemapText.match(/<loc>(.*?)<\/loc>/g);
  if (!sitemapUrls) {
    console.error("No sitemapUrls");
    return [];
  }

  const BASE_URL = "http://localhost:3000";
  return sitemapUrls.map((sitemapUrl) => {
    let cleanUrl = sitemapUrl.replace(/<\/?loc>/g, "");
    cleanUrl = unescapeXml(cleanUrl);
    cleanUrl = cleanUrl.replace(/^https?:\/\/[^\/]+/, BASE_URL);
    return cleanUrl;
  });
}

function unescapeXml(safe: string): string {
  return safe.replace(/&(lt|gt|amp|apos|quot);/g, (entity) => {
    switch (entity) {
      case "&lt;":
        return "<";
      case "&gt;":
        return ">";
      case "&amp;":
        return "&";
      case "&apos;":
        return "'";
      case "&quot;":
        return '"';
      default:
        return entity;
    }
  });
}
