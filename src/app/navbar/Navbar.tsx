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

// ** NAVIGATION BAR CLASSES ** //
const Header = "text-[#36261d] bg-[#d9c5ac] place-content-between h-[80px] flex m-auto tracking-wide";
const NavbarMainLink = "btn btn-ghost py-6 px-8 tracking-wider text-2xl hover:bg-[#fbf9f9] hover:tracking-widest duration-300 ease-in-out";
const NavbarSideLinks = `${myFontBold.className} btn btn-ghost py-8 px-8 pr-8 text-sm hover:bg-[#fbf9f9] hover:tracking-widest duration-300 ease-in-out`;

const Navbar = () => {

  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
  const navbarItems = gsap.utils.toArray<HTMLElement>('.navbar__item');

  navbarItems.forEach((obj, i) => {
    gsap.fromTo(obj, { scale: 1.09 }, { scale: 1, opacity: 1, duration: 0.9, })
  });
  }, { scope: container })

  return (
    <header className={Header} ref={container}>
      <nav className='navbar__item opacity-0 h-min mt-auto mb-auto flex flex-row justify-start border-[#36261d] w-1/3'>
        <Link href='/' className={NavbarMainLink}>
          ARGHAVAN CONCEPTS
        </Link>
      </nav>
      <nav className='navbar__item opacity-0 h-min mt-auto mb-auto w-1/3 flex flex-row justify-end'>
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