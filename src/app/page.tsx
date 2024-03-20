"use client";

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Header from "@components/Header/Header";
import styles from "./page.module.scss";
import { interviewThumbList } from "@/utils/imageList";
import heroImage from "@images/hero.jpg";

const TransitionButton = (props: { link: string; text: string }) => {
  return (
    <Link href={props.link}>
      <div className={styles.transitionButton}>
        <p className={styles.transitionButtonText}>{props.text}</p>
      </div>
    </Link>
  );
};

const Home = () => {
  type welcomeEvent = {
    date: Date;
    name: string;
  };

  const eventList: welcomeEvent[] = [
    { date: new Date(2024, 4 - 1, 5), name: "入学式一斉新歓" },
    { date: new Date(2024, 4 - 1, 6), name: "新歓本祭" },
    { date: new Date(2024, 4 - 1, 12), name: "食事会" },
  ];

  const getFormattedDate = (date: Date) => format(date, "M/d(E)", { locale: ja });

  return (
    <div className={styles.pageContainer}>
      <Header />
      <Image className={styles.heroImage} src={heroImage} alt="トップ画像" />
      <div className={styles.welcomeEvent}>
        <div className={styles.eventList}>
          <p className={styles.sectionTitle}>直近の新歓イベント</p>
          <table className={styles.eventListContent}>
            <tbody>
              {eventList.map((welcomeEvent, index) => (
                <tr key={index}>
                  <td>{getFormattedDate(welcomeEvent.date)}</td>
                  <td>{welcomeEvent.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.welcomeEventButtonWrapper}>
          <TransitionButton link="/event" text="新歓情報" />
        </div>
      </div>
      <div className={styles.about}>
        <p className={styles.sectionTitleWhite}>つくオケとは</p>
        <p className={styles.aboutContent}>
          筑波大学管弦楽団は1974年に創団された、
          <br />
          筑波大学内では最大規模を誇る課外活動団体の1つです。
          <br />
          練習、演奏会やその他の活動を通して、団の演奏技術の向上、
          <br />
          そして団員間の親睦を深めることを目的としています。
        </p>
        <TransitionButton link="/about" text="団体について" />
      </div>
      <div className={styles.introduction}>
        <div className={styles.sectionIntroduction}>
          <p className={styles.sectionTitleWhite}>セクション紹介</p>
          <TransitionButton link="/introduction" text="詳細を見る" />
        </div>
        <div className={styles.partIntroduction}>
          <p className={styles.sectionTitleWhite}>パート紹介</p>
          <TransitionButton link="/introduction" text="詳細を見る" />
        </div>
      </div>
      <div className={styles.interview}>
        <div className={styles.interviewSummary}>
          <div className={styles.sectionTitle}>団員インタビュー</div>
          <div className={styles.interviewDescription}>
            大学から新しく楽器を始めた人や、医学類の人、複数のサークルに所属している人など、様々な境遇の団員にインタビューをしました。
          </div>
        </div>
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            <Splide
              options={{
                autoplay: true,
                interval: 3000,
                rewind: true,
                perPage: 3,
                perMove: 1,
              }}>
              {interviewThumbList.map((thumb, index) => (
                <SplideSlide key={index}>
                  {/* TODO: ここをリンクに対応する */}
                  <Image className={styles.interviewThumb} src={thumb} alt="団員インタビューのサムネイル" />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
        <TransitionButton link="/interview" text="インタビュー一覧" />
      </div>
      <div className={styles.moreInfo}>
        <div className={styles.moreInfoBlock}>
          <div className={styles.moreInfoSummary}>
            <p className={styles.sectionTitle}>Q&A</p>
            <p className={styles.moreInfoDescription}>
              新入生が疑問に思いそうなことについてQ&A形式で一覧にしています。SNSで来た質問も随時こちらに掲載します。
            </p>
          </div>
          <TransitionButton link="/faq" text="一覧を見る" />
        </div>
        <div className={styles.moreInfoBlock}>
          <div className={styles.moreInfoSummary}>
            <p className={styles.sectionTitle}>入団方法</p>
            <p className={styles.moreInfoDescription}>入団方法はこちらからご覧になれます。</p>
          </div>
          <TransitionButton link="/joinus" text="詳細を見る" />
        </div>
      </div>
      <div className={styles.contact}>
        <p className={styles.sectionTitle}>お問い合わせ</p>
        <table>
          <tbody>
            <tr>
              <td>団長 齋藤 史陽</td>
              <td>tkborch.pres@gmail.com</td>
            </tr>
            <tr>
              <td>新歓委員長 淺葉 春</td>
              <td>tkborch.shinkan24@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
