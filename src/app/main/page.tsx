'use client';

import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, Suspense } from 'react';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import MyCarousel from './MyCarousel';


const MainPage = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline();

    const classn = gsap.utils.toArray<HTMLElement>('.my__carousel');

    classn.forEach((obj, i) => {
      gsap.fromTo(obj, { scale: 1.03 }, { opacity: 1, scale: 1, duration: 1.1, ease: 'power4.out' })
    });
  }, { scope: container })

  return (
    <main className="" ref={container}>
      <Suspense>
        <Navbar></Navbar>
      </Suspense>
      <MyCarousel></MyCarousel>
      <Footer></Footer>
    </main>
  )
}

export default MainPage