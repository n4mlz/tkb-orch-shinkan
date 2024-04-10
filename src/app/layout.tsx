import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/consts";
import "ress";
import "@styles/globals.scss";

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
    images: [
      {
        url: "/images/ogp.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    card: "summary_large_image",
    images: [
      {
        url: "/images/ogp.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
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
