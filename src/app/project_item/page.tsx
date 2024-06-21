'use client';
import React, { use } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const ProjectItem = (query: any, ) => {
  var x;
  var y;
  var halfX;
  if (typeof window !== "undefined") {
    x = window.screen.width;
    y = window.screen.height;
    halfX = x / 2;
  }
  const linkName = [
    'https://aops1.s3.us-west-1.amazonaws.com/',
    '.jpg',
  ]

  const projectNameArray = query.searchParams.project.split(" ");
  var projectInitials = '';
  const projectImageCount = 28;

  var galleryLeftLinks = [];
  var galleryRightLinks = [];
  
  projectNameArray.forEach((element: String) => {
    const lowerCaseInitial = element[0].toLowerCase();
    projectInitials += lowerCaseInitial;
  });

  for (let i = 1; i <= projectImageCount; i++) {
    if (i % 2 == 0) {
      galleryLeftLinks.push(
        <Image src={linkName[0] + projectInitials + i + linkName[1]} priority alt='works' width={x} height={100} className='' style={{ objectFit: "cover" }}></Image>
      )
    } else {
      galleryRightLinks.push(
        <Image src={linkName[0] + projectInitials + i + linkName[1]} priority alt='works' width={x} height={100} className='' style={{ objectFit: "cover" }}></Image>
      )
    }
  }
  console.log()
  return (
    <main>
      <Navbar></Navbar>
      <div>ProjectItem:  {query.searchParams.project}</div>
      <div className='w-full flex flex-row'>
        <section className='w-1/2 flex flex-col '>
          {[...galleryLeftLinks]}
        </section>
        <section className='w-1/2 flex flex-col '>
          {[...galleryRightLinks]}
        </section>
      </div>
      <Footer></Footer>
    </main>
  )
}

export default ProjectItem