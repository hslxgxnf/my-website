import styles from "@/styles/detail-page/page.module.css";
import type { Code } from "@/types/detail-page/interfaces";
import HighlightText from "@/components/detail-page/Highlight/HighlightText";
import HighlightSimpleCode from "@/components/detail-page/Highlight/HighlightSimpleCode";
import HighlightComplexCode from "@/components/detail-page/Highlight/HighlightComplexCode";

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
    return <HighlightText copy={copy} pre={pre} children={children} />;
  }

  if (type === "underline" && typeof children === "string") {
    if (copy || pre)
      throw new Error('type="underline" does not support copy and pre.');

    return <span className={styles.underline}>{children}</span>;
  }

  if (type === "simple-code" && typeof children === "string") {
    return <HighlightSimpleCode copy={copy} pre={pre} children={children} />;
  }

  if (type === "complex-code" && typeof children !== "string") {
    if (copy === false || pre === false)
      throw new Error(
        'type="complex-code" is copy={true} and pre={pre} by default.',
      );

    return <HighlightComplexCode code={children} />;
  }

  throw new Error(
    `Unsupported: type: ${type}, copy: ${copy}, pre: ${pre}, children: ${children}`,
  );
}
