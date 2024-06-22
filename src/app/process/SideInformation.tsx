import React from 'react';

import localFont from "next/font/local";

const myFontBold = localFont({ src: "../../sinkin-sans/SinkinSans-500Medium.otf" });
const myFontRegular = localFont({ src: "../../sinkin-sans/SinkinSans-400Regular.otf" });
const myFontLighter = localFont({ src: "../../sinkin-sans/SinkinSans-200XLight.otf" });

const SideInformation = () => {
  return (
    <div className='h-full w-full flex flex-col justify-evenly text-center'>
      <section className='w-full flex flex-row justify-center'>
        <div className=''>
          <div className={`${myFontRegular.className} border-b-2 border-[#2e2826] text-lg tracking-widest mb-3`}>PRE-DESIGN</div>
          <ol className={` text-md tracking-normal mb-3`}>
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
        </div>
      </section>
      <section className='w-full flex flex-row justify-center'>
        <div className=''>
          <div className={`${myFontRegular.className} border-b-2 border-[#2e2826] text-lg tracking-widest mb-3`}>DESIGN PHASE</div>
          <ol className={` text-md tracking-normal mb-3`}>
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
        </div>
      </section>
      <section className='w-full flex flex-row justify-center'>
        <div className=''>
          <div className={`${myFontRegular.className} border-b-2 border-[#2e2826] text-lg tracking-widest mb-3`}>SERVICES</div>
          <ol className={` text-md tracking-normal mb-3`}>
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
        </div>
      </section>
    </div>
  )
}



export default SideInformation