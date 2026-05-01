import { isBefore, parseISO, format } from "date-fns";

interface DateProps {
  headingNumber: 1 | 2 | 3;
  publishedAt?: string;
  updatedAt?: string;
}

export default function ArticleMetaData({
  headingNumber,
  publishedAt,
  updatedAt,
}: DateProps) {
  if (headingNumber !== 1) {
    return null;
  }

  if (!publishedAt) {
    throw new Error("No publishedAt");
  }

  if (updatedAt && isBefore(parseISO(updatedAt), parseISO(publishedAt))) {
    throw new Error(
      `updatedAt: ${updatedAt} cannot be earlier than publishedAt: ${publishedAt}.`,
    );
  }

  const dateFormat = "MMMM dd, yyyy";

  return (
    <aside>
      <small>
        Published:{" "}
        <time dateTime={publishedAt}>
          {format(parseISO(publishedAt), dateFormat)}
        </time>
      </small>
      {updatedAt && (
        <small>
          Updated:{" "}
          <time dateTime={updatedAt}>
            {format(parseISO(updatedAt), dateFormat)}
          </time>
        </small>
      )}
    </aside>
  );
}
