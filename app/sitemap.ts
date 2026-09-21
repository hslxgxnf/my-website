import type { MetadataRoute } from "next";
import path from "path";
import fs from "fs";

export default function sitemap(): MetadataRoute.Sitemap {
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

  return matchedRelativePaths.map((matchedRelativePath) => {
    const normalizedPath = matchedRelativePath.replaceAll("\\", "/");
    let cleanUrl = normalizedPath
      .split("/")
      .filter((part) => !part.startsWith("(") && part !== "page.tsx")
      .join("/");
    cleanUrl = cleanUrl === "" ? "" : `/${cleanUrl}`;
    const url = escapeXml(`${process.env.NEXT_PUBLIC_SITE_URL}${cleanUrl}`);

    const fullPath = path.join(baseDirPath, matchedRelativePath);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const match = fileContent.match(/lastUpdated=["']([^"']+)["']/);
    const fileStats = fs.statSync(fullPath);
    const lastModified =
      match && match[1]
        ? match[1]
        : fileStats.mtime.toISOString().split("T")[0];

    return {
      url,
      lastModified,
    };
  });
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
