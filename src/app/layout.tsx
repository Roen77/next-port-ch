
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Noto_Sans_KR } from "next/font/google";
import { useEffect, useState } from "react";
import Router from "next/router";

const notoSans = Noto_Sans_KR({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "프론트 엔지니어 Roen의 포트폴리오",
  description: "프론트 엔지니어 Roen의 포트폴리오 사이트입니다.",
  openGraph: {
    title: "프론트 엔지니어 Roen의 포트폴리오",
    description: "프론트 엔지니어 Roen의 포트폴리오 사이트입니다.",
    url: "https://silly-gecko-1a0c40.netlify.app/",
    siteName: "프론트 엔지니어 Roen의 포트폴리오",
    images: [
      {
        url: "https://github.com/Roen77/Roen77.github.io/assets/65719512/6ce374c2-7bb1-4d60-a029-61b694bded0a",
        width: 670,
        height: 624,
        alt: "My Profile",
      },
    ],
    locale: "ko_kR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="ko">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
