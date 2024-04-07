"use client";

import { useState } from "react";
import Link from "next/link";
import Img from "@components/Img";
import styles from "@components/Header/Header.module.scss";
import titleLogo from "@images/title.png";

type Props = {
  isHome: boolean;
};

const Header = (props: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <header className={props.isHome ? styles.homeContainer : styles.container}>
      <Link href="/">
        <Img className={styles.titleLogo} src={titleLogo} alt="title logo" />
      </Link>
      <input
        id="drawerInput"
        className={styles.drawerInput}
        type="checkbox"
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}></input>
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
            <Link href="/activity">一年間の活動の流れ</Link>
          </li>
          <li>
            <Link href="/introduction">セクション・パート紹介</Link>
          </li>
          <li>
            <Link href="/interview">先輩インタビュー</Link>
          </li>
          <li>
            <Link href="/faq">Q&A</Link>
          </li>
          <li>
            <Link href="/#joinus" onClick={() => setIsChecked(false)}>
              入団方法
            </Link>
          </li>
          <li>
            <Link href="/#contact" onClick={() => setIsChecked(false)}>
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
