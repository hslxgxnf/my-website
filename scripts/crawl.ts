import path from "path";
import fs from "fs";
import { chromium } from "playwright";

import getUrls from "@/scripts/getUrls";
import copyRange from "@/functions/all/copyRange";

void run();

async function run() {
  // Clear existing files to prevent deleted pages from lingering.
  const baseDirPath = path.join(process.cwd(), "search", "pages");
  fs.rmSync(baseDirPath, { recursive: true, force: true });
  fs.mkdirSync(baseDirPath, { recursive: true });

  const urls = getUrls();
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const url of urls) {
    const pathName = new URL(url).pathname;

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
  }

  await browser.close();
}
