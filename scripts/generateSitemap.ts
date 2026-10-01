import { loadEnvConfig } from "@next/env";
import path from "path";
import fs from "fs";

loadEnvConfig(process.cwd());

generateSitemap();

function generateSitemap() {
  const baseDirPath = path.join(process.cwd(), "app");
  const allRelativePaths = fs.readdirSync(baseDirPath, {
    recursive: true,
  }) as string[];

  const filteredRelativePaths = allRelativePaths.filter((relativePath) => {
    const isPage = path.basename(relativePath) === "page.tsx";

    const normalizedPath = relativePath.replaceAll("\\", "/");
    const hasPrivateFolder = normalizedPath
      .split("/")
      .some((part) => part.startsWith("_"));

    return isPage && !hasPrivateFolder;
  });

  const sitemapItems = filteredRelativePaths.map((filteredRelativePath) => {
    const normalizedPath = filteredRelativePath.replaceAll("\\", "/");
    let cleanUrl = normalizedPath
      .split("/")
      .filter((part) => !part.startsWith("(") && part !== "page.tsx")
      .join("/");
    cleanUrl = cleanUrl === "" ? "" : `/${cleanUrl}`;
    const url = escapeXml(`${process.env.NEXT_PUBLIC_SITE_URL}${cleanUrl}`);

    const fullPath = path.join(baseDirPath, filteredRelativePath);
    const content = fs.readFileSync(fullPath, "utf8");
    const matchedLastUpdated = content.match(/lastUpdated=["']([^"']+)["']/);
    const fileStats = fs.statSync(fullPath);
    const lastModified =
      matchedLastUpdated && matchedLastUpdated[1]
        ? matchedLastUpdated[1]
        : fileStats.mtime.toISOString().split("T")[0];

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastModified}</lastmod>
  </url>`;
  });

  const sitemapXml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapItems.join("\n")}
</urlset>`;

  fs.writeFileSync(
    path.join(process.cwd(), "app", "sitemap.xml"),
    sitemapXml,
    "utf8",
  );
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
