'use client';

import React from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

function ProjectItemFallback() {
  return (<div>placeholder</div>)
}

const Pictures = () => {
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
  if (typeof projectName !== "undefined") {
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
  return (
    <div className='w-full flex flex-row'>
      <section className='w-1/2 flex flex-col '>
        {[...galleryLeftLinks]}
      </section>
      <section className='w-1/2 flex flex-col '>
        {[...galleryRightLinks]}
      </section>
    </div>
  )
}

export default Pictures