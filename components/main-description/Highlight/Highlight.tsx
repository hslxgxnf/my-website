import type { Code } from "@/types/main/interfaces";
import HighlightMath from "@/components/main-description/Highlight/HighlightMath";
import HighlightText from "@/components/main-description/Highlight/HighlightText";
import HighlightSimpleCode from "@/components/main-description/Highlight/HighlightSimpleCode";
import HighlightComplexCode from "@/components/main-description/Highlight/HighlightComplexCode";

interface HighlightProps {
  type: "underline" | "math" | "text" | "simple-code" | "complex-code";
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
  if (type === "underline" && typeof children === "string") {
    if (copy || pre) {
      console.error('type="underline" does not support copy and pre.');
      return null;
    }

    return <span className="underline">{children}</span>;
  }

  if (type === "math" && typeof children === "string") {
    if (copy || pre) {
      console.error('type="math" does not support copy and pre.');
      return null;
    }

    return <HighlightMath>{children}</HighlightMath>;
  }

  if (type === "text" && typeof children === "string") {
    return (
      <HighlightText copy={copy} pre={pre}>
        {children}
      </HighlightText>
    );
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
