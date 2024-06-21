'use client';
import React, { use } from 'react';
import Image from 'next/image';
import { Suspense } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

function ProjectItemFallback() {
  return (<div>placeholder</div>)
}

const ProjectItem = () => {
  var x = 0;
  var y = 0;
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
  var galleryLeftLinks = [];
  var galleryRightLinks = [];

  const searchParams = useSearchParams();
  console.log(searchParams.get('project'));
  const projectName = searchParams.get('project');
  var projectNameArray = [''];
  if (typeof projectName !== "undefined" ) {
    projectNameArray = projectName!.split(" ");

    var projectInitials = '';
    const projectImageCount = 28;
    
    
    projectNameArray.forEach((element: String) => {
      const lowerCaseInitial = element[0].toLowerCase();
      projectInitials += lowerCaseInitial;
    });
    
    for (let i = 1; i <= projectImageCount; i++) {
      if (i % 2 == 0) {
        galleryLeftLinks.push(
          <Image src={linkName[0] + projectInitials + i + linkName[1]} priority key={i} alt='works' width={0} height={0} sizes='100vw' className='' style={{ width: '100%', height: 'auto' }}></Image>
        )
      } else {
        galleryRightLinks.push(
          <Image src={linkName[0] + projectInitials + i + linkName[1]} priority key={i} alt='works' width={0} height={0} sizes='100vw' className='' style={{ width: '100%', height: 'auto' }}></Image>
        )
      }
    }
  }
  console.log()
  return (
    <main>
      <Navbar></Navbar>
      <div>ProjectItem:  {projectName}</div>
      <div className='w-full flex flex-row'>
        <section className='w-1/2 flex flex-col '>
          <Suspense fallback={<ProjectItemFallback />}>
            {[...galleryLeftLinks]}
          </Suspense>
        </section>
        <section className='w-1/2 flex flex-col '>
          <Suspense fallback={<ProjectItemFallback />}>
            {[...galleryRightLinks]}
          </Suspense>
        </section>
      </div>
      <Footer></Footer>
    </main>
  )
}

export default ProjectItem