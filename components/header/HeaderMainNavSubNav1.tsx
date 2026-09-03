import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function HeaderMainNavSubNav1() {
  return (
    <div>
      <Link href="/">
        <Image src={logo} alt="Home" loading="eager" />
      </Link>
    </div>
  );
}
