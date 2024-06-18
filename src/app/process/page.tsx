'use client';

import React from 'react';
import Image from 'next/image';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import image3 from '../assets/ps3.jpeg';
import SideInformation from './SideInformation';

const ProcessPage = () => {
  const mainSectionClass = 'w-2/3 m-auto py-8 text-[#36261d] flex flex-row';
  const imageSectionClass = 'aspect-4/5 w-1/2';
  const imageClass = 'h-full';

  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline();

    const classn = gsap.utils.toArray<HTMLElement>('.test__tester');
    console.log(classn)

    classn.forEach((obj, i) => {
      gsap.fromTo(obj, { opacity: 0.1 }, { opacity: 1, duration: 3 })
    });    
  }, { scope: container })

  return (
    <main className="bg-[#f7f4ed]">
      <Navbar></Navbar>
      <div className={mainSectionClass}>
        <section className={imageSectionClass}>
          <Image src={image3} alt='pic' className={imageClass} style={{ objectFit: "cover" }}></Image>
        </section>
        <section ref={container} className='w-1/2 bg-slate-500 p-10'>
          <SideInformation></SideInformation>
        </section>
      </div>
      <Footer></Footer>
    </main>)
}

export default ProcessPage