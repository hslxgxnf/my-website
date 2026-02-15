import Link from "next/link";
import handleClickFirstLink from "@/utils/functions/handleClickFirstLink";

interface HeadingLinkProps {
  headingNumber: number;
  children: string;
}

export default function HeadingLink({
  headingNumber,
  children,
}: HeadingLinkProps) {
  let result = null;
  const id = children.replace(/\s/g, "-").toLowerCase();

  switch (headingNumber) {
    case 1:
      result = (
        <h1 id={id}>
          <Link
            href={`#${id}`}
            onClick={(event) => handleClickFirstLink(event, id)}
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
          <Link href={`#${id}`}>{children}</Link> <span>#</span>
        </h2>
      );
      break;
    case 3:
      result = (
        <h3 id={id}>
          <Link href={`#${id}`}>{children}</Link> <span>#</span>
        </h3>
      );
      break;
    default:
      throw new Error(
        `Entered an unspecified heading number: ${headingNumber}`,
      );
  }

  return result;
}
