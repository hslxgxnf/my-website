import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function HeaderLink1Nav1() {
  return (
    <div>
      <Link href="/">
        <Image
          src={logo}
          alt="logo image generate by ChatGPT"
          loading="eager"
        />
      </Link>
    </div>
  );
}
