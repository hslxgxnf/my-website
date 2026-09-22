import SRHelper from "@/components/main-description/SRHelper";

interface HighlightKeyboardProps {
  children: string;
}

export default function HighlightKeyboard({
  children,
}: HighlightKeyboardProps) {
  return (
    <span className="keyboard">
      {children.split(" ").map((part, index) => {
        if (part === "+") {
          return <span key={index}>{" + "}</span>;
        } else if (part === "*") {
          return (
            <span key={index}>
              {" "}
              <SRHelper type="next" />{" "}
            </span>
          );
        } else {
          return <kbd key={index}>{part}</kbd>;
        }
      })}
    </span>
  );
}
