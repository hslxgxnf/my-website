import { type MouseEvent } from "react";

export default function setTooltip(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement;

  if (target.scrollWidth > target.clientWidth) {
    target.setAttribute("title", target.textContent);
  } else {
    target.removeAttribute("title");
  }
}
