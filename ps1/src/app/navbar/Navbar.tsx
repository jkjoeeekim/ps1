import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  var h = 'h-16';
  return (
    <div className={`sticky top-0 z-10 h-16 m-8 text-black`}>
      <div className={`navbar place-content-between h-16 max-w-screen-2xl flex m-auto`}>
        <div className=''>
          <Link href='/' className='btn btn-ghost font-bold hover:bg-slate-500 border-r-slate-500 border-r-1 rounded-sm text-3xl tracking-wide'>
            ARGHAVAN CONCEPTS
          </Link>
        </div>
        <div className=''>
          <Link href='/' className='btn btn-ghost font-bold hover:bg-slate-500 rounded-sm'>
            PROJECTS
          </Link>
          <Link href='/mission' className='btn btn-ghost font-bold hover:bg-slate-500 rounded-sm'>
            PROCESS
          </Link>
          <Link href='/feed' className='btn btn-ghost font-bold hover:bg-slate-500 rounded-sm'>
            ABOUT
          </Link>
          <Link href='/team' className='btn btn-ghost font-bold hover:bg-slate-500 rounded-sm'>
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar