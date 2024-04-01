/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header/Header";
import Img from "@/components/Img";
import styles from "./not-found.module.scss";
import logoImage from "@public/images/logo.png";

const NotFound = () => {
  return (
    <>
      <Header isHome={false} />
      <div className={styles.pageContainer}>
        <div className={styles.pageTitle}>
          <p>存在しないページ</p>
        </div>
        <Img className={styles.logo} src={logoImage} alt="筑波大学 管弦楽団 ロゴ" />
        <p className={styles.description}>
          新歓 Web 製作中！
          <br />
          完成までもうしばらくお待ちください🔥
        </p>
      </div>
    </>
  );
};

export default NotFound;
