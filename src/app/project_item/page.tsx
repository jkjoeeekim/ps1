'use client';

import React from 'react';
import { useRef, Suspense } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Pictures from './Pictures';

function ProjectItemFallback() {
  return (<div>placeholder</div>)
}

const ProjectItem = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const projectItem = gsap.utils.toArray<HTMLElement>('.image__item');

    projectItem.forEach((obj, i) => {
      gsap.fromTo(obj, { scale: 0.95 }, { scale: 1, opacity: 1, duration: 5, ease: 'power1.inOut' })
    });

    // tl.fromTo(classn[0], { scale: 0.2 }, { scale: 1 })
  }, { scope: container })

  
  return (
    <main className='bg-[#fbf9f9]' ref={container}>
      <Suspense>
        <Navbar></Navbar>
      </Suspense>
      <Suspense>
        <Pictures></Pictures>
      </Suspense>
      <Footer></Footer>
    </main>
  )
}

export default ProjectItem