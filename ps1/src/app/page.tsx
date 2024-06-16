import Image from "next/image";
import localFont from "next/font/local";

import MainPage from "./main_page/MainPage";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const myFont = localFont({ src: "../sinkin-sans/SinkinSans-200XLight.otf" })

export default function Home() {
  return (
    <main className={myFont.className}>
      <Navbar></Navbar>
      <MainPage></MainPage>
      <Footer></Footer>
    </main>
  );
}
