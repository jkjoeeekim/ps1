'use client';

import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import MyCarousel from './MyCarousel';


const MainPage = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline();

    const classn = gsap.utils.toArray<HTMLElement>('.my__carousel');
    console.log(classn)

    classn.forEach((obj, i) => {
      gsap.fromTo(obj, { scale: 0.97 }, { opacity: 1, scale: 1, duration: 0.9 })
    });
  }, { scope: container })

  return (
    <main className="" ref={container}>
      <Navbar></Navbar>
      <MyCarousel></MyCarousel>
      <Footer></Footer>
    </main>
  )
}

export default MainPage