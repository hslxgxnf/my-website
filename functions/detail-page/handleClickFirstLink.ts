import { MouseEvent } from "react";

export default function handleClickFirstLink(
  event: MouseEvent<HTMLAnchorElement>,
  url: string,
): void {
  event.preventDefault();
  history.pushState({}, "", url);
  window.scrollTo(0, 0);
}
