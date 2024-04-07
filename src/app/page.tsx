"use client";

import Link from "next/link";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Header from "@components/Header/Header";
import styles from "@app/page.module.scss";
import { interviewThumbList } from "@/utils/images";
import heroImage from "@images/hero.jpg";
import Img from "@/components/Img";
import { eventList } from "@/consts";

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
  const splideOptions = {
    autoplay: true,
    interval: 3000,
    rewind: true,
    pagination: false,
    pauseOnHover: true,
    perPage: 3,
    perMove: 1,
    breakpoints: {
      768: { perPage: 1 },
      1280: { perPage: 3 },
    },
  };

  const eventListPreview = eventList
    .filter((welcomeEvent) => welcomeEvent.date.getDate() >= new Date().getDate())
    .slice(0, 3);

  const getFormattedDate = (date: Date) => format(date, "M/d(E)", { locale: ja });

  return (
    <div className={styles.pageContainer}>
      <Header isHome={true} />

      <Img className={styles.heroImage} src={heroImage} alt="トップ画像" />

      <div className={styles.welcomeEventWrapper}>
        <div className={styles.welcomeEvent}>
          <div className={styles.eventList}>
            <h2>直近の新歓イベント</h2>
            <table className={styles.eventListContent}>
              <tbody>
                {eventListPreview.map((welcomeEvent, index) => (
                  <tr key={index}>
                    <td>{getFormattedDate(welcomeEvent.date)}</td>
                    <td>{welcomeEvent.events.join("・")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.welcomeEventButtonWrapper}>
            <TransitionButton link="/event" text="新歓情報" />
          </div>
        </div>
      </div>

      <div className={styles.about}>
        <h2 className={styles.aboutTitle}>つくオケとは</h2>
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
          <h2 className={styles.introductionTitle}>セクション紹介</h2>
          <TransitionButton link="/introduction#section" text="詳細を見る" />
        </div>
        <div className={styles.partIntroduction}>
          <h2 className={styles.introductionTitle}>パート紹介</h2>
          <TransitionButton link="/introduction#part" text="詳細を見る" />
        </div>
      </div>

      <div className={styles.activity}>
        <div className={styles.forPc}>
          <TransitionButton link="/activity" text="詳細を見る" />
        </div>
        <div className={styles.activitySummary}>
          <h2 className={styles.activityTitle}>1年間の活動の流れ</h2>
          <div className={styles.activityDescription}>つくオケの一年間の活動スケジュールを紹介しています。</div>
        </div>
        <div className={styles.forMobile}>
          <TransitionButton link="/activity" text="詳細を見る" />
        </div>
      </div>

      <div className={styles.interview}>
        <div className={styles.interviewSummary}>
          <h2>先輩インタビュー</h2>
          <div className={styles.interviewDescription}>
            大学から新しく楽器を始めた人や、医学類の人、複数のサークルに所属している人など、様々な境遇の団員にインタビューをしました。
          </div>
        </div>
        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            <Splide options={splideOptions}>
              {interviewThumbList.map((thumb, index) => (
                <SplideSlide key={index} className={styles.slide}>
                  {/* TODO: ここをリンクに対応する */}
                  <Img className={styles.interviewThumb} src={thumb} alt="団員インタビューのサムネイル" />
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
            <h2>Q&A</h2>
            <p className={styles.moreInfoDescription}>
              新入生が疑問に思いそうなことについてQ&A形式で一覧にしています。SNSで来た質問も随時こちらに掲載します。
            </p>
          </div>
          <TransitionButton link="/faq" text="一覧を見る" />
        </div>
        <div className={styles.moreInfoBlock}>
          <div className={styles.moreInfoSummary}>
            <h2>入団方法</h2>
            <p className={styles.moreInfoDescription}>入団方法はこちらからご覧になれます。</p>
          </div>
          <TransitionButton link="/joinus" text="詳細を見る" />
        </div>
      </div>

      <div className={styles.contact} id="contact">
        <h2>お問い合わせ</h2>
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
