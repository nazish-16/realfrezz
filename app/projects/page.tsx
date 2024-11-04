import Navbar from '@/components/Navbar'
import React from 'react'
import news from '../projects/news.webp'
import Image from 'next/image'
import Link from 'next/link'
import curtain from '../projects/curtain.webp'
import orator from '../projects/orator.png'
import sofi from '../projects/sofi.png'
import marble from '../projects/marble.webp'
import tesla from '../projects/tesla.webp'

const page = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <Navbar/>
      <div className='relative top-[1500px] md:top-[600px] lg:top-[380px] flex flex-col items-center justify-center'>
        <div>
        <p className='font-mono tracking-tight text-6xl sm:text-2xl text-white text-center lg:text-start font-extrabold'><span className='text-transparent text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-[#0d9cf6] to-[#00c7bd]'>Projects</span><br className='md:hidden' /></p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative top-10'>
          <div className='bg-[#1e2936] border border-[#969da964] rounded-lg m-5 h-[34rem] items-center flex flex-col hover:scale-105 transition-all'>
              <Image src={tesla} alt="news" className='w-[17rem] h-[17rem] rounded-lg'/>
              <h1 className='text-white p-4 text-2xl font-mono'>Shakti.io</h1>
              <p className='max-w-[20rem] p-5 text-[#969da9]'>The Shakti Fitness app website is a user-friendly platform for tracking workouts, fitness goals, and accessing health tips.</p>
              <Link target='_blank' href="https://shakti-fitness-app.vercel.app/" className='bg-[#2462eb] w-[280px] pr-20 pl-20 pt-2 pb-2 rounded-lg text-white items-center hover:bg-[#2463ebcd]'>Learn More →</Link>
          </div>
          <div className='bg-[#1e2936] border border-[#969da964] rounded-lg m-5 h-[34rem] items-center flex flex-col hover:scale-105 transition-all'>
              <Image src={curtain} alt="news" className='w-[20rem] h-[16rem] rounded-lg'/>
              <h1 className='text-white p-4 text-2xl font-mono'>Sayeedias</h1>
              <p className='max-w-[20rem] p-5 text-[#969da9]'>Sayedias Curtain Collection is a premium home decor brand specializing in luxurious, custom-made curtains.</p>
              <Link target='_blank' href="https://sayeedia.vercel.app/" className='bg-[#2462eb] w-[280px] pr-20 pl-20 pt-2 pb-2 rounded-lg text-white items-center hover:bg-[#2463ebcd]'>Learn More →</Link>
          </div>
          <div className='bg-[#1e2936] border border-[#969da964] rounded-lg m-5 h-[34rem] items-center flex flex-col hover:scale-105 transition-all'>
              <Image src={orator} alt="news" className='w-[20rem] h-[18rem] rounded-lg'/>
              <h1 className='text-white p-4 text-2xl font-mono'>Orator</h1>
              <p className='max-w-[20rem] p-5 text-[#969da9]'>Best TTS bot with custom voice , customisation, panel, logging and more.</p>
              <Link target='_blank' href="https://oratorbot.xyz/" className='bg-[#2462eb] w-[280px] pr-20 pl-20 pt-2 pb-2 rounded-lg text-white items-center hover:bg-[#2463ebcd]'>Learn More →</Link>
          </div>
          <div className='bg-[#1e2936] border border-[#969da964] rounded-lg m-5 h-[34rem] items-center flex flex-col hover:scale-105 transition-all'>
              <Image src={sofi} alt="news" className='w-[20rem] rounded-lg'/>
              <h1 className='text-white p-4 text-2xl font-mono'>Sofi web</h1>
              <p className='max-w-[20rem] p-4 text-[#969da9]'>Helped in creating the web of Sofi using react.js as an intern in the company.</p>
              <Link target='_blank' href="https://sofi.gg/" className='bg-[#2462eb] w-[280px] pr-20 pl-20 pt-2 pb-2 rounded-lg text-white items-center hover:bg-[#2463ebcd]'>Learn More →</Link>
          </div>
          <div className='bg-[#1e2936] border border-[#969da964] rounded-lg m-5 h-[34rem] items-center flex flex-col hover:scale-105 transition-all'>
              <Image src={marble} alt="news" className='w-[20rem] h-[18rem] rounded-lg'/>
              <h1 className='text-white p-4 text-2xl font-mono'>Jagsco</h1>
              <p className='max-w-[20rem] p-3 text-[#969da9]'>Jagsco Interiors specializes in luxurious marble designs, offering timeless elegance and craftsmanship for sophisticated spaces.</p>
              <Link target='_blank' href="https://jagsco.vercel.app/" className='bg-[#2462eb] w-[280px] pr-20 pl-20 pt-2 pb-2 rounded-lg text-white items-center hover:bg-[#2463ebcd]'>Learn More →</Link>
          </div>
        <div className='bg-[#1e2936] border border-[#969da964] rounded-lg m-5 h-[34rem] items-center flex flex-col hover:scale-105 transition-all'>
              <Image src={news} alt="news" className='w-[20rem] rounded-lg'/>
              <h1 className='text-white p-4 text-2xl font-mono'>Informant</h1>
              <p className='max-w-[20rem] p-5 text-[#969da9]'>A responsive news blog featuring real-time updates, categories, search functionality, and user-friendly interface.</p>
              <Link target='_blank' href="https://github.com/nazish-16/news-monkey" className='bg-[#2462eb] w-[280px] pr-20 pl-20 pt-2 pb-2 rounded-lg text-white items-center hover:bg-[#2463ebcd]'>Learn More →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page