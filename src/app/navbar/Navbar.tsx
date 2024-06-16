import React from "react";
import Link from "next/link";

// ** NAVIGATION BAR CLASSES ** //
const Header = "p-8 text-black bg-[#f7f4ed] place-content-between h-min max-w-screen-2xl flex m-auto tracking-wide";
const NavbarMainLink = "btn btn-ghost p-8  rounded-sm text-2xl hover:bg-slate-300 hover:tracking-wider duration-700 ease-in-out";
const NavbarSideLinks = "btn btn-ghost pb-10 pt-10 pl-4 pr-4  rounded-sm text-sm hover:bg-slate-300 hover:tracking-widest duration-700 ease-in-out";

const Navbar = () => {
  return (
    <header className={Header}>
      <nav className='h-min mt-auto mb-auto border-r-2 border-[#36261d] w-1/2'>
        <Link href='/' className={NavbarMainLink}>
          ARGHAVAN CONCEPTS
        </Link>
      </nav>
      <nav className='h-min mt-auto mb-auto'>
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