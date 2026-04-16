import HeaderLinks from "@/components/header/HeaderLinks";
import HeaderPath from "@/components/header/HeaderPath";

interface HeaderProps {
  links: string[];
}

export default function Header({ links }: HeaderProps) {
  return (
    <header>
      <HeaderLinks links={links} />
      <HeaderPath />
    </header>
  );
}
