import styles from "@components/Header/Header.module.scss";
import titleLogo from "@images/title.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.container}>
      <Image className={styles.titleLogo} src={titleLogo} alt="title logo" />
      <input id="drawerInput" className={styles.drawerInput} type="checkbox"></input>
      <label className={styles.hamburger} htmlFor="drawerInput">
        <span />
      </label>
      <nav className={styles.menu}>
        <div className={styles.menuTitle}>
          <p>メニュー</p>
        </div>
        <ul>
          <li>
            <Link href="/about">つくオケについて</Link>
          </li>
          <li>
            <Link href="/event">新歓情報</Link>
          </li>
          <li>
            <Link href="/activity">1年間の活動の流れ</Link>
          </li>
          <li>
            <Link href="/introduction">セクション・パート紹介</Link>
          </li>
          <li>
            <Link href="/interview">団員インタビュー</Link>
          </li>
          <li>
            <Link href="/faq">Q&A</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
