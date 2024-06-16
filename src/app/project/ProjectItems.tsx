'use client';

import React from 'react';
import Image from 'next/image';

import image1 from '../assets/ps1.jpg';
import image2 from '../assets/ps2.jpeg';
import image3 from '../assets/ps3.jpeg';

const ProjectItems = () => {
  var x;
  var y;
  var thirdX = 0;
  if (!!window) {
    x = window.screen.width;
    y = window.screen.height;
    thirdX = x / 3;
  }

  const rowClassFirst = `flex flex-row w-screen p-8 h-[${thirdX * 1.3}px]`;
  const rowClass = `flex flex-row w-screen px-8 pb-8 h-[${thirdX * 1.3}px]`;
  const itemClassFirst = 'bg-[#f7f4ed] aspect-4/5 w-full h-full';
  const itemClass = 'bg-[#f7f4ed] ml-3 aspect-4/5 w-full h-full';

  return (
    <nav className='flex flex-col w-screen'>
      <nav className={rowClassFirst}>
        <section className={itemClassFirst}>
          <Image src={image1} alt='Pic1' className='w-full h-full hover:bg-slate-200 duration-300 ease-in-out' style={{ objectFit: "cover" }}></Image>
        </section>
        <section className={itemClass}>
          <Image src={image2} alt='Pic1' className='w-full h-full hover:bg-slate-200 duration-300 ease-in-out' style={{ objectFit: "cover" }}></Image>
        </section>
        <section className={itemClass}>
          <Image src={image3} alt='Pic1' className='w-full h-full hover:bg-slate-200 duration-300 ease-in-out' style={{ objectFit: "cover" }}></Image>
        </section>
      </nav>
      <nav className={rowClass}>
        <section className={itemClassFirst}>

        </section>
        <section className={itemClass}>

        </section>
        <section className={itemClass}>

        </section>
      </nav>
      <nav className={rowClass}>
        <section className={itemClassFirst}>

        </section>
        <section className={itemClass}>

        </section>
        <section className={itemClass}>

        </section>
      </nav>
    </nav>
  )
}

export default ProjectItems