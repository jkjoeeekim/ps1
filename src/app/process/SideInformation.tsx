import React from 'react';

import localFont from "next/font/local";

const myFontBold = localFont({ src: "../../sinkin-sans/SinkinSans-500Medium.otf" });
const myFontRegular = localFont({ src: "../../sinkin-sans/SinkinSans-400Regular.otf" });
const myFontLighter = localFont({ src: "../../sinkin-sans/SinkinSans-200XLight.otf" });

const SideInformation = () => {
  return (
    <div className='h-full w-full flex flex-col justify-between text-center'>
      <section className=''>
        <div className={`${myFontBold.className} text-xl font-bold tracking-widest mb-3`}>PROCESS</div>
      </section>
      <section className=''>
        <div className={`${myFontRegular.className} text-lg tracking-widest mb-3`}>PRE-DESIGN</div>
        <ol className={`${myFontLighter.className} text-base tracking-wide mb-3`}>
          <li className='mb-1'>
            - Project Consultation
          </li>
          <li className='mb-1'>
            - Establish Budget, and Scope
          </li>
          <li className='mb-1'>
            - Create Furniture List
          </li>
          <li className='mb-1'>
            - Proposal
          </li>
        </ol>
      </section>
      <section>
        <div className={`${myFontRegular.className} text-lg tracking-widest mb-3`}>DESIGN PHASE</div>
        <ol className={`${myFontLighter.className} text-base tracking-wide mb-3`}>
          <li className='mb-1'>
            - Furniture Plan & Layout
          </li>
          <li className='mb-1'>
            - Define Look & Feel
          </li>
          <li className='mb-1'>
            - Develop Custom Schemes
          </li>
          <li className='mb-1'>
            - 3D Study (as needed)
          </li>
          <li className='mb-1'>
            - Art & Accessories
          </li>
          <li className='mb-1'>
            - Procurement
          </li>
          <li className='mb-1'>
            - Move in & Install
          </li>
        </ol>
      </section>
      <section>
        <div className={`${myFontRegular.className} text-lg tracking-widest mb-3`}>SERVICES</div>
        <ol className={`${myFontLighter.className} text-base tracking-wide mb-3`}>
          <li className='mb-1'>
            - Project Consultation
          </li>
          <li className='mb-1'>
            - Establish Budget, and Scope
          </li>
          <li className='mb-1'>
            - Create Furniture List
          </li>
          <li className='mb-1'>
            - Proposal
          </li>
        </ol>
      </section>
    </div>
  )
}



export default SideInformation