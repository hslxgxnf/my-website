"use client";

import { ReactNode, useRef } from "react";
import { IoIosLink } from "react-icons/io";

import styles from "@/styles/detail-page/page.module.css";
import useReferenceConnection from "@/hooks/useReferenceConnection";

interface ReferenceButtonTableProps {
  type: "default" | "table";
  children: ReactNode;
}
export default function ReferenceButtonTable({
  type,
  children,
}: ReferenceButtonTableProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useReferenceConnection(type, buttonRef);

  return (
    <span className={styles["reference-button-table-container"]}>
      <button type="button" ref={buttonRef}>
        <IoIosLink />
      </button>{" "}
      <span>{children}</span>
    </span>
  );
}
