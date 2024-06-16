import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className='bg-base-300 h-20 text-black'>
      <div className='navbar flex flex-row place-content-center h-20 max-w-screen-2xl m-auto'>
        <div className='flex flex-col justify-items-center'>
          <Link href='/' className='btn btn-ghost'>
            ARGHAVAN CONCEPTS 2024
          </Link>
          <Link href='/team' className='btn btn-ghost justify-self-center'>Some legal info</Link>
          <FontAwesomeIcon icon="facebook" />       
          <Link href='/contact' className='btn btn-ghost'>Contact Us</Link>
        </div>
        <div className=''>
        </div>
      </div>
    </footer>
  )
}

export default Footer