import HeaderMainNav from "@/components/header/HeaderMainNav";
import HeaderArticleNav from "@/components/header/HeaderArticleNav";

interface HeaderProps {
  links: string[];
}

export default function Header({ links }: HeaderProps) {
  return (
    <header>
      <HeaderMainNav links={links} />
      <HeaderArticleNav />
    </header>
  );
}
