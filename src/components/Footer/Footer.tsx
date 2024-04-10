import Link from "next/link";
import Img from "@components/Img";
import { SITE_NAME } from "@/consts";
import styles from "@components/Footer/Footer.module.scss";
import titleLogo from "@images/title.png";
import { snsIcons } from "@/utils/images";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Img className={styles.titleLogo} src={titleLogo} alt="title logo" />
      <nav className={styles.snsLinks}>
        <Link href="https://twitter.com/orch_shinkan24">
          <div className={styles.snsLink}>
            <Img className={styles.snsIcon} src={snsIcons.twitter} alt="twitter" />
          </div>
        </Link>

        <Link href="https://www.instagram.com/orch_shinkan2024">
          <div className={styles.snsLink}>
            <Img className={styles.snsIcon} src={snsIcons.instagram} alt="instagram" />
          </div>
        </Link>

        <Link href="https://line.me/R/ti/p/@492exmaw">
          <div className={styles.snsLink}>
            <Img className={styles.snsIcon} src={snsIcons.line} alt="line" />
          </div>
        </Link>

        <Link href="https://www.youtube.com/@user-ev3kn2by1o">
          <div className={styles.snsLink}>
            <Img className={styles.snsIcon} src={snsIcons.youtube} alt="youtube" />
          </div>
        </Link>

        <Link href="https://github.com/n4mlz/tkb-orch-shinkan">
          <div className={styles.snsLink}>
            <Img className={styles.snsIcon} src={snsIcons.github} alt="github" />
          </div>
        </Link>
      </nav>
      <p className={styles.footerMessage}>{`${SITE_NAME} © 2024 筑波大学管弦楽団 All rights reserved.`}</p>
    </footer>
  );
};

export default Footer;
