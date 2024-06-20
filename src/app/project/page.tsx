'use client';

import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import Navbar from '../navbar/Navbar';
import ProjectItems from './ProjectItems';
import Footer from '../footer/Footer';

const ProjectPage = () => {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline();

    const projectItem = gsap.utils.toArray<HTMLElement>('.project__item');
    console.log(projectItem)

    projectItem.forEach((obj, i) => {
      gsap.fromTo(obj, { scale: 1.03 }, { scale: 1, opacity: 1, duration: 0.9, ease: 'power4.out' })
    });

    // tl.fromTo(classn[0], { scale: 0.2 }, { scale: 1 })
  }, { scope: container })

  return (
    <main className='bg-[#fbf9f9]' ref={container}>
      <Navbar></Navbar>
      <ProjectItems></ProjectItems>
      <Footer></Footer>
    </main>  )
}

export default ProjectPage