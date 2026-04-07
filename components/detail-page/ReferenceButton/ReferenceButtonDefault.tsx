"use client";

import { ReactNode, useRef } from "react";
import { IoIosLink } from "react-icons/io";

import styles from "@/styles/detail-page/page.module.css";
import useReferenceConnection from "@/hooks/useReferenceConnection";

interface ReferenceButtonDefaultProps {
  children: ReactNode;
}

export default function ReferenceButtonDefault({
  children,
}: ReferenceButtonDefaultProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useReferenceConnection(false, buttonRef);

  return (
    <div className={styles["reference-button-default-container"]}>
      <button type="button" ref={buttonRef}>
        <IoIosLink />
      </button>

      {children}
    </div>
  );
}
