import Img from "@/components/Img";
import Header from "@/components/Header/Header";
import styles from "@app/introduction/introduction.module.scss";

const Introduction = () => {
  type Section = {};

  return (
    <>
      <Header isHome={false} />
      <div className={styles.pageContainer}>
        <div className={styles.introductionBlock}>
          <div className={styles.blockTitle}>
            <h1>セクション紹介</h1>
          </div>
          <p className={styles.blockDescription}>
            オーケストラでは弦、木管、金管、打楽器の4つのセクション (打楽器は打楽器パートと同じ)
            があります。金管と打楽器は一つにまとめて金打と呼ぶことがあります。
            <br />
            普段の練習場所はセクションごとで決まっていたり、セクションごとの練習（分奏）があったりします。
          </p>
          <div className={styles.sectionList}>
            <div className={styles.section}>
              <div className={styles.sectionContent}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
