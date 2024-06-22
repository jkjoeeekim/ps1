'use client';

import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { IconContext } from "react-icons";

import { usePathname, useSearchParams } from "next/navigation";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import localFont from "next/font/local";

const myFontBold = localFont({ src: "../../sinkin-sans/SinkinSans-400Regular.otf" });
const myFontBolder = localFont({ src: "../../sinkin-sans/SinkinSans-500Medium.otf" });

//* color bg-[#d9c5ac] c0b7af *//

// ** NAVIGATION BAR CLASSES ** //
const Header = "text-[#110100] bg-[#cabcac] place-content-between h-[75px] flex m-auto tracking-wide";
const NavbarMainLink = "btn btn-ghost px-4 tracking-widest text-4xl pt-7 hover:pt-4 hover:bg-[#fbf9f9] duration-300 ease-in-out";
var NavbarCurrentPage = '';
const NavbarSideLinks = `${myFontBolder.className} btn btn-ghost px-4 text-md tracking-widest pt-10 hover:pt-7 hover:bg-[#fbf9f9] duration-300 ease-in-out`;
const NavbarSocialLinks = `${myFontBold.className} btn btn-ghost px-4 tracking-widest pt-7 hover:pt-4 hover:bg-[#fbf9f9] duration-300 ease-in-out`;

const Navbar = () => {
  var useText = '';
  const pathname = usePathname().split("/")[1].toString().toUpperCase();
  const projectName = useSearchParams().get('project');

  if (pathname == '') {
    useText = '';
    NavbarCurrentPage = `${myFontBolder.className}`
  } else if (projectName === null) {
    useText = `. . . . ${pathname} . . . .`;
    NavbarCurrentPage = `${myFontBolder.className} btn btn-ghost px-4 text-[#2e2826] bg-[#fbf9f9] tracking-widest mt-11 pt-3 hover:cursor-default text-md rounded-t-sm`
  } else {
    useText = `. . . . ${projectName!.toString().toUpperCase()} . . . .`;
    useText = `. . . PROJECT / ${projectName!.toString().toUpperCase()} . . .`;
    NavbarCurrentPage = `${myFontBolder.className} btn btn-ghost px-4 text-[#2e2826] bg-[#fbf9f9] tracking-widest mt-11 pt-3 hover:cursor-default text-md rounded-t-sm`
  }
  
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
  const navbarItems = gsap.utils.toArray<HTMLElement>('.navbar__item');

  navbarItems.forEach((obj, i) => {
    gsap.fromTo(obj, { scale: 1.1 }, { scale: 1, opacity: 1, duration: 1.1, ease: 'power4.out', })
  });
  }, { scope: container })

  return (
    <header className={Header} ref={container}>
      <nav className='navbar__item opacity-0 h-full flex flex-row justify-start border-[#36261d] w-1/3'>
        <Link href='/' className={NavbarMainLink}>
          STUDIO OZMAIE
        </Link>
        <Link href='/' className={NavbarSocialLinks}>
          <IconContext.Provider value={{ color: "", className: "", size: "2.2em" }}>
            <CiInstagram></CiInstagram>
          </IconContext.Provider>
        </Link>
      </nav>
      <nav className='navbar__item opacity-0 h-full w-1/3 flex flex-row justify-center'>
        <h3 className={NavbarCurrentPage}>
          {useText}
        </h3>
      </nav>
      <nav className='navbar__item opacity-0 h-full w-1/3 flex flex-row justify-end'>
        <Link href='/projects' className={NavbarSideLinks}>
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