import React from 'react'
import { Suspense } from 'react';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const AboutPage = () => {
  return (
    <main className="">
      <Suspense>
        <Navbar></Navbar>
      </Suspense>
      <div className="w-max p-24 m-auto">
        About Page
      </div>
      <Footer></Footer>
    </main>  )
}

export default AboutPage