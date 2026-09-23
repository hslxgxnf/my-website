import path from "path";
import fs from "fs";
import { loadEnvConfig } from "@next/env";

type PageName = string;
type FileName = string;
const data = new Map<PageName, FileName>([
  // The page needs the copied file content.
  ["ESLint", "eslint.config.mjs"],
  ["Stylelint", "stylelint.config.mjs"],
]);

generateFiles();

function generateFiles() {
  for (const file of data.values()) {
    const targetFileName = file.replace(".mjs", ".txt");
    const targetFilePath = path.join(__dirname, targetFileName);

    const copyFilePath = path.join(process.cwd(), file);
    const content = fs.readFileSync(copyFilePath, "utf8").trim();

    fs.writeFileSync(targetFilePath, content, "utf8");
  }
}

loadEnvConfig(process.cwd());
generateSitemap();

function generateSitemap() {
  const baseDirPath = path.join(process.cwd(), "app");
  const allRelativePaths = fs.readdirSync(baseDirPath, {
    recursive: true,
  }) as string[];

  const matchedRelativePaths = allRelativePaths.filter((relativePath) => {
    const isPage = path.basename(relativePath) === "page.tsx";

    const normalizedPath = relativePath.replaceAll("\\", "/");
    const hasPrivateFolder = normalizedPath
      .split("/")
      .some((part) => part.startsWith("_"));

    return isPage && !hasPrivateFolder;
  });

  const sitemapItems = matchedRelativePaths.map((matchedRelativePath) => {
    const normalizedPath = matchedRelativePath.replaceAll("\\", "/");
    let cleanUrl = normalizedPath
      .split("/")
      .filter((part) => !part.startsWith("(") && part !== "page.tsx")
      .join("/");
    cleanUrl = cleanUrl === "" ? "" : `/${cleanUrl}`;
    const url = escapeXml(`${process.env.NEXT_PUBLIC_SITE_URL}${cleanUrl}`);

    const fullPath = path.join(baseDirPath, matchedRelativePath);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const matchedLastUpdated = fileContent.match(
      /lastUpdated=["']([^"']+)["']/,
    );
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
