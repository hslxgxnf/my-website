import RefNav from "@/components/main/RefNav";
import PageNav from "@/components/main/PageNav";

export default function Page() {
  return (
    <main>
      <RefNav />

      <article>
        <h1>Archive of My Learning Journey</h1>
        <p>Hi, I'm Hoseon Lee.</p>
        <p>
          Welcome to my digital garden for exploring, reviewing, and deepening
          engineering insights.
        </p>
      </article>

      <PageNav />
    </main>
  );
}
