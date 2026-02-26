import Link from "next/link";
import handleClickFirstLink from "@/functions/pages/handleClickFirstLink";

interface HeadingLinkProps {
  headingNumber: number;
  children: string;
}

export default function HeadingLink({
  headingNumber,
  children,
}: HeadingLinkProps) {
  let result = null;
  const id = children.replaceAll(" ", "-").toLowerCase();
  const url = `#${id}`;

  switch (headingNumber) {
    case 1:
      result = (
        <h1 id={id}>
          <Link
            href={url}
            onClick={(event) => handleClickFirstLink(event, url)}
          >
            {children}
          </Link>{" "}
          <span>#</span>
        </h1>
      );
      break;
    case 2:
      result = (
        <h2 id={id}>
          <Link href={url}>{children}</Link> <span>#</span>
        </h2>
      );
      break;
    case 3:
      result = (
        <h3 id={id}>
          <Link href={url}>{children}</Link> <span>#</span>
        </h3>
      );
      break;
  }

  return result;
}
