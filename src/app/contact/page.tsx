import React from 'react'
import { Suspense } from 'react';

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const ContactPage = () => {
  return (
    <main className="">
      <Suspense>
        <Navbar></Navbar>
      </Suspense>
      <div className="w-max p-24 m-auto">
        Contact Page
      </div>
      <Footer></Footer>
    </main>  )
}

export default ContactPage