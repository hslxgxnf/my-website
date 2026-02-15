import Image from "next/image";

import logo from "@/assets/logo.png";
import Link from "next/link";
import styles from "./Header.module.css";
import HeaderLink from "@/pages/root/HeaderLink";

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

      <div className={styles.path}></div>
    </header>
  );
}
