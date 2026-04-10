import type { ReactNode } from "react";

import ReferenceButtonDefault from "@/components/detail-page/Reference/ReferenceButton/ReferenceButtonDefault";
import ReferenceButtonTable from "@/components/detail-page/Reference/ReferenceButton/ReferenceButtonTable";

interface ReferenceButtonProps {
  type?: "default" | "table";
  children: ReactNode;
}

export default function ReferenceButton({
  type = "default",
  children,
}: ReferenceButtonProps) {
  if (type === "default") {
    return (
      <ReferenceButtonDefault type={type}>{children}</ReferenceButtonDefault>
    );
  } else if (type === "table") {
    return <ReferenceButtonTable type={type}>{children}</ReferenceButtonTable>;
  } else {
    throw new Error(`Unsupported type: ${type}`);
  }
}
