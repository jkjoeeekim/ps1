'use client';

import React from "react";
import Link from "next/link";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

// ** NAVIGATION BAR CLASSES ** //
const Header = "text-[#36261d] bg-[#d9c5ac] place-content-between h-min flex m-auto tracking-wide";
const NavbarMainLink = "btn btn-ghost p-6 rounded-sm tracking-wider text-2xl hover:bg-[#f7f4ed] hover:tracking-widest duration-300 ease-in-out";
const NavbarSideLinks = "btn btn-ghost pb-7 pt-7 pl-4 pr-4 rounded-sm text-sm hover:bg-[#f7f4ed] hover:tracking-widest duration-300 ease-in-out";

const Navbar = () => {

  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
  const navbarItems = gsap.utils.toArray<HTMLElement>('.navbar__item');

  navbarItems.forEach((obj, i) => {
    gsap.fromTo(obj, { scale: 1 }, { scale: 1.05, opacity: 1, duration: 3, })
  });
  }, { scope: container })

  return (
    <header className={Header} ref={container}>
      <nav className='navbar__item opacity-50 h-min mt-auto mb-auto flex flex-row justify-center border-[#36261d] w-1/3'>
        <Link href='/' className={NavbarMainLink}>
          ARGHAVAN CONCEPTS
        </Link>
      </nav>
      <nav className='navbar__item opacity-50 h-min mt-auto mb-auto w-1/3 flex flex-row justify-between mr-10'>
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