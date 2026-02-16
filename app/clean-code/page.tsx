import type { Metadata } from "next";
import Main from "@/app-details/clean-code/Main";

export const metadata: Metadata = {
  title: "Clean Code",
};

export default function CleanCodePage() {
  return <Main />;
}
