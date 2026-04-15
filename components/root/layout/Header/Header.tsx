import HeaderLinks from "@/components/root/layout/Header/HeaderLinks";
import HeaderPath from "@/components/root/layout/Header/HeaderPath";

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
