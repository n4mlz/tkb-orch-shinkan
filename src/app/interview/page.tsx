import { Metadata } from "next";
import { StaticImageData } from "next/image";
import Img from "@/components/Img";
import { interviewIconList } from "@/utils/images";
import Header from "@/components/Header/Header";
import styles from "@app/interview/interview.module.scss";

export const metadata: Metadata = {
  title: "先輩インタビュー",
};

const Interview = () => {
  type Qa = {
    question: string;
    answer: string;
  };

  type InterviewBlock = {
    id: string;
    title: string;
    name: string;
    image: StaticImageData;
    alt: string;
    qas: Qa[];
  };

  const interviewBlocks: InterviewBlock[] = [
    {
      id: "0",
      title: "コンサートマスター",
      name: "Vn. 小畑 貴敬",
      image: interviewIconList[0],
      alt: "Vn. 小畑 貴敬",
      qas: [
        {
          question: "Q1. コンサートマスターってなんですか ? ",
          answer:
            "オーケストラのファーストバイオリンの一番前で弾いています。仕事はたくさんありますが、音楽的にオケ全体に指揮者の意図を伝えることが最大の仕事だと思います。",
        },
        {
          question: "Q2. なるほど。ずばり、この団の魅力は何ですか ? ",
          answer:
            "真面目に音楽をやっている人、音楽が本当に好きな人と出会えるし、本当に仲の良い親友、先輩後輩と知り合えることです。",
        },
        {
          question: "Q3. では最後に一言！",
          answer: "もし音楽が好きだったら、一緒に音楽をしましょう！",
        },
      ],
    },
    {
      id: "1",
      title: "初心者",
      name: "Cb. 山本 明音",
      image: interviewIconList[1],
      alt: "Cb. 山本 明音",
      qas: [
        {
          question: "Q1. これまでの音楽歴と高校の部活を教えてください！",
          answer: "ピアノを10年程習ってました。また、中高ずっと吹奏楽部で、クラリネットをやってました。",
        },
        {
          question: "Q2. どうして大学では管弦楽団に入ろうと思ったのですか？",
          answer:
            "低音楽器のかっこよさに惹かれており、新しく低音楽器をやってみたいと思っていたのとともに、それまで吹奏楽部にいたということもあって、弦楽器に憧れがあったからです！",
        },
        {
          question: "Q3. では、最後に一言！",
          answer:
            "管弦楽団は人が多いので他の学類の人とたくさん出会えて楽しいサークルです！せっかくだし楽器をやってみたいけど、大学から新しく楽器をはじめるのは不安という人も先輩方がちゃんと教えてくれるので大丈夫です！特にコントラバスは人が少ないのでどなたも大歓迎！狙い目です！お待ちしてます！",
        },
      ],
    },
    {
      id: "2",
      title: "医学類",
      name: "Vn. 小野 真朝",
      image: interviewIconList[2],
      alt: "Vn. 小野 真朝",
      qas: [
        {
          question: "Q1. 勉強との両立は大変ですか？",
          answer:
            "大変に思うこともあります。ですが管弦にも学類の縦のつながりがあるので、医学の先輩方から経験談やアドバイスやまとめノートを頂いたり。それをもとにちゃんと勉強すれば両立できます！",
        },
        {
          question: "Q2. 全学のサークルに所属してどうですか？",
          answer:
            "一番良い点は他の学類の人と関われるところだと思います。それぞれ自分の専門分野が違うので、色々な人がいておもしろいです！",
        },
        {
          question: "Q3. では最後に一言！",
          answer:
            "医学群は他の学群と隔離されているので、あまり他の学群の人に会う機会がないですよね。そこのあなた、医学エリアの外の世界に一歩踏み出してみませんか！？",
        },
      ],
    },
    {
      id: "3",
      title: "初心者",
      name: "Vn.  岩崎 優人",
      image: interviewIconList[3],
      alt: "Vn.  岩崎 優人",
      qas: [
        {
          question: "Q1. これまでの音楽歴と高校の部活を教えてください！",
          answer: "楽器は大学生になってから始めました。高校では書道部に所属していました。",
        },
        {
          question: "Q2. どうして大学では管弦楽団に入ろうと思ったのですか？",
          answer:
            "昔から楽器を弾くことに憧れがあって、大学入学して始めてみたいなと思い入団しました。新歓アンサンブルとノバホールでのリハーサルを聴きに行ってヴァイオリンの音色に魅了されました！",
        },
        {
          question: "Q3. では、最後に一言！",
          answer:
            "始めたばかりの時は、全然弾けないかもしれませんが、練習を重ねたり、本番を経験する事で徐々に弾けるようになるので、初心者でも入団を考えてみてください！",
        },
      ],
    },
    {
      id: "4",
      title: "留学生",
      name: "Vc. ウォルシュ アン",
      image: interviewIconList[4],
      alt: "Vc. ウォルシュ アン",
      qas: [
        {
          question: "Q1. Where are you from?",
          answer: "New York (USA)",
        },
        {
          question:
            "Q2. What are some of the challenges that come with playing in an orchestra in an unfamiliar place?",
          answer:
            "In the beginning I had a hard time getting familiar with the different musical terms. Something as simple as counting became difficult. Of course communication was also difficult, but I was able to overcome these challenges with the help of the other orchestra members.",
        },
        {
          question: "Q3. How has being a part of the orchestra helped you adjust to life in a new country and culture?",
          answer:
            "Without the orchestra I probably wouldn't have made Japanese friends. I have learned a lot here outside of just music. I have improved my language skills and my understanding of the culture as well.",
        },
        {
          question: "Final Remarks",
          answer:
            "I would like to thank all of the members of the orchestra for being so kind, patient, and supportive. I hope to see you soon!",
        },
      ],
    },
    {
      id: "5",
      title: "兼サー",
      name: "Hr. 三ツ谷 英子",
      image: interviewIconList[5],
      alt: "Hr. 三ツ谷 英子",
      qas: [
        {
          question: "Q1. 何サークルと兼してますか？",
          answer: "筑波大学吹奏楽団と学園祭実行委員会です。",
        },
        {
          question: "Q2. 兼サーは忙しいですか？",
          answer: "バイトを入れると、ほぼ毎日予定が埋まるので、忙しいかもしれないです。",
        },
        {
          question: "Q3. それぞれのサークルは週何回練習してるんですか？",
          answer:
            "吹奏楽団は水曜日と土曜日(時々金曜日)に練習に参加しています。学園祭実行委員会は金曜日にミーティングを行っています。",
        },
        {
          question: "Q4. では最後に一言！",
          answer:
            "参加が任意のサークルであれば、全然兼サーできます！入りたいサークルがいくつかあるなら、試しに全部やってみてもいいと思います！意外となんとかなります！！",
        },
      ],
    },
    {
      id: "6",
      title: "初心者",
      name: "Vn. 志村 晴菜",
      image: interviewIconList[6],
      alt: "Vn. 志村 晴菜",
      qas: [
        {
          question: "Q1. これまでの音楽歴と高校の部活を教えてください！",
          answer:
            "ピアノ 14年くらい (全然真面目に練習してないので歴だけ少し弾ける人風なだけです…) 英語ディベート、バドミントン (バドミントンはかなり短いです) ",
        },
        {
          question: "Q2. どうして大学では管弦楽団に入ろうと思ったのですか？",
          answer:
            "ずっとヴァイオリンをやりたかったところで、管弦楽団を知りオーケストラで弾いてみたいと思ったのがきっかけです。初心者で始めるのは不安だったのですが、先輩方がとても丁寧に教えて下さり、ちょっとずつですが上達を感じています。",
        },
        {
          question: "Q3. では、最後に一言！",
          answer:
            "初心者だと、やはり少し大変なことはあります。でも、周りの方々が丁寧に教えてくれます。少しでもやりたいと思っているなら一緒に頑張りましょう！管弦は経験者も初心者も大歓迎です！また、管弦には色々な人がたくさんいて、同期や先輩方と仲良くなれてとても楽しいです。知り合いが増えて、その点でも入ってよかったなと思っています。",
        },
      ],
    },
    {
      id: "7",
      title: "教職",
      name: "Fl. 中島 もえ",
      image: interviewIconList[7],
      alt: "Fl. 中島 もえ",
      qas: [
        {
          question: "Q1. 取っている教職の種類を教えてください！",
          answer: "特別支援学校、中学校社会、高校地理歴史の3つです！",
        },
        {
          question: "Q2. 勉強との両立は大変ですか？",
          answer:
            "教職を取っていない人に比べて空きコマが少なかったり、教育実習関連でどうしても練習をお休みしなければいけないときもあったりするので、大変ではないといえば嘘になります笑  ですが、管弦は学業優先で周りの団員も教職について理解してくれていたので、私は引退までやり遂げることができました！勉強も管弦も欲張れて、とっても充実した大学生活を送ることができました😊",
        },
        {
          question: "Q3. では最後に一言！",
          answer:
            "教職をたくさん取っていても、管弦なら両立可能です！管弦は人数も多く、音楽を通して学類外の友達や学年を超えた交友関係が得られて、本当に本当に楽しい大学生活になること間違いなし。みなさんも管弦に入って、充実した毎日を送ってみませんか？",
        },
      ],
    },
    {
      id: "8",
      title: "宅通",
      name: "Va. 伊藤 悠佑",
      image: interviewIconList[8],
      alt: "Va. 伊藤 悠佑",
      qas: [
        {
          question: "Q1. 筑波大学には自宅からどのように通っていますか？",
          answer: "つくばエクスプレスと自転車で、合わせて1時間ぐらいです",
        },
        {
          question: "Q2. やっぱり宅通は大変ですか？",
          answer:
            "つくばで練習したい時に、すぐに行けないのは少しつらいです、ただ夜に家で楽器が弾けるのでトントンですね👍",
        },
        {
          question: "Q3. では最後に一言！",
          answer:
            "確かに筑波大学、特に管弦楽団では宅通はマイノリティーです。ですがオケも勉強も熱意を持って打ち込めば、遅れをとることはありません！",
        },
      ],
    },
    {
      id: "9",
      title: "初心者",
      name: "Va. 淺葉 春",
      image: interviewIconList[9],
      alt: "Va. 淺葉 春",
      qas: [
        {
          question: "Q1. これまでの音楽歴と高校の部活を教えてください！",
          answer: "小、中ではバスケ部に、高校では陸上部に所属していました。音楽経験は今まで全くありません。",
        },
        {
          question: "Q2. どうして大学では管弦楽団に入ろうと思ったのですか？",
          answer:
            "管弦に入った理由は、もともと楽器をやってみたかったのと、高校の友人がヴァイオリンをやっていて大学オケがオススメと聞いて、新しいことを始めたいと思ったからです。",
        },
        {
          question: "Q3. では、最後に一言！",
          answer:
            "自己紹介で「オーケストラに入ってます！」と言えるのはなんだかカッコよくないですか？人生新しいことを挑戦しないとマンネリ化してしまいますよね。何か新しいことを始めてみたい人もさらに成長したい人も、つくオケに入ればその欲求を解消できます！仲間とともに切磋琢磨して一曲を完成させた時は表現できない達成感を得られます。あなたも推しの作曲家を見つけて悠々自適なオケライフを送りましょう！単位もしっかり取りましょう！",
        },
      ],
    },
  ];

  return (
    <>
      <Header isHome={false} />
      <div className={styles.pageContainer}>
        <div className={styles.pageTitle}>
          <h1>先輩インタビュー</h1>
        </div>
        <div className={styles.interview}>
          {interviewBlocks.map((interviewBlock, index) => (
            <div className={styles.interviewBlock} id={interviewBlock.id} key={index}>
              <div className={styles.interviewee}>
                <Img className={styles.intervieweeIcon} src={interviewBlock.image} alt={interviewBlock.alt} />
                <div className={styles.interviewTitle}>
                  <h2>{interviewBlock.title}</h2>
                  <h3>{interviewBlock.name}</h3>
                </div>
              </div>
              <div className={styles.interviewContent}>
                {interviewBlock.qas.map((qa, index) => (
                  <div className={styles.qa} key={index}>
                    <h4>{qa.question}</h4>
                    <p>{qa.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Interview;
