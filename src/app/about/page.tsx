import React from 'react'
import { Suspense } from 'react';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const AboutPage = () => {
  return (
    <main className="bg-[#fbf9f9]">
      <Suspense>
        <Navbar></Navbar>
      </Suspense>
      <div className="w-full h-[800px] flex flex-row p-4">
        <div className='w-2/3 h-[800px] flex flex-col'>
          <div className='w-full h-[376px] mb-4 bg-blue-400'>

          </div>
          <div className='w-full h-[376px] bg-green-300'>

          </div>
        </div>
        <div className='w-1/3 bg-yellow-300 ml-4'>

        </div>
      </div>
      <Footer></Footer>
    </main>
  )
}

export default AboutPage