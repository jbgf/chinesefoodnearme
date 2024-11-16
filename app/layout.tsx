import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Inspector } from 'react-dev-inspector'

import "./globals.css";
import DevTKD from './components/dev-tdk';
import { generateDescription, generateTitle } from './utils';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: generateTitle(),
  description: generateDescription(),
  alternates: {
    canonical: 'https://www.chinesefoodnearme.info', // 请替换为您的实际域名
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === "development"
  return (
    <html lang="en" data-theme="cupcake">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
