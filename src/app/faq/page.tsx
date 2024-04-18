import { Metadata } from "next";
import { StaticImageData } from "next/image";
import Img from "@/components/Img";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "@app/faq/faq.module.scss";
import { faqImageList } from "@/utils/images";

export const metadata: Metadata = {
  title: "Q&A",
};

const Faq = () => {
  type Qa = {
    question: string;
    answer: string[];
    images: { data: StaticImageData; alt: string }[] | null;
  };

  const qas: Qa[] = [
    {
      question: "大学に入ってから楽器を始めた団員さんはどれくらいいらっしゃいますか？",
      answer: [
        "現役団員 (新2年、3年生合わせて47名) の中で大学から今弾いている楽器を始めたのは約9名 (約19%) で、そのうち大学以前に全く楽器経験がないのは3名です。",
      ],
      images: null,
    },
    {
      question: "サークルやボランティア、バイトなどどれくらいかけ持ちできますか？",
      answer: [
        "どれくらいかは個人差がありますが、基本的には正規連（基本週３）と被らなければ兼サーもバイトも自由にできます！特にバイトに関してはほとんどの団員がバイトと両立しているので大丈夫です！",
        "団員の兼サーやバイト事情についてはInstagramやXに投稿していますので、ぜひそちらをご覧ください！",
        "もしどうしても他のサークルと時間がかぶりそうとかであれば、セクションや楽器によって事情が異なるので、新歓イベントの際に団員に相談してみてください。",
      ],
      images: null,
    },
    {
      question: " 現在所属している方の学類内訳はどのようになっていますか？",
      answer: ["現在の管弦楽団の学類分布は以下のようになっています！"],
      images: [
        { data: faqImageList[0], alt: "学類内訳" },
        { data: faqImageList[1], alt: "総合学域群の移行先" },
      ],
    },
    {
      question: "新2年生でもはいれますか？",
      answer: [
        "2年生からの入団も大歓迎です！",
        "実際に新歓時期ではないときに途中入団された方や編入生で入団された方などもいらっしゃいます！",
      ],
      images: null,
    },
    {
      question:
        "金銭的にも予定的にもすべてのコンサートに参加できないかもしれないのですが、それでもサークルに入ることは可能でしょうか？",
      answer: [
        "サークルに入ることは可能です！",
        "しかしパートや演奏会によって事情が異なるので、あらかじめ相談しておくようにしてください。",
      ],
      images: null,
    },
    {
      question: "入るアパートが楽器演奏不可なのですが、個人で練習できる場所は大学内などにありますか？",
      answer: [
        "基本的に毎日放課後や土日には学内の教室が練習場所として用意されており、それとは別に予約して使える練習室もあります！",
      ],
      images: null,
    },
    {
      question: "正式な入団はいつになるのでしょうか？",
      answer: [
        "新入生は秋の定期演奏会からの参加になるので、本格的に練習が始まるのは5月の定期演奏会後になると思います！",
        "入団説明会で仮入団フォームを記入してもらい、その後入団届を提出することで正式な入団となります。",
      ],
      images: null,
    },
  ];

  return (
    <>
      <Header isHome={false} />
      <div className={styles.pageContainer}>
        <div className={styles.pageTitle}>
          <h1>Q&A</h1>
        </div>
        <div className={styles.qas}>
          {qas.map((qa, index) => (
            <div className={styles.qa} key={index}>
              <h3 className={styles.question}>{`Q${index + 1}. ${qa.question}`}</h3>
              <div className={styles.answer}>
                <p>
                  {qa.answer.map((text) => (
                    <>
                      {text}
                      <br />
                    </>
                  ))}
                </p>
                {qa.images && (
                  <div className={styles.qaImages}>
                    {qa.images.map((image, index) => (
                      <Img className={styles.qaImage} src={image.data} alt={image.alt} key={index} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
