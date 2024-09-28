import React from 'react'

const Testimonials = () => {
  return (
    <div className='h-screen items-center flex flex-col justify-center relative top-[700px] md:top-[90px]'>
        <div>
            <h1 className='font-extrabold font-mono text-transparent text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-[#0d9cf6] to-[#00c7bd]'>Testimonials</h1>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2'>
            <div className='max-w-xl p-10 bg-[#202b43] rounded-lg border border-[#414757] m-5 hover:scale-105 transition-all'>
                <p className='text-white p-2'>"Nazish is an exceptional web developer with a deep understanding of front-end and back-end technologies. Their ability to transform ideas into fully functional, aesthetically pleasing websites is impressive. I’ve had the pleasure of working with them on several projects, and their attention to detail, dedication to quality, and innovative approach always stand out."</p>
                <h1 className='text-[#2463ebab] p-2 text-lg'>Moahmmed Fawaaz Moin</h1>
                <h3 className='text-[#ececec] p-2'>Mechanical Design Engineer at Arif & Bintoak | LEED® Green Associate™</h3>
            </div>
            <div className='max-w-xl p-10 bg-[#202b43] rounded-lg border border-[#414757] m-5 hover:scale-105 transition-all'>
                <p className='text-white p-2'>"Nazish brings a rare combination of creativity and technical expertise to the table. From creating seamless user experiences to implementing complex functionalities, they consistently deliver high-quality work. Their passion for coding and continuous learning makes them an invaluable asset to any development team."</p>
                <h1 className='text-[#2463ebab] p-2 text-lg'>Habeeb Ahmed Khan</h1>
                <h3 className='text-[#ececec] p-2'>Senior Lead Manager - MEP & Sustainability (PMP®,LEED AP, PQP) | Building Services | Infrastructure</h3>
            </div>
            <div className='max-w-xl p-10 bg-[#202b43] rounded-lg border border-[#414757] m-5 hover:scale-105 transition-all'>
                <p className='text-white p-2'>"Working with Nazish on our website redesign was a fantastic experience. Not only are they highly skilled in web technologies, but they also bring a level of enthusiasm and innovation that sets them apart. Their ability to quickly grasp project requirements and deliver robust solutions has made a significant impact on our business."</p>
                <h1 className='text-[#2463ebab] p-2 text-lg'>Shoeb Ahmed</h1>
                <h3 className='text-[#ececec] p-2'>Senior Digital Marketing Specialist</h3>
            </div>
            <div className='max-w-xl p-10 bg-[#202b43] rounded-lg border border-[#414757] m-5 hover:scale-105 transition-all'>
                <p className='text-white p-2'>"Nazish has a remarkable ability to turn complex requirements into simple, user-friendly web solutions. Their approach to development is both strategic and creative, ensuring that the end product is not only functional but also visually appealing. It's always a pleasure to work with someone who values quality and delivers on time."</p>
                <h1 className='text-[#2463ebab] p-2 text-lg'>Moahmmed Maaz Waheed</h1>
                <h3 className='text-[#ececec] p-2'>Full Stack Intern at Masterworks™</h3>
            </div>
        </div>
    </div>
  )
}

export default Testimonials