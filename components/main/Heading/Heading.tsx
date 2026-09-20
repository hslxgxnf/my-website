import HeadingLinkId from "@/components/main/Heading/HeadingLinkId";
import HeadingLinkPage from "@/components/main/Heading/HeadingLinkPage";
import HeadingNone from "@/components/main/Heading/HeadingNone";

interface HeadingProps {
  type: "link-id" | "link-page" | "none";
  number: 1 | 2 | 3;
  /**
   * "YYYY-MM-DD"
   */
  lastUpdated?: string;
  children: string;
}

export default function Heading({
  type,
  number,
  lastUpdated,
  children,
}: HeadingProps) {
  if (type === "link-id") {
    return (
      <HeadingLinkId number={number} lastUpdated={lastUpdated}>
        {children}
      </HeadingLinkId>
    );
  }

  if (type === "link-page") {
    if (number !== 3) {
      console.error("The type link-page must be used with the number 3.");
      return null;
    }

    return <HeadingLinkPage>{children}</HeadingLinkPage>;
  }

  if (type === "none") {
    return (
      <HeadingNone number={number} lastUpdated={lastUpdated}>
        {children}
      </HeadingNone>
    );
  }
}
