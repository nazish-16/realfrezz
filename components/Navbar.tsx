'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for the hamburger menu

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className='sticky top-5 z-50 bg-[#161a2f54]'>
      <div className='flex justify-between items-center p-2'>
        <div className='hidden md:flex'></div>
        <Link href="#" className='text-2xl font-bold text-gray-200 font-mono tracking-tighter relative left-5 md:left-0'>
          Nazish Ahmed
        </Link>
        
        <div className='md:hidden relative right-5'>
          <button onClick={toggleNavbar} className='text-white'>
            {navOpen ? <FiX size={24} /> : <FiMenu size={24} />} 
          </button>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex flex-row'>
            <li className='text-gray-300 text-[17px] hover:text-[#2462eb] m-3 font-mono'>
              <Link href="#">Home</Link>
            </li>
            <li className='text-gray-300 text-[17px] hover:text-[#2462eb] m-3 font-mono'>
              <Link href="#">Projects</Link>
            </li>
            <li className='text-gray-300 text-[17px] hover:text-[#2462eb] m-3 font-mono'>
              <Link href="#">Tech Stack</Link>
            </li>
            <li className='text-gray-300 text-[17px] hover:text-[#2462eb] m-3 font-mono'>
              <Link href="#">Buy me a coffee</Link>
            </li>
          </ul>
        </div>
        <div className='hidden md:block'>
          <Link href="#" className='font-mono text-white bg-[#2462eb] pr-3 pl-3 pt-2 pb-2 rounded-md'>
            Get in touch
          </Link>
        </div>
        <div className='hidden md:flex'></div>
      </div>
      {navOpen && (
        <div className='md:hidden p-3'>
          <ul className='flex flex-col items-center'>
            <li className='text-gray-300 text-[17px] hover:text-[#2462eb] m-3 font-mono'>
              <Link href="#">Home</Link>
            </li>
            <li className='text-gray-300 text-[17px] hover:text-[#2462eb] m-3 font-mono'>
              <Link href="#">Projects</Link>
            </li>
            <li className='text-gray-300 text-[17px] hover:text-[#2462eb] m-3 font-mono'>
              <Link href="#">Tech Stack</Link>
            </li>
            <li className='text-gray-300 text-[17px] hover:text-[#2462eb] m-3 font-mono'>
              <Link href="#">Buy me a coffee</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
