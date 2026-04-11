import type { MouseEvent } from "react";

export default function handleClickFirstLink(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
): void {
  event.preventDefault();
  history.pushState({}, "", href);
  window.scrollTo(0, 0);
}
