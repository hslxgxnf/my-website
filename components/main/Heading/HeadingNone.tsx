import ArticleMetaData from "@/components/main/Heading/ArticleMetaData";

interface HeadingNoneProps {
  number: number;
  lastUpdated?: string;
  children: string;
}

export default function HeadingNone({
  number,
  lastUpdated,
  children,
}: HeadingNoneProps) {
  const Tag = `h${number}` as "h1" | "h2" | "h3";

  return (
    <Tag className="heading-none">
      <span>{children}</span>
      <ArticleMetaData number={number} lastUpdated={lastUpdated} />
    </Tag>
  );
}
