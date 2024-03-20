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

export default function Home() {
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
      <div className={styles.welcomeEventBlock}>
        <div className={styles.eventList}>
          <div className={styles.eventListTitle}>
            <p>直近の新歓イベント</p>
          </div>
          <div className={styles.eventListContent}>
            <table>
              <tbody>
                {eventList.map((welcomeEvent) => (
                  <tr>
                    <td>{getFormattedDate(welcomeEvent.date)}</td>
                    <td>{welcomeEvent.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.transitionButtonWrapper}>
          <div className={styles.transitionButton}>
            <Link href="/event">新歓情報</Link>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <p className={styles.aboutTitle}>つくオケとは</p>
        <p className={styles.aboutContent}>
          筑波大学管弦楽団は1974年に創団された、筑波大学内では最大規模を誇る課外活動団体の1つです。練習、演奏会やその他の活動を通して、団の演奏技術の向上、そして団員間の親睦を深めることを目的としています。
        </p>
        <div className={styles.transitionButton}>
          <Link href="/about">団体について</Link>
        </div>
      </div>
      <div className={styles.introduction}>
        <div className={styles.introductionBlock}>
          <p className={styles.introductionTitle}>セクション紹介</p>
          <div className={styles.transitionButton}>
            <Link href="/introduction">詳細を見る</Link>
          </div>
        </div>
        <div className={styles.introductionBlock}>
          <p className={styles.introductionTitle}>パート紹介</p>
          <div className={styles.transitionButton}>
            <Link href="/introduction">詳細を見る</Link>
          </div>
        </div>
      </div>
      <div className={styles.interview}>
        <div className={styles.interviewTitle}>団員インタビュー</div>
        <div className={styles.interviewDescription}>
          大学から新しく楽器を始めた人や、医学類の人、複数のサークルに所属している人など、様々な境遇の団員にインタビューをしました。
        </div>
        <div className={styles.sliderContainer}>
          <Splide
            options={{
              autoplay: true,
              interval: 3000,
              perPage: 3,
              perMove: 1,
            }}>
            {interviewThumbList.map((thumb) => (
              <SplideSlide>
                {/* TODO: ここをリンクに対応する */}
                <Image className={styles.interviewThumb} src={thumb} alt="団員インタビューのサムネイル" />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className={styles.transitionButton}>
          <Link href="/interview">インタビュー一覧</Link>
        </div>
      </div>
      <div className={styles.moreInfo}>
        <div className={styles.moreInfoBlock}>
          <p className={styles.moreInfoTitle}>Q&A</p>
          <p className={styles.moreInfoDescription}>
            新入生が疑問に思いそうなことについてQ&A形式で一覧にしています。SNSで来た質問も随時こちらに掲載します。
          </p>
          <div className={styles.transitionButton}>
            <Link href="/qa">一覧を見る</Link>
          </div>
        </div>
        <div className={styles.moreInfoBlock}>
          <p className={styles.moreInfoTitle}>入団方法</p>
          <p className={styles.moreInfoDescription}>入団方法はこちらからご覧になれます。</p>
          <div className={styles.transitionButton}>
            <Link href="/joinus">詳細を見る</Link>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <p className={styles.contactTitle}>お問い合わせ</p>
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
}
