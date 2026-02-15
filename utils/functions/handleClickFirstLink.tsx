import { MouseEvent } from "react";

export default function handleClickFirstLink(
  event: MouseEvent<HTMLAnchorElement>,
  id: string,
): void {
  event.preventDefault();
  history.pushState(null, "", `#${id}`);
  window.scrollTo(0, 0);
}
