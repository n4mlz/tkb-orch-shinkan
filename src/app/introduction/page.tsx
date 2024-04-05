import { Metadata } from "next";
import { StaticImageData } from "next/image";
import Img from "@/components/Img";
import Header from "@/components/Header/Header";
import styles from "@app/introduction/introduction.module.scss";
import { sectionImages, partImages } from "@/utils/images";

export const metadata: Metadata = {
  title: "セクション・パート紹介",
};

const Introduction = () => {
  type Section = {
    name: string;
    instruments: string;
    description: string;
    image: StaticImageData;
    alt: string;
  };

  type Part = {
    name: string;
    description: string[];
    image: StaticImageData;
    alt: string;
  };

  const sectionList: Section[] = [
    {
      name: "弦",
      instruments: "ヴァイオリン、ヴィオラ、チェロ、コントラバス",
      description:
        "弦楽器セクションはヴァイオリン (1st, 2nd)、ヴィオラ、チェロ、コントラバスの5パートで構成されます。弦楽器の魅力は、なんといってもその美しい音色！低音から高音、重厚で荘厳な音から軽やかで華やかな音まで幅広い音色を奏でます。オーケストラではほかのセクションと異なり、数人 ~ 十数人で同じパートを演奏するので豊かなハーモニーを作れます。",
      image: sectionImages.strings,
      alt: "弦楽器セクション",
    },
    {
      name: "木管",
      instruments: "フルート、オーボエ、クラリネット、ファゴット",
      description:
        "木管セクションはフルート、オーボエ、クラリネット、ファゴットの4パートで構成されます。曲中では、軽やかなメロディーから甘くてとろけちゃうようなメロディーまで、様々な音色を分けて演奏します。吹奏楽にもある楽器ですが、オーケストラではソロが多く、目立つところがたくさんあります！特にオーボエやファゴット、オプションなんて言葉はないです。また、弦楽器とのユニゾンはオーケストラだからこそ楽しめます。",
      image: sectionImages.woodwinds,
      alt: "木管セクション",
    },
    {
      name: "金打",
      instruments: "トランペット、ホルン、トロンボーン、チューバ、パーカッション",
      description:
        "金管打楽器セクションはトランペット、ホルン、トロンボーン、チューバ、パーカッションの5パートで構成されます。どの楽器もオーケストラではメロディーやハーモニーなど様々な役割を担っています。結構重役ですよ！高校まで吹奏楽やってた…という人もNo problem！現団員のほとんどが吹奏楽経験者で大学からオケを始めています。吹奏楽とは違った楽しさがありますよ。",
      image: sectionImages.brass,
      alt: "金管打楽器セクション",
    },
  ];

  const partList: Part[] = [
    {
      name: "ヴァイオリン (Vn.)",
      description: [
        "こんにちは！ヴァイオリンパートです。",
        "1stと2ndに分かれるため、オーケストラで1番の大所帯である我らがヴァイオリンパートは、みんな仲良し。ご飯を食べに行ったりハロウィンの仮装をしたりスキーに行ったり、、、現役15人と頼もしいOBOGの先輩方で毎回楽しく練習しています。",
        "私の考えるヴァイオリンの好きなところは、なんといってもこの美しい音色！高らかに歌う主旋律から優しいそよ風、激情の嵐まで幅広く表現できます。楽器のフォルムも可愛いですよね。",
        "経験者さんも初心者さんも大歓迎！華麗なるヴァイオリンパートで、あなたも一緒に演奏しませんか？",
      ],
      image: partImages.violin,
      alt: "ヴァイオリン",
    },
    {
      name: "ヴィオラ (Va.)",
      description: [
        "ヴィオラパートは現在1年生3人、2年生4人、3年生1人、4年生1人の総勢9名で活動しています。",
        "個性豊かな先輩たちと共にオーケストラを支えましょう！大学から楽器を始めるあなたも、そうでないあなたも、ヴィオラパートはあなたの参加をお待ちしています！",
      ],
      image: partImages.viola,
      alt: "ヴィオラ",
    },
    {
      name: "チェロ (Vc.)",
      description: [
        "こんにちは！チェロパートです。",
        "現在は4人の現役と素敵な先輩方で活動しています。チェロは、オーケストラの中で低音部も内声部も主旋律もこなす、幅広い役割を持ったパートです！どんな役割でもこなしてしまうチェロを、みなさんも一緒に弾いてみませんか？",
        "初心者経験者問わずご入団お待ちしています！",
      ],
      image: partImages.cello,
      alt: "チェロ",
    },
    {
      name: "コントラバス (Cb.)",
      description: [
        "コントラバスパートは現在4人で活動しています！",
        "その経歴は様々で、楽器初心者でも大歓迎です！",
        "コントラバスはオーケストラで使われる弦楽器の中でも最も低い音域を担当する楽器で、主に和音やリズムの基礎を作ってオケ全体を支えています。",
        "この楽器の一番の魅力はなんといっても重低音の響きです！ぜひとも体験に来て、この響きを感じてください！",
      ],
      image: partImages.doubleBass,
      alt: "コントラバス",
    },
    {
      name: "フルート (Fl.)",
      description: [
        "フルートパートは現役2人と激ウマ・美爆音の先輩方で活動しています！",
        "吹奏楽とは違い1パート1人ずつなので緊張することもありますが、おいしい場面もたくさんあるのでやりがいがあること間違いなし☆",
        "乗り番が少ないかも、、、初心者だから、、、なんて迷わず入っちゃいましょう！",
        "一緒に演奏できることを楽しみにしています！",
      ],
      image: partImages.flute,
      alt: "フルート",
    },
    {
      name: "オーボエ (Ob.)",
      description: [
        "こんにちは！オーボエパートです。",
        "オーボエパートは3年生1名と2年生1名で活動中です。現在、人手不足で非常困っています！オーボエに興味がある方、経験した事がある方はぜひ1度見学にお越しください。",
        "今なら1年生でも沢山演奏会で演奏出来ますよ！！！お待ちしています！！！！！",
      ],
      image: partImages.oboe,
      alt: "オーボエ",
    },
    {
      name: "クラリネット (Cl.)",
      description: [
        "こんにちは！クラリネットパートです！",
        "私たちは現在、3年生1人、2年生3人で活動しています！クラリネットは暖かい木の音色が特徴的な楽器です！",
        "クラリネットは吹奏楽でも活躍しますが、オーケストラのクラリネットは吹奏楽とはまた違った魅力や楽しさがあります！",
        "オーケストラ未経験でも大丈夫です！皆さんの入部、心よりお待ちしています！",
      ],
      image: partImages.clarinet,
      alt: "クラリネット",
    },
    {
      name: "ファゴット (Fg.)",
      description: [
        "こんにちは、ファゴットパートです♪",
        "私たちは現役2名に加え、たくさんのOB・OGの方々と一緒に楽しく活動しています。実はオーケストラのファゴットって、とってもおいしいポジションなんです！",
        "初心者の方も大歓迎！興味が湧いたら是非！新歓イベントに聴きに来てくださいね。",
      ],
      image: partImages.bassoon,
      alt: "ファゴット",
    },
    {
      name: "トランペット (Tp.)",
      description: [
        "新入生の皆さんご入学おめでとうございます。",
        "トランペットパートは現在新3年生1人と新2年生2人で仲良く活動しています！",
        "トランペットの魅力はオーケストラ全体を突き抜け引っ張っていく華やかな音です🎶",
        "一緒に活動できることを楽しみにお待ちしております。",
      ],
      image: partImages.trumpet,
      alt: "トランペット",
    },
    {
      name: "ホルン (Hr.)",
      description: [
        "当パートは、現役3名とOB・OGの先輩方で仲良く活動しています！",
        "ホルンは咆哮のような音から、メロウな調べまで吹きこなせる、魅力的な楽器です。",
        "オケでは主旋律を演奏することも多く、おいしいところだらけです！",
        "団員大募集中！新入生、在学生問わず入団お待ちしております。",
      ],
      image: partImages.horn,
      alt: "ホルン",
    },
    {
      name: "トロンボーン (Tb.)、チューバ (Tub.)",
      description: [
        "【トロンボーン】",
        "こんにちは！トロンボーンパートです！",
        "現在、現役2人とOB2人の4人で活動しています。オーケストラの後方から大爆音を吹けるのはとても爽快！",
        "ぜひ一緒に活動しましょう！",
        "【チューバ】",
        "こんにちは！Tubaです！普段はトロンボーンパートと一緒にトロチューパートとして活動しています。オーケストラのチューバは作曲家が「ここぞ！」という場所でアクセントとして使うことが多いです。つまり、曲により豊かな色彩をもたらすかけがえの無い楽器です！現在チューバ奏者の現役が0人となってしまっており、厳しい状態が続いています。一番大きな楽器で100人規模のオーケストラを包み込みたいそこのあなた 是非筑波大学管弦楽団に入団してください。金管一同歓迎致します。",
      ],
      image: partImages.trombone,
      alt: "トロンボーン・チューバ",
    },
    {
      name: "パーカッション (Perc.)",
      description: [
        "ティンパニ・打楽器パートでは、音楽とティンパニと打楽器が大好きな人、大好きとは言わずとも興味のある人をたくさん募集しております！初心者でも大丈夫です。一緒に音楽を作っていきましょう！",
      ],
      image: partImages.percussion,
      alt: "パーカッション",
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <Header isHome={false} />
      <div className={styles.pageContent}>
        <div className={styles.pageTitle}>
          <h1>セクション・パート紹介</h1>
        </div>
        <div className={styles.introduction}>
          <div className={styles.introductionBlock} id="section">
            <div className={styles.blockTitle}>
              <h2>セクション紹介</h2>
              <p className={styles.blockDescription}>
                オーケストラでは弦、木管、金管、打楽器の4つのセクション (打楽器は打楽器パートと同じ)
                があります。金管と打楽器は一つにまとめて金打と呼ぶことがあります。
                <br />
                普段の練習場所はセクションごとで決まっています。また、セクションで合わせる練習があります。
              </p>
            </div>
            <div className={styles.sectionList}>
              {sectionList.map((section) => (
                <div className={styles.section}>
                  <div className={styles.sectionContent}>
                    <div className={styles.sectionTitle}>
                      <h3>{section.name}</h3>
                      <h4>{section.instruments}</h4>
                    </div>
                    <p className={styles.sectionDescription}>{section.description}</p>
                  </div>
                  <Img className={styles.sectionImage} src={section.image} alt={section.alt} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.introductionBlock} id="part">
            <div className={styles.blockTitle}>
              <h2>パート紹介</h2>
            </div>
            <div className={styles.partList}>
              {partList.map((part) => (
                <div className={styles.part}>
                  <h3>{part.name}</h3>
                  <Img className={styles.partImage} src={part.image} alt={part.alt} />
                  <p className={styles.description}>
                    {part.description.map((text) => (
                      <>
                        {text}
                        <br />
                      </>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
