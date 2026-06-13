import { format, parseISO } from "date-fns";

interface DateProps {
  headingNumber: 1 | 2 | 3;
  lastUpdated?: string;
}

export default function ArticleMetaData({
  headingNumber,
  lastUpdated,
}: DateProps) {
  if (headingNumber !== 1) {
    return null;
  }

  if (!lastUpdated) {
    console.error("No lastUpdated");
    return null;
  }

  const dateFormat = "MMMM dd, yyyy";

  return (
    <aside>
      <small>
        Last Updated:{" "}
        <time dateTime={lastUpdated}>
          {format(parseISO(lastUpdated), dateFormat)}
        </time>
      </small>
    </aside>
  );
}
