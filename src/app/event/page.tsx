import { Metadata } from "next";
import { StaticImageData } from "next/image";
import Img from "@/components/Img";
import Header from "@/components/Header/Header";
import CalenderBlock from "./_components/calendarBlock";
import { eventImages } from "@/utils/images";
import styles from "@app/event/event.module.scss";

export const metadata: Metadata = {
  title: "新歓イベント情報",
};

const Event = () => {
  type welcomeEvent = {
    name: string;
    date: string;
    place: string;
    description: string;
    image: StaticImageData | null;
  };

  const welcomeEvents: welcomeEvent[] = [
    {
      name: "入学式一斉新歓",
      date: "2024/4/5(金) 9:00~16:00",
      place: "大学会館前",
      description: "入学式終了後、大学会館前で新入生にビラを配ります。",
      image: null,
    },
    {
      name: "新歓本祭",
      date: "2024/4/6(土) 9:00 ~ 16:00",
      place: "石の広場(ステージ発表)、第一エリア(屋外ブース)",
      description:
        "「ラデツキー行進曲」を石の広場のステージで演奏し、第一エリアのブースでは、質問対応をします。質問がある方もない方も、気軽にお声がけください！",
      image: eventImages.welcomeFestival,
    },
    {
      name: "食事会",
      date: "2024/4/12(金) 19:00 ~ 20:00",
      place: "百香亭(変更の可能性あり)",
      description: "新入生と百香亭に行き食事をします。参加人数は団員と新入生を合わせて30名前後を予定しています。",
      image: null,
    },
    {
      name: "楽器体験",
      date: "2024/4/17(水) 19:00 ~ 20:30",
      place: "5C棟(弦、木管、金管)、打楽器小部屋(打楽器パート)",
      description: "楽器の体験ができます。",
      image: null,
    },
    {
      name: "オーケストラコンサート",
      date: "2024/4/20(土) 14:30 ~ 16:30",
      place: "課外活動練習施設大部屋",
      description:
        "「ハンガリー舞曲第5番」「ベートーヴェン交響曲第5番第1楽章」の披露し、その後団員と新入生で一緒に「ラデツキー行進曲」の演奏をします。",
      image: null,
    },
    {
      name: "アンサンブルコンサート",
      date: "2024/4/16(火)、4/23(火) 18:30 ~ 19:30",
      place: "課外活動練習施設大部屋",
      description: "団員がアンサンブルを披露します。",
      image: eventImages.ensembleConcert,
    },
    {
      name: "オーケストラパーティー",
      date: "2024/4/16(火)、4/23(火) 19:30 ~ 21:00",
      place: "クラブハウス",
      description: "オードブルを用意し、新入生と団員が交流しながら食事をします。",
      image: null,
    },
    {
      name: "初心者座談会",
      date: "2024/4/24(水) 19:00 ~ 20:00",
      place: "5C 棟",
      description:
        "初心者として入団を考えている新入生に向けて、管弦楽団の説明を行います。初心者として入団した現役団員が参加します。",
      image: null,
    },
    {
      name: "ノバホール公開練習",
      date: "2024/4/25(木)",
      place: "ノバホール",
      description: "第95回定期演奏会のノバホール練習を見学します。",
      image: eventImages.novaHall,
    },
    {
      name: "入団説明会",
      date: "2024/4/16(火)、4/20(土)、4/23(火)、4/27(土)、5/7(火)",
      place: "課外活動練習施設小部屋、5C棟、オンライン",
      description:
        "団長・運営委員長・技術委員長の三役が、入団届や入団後の流れを説明します。希望者がいる場合、オンラインでも対応します。",
      image: null,
    },
  ];

  return (
    <>
      <Header isHome={false} />
      <div className={styles.pageContainer}>
        <div className={styles.pageTitle}>
          <h1>新歓イベント情報</h1>
        </div>
        <CalenderBlock />
        <h2>新歓イベント詳細</h2>
        <div className={styles.welcomeEvents}>
          {welcomeEvents.map((welcomeEvent, index) => (
            <div key={index} className={styles.welcomeEvent}>
              <div className={styles.welcomeEventContent}>
                <h3>{welcomeEvent.name}</h3>
                <p>{welcomeEvent.date}</p>
                <p>{welcomeEvent.place}</p>
                <p>{welcomeEvent.description}</p>
              </div>
              <div className={styles.welcomeEventImage}>
                {welcomeEvent.image ? <Img src={welcomeEvent.image} alt={welcomeEvent.name} /> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Event;
