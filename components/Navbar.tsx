'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons
import { motion } from 'framer-motion'; // Framer Motion

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };
  const buttonVariants = {
    open: { rotate: 180, scale: 1.1 },
    closed: { rotate: 0, scale: 1 },
  };

  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    closed: { opacity: 0, y: "-100%", transition: { duration: 0.2 } },
  };

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-[#161a2fb9]'>
      <div className='flex justify-between items-center p-3'>
        <div className='hidden lg:flex'></div>
        <Link href="/" className='text-2xl lg:text-[27px] font-bold text-gray-100 font-mono tracking-tighter relative left-5 md:left-0'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#0d9cf6] to-[#00c7bd]'>realFrezz();</span>
        </Link>
        
        <div className='lg:hidden relative right-5'>
          <motion.button
            onClick={toggleNavbar}
            className='text-white'
            animate={navOpen ? 'open' : 'closed'}
            variants={buttonVariants} // Apply animation to the button
            whileHover={{ scale: 1.2 }}
          >
            {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        <div className='hidden lg:flex'>
          <ul className='flex flex-row'>
            <li className='text-[#e7e7ea] text-[17px] hover:text-[#2462eb] ml-5 mr-5 mt-2 mb-2 font-mono'>
              <Link href="/">Home</Link>
            </li>
            <li className='text-[#e7e7ea] text-[17px] hover:text-[#2462eb] ml-5 mr-5 mt-2 mb-2 font-mono'>
              <Link href="/projects">Projects</Link>
            </li>
            <li className='text-[#e7e7ea] text-[17px] hover:text-[#2462eb] ml-5 mr-5 mt-2 mb-2 font-mono'>
              <Link href="/techstack">Tech Stack</Link>
            </li>
            <li className='text-[#e7e7ea] text-[17px] hover:text-[#2462eb] ml-5 mr-5 mt-2 mb-2 font-mono'>
              <Link href="https://www.patreon.com/user?u=60690928" target='_blank'>Buy me a coffee</Link>
            </li>
          </ul>
        </div>
        <div className='hidden lg:block'>
          <Link href="mailto:realnazishahmed@gmail.com" className='font-mono text-white bg-[#2462eb] hover:bg-[#286cffb6] pr-3 pl-3 pt-2 pb-2 rounded-md'>
          📧Contact
          </Link>
        </div>
        <div className='hidden lg:flex'></div>
      </div>

      <motion.div
        className='lg:hidden p-1'
        animate={navOpen ? 'open' : 'closed'}
        variants={menuVariants}
      >
        {navOpen && (
          <ul className='flex flex-col items-center p-2'>
            <li className='text-[#e7e7ea] text-[17px] hover:text-[#2462eb] m-3 font-mono'>
              <Link href="/">Home</Link>
            </li>
            <li className='text-[#e7e7ea] text-[17px] hover:text-[#2462eb] m-3 font-mono'>
              <Link href="/projects">Projects</Link>
            </li>
            <li className='text-[#e7e7ea] text-[17px] hover:text-[#2462eb] m-3 font-mono'>
              <Link href="/techstack">Tech Stack</Link>
            </li>
            <li className='text-[#e7e7ea] text-[17px] hover:text-[#2462eb] m-3 font-mono'>
              <Link href="https://www.patreon.com/user?u=60690928" target='_blank'>Buy me a coffee</Link>
            </li>
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default Navbar;
