import React from "react";
import Link from "next/link";

// ** NAVIGATION BAR CLASSES ** //
const Header = "p-8 text-black bg-[#d9c5ac] place-content-between h-min flex m-auto tracking-wide";
const NavbarMainLink = "btn btn-ghost p-10 rounded-sm tracking-wider text-2xl hover:bg-[#f7f4ed] hover:tracking-widest hover:text-[#36261d] duration-300 ease-in-out";
const NavbarSideLinks = "btn btn-ghost pb-10 pt-10 pl-4 pr-4 rounded-sm text-sm hover:bg-[#f7f4ed] hover:tracking-widest hover:text-[#36261d] duration-300 ease-in-out";

const Navbar = () => {
  return (
    <header className={Header}>
      <nav className='h-min mt-auto mb-auto border-[#36261d] w-1/2'>
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