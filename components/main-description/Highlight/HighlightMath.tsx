import "katex/dist/katex.min.css";
import katex from "katex";

interface HighlightMathProps {
  children: string;
}

export default function HighlightMath({ children }: HighlightMathProps) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: false,
  });

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
