# Files

- root-layout/layout.css
- root-page/page.module.css
- detail-page/page.module.css
- junction-page/page.module.css

# Space

- space-10
  - root-layout/layout.css
    - code.example
      - padding
    - code.emphasis
      - padding
  - detail-page/page.module.css
    - .main > aside:nth-of-type(1) > nav
      - padding
    - .main > aside:nth-of-type(1) > nav > header
      - margin-bottom
    - .main > aside:nth-of-type(1) > nav > main > ul > li
      - margin-bottom
    - .main > aside:nth-of-type(1) > nav > main > ul > li > a
      - gap
    - .main > aside:nth-of-type(2) > nav
      - padding
    - .main > aside:nth-of-type(2) > nav > header
      - margin-bottom
    - .main > aside:nth-of-type(2) > nav > main > ul > li
      - margin-bottom
    - .main > aside:nth-of-type(2) > nav > main > ul > li > hr
      - margin-top
    - .main > article .pre-code-container > header
      - padding
    - .main > article .pre-code-container > header > button
      - gap
    - .main > article .pre-code-container > header > button
      - padding
- space-20
  - root-layout/layout.css
    - html
      - scroll-padding-top
    - body > header > nav:first-child
      - padding
  - detail-page/page.module.css
    - .main > aside:nth-of-type(2) > nav > main > ul > li.indent
      - margin-left
    - .main > article h1, h2, h3, p, hr, ul, li
      - margin-bottom
    - .main > article li > ul
      - margin-top
    - .main > article .pre-code-container
      - margin-bottom
    - .main > article .pre-code-container > header
      - padding
    - .main > article li:has(> .pre-code-container) > .pre-code-container
      - margin-top
  - junction-page/page.module.css
    - .main > h1, h2, h3, hr
      - margin-bottom
- space-40
  - root-layout/layout.css
    - body > header > nav:first-child
      - padding
    - body > header > nav:first-child > ul
      - gap
    - body > header > nav:last-child
      - height
    - body > header > nav:last-child > ul
      - padding-left
  - root-page/page.module.css
    - .main
      - padding-top
  - detail-page/page.module.css
    - .main > aside:nth-of-type(2) > nav
      - top
    - .main > article
      - padding
    - .main > article ul
      - padding-left
    - .main > article ul > .reference-button-container > button
      - left
    - .main > article ul ul > .reference-button-container > button
      - left
    - .main > article ul ul ul > .reference-button-container > button
      - left
  - junction-page/page.module.css
    - .main > article
      - padding
- space-50
  - detail-page/page.module.css
    - .main > article .reference-button-container > button:has(+ p)
      - left
    - .main > article ul > .reference-button-container > button
      - left
    - .main > article ul ul > .reference-button-container > button
      - left
    - .main > article ul ul ul > .reference-button-container > button
      - left
- space-60
  - detail-page/page.module.css
    - .main > article .reference-button-container > button:has(+ h1)
      - left
    - .main > article .reference-button-container > button:has(+ h2)
      - left
    - .main > article .reference-button-container > button:has(+ h3)
      - left
- height-header
  - root-layout/layout.css
    - html
      - scroll-padding-top
    - body > header
      - flex-basis
  - detail-page/page.module.css
    - .main > aside:nth-of-type(2) > nav
      - top

# Border Radius

# Background Color

# Font Size

# Color
