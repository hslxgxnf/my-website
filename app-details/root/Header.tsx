import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.css";
import logo from "@/assets/logo.png";
import HeaderLink from "@/app-details/root/HeaderLink";
import HeaderPath from "@/app-details/root/HeaderPath";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">
          <Image
            src={logo}
            alt="logo image generate by ChatGPT"
            loading="eager"
          />
        </Link>

        <ul>
          <li>
            <HeaderLink href="/ide-settings">IDE Settings</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/dsa">DSA</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/coding-tests">Coding Tests</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/clean-code">Clean Code</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/web">Web</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/ai">AI</HeaderLink>
          </li>
        </ul>
      </nav>

      <nav>
        <div></div>
        <HeaderPath />
        <div></div>
      </nav>
    </header>
  );
}
