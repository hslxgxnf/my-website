import styles from "@/styles/main-description-&-list/page.module.scss";
import type { Code } from "@/types/main/interfaces";
import HighlightText from "@/components/main-description/Highlight/HighlightText";
import HighlightSimpleCode from "@/components/main-description/Highlight/HighlightSimpleCode";
import HighlightComplexCode from "@/components/main-description/Highlight/HighlightComplexCode";

interface HighlightProps {
  type: "text" | "underline" | "simple-code" | "complex-code";
  copy?: boolean;
  pre?: boolean;
  children: string | Code;
}

export default function Highlight({
  type,
  copy,
  pre,
  children,
}: HighlightProps) {
  if (type === "text" && typeof children === "string") {
    return (
      <HighlightText copy={copy} pre={pre}>
        {children}
      </HighlightText>
    );
  }

  if (type === "underline" && typeof children === "string") {
    if (copy || pre) {
      console.error('type="underline" does not support copy and pre.');
      return null;
    }

    return <span className={styles.underline}>{children}</span>;
  }

  if (type === "simple-code" && typeof children === "string") {
    return (
      <HighlightSimpleCode copy={copy} pre={pre}>
        {children}
      </HighlightSimpleCode>
    );
  }

  if (type === "complex-code" && typeof children !== "string") {
    if (copy === false || pre === false) {
      console.error(
        'type="complex-code" is copy={true} and pre={pre} by default.',
      );
      return null;
    }

    return <HighlightComplexCode>{children}</HighlightComplexCode>;
  }

  console.error(
    `Unsupported: type: ${type}, copy: ${copy}, pre: ${pre}, children: ${children}`,
  );
  return null;
}
