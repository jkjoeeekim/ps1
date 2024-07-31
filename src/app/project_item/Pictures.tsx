'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const Pictures = () => {
  // ** useState TO TRACK IF PICTURE IS CLICKED ** //
  const [isFocused, setFocused] = useState(false);
  const [imgNum, setImgNum] = useState(0);
  const [focusPic, setFocusPic] = useState(<div></div>);

  var display;
  let allLinks:any = [];

  
  
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

    const leftImageClassName = 'image__item opacity-0 py-2 pl-4 pr-2 hover:cursor-pointer'
    const rightImageClassName = 'image__item opacity-0 py-2 pr-4 pl-2 hover:cursor-pointer'

    // ** CREATE IMAGE GALLERY WITH DYNAMIC LINK NAMES ** //
    for (let i = 1; i <= 4; i++) {
      if (i % 2 == 0) {
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
            className={rightImageClassName}
            style={{ width: '100%', height: 'auto' }}
          ></Image>
        );

        allLinks.push(img);
        galleryRLinks.push(img)
      } else {
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
        galleryLLinks.push(img)
      }
    };
    for (let i = 5; i <= projectImageCount; i++) {
      if (i % 2 == 0) {
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
            className={rightImageClassName}
            style={{ width: '100%', height: 'auto' }}
          ></Image>
        );

        allLinks.push(img);
        galleryRLinks.push(img)
      } else {
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

  // if (isFocused) {
  //   display = (
  //     <div className='w-full h-full'>
  //       <section className='w-1/2 flex flex-col py-2'>
  //         {allLinks[(imgNum - 1)]}
  //       </section>
  //     </div>
  //   )
  // } else {
  //   display = (
  //     <div className='w-full flex flex-col'>
  //       <div className='w-full flex flex-row'>
  //         <section className='w-1/2 flex flex-col py-2'>
  //           {[...galleryLLinks]}
  //         </section>
  //         <section className='w-1/2 flex flex-col py-2'>
  //           {[...galleryRLinks]}
  //         </section>
  //       </div>
  //     </div>
  //   );
  // };
  // return display

  function onImgClick(num: number) {
    let img = allLinks[num];
    console.log(img);
    setImgNum(num);
    setFocusPic(allLinks[(num - 1)]);

    if (isFocused) {
      setFocused(false)
    } else {
      setFocused(true);
    }
    // setFocused(true);
  };

  var galleryClassName = ""
  var totalViewClassName = ""
  var pic;

  var show = [...allLinks];

  if (isFocused) {
    galleryClassName = "w-full flex flex-col py-2"
    totalViewClassName = "hidden w-full flex flex-row"
    show = allLinks[(imgNum - 1)]
  } else {
    galleryClassName = "hidden w-full flex flex-col py-2"
    totalViewClassName = "w-full flex flex-row"
    show = [...allLinks];
  }

  return(
    <div className='w-full flex flex-col'>
      <div className={galleryClassName}>
        <section className='h-screen flex flex-row'>
          {/* {focusPic} */}
          {show}
        </section>
      </div>
      <div className={totalViewClassName}>
        <section className='w-1/2 flex flex-col py-2'>
          {[...galleryLLinks]}
        </section>
        <section className='w-1/2 flex flex-col py-2'>
          {[...galleryRLinks]}
        </section>
      </div>
    </div>
  )
}

export default Pictures