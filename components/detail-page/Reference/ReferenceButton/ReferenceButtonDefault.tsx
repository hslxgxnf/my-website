"use client";

import { type ReactNode, useRef } from "react";
import { IoIosLink } from "react-icons/io";

import styles from "@/styles/detail-page/page.module.css";
import useReferenceConnection from "@/hooks/useReferenceConnection";

interface ReferenceButtonDefaultProps {
  type: "default" | "table";
  children: ReactNode;
}

export default function ReferenceButtonDefault({
  type,
  children,
}: ReferenceButtonDefaultProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useReferenceConnection(type, buttonRef);

  return (
    <div className={styles["reference-button-default-container"]}>
      <button type="button" ref={buttonRef}>
        <IoIosLink />
      </button>

      {children}
    </div>
  );
}
