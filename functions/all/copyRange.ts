export default function copyRange(range?: Range): string {
  const tempDiv = document.createElement("div");

  if (range) {
    // GlobalEvents.tsx
    const fragment = range.cloneContents();
    tempDiv.append(fragment);
  } else {
    // crawl.ts
    const selectors = ["header", "main"];
    selectors.forEach((selector) => {
      const element = document.body.querySelector(selector);
      if (!element) {
        console.error("No element");
        return;
      }
      tempDiv.append(element.cloneNode(true));
    });
  }

  const navAriaLabelsToRemain = [
    "Scroll main navigation",
    "Breadcrumb navigation",
    "All reference navigation",
    "Page navigation",
  ];
  const navsToRemove = Array.from(tempDiv.querySelectorAll("nav")).filter(
    (nav) => {
      if (nav.textContent === "") {
        return true;
      }

      const ariaLabel = nav.getAttribute("aria-label") ?? "";
      return !navAriaLabelsToRemain.includes(ariaLabel);
    },
  );
  navsToRemove.forEach((nav) => {
    nav.remove();
  });

  const lastUpdated = tempDiv.querySelector(".last-updated");
  if (lastUpdated) {
    lastUpdated.prepend(" [");
    lastUpdated.append("]");
  }

  const mathElements = tempDiv.querySelectorAll(".math");
  for (const mathElement of mathElements) {
    const annotation = mathElement.querySelector("annotation");
    if (annotation) {
      mathElement.replaceWith(`$${annotation.textContent}$`);
    } else {
      mathElement.remove();
    }
  }

  const tableRows = tempDiv.querySelectorAll("tr");
  tableRows.forEach((tableRow) => {
    const tableColumns = Array.from(tableRow.querySelectorAll("th, td"));

    tableColumns.forEach((tableColumn) => {
      const breaks = Array.from(tableColumn.querySelectorAll("br"));
      breaks.forEach((br) => br.replaceWith(" "));

      if (!tableColumn.textContent) {
        tableColumn.textContent = "X";
      }
    });

    let text = "";
    for (let i = 1; i < tableColumns.length; i++) {
      text += ` | ${tableColumns[i].textContent}`;
      tableColumns[i].textContent = "";
    }
    tableColumns[0].textContent += text;
  });

  const newLineElements = tempDiv.querySelectorAll(
    "nav, article, h1, h2, h3, p, li, br, .complex-code-container, table, caption, tr",
  );
  newLineElements.forEach((newLineElement) => {
    if (newLineElement.localName === "nav") {
      const ariaLabel = newLineElement.getAttribute("aria-label") ?? "";

      switch (ariaLabel) {
        case navAriaLabelsToRemain[0]:
          newLineElement.prepend("***Main Navigation\n");
          newLineElement.append("***\n\n");
          return;
        case navAriaLabelsToRemain[1]:
          if (newLineElement.textContent === "") {
            newLineElement.prepend("Home");
          }
          newLineElement.prepend("***Article Navigation\n");
          newLineElement.append("\n***\n\n");
          return;
        case navAriaLabelsToRemain[2]:
          newLineElement.querySelector("h2")!.textContent =
            "***Reference Navigation";
          newLineElement.append("***\n\n");
          return;
        case navAriaLabelsToRemain[3]:
          newLineElement.prepend("***Page Navigation\n");
          newLineElement.append("***\n\n");
          return;
        default:
          return;
      }
    }

    if (newLineElement.localName === "article") {
      newLineElement.prepend("***Article\n");
      newLineElement.append("***\n\n");
      return;
    }

    if (newLineElement.localName === "li") {
      if (newLineElement.querySelector("a")) {
        newLineElement.append("\n");
      }
      return;
    }

    if (newLineElement.classList.contains("complex-code-container")) {
      newLineElement.querySelector("span")?.append("\n");
      newLineElement.querySelector("button")?.remove();
      newLineElement.prepend("```code\n");
      newLineElement.append("\n```\n");
      return;
    }

    if (newLineElement.localName === "table") {
      newLineElement.prepend("```table\n");
      newLineElement.append("```\n");
      return;
    }

    newLineElement.append("\n"); // h1, h2, h3, p, br, caption, tr
  });

  let formattedText = tempDiv.textContent;

  // Horizontal Trim
  const lines = [];
  let isCodeBlock = false;
  for (const line of formattedText.split("\n")) {
    const trimmedLine = line.trim();

    if (!isCodeBlock && trimmedLine === "```code") {
      isCodeBlock = true;
      lines.push(line);
      continue;
    }

    if (isCodeBlock && trimmedLine === "```") {
      isCodeBlock = false;
      lines.push(line);
      continue;
    }

    if (isCodeBlock) {
      lines.push(line);
    } else {
      lines.push(trimmedLine);
    }
  }
  formattedText = lines.join("\n");

  // Vertical Trim
  formattedText = formattedText.trim();

  // Maximum Blank Line: 1
  formattedText = formattedText.replace(
    /(```code[\s\S]*?```)|((\n\s*){2,})/g,
    (_, codeBlock) => {
      if (codeBlock) {
        return codeBlock;
      }

      return "\n\n";
    },
  );

  return formattedText;
}
