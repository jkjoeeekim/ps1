'use client';

import React from 'react';
import Image from 'next/image';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, Suspense } from 'react';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import image3 from '../assets/ps3.jpeg';
import image2 from '../assets/ps2.jpeg';
import SideInformation from './SideInformation';

const ProcessPage = () => {
  const mainSectionClass = 'p-4 text-[#36261d] flex flex-row justify-evenly';
  const imageSectionClass = 'main__class opacity-0 aspect-4/5 w-1/3';
  const imageClass = 'h-full';

  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const mainClass = gsap.utils.toArray<HTMLElement>('.main__class');

    mainClass.forEach((obj, i) => {
      gsap.fromTo(obj, { scale: 1.05 }, { opacity: 1, scale: 1, duration: 1.1, ease: 'power4.out' })
    });    
  }, { scope: container })

  return (
    <main className="bg-[#fbf9f9]" ref={container}>
      <Suspense>
        <Navbar></Navbar>
      </Suspense>
      <div className={mainSectionClass}>
        <section className={imageSectionClass}>
          <Image src={image3} alt='pic' className={imageClass} style={{ objectFit: "cover" }}></Image>
        </section>
        <section className='main__class opacity-0 w-1/3 px-7 py-1'>
          <SideInformation></SideInformation>
        </section>
        <section className={imageSectionClass}>
          <Image src={image2} alt='pic' className={imageClass} style={{ objectFit: "cover" }}></Image>
        </section>
      </div>
      <Footer></Footer>
    </main>)
}

export default ProcessPage