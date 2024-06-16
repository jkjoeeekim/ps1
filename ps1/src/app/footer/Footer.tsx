'use client';
import React from 'react';
import Link from 'next/link';
import { CiInstagram } from "react-icons/ci";
import { IconContext } from "react-icons";




const Footer = () => {
  return (
    <footer className='h-min text-black p-8 bg-[#f7f4ed]'>
      <div className='flex flex-row place-content-center'>
        <div className='flex flex-col place-content-center'>
          <Link href="/" className='place-content-center w-min m-auto'>
            <IconContext.Provider value={{ color: "", className: "", size:"1.8em" }}>
              <CiInstagram></CiInstagram>
            </IconContext.Provider>
          </Link>
          <Link href='/' className='btn btn-ghost tracking-widest mt-7'>
            ARGHAVAN CONCEPTS 2024
          </Link>
        </div>
        <div className=''>
        </div>
      </div>
    </footer>
  )
}

export default Footer