import { Metadata } from "next";
import { StaticImageData } from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Img from "@/components/Img";
import { activityImages } from "@/utils/images";
import styles from "@app/activity/activity.module.scss";

export const metadata: Metadata = {
  title: "一年間の活動の流れ",
};

const Activity = () => {
  type activity = {
    month: number;
    name: string;
    image: StaticImageData | null;
  };

  const activities: activity[] = [
    {
      month: 4,
      name: "入学式式典演奏、各種新歓イベント",
      image: activityImages.april,
    },
    {
      month: 5,
      name: "春の定期演奏会",
      image: activityImages.may,
    },
    {
      month: 8,
      name: "夏合宿",
      image: null,
    },
    {
      month: 9,
      name: "チェロアンサンブルコンサート",
      image: null,
    },
    {
      month: 10,
      name: "秋の定期演奏会、秋の木管アンサンブルコンサート",
      image: activityImages.october,
    },
    {
      month: 11,
      name: "雙峰祭",
      image: activityImages.november,
    },
    {
      month: 12,
      name: "ヴァイオリンコンサート、クリスマス交流会、金管アンサンブルコンサート",
      image: activityImages.december,
    },
    {
      month: 1,
      name: "プロムナードコンサート",
      image: activityImages.january,
    },
    {
      month: 3,
      name: "春合宿、プリムローズコンサート、春の木管アンサンブルコンサート、卒業式式典演奏、歓送会",
      image: activityImages.march,
    },
  ];

  return (
    <>
      <Header isHome={false} />
      <div className={styles.pageContainer}>
        <div className={styles.pageTitle}>
          <h1>一年間の活動の流れ</h1>
        </div>
        <div className={styles.activities}>
          {activities.map((activity, index) => (
            <div key={index} className={index == activities.length - 1 ? styles.activityLast : styles.activity}>
              <div className={styles.activitySummary}>
                <div className={styles.activityMonth}>
                  <h2>{activity.month}月</h2>
                </div>
                <p className={styles.activityTitle}>{activity.name}</p>
              </div>
              {activity.image ? (
                <div className={styles.activityImageWrapper}>
                  <Img className={styles.activityImage} src={activity.image} alt={activity.name} />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Activity;
