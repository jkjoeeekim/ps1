'use client';
import React from 'react';
import Link from 'next/link';
import { CiInstagram } from "react-icons/ci";
import { IconContext } from "react-icons";

import localFont from "next/font/local";

const myFontBold = localFont({ src: "../../sinkin-sans/SinkinSans-400Regular.otf" });

const Footer = () => {
  return (
    <footer className={`${myFontBold.className} h-min p-8 text-lg text-[#36261d] bg-[#d9c5ac] `}>
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