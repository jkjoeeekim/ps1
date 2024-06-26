'use client';

import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, Suspense } from 'react';

import Navbar from '../navbar/Navbar';
import ProjectItems from './ProjectItems';
import Footer from '../footer/Footer';

const ProjectPage = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const projectItem = gsap.utils.toArray<HTMLElement>('.project__item');

    projectItem.forEach((obj, i) => {
      gsap.fromTo(obj, { scale: 1.05 }, { scale: 1, opacity: 1, duration: 1.1, ease: 'power4.out' })
    });

    // tl.fromTo(classn[0], { scale: 0.2 }, { scale: 1 })
  }, { scope: container })

  return (
    <main className='bg-[#fbf9f9]' ref={container}>
      <Suspense>
        <Navbar></Navbar>
      </Suspense>
      <ProjectItems></ProjectItems>
      <Footer></Footer>
    </main>  
  )
}

export default ProjectPage