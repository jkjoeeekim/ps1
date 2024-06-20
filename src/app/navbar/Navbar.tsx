'use client';

import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { IconContext } from "react-icons";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import localFont from "next/font/local";

const myFontBold = localFont({ src: "../../sinkin-sans/SinkinSans-400Regular.otf" });
const myFontBolder = localFont({ src: "../../sinkin-sans/SinkinSans-500Medium.otf" });

//* color bg-[#d9c5ac] *//

// ** NAVIGATION BAR CLASSES ** //
const Header = "text-[#5d5e59] bg-[#c0b7af] place-content-between h-[75px] flex m-auto tracking-wide";
const NavbarMainLink = "btn btn-ghost px-4 tracking-widest text-4xl pt-8 rounded-sm hover:pt-2 hover:bg-[#fbf9f9] duration-500 ease-in-out";
const NavbarSideLinks = `${myFontBold.className} btn btn-ghost px-4 text-sm tracking-widest pt-12 rounded-sm hover:pt-2 hover:bg-[#fbf9f9] duration-500 ease-in-out`;
const NavbarSocialLinks = `${myFontBold.className} btn btn-ghost px-4 text-sm tracking-widest pt-9 rounded-sm hover:pt-2 hover:bg-[#fbf9f9] duration-500 ease-in-out`;

const Navbar = () => {

  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
  const navbarItems = gsap.utils.toArray<HTMLElement>('.navbar__item');

  navbarItems.forEach((obj, i) => {
    gsap.fromTo(obj, { scale: 1.13 }, { scale: 1, opacity: 1, duration: 0.9, ease: 'power4.out', })
  });
  }, { scope: container })

  return (
    <header className={Header} ref={container}>
      <nav className='navbar__item opacity-0 h-full flex flex-row justify-start border-[#36261d] w-2/3'>
        <Link href='/' className={NavbarMainLink}>
          STUDIO OZMAIE
        </Link>
        <Link href="/" className={NavbarSocialLinks}>
          <IconContext.Provider value={{ color: "", className: "", size: "2.4em" }}>
            <CiInstagram></CiInstagram>
          </IconContext.Provider>
        </Link>
      </nav>
      <nav className='navbar__item opacity-0 h-full w-1/3 flex flex-row justify-end'>
        <Link href='/project' className={NavbarSideLinks}>
          PROJECTS
        </Link>
        <Link href='/process' className={NavbarSideLinks}>
          PROCESS
        </Link>
        <Link href='/about' className={NavbarSideLinks}>
          ABOUT
        </Link>
        <Link href='/contact' className={NavbarSideLinks}>
          CONTACT
        </Link>
      </nav>
    </header>
  )
}

export default Navbar