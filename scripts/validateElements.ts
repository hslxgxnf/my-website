import { chromium } from "playwright";

import getDevUrls from "@/scripts/getDevUrls";

void validateElements();

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

    // Ensure <li> contains appropriate children.
    await page.evaluate((currentUrl) => {
      const lists = document.querySelectorAll("body > main > article li");

      for (const list of lists) {
        if (list.classList.contains("toggle-list")) {
          for (const child of list.children) {
            if (child.localName === "button") {
              continue;
            }

            for (const descendant of child.childNodes) {
              if (descendant.nodeType === Node.TEXT_NODE) {
                console.log(currentUrl);
                console.log("Node.TEXT_NODE");
                console.log(descendant.textContent);
              } else if (descendant.nodeType === Node.ELEMENT_NODE) {
                const descendantElement = descendant as Element;
                const tag = descendantElement.localName;

                if (
                  tag === "p" ||
                  tag === "ul" ||
                  tag === "ol" ||
                  (tag === "div" &&
                    descendantElement.classList.contains(
                      "complex-code-container",
                    ))
                ) {
                  continue;
                }

                console.log(currentUrl);
                console.log("Node.ELEMENT_NODE");
                console.log(descendantElement.outerHTML);
              } else {
                console.log(currentUrl);
                console.log(descendant.nodeName);
                console.log(descendant.nodeValue);
              }
            }
          }

          continue;
        }

        for (const child of list.childNodes) {
          if (child.nodeType === Node.TEXT_NODE) {
            console.log(currentUrl);
            console.log("Node.TEXT_NODE");
            console.log(child.textContent);
          } else if (child.nodeType === Node.ELEMENT_NODE) {
            const childElement = child as Element;
            const tag = childElement.localName;

            if (
              tag === "p" ||
              tag === "ul" ||
              tag === "ol" ||
              (tag === "div" &&
                childElement.classList.contains("complex-code-container"))
            ) {
              continue;
            }

            console.log(currentUrl);
            console.log("Node.ELEMENT_NODE");
            console.log(childElement.outerHTML);
          } else {
            console.log(currentUrl);
            console.log(child.nodeName);
            console.log(child.nodeValue);
          }
        }
      }
    }, url);
  }

  await browser.close();
}
