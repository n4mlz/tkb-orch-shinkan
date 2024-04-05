import { Metadata } from "next";
import { StaticImageData } from "next/image";
import Img from "@/components/Img";
import Header from "@/components/Header/Header";
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
    </>
  );
};

export default Faq;
