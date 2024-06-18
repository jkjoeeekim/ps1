import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const myFont = localFont({ src: "../sinkin-sans/SinkinSans-300Light.otf" });

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
