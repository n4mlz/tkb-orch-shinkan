import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "ress";
import "@styles/globals.scss";

const SITE_NAME = "筑波大学 管弦楽団 2024 新歓Web";
const SITE_DESCRIPTION =
  "筑波大学管弦楽団は1974年に創団された、筑波大学内では最大規模を誇る課外活動団体の1つです。練習、演奏会やその他の活動を通して、団の演奏技術の向上、そして団員間の親睦を深めることを目的としています。";
const SITE_URL = "https://shinkan.tsukuba-orch.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  icons: [{ rel: "icon", url: "/images/favicon.ico", type: "image/x-icon" }],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: "/images/ogp.png", alt: SITE_NAME }],
  },
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
