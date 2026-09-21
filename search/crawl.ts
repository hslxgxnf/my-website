import { chromium } from "playwright";
import path from "path";
import fs from "fs";

import copyRange from "@/functions/all/copyRange";

void run();

async function run() {
  const BASE_URL = "http://localhost:3000";
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  let urls: string[] = [];
  try {
    const response = await page.goto(`${BASE_URL}/sitemap.xml`);
    const sitemapText = (await response?.text()) ?? "";
    const sitemapUrls = sitemapText.match(/<loc>(.*?)<\/loc>/g);
    if (sitemapUrls) {
      urls = sitemapUrls.map((sitemapUrl) => {
        let cleanUrl = sitemapUrl.replace(/<\/?loc>/g, "");
        cleanUrl = unescapeXml(cleanUrl);
        cleanUrl = cleanUrl.replace(/^https?:\/\/[^\/]+/, BASE_URL);
        return cleanUrl;
      });
    }
  } catch (error) {
    console.error("Failed to fetch sitemap.xml:", error);
  }

  const baseDirPath = path.join(process.cwd(), "search", "pages");
  if (!fs.existsSync(baseDirPath)) {
    fs.mkdirSync(baseDirPath, { recursive: true });
  } else {
    const allRelativePaths = fs.readdirSync(baseDirPath);
    for (const relativePath of allRelativePaths) {
      if (relativePath.endsWith(".txt")) {
        fs.unlinkSync(path.join(baseDirPath, relativePath));
      }
    }
  }
  for (const url of urls) {
    const pathName = new URL(url).pathname;

    try {
      let fileName = pathName.replace(/^\/|\/$/g, "").replace(/\//g, "_");
      if (!fileName) {
        fileName = "home";
      }
      const targetFilePath = path.join(baseDirPath, `${fileName}.txt`);

      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
      const content = await page.evaluate((fnSource) => {
        const fn = new Function(`return (${fnSource})()`);
        return fn();
      }, copyRange.toString());

      fs.writeFileSync(targetFilePath, content, "utf8");
    } catch (error) {
      console.error(`Failed to scrape ${pathName}:`, error);
    }
  }

  await browser.close();
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
