'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';

import image1 from '../assets/ps1.jpg';
import image2 from '../assets/ps2.jpeg';
import image3 from '../assets/ps3.jpeg';
import blackBg from '../assets/black_bg.jpeg';

const ProjectItems = () => {
  var x;
  var y;
  var thirdX = 0;
  if (typeof window !== "undefined") {
    x = window.screen.width;
    y = window.screen.height;
    thirdX = x / 3;
  }

  const rowClassFirst = `flex flex-row w-screen p-4 h-[${thirdX * 1.3}px]`;
  const rowClass = `flex flex-row w-screen px-4 pb-4 h-[${thirdX * 1.3}px]`;
  const itemClassFirst = 'project__item opacity-0 bg-[#fbf9f9] aspect-4/5 w-full h-full relative';
  const itemClass = 'project__item opacity-0 bg-[#fbf9f9] ml-4 aspect-4/5 w-full h-full relative';
  const imageClass = 'w-full h-full hover:bg-slate-200 duration-300 ease-in-out ';
  const blackBgClass = 'absolute w-full h-full opacity-0 hover:opacity-90 duration-300 ease-in-out cursor-pointer';
  const centerTextClass = 'absolute w-full h-1/2 text-xl tracking-widest font-extrabold text-white text-center top-1/2';


  return (
    <nav className='flex flex-col w-screen'>
      <nav className={rowClassFirst}>
        <section className={itemClassFirst}>
          <Link prefetch={false} className={blackBgClass} href={{
            pathname: '/project_item',
            query: { project: 'Palo Alto' },
          }}>
            <h3 className={centerTextClass}>Palo Alto Residence</h3>
            <Image src={blackBg} alt='Pic1' className='w-full h-full' style={{ objectFit: "cover" }}></Image>
          </Link>
          <Image src={image1} alt='Pic1' className={imageClass} priority={true} style={{ objectFit: "cover" }}></Image>
        </section>
        <section className={itemClass}>
          <Link prefetch={false} className={blackBgClass} href={{
            pathname: '/project_item',
            query: { project: 'Palo Alto' },
          }}>
            <h3 className={centerTextClass}>Los Altos Residence</h3>
            <Image src={blackBg} alt='Pic1' className='w-full h-full' style={{ objectFit: "cover" }}></Image>
          </Link>
          <Image src={image2} alt='Pic1' className={imageClass} priority={true} style={{ objectFit: "cover" }}></Image>
        </section>
        <section className={itemClass}>
          <Link prefetch={false} className={blackBgClass} href={{
            pathname: '/project_item',
            query: { project: 'Palo Alto' },
          }}>
            <h3 className={centerTextClass}>Hillsborough Residence</h3>
            <Image src={blackBg} alt='Pic1' className='w-full h-full' style={{ objectFit: "cover" }}></Image>
          </Link>
          <Image src={image3} alt='Pic1' className={imageClass} priority={true} style={{ objectFit: "cover" }}></Image>
        </section>
      </nav>
      <nav className={rowClass}>
        <section className={itemClassFirst}>
          <Link prefetch={false} className={blackBgClass} href={{
            pathname: '/project_item',
            query: { project: 'Palo Alto' },
          }}>
            <h3 className={centerTextClass}>Los Altos Residence</h3>
            <Image src={blackBg} alt='Pic1' className='w-full h-full' style={{ objectFit: "cover" }}></Image>
          </Link>
          <Image src={image2} alt='Pic1' className={imageClass} priority={true} style={{ objectFit: "cover" }}></Image>
        </section>
        <section className={itemClass}>
          <Link prefetch={false} className={blackBgClass} href={{
            pathname: '/project_item',
            query: { project: 'Palo Alto' },
          }}>
            <h3 className={centerTextClass}>Hillsborough Residence</h3>
            <Image src={blackBg} alt='Pic1' className='w-full h-full' style={{ objectFit: "cover" }}></Image>
          </Link>
          <Image src={image3} alt='Pic1' className={imageClass} priority={true} style={{ objectFit: "cover" }}></Image>
        </section>
        <section className={itemClass}>
          <Link prefetch={false} className={blackBgClass} href={{
            pathname: '/project_item',
            query: { project: 'Palo Alto' },
          }}>
            <h3 className={centerTextClass}>Palo Alto Residence</h3>
            <Image src={blackBg} alt='Pic1' className='w-full h-full' style={{ objectFit: "cover" }}></Image>
          </Link>
          <Image src={image1} alt='Pic1' className={imageClass} priority={true} style={{ objectFit: "cover" }}></Image>
        </section>
      </nav>
    </nav>
  )
}

export default ProjectItems