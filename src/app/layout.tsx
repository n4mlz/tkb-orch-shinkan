import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "ress";
import "@styles/globals.scss";

export const metadata: Metadata = {
  title: "筑波大学 管弦楽団 新歓ウェブサイト",
  description:
    "筑波大学管弦楽団は1974年に創団された、筑波大学内では最大規模を誇る課外活動団体の1つです。練習、演奏会やその他の活動を通して、団の演奏技術の向上、そして団員間の親睦を深めることを目的としています。",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJP.variable}`}>{children}</body>
    </html>
  );
}
