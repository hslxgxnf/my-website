import RefNav from "@/components/main/RefNav";
import Heading from "@/components/main/Heading/Heading";
import PageNav from "@/components/main/PageNav";

export default function Page() {
  return (
    <main>
      <RefNav />

      <article>
        <Heading type="none" number={1} lastUpdated="2026-09-20">
          Archive of My Learning Journey
        </Heading>
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
