'use client';

import React from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const Pictures = () => {
  const linkName = [
    'https://aops1.s3.us-west-1.amazonaws.com/',
    '.jpg',
  ]
  var galleryLeftLinks = [];
  var galleryRightLinks = [];

  const searchParams = useSearchParams();
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

    const rightImageClassName = 'image__item opacity-0 py-2 pr-4 pl-2'
    const leftImageClassName = 'image__item opacity-0 py-2 pl-4 pr-2'

    // ** CREATE IMAGE GALLERY WITH DYNAMIC LINK NAMES ** //
    for (let i = 1; i <= projectImageCount; i++) {
      if (i % 2 == 0) {
        galleryLeftLinks.push(
          <Image 
          src={linkName[0] + projectInitials + i + linkName[1]} 
          priority={true}
          key={i} 
          alt='works'
          width={0}
          height={0} 
          sizes='100vw'
          className={leftImageClassName}
          style={{ width: '100%', height: 'auto' }}
        ></Image>
        )
      } else {
        galleryRightLinks.push(
          <Image src={linkName[0] + projectInitials + i + linkName[1]} priority key={i} alt='works' width={0} height={0} sizes='100vw' className={rightImageClassName} style={{ width: '100%', height: 'auto' }}></Image>
        )
      }
    }

    const infoItemClassName = '';

    // ** THE INFORMATION SECTION ** //
    galleryRightLinks.push(
      <div key={369} className='pb-4 pr-4 pl-2 h-full w-full text-end flex flex-col justify-end'>
        <div className='pt-4 tracking-widest flex flex-row justify-end'>
          <div className='text-lg'>
            {projectName} Residence . . . . . .
          </div>
          <div className='text-yellow-500 pl-2 text-lg'>
            . . . . . . PROJECT
          </div>
        </div>
        <div className='pt-4 tracking-widest flex flex-row justify-end'>
          <div className='text-lg'>
            Studio Ozmaie . . . . . .
          </div>
          <div className='text-yellow-500 pl-2 text-lg'>
            . . . . . . INTERIORS
          </div>
        </div>
        <div className='pt-4 tracking-widest flex flex-row justify-end'>
          <div className='text-lg'>
            Boss Architecture Firm, Brian Loffman . . . . . .
          </div>
          <div className='text-yellow-500 pl-2 text-lg'>
            . . . . . . ARCHITECT
          </div>
        </div>
        <div className='pt-4 tracking-widest flex flex-row justify-end'>
          <div className='text-lg'>
            Jenny Kardmon . . . .
          </div>
          <div className='text-yellow-500 pl-2 text-lg'>
            . . . . PHOTOGRAPHER
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='w-full flex flex-col'>
      <div className='w-full flex flex-row'>
        <section className='w-1/2 flex flex-col py-2'>
          {[...galleryLeftLinks]}
        </section>
        <section className='w-1/2 flex flex-col py-2'>
          {[...galleryRightLinks]}
        </section>
      </div>
    </div>
  )
}

export default Pictures