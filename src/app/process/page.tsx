'use client';
import React from 'react';
import Image from 'next/image';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import image3 from '../assets/ps3.jpeg';

const ProcessPage = () => {
  var x = 0;
  var y = 0;
  var useWidth = 0;
  var useHeight = 0;
  if (typeof window !== "undefined") {
    x = window.screen.width;
    y = window.screen.height;
    useWidth = (x * 0.5);
    useHeight = (((x * 0.9) / 2) * 1.3);
    console.log(`${x} ${y} ${useWidth}`)
  }

  const mainSectionClass = 'w-2/3 m-auto py-8 text-[#36261d] flex flex-row';
  const imageSectionClass = 'aspect-4/5 w-1/2';
  const imageClass = 'h-full';

  return (
    <main className="bg-[#f7f4ed]">
      <Navbar></Navbar>
      <div className={mainSectionClass}>
        <section className={imageSectionClass}>
          <Image src={image3} alt='pic' className={imageClass} style={{ objectFit: "cover" }}></Image>
        </section>
        <section className='w-1/2 bg-slate-500 p-10'>
        
        </section>
      </div>
      <Footer></Footer>
    </main>)
}

export default ProcessPage