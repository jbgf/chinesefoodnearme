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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === "development"
  const Wrapper = isDev ? Inspector : React.Fragment;
  return (
    <html lang="en" data-theme="cupcake">
      <Wrapper>

        <body className={inter.className}>{children}</body>
        <DevTKD />
      </Wrapper>
    </html>
  );
}
