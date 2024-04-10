import { Metadata } from "next";
import Header from "@/components/Header/Header";
import { SITE_URL } from "@/consts";
import styles from "@app/pamphlet/pamphlet.module.scss";

export const metadata: Metadata = {
  title: "パンフレット",
};

const Pamphlet = () => {
  return (
    <>
      <Header isHome={false} />
      <embed
        className={styles.pdfViewer}
        src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${SITE_URL + "/pdf/pamphlet.pdf"}`}
      />
    </>
  );
};

export default Pamphlet;
