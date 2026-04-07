"use client";

import { ReactNode, useRef } from "react";
import { IoIosLink } from "react-icons/io";

import styles from "@/styles/detail-page/page.module.css";
import useReferenceConnection from "@/hooks/useReferenceConnection";

interface ReferenceButtonTableProps {
  children: ReactNode;
}
export default function ReferenceButtonTable({
  children,
}: ReferenceButtonTableProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useReferenceConnection(true, buttonRef);

  return (
    <span className={styles["reference-button-table-container"]}>
      <button type="button" ref={buttonRef}>
        <IoIosLink />
      </button>{" "}
      <span>{children}</span>
    </span>
  );
}
