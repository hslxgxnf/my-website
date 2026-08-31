import HeaderLink1 from "@/components/header/HeaderLink1";
import HeaderPath from "@/components/header/HeaderPath";

interface HeaderProps {
  links: string[];
}

export default function Header({ links }: HeaderProps) {
  return (
    <header>
      <HeaderLink1 links={links} />
      <HeaderPath />
    </header>
  );
}
