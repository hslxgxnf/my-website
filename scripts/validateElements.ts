import { chromium } from "playwright";

import getDevUrls from "@/scripts/getDevUrls";

void validateElements();

// Move to predev-temp (After finishing code, move to predev)
// Refer findDeletables logic
// Find <li>
// Remove <li> and <p>
// If there are remains, remove them

async function validateElements() {
  const urls = getDevUrls();
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on("console", (msg) => {
    const text = msg.text();
    const ignoreKeywords = ["[HMR] connected", "React DevTools"];

    if (ignoreKeywords.some((keyword) => text.includes(keyword))) {
      return;
    }

    console.log(text);
  });

  for (const url of urls) {
    await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });

    // Ensure <li> contains <p> for compatibility with other components.
    await page.evaluate((currentUrl) => {
      const lists = document.querySelectorAll("body > main > article li");

      for (const list of lists) {
        if (list.classList.contains("toggle-list")) {
          if (!list.children[1]?.firstElementChild?.matches("p")) {
            console.log(`[${currentUrl}] ${list.textContent}`);
          }

          continue;
        }

        if (list.firstElementChild?.matches(".complex-code-container")) {
          continue;
        }

        if (!list.firstElementChild?.matches("p")) {
          console.log(`[${currentUrl}] ${list.textContent}`);
        }
      }
    }, url);
  }

  await browser.close();
}
