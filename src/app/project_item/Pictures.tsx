'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const Pictures = () => {
  // ** useState TO TRACK IF PICTURE IS CLICKED ** //
  const [isFocused, setFocused] = useState(false);
  const [imgNum, setImgNum] = useState(0);

  var display;
  let allLinks:any = [];

  function onImgClick(num: number) {
    let img = allLinks[num];
    console.log(img);
    setImgNum(num);
    setFocused(true);
  };

  if (isFocused) {
    display = (
      <div className='w-full h-full'>
        {allLinks[imgNum]}
      </div>
    )
  }
  
  const linkName = [
    'https://aops1.s3.us-west-1.amazonaws.com/',
    '/',
    '.jpg',
  ]
  var galleryRLinks = [];
  var galleryLLinks = [];

  const searchParams = useSearchParams();
  const projectName = searchParams.get('project');
  var projectNameArray = [''];
  if (typeof projectName !== "undefined") {
    projectNameArray = projectName!.split("$$");

    // var projectInitials = 'PS';
    const projectImageCount = Number(projectNameArray[3]);
    const projectImageType = projectNameArray[2];


    // projectNameArray.forEach((element: String) => {
    //   const lowerCaseInitial = element[0].toLowerCase();
    //   projectInitials += lowerCaseInitial;
    // });

    const rightImageClassName = 'image__item opacity-0 py-2 pl-4 pr-2 hover:cursor-pointer'
    const leftImageClassName = 'image__item opacity-0 py-2 pr-4 pl-2 hover:cursor-pointer'

    // ** CREATE IMAGE GALLERY WITH DYNAMIC LINK NAMES ** //
    for (let i = 1; i <= 4; i++) {
      let img = (
        <Image
          src={linkName[0] + projectNameArray[0] + linkName[1] + projectNameArray[1] + i + projectImageType}
          priority={true}
          onClick={() => onImgClick(i)}
          key={i}
          alt='works'
          width={0}
          height={0}
          sizes='100vw'
          className={leftImageClassName}
          style={{ width: '100%', height: 'auto' }}
        ></Image>
      );

      allLinks.push(img);
      
      if (i % 2 == 0) {
        galleryRLinks.push(img)
      } else {
        galleryLLinks.push(img)
      }
    };
    for (let i = 5; i <= projectImageCount; i++) {
      let img = (
        <Image
          src={linkName[0] + projectNameArray[0] + linkName[1] + projectNameArray[1] + i + projectImageType}
          priority={true}
          onClick={() => onImgClick(i)}
          key={i}
          alt='works'
          width={0}
          height={0}
          sizes='100vw'
          className={leftImageClassName}
          style={{ width: '100%', height: 'auto' }}
        ></Image>
      );

      allLinks.push(img);
      
      if (i % 2 == 0) {
        galleryRLinks.push(img)
      } else {
        galleryLLinks.push(img)
      }
    };

    // ** THE INFORMATION SECTION ** //
    galleryRLinks.push(
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
  };

  if (display == undefined) {
    display = (
    <div className='w-full flex flex-col'>
      <div className='w-full flex flex-row'>
        <section className='w-1/2 flex flex-col py-2'>
          {[...galleryLLinks]}
        </section>
        <section className='w-1/2 flex flex-col py-2'>
          {[...galleryRLinks]}
        </section>
      </div>
    </div>
  );
}
  return display
}

export default Pictures