import React from 'react';
import Image from 'next/image';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import MyCarousel from './MyCarousel';


const MainPage = () => {
  return (
    <main className="">
      <Navbar></Navbar>
      <MyCarousel></MyCarousel>
      <Footer></Footer>
    </main>
  )
}

export default MainPage