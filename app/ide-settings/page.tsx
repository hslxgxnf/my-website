import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IDE Settings",
};

export default function IDESettingsPage() {
  return (
    <main>
      <aside>Aside1</aside>
      <section>
        <h1>JetBrains</h1>
      </section>
      <aside>Aside2</aside>
    </main>
  );
}
