import type { Code } from "@/types/detail-page/interfaces";
import HighlightCodeSimple from "@/components/detail-page/HighlightCodeSimple";
import HighlightCodeComplex from "@/components/detail-page/HighlightCodeComplex";

interface HighlightCodeProps {
  copy?: boolean;
  children?: string;
  code?: Code;
}

export default function HighlightCode({
  copy,
  children,
  code,
}: HighlightCodeProps) {
  if (children) {
    return <HighlightCodeSimple copy={copy} children={children} />;
  } else if (code) {
    return <HighlightCodeComplex code={code} />;
  } else {
    throw new Error("No children and code");
  }
}
