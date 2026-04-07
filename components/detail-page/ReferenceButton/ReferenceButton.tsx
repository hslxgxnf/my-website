import { ReactNode } from "react";

import ReferenceButtonTable from "@/components/detail-page/ReferenceButton/ReferenceButtonTable";
import ReferenceButtonDefault from "@/components/detail-page/ReferenceButton/ReferenceButtonDefault";

interface ReferenceButtonProps {
  children: ReactNode;
  table?: boolean;
}

export default function ReferenceButton({
  children,
  table,
}: ReferenceButtonProps) {
  if (table) {
    return <ReferenceButtonTable children={children} />;
  } else {
    return <ReferenceButtonDefault children={children} />;
  }
}
