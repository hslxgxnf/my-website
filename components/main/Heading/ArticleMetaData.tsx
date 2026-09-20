import { format, parseISO } from "date-fns";

interface ArticleMetaDataProps {
  number: number;
  lastUpdated?: string;
}

export default function ArticleMetaData({
  number,
  lastUpdated,
}: ArticleMetaDataProps) {
  if (number !== 1) {
    return null;
  }

  if (!lastUpdated) {
    console.error("No lastUpdated");
    return null;
  }

  const dateFormat = "MMMM dd, yyyy";

  return (
    <aside className="last-updated">
      <small>
        Last Updated:{" "}
        <time dateTime={lastUpdated}>
          {format(parseISO(lastUpdated), dateFormat)}
        </time>
      </small>
    </aside>
  );
}
