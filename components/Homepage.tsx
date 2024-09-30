import React from 'react'
import Image from 'next/image'
import cat from '../images/cat.jpeg'
import Link from 'next/link'

const Homepage = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center h-screen relative left-1 top-4'>
        <div className='hidden md:flex'></div>
        <div>
            <Image src={cat} alt='' className='w-[250px] lg:w-[400px] hover:scale-105 transition rounded-full lg:rounded-lg mt-16'/>
        </div>
        <div className='mb-10 lg:mt-10 lg:mb-0'>   
            <h1 className='font-mono text-[27px] text-white m-5 hidden lg:flex'>fullStackDeveloper();</h1>
            <p className='font-mono tracking-tight text-xl sm:text-2xl lg:text-4xl text-white m-6 text-center lg:text-start'>Hola! <span className='font-extrabold text-transparent text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-[#0d9cf6] to-[#00c7bd]'>Nazish Ahmed</span> here,<br className='md:hidden'/></p>
            <p className='max-w-3xl font-mono text-md lg:text-md text-white m-4 text-center lg:text-start'>Dedicated to refining my skills and staying at the forefront of the ever-evolving development and startup landscape.</p>
            <p className='max-w-3xl font-mono text-md lg:text-md text-white m-4 text-center lg:text-start'>With a passion for building innovative solutions, I aim to leverage my expertise in full-stack development to create impactful projects.</p>
            <div className='p-3 items-center flex  lg:justify-start justify-center'>
                <Link href="mailto:realnazishahmed@gmail.com" className='font-mono text-white bg-[#2462eb] pr-5 pl-5 pt-3 pb-3 rounded-md hover:bg-[#286cffb6]'>Get in touch</Link>
             </div>
        </div>
        <div className='hidde md:flex'></div>

    </div>
  )
}

export default Homepage