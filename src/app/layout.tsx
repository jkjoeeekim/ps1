import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

export const myFont = localFont({ src: "../sinkin-sans/SinkinSans-100Thin.otf" });

export const metadata: Metadata = {
  title: "Arghavan Architechture",
  description: "Arghavan Archtechture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
