import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function HeaderMainNavSubNav1() {
  return (
    <div>
      <Link href="/" aria-label="Home">
        <Image src={logo} alt="" loading="eager" />
      </Link>
    </div>
  );
}
