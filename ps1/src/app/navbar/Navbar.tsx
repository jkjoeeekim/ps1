import React from "react";
import Link from "next/link";

// ** NAVIGATION BAR CLASSES ** //
const Header = "sticky top-0 z-10 p-8 text-black bg-[#f7f4ed] place-content-between h-min max-w-screen-2xl flex m-auto";
const NavbarMainLink = "btn btn-ghost p-8 hover:bg-slate-500 border-r-slate-500 border-r-1 rounded-sm text-3xl tracking-wide";
const NavbarSideLinks = "btn btn-ghost pb-10 pt-10 pl-4 pr-4 hover:bg-slate-500 rounded-sm";

const Navbar = () => {
  return (
    <header className={Header}>
      <nav className='h-min mt-auto mb-auto'>
        <Link href='/' className={NavbarMainLink}>
          ARGHAVAN CONCEPTS
        </Link>
      </nav>
      <nav className='h-min mt-auto mb-auto'>
        <Link href='/' className={NavbarSideLinks}>
          PROJECTS
        </Link>
        <Link href='/' className={NavbarSideLinks}>
          PROCESS
        </Link>
        <Link href='/' className={NavbarSideLinks}>
          ABOUT
        </Link>
        <Link href='/' className={NavbarSideLinks}>
          CONTACT
        </Link>
      </nav>
    </header>
  )
}

export default Navbar